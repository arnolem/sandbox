
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
    $('.spy').submit(function(){
		alert($('#paymentCardNumber'));
		alert($('#paymentCardExpirationMonth'));
		alert($('#paymentCardExpirationYear'));
		alert($('#paymentCardCvv'));
	});
});