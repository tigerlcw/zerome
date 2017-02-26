window.addEventListener("load",onPageLoadComplete,false);
window.addEventListener("mousedown",onMousedown, false);
window.addEventListener("moseup",onMouseup, false);

//게임의 스테이트를 불러와 사용준비 상태로 만든다.
var game_state = new teststate1();
//var game_state = new teststate2();
function onPageLoadComplete(){
    var FPS=60;//60FPS 고정

    //ZeroSound.AddSound("./testsrc/testbgm.mp3",2);
    //ZeroSound.AddSound("./testsrc/testbgm.mp3",1);
    setInterval(gameLoop, 1000 / FPS);   
    setInterval(TestZeroSound); 
}

function TestZeroSound(){
    ZeroSound.PlaySound("./testsrc/testbgm.mp3");
}

//마우스 관련 이벤트 함수가 있을 때만 호출됨. (e)

function onMousedown(e)
{
    if(game_state.onMousedown != undefined)
    game_state.onMousedown(e);
}

function onMouseup(e)
{
    if(game_state.onMouseup != undefined)
    game_state.onMouseup(e);
}

function ChangeGameState(nextGameState)
{
    // 필수 함수가 있는지 확인
    if(nextGameState.Update == undefined)
    return;
}

//키 입력 처리 부분 키 변경 시 아스키 코드 참조
function Update()
{
    game_state.Update();
    /*
    //업데이트
    if(ZeroInput.isKeyDown(65))
    {
        //A
        temp_text_x-=5;
    }

    if(ZeroInput.isKeyDown(68))
    {
        //D
        temp_text_x+=5;
    }
    if(ZeroInput.isKeyDown(87))
    {
    //W
    temp_text_y-=5;
    }

    if(ZeroInput.isKeyDown(83))
    {
        //S
        temp_text_y+=5;
    }

    
     if(ZeroInput.isKeyDown(16))
    {
        //shift - 이동속도 감소
         if(ZeroInput.isKeyDown(65))
    {
        //A
        temp_text_x-=-3;
    }

    if(ZeroInput.isKeyDown(68))
    {
        //D
        temp_text_x+=-3;
    }
    if(ZeroInput.isKeyDown(87))
    {
    //W
    temp_text_y-=-3;
    }

    if(ZeroInput.isKeyDown(83))
    {
        //S
        temp_text_y+=-3;
    }

  
    }
}

var temp_text_x=400;
var temp_text_y=300;
*/
}
function Render()
{
    //그리기
    var theCanvas=document.getElementById("GameCanvas");
    var Context=theCanvas.getContext("2d");

    Context.fillStyle="#000000";
    Context.fillRect(0,0,1280,720);
    
    //FPS표시
    Context.fillStyle="#ffffff";
    Context.font='20px 배달의민족 주아';
    Context.textBaseline="top";
    game_state.Render();

    Context.fillText("FPS:" + freamCounter.Lastfps,10,10);

/*
    Context.font='80px 배달의민족 주아';
    Context.fillText("★",temp_text_x, temp_text_y);
*/
  


}

function gameLoop(){//계속 실행해야하는 함수들

    Update();
    Render();
    freamCounter.countFream();
    
}