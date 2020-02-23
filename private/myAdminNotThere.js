/* myAdmin.js Home made experimental templating */
"use strict";

const countryNotThere = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>City</title>
        <link rel="stylesheet" href="./style.css"/>
    </head>
    <body>
        <header>
            <h1>City</h1>
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

    let dynamic = `<div class="main">
              <h1>Landet Findes ikke</h1>
            </div>`;


    return htmltop + dynamic + htmlbot;
}

exports.admin = countryNotThere;
