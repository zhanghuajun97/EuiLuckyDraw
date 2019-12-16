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
var Prizeitem = (function (_super) {
    __extends(Prizeitem, _super);
    function Prizeitem() {
        var _this = _super.call(this) || this;
        //把这个类和皮肤联系起来
        _this.skinName = 'resource/skins/PrizeItem.exml';
        return _this;
    }
    return Prizeitem;
}(eui.ItemRenderer));
__reflect(Prizeitem.prototype, "Prizeitem");
