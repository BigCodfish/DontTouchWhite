// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {
        black: cc.Node,
        whitesParent: cc.Node,
        blackPos:0,
        speed:1
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {
        this.manager=cc.find("GameManager").getComponent("GameManager");
        this.blackComp=this.black.getComponent("BlackCube")
        this.cubeWidth=cc.find("Canvas").width/4;
        this.screenHeight=cc.find("Canvas").height/4
        //this.reset(0)
    },

    update(dt)
    {
        console.log(this.manager.gamePause)
        if(!this.manager.gameEnd&&!this.manager.gamePause)
        {
            this.node.y-=this.speed;
        }
        //console.log(this.node.y)
        if(this.node.y<-this.screenHeight*2)
        {
            if(this.blackComp.id==0) this.manager.gameEnd=true;
            this.reset(4,this.screenHeight)
        }
    },

    

    //调用reset时cubeGroup中的screenHeight尚未赋值
    reset(y,screenHeight){
        this.black.getComponent(cc.Button).interactable=true
        
        this.node.y = y*screenHeight-screenHeight;
        
        this.blackPos = Math.floor (Math.random()*4)//重置黑块位置
        //console.log(this.node.name+":"+this.node.y)
        let children = this.whitesParent.children
    
        let i=0;
        for(let j=0;j<4;j++){
            if(this.blackPos==j){
                this.black.x=j*this.cubeWidth-207;
                continue;
            }
            children[i++].x=j*this.cubeWidth-207;
        } 
        //console.log(this.node.y)
    
    },

    
});
