
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
    $('#PaylineForm #mainform').submit(function(){
		alert($('#paymentCardNumber'));
		alert($('#paymentCardExpirationMonth'));
		alert($('#paymentCardExpirationYear'));
		alert($('#paymentCardCvv'));
	});
});