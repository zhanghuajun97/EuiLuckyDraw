//抽奖结果
class  GameOver extends eui.Component implements  eui.UIComponent {
	//关闭按钮
	private exml_colseBtn:eui.Button;
	//抽奖结果


	public constructor(){
		super();
		
	}
	protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);
	}
	protected childrenCreated():void{
		super.childrenCreated();

		this.init();
	}
	private init():void{
		this["exml_gunImg"].source="gun"+RotaryTable.lastNum+"_png";
		this.exml_colseBtn.addEventListener(egret.TouchEvent.TOUCH_TAP,this.closeBtnTap,this);
	}
	//关闭按钮
	private closeBtnTap():void{
		console.log("关闭");
		this.parent.removeChild(this);
		
	}
}