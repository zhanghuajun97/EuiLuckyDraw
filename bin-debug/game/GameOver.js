var __reflect = (this && this.__reflect) || function (p, c, t) {
    p.__class__ = c, t ? t.push(c) : t = [c], p.__types__ = p.__types__ ? t.concat(p.__types__) : t;
};
var __extends = this && this.__extends || function __extends(t, e) { 
 function r() { 
 this.constructor = t;
}
for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i]);
r.prototype = e.prototype, t.prototype = new r();
};
//抽奖结果
var GameOver = (function (_super) {
    __extends(GameOver, _super);
    //抽奖结果
    function GameOver() {
        return _super.call(this) || this;
    }
    GameOver.prototype.partAdded = function (partName, instance) {
        _super.prototype.partAdded.call(this, partName, instance);
    };
    GameOver.prototype.childrenCreated = function () {
        _super.prototype.childrenCreated.call(this);
        this.init();
    };
    GameOver.prototype.init = function () {
        this["exml_gunImg"].source = "gun" + RotaryTable.lastNum + "_png";
        this.exml_colseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP, this.closeBtnTap, this);
    };
    //关闭按钮
    GameOver.prototype.closeBtnTap = function () {
        console.log("关闭");
        this.parent.removeChild(this);
    };
    return GameOver;
}(eui.Component));
__reflect(GameOver.prototype, "GameOver", ["eui.UIComponent", "egret.DisplayObject"]);
