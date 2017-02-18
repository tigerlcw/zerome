function teststate1()
{
    return this;
}

teststate1.prototype.Update = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.fillText("테스트 1",100,200);
}