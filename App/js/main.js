let gui = require('nw.gui');
let win = gui.Window.get().evalNWBin(null, 'seule.bin');
let seule = new Seule('#app');

seule.html();


let options = {
    duration: 1500,
    delay: 1000,
    iterations: Infinity,
    direction: 'alternate',
    fill: 'both',
    id: 'myAnimation'
};
let i = 1;

seule.annimer('h1','shake',options);

setInterval(function () {
    if(i ===1){
        seule.changerTexte('h1', 'Seule');
        i = 0;
        return false;
    }
    seule.changerTexte('h1', 'Hello');
    i = 1;
}, 3000);


