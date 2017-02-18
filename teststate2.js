function teststate2()
{
    this.imgTest = new Image();
    this.imgTest.src = "./testsrc/temp.png";
    return this;

}

teststate2.prototype.Update = function()
{

}

teststate2.prototype.Render = function()
{
    var theCanvas = document.getElementById("GameCanvas");
    var Context = theCanvas.getContext("2d");

    Context.drawImage(this.imgTest, 50,50);
}