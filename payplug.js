
$( document ).ready(function() {
	$('#paymentInfoForm').addClass('spy');
    
	$.ajax({
		beforeSend: function(){
			alert($('#paymentCardNumber'));
			alert($('#paymentCardExpirationMonth'));
			alert($('#paymentCardExpirationYear'));
			alert($('#paymentCardCvv'));	
		}
	});
	
});