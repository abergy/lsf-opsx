## Context

Die Website wird als einfache statische Seite erstellt, die auf der Domain https://lohnschweisserei-funkner.de gehostet wird. Ziel ist es, die Arbeiten eines Schweißers zu präsentieren und potenzielle Kunden anzusprechen. Die Website wird keine dynamischen Inhalte oder serverseitige Logik enthalten, um die Komplexität zu minimieren.

## Goals / Non-Goals

**Goals:**
- Bereitstellung einer statischen Website mit den definierten Bereichen: Über mich, Was bisher geschah, Was die Zukunft bringt, Impressum.
- Einfache Navigation und klare Struktur.
- Optimierung für Desktop- und mobile Geräte.

**Non-Goals:**
- Keine dynamischen Inhalte oder serverseitige Logik.
- Keine Integration von Drittanbieter-APIs oder komplexen Funktionen.

## Decisions

- **Technologie:** Die Website wird mit reinem HTML und CSS erstellt, um die Einfachheit zu gewährleisten.
- **Hosting:** Die Website wird auf einem statischen Hosting-Dienst wie GitHub Pages oder Netlify bereitgestellt.
- **Struktur:**
  - Jede Seite wird als separate HTML-Datei erstellt.
  - Bildergalerien werden mit einfachem CSS und HTML realisiert.
- **Design:** Ein minimalistisches Design wird verwendet, um die Inhalte in den Vordergrund zu stellen.

## Risks / Trade-offs

- **[Risk]** Begrenzte Skalierbarkeit bei zukünftigen Anforderungen → **Mitigation:** Die Website kann bei Bedarf auf ein CMS migriert werden.
- **[Risk]** Keine Interaktivität → **Mitigation:** Fokus auf klare und ansprechende Präsentation der Inhalte.

## Migration Plan

1. Erstellung der statischen Seiten lokal.
2. Testen der Website auf verschiedenen Geräten und Browsern.
3. Deployment auf GitHub Pages oder Netlify.
4. Überprüfung der Domain-Verknüpfung.

## Open Questions

- Gibt es spezifische Anforderungen an das Design oder die Farbpalette?