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

.map-country {
  fill: #f2f1ed;
  stroke: #d4d3cb;
  stroke-width: 0.4;
  transition: fill 0.12s ease;
}

.map-country.visited {
  fill: #111110;
  cursor: pointer;
}

.map-country.visited:hover {
  fill: #3a3a38;
}

.map-country:not(.visited):hover {
  fill: #e6e5e0;
}

.map-graticule {
  fill: none;
  stroke: #e8e7e3;
  stroke-width: 0.3;
}

.map-sphere {
  fill: #f9f9f7;
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
  gap: 0.45em;
}

.legend-swatch {
  width: 13px;
  height: 13px;
  flex-shrink: 0;
}

.legend-swatch.visited {
  background: #111110;
}

.legend-swatch.unvisited {
  background: #f2f1ed;
  border: 1px solid #d4d3cb;
}

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
  <div id="travel-map"><div class="map-loading">loading map...</div></div>
  <div class="map-legend">
    <div class="legend-item">
      <div class="legend-swatch visited"></div>
      <span>visited</span>
    </div>
    <div class="legend-item">
      <div class="legend-swatch unvisited"></div>
      <span>not yet</span>
    </div>
  </div>
</div>

<div class="map-tooltip" id="map-tooltip"></div>

<script src="https://d3js.org/d3.v7.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/topojson-client@3/dist/topojson-client.min.js"></script>
<script>
(function () {
  // ISO 3166-1 numeric codes for visited countries
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

  var tooltip = document.getElementById('map-tooltip');
  var mapDiv = document.getElementById('travel-map');

  var width = 960;
  var height = 480;

  var svg = d3.select('#travel-map')
    .html('')
    .append('svg')
    .attr('viewBox', '0 0 ' + width + ' ' + height)
    .attr('preserveAspectRatio', 'xMidYMid meet');

  var projection = d3.geoNaturalEarth1()
    .scale(155)
    .translate([width / 2, height / 2 + 10]);

  var path = d3.geoPath().projection(projection);

  // Ocean background
  svg.append('path')
    .datum({ type: 'Sphere' })
    .attr('class', 'map-sphere')
    .attr('d', path);

  // Graticule
  svg.append('path')
    .datum(d3.geoGraticule()())
    .attr('class', 'map-graticule')
    .attr('d', path);

  var countryGroup = svg.append('g');

  d3.json('https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json')
    .then(function (world) {
      var countries = topojson.feature(world, world.objects.countries);

      countryGroup.selectAll('path')
        .data(countries.features)
        .join('path')
        .attr('class', function (d) {
          var id = +d.id;
          return visitedIds[id] ? 'map-country visited' : 'map-country';
        })
        .attr('d', path)
        .on('mousemove', function (event, d) {
          var id = +d.id;
          var name = visitedIds[id];
          if (name) {
            tooltip.textContent = name;
            tooltip.style.opacity = '1';
            tooltip.style.left = (event.clientX + 14) + 'px';
            tooltip.style.top = (event.clientY - 10) + 'px';
          }
        })
        .on('mouseleave', function () {
          tooltip.style.opacity = '0';
        });
    })
    .catch(function () {
      mapDiv.innerHTML = '<div class="map-loading">map unavailable — check your connection</div>';
    });
})();
</script>
