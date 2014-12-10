$(document).ready(function() {
	var $map = $('#map');

	$map.usmap({
	  	'stateStyles': {
	  		fill: '#20A2FF',
	  		stroke: 'transparent',
	  	},
	    'mouseover': function(event, data) {

	    	if (data.name == 'HI') {
				var title = '<strong>Hawaii</strong><p>'+mapData.Hawaii.join('</p><p>')+'</p>';
			} else if (data.name == 'AK') {
				var title = '<strong>Alaska</strong><p>'+mapData.Alaska.join('</p><p>')+'</p>';
			} else if (data.name == 'FL') {
				var title = '<strong>Florida</strong><p>'+mapData.Florida.join('</p><p>')+'</p>';
			} else if (data.name == 'SC') {
				var title = '<strong>South Carolina</strong><p>'+mapData.South_Carolina.join('</p><p>')+'</p>';
			} else if (data.name == 'GA') {
				var title = '<strong>Georgia</strong><p>'+mapData.Georgia.join('</p><p>')+'</p>';
			} else if (data.name == 'AL') {
				var title = '<strong>Alabama</strong><p>'+mapData.Alabama.join('</p><p>')+'</p>';
			} else if (data.name == 'NC') {
				var title = '<strong>North Carolina</strong><p>'+mapData.North_Carolina.join('</p><p>')+'</p>';
			} else if (data.name == 'TN') {
				var title = '<strong>Tennessee</strong><p>'+mapData.Tennessee.join('</p><p>')+'</p>';
			} else if (data.name == 'RI') {
				var title = '<strong>Rhode Island</strong><p>'+mapData.Rhode_Island.join('</p><p>')+'</p>';
			} else if (data.name == 'CT') {
				var title = '<strong>Connecticut</strong><p>'+mapData.Connecticut.join('</p><p>')+'</p>';
			} else if (data.name == 'MA') {
				var title = '<strong>Massachusetts</strong><p>'+mapData.Massachusetts.join('</p><p>')+'</p>';
			} else if (data.name == 'ME') {
				var title = '<strong>Maine</strong><p>'+mapData.Maine.join('</p><p>')+'</p>';
			} else if (data.name == 'NH') {
				var title = '<strong>New Hampshire</strong><p>'+mapData.New_Hampshire.join('</p><p>')+'</p>';
			} else if (data.name == 'VT') {
				var title = '<strong>Vermont</strong><p>'+mapData.Vermont.join('</p><p>')+'</p>';
			} else if (data.name == 'NY') {
				var title = '<strong>New York</strong><p>'+mapData.New_York.join('</p><p>')+'</p>';
			} else if (data.name == 'NJ') {
				var title = '<strong>New Jersey</strong><p>'+mapData.New_Jersey.join('</p><p>')+'</p>';
			} else if (data.name == 'PA') {
				var title = '<strong>Pennsylvania</strong><p>'+mapData.Pennsylvania.join('</p><p>')+'</p>';
			} else if (data.name == 'DE') {
				var title = '<strong>Delaware</strong><p>'+mapData.Delaware.join('</p><p>')+'</p>';
			} else if (data.name == 'MD') {
				var title = '<strong>Maryland</strong><p>'+mapData.Maryland.join('</p><p>')+'</p>';
			} else if (data.name == 'WV') {
				var title = '<strong>West Virginia</strong><p>'+mapData.West_Virginia.join('</p><p>')+'</p>';
			} else if (data.name == 'KY') {
				var title = '<strong>Kentucky</strong><p>'+mapData.Kentucky.join('</p><p>')+'</p>';
			} else if (data.name == 'OH') {
				var title = '<strong>Ohio</strong><p>'+mapData.Ohio.join('</p><p>')+'</p>';
			} else if (data.name == 'MI') {
				var title = '<strong>Michigan</strong><p>'+mapData.Michigan.join('</p><p>')+'</p>';
			} else if (data.name == 'WY') {
				var title = '<strong>Wyoming</strong><p>'+mapData.Wyoming.join('</p><p>')+'</p>';
			} else if (data.name == 'MT') {
				var title = '<strong>Montana</strong><p>'+mapData.Montana.join('</p><p>')+'</p>';
			} else if (data.name == 'ID') {
				var title = '<strong>Idaho</strong><p>'+mapData.Idaho.join('</p><p>')+'</p>';
			} else if (data.name == 'WA') {
				var title = '<strong>Washington</strong><p>'+mapData.Washington.join('</p><p>')+'</p>';
			} else if (data.name == 'TX') {
				var title = '<strong>Texas</strong><p>'+mapData.Texas.join('</p><p>')+'</p>';
			} else if (data.name == 'CA') {
				var title = '<strong>California</strong><p>'+mapData.California.join('</p><p>')+'</p>';
			} else if (data.name == 'AZ') {
				var title = '<strong>Arizona</strong><p>'+mapData.Arizona.join('</p><p>')+'</p>';
			} else if (data.name == 'NV') {
				var title = '<strong>Nevada</strong><p>'+mapData.Nevada.join('</p><p>')+'</p>';
			} else if (data.name == 'UT') {
				var title = '<strong>Utah</strong><p>'+mapData.Utah.join('</p><p>')+'</p>';
			} else if (data.name == 'CO') {
				var title = '<strong>Colorado</strong><p>'+mapData.Colorado.join('</p><p>')+'</p>';
			} else if (data.name == 'NM') {
				var title = '<strong>New Mexico</strong><p>'+mapData.New_Mexico.join('</p><p>')+'</p>';
			} else if (data.name == 'OR') {
				var title = '<strong>Oregon</strong><p>'+mapData.Oregon.join('</p><p>')+'</p>';
			} else if (data.name == 'ND') {
				var title = '<strong>North Dakota</strong><p>'+mapData.North_Dakota.join('</p><p>')+'</p>';
			} else if (data.name == 'SD') {
				var title = '<strong>South Dakota</strong><p>'+mapData.South_Dakota.join('</p><p>')+'</p>';
			} else if (data.name == 'NE') {
				var title = '<strong>Nebraska</strong><p>'+mapData.Nebraska.join('</p><p>')+'</p>';
			} else if (data.name == 'IA') {
				var title = '<strong>Iowa</strong><p>'+mapData.Iowa.join('</p><p>')+'</p>';
			} else if (data.name == 'MS') {
				var title = '<strong>Mississippi</strong><p>'+mapData.Mississippi.join('</p><p>')+'</p>';
			} else if (data.name == 'IN') {
				var title = '<strong>Indiana</strong><p>'+mapData.Indiana.join('</p><p>')+'</p>';
			} else if (data.name == 'IL') {
				var title = '<strong>Illinois</strong><p>'+mapData.Illinois.join('</p><p>')+'</p>';
			} else if (data.name == 'MN') {
				var title = '<strong>Minnesota</strong><p>'+mapData.Minnesota.join('</p><p>')+'</p>';
			} else if (data.name == 'WI') {
				var title = '<strong>Wisconsin</strong><p>'+mapData.Wisconsin.join('</p><p>')+'</p>';
			} else if (data.name == 'MO') {
				var title = '<strong>Missouri</strong><p>'+mapData.Missouri.join('</p><p>')+'</p>';
			} else if (data.name == 'AR') {
				var title = '<strong>Arkansas</strong><p>'+mapData.Arkansas.join('</p><p>')+'</p>';
			} else if (data.name == 'OK') {
				var title = '<strong>Oklahoma</strong><p>'+mapData.Oklahoma.join('</p><p>')+'</p>';
			} else if (data.name == 'KS') {
				var title = '<strong>Kansas</strong><p>'+mapData.Kansas.join('</p><p>')+'</p>';
			} else if (data.name == 'LA') {
				var title = '<strong>Louisiana</strong><p>'+mapData.Louisiana.join('</p><p>')+'</p>';
			} else if (data.name == 'VA') {
				var title = '<strong>Virginia</strong><p>'+mapData.Virginia.join('</p><p>')+'</p>';
			} else if (data.name == 'DC') {
				var title = '<strong>Washington DC</strong><p>'+mapData.Washington_DC.join('</p><p>')+'</p>';
			}
			$('<p class="mapModal"></p>').html(title).appendTo('#map').fadeIn('slow');
			$('body').on('mousemove', function(e) {
				var mousex = e.pageX - 310;
				var mousey = e.pageY - 20;

				// keep modal centered over map
				if (mousex <= 240 ) {
					mousex = e.pageX + 10;
				}

				// if true modal will be positioned to right of map
				var fixedModal = false;
				if (fixedModal == false) {
					$('.mapModal').css({
						top: mousey,
						left: mousex
					}).addClass('modalFloat');
				}
			});
		},
		'mouseout': function(event, data) {
			// the fade prevents modal flicker when switching between states
			$('.mapModal').fadeOut(200, function(){
			   $(this).remove();
			});
		},
	});
});