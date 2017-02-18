window.addEventListener("mousemove",onMouseMove,false);
window.addEventListener("keydown",onKeyDown,false);
window.addEventListener("keyup",onKeyUp,false);

function ZeroInput(){
    this.mouseX =0;
    this.mouseY =0;
    //키 입력 정보 배열
    this.isKeyPressed=[];
    return this;

    
}

//키 입력 여부
ZeroInput.prototype.isKeyDown=function(keyCode)
{
    if(this.isKeyPressed[keyCode]==true)
    return true;
    else
    return false;
}

ZeroInput.prototype.getMousePositionX=function()
{
    return this.mouseX;
}

ZeroInput.prototype.getMousePositionY=function()
{
    return this.mouseY;
}


var ZeroInput= new ZeroInput();

function onMouseMove(e)//마우스 이벤트
{
    var theCanvas=document.getElementById("GameCanvas");
    ZeroInput.mouseX=e.clientX - theCanvas.offsetLeft;
    ZeroInput.mouseY=e.clientY - theCanvas.offsetTop;
}

function onKeyDown(e){//키 이벤트 (다운)
    ZeroInput.isKeyPressed[e.keyCode]=true;
}

function onKeyUp(e){//키 이벤트 (업)
ZeroInput.isKeyPressed[e.keyCode]=false;
}


