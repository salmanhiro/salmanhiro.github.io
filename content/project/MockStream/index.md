---
title: Tidal Stream Search in DESI Legacy Survey with Particle Spray
date: 2026-06-24
tags:
  - Astrophysics
  - Galactic Dynamics
  - DESI
  - Stellar Streams
  - LMS-1
---

Stellar tidal streams — ribbons of stars stripped from globular clusters and dwarf galaxies by the Milky Way's tidal field — encode the history of the Galaxy's accretion events and the shape of its gravitational potential. This research uses the **particle-spray (Mock Stream) algorithm** to generate fast, N-body-free synthetic stream tracks and searches for their counterparts across the DESI Legacy Survey (DESI LS) footprint.

By forward-modeling stream morphology across a grid of progenitor orbits and matching mock tracks to stellar density maps built from DESI LS photometry, the pipeline recovers multiple tidal stream candidates over a wide area of sky.

<!--more-->

A key result is the orbital connection between the **LMS-1 stream** and associated globular clusters, shedding light on the origin and accretion history of this substructure. The analysis suggests that several globular clusters share a common progenitor with LMS-1, pointing to an accreted dwarf galaxy origin.

## Approach

- Generate mock stream tracks with the particle-spray method over a grid of progenitor orbital parameters and Galactic potential models.
- Build stellar density maps from DESI LS photometry using color–magnitude diagram filtering to isolate old, metal-poor populations consistent with tidal debris.
- Match mock tracks to the data and score candidates to identify statistically significant stream detections.
- Trace recovered streams back to known substructures, including LMS-1 and its associated globular cluster system.
