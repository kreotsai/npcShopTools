// ==UserScript==
// @name         NPC- Shop Stock Manager
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  Buttons to select sets of items to remove from your shop in bulk.
// @author       plushies
// @include      https://neopetsclassic.com/market/
// @include      https://www.neopetsclassic.com/market/
// @updateURL    https://raw.githubusercontent.com/kreotsai/npcShopTools/main/shopStockManager.user.js
// @downloadURL  https://raw.githubusercontent.com/kreotsai/npcShopTools/main/shopStockManager.user.js
// @icon         https://www.google.com/s2/favicons?domain=neopetsclassic.com
// @grant        none
// ==/UserScript==


// Container & Buttons & Functions (need functions bc using args in the event listeners isn't working?)
 var buttonsDiv = document.createElement("div");
    buttonsDiv.id = "buttonsDiv";
    buttonsDiv.style = "width:600px;";
    document.getElementsByClassName("content")[0].appendChild(buttonsDiv);

var button0 = document.createElement("BUTTON");
    button0.id = "button0"
    button0.innerHTML = "Remove Unpriced";
    button0.style.marginRight = "20px";
    buttonsDiv.appendChild(button0);
    document.getElementById("button0").addEventListener("click", removeUnpriced);

function removeUnpriced()
{
    setRM(0);
    //console.log("b0");
}

var button1 = document.createElement("BUTTON");
    button1.id = "button1"
    button1.innerHTML = "Remove Priced";
    button1.style.marginRight = "20px";
    buttonsDiv.appendChild(button1);
    document.getElementById("button1").addEventListener("click", removePriced);

function removePriced()
{
    setRM(1);
    //console.log("b1");
}


var button2 = document.createElement("BUTTON");
    button2.id = "button2"
    button2.innerHTML = "Remove All";
    button2.style.marginRight = "20px";
    buttonsDiv.appendChild(button2);
    document.getElementById("button2").addEventListener("click", removeAll);

function removeAll()
{
    setRM(2);
    //console.log("b2");
}


var button3 = document.createElement("BUTTON");
    button3.id = "button3"
    button3.innerHTML = "Remove None";
    button3.style.marginRight = "20px";
    buttonsDiv.appendChild(button3);
    document.getElementById("button3").addEventListener("click", removeNone);

function removeNone()
{
    setRM(3);
    //console.log("b3");
}


// Shop Stock
var shopTable = document.getElementsByClassName("sdbtablebody")
shopTable = shopTable[0]
//console.log(shopTable)

// Function setRM- set the Rm. Item dropdown to equal how many items are in stock for the given set of items.
function setRM(input)
{
    var toRm = input;
    //console.log(toRm);

    // On your shop stock page, get the current prices of all items.
    for (var i = 0, row; row = shopTable.rows[i]; i++)
    {
        if (row.innerHTML.match(/value="([0-9,\,]*)"/) != null)
        {
        var price = row.innerHTML.match(/value="([0-9,\,]*)"/)[1]
        }

        if (toRm == 0)
        {
            if (price == 0)
            {
                if (row.getElementsByClassName("sdbtd")[5] != undefined)
                {
                var rm = row.getElementsByClassName("sdbtd")[5];

                rm = rm.getElementsByTagName("select")[0]
                rm.value = rm.options[rm.options.length - 1].value;
                //console.log(rm)
                }
            }
        }

        if (toRm == 1)
        {
            if (price != 0)
            {
                if (row.getElementsByClassName("sdbtd")[5] != undefined)
                {
                rm = row.getElementsByClassName("sdbtd")[5];

                rm = rm.getElementsByTagName("select")[0]
                rm.value = rm.options[rm.options.length - 1].value;
                //console.log(rm)
                }
            }
        }

        if (toRm == 2)
        {
                if (row.getElementsByClassName("sdbtd")[5] != undefined)
                {
                rm = row.getElementsByClassName("sdbtd")[5];

                rm = rm.getElementsByTagName("select")[0]
                rm.value = rm.options[rm.options.length - 1].value;
                //console.log(rm)
                }
        }

        if (toRm == 3)
        {
                if (row.getElementsByClassName("sdbtd")[5] != undefined)
                {
                rm = row.getElementsByClassName("sdbtd")[5];

                rm = rm.getElementsByTagName("select")[0]
                rm.value = 0
                }
        }
    }
}
