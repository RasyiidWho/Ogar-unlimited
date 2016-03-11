module.exports = function (gameServer, split) {
  if (split[1] == "reset") {
    clearInterval(this.pcmd);
    console.log("[PCMD] Disabled all running pcmd instances");
    return;
  }
  var delay = parseInt(split[1]) * 1000;
  var re = parseInt(split[2]);
  var command = split[3];
  var newsplit = [];
  for (var i = 4; i < split.length; i++) {
    newsplit[i - 1] = split[i];
  }
  if (isNaN(delay)) {
    console.log("[Console] Please specify a valid Repeat amount!");
    return;
  }
  if (isNaN(re)) {
    console.log("[Console] Please specify a valid delay!");
    return;
  }
  var game = this;
  console.log("[PCMD] Request Sent!");
  this.pcmd = setInterval(function () {
    console.log("[PCMD] Running command..");
    gameServer.execommand(command, newsplit);
    r++;
    if (r > re) {
      console.log("[PCMD] Done");
      clearInterval(game.pcmd);
    }
  }, delay);


}
