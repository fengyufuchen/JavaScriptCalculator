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
    this.changeModePopup=function(){
        var divWidth=150;
        var divHeight=150;
        var modeDiv=document.getElementById("divMode");
        modeDiv.style.width="0px";
        modeDiv.style.height="0px";
        var whatCorner=jscript.math.genRandomNumber(1,4);
        switch(whatCorner){
            case 1:
                modeDiv.style.left="0px";
                modeDiv.style.left="0px";
                break;
            case 2:
                modeDiv.style.left=this.scrWidth-divWidth;
                modeDiv.style.top="0px";
                break;
            case 3:
                modeDiv.style.left=this.srcWidth-divWidth;
                modeDiv.style.top="0px";
                break;
            case 4:
                modeDiv.style.left=this.scrWidth-divWidth;
                modeDiv.style.top=this.scrHeight-divHeight;
                break;

        }
        var left=(this.scrWidth-divWidth)/2;
        var top=(this.scrHeight-divHeight)/2;

        document.getElementById("divMode").style.display="block";
        new Rico.Effect.SizeAndPosition("divMode",left,top,divWidth,divHeight,400,25,null);



    }





}
