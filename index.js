/*
* 选择朝代
*/
(function(){
    var obj = document.getElementById("isel");
    var timer = null;
    var ie6 = navigator.userAgent.indexOf("MSIE 6");
    var ie7 = navigator.userAgent.indexOf("MSIE 7");

    function selected(){
        var index = obj.selectedIndex;
        var value = obj.options[index].value;
        var cid = "c"+value;  
        var selElement = document.getElementById(cid);
        var list = document.getElementsByTagName("tr");
        var top = selElement.offsetTop;
        $('body').focus();

        for(var i=0,len=list.length; i<len; i++){
            if(!ie6 && !ie7){
                if(list[i].hasAttribute("style")){
                    list[i].removeAttribute("style");
                }
            }else{
                list[i].removeAttribute("style");
            }
        }
        
        $('html,body').animate({scrollTop: top}, 500,function(){
            selElement.style.backgroundColor = "#FFFBF7";
            selElement.style.color = "#ff8b00";
        }); 
    }

    obj.onchange = function(){
        selected();
    }

})();