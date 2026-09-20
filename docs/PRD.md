# Open Human SVG Library - PRD v1.0

## 1. Product Overview

Open Human SVG Library is an open-source vector illustration system for human education. The project provides standardized human SVG models, pose data, online viewing, and editing capabilities.

The product direction is:

Human Model System + Pose Library + SVG Engine + Web Viewer + Editor

The goal is not a collection of images, but a reusable human illustration framework.

---

## 2. Product Goals

### Primary Goals

1. Build a standardized SVG human model system.
2. Support front/side/back views.
3. Support data-driven pose generation.
4. Provide a browsable online library.
5. Allow users to edit and export SVG poses.

### Non Goals

- Raster image generation
- AI generated final assets
- Unstructured image collection

---

## 3. User Scenarios

### Learner

Browse human models and predefined pose cards.

### Creator

Adjust joints and create new SVG poses.

### Developer

Use JSON pose data and SVG renderer in other projects.

---

## 4. Core Modules

## Human Model

Includes:

- Male front
- Male side
- Male back
- Female front
- Female side
- Female back

Features:

- SVG vector
- Joint based structure
- Consistent proportions

---

## Pose Library

Version 1.0 target:

50 predefined poses.

Categories:

- Foundation
- Communication
- Comfort
- Exploration

Each pose contains:

- ID
- Name
- Category
- Tags
- Views
- Joint transforms
- Preview SVG

---

## Viewer

Web functions:

- Browse humans
- Browse poses
- Preview SVG
- View metadata
- Download assets

---

## Editor

Web based SVG pose editor.

Functions:

- Load human model
- Select joints
- Rotate joints
- Save JSON
- Export SVG

---

## 5. v1.0 Acceptance Criteria

A user opening the GitHub Pages website can:

1. View human models.
2. Browse predefined poses.
3. Open pose details.
4. Preview SVG output.
5. Download SVG.
6. Modify pose data.

---

## 6. Future Extensions

- Animation support
- Community contributions
- More human body types
- Localization
- Education content expansion
