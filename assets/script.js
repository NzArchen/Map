$(function(){
	let center = [-36.8012012,174.74511] //center of map

	let map = L.map('map').setView(center,30);// set view for map


	L.tileLayer('https://api.mapbox.com/styles/v1/archen/cj6ocj1ps1ke72rp7p8npapk2/tiles/256/{z}/{x}/{y}?access_token=pk.eyJ1IjoiYXJjaGVuIiwiYSI6ImNqNmxncXh3YzFnYzUzOGxtbDlvb2FqYjkifQ.kYzWwDvJWNa7ZPfH0VBx2g').addTo(map);



//here you are
	let location = [
						{

						}



	]





//parking
	let parkings = [

						{
							name:'Parking Area 1',
							latlngs:[
										[-36.80145033616192,174.74441528320312],
            							[-36.80147610841634,174.7444099187851],
            							[-36.801527652899175,174.7451877593994],
            							[-36.80143745003146,174.74519848823547],
            							[-36.80145033616192,174.74539160728455],
            							[-36.801420268520786,174.74546670913696],
            							[-36.80118402235835,174.74552035331726],
            							[-36.80111959146028,174.74548816680905],
            							[-36.80099932030554,174.7454935312271],
            							[-36.80058696062683,174.74513947963715],
            							[-36.80051823379786,174.7445547580719],
            							[-36.80145033616192,174.74441528320312]
							],
							popup:{
								className:'custom-popup',
								content:'<div><h2>Countdown Parking</h2><div class="picon"><img src="assets/parking.svg"></div>',
								latlng:[-36.80051823379786,174.7445547580719]
							}
						},
						{
							name:'Parking Area 2',
							latlngs:[
									    [-36.801398791627044,174.7464269399643],
            							[-36.801716649039435,174.74680244922638],
            							[-36.802154774661616,174.74622309207916],
            							[-36.802240681352444,174.74633038043976],
            							[-36.80148040379123,174.7473120689392],
            							[-36.80111100066978,174.74685072898865],
            							[-36.801398791627044,174.7464269399643]
							],
							popup:{
								className:'custom-popup',
								content:'<div><h2>Savemart Parking</h2><div><div class="picon"><img src="assets/parking.svg"></div>',
								latlng:[-36.801716649039435,174.74680244922638]
							}
						}
		];

		_(parkings).each(function(parking){
			let polygon = L.polygon(parking.latlngs,{color:'yellow',weight:1}).addTo(map);

			let popup= L.popup({
				closeButton:false,
				closeOnClick:false,
				className:parking.popup.calssName,
				offset:[0,0]
			})
			.setLatLng(parking.popup.latlng)
			.setContent(parking.popup.content);
			// .addTo(map);

			polygon.on('click',function(){
				if(map.hasLayer(popup)){
					map.closePopup(popup);
				}else{
					map.addLayer(popup);
				}
			})
		});






//BusStop

	let busStops = [
			{
						latlng:[-36.798707, 174.744693],
						description:'162 Lake Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.799023, 174.744757],
						description:'158 Lake Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.801112, 174.744309],
						description:'125 Lake Rd ',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.801821, 174.744367],
						description:'Lake Rd Cres',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.801540, 174.744859],
						description:'Northcote Shops',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.800617, 174.748502],
						description:'46 College Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.803742, 174.747690],
						description:'35 Exmouth Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.803224, 174.745810],
						description:'11 Exmouth Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.802500, 174.742581],
						description:'10 Raleigh Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.801959, 174.740266],
						description:'40 Raleigh Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.801182, 174.737190],
						description:'89 Raleigh Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.803277, 174.744375],
						description:'96 Lake Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.805160, 174.744362],
						description:'58 Lake Rd',
						iconImage:'assets/bus.svg'

			},{
						latlng:[-36.798204, 174.740060],
						description:'71 Ocean View Rd',
						iconImage:'assets/bus.svg'

				},

			];

			_(busStops).each(function(busStop){
			L.circle(busStop.latlng,{             // make a point to map for BusStop
										radius:1,
										color:'yellow'
									}).addTo(map);

			var busStopIcon = L.divIcon({      	
										className:'bus-stop', //crate a class for busstop in css
										iconAnchor:[105,15],
										iconSize:[135,30],
										html:'<div>'+busStop.description+'</div><div></div>'  //empty div is for get space between icon and description 

									});

			let marker = L.marker(busStop.latlng,{icon:busStopIcon}).addTo(map);

											});


//supermarket
		
			let markets = [                  // mark on the map
					{
						latlng:[-36.800509, 174.744888], 
						description:'<h2>Countdown Northcote<h2><div class= "market"><img src="assets/taiping.jpg"></div>',
						iconImage:'assets/market.svg'
					},
					{
						latlng:[-36.800815, 174.745468],
						description:'<h2>Da Hua Supermarket<h2><div class= "market"><img src="assets/dahua.jpg"></div>',
						iconImage:'assets/market.svg'
					},
					{
						latlng:[-36.801581, 174.745603],
						description:'<h2>Tai Ping Trading Supermarket<h2><div class= "market"><img src="assets/taiping.jpg"></div>',
						iconImage:'assets/market.svg'
					}
					];
	
	_(markets).each(function(market){  // icon for mark

		let marketIcon = L.icon({
									iconUrl:market.iconImage, // link to icon file
									iconSize:[30,30]
								});

		let marker = L.marker(market.latlng,{icon:marketIcon}).addTo(map); // put the icon to map

		marker.bindPopup('<div class="supermarket">'+market.description+'</div>') //  popup for description when click

	});


















});
	