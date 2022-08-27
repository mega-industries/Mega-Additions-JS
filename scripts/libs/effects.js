const palette = require("libs/palette")

exports.redFlare = new Effect(40, 100, e => {
    Lines.stroke(e.fout() * 2);
    Lines.circle(e.x, e.y, 4 + e.finpow() * 20);

    Draw.color(palette.red);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*90+90);
    }
});

const angleBlastRing1 = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 30,
    sizeTo: 30,
    strokeFrom: 2,
    strokeTo: 0,
    lifetime: 70,
});
const angleBlastRing2 = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 60,
    sizeTo: 60,
    strokeFrom: 2,
    strokeTo: 0,
    lifetime: 70,
});
const angleBlastFlash = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 60,
    sizeTo: 60,
    lifetime: 3,
    length: 0,
    particles: 1,
});
const angleBlastMid = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 70,
    length: 0,
    particles: 1,
});
const angleBlastSparks = extend(ParticleEffect, {
    colorFrom: palette.red,
    colorTo: palette.red,
    line: true,
    lenFrom: 6.5,
    lenTo: 0,
    srokeFrom: 3,
    strokeTo: 1.35,
    interp: Interp.pow5Out,
    lifetime: 32,
    length: 83,
    particles: 12,
});
exports.angleBlast = new MultiEffct(angleBlastRing1, angleBlastRing2, angleBlastFlash, angleBlastMid, angleBlastSparks)
