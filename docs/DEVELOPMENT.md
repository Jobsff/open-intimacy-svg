# Open Human SVG Library - Development Document v1.0

## 1. Architecture Overview

The system uses a data-driven SVG architecture.

Pipeline:

Pose JSON
    |
    v
Skeleton Transform
    |
    v
SVG Renderer
    |
    v
SVG Output

---

## 2. Repository Structure

```
assets/
  humans/
  components/
  poses/

data/
  skeleton.json
  poses.json
  categories.json

engine/
  svg-renderer.js
  pose-loader.js
  transform.js

editor/
  index.html
  editor.js

 docs/
  index.html
```

---

## 3. Human Skeleton Model

Core joints:

- head
- neck
- chest
- waist
- pelvis
- shoulder
- elbow
- wrist
- hand
- hip
- knee
- ankle
- foot

Every pose is represented by joint transforms.

---

## 4. SVG Component System

SVG assets should be modular.

Example:

```
head.svg
arm.svg
forearm.svg
hand.svg
leg.svg
foot.svg
```

Components are assembled at runtime.

---

## 5. Pose Data Format

Example:

```json
{
  "id":"pose_001",
  "name":"basic_standing",
  "category":"foundation",
  "view":["front","side"],
  "male":{
    "joints":{}
  },
  "female":{
    "joints":{}
  }
}
```

---

## 6. Rendering Engine

Responsibilities:

- Load pose JSON
- Apply joint transforms
- Assemble SVG components
- Export SVG

---

## 7. Web Application

GitHub Pages application.

Pages:

- Home
- Human Library
- Pose Library
- Pose Viewer
- Editor
- Documentation

Technology:

- HTML
- CSS
- JavaScript
- SVG DOM

No build system required.

---

## 8. Development Roadmap

### Phase 1

Foundation:

- Repository structure
- Human SVG models
- Skeleton data

### Phase 2

Engine:

- Renderer
- Pose loader
- Viewer

### Phase 3

Content:

- 50 predefined poses
- Metadata
- Categories

### Phase 4

Editor:

- Joint manipulation
- Export

---

## 9. Development Rules

1. Final assets must be SVG.
2. Avoid raster images.
3. Keep data separate from rendering.
4. Maintain backward compatibility of pose JSON.
5. Every pose requires metadata.
