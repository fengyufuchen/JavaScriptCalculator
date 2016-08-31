/**
 * Created by lenovo on 2016/9/1.
 */

if(typeof jscript=="undefined"){
    jscript=function(){}
}

jscript.math=function(){}
/*
在inMin和inMax之间生成一个随机数
 */
jscript.math.genRandomNumber=function(inMin,inMax){
    if(inMin>inMax){
        return 0;
    }
    return Math.round(inMin+(inMax-inMin)*Math.random());

}
