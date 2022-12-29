var numOfDrumbs=document.querySelectorAll(".drum").length
for(i=0;i<numOfDrumbs;i++){
    document.querySelectorAll(".drum")[i].addEventListener("click",function(){
      var ele=this.innerHTML;
      music(ele);
      animation(ele)

       
    });
}
document.addEventListener("keypress",function(event){
    music(event.key);
    animation(event.key);
})

function music(key){
    switch(key){
        case "w":
            var aud1=new Audio("sounds/snare.mp3")
       aud1.play();
       break;
       case "a":
        var aud2=new Audio("sounds/tom-1.mp3")
       aud2.play();
       break;
       case "s":
        var aud3=new Audio("sounds/tom-2.mp3")
       aud3.play();
       break;
       case "d":
        var aud4=new Audio("sounds/tom-3.mp3")
       aud4.play();
       break;
       case "j":
        var aud5=new Audio("sounds/tom-4.mp3")
       aud5.play();
       break;
       case "k":
        var aud6=new Audio("sounds/crash.mp3")
       aud6.play();
       break;
       case "l":
        var aud7=new Audio("sounds/kick-bass.mp3")
       aud7.play();
       break;
       default:
        console.log("enter correct alpgabet")

      } 

}
function animation(currentkey){
    var activebutton=document.querySelector("."+currentkey);
    activebutton.classList.add("pressed");
    setTimeout(function(){
        activebutton.classList.remove("pressed");

    },100)

}