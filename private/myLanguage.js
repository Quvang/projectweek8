/* myLangauge.js Home made experimental templating */
"use strict";

const language = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Language</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <header>
            <h1>Language</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/country">Country</a></li>
                    <li><a href="/city">City</a></li>
                    <li><a href="/language">Language</a></li>
                </ul>
            </nav>
        </header>
        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";
    dynamic += `<p><em>${obj[0].sprog}</em></p>`;
    dynamic += `<p><em>${obj[0].officielt}</em></p>`;


    return htmltop + dynamic + htmlbot;
}

exports.language = language;