var log = function log(data) {
    "use strict";
    window.console.log(data);
};

var calculatrice = function calculatrice() {
    "use strict";
    console.log("ready !!!");
    
    var btn, saisie;
    
    btn = document.getElementById("btn");
    saisie = document.getElementById("ma_saisie");
    
    log(btn);
    log(saisie);
    
    //btn.onclick = function click() {
    //    log("click 1!!!");
    //};
    
function gererClicks() {
    log("click 2!!!");
    log(saisie.value);
    var res = add(10, 10);
    log(res);
}
    
    btn.onclick = gererClicks;
    
    //btn.addEventListener("click", gererClicks);
     function add(a, b) {
         return a + b;
     };
     
    
};