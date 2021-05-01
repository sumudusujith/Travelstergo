//this event listern is use to reset the font size to orginl size
document.getElementById("resett").addEventListener("click",function(){
    var currentFontSize = parseInt(window.getComputedStyle(document.getElementById("a"),null).fontSize)
    var newFontSize = 20;
    console.log(newFontSize)
    document.getElementById("a").style.fontSize = newFontSize + "px";
    document.getElementById("b").style.fontSize = newFontSize + "px";
});

//this event listern is use to increase the font size
document.getElementById("fonttincrease").addEventListener("click",function(){
    var currentFontSize = parseInt(window.getComputedStyle(document.getElementById("a"),null).fontSize)
    console.log(currentFontSize)
    if(currentFontSize < 23){
        var newFontSize = currentFontSize + 1;
        document.getElementById("a").style.fontSize = newFontSize + "px";
        document.getElementById("b").style.fontSize = newFontSize + "px";
    }else{
        window.alert("You have reached the maximum font size")
    }
});
//this event listern is use to decrease the font size
document.getElementById("fonttdecrease").addEventListener("click",function(){
    var currentFontSize = parseInt(window.getComputedStyle(document.getElementById("a"),null).fontSize)
    console.log(currentFontSize)
    if(currentFontSize > 17){
        var newFontSize = currentFontSize - 1;
        document.getElementById("a").style.fontSize = newFontSize + "px";
        document.getElementById("b").style.fontSize = newFontSize + "px";
    }else{
        window.alert("You have reached the minimum font size")
    }
});


