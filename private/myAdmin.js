/* myAdmin.js Home made experimental templating */
"use strict";

const adminsite = function(obj) {
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
            <div "left">
              <form action="/admin" method="POST" id="formCountry">
               <label>Navn</label><br>
               <input type="text" id="landnavn" name="navn"><br>
               <label>Kontinent</label><br>
               <input type="text" id="kontinent" name="kontinent"><br>
               <label>Areal</label><br>
               <input type="text" id="areal" name="areal"><br>
               <label>Befolkningstal</label><br>
               <input type="text" id="befolkning" name="befolkning"><br>
               <label>Styreform</label><br>
               <input type="text" id="styreform" name="styreform"><br>
               <button type="submit">Send</button>
              </form>
            </div>
            <div "right">
              <form>

              </form>
            </div>
            <h1>Tilføj Land</h1>
            </div>`;


    return htmltop + dynamic + htmlbot;
}

exports.adminsite = adminsite;
