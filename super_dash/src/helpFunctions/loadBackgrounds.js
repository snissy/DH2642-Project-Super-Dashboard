export function loadBackgrounds() {
    let Hoth = new Image();
    let Alderaan = new Image();
    let Tatooine = new Image();
    let YavinIV = new Image();

    Hoth.src = require('../assets/img/planet_img/Hoth.jpg').default;
    Alderaan.src = require('../assets/img/planet_img/Alderaan.jpg').default;
    Tatooine.src = require('../assets/img/planet_img/Tatooine.jpg').default;
    YavinIV.src = require('../assets/img/planet_img/YavinIV.jpg').default;
}