// 定义全局变量
var $;
layui.use(['form', 'layer', 'laydate'], function() {
	$ = layui.jquery;
	var form = layui.form,
		layer = layui.layer,
		laydate = layui.laydate;
	//日期1
	laydate.render({
		elem: '#grade',
		type: 'year'
	});
	//日期2
	laydate.render({
		elem: '#daterange',
		type: 'month',
		range: '~'
	});
	
	// 监听搜索_1操作
	form.on('submit(data-search-btn1)', function(data) {
		var result = JSON.stringify(data.field);
		layer.alert(result, {
			title: '最终的搜索信息'
		});
		//执行搜索重载
		table.reload('userloginlogTable', {
			page: {
				curr: 1
			},
			where: {
				searchParams: result
			}
		}, 'data');
		return false;
	});
	// 监听搜索_2操作
	form.on('submit(data-search-btn2)', function(data) {
		var result = JSON.stringify(data.field);
		layer.alert(result, {
			title: '最终的搜索信息'
		});
		//执行搜索重载
		table.reload('userloginlogTable', {
			page: {
				curr: 1
			},
			where: {
				searchParams: result
			}
		}, 'data');
		return false;
	});
	
	
	
	
    /**
	 * 图表统计
	 */
	var echarts_pienum = echarts.init(document.getElementById('pienum'), 'walden');
	var echarts_piewin = echarts.init(document.getElementById('piewin'), 'walden');
	var echarts_histogram = echarts.init(document.getElementById('histogrammajor'), 'walden');
    //成员人数统计
	var pienum = document.getElementById('pienum');
	var myChart = echarts.init(pienum);
	var option;

	option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '5%',
			left: 'center'

		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '大一' },
					{ value: 735, name: '大二' },
					{ value: 580, name: '大三' },
					{ value: 484, name: '大四' },
					{ value: 300, name: '毕业' }
				],
				// color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']
			}
		]
	};

	option && myChart.setOption(option);
	// 各院系成员统计饼图
	var piewin = {
	    title : {
	        text: '根据各院系统计成员饼图',
	        x:'center'
	    },
	    tooltip : {
	        trigger: 'item',
	        formatter: "{a} <br/>{b} : {c} ({d}%)"
	    },
	    legend: {
	        orient: 'vertical',
	        left: 'left',
	        data: ['计算机科学与技术学院','应用科学学院','电子信息工程学院','机械工程学院','材料科学与工程学院']
	    },
	    series : [
	        {
	            name: '成员来源',
	            type: 'pie',
	            radius : '55%',
	            center: ['50%', '60%'],
	            data:[
	                {value:1500, name:'计算机科学与技术学院'},
	                {value:410, name:'应用科学学院'},
	                {value:556, name:'电子信息工程学院'},
	                {value:335, name:'机械工程学院'},
	                {value:148, name:'材料科学与工程学院'}
	            ],
	            itemStyle: {
	                emphasis: {
	                    shadowBlur: 10,
	                    shadowOffsetX: 0,
	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
	                }
	            }
	        }
	    ]
	};
	var histogram = document.getElementById('histogrammajor');
	var myChart = echarts.init(histogram);
	var option;

	option = {
		tooltip: {
			trigger: 'axis',
			axisPointer: {
				type: 'cross',
				crossStyle: {
					color: '#999'
				}
			}
		},
		toolbox: {
			feature: {
				dataView: {show: true, readOnly: false},
				magicType: {show: true, type: ['line', 'bar']},
				restore: {show: true},
				saveAsImage: {show: true}
			}
		},
		legend: {
			data: ['在校人数', '毕业人数', '2022','2023']
		},
		xAxis: [
			{
				type: 'category',
				data: ['软件工程', '计算机科学与技术', '大数据与人工智能', '通信工程', '其他'],
				axisPointer: {
					type: 'shadow'
				}
			}
		],
		yAxis: [
			{
				type: 'value',
				name: '在校人数',
				min: 0,
				max: 400,
				interval: 50,
				axisLabel: {
					formatter: '{value} 人'
				}
			},
			{
				type: 'value',
				name: '毕业人数',
				min: 0,
				max: 100,
				interval: 5,
				axisLabel: {
					formatter: '{value} 人'
				}
			}
		],
		series: [
			{
				name: '在校人数',
				type: 'bar',
				data: [152, 145, 253, 253, 333]
			},
			{
				name: '毕业人数',
				type: 'bar',
				data: [315, 351, 163, 136,313]
			},
			// {
			// 	name: '2019',
			// 	type: 'line',
			// 	yAxisIndex: 1,
			// 	data: [42, 21,42, 14, 62]
			// },
			{
				name: '2022',
				type: 'line',
				yAxisIndex: 1,
				data: [16, 58, 64, 72,83]
			},
			{
				name: '2023',
				type: 'line',
				yAxisIndex: 1,
				data: [12, 24, 75, 45,85]
			}
		]
	};
	option && myChart.setOption(option);



	echarts_pienum.setOption(pienum);
	echarts_piewin.setOption(piewin);
	echarts_histogram.setOption(histogram);
	/**
	 * 报表功能
	 */
	// echarts 窗口缩放自适应
	var echartsrecords = document.getElementById('echarts-records');
	var myChart = echarts.init(echartsrecords);
	var option;

	option = {
		tooltip: {
			trigger: 'item'
		},
		legend: {
			top: '5%',
			left: 'center'

		},
		series: [
			{
				name: 'Access From',
				type: 'pie',
				radius: ['40%', '70%'],
				avoidLabelOverlap: false,
				itemStyle: {
					borderRadius: 10,
					borderColor: '#fff',
					borderWidth: 2
				},
				label: {
					show: false,
					position: 'center'
				},
				emphasis: {
					label: {
						show: true,
						fontSize: 40,
						fontWeight: 'bold'
					}
				},
				labelLine: {
					show: false
				},
				data: [
					{ value: 1048, name: '大一' },
					{ value: 735, name: '大二' },
					{ value: 580, name: '大三' },
					{ value: 484, name: '大四' },
					{ value: 300, name: '毕业' }
				],
				// color:['#5470c6', '#91cc75', '#fac858', '#ee6666', '#73c0de']
			}
		]
	};

	option && myChart.setOption(option);
	window.onresize = function() {
		echarts_pienum.resize();
		echarts_piewin.resize();
		echarts_histogram.resize();
		//echartsRecords.resize();
	}

});