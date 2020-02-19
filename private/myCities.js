/* myCities.js Home made experimental templating */
"use strict";

const cities = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <titleCities</title>
        <link rel="stylesheet" href="../public/css/style.css"/>
    </head>
    <body>
        <header>
            <h1>Kilroy's Cities</h1>
            <nav>
                <ul>
                    <li class="navb"><a href="/">Home</a></li>
                    <li class="navb"><a href="/side">Side</a></li>
                    <li class="navb"><a href="/about">About</a></li>
                    <li class="navb"><a href="/contact">Contact</a></li>
                </ul>
            </nav>
        </header>
        <div>`;

    let htmlbot = `        </div>
    </body>
</html>`;

    let dynamic = "";
    dynamic += `<p><em>${obj[0].navn}</em></p>`;


    return htmltop + dynamic + htmlbot;
}

exports.cities = cities;
