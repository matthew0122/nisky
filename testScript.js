// ==UserScript==
// @name         Plot Plotter
// @namespace    http://tampermonkey.net/
// @version      2025-03-07
// @description  try to take over the world!
// @author       You
// @match        https://tagpro.koalabeast.com/broken
// @grant        none
// ==/UserScript==

(function() {
    'use strict';
    document.body.innerHTML = "";

    const img = document.createElement("img");
    img.crossOrigin = "Anonymous"; // Allows cross-origin access

    img.src = "https://raw.githubusercontent.com/matthew0122/nisky/refs/heads/main/L.png"; // Set the image source

    document.body.appendChild(img);
    const input = document.createElement("input");

    input.type = "text";  // Change to "password", "number", etc., if needed
    input.placeholder = "Enter plot here";
    input.id = "plotInput";
    document.body.appendChild(input);

    const button = document.createElement("button");
    document.body.appendChild(button);
    button.addEventListener("click", () => {

    });

    let cnt = 1;
    const locs = [];
    img.addEventListener("click", (event) => {
        //console.log('x: ' + event.pageX + ' y: ' + event.pageY);
        locs.push({plot:cnt,x:event.pageX, y:event.pageY});
        console.log(JSON.stringify(locs));
        cnt++;
    });
    const plotLocs = [{"plot":1,"x":536,"y":104},{"plot":2,"x":596,"y":96},{"plot":3,"x":657,"y":91},{"plot":4,"x":709,"y":89},{"plot":5,"x":760,"y":97},{"plot":6,"x":475,"y":141},{"plot":7,"x":528,"y":131},{"plot":8,"x":604,"y":132},{"plot":9,"x":656,"y":133},{"plot":10,"x":701,"y":131},{"plot":11,"x":764,"y":137},{"plot":12,"x":488,"y":178},{"plot":13,"x":542,"y":173},{"plot":14,"x":580,"y":171},{"plot":15,"x":648,"y":176},{"plot":16,"x":704,"y":177},{"plot":17,"x":761,"y":175},{"plot":18,"x":820,"y":174}];
})();
