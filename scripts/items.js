const palette = require("libs/palette");
const stats = require("libs/stats");

const warpAlloy = extend(Item, "warp-alloy", {
  cost: 1.9,
  setStats(){
	this.super$setStats();
    	this.stats.addPercent(stats.healingPower, 0.14);
  },
});

const laerite = extend(Liquid, "laerite", {
  setStats(){
	  
	  this.super$setStats();
          this.stats.addPercent(Stat.radioactivity, 0.07);
	  this.stats.addPercent(stats.healingPower, 0.09);
  },
});
