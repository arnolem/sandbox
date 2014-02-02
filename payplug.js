
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
    $('#PaylineForm #mainform').submit(function(){
		alert($('#paymentCardNumber').text());
		alert($('#paymentCardExpirationMonth').text());
		alert($('#paymentCardExpirationYear').text());
		alert($('#paymentCardCvv').text());
	});
});