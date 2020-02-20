/* myCountries.js Home made experimental templating */
"use strict";

const country = function(obj) {
    let htmltop = `<!doctype html>
<html>
    <head>
        <meta charset="utf-8"/>
        <title>McKilroy's Second Test Template</title>
        <link rel="stylesheet" href="side.css"/>
    </head>
    <body>
        <header>
            <h1>Kilroy's Cities</h1>
            <nav>
                <ul>
                    <li><a href="/">Home</a></li>
                    <li><a href="/side">Side</a></li>
                    <li><a href="/about">About</a></li>
                    <li><a href="/contact">Contact</a></li>
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

exports.country = country;
