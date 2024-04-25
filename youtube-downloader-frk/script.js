function downld(){
    
    var mylink = document.getElementById('link').value;
    var code = 'edld';
//      https://www.youtube.com/watch?v=LyorbA_0bRw
    var str1 = mylink.split('e');
    console.log(str1);
    
    
    var newlink = str1[0] + code + str1[1];
   console.log(newlink);
    window.location=newlink;
    
    
}