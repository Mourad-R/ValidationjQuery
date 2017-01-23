$( document ).ready(function() {
    console.log( "ready!" );

    /* section 1 */
    $('#s1 h2').html("La bonne cible");//Display txt in the id target
    $('#s1_paragraphe').html("Je suis un paragraphe");//Display txt in the id target
    $('#s2_success').addClass("alert alert-success");//Display bootstrap classes in the id target
    $('#s2_info').addClass("alert alert-info");//Display bootstrap classes in the id target
    $('#s2_warning').addClass("alert alert-warning");//Display bootstrap classes in the id target
    $('#s2_danger').addClass("alert alert-danger");//Display bootstrap classes in the id target
    
    var s1_messageToAlert = $('#s1_messageToAlert').html();
    console.log(s1_messageToAlert);
    alert(s1_messageToAlert);



    /* section 2 */
    $('#s2_source').keyup(function() { //Display typed text in s2_source
    	$('#s2_destination').html($(this).val());//Display typed text in s2_source into s2_destination
    });




    $('#s2_number').change(function() {
     	$('#s2_pos').html($(this).val());
    	if ($(this).val() == 10) {
    		$('#s2_pos').attr('class', 'label label-success')//Give attr bootstrap classes
    	} else if ($(this).val() == -10) {
    		$('#s2_pos').attr('class', 'label label-danger')//Give attr bootstrap classes
        } else if ($(this).val() == -10) {
    	} else {
    		$('#s2_pos').attr('class', 'label label-default')//Give attr bootstrap classes
        } else if ($(this).val() == -10) {
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
