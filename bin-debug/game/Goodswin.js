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
var Goodswin = (function (_super) {
    __extends(Goodswin, _super);
    function Goodswin() {
        var _this = _super.call(this) || this;
        //把这个类和皮肤联系起来
        _this.skinName = "resource/skins/GoodsWin.exml";
        return _this;
    }
    return Goodswin;
}(eui.ItemRenderer));
__reflect(Goodswin.prototype, "Goodswin");
