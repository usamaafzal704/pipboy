$(document).ready(function(){

	var weapons = [
		{
			"name": "44_pistol",
			"catagory": "Pistol",
			"damage": 48,
			"fire_rate": 6,
			"range": 119,
			"accuracy": 66,
			"weight": 4.2,
			"value": 99

		},
		{
			"name": "10mm_pistol",
			"catagory": "Pistol",
			"damage": 18,
			"fire_rate": 46,
			"range": 83,
			"accuracy": 60,
			"weight": 3.5,
			"value": 50

		},
		{
			"name": "assault_rifle",
			"catagory": "Assault Rifle",
			"damage": 30,
			"fire_rate": 40,
			"range": 119,
			"accuracy": 72,
			"weight": 13.1,
			"value": 144

		}];



		$('.item-list a').on('click', function(e){
			$('.item-list a').removeClass('active');
			$(e.currentTarget).addClass('active');
		});


		$('.item-list a').on('mouseenter', function(e){

		var current_item = $(e.currentTarget).attr('class');
		console.log(current_item);

		for(item in weapons){
			if(weapons[item].name == current_item){
				console.log(weapons[item]);

				var container = $('.item-stats');
				container.find('.catagory').html(weapons[item].catagory);
				container.find('.damage').html(weapons[item].damage);
				container.find('.fire_rate').html(weapons[item].fire_rate);
				container.find('.range').html(weapons[item].range);
				container.find('.accuracy').html(weapons[item].accuracy);
				container.find('.weight').html(weapons[item].weight);
				container.find('.value').html(weapons[item].value);

				}
			}

		});


	$(".44_pistol").hover(function() {
		$('.pistol').attr("src","pistol.png");
	});
	$(".10mm_pistol").hover(function() {
		$('.pistol').attr("src","10mmpistol.png");
	});
	$(".assault_rifle").hover(function() {
		$('.pistol').attr("src","ar.png");
	});
	



});
