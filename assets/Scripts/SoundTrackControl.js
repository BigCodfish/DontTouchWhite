// Learn cc.Class:
//  - https://docs.cocos.com/creator/manual/en/scripting/class.html
// Learn Attribute:
//  - https://docs.cocos.com/creator/manual/en/scripting/reference/attributes.html
// Learn life-cycle callbacks:
//  - https://docs.cocos.com/creator/manual/en/scripting/life-cycle-callbacks.html

// AudioEngine.js

var musicid = require('MusicID');

cc.Class({
    extends: cc.Component,

    properties: {
        audio: {
            default: null,
            type: cc.AudioClip
        },
        
    },

    onLoad: function () {
        cc.game.addPersistRootNode(this.node);
    },

    play:function(){
        this.current = cc.audioEngine.play(this.audio,false,0.8);
        musicid.id[musicid.sumMusic++] = this.current;
        console.log("musicid");
        console.log(musicid.sumMusic);
        console.log(musicid.id[musicid.sumMusic]);
    },

    setLoop: function () {
        cc.audioEngine.setLoop(this.audio, true);
    },

    onDestroy: function () {
        cc.audioEngine.stop(this.current);
    },

    mute:function () {
        for(i=0;i<musicid.sumMusic;i++)
        {cc.audioEngine.setVolume(musicid.id[i],0);}
    },
    
    cancleMute:function(){
        for(i=0;i<musicid.sumMusic;i++)
        {cc.audioEngine.setVolume(musicid.id[i],0.8);}
    }
});