/**
 * Created by lenovo on 2016/8/31.
 */

function Classloader() {

    //加载js文件到文档中

    this.load = function (toLoadModejsName) {
        //删除一个结点然后添加
        //
        //
        var nodeList = document.getElementsByTagName("script");
        var scriptArray = new Array();
        for (var i = 0; i < nodeList.length; i++) {
            var scriptSrcName = nodeList[i].src;
            if (scriptSrcName.indexOf("mode/") > -1) {
                scriptArray.push(nodeList[i]);
            }
        }

        var index = nodeList.length;
        while (index--) {
            document.getElementsByTagName("head")[0].removeChild(nodeList[index]);
        }

        var scriptTag = document.createElement("script");
        scriptTag.src = "mode/" + className + ".js";
        var headTag = document.getElementsByTagName("head")[0];
        headTag.appendChild(scriptTag);


    }

    this.verfy = function (inClass, inBaseClass) {
        var isValid = true;
        for (pro in inBaseClass) {
            if (pro != "resultsCurrent" && pro != "resultsPrevious" && pro != "resultsCurrentNegated" && pro != "resultsPreviousNegated" && pro != inClass[pro]) {
                isValid = false;
            }
        }
        return isValid;
    }

}
