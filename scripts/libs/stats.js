exports.healingPower = new Stat("healingPower");

exports.maxShootSpeed = new Stat("maxShootSpeed");

exports.percent = new StatUnit("percent");

exports.whatTheFork = new StatValue({
  display(t){
    let size = 8 * 2.5;
    t.row();
    t.image(Core.atlas.find("error")).size(size * 3, size).left();
    t.add("what the fork").left().padLeft(4);
  }
});

exports.ohno = new Stat("ohno");
