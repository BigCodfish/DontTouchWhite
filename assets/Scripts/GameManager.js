// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html
var ModeID=require('ModeID');

cc.Class({
    extends: cc.Component,

    properties: {
        gameEnd:false,   
        gamePause:false,
        prefab:cc.Prefab,
        cubes:cc.Node,
        endUI:cc.Node,
        score:0,
        scoreLabel:cc.Label,
        totalScoreLabel:cc.Label,
        speedLevel:30,   //单次加速量
        currenSpeed:0,   //当前速度
        speedTime:10,    //加速频率

        //闯关模式分数
        level1:100,
        level2:120,
        level3:150,
        level4:170,
        level5:200
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
    },

    start () {
        this.canvas=cc.find("Canvas")
        this.screenHeight=cc.find("Canvas").height/4
        this.cubeList=this.cubes.children;
        this.modeId=ModeID.getInstance().id;
        this.cubeComponents=[]
        for(let i=0;i<6;i++)
        {
            let cubeGroup = this.cubeList[i].getComponent("CubeGroup")
            this.cubeComponents[i]=cubeGroup;
        }
        
        this.startMode()  
    },

    update (dt) {
        if(this.gameEnd)
        {
            //console.log("游戏结束")
            this.endUI.active=true;
            this.totalScoreLabel.string=this.score
        }
        else{
            this.scoreLabel.string=this.score;
        }

        //加速
        if(~~(this.score/this.speedTime) > this.currenSpeed/this.speedLevel){
            this.currenSpeed=~~(this.score/this.speedTime)*this.speedLevel;
            this.setSpeed(this.currenSpeed)
        }
    },

    //改变黑块id
    changeCubeId()
    {
        for(let i=0;i<6;i++)
        {            
            if(this.cubeComponents[i].blackComp.id!=0)
            {
                //console.log(this.cubeComponents[i].blackComp.id)
                this.cubeComponents[i].blackComp.id-=1;
            }
            else{
                this.cubeComponents[i].blackComp.id=5;
            }
        }
    },

    //回到开始界面
    backToStartScene()
    {
        cc.director.loadScene("StartScene")
    },

    gameStop()
    {
        this.gamePause=true
        for(let i=0;i<6;i++)
        {            
            if(this.cubeComponents[i].blackComp.id==0)
            {
                this.cubeComponents[i].blackComp.stopLabel.active=true;
            }
        }
    },

    //游戏开始，根据模式载入
    startMode()
    {
        if(this.modeId==3){
            this.fastMode();
            
            
        }
        else if(this.modeId==1)
        {
            this.speedLevel=30;
            this.currenSpeed=30;
        }
        else if(this.modeId==2)
        {
            this.speedLevel=30;
            this.currenSpeed=30;
        }
    },

    //为所有cube设置速度
    setSpeed(speed)
    {
        for(let i=0;i<6;i++)
        {
            this.cubeComponents[i].speed=speed;
        }
        console.log("setSpeed:"+speed)
    },

    getHighest()
    {
        
        //console.log(this.highest)
    },

    fastMode()
    {
        this.speedLevel=80;
        this.currenSpeed=80;
        this.speedTime=5;
        this.gameEnd=false;
        this.gamePause=false;
        this.score=0;
        this.endUI.active=false;
        //console.log("FastMode On")
        for(let i=0;i<6;i++)
        {
            this.cubeComponents[i].reset(i,this.screenHeight)
            this.cubeComponents[i].blackComp.id=i;
        }
        this.setSpeed(this.currenSpeed)
        
    }


});
