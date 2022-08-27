const palette = require("libs/palette")

exports.redFlare = new Effect(40, 100, e => {
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 20);

    Draw.color(palette.red);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*90+90);
    }
});
