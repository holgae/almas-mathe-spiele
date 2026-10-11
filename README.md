# Almas Mathe-Spiele

Kindgerechte Rechenspiele bis 20 und bis 100 mit gemeinsamer Spielauswahl.

## Spielen

Die Datei `almas-mathe-spiele-offline.html` enthält beide Spiele. Zum Spielen herunterladen und im Browser öffnen. Auf Mobilgeräten hängt das Öffnen lokaler HTML-Dateien vom Gerät ab.

Die Web-Version liegt unter `web/`. Sie enthält eine installierbare PWA mit Offline-Speicherung. Zum lokalen Prüfen im Repository `python3 -m http.server 8000 --directory web` ausführen und `http://localhost:8000` öffnen. Für die Veröffentlichung den Inhalt von `web/` auf einem HTTPS-Webserver bereitstellen.

## Aufbau

- `web/index.html`: gemeinsame Spielauswahl
- `web/spiele/bis-20.html`: Rechnen bis 20
- `web/spiele/bis-100.html`: Rechnen bis 100
- `web/spiele.json`: Liste der Spiele
- `web/sw.js`: Offline-Speicherung
- `web/manifest.webmanifest`: Installation und App-Symbole
- `almas-mathe-spiele-offline.html`: eigenständige Ein-Datei-Version

Die Spiele sind angepasste Kopien. Die ursprünglichen HTML-Dateien wurden nicht verändert.

## Weitere Spiele ergänzen

1. Das neue HTML-Spiel unter `web/spiele/` ablegen.
2. Einen Zurück-Link zu `../index.html` ergänzen.
3. In `web/spiele.json` title, description, emoji und href ergänzen.
4. Den Dateipfad in ASSETS in `web/sw.js` aufnehmen und die Cache-Version erhöhen.
5. Die Web-Version aktualisieren. Die eigenständige HTML-Datei muss separat mit den neuen Spielinhalten aktualisiert werden.

## Veröffentlichungsstatus

Online spielen: https://holgae.github.io/almas-mathe-spiele/

GitHub Pages veröffentlicht den Inhalt von `web/` automatisch bei Änderungen auf `main`. Der Workflow liegt in `.github/workflows/pages.yml`. Die eigenständige Offline-Datei wird zusätzlich unter `/almas-mathe-spiele-offline.html` bereitgestellt.
