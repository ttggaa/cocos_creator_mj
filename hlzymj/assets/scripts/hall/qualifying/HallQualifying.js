import {TSCommon} from "TSCommon";
var HallResources = require("HallResources");
var HallQualifying = cc.Class({
    extends: cc.Component,

    properties: {
        star1: {
            default: null,
            type: cc.Sprite,
        },
        star2: {
            default: null,
            type: cc.Sprite,
        },
        star3: {
            default: null,
            type: cc.Sprite,
        },
        star4: {
            default: null,
            type: cc.Sprite,
        },
        star5: {
            default: null,
            type: cc.Sprite,
        },
        cupIcon: {
            default: null,
            type: cc.Sprite,
        },
        rankLabel: {
            default: null,
            type: cc.Label,
        },
        lightActNode: {
            default: null,
            type: cc.Node,
        },
        starActNode: {
            default: null,
            type: cc.Node,
        },
        cupAtlas: {
            default: null,
            type: cc.SpriteAtlas,
        },
    },

    // LIFE-CYCLE CALLBACKS:

    onLoad: function () {
        this.showAnimation();

        this.moveCup();
    },

    clickReceiveBtn(){
        HallResources.getInstance().playButtonEffect();
    },

    showAnimation:function(){
        var self = this;
        cc.loader.loadResDir("animation/dragonBones/dh_xueliu_paiweisai", function (err, assets) {
            var playNode = self.lightActNode.getChildByName("light_act");
            playNode.active = true;
            var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
            for (var i in assets) {
                if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                    dragonDisplay.dragonAsset = assets[i];
                }
                if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                    dragonDisplay.dragonAtlasAsset = assets[i];
                }
            }
            dragonDisplay.armatureName = 'armatureName';
            dragonDisplay.playAnimation("beibaiguang");
            var callback = function () {
                dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
            }

            dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
        })


        // var whosTurnNode = this.lightActNode.getChildByName("light_act");
        // whosTurnNode.active = true;
        // var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
        // dragonDisplay.playAnimation('beibaiguang');
    },

    showStarAnimation:function(count){
        var self = this;
        if (count > 2){
            cc.loader.loadResDir("animation/dragonBones/dh_xueliu_paiweisai", function (err, assets) {
                var playNode = self.lightActNode.getChildByName("light_act_3");
                playNode.active = true;
                var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
                for (var i in assets) {
                    if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                        dragonDisplay.dragonAsset = assets[i];
                    }
                    if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                        dragonDisplay.dragonAtlasAsset = assets[i];
                    }
                }
                dragonDisplay.armatureName = 'armatureName';
                dragonDisplay.playAnimation("dengjixingxing");
                var callback = function () {
                    dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
                }
    
                dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
            })

            // var whosTurnNode = this.starActNode.getChildByName("light_act_3");
            // whosTurnNode.active = true;
            // var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
            // dragonDisplay.playAnimation('dengjixingxing');
        }
        if (count > 1){
            // var whosTurnNode = this.starActNode.getChildByName("light_act_2");
            // whosTurnNode.active = true;
            // var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
            // dragonDisplay.playAnimation('dengjixingxing');
            cc.loader.loadResDir("animation/dragonBones/dh_xueliu_paiweisai", function (err, assets) {
                var playNode = self.lightActNode.getChildByName("light_act_2");
                playNode.active = true;
                var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
                for (var i in assets) {
                    if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                        dragonDisplay.dragonAsset = assets[i];
                    }
                    if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                        dragonDisplay.dragonAtlasAsset = assets[i];
                    }
                }
                dragonDisplay.armatureName = 'armatureName';
                dragonDisplay.playAnimation("dengjixingxing");
                var callback = function () {
                    dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
                }
    
                dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
            })
        }
        if (count > 0){
            // var whosTurnNode = this.starActNode.getChildByName("light_act_1");
            // whosTurnNode.active = true;
            // var dragonDisplay = whosTurnNode.addComponent(dragonBones.ArmatureDisplay);
            // dragonDisplay.playAnimation('dengjixingxing');

            cc.loader.loadResDir("animation/dragonBones/dh_xueliu_paiweisai", function (err, assets) {
                var playNode = self.lightActNode.getChildByName("light_act_1");
                playNode.active = true;
                var dragonDisplay = playNode.addComponent(dragonBones.ArmatureDisplay);
                for (var i in assets) {
                    if (assets[i] instanceof dragonBones.DragonBonesAsset) {
                        dragonDisplay.dragonAsset = assets[i];
                    }
                    if (assets[i] instanceof dragonBones.DragonBonesAtlasAsset) {
                        dragonDisplay.dragonAtlasAsset = assets[i];
                    }
                }
                dragonDisplay.armatureName = 'armatureName';
                dragonDisplay.playAnimation("dengjixingxing");
                var callback = function () {
                    dragonDisplay.removeEventListener(dragonBones.EventObject.COMPLETE, callback, self);
                }
    
                dragonDisplay.addEventListener(dragonBones.EventObject.COMPLETE, callback, self)
            })
        }

    },

    moveCup:function(){
        var action1 = cc.moveBy(1,0,10);
        var action2 = cc.moveBy(1,0,-10);
        var seq = cc.sequence(action1,action2);
        this.cupIcon.node.runAction(cc.repeatForever(seq));
    },

    changeRank:function(rankScore){
        var self = this;
        var data = HallResources.getInstance().getRankAndStarByScore(rankScore);
        
        if (data.star > 4){this.star5.node.active = true;}
        if (data.star > 3){this.star4.node.active = true;}
        if (data.star > 2){this.star3.node.active = true;}
        if (data.star > 1){this.star2.node.active = true;}
        if (data.star > 0){this.star1.node.active = true;}
        this.rankLabel.string = data.rankName;
        this.showStarAnimation(data.star);
        self.cupIcon.spriteFrame = self.cupAtlas.getSpriteFrame("cup"+data.cup);
    },
    
    // update (dt) {},
});

module.exports = HallQualifying;