


$(function getCityInfo(){
	var cityName ="南京";//用户选择的城市名称

    $.ajax({
        type: "GET",
        url: "http://op.juhe.cn/onebox/weather/query?cityname="+cityName+"&key=43a27c62d0badee2de949c7dc3ff9d89",
        dataType:"jsonp",
        crossDomain:true,
        success: function(result) {
            //console.log(result.error_code);
            var error_Code = result.error_code;
            if (error_Code==0) {
            // 基本天气信息
	            var city_name,//城市名字
		            date,//更新日期
		            week,//星期
		            wType,//天气情况
		            temperature,//当前温度
		            humidity,//当前湿度
		            wind_direct,//风向
		            wind_power,//风力等级
		            pm25,//pm2.5数值
		            quality,//污染程度
		            car_data,//洗车指数
		            coat_data,//穿衣指数
		            cold_data,//感冒指数
		            sport_data;//运动指数

		        // 设置城市名字
		        city_name= result.result.data.realtime.city_name;
		        $(".cityname").html(city_name);
		        // 设置更新日期
		        date= result.result.data.realtime.date;
		        $(".updatetime").html(date);
		        // 设置星期
		        week= result.result.data.realtime.week;
		        if (week=="1") {
		        	week="一";
		        }else if (week=="2") {
		        	week="二";
		        }else if (week=="3") {
			        week="三";		        	
		        }else if (week=="4") {
			        week="四";		        	
		        }else if (week=="5") {
		        	week="五";
		        }else if (week=="6") {
		        	week="六";
		        }else if (week=="7") {
		        	week="日";
		        };
		        $(".week").html(week);
		        // 设置当前天气情况
		        wType= result.result.data.realtime.weather.info;
		        $(".wType").html(wType);
		        // 设置当前温度
		        temperature= result.result.data.realtime.weather.temperature;
		        $(".curTemp").html(temperature);
		        // 设置风向
		        wind_direct= result.result.data.realtime.wind.direct;
		        $(".fengxiang").html(wind_direct);
		        // 设置风力
		        wind_power= result.result.data.realtime.wind.power;
		        $(".fengli").html(wind_power);
		        // 设置当前湿度
		        humidity= result.result.data.realtime.weather.humidity;
		        $(".humidity").html(humidity);
		        // 设置pm2.5
		        pm25= result.result.data.pm25.pm25.pm25;
		        $(".pm25").html(pm25);
		        // 设置污染程度
		        quality= result.result.data.pm25.pm25.quality;
		        $(".quality").html(quality);

		        // 洗车指数
		        car_data= result.result.data.life.info.xiche[0];
		        $(".car_data").html(car_data);
		        // 穿衣指数
		        coat_data= result.result.data.life.info.chuanyi[0];
		        $(".coat_data").html(coat_data);
		        // 感冒指数
		        cold_data= result.result.data.life.info.ganmao[0];
		        $(".cold_data").html(cold_data);
		        // 运动指数
		        sport_data= result.result.data.life.info.yundong[0];
		        $(".sport_data").html(sport_data);

            }else if (error_Code==207301) {
            	alert("错误的查询城市名");
            }else if (error_Code==207302) {
            	alert("查询不到该城市的相关信息");
            }else if (error_Code==207303) {
            	alert("网络错误，请重试");
            }else{
            	alert("请求出错了！");
            };
        },
        error:function(type){
        	alert("请求出错了！"+type);
        }
    });
});
