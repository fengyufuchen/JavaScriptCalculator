/**
 * Created by lenovo on 2016/8/31.
 */

function Mode() {
    this.id = null;
    this.resultsCurrent = "";
    this.resultsPrevious = "";
    this.resultsCurrentNegated = false;
    this.resultsPreviousNegated = false;

    this.init = function (inVal) {
        if (inVal) {
            var mainDiv = document.getElementById("mainContainer");
            mainDiv.style.width = inVal.mainWidth + "px";
            mainDiv.style.height = inVal.mainWidth + "px";

            mainDiv.style.left = (calcTron.scrWidth - parseInt(inVal.mainWidth)) / 2;
            mainDiv.style.top = (calcTron.scrHeight - parseInt(inVal.mainHeight)) / 2

            for (var i = 0; i < 9; i++) {
                var btn = document.getElementById("commandButton" + i);
                if (inVal.commandButtons[i].enabled == "true") {
                    //none 此元素不显示；block此元素显示为块级，前后带有回车换行符
                    btn.style.display = "block";
                    btn.value = inVal.commandButtons[i].caption;

                } else {
                    btn.style.value = "none";//此元素不显示
                }
            }//for

            for (var y = 0; y < 5; y++) {
                for (var x = 0; x < 10; x++) {
                    btn = document.getElementById("button" + y + "_" + x);
                    if (inVal.buttons[y][x].enabled == "true") {
                        btn.style.display = "block";
                        btn.value = inVal.buttons[y][x].caption;

                    }
                    else {
                        btn.style.display = "none";
                    }//else
                }//for
            }//for


        } else {
            this.loadJSON();
        }

        this.updateResults("");
        this.updateInfo(this.id+"Mode");

    }
    this.loadJSON = function (inID) {
        /*    var scriptsNodeList=document.getElementsByName("script");

         var length=scriptsNodeList.length;
         var scriptTagList=new Array();
         while(length--){
         var scriptTagSrc=scriptsNodeList[i].src;
         if(scriptTagSrc.indexOf("modes/")>-1){
         scriptTagList.push(scriptsNodeList[i]);
         }
         }

         var index=scriptTagList.length;
         while(index--){
         document.head.removeChild(scriptTagList[i])
         }*/
        var scriptTag = document.createElement("script");
        scriptTag.src = "modes/" + this.id + ".json";
        var headTag = document.head || document.getElementsByTagName("head");
        headTag.appendChild(scriptTag);


    }

    this.updateResults = function () {
        var results = this.resultsCurrent;
        if (this.resultsCurrentNegated) {
            results = "-" + results;
        }
        document.getElementById("divResults").innerHTML = results;
    }

    this.updateInfo=function(inInfo){
        document.getElementById("divInfo").innerHTML=inInfo;
    }
    this.commandButton0 = function () {
    }
    this.commandButton1 = function () {
    }
    this.commandButton2 = function () {
    }
    this.commandButton3 = function () {
    }
    this.commandButton4 = function () {
    }
    this.commandButton5 = function () {
    }
    this.commandButton6 = function () {
    }
    this.commandButton7 = function () {
    }
    this.commandButton8 = function () {
    }
    this.commandButton8 = function () {
    }
    this.button0_0 = function () {
    }
    this.button0_1 = function () {
    }
    this.button0_2 = function () {
    }
    this.button0_3 = function () {
    }
    this.button0_4 = function () {
    }
    this.button0_5 = function () {
    }

    this.button0_6 = function () {
    }
    this.button0_7 = function () {
    }
    this.button0_8 = function () {
    }
    this.button0_9 = function () {
    }

    this.button1_0 = function () {
    }
    this.button1_1 = function () {
    }
    this.button1_2 = function () {
    }
    this.button1_3 = function () {
    }
    this.button1_4 = function () {
    }
    this.button1_5 = function () {
    }
    this.button1_6 = function () {
    }
    this.button1_7 = function () {
    }
    this.button1_8 = function () {
    }
    this.button1_9 = function () {
    }

    this.button2_0 = function () {
    }
    this.button2_1 = function () {
    }
    this.button2_2 = function () {
    }
    this.button2_3 = function () {
    }
    this.button2_4 = function () {
    }
    this.button2_5 = function () {
    }
    this.button2_6 = function () {
    }
    this.button2_7 = function () {
    }
    this.button2_8 = function () {
    }
    this.button2_9 = function () {
    }

    this.button3_0 = function () {
    }
    this.button3_1 = function () {
    }
    this.button3_2 = function () {
    }
    this.button3_3 = function () {
    }
    this.button3_4 = function () {
    }
    this.button3_5 = function () {
    }
    this.button3_6 = function () {
    }
    this.button3_7 = function () {
    }
    this.button3_8 = function () {
    }
    this.button3_9 = function () {
    }

    this.button4_0 = function () {
    }
    this.button4_1 = function () {
    }
    this.button4_2 = function () {
    }
    this.button4_3 = function () {
    }
    this.button4_4 = function () {
    }
    this.button4_5 = function () {
    }
    this.button4_6 = function () {
    }
    this.button4_7 = function () {
    }
    this.button4_8 = function () {
    }
    this.button4_9 = function () {
    }


}
