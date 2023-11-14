/* [ ---- Maksi soufiane - validation ---- ] 
   [ ---- maksi.webmaster@gmail.com ---- ]
*/
	$(document).ready(function() {
		//* validation with tooltips
		gebo_validation.ttip();
	});
	
	//* validation
	gebo_validation = {
		ttip: function() {
			var ttip_validator = $('.form_validation_ttip').validate({
				onkeyup: false,
				errorClass: 'error',
				validClass: 'valid',
				highlight: function(element) {
					$(element).closest('div').addClass("f_error");
				},
				unhighlight: function(element) {
					$(element).closest('div').removeClass("f_error");
				},
                rules: {
					'entite.entite':{ required : true },
					'encadrant.titre':{ required : true },
					'encadrant.nom':{ required : true },
					'encadrant.fonction':{ required : true },
					'encadrant.email':{ required : true },
					'encadrant.departements.idDepartement':{ required : true },
					'encadrant.services.idService':{ required : true },
					'date_debut':{ required : true },
					'date_fin':{ required : true },
					'service.service':{ required : true },
					'service.departements.idDepartement':{ required : true },
					'filiere.filiere':{ required : true }
				},
				invalidHandler: function(form, validator) {
					$.sticky("Veuillez remplir tous les champs obligatoires du formulaire.", {autoclose : 5000, position: "top-right", type: "st-error" });
				},
				errorPlacement: function(error, element) {
					// Set positioning based on the elements position in the form
					var elem = $(element);
					
					// Check we have a valid error message
					if(!error.is(':empty')) {
						if( (elem.is(':checkbox')) || (elem.is(':radio')) ) {
							// Apply the tooltip only if it isn't valid
							elem.filter(':not(.valid)').parent('label').parent('div').find('.error_placement').qtip({
								overwrite: false,
								content: error,
								position: {
									my: 'left bottom',
									at: 'center right',
									viewport: $(window),
									adjust: {
										x: 6
									}
								},
								show: {
									event: false,
									ready: true
								},
								hide: false,
								style: {
									classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
								}
							})
							// If we have a tooltip on this element already, just update its content
							.qtip('option', 'content.text', error);
						} else {
							// Apply the tooltip only if it isn't valid
							elem.filter(':not(.valid)').qtip({
								overwrite: false,
								content: error,
								position: {
									my: 'bottom left',
									at: 'top right',
									viewport: $(window),
                                    adjust: { x: -8, y: 6 }
								},
								show: {
									event: false,
									ready: true
								},
								hide: false,
								style: {
									classes: 'ui-tooltip-red ui-tooltip-rounded' // Make it red... the classic error colour!
								}
							})
							// If we have a tooltip on this element already, just update its content
							.qtip('option', 'content.text', error);
						};
                        
					}
					// If the error is empty, remove the qTip
					else {
						if( (elem.is(':checkbox')) || (elem.is(':radio')) ) {
							elem.parent('label').parent('div').find('.error_placement').qtip('destroy');
						} else {
							elem.qtip('destroy');
						}
					}
				},
				success: $.noop // Odd workaround for errorPlacement not firing!
			});
		}
	};