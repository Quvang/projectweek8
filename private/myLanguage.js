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
                    <li><a href="/admin">Admin Area</a></li>
                </ul>
            </nav>
        </header>
        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "<table><tr><th>Sprog</th><th>Land</th><th>Procentdel</th><th>Officielt</th></tr>"; 
    for (let i= 0; i < obj.length; i++) {
    dynamic += `<tr><td>${obj[i].sprog}</td>`;
    dynamic += `<td>${obj[i].land}</td>`;
    dynamic += `<td>${obj[i].procentdel}</td>`;
    dynamic += `<td>${obj[i].officielt}</td></tr>`;
    };

    dynamic += `</table>`;

    return htmltop + dynamic + htmlbot;
}

exports.language = language;
