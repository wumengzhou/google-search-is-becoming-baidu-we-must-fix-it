// ==UserScript==
// @name         Fix Google Search
// @namespace    https://github.com/wumengzhou/google-is-becoming-baidu
// @version      1.0.0
// @description  Fixing Google because it's becoming baidu. Code completed by Gemini.
// @author       Mengzhou Wu
// @license      WTFPL
// @match        *://*.google.com/search*
// @run-at       document-start
// @grant        none
// ==/UserScript==

(function() {
    'use strict';

    const BAN_QUERY = "-site:wuu.wikipedia.org";
    const url = new URL(window.location.href);
    let query = url.searchParams.get('q') || "";
    let modified = false;

    // 1. Check if the ban is already in the query
    if (query && !query.includes(BAN_QUERY)) {
        url.searchParams.set('q', query + " " + BAN_QUERY);
        modified = true;
    }

    // 2. Ensure udm=14 is present
    if (url.searchParams.get('udm') !== '14') {
        url.searchParams.set('udm', '14');
        modified = true;
    }

    // 3. One single redirect if anything changed
    if (modified) {
        window.location.replace(url.toString());
    }
})();
