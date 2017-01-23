$( document ).ready(function() {
    console.log( "ready!" );

    /* section 1 */
    $('#s1 h2').html("La bonne cible");
    $('#s1_paragraphe').html("Je suis un paragraphe");
    $('#s2_success').addClass("alert alert-success");
    $('#s2_info').addClass("alert alert-info");
    $('#s2_warning').addClass("alert alert-warning");
    $('#s2_danger').addClass("alert alert-danger");
    
    var s1_messageToAlert = $('#s1_messageToAlert').html();
    console.log(s1_messageToAlert);
    // alert(s1_messageToAlert);



    /* section 2 */
    $('#s2_source').keyup(function() {
    	$('#s2_destination').html($(this).val());
    });




    $('#s2_number').change(function() {
     	$('#s2_pos').html($(this).val());
    	if ($(this).val() == 10) {
    		$('#s2_pos').attr('class', 'label label-success')
    	} else if ($(this).val() == -10) {
    		$('#s2_pos').attr('class', 'label label-danger')
    	} else {
    		$('#s2_pos').attr('class', 'label label-default')
    	}
	});

    /* section 3 */

    var currentYear = new Date().getFullYear();

	$('#s2_year').keyup(function() {
		userYear = parseInt($(this).val());

		if (($(this).val().length > 3) && (currentYear - userYear > 17)) {
			$('#s2_name').removeClass('hidden');

			$('#s2_name_input').keyup(function() {

				if ($(this).val().length > 5) {
					$('#s2_submit').removeClass('hidden');
				} else {
					$('#s2_submit').addClass('hidden');
				}
			});


		} else {
			$('#s2_name').addClass('hidden');
		}
    });







    $('a').one('click', function() {  //Use function oneclick jQuery
    	$(this).replaceWith('couler'); //Replace each 'a' elements with a new text when clicked
    });


});
