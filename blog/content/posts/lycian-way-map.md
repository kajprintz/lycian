---
title: "Interactive Lycian Way Hiking Map"
date: 2026-02-04T00:00:00+00:00
draft: false
---

## Explore the Lycian Way

<div id="lycian-way-map"></div>

<p>Click on the markers to see photos and descriptions from various points along the Lycian Way hiking trail.</p>

<!-- Load Leaflet CSS -->
<link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" />

<!-- Load Leaflet JS -->
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js"></script>

<!-- Load our custom map script -->
<script src="/assets/js/map.js"></script>

<!-- Load our map CSS -->
<style>
{{- $mapCSS := resources.Get "css/map.css" | minify -}}
{{ $mapCSS.Content }}
</style>