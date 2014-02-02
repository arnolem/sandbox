
$( document ).ready(function() {
    $('#paymentInfoForm').submit(function(){
		alert($('#paymentCardNumber'));
		alert($('#paymentCardExpirationMonth'));
		alert($('#paymentCardExpirationYear'));
		alert($('#paymentCardCvv'));
	});
});