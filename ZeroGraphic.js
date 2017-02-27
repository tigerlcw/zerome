function ZeroGraphic(img)
{
    this.x =0;
    this.y = 0;
    this.img = img;
    return this;

}

ZeroGraphic.prototype.Render=function(context)
{
    context.drawImage(this.img, this.x, this.y);
}

//제로그래픽 생성
var zeroimg
zeroimg = new ZeroGraphic();
//제로 그래픽 사용 방법
//zeroimg.Render(Context);