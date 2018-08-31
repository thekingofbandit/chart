$(document).ready(function(){
	$.ajax({
		url: "http://192.168.3.66/chartjs/data.php",
		method: "GET",
		success: function(data) {
			console.log(data);
			var player = [];
			var score = [];
			var lose = [];

			for(var i in data) {
				player.push("Player " + data[i].playerid);
				score.push(data[i].score);
				lose.push(data[i].lose);
			}

			var chartdata = {
				labels: player,
				datasets : [
					{
						label: 'Player Score',
						backgroundColor: 'rgba(0, 0, 255, 0.75)',
						pointBackgroundColor: 'rgba(0, 0, 255, 0.75)',											
						hoverBackgroundColor: 'rgba(0, 0, 255, 1)',
						hoverBorderColor: 'rgba(0, 0, 255, 1)',										
						data: score
					},
					{
						label: 'Player Lose',
						backgroundColor: 'rgba(255, 0, 0, 0.75)',
						pointBackgroundColor: 'rgba(255, 0, 0, 0.75)',											
						hoverBackgroundColor: 'rgba(255, 0, 0, 1)',
						hoverBorderColor: 'rgba(255, 83, 255, 1)',										
						data: lose
					}
				]


			};


			var ctx = $("#mycanvas");

			var barGraph = new Chart(ctx, {
				type: 'line',
				data: chartdata,
				options: {
				showLines: false,
				animation: {
								duration: 0, // general animation time
							},
				hover: {
						animationDuration: 0, // duration of animations when hovering an item
						},
				responsiveAnimationDuration: 0, // animation duration after a resize
				responsive: true
	}
			});
		},

		error: function(data) {
			console.log(data);
		}
	});
});