(function () {
  var visitedIds = {
    356: 'India',
    392: 'Japan',
    158: 'Taiwan',
    608: 'Philippines',
    840: 'USA',
    250: 'France',
    380: 'Italy',
    276: 'Germany',
    203: 'Czech Republic',
    528: 'Netherlands',
    40:  'Austria',
    704: 'Vietnam',
    56:  'Belgium'
  };

  // [lon, lat] for each city/stop
  var places = {
    delhi:      [77.21, 28.61],
    pittsburgh: [-79.99, 40.44],
    tokyo:      [139.69, 35.69],
    manila:     [120.98, 14.60],
    rome:       [12.50, 41.90],
    vienna:     [16.37, 48.21],
    prague:     [14.42, 50.08],
    berlin:     [13.40, 52.52],
    amsterdam:  [4.90, 52.37],
    brussels:   [4.35, 50.85],
    paris:      [2.35, 48.86],
    taipei:     [121.56, 25.03],
    hanoi:      [105.85, 21.03],
    dc:         [-77.04, 38.90],
    nyc:        [-74.01, 40.71]
  };

  var route = [
    { from: places.delhi,      to: places.pittsburgh, label: 'Pittsburgh' },
    { from: places.pittsburgh, to: places.delhi,      label: 'India' },
    { from: places.delhi,      to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.manila,     label: 'Philippines' },
    { from: places.manila,     to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.delhi,      label: 'India' },
    { from: places.delhi,      to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.rome,       label: 'Italy' },
    { from: places.rome,       to: places.vienna,     label: 'Austria' },
    { from: places.vienna,     to: places.prague,     label: 'Czech Republic' },
    { from: places.prague,     to: places.berlin,     label: 'Germany' },
    { from: places.berlin,     to: places.amsterdam,  label: 'Netherlands' },
    { from: places.amsterdam,  to: places.brussels,   label: 'Belgium' },
    { from: places.brussels,   to: places.paris,      label: 'France' },
    { from: places.paris,      to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.taipei,     label: 'Taiwan' },
    { from: places.taipei,     to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.hanoi,      label: 'Vietnam' },
    { from: places.hanoi,      to: places.tokyo,      label: 'Tokyo' },
    { from: places.tokyo,      to: places.pittsburgh, label: 'Pittsburgh' },
    { from: places.pittsburgh, to: places.dc,         label: 'DC' },
    { from: places.dc,         to: places.nyc,        label: 'New York' }
  ];

  var COLOR_UNVISITED = '#b0bec5';
  var COLOR_VISITED   = '#111110';
  var DOT_SPACING     = 5;
  var DOT_R           = 1.2;
  var DOT_R_VISITED   = 1.5;
  var ARC_STEPS       = 50;
  var LEG_DURATION    = 800;
  var LEG_PAUSE       = 250;

  function buildArcPath(from, to, proj) {
    var interp = d3.geoInterpolate(from, to);
    var pts = [];
    for (var t = 0; t <= 1; t += 1 / ARC_STEPS) {
      var geo = interp(t);
      var px = proj(geo);
      if (px) pts.push(px);
    }
    if (pts.length < 2) return null;
    var d = 'M' + pts[0][0] + ',' + pts[0][1];
    for (var i = 1; i < pts.length; i++) {
      d += 'L' + pts[i][0] + ',' + pts[i][1];
    }
    return d;
  }

  function init() {
    var tooltip = document.getElementById('map-tooltip');
    var mapDiv  = document.getElementById('travel-map');
    if (!mapDiv || !tooltip) return;

    var W = 960, H = 500;

    var svg = d3.select('#travel-map')
      .html('')
      .append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('background', '#ffffff');

    var g = svg.append('g');

    var projection = d3.geoEquirectangular()
      .scale(150)
      .translate([W / 2, H / 2 + 20]);

    var geoPath = d3.geoPath().projection(projection);

    var zoom = d3.zoom()
      .scaleExtent([1, 8])
      .translateExtent([[0, 0], [W, H]])
      .on('zoom', function (event) {
        g.attr('transform', event.transform);
      });

    svg.call(zoom);

    var zoomIn  = document.getElementById('zoom-in');
    var zoomOut = document.getElementById('zoom-out');
    if (zoomIn) {
      zoomIn.addEventListener('click', function () {
        svg.transition().duration(300).call(zoom.scaleBy, 1.5);
      });
    }
    if (zoomOut) {
      zoomOut.addEventListener('click', function () {
        svg.transition().duration(300).call(zoom.scaleBy, 1 / 1.5);
      });
    }

    d3.json('/assets/data/countries-110m.json')
      .then(function (world) {
        var countries = topojson.feature(world, world.objects.countries);
        var features = countries.features;
        var boxes = features.map(function(f) {
          var b = geoPath.bounds(f);
          return { minX: b[0][0], minY: b[0][1], maxX: b[1][0], maxY: b[1][1] };
        });

        var visitedDots   = [];
        var unvisitedDots = [];

        for (var x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
          for (var y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
            var coords = projection.invert([x, y]);
            if (!coords || isNaN(coords[0]) || isNaN(coords[1])) continue;

            for (var i = 0; i < features.length; i++) {
              var bx = boxes[i];
              if (x < bx.minX || x > bx.maxX || y < bx.minY || y > bx.maxY) continue;

              var f = features[i];
              if (d3.geoContains(f, coords)) {
                var id = +f.id;
                if (visitedIds[id]) {
                  visitedDots.push({ x: x, y: y, name: visitedIds[id] });
                } else {
                  unvisitedDots.push({ x: x, y: y });
                }
                break;
              }
            }
          }
        }

        g.append('g')
          .selectAll('circle')
          .data(unvisitedDots)
          .join('circle')
          .attr('cx', function (d) { return d.x; })
          .attr('cy', function (d) { return d.y; })
          .attr('r', DOT_R)
          .attr('fill', COLOR_UNVISITED);

        g.append('g')
          .selectAll('circle')
          .data(visitedDots)
          .join('circle')
          .attr('cx', function (d) { return d.x; })
          .attr('cy', function (d) { return d.y; })
          .attr('r', DOT_R_VISITED)
          .attr('fill', COLOR_VISITED);

        g.append('g')
          .selectAll('path')
          .data(features.filter(function (d) {
            return !!visitedIds[+d.id];
          }))
          .join('path')
          .attr('d', geoPath)
          .attr('fill', 'transparent')
          .attr('stroke', 'none')
          .style('cursor', 'pointer')
          .on('mousemove', function (event, d) {
            var name = visitedIds[+d.id];
            tooltip.textContent = name;
            tooltip.style.opacity = '1';
            tooltip.style.left = (event.clientX + 14) + 'px';
            tooltip.style.top  = (event.clientY - 10) + 'px';
          })
          .on('mouseleave', function () {
            tooltip.style.opacity = '0';
          });

        // --- Route animation layer ---
        var arcGroup = g.append('g').attr('class', 'route-arcs');

        var plane = g.append('text')
          .attr('font-size', '10px')
          .attr('text-anchor', 'middle')
          .attr('dominant-baseline', 'central')
          .text('✈')
          .style('opacity', 0);

        var labelEl = g.append('text')
          .attr('font-family', "'IBM Plex Mono', monospace")
          .attr('font-size', '7px')
          .attr('font-weight', '600')
          .attr('fill', '#111110')
          .attr('text-anchor', 'middle')
          .style('opacity', 0);

        function clearAnimation() {
          arcGroup.selectAll('*').remove();
          plane.style('opacity', 0);
          labelEl.style('opacity', 0);
        }

        function animateLeg(idx, cb) {
          if (idx >= route.length) { cb(); return; }
          var leg = route[idx];
          var pathD = buildArcPath(leg.from, leg.to, projection);
          if (!pathD) { animateLeg(idx + 1, cb); return; }

          var arcPath = arcGroup.append('path')
            .attr('d', pathD)
            .attr('fill', 'none')
            .attr('stroke', '#111110')
            .attr('stroke-width', 0.8)
            .attr('stroke-dasharray', '3,2')
            .attr('opacity', 0.35);

          var pathNode = arcPath.node();
          var totalLen = pathNode.getTotalLength();

          arcPath
            .attr('stroke-dashoffset', totalLen)
            .attr('stroke-dasharray', totalLen + ',' + totalLen)
            .transition()
            .duration(LEG_DURATION)
            .ease(d3.easeLinear)
            .attr('stroke-dashoffset', 0)
            .on('end', function () {
              arcPath.attr('stroke-dasharray', '3,2');
            });

          var dest = projection(leg.to);
          plane.style('opacity', 1);

          var elapsed = 0;
          var interval = 16;
          var timer = d3.interval(function () {
            elapsed += interval;
            var t = Math.min(1, elapsed / LEG_DURATION);
            var pt = pathNode.getPointAtLength(t * totalLen);
            plane.attr('x', pt.x).attr('y', pt.y);

            if (t < 1) {
              var pt2 = pathNode.getPointAtLength(Math.min(1, t + 0.02) * totalLen);
              var angle = Math.atan2(pt2.y - pt.y, pt2.x - pt.x) * 180 / Math.PI;
              plane.attr('transform', 'rotate(' + angle + ',' + pt.x + ',' + pt.y + ')');
            }

            if (t >= 1) {
              timer.stop();
              plane.attr('x', dest[0]).attr('y', dest[1]);

              labelEl
                .attr('x', dest[0])
                .attr('y', dest[1] - 10)
                .text(leg.label)
                .style('opacity', 1)
                .transition()
                .duration(LEG_PAUSE + 200)
                .style('opacity', 0)
                .on('end', function () {
                  animateLeg(idx + 1, cb);
                });
            }
          }, interval);
        }

        function runAnimation() {
          clearAnimation();
          var replayBtn = document.getElementById('route-replay');
          if (replayBtn) replayBtn.style.display = 'none';

          // Start at origin
          var startPt = projection(places.delhi);
          plane.attr('x', startPt[0]).attr('y', startPt[1]).style('opacity', 1);
          labelEl
            .attr('x', startPt[0]).attr('y', startPt[1] - 10)
            .text('India')
            .style('opacity', 1)
            .transition().duration(600).style('opacity', 0)
            .on('end', function () {
              animateLeg(0, function () {
                plane.transition().duration(400).style('opacity', 0);
                if (replayBtn) replayBtn.style.display = 'flex';
              });
            });
        }

        // Auto-play after a short delay
        setTimeout(runAnimation, 800);

        // Replay button
        var replayBtn = document.getElementById('route-replay');
        if (replayBtn) {
          replayBtn.addEventListener('click', runAnimation);
        }
      })
      .catch(function (err) {
        console.error('travel-map: failed to load map data', err);
        mapDiv.innerHTML = '<div class="map-loading">map data unavailable</div>';
      });
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
