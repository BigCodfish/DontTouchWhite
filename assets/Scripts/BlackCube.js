// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        
        stopLabel:cc.Node
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.id=0;
        let canvas = cc.find("Canvas")
        this.node.width=canvas.width/4-1;
        this.node.height=canvas.height/4-1;
        this.manager=cc.find("GameManager").getComponent("GameManager")
        this.btn=this.node.getComponent(cc.Button)
        //this.parent=this.node.parent.getComponent("CubeGroup")
    },

    restartGame()
    {
        if(this.id==0)
        {
            this.stopLabel.active=false;
            this.manager.gamePause=false;    
        }
    },

    onTouch(){
        if(this.id!=0 && this.manager.gamePause) return;
        if(this.manager.gameEnd) return;
        else if(this.id==0&&this.manager.gamePause){
            this.manager.gamePause=false;
            this.stopLabel.active=false;
        }
        this.btn.interactable=false;
        console.log("Black Touch:"+this.id)
        if(this.id==0){
            this.manager.score+=1;            
            this.manager.changeCubeId()//改变id序列
            
        }
        else{
            this.manager.gameEnd=true;
        }
        //游戏结束
    }

    // update (dt) {},
});
