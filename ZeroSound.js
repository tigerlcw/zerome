function ZeroSound()
{
    this.isLoadComplete=false;
    this.nowResourceLoadedCount=0; //현재 로딩된 리소스 수
    this.intAllResourceCount=0; // 로딩해야 하는 총 리소스 수
    this.volume = 1;
    this.arrSounds=new Array();
    this.BackBgm = undefined;
    return this;
}
//var ZeroSound = new ZeroSound();

ZeroSound.prototype.AddSound = function( fileName,resourceCount )
{
     var SOUND_RESOURCE_MAX = 8;
  
  if( resourceCount == undefined )
    resourceCount = SOUND_RESOURCE_MAX;
  
  for( var i = 0; i < resourceCount; i++ )
  {
    var soundMusic = new Audio();
    soundMusic.src = fileName;
    soundMusic.volume = this.volume;
    soundMusic.isPlayed = false;
    soundMusic.addEventListener("canplaythrough", onLoadSoundComplete, false);
    soundMusic.addEventListener("ended", function()
    {
      if( window.chrome ) this.load();
      this.pause();
    }, false);  
    
    document.body.appendChild(soundMusic);
    
    this.arrSounds.push( { name: fileName, sound: soundMusic, isPlayed: false  } );
    this.intAllResourceCount++;
  }
  
}

ZeroSound.prototype.PlaySound = function(fileName)
{
//사운드 출력
  for( var i = 0; i < this.arrSounds.length; i++ )
  {
    if( this.arrSounds[i].name == fileName )
    
    {
      if( this.arrSounds[i].sound.ended == true || this.arrSounds[i].sound.isPlayed == false )
      {
        if( this.arrSounds[i].sound.paused )
        {
          this.arrSounds[i].sound.volume = this.volume;
          this.arrSounds[i].sound.play();
          this.arrSounds[i].isPlayed = true;
          break;
        } 
      }   
    }
  }
}

ZeroSound.prototype.PlayBackBgm=function(fileName)
{
    if(this.BackBgm)//현재 재생 중인 배경음이 존재하면
    {
        this.BackBgm.sound.pause();
        this.BackBgm.isPlayed=false;
        this.BackBgm=undefined;
    }
    for(var i =0; i<this.arrSounds.length; i++)
    {
        if(this.arrSounds[i].name == fileName)
        {
            var BackBgm = this.arrSounds[i];
            BackBgm.sound.pause(); //기존에 실행되고 있을 수도 있으니 정지
            if(window.chrome)BackBgm.sound.load();
            BackBgm.sound.loop = true; //배경음 반복
            BackBgm.isPlayed= true;
          

            this.BackBgm=BackBgm; //배경음 교체
        }
    }
}

ZeroSound.prototype.SetVolume = function(volume)
{
    //사운드 볼륨값을 저장
    this.volume = volume;

    for(var i = 0; i< this.arrSounds.length; i++)
    {
        this.arrSounds[i].sound.volume = this.volume;
    }
}

var ZeroSound = new ZeroSound();

function onLoadSoundComplete()
{
    ZeroSound.nowResourceLoadedCount++;
    //현재 로딩된 리소스 수와 총 리소스 수 비교
    if(ZeroSound.nowResourceLoadedCount <= ZeroSound.intAllResourceCount)
    {
        //모든 리소스 로딩 완료
        ZeroSound.isLoadComplete = true;
    }
}
