/**
 * Created by lenovo on 2016/8/31.
 */

function Mode(){
    this.id=null;
    this.resultsCurrent="";
    this.resultsPrevious="";
    this.resultsCurrentNegated=false;
    this.resultsPreviousNegated=false;

    this.init=function(inVal){
        if(inVal){

        }

    }
    this.updateResults=function(){
        var results=this.resultsCurrent;
        if(this.resultsCurrentNegated){
            results="-"+results;
        }
        document.getElementById("divResults").innerHTML=results;
    }

    this.commandButton0=function(){}
    this.commandButton1=function(){}
    this.commandButton2=function(){}
    this.commandButton3=function(){}
    this.commandButton4=function(){}
    this.commandButton5=function(){}
    this.commandButton6=function(){}
    this.commandButton7=function(){}
    this.commandButton8=function(){}
    this.commandButton8=function(){}
    this.button0_0=function(){}
    this.button0_1=function(){}
    this.button0_2=function(){}
    this.button0_3=function(){}
    this.button0_4=function(){}
    this.button0_5=function(){}





}
