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
            </div>
            <div "right">
            </div>
            <h1>Tilføj Land</h1>
            <div>
                <p>You entered the following</p>
                <h3>Subject</h3>
                <p>${obj.POST.subject}</p>

                <h3>Message</h3>
                <pre>${obj.POST.message}</pre>

                <h3>Name</h3>
                <p>${obj.POST.name}</p>

                <h3>Email</h3>
                <p>${obj.POST.email}</p>
            </div>
            <div>
                <h3>We will get back to you.</h3>
                <p><a href="/">Return to front page</a><p>
            </div>
            </div>`;


    return htmltop + dynamic + htmlbot;
}

exports.adminsite = adminsite;
