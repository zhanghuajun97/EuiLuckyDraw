class RotaryTable extends eui.Component implements  eui.UIComponent {

	//抽一次按钮
	private start:eui.Button;
	//计时器
	private time:egret.Timer;
	//当前位置
	private num:number=1;
	//可否可以点击
	private playBoo:boolean=true;
	//预览物品列表
	private list_prizeItem:eui.List;
	//获奖物品列表
	private list_itemWin:eui.List;
	//奖品数据数组
	private itemArr:any[];
	//eui数据
	private euiArr2:eui.ArrayCollection;
	//抽奖结果
	static lastNum:number;
	//状态机 0：加速 1：加速 2：减速
	private state:number=0;
	//加速持续回合
	private ct:number=30;
	//实例化结束对象
	public s:GameOver;

	public constructor() {
		super();
	}

	protected partAdded(partName:string,instance:any):void{
		super.partAdded(partName,instance);
	}

	protected childrenCreated():void{
		super.childrenCreated();

		//奖品预览数据
		let dataArr:any[]=[
			{image:'resource/assets/image/gun1.png',name:'王者之怒'},
			{image:'resource/assets/image/gun2.png',name:'玄金骑士'},
			{image:'resource/assets/image/gun3.png',name:'AK-47火麒麟'},
			{image:'resource/assets/image/gun4.png',name:'火麒麟-AG皮肤'},
			{image:'resource/assets/image/gun5.png',name:'AK-12天启'},
			{image:'resource/assets/image/gun6.png',name:'龙啸'},
			{image:'resource/assets/image/gun7.png',name:'9A91-赤血龙魂'},
			{image:'resource/assets/image/gun8.png',name:'烟雾保护头盔'},
			{image:'resource/assets/image/gun9.png',name:'步枪弹夹'},
			{image:'resource/assets/image/gun10.png',name:'交易专用钥匙'},
			{image:'resource/assets/image/gun11.png',name:'9A91-赤血龙魂'},
			{image:'resource/assets/image/gun12.png',name:'复仇道具卡'},
			{image:'resource/assets/image/gun13.png',name:'QBZ03-金色蔷薇'},
			{image:'resource/assets/image/gun14.png',name:'Barrett-金色蔷薇'}
		]
		//装成eui数据
		let euiArr:eui.ArrayCollection=new eui.ArrayCollection(dataArr);
		//把list_prizeItem数据设置为euiArr
		this.list_prizeItem.dataProvider=euiArr;
		//设置list_prizeItem的呈现器
		this.list_prizeItem.itemRenderer=Prizeitem;
		//获得奖品数据转为eui数据
		this.itemArr=[];
		 this.euiArr2=new eui.ArrayCollection(this.itemArr);
		//把list_itemWin数据设置为eui2Arr
		this.list_itemWin.dataProvider=this.euiArr2;
		//设置list_itemWin的呈现器
		this.list_itemWin.itemRenderer=Goodswin;



		this.time=new egret.Timer(500);
		this.time.addEventListener(egret.TimerEvent.TIMER,this.timeCallback,this);
		this.start.addEventListener(egret.TouchEvent.TOUCH_TAP,this.startBtnTap,this);
	}
	

	//开始
	private startBtnTap(e:egret.TouchEvent):void{
		console.log("开始抽奖");
		this.lotteryResults();//抽取最终奖品

		this.time.start();//开始计时
		this.state=0;
	}
	//抽奖结果
	private lotteryResults():void{
		RotaryTable.lastNum=Math.floor(Math.random()*14+1);
	}

	private _stage:egret.DisplayObject;
	//计时器回调
	private timeCallback(e:egret.TimerEvent):void{
		this._stage=this.stage;
		this.num++;
		if(this.num>14){
			this.num=1;
		}				
		//光标跟随
		this["exml_cursor"].x = this["gun"+this.num].x -10;
		this["exml_cursor"].y = this["gun"+this.num].y -5;

		switch(this.state)
		{
			case 0:
				if(this.time.delay > 30)
				{	
					this.time.delay -= 30;
				}else{
					this.state = 1;
				}
				break;
			case 1:
				this.ct --;
				if(this.ct <= 0)
				{
					this.ct = 30;
					this.state = 2;								
				}
				break;
			case 2:
				this.time.delay += 30;
				if(this.num ==RotaryTable.lastNum && this.time.delay >=400)
				{
					this.time.stop();
					egret.Tween.get(this).wait(500).call(function(){
						this.s=new GameOver();
						this._stage.addChild(this.s);
						let s={image:`resource/assets/image/gun${RotaryTable.lastNum}.png`};
						this.euiArr2.addItem(s);
					})
				}
				break;
		}
	}
	
}