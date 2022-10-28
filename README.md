## HtmlViewer
A Mendix pluggable widget to display view html content.

## Features

1. Dispay html content in Mendix.
2. Use dynamic string as the html string to be shown. Support both Attribute of Entity and Text Template.

## Usage
1. Add this pluggable widget into your Mendix Project.
    1. Download the latest mpk file from [here](https://github.com/zjh1943/mendix-html-viewer/releases).
    3. Copy the mpk file to `{YourMendixProjectFolder}/widgets/`.
    4. Open your mendix project with the Mendix Studio Pro, click `Menu > App > Synchronize App Directory`.
2. Add `Html Viewer` widget into the page.

## Issues, suggestions and feature requests
[link to GitHub issues]

## Development and contribution

1. Install NPM package dependencies by using: `npm install`. If you use NPM v7.x.x, which can be checked by executing `npm -v`, execute: `npm install --legacy-peer-deps`.
1. Run `npm start` to watch for code changes. On every change:
    - the widget will be bundled;
    - the bundle will be included in a `dist` folder in the root directory of the project;
    - the bundle will be included in the `deployment` and `widgets` folder of the Mendix test project.

[specify contribution]
