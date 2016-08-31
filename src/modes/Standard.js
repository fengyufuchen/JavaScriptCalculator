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
         this.checkLastPressed();
         this.lastKeyPressed="7";
         this.resultsCurrent+="7";
         this.updateResults();

     }
     this.button0_6=function(){
         this.checkLastPressed();
         this.lastKeyPressed="8";
         this.resultsCurrent+="8";
         this.updateResults();
     }


    this.button0_7=function(){
        this.checkLastPressed();
        this.lastKeyPressed="9";
        this.resultsCurrent+="9";
        this.updateResults();

    }
    this.button1_5=function(){
        this.checkLastPressed();
        this.lastKeyPressed="4";
        this.resultsCurrent+="4";
        this.updateResults();
    }

    this.button1_6=function(){
        this.checkLastPressed();
        this.lastKeyPressed="5";
        this.resultsCurrent+="5";
        this.updateResults();

    }
    this.button1_7=function(){
        this.checkLastPressed();
        this.lastKeyPressed="6";
        this.resultsCurrent+="6";
        this.updateResults();
    }


    this.button2_5 = function() {

        this.checkLastPressed();
        this.lastKeyPressed = "1";
        this.resultsCurrent += "1";
        this.updateResults();

    } // End button2_5().



    this.button2_6 = function() {

        this.checkLastPressed();
        this.lastKeyPressed = "1";
        this.resultsCurrent += "2";
        this.updateResults();

    } // End button2_6().



    this.button2_7 = function() {

        this.checkLastPressed();
        this.lastKeyPressed = "3";
        this.resultsCurrent += "3";
        this.updateResults();

    } // End button2_7().



    this.button3_5 = function() {

        this.checkLastPressed();
        this.lastKeyPressed = "0";
        this.resultsCurrent += "0";
        this.updateResults();

    } // End button3_5().



    this.button3_6 = function() {

        this.resultsCurrentNegated = !this.resultsCurrentNegated;
        this.updateResults();

    } // End button3_6().



    this.button3_7 = function() {

        this.checkLastPressed();
        if (this.resultsCurrent.indexOf(".") == -1) {
            this.lastKeyPressed = ".";
            this.resultsCurrent += ".";
            this.updateResults();
        }

    } // End button3_7().



    this.button0_8 = function() {

        this.currentOperation = "/";
        this.lastKeyPressed = "/";

    } // End button0_8().


    this.button1_8 = function() {

        this.currentOperation = "*";
        this.lastKeyPressed = "*";

    } // End button1_8().


    this.button2_8 = function() {

        this.currentOperation = "-";
        this.lastKeyPressed = "-";

    } // End button2_8().



    this.button3_8 = function() {

        this.currentOperation = "+";
        this.lastKeyPressed = "+";

    } // End button3_8().



    this.button0_9 = function() {

        if (this.resultsCurrent != "") {
            this.resultsCurrent = Math.sqrt(parseFloat(this.resultsCurrent)) + "";
            this.updateResults();
        }

    }


    this.button1_9 = function() {

        if (this.resultsCurrent != "" && this.resultsPrevious != "") {
            var a = parseFloat(this.resultsPrevious) / 100;
            var b = a * parseFloat(this.resultsCurrent);
            this.resultsCurrent = b + "";
            this.updateResults();
        }

    }



    this.button2_9 = function() {

        if (this.resultsCurrent != "") {
            this.resultsCurrent = (1 / parseFloat(this.resultsCurrent)) + "";
            this.updateResults();
        }

    }

    this.button3_9=function(){
        if(this.currentOperation){
            var answer=0;
            var resCurrent=parseFloat(this.resultsCurrent);
            if(this.resultsCurrentNegated){
                resCurrent=resCurrent*-1;
            }
            var resPrevious=parseFloat(this.resultsPrevious);
            if(isNan(resPrevious)){
                resPrevious=resCurrent;
            }
            if(this.resultsPreviousNegated){
                resPrevious=resPrevious*-1;
            }
            switch(this.currentOperation){
                case"+":
                    answer=resPrevious+resCurrent;
                    break;
                case"-":
                    answer=resPrevious-resCurrent;
                    break;
                case "*":
                    answer=resPrevious*resCurrent;
                    break;
                case"/":
                    answer=resPrevious/resCurrent;
                    breakl;
            }//switch
            this.resultsCurrent=""+answer;
            this.resultsPrevious="";
            this.resultsPreviousNegated=false;
            this.currentOperation=null;
            this.lastKeyPressed="=";
            this.updateResults();
        }
    }




}
Standard.prototype=new Mode();

calcTron.setMode(new Standard());
