# UI Pro - Premium Glassmorphism & App-Like Design Guide

This document defines the professional visual standards for building modern, high-fidelity landing pages and application interfaces.

## 1. Dark Luxury Aesthetics
- **Dark Workspace Backdrop**: `#0A0F1E` deep space background.
- **Surface Layering**: Glassmorphism via translucent slate panels: `bg-slate-900/40 backdrop-blur-md border border-slate-800/60`.
- **Card Styling**: Rounded styling (`rounded-2xl` or `rounded-xl`), matching borders, inner gradients.

## 2. Elite Typography
- Use premium displays like **Sora** or **Space Grotesk** for display headers.
- **Inter** for regular legible body fonts.
- **JetBrains Mono** or **IBM Plex Mono** for specialized metrics and system values.

## 3. High-Quality Animations
- Always leverage `motion` from `motion/react` for elegant micro-interactions, staggered entry, fade-in, and interactive slide overlays.
- Avoid jerky transitions. Use elastic or custom easing spring curves (`easeOut`, `easeInOut`).

## 4. Mobile Responsiveness & Touch Targets
- Collapsible responsive sidebar navigating seamlessly.
- Touch elements minimum height/width of `44px`.
