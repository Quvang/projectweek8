/* myCountries.js Home made experimental templating */
"use strict";

const country = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>Country</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <header>
            <h1>Country</h1>
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

    let dynamic = "<table><tr><th>Navn</th><th>Kontinent</th><th>Areal</th><th>Befolkningstal</th><th>Styreform</th></tr>"; 
    for (let i= 0; i < obj.length; i++) {
    dynamic += `<tr><td>${obj[i].navn}</td>`;
    dynamic += `<td>${obj[i].kontinent}</td>`;
    dynamic += `<td>${obj[i].areal}</td>`;
    dynamic += `<td>${obj[i].befolkningstal}</td>`;
    dynamic += `<td>${obj[i].styreform}</td></tr>`;
};

dynamic += `</table>`;

    return htmltop + dynamic + htmlbot;
}

exports.country = country;
