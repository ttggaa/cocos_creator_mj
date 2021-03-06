
var dailyGetButtonItem = cc.Class({
    extends: cc.Component,

    properties: {
        btnBG:{
            default:null,
            type:cc.Button,
        },
        dayIcon: {
            default: null,
            type: cc.Sprite,
        },
        dayCount: {
            default: null,
            type: cc.Label,
        },
        coinIcon: {
            default: null,
            type: cc.Sprite,
        },
        loginAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.btnBG.node.on('click', this.callback, this);

        this.initUI();
    },


    initUI:function(){
        var effectNode = this.node.getChildByName("get_daily_reward_btn").getChildByName("same_effect_sp");
        var rotate = cc.rotateBy(4, 360);
        var repeatForever = cc.repeatForever(rotate);
        effectNode.runAction(repeatForever);
    },

    callback: function () {
        var self = this;
        self.callbackFunc();
    },

    initData:function(data,callback){
        var self = this;
        self.callbackFunc = callback;
        this.dayCount.string = data.amount;

        this.dayIcon.spriteFrame = this.loginAtlas.getSpriteFrame("days"+data.days)

        this.coinIcon.spriteFrame = this.loginAtlas.getSpriteFrame(data.icon)
    },
    // update (dt) {},
});

module.exports = dailyGetButtonItem;