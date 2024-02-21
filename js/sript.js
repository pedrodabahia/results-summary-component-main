

//Script para estilizar as divs de informação via .json, Estacomentado pois não encontrei a solução para ele funcionar na web
var urlrequisicao = 'data.json';
var request = new XMLHttpRequest();
request.open("GET", "https://pedrodabahia.github.io/results-summary-component-main/data.json",true);
request.responseType = 'json';
request.send();
var contenthtml = " ";


function scoreDoObjeto(){
    request.onload = function(){
    var resposta = request.response;
    

    for(var i = 0;i < resposta.Dados.length; i++){
        var name = resposta.Dados[i].category;
        var number = resposta.Dados[i].score;
        var icone = resposta.Dados[i].icon;
        var cor = resposta.Dados[i].color;
         contenthtml += "<div id='Reaction' style='color:"+cor+"'><img src="+icone+">"+name+"<span class='numbers' style='color:black;font-weight: 600'>"+number+"<rest style='opacity:0.7'>/100<rest></span></div>"   

    }
    
    $("#Reaction").replaceWith(contenthtml)
}}

scoreDoObjeto()

$(function(){
    
    
    function dimensao(){ if($(window).width() < $(window).height()){ telaMobile() }} 
        
    function telaMobile(){
   $('.content').css('margin','0')
   $('.content .box .pointer').css('height','40vh').css('width','100vw').css(' border-top-right-radius','0px').css(' border-top-left-radius','0px');
   $('.content .box .informations').css('width','100vw').css('margin','0px');
   $('.content .box .informations div').css('margin','2vh auto').css('width','88vw').css('height','4vh').css('font-size','2.5vh').css('padding','2vh');
   $('.content .box .informations button').css('margin','2vw 5vw').css('width','88vw').css('height','7vh').css('font-size','3vh');
   $(' .content .box .informations h1').css('font-size','3vh').css('margin','3vh 0').css('margin-left','5vw');
   $('.attribution').css('display','none');
   $('.content .box .pointer h1').css('font-size','3.5vh').css('margin-top','100%');
   $('.content .box .pointer .texto p').css('font-size','2.5vh').css('width','70vw').css('margin-left','-24vw').css('margin-top','10%') 
   $(' .content .box .pointer .circle p').css('font-size','2vh').css('margin-top','1%')
   $('.content .box .pointer .circle').css('width','13vh').css('height','12vh').css('margin-top','2%');
   $(' .content .box .pointer h1:first-child').css('margin-top','5%');
}

    dimensao()
    $(window).resize(dimensao())


    
  

    

    
})
