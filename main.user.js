// ==UserScript==
// @name         YouTube Embedded Without Annoying Overlays
// @namespace    simonalling.se
// @version      1.0.0
// @author       Simon Alling
// @match        *://*.youtube.com/*
// @description  Hides "More videos" etc in embedded YouTube videos.
// @downloadURL  https://github.com/SimonAlling/youtube-embedded-without-annoying-overlays/raw/master/main.user.js
// @run-at       document-start
// ==/UserScript==

(() => {
"use strict";

const ELEMENTS_TO_HIDE = [
    ".ytp-pause-overlay", // More videos
    ".ytp-player-content.ytp-iv-player-content", // Uploader avatar in bottom right corner
];

const CSS = `
${ELEMENTS_TO_HIDE.join(", ")} {
    display: none !important;
}
`;

const styleElement = document.createElement("style");
styleElement.textContent = CSS;
document.head.appendChild(styleElement);

})();
