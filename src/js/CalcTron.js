/**
 * Created by lenovo on 2016/8/31.
 */

function CalcTron(){
    this.currentMode="";
    this.classloader=new Classloader();
    this.scrWidth=null;
    this.scrHeight=null;

    this.init=function(){
        if(window.innerWidth){
            this.scrWidth=window.innerWidth;
        }else{
            this.scrWidth=window.body.clientWidth;
        }
        if(window.innerHeight){
            this.scrHeight=window.innerHeight;
        }else{
            this.scrHeight=window.body.clientHeight;
        }

        //圆角处理
        new Rico.Effect.Round(null,"cssCalculatorOuter");
        this.setMode("Standard");

    }

    this.setMode=function(mode){
        //display属性设置元素如何显示，语法使用是Object.style.display=value,其中value可以是none表示此元素不会被显示
        //block表示此元素将显示为块级元素，此元素前后会带有换行符；
        if(typeof mode=="string"){
            $(divMode).style.display="none";
            this.classloader.load(mode);
        }else{
            if(this.classloader.verfy(mode,new Mode())){
                this.currentMode=mode;
                this.currentMode.init();

            }
        }

    }





}
