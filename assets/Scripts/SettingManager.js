// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

cc.Class({
    extends: cc.Component,

    properties: {


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



    backToStartScene()
    {
        cc.director.loadScene("StartScene")
    },
    // LIFE-CYCLE CALLBACKS:

     /*onLoad () {
         var node = cc.director.getScene().getChildByName('sound track');
     },*/

     setMute(){
       this.AudioSetMute = cc.find("sound track").getComponent("SoundTrackControl");
       //console.log(AudioSetMute);
       this.AudioSetMute.mute();
     },

     setPlay(){
        this.AudioSetMute = cc.find("sound track").getComponent("SoundTrackControl");
        //console.log(AudioSetMute);
        this.AudioSetMute.play();
    },

    cancleMute(){
        this.AudioSetMute = cc.find("sound track").getComponent("SoundTrackControl");
        //console.log(AudioSetMute);
        this.AudioSetMute.cancleMute();
    },

    start () {

    },

    // update (dt) {},
});
