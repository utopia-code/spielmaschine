"use strict";
var counter = 0;
var punkte = 150;

function start(){
    document.getElementById("message").style.opacity = 0;
    document.getElementById("spiel").disabled = false;
}

function gluck(num,vergleich)
{
    hochzaehlen();
    var stuck = "";
    var zufall = Math.round(Math.random() * 8 + 0.5);

    if (zufall == vergleich)
    {
        var intervalMessage = setTimeout(function(){
            document.getElementById("message").style.opacity = 1;
            document.getElementById("message").innerHTML = "Du hast gewonnen!<br><br> Klick um weiterzuspielen";
        }, 2000);

        document.getElementById("spiel").disabled = true;
        document.getElementById("klick3").disabled = true;
        document.getElementById("klick2").disabled = true;
        document.getElementById("klick1").disabled = true; 
        preis(2);
     }

    var i = 0;
    do 
    {
        stuck = stuck +  "<img class='ausblenden' src='bilder/" + i + "." + num + ".jpg'>";
        i++;

        if (i == zufall)
        {
            stuck = stuck +  "<img class='flipInX' src='bilder/" + i + "." + num + ".jpg'>";

        }
    } while(i <= 8)

    document.getElementById("container" + num + "").innerHTML = stuck;
}

function spiel() {

    hochzaehlen();
    var stuck1 = "";
    var zufall1 = Math.round(Math.random() * 8 + 0.5);

    for ( let i = 1 ; i <= 8 ; i++ )
        {
            if (zufall1 != i)
            {
                stuck1 = stuck1 + "<img class='ausblenden' src='bilder/" + i + ".1.jpg'>";
            }
            else
            {
                stuck1 = stuck1 +  "<img class='flipInX' src='bilder/" + i + ".1.jpg'>";
            }
        }
    document.getElementById("container1").innerHTML = stuck1;



    var stuck2 = "";
    var zufall2 = Math.round(Math.random() * 8 + 0.5);

    for ( let j = 1 ; j <= 8 ; j++ )
        {
            if (zufall2 != j)
            {
                stuck2 = stuck2 + "<img class='ausblenden' src='bilder/" + j + ".2.jpg'>";
            }
            else
            {
                stuck2 = stuck2 +  "<img class='flipInX' src='bilder/" + j + ".2.jpg'>";
            }
       }	
    document.getElementById("container2").innerHTML = stuck2;


    var stuck3 = "";
    var zufall3 = Math.round(Math.random() * 8 + 0.5);

    for ( let k = 1 ; k <= 8 ; k++ )
    {
        if (zufall3 != k)
        {
            stuck3 = stuck3 + "<img class='ausblenden' src='bilder/" + k + ".3.jpg'>";
        }
        else
        {
            stuck3 = stuck3 +  "<img class='flipInX' src='bilder/" + k + ".3.jpg'>";
        }

      }
    document.getElementById("container3").innerHTML = stuck3;


    if ( zufall1 == zufall2 )
    {
        document.getElementById("klick3").disabled = false;
        document.getElementById("klick3").addEventListener("click", function(){
            gluck(3,zufall1);
        });
        document.getElementById("spiel").disabled = true;
        preis(2);
      }
    if ( zufall1 == zufall3 )
    {
        document.getElementById("klick2").disabled = false;
        document.getElementById("klick2").addEventListener("click", function(){
            gluck(2,zufall1);
        });
        document.getElementById("spiel").disabled = true;
        preis(2);
     }
    if ( zufall2 == zufall3 )
    {
        document.getElementById("klick1").disabled = false;
        document.getElementById("klick1").addEventListener("click", function(){
            gluck(1,zufall2);
        });
        document.getElementById("spiel").disabled = true;
        preis(2);
    }
    if ((zufall1 == zufall2 && zufall1 == zufall3) && zufall2 == zufall3)
    {
        var intervalMessage = setTimeout(function(){
            document.getElementById("message").style.opacity = 1;
            document.getElementById("message").innerHTML = "Du hast gewonnen!<br><br> Klick um weiterzuspielen";
        }, 2000);

        document.getElementById("spiel").disabled = true;
        document.getElementById("klick3").disabled = true;
        document.getElementById("klick2").disabled = true;
        document.getElementById("klick1").disabled = true;
        preis(1);
    }
}

function hochzaehlen() {
    counter;
    counter++;

    document.getElementById("counter").innerHTML = counter;
    if (counter >= 15)
    {
        var intervalMessage = setTimeout(function(){
            document.getElementById("message").style.opacity = 1;
            document.getElementById("message").innerHTML = "Das Spiel ist beended!<br><br> Klick um ein neues Spiel zu starten";
        }, 2500);

        document.getElementById("spiel").disabled = true;
        document.getElementById("klick3").disabled = true;
        document.getElementById("klick2").disabled = true;
        document.getElementById("klick1").disabled = true;
        counter = 0;
    }
    preis(3);

}
function preis(fall){

    var wert = document.getElementById("counter").innerHTML;

    document.getElementById("praemium").innerHTML = "Punkte: " + punkte;

    switch(wert)
    {
        case "1":
            if (fall == 1)
            {
               punkte += 500;  
            }
            if (fall == 2)
            {
                punkte += 300;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "2":
            if (fall == 1)
            {
                punkte += 450;  
            }
            if (fall == 2)
            {
                punkte += 250;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "3":
            if (fall == 1)
            {
                punkte += 400;  
            }
            if (fall == 2)
            {
                punkte += 200;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "4":
            if (fall == 1)
            {
                punkte += 350;  
            }
            if (fall == 2)
            {
                punkte += 150;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "5":
            if (fall == 1)
            {
                punkte += 300;  
            }
            if (fall == 2)
            {
                punkte += 100;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "6":
            if (fall == 1)
            {
                punkte += 250;  
            }
            if (fall == 2)
            {
                punkte += 90;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "7":
            if (fall == 1)
            {
                punkte += 200;  
            }
            if (fall == 2)
            {
                punkte += 80;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "8":
            if (fall == 1)
            {
                punkte += 150;  
            }
            if (fall == 2)
            {
                punkte += 70;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "9":
            if (fall == 1)
            {
                punkte += 100;  
            }
            if (fall == 2)
            {
                punkte += 60;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "10":
            if (fall == 1)
            {
                punkte += 90;  
            }
            if (fall == 2)
            {
                punkte += 50;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "11":
            if (fall == 1)
            {
                punkte += 80;  
            }
            if (fall == 2)
            {
                punkte += 40;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "12":
            if (fall == 1)
            {
                punkte += 70;  
            }
            if (fall == 2)
            {
                punkte += 30;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "13":
            if (fall == 1)
            {
                punkte += 60;  
            }
            if (fall == 2)
            {
                punkte += 25;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "14":
            if (fall == 1)
            {
                punkte += 50;  
            }
            if (fall == 2)
            {
                punkte += 20;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;

        case "15":
            if (fall == 1)
            {
                punkte += 40;  
            }
            if (fall == 2)
            {
                punkte += 15;  
            }
            if (fall == 3)
            {
                punkte -= 10;
            }
            break;
     }
     document.getElementById("praemium").innerHTML = "Punkte: " + punkte;
}