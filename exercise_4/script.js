$( document ).ready(function() {
       
//7    
$('#oval').css('background-color', 'black')    
    

//8 
$('#triangle').click(function(){
    $('#triangle').css('border-bottom', '0vw solid tan');
    $('#triangle').css('border-top', '20vw solid tan');
   
   
    

//9
$('#cross').mouseenter(function(){
    $('#cross').css('transform', 'rotate(180deg)');
    
 

    
//10
$('#cross').mouseleave(function(){
    $('#cross').css('transform', 'rotate(0deg)');
    
}); 
    
//11
$('#mouseY').mousemove(function(e){
    var parentOffset = $("#lineX").parent().offset.();
    var relY = e.pageY - parentOffset.top + 1;
    $('#lineX').css('top', relY);

    
}); 
    
//12
$('#mouseX').mousemove(function(e){
    var parentOffset = $("#lineY").parent().offset.();
    var relY = e.pageY - parentOffset.top + 1;
    $('#lineY').css('left', relY);

    
}); 
    
$('#mouseX').mousemove(function(event){
    var mouseX = event.pageX;
    var mouseY = event.pageY;
    
    $('#dot').css('top', mouseY);
    $('#dot').css('left', mouseX);

});
    
    
    
    
    
    
});                                                                    