$(document).ready(function(){
$('#myModal').on('show.bs.modal',function(e)
{
/* get the default active carsoral item */
var dtitle=$('#myCarousel').find('.item.active h4').text();
$(this).find('.modal-title').addClass('label label-default').text(dtitle);

var dtitle=$('#myCarousel').find('.item.active p').text();
$(this).find('.modal-paragraph').text(dtitle);

/* set model title on slide */
$('#myCarousel').on('slid.bs.carousel', function () {

var mtitle=$(this).find('.item.active h4').text();
$('#myModal').find('.modal-title').addClass('label label-default').text(mtitle);

var mtitle=$(this).find('.item.active p').text();
$('#myModal').find('.modal-paragraph').text(mtitle); 
});

});

});
