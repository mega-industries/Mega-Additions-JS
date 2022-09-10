const palette = require("libs/palette")

exports.redFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.red);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
    }
});

exports.greenFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.green);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
    }
});

exports.blackFlare = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(palette.black);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 40 * e.fout(), i*180+90+e.rotation);
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
exports.angleBlast = new MultiEffect(angleBlastRing1, angleBlastRing2, angleBlastFlash, angleBlastMid, angleBlastSparks)

exports.magneticDrillUpdate = extend(WaveEffect, {
    sides: 0,
    colorFrom: palette.blue,
    colorTo: palette.blue,
    sizeFrom: 7,
    sizeTo: 0,
    strokeFrom: 0,
    strokeTo: 0.6,
    lifetime: 30,
});

exports.greenTurretSmoke = extend(ParticleEffect, {
    colorFrom: palette.green,
    colorTo: Color.valueOf("83f79322"),
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 47,
    length: 30,
    particles: 17,
    interp: Interp.pow5Out,
    cone: 23,
});

exports.cannonShoot = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(Pal.engine);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 70 * e.fout(), i*180+90+e.rotation);
    }
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation-30);
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation+30);
    Drawf.tri(e.x, e.y, 6, 85 * e.fout(), e.rotation);
});

exports.largeCannonShoot = new Effect(16, 100, e => {
    Lines.stroke(e.fout() * 2);

    Draw.color(Pal.lancerLaser);
    for(let i = 0; i < 2; i++){
        Drawf.tri(e.x, e.y, 6, 70 * e.fout(), i*180+90+e.rotation);
    }
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation-30);
    Drawf.tri(e.x, e.y, 6, 60 * e.fout(), e.rotation+30);
    Drawf.tri(e.x, e.y, 6, 85 * e.fout(), e.rotation);
});

exports.blackCloudOut = extend(ParticleEffect, {
    colorFrom: palette.black,
    colorTo: palette.darkGray,
    sizeFrom: 4,
    sizeTo: 0,
    lifetime: 25,
    length: 7,
    particles: 6,
});
