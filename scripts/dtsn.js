var DTSN = (function () {

	'use strict';


	var createBar = function () {

		var bar = document.getElementById('bar');

		if (!bar || !bar.getAttribute('data-posts')) {
			return;
		}

		var data = bar.getAttribute('data-posts'),
			tmpData = [],
			posts = {},
			width = 40,
			height = 120,
			bodyWidth = document.body.clientWidth,
			x = d3.scale.linear().domain([0,1]).rangeRound([0,width]);

		data = data.split(',');

		console.log(data);

		// count how many posts we have
		data.forEach(function (date) {
			if (!date) {
				return;
			}

			date = date.split('-');
			date = new Date(date[2], date[1], date[0]);
			console.log(date);

			var str = date.getFullYear() + '/' + (date.getMonth()+1 < 10 ? '0' + (date.getMonth()+1) : date.getMonth()+1);

			if (posts[str] === undefined) {
				posts[str] = 0;
			}
			posts[str]++;
		});

		data = [];
		for (var post in posts) {
			data.push({
				'key': post,
				'time': new Date(post + '/01'),
				'value': posts[post]
			});
		}

		console.log(data);

		// sort the data by date
		data = data.sort(function (a, b) {
			if (a.time < b.time) return -1;
			if (a.time > b.time) return 1;
			return 0;
		});

		tmpData = data.slice(0);

		// fill in the gaps
		for (var i = 0; i < data.length; i++) {

			if (data[i+1] !== undefined) {

				var start = data[i].time.getMonth(),
					end = data[i+1].time.getMonth(),
					difference =  end - start;

				if (difference > 1) {
					for (var j = end-1; j > start; j--) {
						var nDate = new Date(data[i].time);
						nDate.setMonth(j);
						data.splice(i+1, 0, {
							'key': '',
							'time': nDate,
							'value': 0
						});
					}
				}
			}
		}

		var max = d3.max(data, function (d) {
			return d.value;
		});

		var y = d3.scale.linear().domain([0,max]).rangeRound([0, height]);

		var chart = d3.select(bar)
			.append('svg')
			.attr('width', bodyWidth)
			.attr('height', height);

		chart.selectAll('rect')
			.data(data)
		.enter()
			.append('rect')
			.attr('x', function (d, i) { return (i+0.5) * ((bodyWidth / (data.length + 1))); })
			.attr('y', function (d) { return height - y(d.value); })
			.attr('width', function (d, i) { return bodyWidth/(data.length + 1); })
			.attr('height', function (d) { return y(d.value); })
			.on('click', function (d) { window.location = '/' + d.key; });


		chart.selectAll('text')
			.data(data)
		.enter()
			.append('text')
			.text(function (d) { 

				if (d.value === 0) {
					return;
				}

				return ((d.time.getMonth() + 1) < 10 ? '0' : '') + (d.time.getMonth() + 1) + '/' + d.time.getFullYear();
			})
			.attr('transform', function (d, i) {
				var xpos = (i+0.5) * ((bodyWidth / (data.length + 1)));
				return 'translate(' + (xpos + (((bodyWidth/(data.length + 1)) - 10) / 2)) + ', ' + 70 + ')rotate(90)';
			})
			.on('click', function (d) { window.location = '/' + d.key; });

		/*	

		// labels
		chart.selectAll('text')
			.data(data)
		.enter()
			.append('text')
			.attr()

		*/
	};

	createBar();

})();