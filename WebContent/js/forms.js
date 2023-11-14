/* [ ---- Maksi soufiane - forms ---- ] 
   [ ---- maksi.webmaster@gmail.com ---- ]
*/
	$(document).ready(function() {
		//* datepicker
		gebo_datepicker.init();
        //* tag handler for inputs
		gebo_tag_handler.init();
		//* nice form elements
        gebo_uniform.init();
		//* enhanced select
		gebo_chosen.init();
		
		$('.open_modal_form').click(function(e) {
			$.colorbox({
				href: '#modal_form',
				inline: true,
				opacity: '0.2',
				fixed: true,
				scrolling: false
			});
			e.preventDefault();
		})
		
	});
	
	
	//* bootstrap datepicker
	gebo_datepicker = {
		init: function() {
			$('#dp1').datepicker();
			$('#dp2').datepicker();
			
			$('#dp_start').datepicker({format: "mm/dd/yyyy"}).on('changeDate', function(ev){
				var dateText = $(this).data('date');
				
				var endDateTextBox = $('#dp_end input');
				if (endDateTextBox.val() != '') {
					var testStartDate = new Date(dateText);
					var testEndDate = new Date(endDateTextBox.val());
					if (testStartDate > testEndDate) {
						endDateTextBox.val(dateText);
					}
				}
				else {
					endDateTextBox.val(dateText);
				};
				$('#dp_end').datepicker('setStartDate', dateText);
				$('#dp_start').datepicker('hide');
			});
			$('#dp_end').datepicker({format: "mm/dd/yyyy"}).on('changeDate', function(ev){
				var dateText = $(this).data('date');
				var startDateTextBox = $('#dp_start input');
				if (startDateTextBox.val() != '') {
					var testStartDate = new Date(startDateTextBox.val());
					var testEndDate = new Date(dateText);
					if (testStartDate > testEndDate) {
						startDateTextBox.val(dateText);
					}
				}
				else {
					startDateTextBox.val(dateText);
				};
				$('#dp_start').datepicker('setEndDate', dateText);
				$('#dp_end').datepicker('hide');
			});
			$('#dp_modal').datepicker();
		}
	};
	
	//* bootstrap timepicker
	gebo_timepicker = {
		init: function() {
			$('#tp_1').timepicker({
				defaultTime: 'current',
				minuteStep: 10,
				disableFocus: true,
				template: 'modal',
				showMeridian: false
			});
			$('#tp_2').timepicker({
				defaultTime: 'current',
				minuteStep: 1,
				disableFocus: true,
				template: 'dropdown'
			});
			$('#tp_modal').timepicker({
				defaultTime: 'current',
				minuteStep: 1,
				disableFocus: true,
				template: 'dropdown'
			});
		}
	};
	
    //* tag handler
	gebo_tag_handler = {
		init: function() {
			$("#array_tag_handler").tagHandler({
				assignedTags: [ 'C', 'Perl', 'PHP' ],
				availableTags: [ 'C', 'C++', 'C#', 'Java', 'Perl', 'PHP', 'Python' ],
				autocomplete: true
			});
			$("#max_tags_tag_handler").tagHandler({
				assignedTags: [ 'Perl' ],
				availableTags: [ 'C', 'C++', 'C#', 'Java', 'Perl', 'PHP', 'Python' ],
				autocomplete: true,
				maxTags:5
			});
		}
	};

    //* uniform
    gebo_uniform = {
		init: function() {
            $(".uni_style").uniform();
        }
    };
	
	//* enhanced select elements
	gebo_chosen = {
		init: function(){
			$(".chzn_a").chosen({
				allow_single_deselect: true
			});
			$(".chzn_b").chosen();
		}
	};
	