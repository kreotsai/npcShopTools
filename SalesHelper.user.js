// ==UserScript==
// @name         NPC Sales Helper
// @namespace    http://tampermonkey.net/
// @version      1.2
// @description  Scripts relating to shop sales! Auto fills your shop till & adds a visual total sales amount on the Sales History page.
// @author       plushies
// @include      https://neopetsclassic.com/market/till/*
// @include      https://www.neopetsclassic.com/market/till/*
// @include      https://neopetsclassic.com/market/sales/*
// @include      https://www.neopetsclassic.com/market/sales/*
// @updateURL    https://raw.githubusercontent.com/kreotsai/npcShopTools/main/SalesHelper.user.js
// @downloadURL  https://raw.githubusercontent.com/kreotsai/npcShopTools/main/SalesHelper.user.js
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @grant        none
// ==/UserScript==



(function() {
    'use strict';

    // Your code here...

//// Shop Till Auto Fill ////
var cashMoney = document.getElementsByClassName("content")[0];
cashMoney = cashMoney.getElementsByTagName("b")[1].innerText;
cashMoney = cashMoney.replace(" NP", "")

if(cashMoney != 0)
{
$('[name="amount"]').val(cashMoney);
}
/////////////////////////////


var salesHistory = document.querySelector("body > table:nth-child(5) > tbody > tr > td:nth-child(3) > div.content > table");
salesHistory = salesHistory.getElementsByTagName("tr")

var salesList = [];

for (var tr of salesHistory)
{
var td = tr.getElementsByTagName("td");
td = td[3];
    if (td != undefined)
    {
        td = td.innerText;

        if (td.includes("NP"))
            {
            td = td.replace(" NP", "");
            td = parseInt(td)
            salesList.push(td);
            }
    }

}

var historyTotal = salesList.reduce((a, b) => a + b, 0);
console.log(historyTotal);


let content = document.getElementsByTagName("p")[2];
console.log(content)

let total = document.createElement("strong");
    total.innerHTML = "<div align=\"center\"><P> Total Sales: " + historyTotal; +" NP</div>"

content.appendChild(total)

})();
