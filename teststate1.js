function teststate1()
{
    return this;
}

teststate1.prototype.Update = function(){
if(ZeroInput.isKeyDown(13))
game_state = new teststate2();

}

teststate1.prototype.Render = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillText("테스트 1",300,400);
}