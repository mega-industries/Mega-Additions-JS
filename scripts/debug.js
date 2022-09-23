const bullets = require("libs/bullets");
const stats = require("libs/stats");

const testBlock = extend(PowerTurret, "test", {
  shootType: Bullets.placeholder,
});

const anuken = extend(PowerTurret, "op-anuken", {
  setStats(){
    this.super$setStats()
    this.stats.remove(Stat.ammo)
    this.stats.add(Stat.ammo, stats.whatTheFork)
  },
  setBars(){
		this.super$setBars();
		this.addBar("shootSpeed", entity => new Bar(
			() => Core.bundle.get("stat.mega-adds.ohno") + " " + this.power.status, 
			() => Color.valueOf("ff7272").shiftHue(Time.time * 2.2), 
			() => 1
		));
	},
  shootType: bullets.FORK_YOU,
  range: 1000,
  health: 999999999,
});
