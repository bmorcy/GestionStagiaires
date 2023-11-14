/* [ ---- Maksi soufiane - datatables ---- ] 
   [ ---- maksi.webmaster@gmail.com ---- ]
*/
	$(document).ready(function() {
		//* basic
		gebo_datatbles.dt_a();
		//* hideable columns
		gebo_datatbles.dt_d();
	});
	
	//* calendar
	gebo_datatbles = {
		dt_a: function() {
			$('#dt_a').dataTable({
                "sDom": "<'row'<'span6'>r>t<'row'<'span6'p>>",
                "sPaginationType": "bootstrap_alt",
                "oLanguage": {
                    "sLengthMenu": "_MENU_ records per page"
                }
            });
		},
		dt_d: function() {
			function fnShowHide( iCol ) {
				/* Get the DataTables object again - this is not a recreation, just a get of the object */
				var oTable = $('#dt_d').dataTable();
				 
				var bVis = oTable.fnSettings().aoColumns[iCol].bVisible;
				oTable.fnSetColumnVis( iCol, bVis ? false : true );
			}
			
			var oTable = $('#dt_d').dataTable({
				"sDom": "<'row'<'span6'><'span6'>r>t<'row'<'span6'p>>",
				"sPaginationType": "bootstrap"
			});
			
			$('#dt_d_nav').on('click','li input',function(){
				fnShowHide( $(this).val() );
			});
		}
	};