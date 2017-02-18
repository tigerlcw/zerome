function FreamCounter()
{
    this.Lastfps =0;
    this.freamCount = 0;
    this.LastTime=0;
    return this;
}

FreamCounter.prototype.countFream = function()
{
    this.freamCount++;
var tmpDate = new Date();

if(this.LastTime+1000<tmpDate.getTime())//프레임을 측정하기 위한 조건
{
this.Lastfps=this.freamCount;
this.freamCount=0;
this.LastTime=tmpDate.getTime();

}
delete tmpDate;//tmpDate 삭제
}
var freamCounter = new FreamCounter();