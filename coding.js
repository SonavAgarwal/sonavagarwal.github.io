var toptext = "";

var chars = [' ', 'a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var a = 0;
var b = 0;
var c = 0;

var times = 0;

var wrd = "";

var funcs = [];

function add() {
    times++;
    a = Math.floor(Math.random() * 100);
    b = Math.floor(Math.random() * 100);
    c = Math.floor(Math.random() * 100);
    wrd = ""
    for(var j = 0; j < Math.floor((Math.random() * 20) + 5); j++) {
        wrd += chars[Math.floor(Math.random() * 27)];
    }
    funcs = [`for x in range(${a}):<br>      `, `x = ${c}<br>while(x < ${a}):<br>      x += ${b}<br>      `, `print('${wrd}')<br>`, `${wrd} = ${a}<br>`, `#${wrd}<br>`];
    
    toptext += funcs[Math.floor(Math.random() * 5)]
    document.getElementById("topara").innerHTML = toptext;
    if (times >= 20) {
        clearInterval(inty);
    }
}


var inty = window.setInterval(add, 100);
