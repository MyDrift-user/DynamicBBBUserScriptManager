// ==UserScript==
// @name         Dynamic BBB UserScript Manager
// @namespace    BBBaden Moodle Userscripts
// @match        https://moodle.bbbaden.ch/*
// @icon         https://github.com/BBBaden-Moodle-userscripts/BBBUserScriptManager/blob/main/icons/icon.png?raw=true
// @author       MyDrift (https://github.com/MyDrift-user/)
// @note Author  PianoNic
// @downloadURL https://github.com/MyDrift-user/DynamicBBBUserScriptManager/raw/main/DynamicBBBUserScriptManager.user.js
// @updateURL   https://github.com/MyDrift-user/DynamicBBBUserScriptManager/raw/main/DynamicBBBUserScriptManager.user.js
// @version      1.0
// @description  Dynamicaly load "BBB UserScript Manager"
// @grant        GM_xmlhttpRequest
// @require      https://github.com/BBBaden-Moodle-userscripts/MoodleThemeDetector/raw/main/MoodleThemeDetector.lib.user.js
// @require      https://github.com/BBBaden-Moodle-userscripts/404PageBuilder/raw/main/404PageBuilder.lib.user.js
// ==/UserScript==

(function() {
    'use strict';

    const scriptURL = 'https://github.com/BBBaden-Moodle-userscripts/BBBUserScriptManager/raw/main/BBBUserScriptManager.user.js';

    function loadAndExecuteScript(url) {
        GM_xmlhttpRequest({
            method: 'GET',
            url: url,
            onload: function(response) {
                // Verify script integrity here
                eval(response.responseText);
            },
            onerror: function() {
                console.error('Failed to load external script');
            }
        });
    }

    loadAndExecuteScript(scriptURL);
})();
