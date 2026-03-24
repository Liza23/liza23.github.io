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

  function init() {
    var tooltip = document.getElementById('map-tooltip');
    var mapDiv  = document.getElementById('travel-map');
    if (!mapDiv || !tooltip) return;

    var W = 960, H = 480;
    var DOT_SPACING = 6;
    var DOT_R_UNVISITED = 1.6;
    var DOT_R_VISITED   = 2.2;

    var svg = d3.select('#travel-map')
      .html('')
      .append('svg')
      .attr('viewBox', '0 0 ' + W + ' ' + H)
      .attr('preserveAspectRatio', 'xMidYMid meet')
      .style('background', '#ffffff');

    var projection = d3.geoNaturalEarth1()
      .scale(155)
      .translate([W / 2, H / 2 + 10]);

    var geoPath = d3.geoPath().projection(projection);

    d3.json('/assets/data/countries-110m.json')
      .then(function (world) {
        var countries = topojson.feature(world, world.objects.countries);

        /* ── Build dot grid ─────────────────────────────── */
        var visitedDots   = [];
        var unvisitedDots = [];

        for (var x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
          for (var y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
            var coords = projection.invert([x, y]);
            if (!coords) continue;

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

        /* ── Draw unvisited dots (light gray) ───────────── */
        svg.append('g')
          .selectAll('circle')
          .data(unvisitedDots)
          .join('circle')
          .attr('cx', function (d) { return d.x; })
          .attr('cy', function (d) { return d.y; })
          .attr('r', DOT_R_UNVISITED)
          .attr('fill', '#d4d3cb');

        /* ── Draw visited dots (dark, larger) ───────────── */
        svg.append('g')
          .selectAll('circle')
          .data(visitedDots)
          .join('circle')
          .attr('cx', function (d) { return d.x; })
          .attr('cy', function (d) { return d.y; })
          .attr('r', DOT_R_VISITED)
          .attr('fill', '#111110');

        /* ── Invisible hit areas for tooltip ─────────────── */
        svg.append('g')
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
