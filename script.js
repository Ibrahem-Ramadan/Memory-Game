

var imglist = document.getElementsByTagName("img") , intervalId , counter=0;
const imgArr = [];

function moonImg(){

    for(var i=0;i<imglist.length;i++){
        imglist[i].src = "/img/Moon.gif";

    }
}                                                   

function showImg (id,className){

    document.getElementById(id).src = `/img/${className[3]}.gif`;
    imgArr.push(className);
    if(imgArr.length == 2 && imgArr[imgArr.length-2]==imgArr[imgArr.length-1])
    {
        
        imgArr.pop();
        imgArr.pop();
        if(++counter == 6 )
        {
            document.getElementById(id).src = `/img/${className[3]}.gif`;
            setTimeout(function(){
                clearTimeout(intervalId);
                alert("Congratulations ! ");
                location.reload();
            },900);
        }
        clearTimeout(intervalId);
            
        
    }else{

        intervalId = setTimeout(function(){
            document.getElementById(id).src = "/img/Moon.gif";
            imgArr.pop();
        },700);

    }
}
