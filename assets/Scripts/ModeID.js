// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

//游戏模式，1：无尽模式，2：计时模式，3：极速模式
var ModeID=cc.Class({
    extends: cc.Component,
 
    properties: {
              
    },
    statics:{
        self:null,
         getInstance:function()
         {
                if(ModeID.self==null)
                {
                    var node=new cc.Node("GameManager");
                    ModeID.self=node.addComponent(ModeID);
                }
                return ModeID.self;
         } 
    },
 
 ctor() //构造函数
    {
        this.id=3;
        ModeID.self=this;
    },
});
