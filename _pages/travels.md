---
layout: archive
title: "Travels"
permalink: /travels/
author_profile: true
---

<style>
.travel-intro{font-family:'Inter',sans-serif;font-size:.875rem;color:#6b6b68;line-height:1.75;margin-bottom:1em}
.country-count{font-family:'IBM Plex Mono',monospace;font-size:.78rem;color:#6b6b68;margin-bottom:1em;letter-spacing:.01em}
.country-count span{color:#111110;font-weight:600}
.country-pills{display:flex;flex-wrap:wrap;gap:.45em;margin-bottom:1.4em}
.country-pill{display:inline-block;padding:.2em .75em;background:transparent;color:#111110;border:1px solid #111110;font-family:'IBM Plex Mono',monospace;font-size:.7rem;font-weight:500;letter-spacing:.02em;cursor:default;transition:background .15s ease,color .15s ease}
.country-pill:hover{background:#111110;color:#f9f9f7}
#travel-map-container{position:relative;width:100%;background:#ffffff;margin-bottom:1.4em;overflow:hidden}
#travel-map svg{width:100%;height:auto;display:block;cursor:grab}
#travel-map svg:active{cursor:grabbing}
.map-loading{display:flex;align-items:center;justify-content:center;height:320px;font-family:'IBM Plex Mono',monospace;font-size:.72rem;color:#a3a39f}
.map-zoom-controls{position:absolute;bottom:12px;left:12px;display:flex;flex-direction:row;gap:0;z-index:10}
.map-zoom-btn{width:32px;height:32px;background:#fff;border:1.5px solid #999;color:#333;font-size:1.1rem;font-weight:600;cursor:pointer;display:flex;align-items:center;justify-content:center;line-height:1;user-select:none;transition:background .12s ease}
.map-zoom-btn:first-child{border-right:none}
.map-zoom-btn:hover{background:#eee}
.map-legend{display:flex;align-items:center;gap:1.4em;font-family:'IBM Plex Mono',monospace;font-size:.7rem;color:#6b6b68;padding:.6em 1em;border-top:1px solid #d4d3cb;letter-spacing:.01em}
.legend-item{display:flex;align-items:center;gap:.5em}
.legend-dot{width:8px;height:8px;border-radius:50%;flex-shrink:0}
.legend-dot.visited{background:#111110}
.legend-dot.unvisited{background:#b0bec5}
.map-tooltip{position:fixed;background:#111110;color:#f9f9f7;font-family:'IBM Plex Mono',monospace;font-size:.72rem;padding:.35em .8em;pointer-events:none;white-space:nowrap;z-index:9999;opacity:0;transition:opacity .1s ease;letter-spacing:.02em;border-radius:2px}
</style>

<p class="travel-intro">Thirteen countries across Asia and Europe — and counting.</p>

<p class="country-count"><span>13</span> countries visited</p>

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
  <div class="map-zoom-controls">
    <button class="map-zoom-btn" id="zoom-out" title="Zoom out">&minus;</button>
    <button class="map-zoom-btn" id="zoom-in" title="Zoom in">+</button>
  </div>
  <div class="map-legend">
    <div class="legend-item"><div class="legend-dot visited"></div><span>visited</span></div>
    <div class="legend-item"><div class="legend-dot unvisited"></div><span>not yet</span></div>
  </div>
</div>

<div class="map-tooltip" id="map-tooltip"></div>

<script src="/assets/js/d3.v7.min.js"></script>
<script src="/assets/js/topojson-client.min.js"></script>
<script src="/assets/js/travel-map.js"></script>
