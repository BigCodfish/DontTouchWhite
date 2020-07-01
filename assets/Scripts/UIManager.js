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

        
        startUI: cc.Node,
        modeChooseUI:cc.Node,
        musicChooseUI:cc.Node,
        levelChooseUI:cc.Node,
        selfModeSetUI:cc.Node,

        makerInfoUI:cc.Node,
        settingUI:cc.Node,
        modeIntroduce:cc.Node,

        initSpeed:cc.EditBox,
        speedTime:cc.EditBox,
        speedCount:cc.EditBox,
        
        // foo: {
        //     // ATTRIBUTES:
        //     default: null,        // The default value will be used only when the component attaching
        //                           // to a node for the first time
        //     type: cc.SpriteFrame, // optional, default is typeof default
        //     serializable: true,   // optional, default is true
        // },
        // bar: {
        //     get () {
        //         return this._bar;
        //     },
        //     set (value) {
        //         this._bar = value;
        //     }
        // },
    },

    // LIFE-CYCLE CALLBACKS:

    // onLoad () {},

    start () {

    },

    gameStart()
    {
        cc.director.loadScene("GameScene")
    },

    modeChooseToMusic()
    {
        this.modeChooseUI.active=false;
        this.musicChooseUI.active=true;
        console.log(ModeID.getInstance().id)
        
    },

    //选择冒险模式->关卡选择
    modeChooseToLevelChoose()
    {
        this.modeChooseUI.active=false;
        this.levelChooseUI.active=true;
    },

    //进入极速模式
    fastMode()
    {
        ModeID.getInstance().id=3;
        this.modeChooseToMusic()
    },

    //进入冒险模式
    riskMode()
    {
        ModeID.getInstance().id=1;
        this.modeChooseToLevelChoose()
    },

    //进入自定义模式
    timeMode()
    {
        ModeID.getInstance().id=2;
        this.modeChooseToDataSet()
    },


    startToModeChoose(){
        //console.log("StartToModeChoose");
        //console.log(this.startUI.active)
        this.startUI.active=false;
        this.modeChooseUI.active=true;
    },

    ModeChooseBackToStartUI()
    {
        this.modeChooseUI.active=false;
        this.startUI.active=true;
    },

    modeChooseToDataSet()
    {
        this.modeChooseUI.active=false;
        this.selfModeSetUI.active=true;
    },

    levelChooseBackToModeChoose()
    {
        this.levelChooseUI.active=false;
        this.modeChooseUI.active=true;
    },

    dateSetBackToModeChoose()
    {
        this.selfModeSetUI.active=false;
        this.modeChooseUI.active=true;
    },


    setEditBoxToGlobal()
    {
        ModeID.getInstance().initSpeed=parseInt(this.initSpeed.string)
        ModeID.getInstance().speedTime=parseInt(this.speedTime.string)
        ModeID.getInstance().speedCount=parseInt(this.speedCount.string)
        this.selfModeSetUI.active=false;
        this.musicChooseUI.active=true;
    },

    startToMakerInfo()
    {
        this.startUI.active=false;
        this.makerInfoUI.active=true;
    },

    makerInfoToStart()
    {
        this.makerInfoUI.active=false;
        this.startUI.active=true;
    },

    startToSetting()
    {
        this.startUI.active=false;
        this.settingUI.active=true;
    },

    settingToStart()
    {
        this.settingUI.active=false;
        this.startUI.active=true;
    },

    modeChooseToIntroduce()
    {
        this.startUI.active=false;
        this.settingUI.active=true;
    },

    introduceToChoose()
    {
        this.settingUI.active=false;
        this.startUI.active=true;
    }
    // update (dt) {},
});
