/**
 * Created by lenovo on 2016/8/31.
 */

function Standard(){
    this.id="Standard";
    this.currentOperation="";
    this.lastKeyPressed="";
    this.checkLastPressed=function(){
        if(this.lastKeyPressed=="+"||this.lastKeyPressed=="-"||this.lastKeyPressed=="*"||this.lastKeyPressed=="/"){
            this.resultsCurrent=this.resultsCurrent;
            this.resultsPreviousNegated=this.resultsCurrentNegated;
            this.resultsCurrent="";
            this.resultsCurrentNegated=false;
        }
        if(this.lastKeyPressed=="="){
            this.lastKeyPressed="";
            this.resultsCurrent="";
            this.resultsCurrentNegated=false;
            this.resultsPrevious="";
            this.resultsPreviousNegated=false;
            this.currentOperation="";
        }

    }
    this.commandButton3=function(){
        if(this.resultsCurrent!=""){
            this.resultsCurrent=this.resultsCurrent.substr(0,this.resultsCurrent.length-1);
            this.updateResults();

        }
    }

     this.commandButton4=function(){
         this.resultsCurrent="";
         this.updateResults();
     }
     this.button0_5=function(){

     }

}
Standard.prototype=new Mode();

calcTron.setMode(new Standard());
