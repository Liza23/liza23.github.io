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

  var COLOR_UNVISITED = '#b0bec5';
  var COLOR_VISITED   = '#111110';
  var DOT_SPACING     = 5;
  var DOT_R           = 1.2;
  var DOT_R_VISITED   = 1.5;

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

        var visitedDots   = [];
        var unvisitedDots = [];

        for (var x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
          for (var y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
            var coords = projection.invert([x, y]);
            if (!coords || isNaN(coords[0]) || isNaN(coords[1])) continue;

            for (var i = 0; i < countries.features.length; i++) {
              var f = countries.features[i];
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
          .data(countries.features.filter(function (d) {
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
