
(function hanshu1 (){
    var yujuku,
     yujuku = ["遇事不决，可问春风","和光同尘，与时舒卷"]
    let num = Math.floor(Math.random()*yujuku.length)
    document.getElementById("dem").innerHTML = yujuku[num]
}())

function hanshu4 (){
    let story =document.getElementById('demo1');
    let s =document.getElementById('show');
    let i =0;
    let c=document.getElementById('choice');
    timer=setInterval(function(){
        s.innerHTML=story.innerHTML.substring(0,i);
        i++;
        if(s.innerHTML==story.innerHTML){
            clearInterval(timer);
            c.style.display="block"
        }
    },100)
}
function hanshu2(){
    document.getElementById('box1').style.display="block"
    document.getElementById('close').style.display="block"
}
function hanshu3(){
    document.getElementById('box1').style.display="none"
    document.getElementById('close').style.display="none"
    document.getElementById('choice').style.display="none"
}
function yaoni(){
    document.getElementById('img1').style.display="none"
    document.getElementById('img3').style.display="none"
    document.getElementById('img4').style.display="none"
    document.getElementById('img2').style.display="block"
    document.getElementById('box1').style.display="none"
    document.getElementById('close').style.display="none"
    document.getElementById('choice').style.display="none"
    document.getElementById('head1').style.display="block"
}
function xuexi(){
    document.getElementById('img1').style.display="none"
    document.getElementById('img2').style.display="none"
    document.getElementById('img3').style.display="none"
    document.getElementById('img4').style.display="block"
    document.getElementById('box1').style.display="none"
    document.getElementById('close').style.display="none"
    document.getElementById('choice').style.display="none"
    document.getElementById('head2').style.display="block"
}
function gongzuo(){
    document.getElementById('img1').style.display="none"
    document.getElementById('img2').style.display="none"
    document.getElementById('img4').style.display="none"
    document.getElementById('img3').style.display="block"
    document.getElementById('box1').style.display="none"
    document.getElementById('close').style.display="none"
    document.getElementById('choice').style.display="none"
    document.getElementById('head3').style.display="block"
}
function fanhui(){
    document.getElementById('img1').style.display="block"
    document.getElementById('img2').style.display="none"
    document.getElementById('img3').style.display="none"
    document.getElementById('img4').style.display="none"
    document.getElementById('head1').style.display="none"
    document.getElementById('head2').style.display="none"
    document.getElementById('head3').style.display="none"

}