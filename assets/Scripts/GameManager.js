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
    },
    
    // LIFE-CYCLE CALLBACKS:

    onLoad () {
             
    },

    start () {
        this.canvas=cc.find("Canvas")
        this.screenHeight=cc.find("Canvas").height/4
        this.cubeList=this.cubes.children;
        this.startMode()  
        
    },

    update (dt) {
        if(this.gameEnd)
        {
            console.log("游戏结束")
            this.endUI.active=true;
            this.totalScoreLabel.string=this.score
        }
        else{
            this.scoreLabel.string=this.score;
        }
    },

    //改变黑块id
    changeCubeId()
    {
        for(let i=0;i<5;i++)
        {            
            let cubeGroup = this.cubeList[i].getComponent("CubeGroup")
            if(cubeGroup.blackComp.id!=0)
            {
                cubeGroup.blackComp.id-=1;
            }
            else{
                cubeGroup.blackComp.id=4;
            }
        }
    },

    backToStartScene()
    {
        cc.director.loadScene("StartScene")
    },

    gameStop()
    {
        this.gamePause=!this.gamePause;
    },

    startMode()
    {
        if(ModeID.getInstance().id==3)this.fastMode();
    },

    fastMode()
    {
        this.gameEnd=false;
        this.gamePause=false;
        this.score=0;
        this.endUI.active=false;
        console.log("FastMode On")
        for(let i=0;i<5;i++)
        {
            let cubeGroup = this.cubeList[i].getComponent("CubeGroup")
            cubeGroup.reset(i,this.screenHeight)
            console.log(cubeGroup.blackComp.id)
            cubeGroup.blackComp.id=i;
        }
        
    }
});
