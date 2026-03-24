---
layout: archive
title: "Travels"
permalink: /travels/
author_profile: true
---

<style>
.travel-intro {
  font-family: 'Inter', sans-serif;
  font-size: 0.875rem;
  color: #6b6b68;
  line-height: 1.75;
  margin-bottom: 1em;
}

.country-count {
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.78rem;
  color: #6b6b68;
  margin-bottom: 1em;
  letter-spacing: 0.01em;
}

.country-count span {
  color: #111110;
  font-weight: 600;
}

.country-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.45em;
  margin-bottom: 1.4em;
}

.country-pill {
  display: inline-block;
  padding: 0.2em 0.75em;
  background: transparent;
  color: #111110;
  border: 1px solid #111110;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  cursor: default;
  transition: background 0.15s ease, color 0.15s ease;
}

.country-pill:hover {
  background: #111110;
  color: #f9f9f7;
}

#travel-map-container {
  position: relative;
  width: 100%;
  background: #ffffff;
  border: 1px solid #d4d3cb;
  margin-bottom: 1.4em;
}

#travel-map svg {
  width: 100%;
  height: auto;
  display: block;
}

.map-loading {
  display: flex;
  align-items: center;
  justify-content: center;
  height: 320px;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.72rem;
  color: #a3a39f;
}

.map-legend {
  display: flex;
  align-items: center;
  gap: 1.4em;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  color: #6b6b68;
  padding: 0.6em 1em;
  border-top: 1px solid #d4d3cb;
  letter-spacing: 0.01em;
}

.legend-item {
  display: flex;
  align-items: center;
  gap: 0.5em;
}

.legend-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  flex-shrink: 0;
}

.legend-dot.visited  { background: #111110; }
.legend-dot.unvisited { background: #d4d3cb; }

.map-tooltip {
  position: fixed;
  background: #111110;
  color: #f9f9f7;
  font-family: 'IBM Plex Mono', monospace;
  font-size: 0.7rem;
  padding: 0.35em 0.8em;
  pointer-events: none;
  white-space: nowrap;
  z-index: 9999;
  opacity: 0;
  transition: opacity 0.1s ease;
  letter-spacing: 0.02em;
}
</style>

<div class="travel-intro">
  Thirteen countries across Asia and Europe — and counting.
</div>

<div class="country-count"><span>13</span> countries visited</div>

<div class="country-pills">
  <span class="country-pill">India</span>
  <span class="country-pill">Japan</span>
  <span class="country-pill">Taiwan</span>
  <span class="country-pill">Philippines</span>
  <span class="country-pill">USA</span>
  <span class="country-pill">France</span>
  <span class="country-pill">Italy</span>
  <span class="country-pill">Germany</span>
  <span class="country-pill">Czech Republic</span>
  <span class="country-pill">Netherlands</span>
  <span class="country-pill">Austria</span>
  <span class="country-pill">Vietnam</span>
  <span class="country-pill">Belgium</span>
</div>

<div id="travel-map-container">
  <div id="travel-map"><div class="map-loading">building dot map...</div></div>
  <div class="map-legend">
    <div class="legend-item">
      <div class="legend-dot visited"></div>
      <span>visited</span>
    </div>
    <div class="legend-item">
      <div class="legend-dot unvisited"></div>
      <span>not yet</span>
    </div>
  </div>
</div>

<div class="map-tooltip" id="map-tooltip"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
<script>
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

  var tooltip  = document.getElementById('map-tooltip');
  var mapDiv   = document.getElementById('travel-map');

  var W = 960, H = 480;
  var DOT_SPACING = 6;   // px between dot centres
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

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(function (world) {
      var countries = topojson.feature(world, world.objects.countries);

      /* ── 1. Build dot grid ────────────────────────────────── */
      var visitedDots   = [];
      var unvisitedDots = [];

      for (var x = DOT_SPACING / 2; x < W; x += DOT_SPACING) {
        for (var y = DOT_SPACING / 2; y < H; y += DOT_SPACING) {
          var coords = projection.invert([x, y]);
          if (!coords) continue;

          for (var i = 0; i < countries.features.length; i++) {
            var f  = countries.features[i];
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

      /* ── 2. Draw unvisited dots (light) ───────────────────── */
      svg.append('g')
        .selectAll('circle')
        .data(unvisitedDots)
        .join('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r',  DOT_R_UNVISITED)
        .attr('fill', '#d4d3cb');

      /* ── 3. Draw visited dots (dark, slightly larger) ─────── */
      svg.append('g')
        .selectAll('circle')
        .data(visitedDots)
        .join('circle')
        .attr('cx', function (d) { return d.x; })
        .attr('cy', function (d) { return d.y; })
        .attr('r',  DOT_R_VISITED)
        .attr('fill', '#111110');

      /* ── 4. Invisible hit areas for visited countries ─────── */
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
    .catch(function () {
      mapDiv.innerHTML = '<div class="map-loading">map unavailable — check connection</div>';
    });
})();
</script>
