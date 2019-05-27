var menu=document.getElementById("myMenu");
console.log("Menu "+menu)
var menuItems=menu.getElementsByClassName("item");
for(var i=0;i<menuItems.length;i++){
    console.log("Click event reg for item "+i)
    menuItems[i].addEventListener("click",function(){
        var oldActiveItem=document.getElementsByClassName("active");
        oldActiveItem[0].className=oldActiveItem[0].className.replace("active","");
        this.className+=" active";
    });
}