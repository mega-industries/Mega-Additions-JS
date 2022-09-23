exports.healingPower = new Stat("healingPower");

exports.maxShootSpeed = new Stat("maxShootSpeed");

exports.percent = new StatUnit("percent");

exports.whatTheFork = new StatValue({
  display(t){
    let size = 8 * 2.5;
    t.row();
    t.image(Core.atlas.find("error")).size(size * 3, size).left();
    t.add("What the fork did you just forking say about me, you little biscuit? I'll have you know I graduated top of my class in the Navy Seals, and I've been involved in numerous secret raids on Al-Quaeda, and I have over 300 confirmed kills. I am trained in gorilla warfare and I'm the top sniper in the entire US armed forces. You are nothing to me but just another target. I will wipe you the fork out with precision the likes of which has never been seen before on this Earth, mark my forking words. You think you can get away with saying that silt to me over the Internet? Think again, forker. As we speak I am contacting my secret network of spies across the USA and your IP is being traced right now so you better prepare for the storm, maggot. The storm that wipes out the pathetic little thing you call your life. You're forking dead, kid. I can be anywhere, anytime, and I can kill you in over seven hundred ways, and that's just with my bare hands. Not only am I extensively trained in unarmed combat, but I have access to the entire arsenal of the United States Marine Corps and I will use it to its full extent to wipe your miserable ass off the face of the continent, you little silt. If only you could have known what unholy retribution your little \"clever\" comment was about to bring down upon you, maybe you would have held your forking tongue. But you couldn't, you didn't, and now you're paying the price, you goddamn idiot. I will silt fury all over you and you will drown in it. You're forking dead, kiddo.").left().padLeft(4);
  }
});
