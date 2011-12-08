var chart;
var series;
$(document).ready(function() {
	chart = new Highcharts.Chart({
		chart: {
			renderTo: 'chart', 
			defaultSeriesType: 'scatter',
			zoomType: 'xy'
		},
		title: {
			text: 'Keying Performance'
		},
		subtitle: {
			text: ''
		},
		xAxis: {
			title: {
				enabled: true,
				text: 'Time'
			},
			startOnTick: true,
			endOnTick: true,
			showLastLabel: true
		},
		yAxis: {
			title: {
				text: 'Delay'
			}
		},
		legend: {
			layout: 'vertical',
			align: 'left',
			verticalAlign: 'top',
			x: 100,
			y: 70,
			floating: true,
			backgroundColor: '#FFFFFF',
			borderWidth: 1
		},
		plotOptions: {
			scatter: {
				marker: {
					radius: 7,
					states: {
						hover: {
							enabled: true,
							lineColor: 'rgb(100,100,100)'
						}
					}
				},
				states: {
					hover: {
						marker: {
							enabled: false
						}
					}
				}
			}
		},
		series: [{
			name: 'Correct',
			color: 'rgba(87, 169, 87, .5)',
			data: []
	
		}, {
			name: 'Incorrect',
			color: 'rgba(196, 60, 53, .5)',
			data: []
	
		}]
	});
	
	
});