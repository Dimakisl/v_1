$('.menu a').click(
	function() {
	 	$.each( $(".menu a"), function( i, l ){
    		$(this).removeClass("main-active");
		});
    		$(this).addClass("main-active");
		});




function showDiv(idInfo) {
  var sel = document.getElementById('divLinks').getElementsByClassName('description');
  for (var i=0; i<sel.length; i++) {
    sel[i].style.display = 'none';
  }
  document.getElementById('room'+idInfo).style.display = 'block';
}



$(document).ready(function(){
	// обработка кнопки всплытия popup 
	$('#popup_btn').click(function(){
		setTimeout(function(){
		$('#popup').show();
		alert($('#utm').href());
		}, 5000);
	});
	//закрытие окна
	$('.popup-close').click(function(){
		$('#popup').hide();
	})
	//обработка ссылки 2_3.1
	$('#utm').click(function(e){
		e.preventDefault();
		window.location =  $( this ).attr('href') + "&utm_metka=555";
	});

	//обработка ссылки 2_3.2
	$('#sub').click(function(e){
		e.preventDefault();
		window.location =  $( this ).attr('href').replace('code', 'sub');
	});


});

	//закрытие страницы
	$(window).on('beforeunload', function() {
		return 'Your own message goes here...';
	});