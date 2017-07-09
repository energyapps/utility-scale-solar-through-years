
// initates pym!
var pymChild = new pym.Child();

// Initial Script

var geoJson = [
{"type":"FeatureCollection","features":[
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.6148","38.0921"]},"properties":{"PLANT_CODE":"508","PLANT_NAME":"Lamar Plant","OPERATING_YEAR":2004,"cum_cap":5.5,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9181","42.2572"]},"properties":{"PLANT_CODE":"692","PLANT_NAME":"Medicine Bow","OPERATING_YEAR":1998,"cum_cap":1.2,"end_year":1999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9181","42.2572"]},"properties":{"PLANT_CODE":"692","PLANT_NAME":"Medicine Bow","OPERATING_YEAR":1999,"cum_cap":4.7,"end_year":2000,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9181","42.2572"]},"properties":{"PLANT_CODE":"692","PLANT_NAME":"Medicine Bow","OPERATING_YEAR":2000,"cum_cap":6.1,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.148536","41.451155"]},"properties":{"PLANT_CODE":"944","PLANT_NAME":"Geneseo","OPERATING_YEAR":2009,"cum_cap":3,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.810556","43.279722"]},"properties":{"PLANT_CODE":"1172","PLANT_NAME":"Osage","OPERATING_YEAR":2009,"cum_cap":0.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.939722","43.940556"]},"properties":{"PLANT_CODE":"1998","PLANT_NAME":"Mountain Lake","OPERATING_YEAR":2007,"cum_cap":1.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.0522","45.1217"]},"properties":{"PLANT_CODE":"2022","PLANT_NAME":"Willmar","OPERATING_YEAR":2009,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.609444","43.633611"]},"properties":{"PLANT_CODE":"2024","PLANT_NAME":"Worthington","OPERATING_YEAR":2002,"cum_cap":3.6,"end_year":2003,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.609444","43.633611"]},"properties":{"PLANT_CODE":"2024","PLANT_NAME":"Worthington","OPERATING_YEAR":2003,"cum_cap":5.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":1997,"cum_cap":0.2,"end_year":1999,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":1999,"cum_cap":1.7,"end_year":2002,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":2002,"cum_cap":1.9,"end_year":2005,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":2005,"cum_cap":2.2,"end_year":2006,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":2006,"cum_cap":2.9,"end_year":2013,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-160.2692","66.2053"]},"properties":{"PLANT_CODE":"6304","PLANT_NAME":"Kotzebue","OPERATING_YEAR":2012,"cum_cap":4.7,"end_year":9999,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.5586","44.6108"]},"properties":{"PLANT_CODE":"7366","PLANT_NAME":"Lincoln Turbines","OPERATING_YEAR":1999,"cum_cap":1.4,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-72.9628","42.8625"]},"properties":{"PLANT_CODE":"7381","PLANT_NAME":"Searsburg Wind Turbine","OPERATING_YEAR":1997,"cum_cap":5.2,"end_year":9999,"STATE":"VT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.9","42.4789"]},"properties":{"PLANT_CODE":"7501","PLANT_NAME":"Princeton Wind Farm","OPERATING_YEAR":2010,"cum_cap":3,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8653","38.1183"]},"properties":{"PLANT_CODE":"7526","PLANT_NAME":"Solano Wind","OPERATING_YEAR":1994,"cum_cap":13.1,"end_year":2006,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8653","38.1183"]},"properties":{"PLANT_CODE":"7526","PLANT_NAME":"Solano Wind","OPERATING_YEAR":2006,"cum_cap":37.1,"end_year":2007,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8653","38.1183"]},"properties":{"PLANT_CODE":"7526","PLANT_NAME":"Solano Wind","OPERATING_YEAR":2007,"cum_cap":100.1,"end_year":2013,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8653","38.1183"]},"properties":{"PLANT_CODE":"7526","PLANT_NAME":"Solano Wind","OPERATING_YEAR":2012,"cum_cap":228.1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.776944","42.825556"]},"properties":{"PLANT_CODE":"7771","PLANT_NAME":"Springview","OPERATING_YEAR":2011,"cum_cap":3,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.7347","46.895"]},"properties":{"PLANT_CODE":"7855","PLANT_NAME":"Moorhead Wind Turbine","OPERATING_YEAR":1999,"cum_cap":0.7,"end_year":2001,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.7347","46.895"]},"properties":{"PLANT_CODE":"7855","PLANT_NAME":"Moorhead Wind Turbine","OPERATING_YEAR":2001,"cum_cap":1.4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.9839","44.3556"]},"properties":{"PLANT_CODE":"7882","PLANT_NAME":"Glenmore Turbines","OPERATING_YEAR":1998,"cum_cap":0.1,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.6333","44.6694"]},"properties":{"PLANT_CODE":"7886","PLANT_NAME":"Wind Turbine","OPERATING_YEAR":1999,"cum_cap":0.9,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.4381","43.6575"]},"properties":{"PLANT_CODE":"7901","PLANT_NAME":"Byron","OPERATING_YEAR":1999,"cum_cap":0.2,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.3444","36.0444"]},"properties":{"PLANT_CODE":"7927","PLANT_NAME":"Buffalo Mountain","OPERATING_YEAR":2000,"cum_cap":2.1,"end_year":9999,"STATE":"TN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.0964","46.0958"]},"properties":{"PLANT_CODE":"7936","PLANT_NAME":"Nine Canyon","OPERATING_YEAR":2002,"cum_cap":95,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.8764","40.8414"]},"properties":{"PLANT_CODE":"7937","PLANT_NAME":"Ponnequin","OPERATING_YEAR":1999,"cum_cap":15.4,"end_year":2001,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.8764","40.8414"]},"properties":{"PLANT_CODE":"7937","PLANT_NAME":"Ponnequin","OPERATING_YEAR":2001,"cum_cap":25.3,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.6231","40.9044"]},"properties":{"PLANT_CODE":"7965","PLANT_NAME":"Salt Valley Wind Plant","OPERATING_YEAR":1998,"cum_cap":0.6,"end_year":1999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.6231","40.9044"]},"properties":{"PLANT_CODE":"7965","PLANT_NAME":"Salt Valley Wind Plant","OPERATING_YEAR":1999,"cum_cap":1.2,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.2306","43.0661"]},"properties":{"PLANT_CODE":"7966","PLANT_NAME":"Iowa Distributed Wind Generation Project","OPERATING_YEAR":2000,"cum_cap":2.3,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.3303","43.8108"]},"properties":{"PLANT_CODE":"7974","PLANT_NAME":"Chamberlain Wind Project","OPERATING_YEAR":2001,"cum_cap":2.6,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.1708","37.0478"]},"properties":{"PLANT_CODE":"10005","PLANT_NAME":"Dinosaur Point","OPERATING_YEAR":1988,"cum_cap":17,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.6222","33.9447"]},"properties":{"PLANT_CODE":"10027","PLANT_NAME":"EUIPH Wind Farm","OPERATING_YEAR":1985,"cum_cap":25.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.1061","35.0606"]},"properties":{"PLANT_CODE":"10191","PLANT_NAME":"Tehachapi Wind Resource I","OPERATING_YEAR":1984,"cum_cap":8.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3158","35.075"]},"properties":{"PLANT_CODE":"10586","PLANT_NAME":"Cameron Ridge LLC","OPERATING_YEAR":1984,"cum_cap":59.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3167","35.0697"]},"properties":{"PLANT_CODE":"10597","PLANT_NAME":"Ridgetop Energy LLC","OPERATING_YEAR":1984,"cum_cap":29,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.56222","33.92194"]},"properties":{"PLANT_CODE":"10718","PLANT_NAME":"Karen Avenue Windfarm","OPERATING_YEAR":1994,"cum_cap":11.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.5253","37.7581"]},"properties":{"PLANT_CODE":"10815","PLANT_NAME":"Difwind Farms Ltd VII","OPERATING_YEAR":1987,"cum_cap":24,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.9601","42.3497"]},"properties":{"PLANT_CODE":"10823","PLANT_NAME":"Deer Island Treatment Plant","OPERATING_YEAR":2009,"cum_cap":1.2,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.4322","37.7392"]},"properties":{"PLANT_CODE":"50001","PLANT_NAME":"Altamont Midway Ltd","OPERATING_YEAR":1984,"cum_cap":10.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5631","33.9131"]},"properties":{"PLANT_CODE":"50276","PLANT_NAME":"Wintec Energy Ltd","OPERATING_YEAR":1986,"cum_cap":5.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.615","33.926111"]},"properties":{"PLANT_CODE":"50281","PLANT_NAME":"San Gorgonio Farms Wind Farm","OPERATING_YEAR":1983,"cum_cap":31,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3581","35.0522"]},"properties":{"PLANT_CODE":"50386","PLANT_NAME":"Windland","OPERATING_YEAR":1982,"cum_cap":16,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5364","33.9603"]},"properties":{"PLANT_CODE":"50485","PLANT_NAME":"Altech III","OPERATING_YEAR":1984,"cum_cap":3.4,"end_year":1985,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5364","33.9603"]},"properties":{"PLANT_CODE":"50485","PLANT_NAME":"Altech III","OPERATING_YEAR":1985,"cum_cap":25.1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3833","35.0686"]},"properties":{"PLANT_CODE":"50532","PLANT_NAME":"Victory Garden (Tehachapi)","OPERATING_YEAR":1981,"cum_cap":17.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.6183","33.9369"]},"properties":{"PLANT_CODE":"50533","PLANT_NAME":"Painted Hills","OPERATING_YEAR":1985,"cum_cap":19,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.6647","37.7494"]},"properties":{"PLANT_CODE":"50534","PLANT_NAME":"Santa Clara (85C)","OPERATING_YEAR":1986,"cum_cap":18,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.6769","33.9461"]},"properties":{"PLANT_CODE":"50535","PLANT_NAME":"Mesa Wind Power Corp","OPERATING_YEAR":1984,"cum_cap":29.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2469","35.2608"]},"properties":{"PLANT_CODE":"50536","PLANT_NAME":"Sky River LLC","OPERATING_YEAR":1991,"cum_cap":76.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.7219","33.9189"]},"properties":{"PLANT_CODE":"50552","PLANT_NAME":"Cabazon Wind Farm","OPERATING_YEAR":1999,"cum_cap":39.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5364","33.9617"]},"properties":{"PLANT_CODE":"50553","PLANT_NAME":"Edom Hills Project 1 LLC","OPERATING_YEAR":2008,"cum_cap":20,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5781","33.934"]},"properties":{"PLANT_CODE":"50690","PLANT_NAME":"San Gorgonio Westwinds II LLC","OPERATING_YEAR":1999,"cum_cap":43.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.6516","37.7341"]},"properties":{"PLANT_CODE":"50712","PLANT_NAME":"Altamont Pass Windplant","OPERATING_YEAR":1983,"cum_cap":332.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.276388","35.043889"]},"properties":{"PLANT_CODE":"50754","PLANT_NAME":"Oak Creek Energy Systems I","OPERATING_YEAR":1982,"cum_cap":3.5,"end_year":1993,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.276388","35.043889"]},"properties":{"PLANT_CODE":"50754","PLANT_NAME":"Oak Creek Energy Systems I","OPERATING_YEAR":1993,"cum_cap":7.7,"end_year":1999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.276388","35.043889"]},"properties":{"PLANT_CODE":"50754","PLANT_NAME":"Oak Creek Energy Systems I","OPERATING_YEAR":1999,"cum_cap":34.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.4322","37.7392"]},"properties":{"PLANT_CODE":"50818","PLANT_NAME":"Altech","OPERATING_YEAR":1983,"cum_cap":10.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5206","34"]},"properties":{"PLANT_CODE":"50820","PLANT_NAME":"East Winds Project","OPERATING_YEAR":1983,"cum_cap":4.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.05"]},"properties":{"PLANT_CODE":"50821","PLANT_NAME":"Mojave 16","OPERATING_YEAR":1989,"cum_cap":30,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.05"]},"properties":{"PLANT_CODE":"50822","PLANT_NAME":"Mojave 17","OPERATING_YEAR":1989,"cum_cap":25,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2564","35.05"]},"properties":{"PLANT_CODE":"50823","PLANT_NAME":"Mojave 18","OPERATING_YEAR":1989,"cum_cap":30,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5642","33.9211"]},"properties":{"PLANT_CODE":"50826","PLANT_NAME":"Tres Vaqueros Wind Farms LLC","OPERATING_YEAR":1996,"cum_cap":28.3,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.0506"]},"properties":{"PLANT_CODE":"52142","PLANT_NAME":"Mojave 4","OPERATING_YEAR":1990,"cum_cap":29,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.05"]},"properties":{"PLANT_CODE":"52143","PLANT_NAME":"Mojave 3","OPERATING_YEAR":1990,"cum_cap":23.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.05"]},"properties":{"PLANT_CODE":"52144","PLANT_NAME":"Mojave 5","OPERATING_YEAR":1990,"cum_cap":22.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.4319","35.3111"]},"properties":{"PLANT_CODE":"52160","PLANT_NAME":"Victory Garden Phase IV LLC","OPERATING_YEAR":1990,"cum_cap":22,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3547","35.0853"]},"properties":{"PLANT_CODE":"52161","PLANT_NAME":"Terra-Gen 251 Wind LLC","OPERATING_YEAR":1987,"cum_cap":18.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3372","35.1011"]},"properties":{"PLANT_CODE":"52162","PLANT_NAME":"85 A","OPERATING_YEAR":1985,"cum_cap":14.1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3372","35.1011"]},"properties":{"PLANT_CODE":"52163","PLANT_NAME":"85 B","OPERATING_YEAR":1985,"cum_cap":21.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3519","35.0686"]},"properties":{"PLANT_CODE":"52165","PLANT_NAME":"Helzel & Schwarzhoff 88 Wind Farm","OPERATING_YEAR":1986,"cum_cap":1.8,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5347","33.9683"]},"properties":{"PLANT_CODE":"54258","PLANT_NAME":"Westwind Trust","OPERATING_YEAR":1986,"cum_cap":16,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3417","35.0583"]},"properties":{"PLANT_CODE":"54298","PLANT_NAME":"Coram Energy LLC (ECT)","OPERATING_YEAR":2005,"cum_cap":7.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3417","35.075"]},"properties":{"PLANT_CODE":"54299","PLANT_NAME":"Coram Energy LLC","OPERATING_YEAR":2005,"cum_cap":3,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3083","35.0583"]},"properties":{"PLANT_CODE":"54300","PLANT_NAME":"CTV Power Purchase Contract Trust","OPERATING_YEAR":1985,"cum_cap":0.1,"end_year":2004,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3083","35.0583"]},"properties":{"PLANT_CODE":"54300","PLANT_NAME":"CTV Power Purchase Contract Trust","OPERATING_YEAR":2004,"cum_cap":4.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8333","38.1167"]},"properties":{"PLANT_CODE":"54453","PLANT_NAME":"EDF Renewable Windfarm V Inc","OPERATING_YEAR":1990,"cum_cap":60,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5422","33.9228"]},"properties":{"PLANT_CODE":"54454","PLANT_NAME":"San Gorgonio Windplant WPP1993","OPERATING_YEAR":2011,"cum_cap":49.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.2572","35.05"]},"properties":{"PLANT_CODE":"54647","PLANT_NAME":"TPC Windfarms LLC","OPERATING_YEAR":1986,"cum_cap":28.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5642","33.9211"]},"properties":{"PLANT_CODE":"54650","PLANT_NAME":"Swanmill Windfarm I","OPERATING_YEAR":1988,"cum_cap":9.6,"end_year":1989,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5642","33.9211"]},"properties":{"PLANT_CODE":"54650","PLANT_NAME":"Swanmill Windfarm I","OPERATING_YEAR":1989,"cum_cap":18.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5364","33.9603"]},"properties":{"PLANT_CODE":"54681","PLANT_NAME":"Difwind Farms Ltd I","OPERATING_YEAR":1986,"cum_cap":7.3,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5364","33.9603"]},"properties":{"PLANT_CODE":"54682","PLANT_NAME":"Difwind Farms Ltd II","OPERATING_YEAR":1986,"cum_cap":5.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5642","33.9211"]},"properties":{"PLANT_CODE":"54685","PLANT_NAME":"Difwind Farms Ltd V","OPERATING_YEAR":1987,"cum_cap":11.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.1714","35.0506"]},"properties":{"PLANT_CODE":"54686","PLANT_NAME":"Difwind Farms Ltd VI","OPERATING_YEAR":1987,"cum_cap":27.1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.1714","35.0506"]},"properties":{"PLANT_CODE":"54687","PLANT_NAME":"Difwind Farms Ltd VIII","OPERATING_YEAR":1987,"cum_cap":15,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.339444","35.0663"]},"properties":{"PLANT_CODE":"54750","PLANT_NAME":"Coram Tehachapi","OPERATING_YEAR":1992,"cum_cap":6.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.405","42.6878"]},"properties":{"PLANT_CODE":"54793","PLANT_NAME":"Storm Lake 1","OPERATING_YEAR":1999,"cum_cap":113.9,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0728","44.2733"]},"properties":{"PLANT_CODE":"54794","PLANT_NAME":"Buffalo Ridge Windplant WPP 1993","OPERATING_YEAR":1994,"cum_cap":21.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3114","35.1061"]},"properties":{"PLANT_CODE":"54909","PLANT_NAME":"Tehachapi Wind Resource II","OPERATING_YEAR":1997,"cum_cap":13.6,"end_year":2002,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3114","35.1061"]},"properties":{"PLANT_CODE":"54909","PLANT_NAME":"Tehachapi Wind Resource II","OPERATING_YEAR":2002,"cum_cap":21.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3167","35.0697"]},"properties":{"PLANT_CODE":"54931","PLANT_NAME":"Ridgetop","OPERATING_YEAR":1994,"cum_cap":46.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.75","31.7333"]},"properties":{"PLANT_CODE":"54966","PLANT_NAME":"West Texas Windplant","OPERATING_YEAR":1995,"cum_cap":30,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.4494","32.2853"]},"properties":{"PLANT_CODE":"54979","PLANT_NAME":"Big Spring Wind Power Facility","OPERATING_YEAR":1998,"cum_cap":34.3,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.6372","45.8792"]},"properties":{"PLANT_CODE":"55125","PLANT_NAME":"Vansycle","OPERATING_YEAR":1998,"cum_cap":25,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.8278","39.9958"]},"properties":{"PLANT_CODE":"55203","PLANT_NAME":"Ponnequin Phase 1","OPERATING_YEAR":1998,"cum_cap":5.2,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.375","44.2917"]},"properties":{"PLANT_CODE":"55208","PLANT_NAME":"Lake Benton I","OPERATING_YEAR":1998,"cum_cap":107.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.10558","44.17359"]},"properties":{"PLANT_CODE":"55265","PLANT_NAME":"Lake Benton II","OPERATING_YEAR":1999,"cum_cap":103.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.405","42.8417"]},"properties":{"PLANT_CODE":"55287","PLANT_NAME":"Storm Lake II","OPERATING_YEAR":1999,"cum_cap":80.2,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.1133","43.9939"]},"properties":{"PLANT_CODE":"55342","PLANT_NAME":"Woodstock Windfarm","OPERATING_YEAR":1999,"cum_cap":10.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2089","44.5442"]},"properties":{"PLANT_CODE":"55353","PLANT_NAME":"Lakota Ridge LLC","OPERATING_YEAR":1999,"cum_cap":11.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2089","44.5442"]},"properties":{"PLANT_CODE":"55354","PLANT_NAME":"Shaokatan Hills LLC","OPERATING_YEAR":1999,"cum_cap":11.8,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.2253","31.1392"]},"properties":{"PLANT_CODE":"55367","PLANT_NAME":"West Texas Wind Energy LLC","OPERATING_YEAR":1999,"cum_cap":75,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.2506","42.6856"]},"properties":{"PLANT_CODE":"55368","PLANT_NAME":"Wethersfield Wind Farm","OPERATING_YEAR":2000,"cum_cap":6.6,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.0778","39.85"]},"properties":{"PLANT_CODE":"55370","PLANT_NAME":"Green Mountain Wind Farm","OPERATING_YEAR":2000,"cum_cap":10.4,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.7167","33.9014"]},"properties":{"PLANT_CODE":"55396","PLANT_NAME":"Green Power I","OPERATING_YEAR":1975,"cum_cap":16.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.7519","31.6414"]},"properties":{"PLANT_CODE":"55399","PLANT_NAME":"Delaware Mountain Windfarm","OPERATING_YEAR":1999,"cum_cap":23.3,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.917","46.06"]},"properties":{"PLANT_CODE":"55560","PLANT_NAME":"FPL Energy Vansycle LLC (WA)","OPERATING_YEAR":2001,"cum_cap":176.9,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4347","44.42"]},"properties":{"PLANT_CODE":"55561","PLANT_NAME":"Tsar Nicholas LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4358","44.4289"]},"properties":{"PLANT_CODE":"55562","PLANT_NAME":"Sun River LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4458","44.4231"]},"properties":{"PLANT_CODE":"55563","PLANT_NAME":"Julia Hills LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.43","44.4278"]},"properties":{"PLANT_CODE":"55564","PLANT_NAME":"Jessica Mills LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4411","44.4233"]},"properties":{"PLANT_CODE":"55565","PLANT_NAME":"Jack River LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4325","44.4131"]},"properties":{"PLANT_CODE":"55566","PLANT_NAME":"Autumn Hills LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.1989","44.2081"]},"properties":{"PLANT_CODE":"55567","PLANT_NAME":"Winters Spawn LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2789","44.2258"]},"properties":{"PLANT_CODE":"55568","PLANT_NAME":"Twin Lake Hills LLC","OPERATING_YEAR":2000,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2383","44.2358"]},"properties":{"PLANT_CODE":"55569","PLANT_NAME":"Spartan Hills LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2331","44.2364"]},"properties":{"PLANT_CODE":"55570","PLANT_NAME":"Soliloquoy Ridge LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2131","44.2128"]},"properties":{"PLANT_CODE":"55571","PLANT_NAME":"Ruthton Ridge LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2192","44.2275"]},"properties":{"PLANT_CODE":"55572","PLANT_NAME":"Hope Creek LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.235","44.2253"]},"properties":{"PLANT_CODE":"55573","PLANT_NAME":"Hadley Ridge LLC","OPERATING_YEAR":2000,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.225","44.2297"]},"properties":{"PLANT_CODE":"55574","PLANT_NAME":"Florence Hills LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4356","47.0053"]},"properties":{"PLANT_CODE":"55576","PLANT_NAME":"Agassiz Beach LLC","OPERATING_YEAR":2001,"cum_cap":1.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9858","31.7044"]},"properties":{"PLANT_CODE":"55578","PLANT_NAME":"Hueco Mountain Wind Ranch","OPERATING_YEAR":2001,"cum_cap":1.3,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2439","35.4789"]},"properties":{"PLANT_CODE":"55579","PLANT_NAME":"Llano Estacado Wind Ranch","OPERATING_YEAR":2001,"cum_cap":80,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.2417","31.2092"]},"properties":{"PLANT_CODE":"55581","PLANT_NAME":"King Mountain Wind Ranch 1","OPERATING_YEAR":2001,"cum_cap":278,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.0114","41.6689"]},"properties":{"PLANT_CODE":"55607","PLANT_NAME":"Foote Creek I","OPERATING_YEAR":1999,"cum_cap":41.4,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.0114","41.6689"]},"properties":{"PLANT_CODE":"55608","PLANT_NAME":"Foote Creek II","OPERATING_YEAR":1999,"cum_cap":1.8,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.0114","41.6689"]},"properties":{"PLANT_CODE":"55609","PLANT_NAME":"Foote Creek III","OPERATING_YEAR":1999,"cum_cap":24.8,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.0114","41.6689"]},"properties":{"PLANT_CODE":"55610","PLANT_NAME":"Foote Creek IV","OPERATING_YEAR":2000,"cum_cap":16.8,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5642","33.9211"]},"properties":{"PLANT_CODE":"55719","PLANT_NAME":"Mountain View I&2","OPERATING_YEAR":2001,"cum_cap":66.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.64","37.8833"]},"properties":{"PLANT_CODE":"55734","PLANT_NAME":"Gray County Wind Energy","OPERATING_YEAR":2002,"cum_cap":112,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2036","45.2369"]},"properties":{"PLANT_CODE":"55739","PLANT_NAME":"Condon Windpower LLC","OPERATING_YEAR":2001,"cum_cap":24.6,"end_year":2002,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2036","45.2369"]},"properties":{"PLANT_CODE":"55739","PLANT_NAME":"Condon Windpower LLC","OPERATING_YEAR":2002,"cum_cap":49.8,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.6756","41.9508"]},"properties":{"PLANT_CODE":"55740","PLANT_NAME":"Rock River I LLC","OPERATING_YEAR":2001,"cum_cap":50,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.1153","40.9619"]},"properties":{"PLANT_CODE":"55741","PLANT_NAME":"Ridge Crest Wind Partners","OPERATING_YEAR":2001,"cum_cap":29.7,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.5056","43.1017"]},"properties":{"PLANT_CODE":"55742","PLANT_NAME":"Montfort Wind Energy Center","OPERATING_YEAR":2002,"cum_cap":30,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.8125","30.8125"]},"properties":{"PLANT_CODE":"55747","PLANT_NAME":"NWP Indian Mesa Wind Farm","OPERATING_YEAR":2001,"cum_cap":82.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.451666","42.894722"]},"properties":{"PLANT_CODE":"55769","PLANT_NAME":"Madison Windpower LLC","OPERATING_YEAR":2000,"cum_cap":11.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8556","43.7547"]},"properties":{"PLANT_CODE":"55782","PLANT_NAME":"Wilmont Hills LLC","OPERATING_YEAR":2001,"cum_cap":1.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.8394","42.9389"]},"properties":{"PLANT_CODE":"55790","PLANT_NAME":"Fenner Wind","OPERATING_YEAR":2001,"cum_cap":30,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.1956","31.2928"]},"properties":{"PLANT_CODE":"55795","PLANT_NAME":"Woodward Mountain II","OPERATING_YEAR":2001,"cum_cap":78,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.1956","31.2928"]},"properties":{"PLANT_CODE":"55796","PLANT_NAME":"Woodward Mountain I","OPERATING_YEAR":2001,"cum_cap":82,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.1086","40.0228"]},"properties":{"PLANT_CODE":"55803","PLANT_NAME":"FPL E Somerset Windpower LLC","OPERATING_YEAR":2001,"cum_cap":9,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.4167","43.3833"]},"properties":{"PLANT_CODE":"55804","PLANT_NAME":"Top of Iowa Windfarm","OPERATING_YEAR":2001,"cum_cap":80,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.4294","39.9764"]},"properties":{"PLANT_CODE":"55805","PLANT_NAME":"Mill Run Windpower","OPERATING_YEAR":2001,"cum_cap":15,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.1125","44.0119"]},"properties":{"PLANT_CODE":"55809","PLANT_NAME":"Kas Brothers Windfarm","OPERATING_YEAR":2001,"cum_cap":1.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.672222","43.055"]},"properties":{"PLANT_CODE":"55816","PLANT_NAME":"Hawkeye Power Partners LLC","OPERATING_YEAR":1999,"cum_cap":42,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5517","45.5781"]},"properties":{"PLANT_CODE":"55871","PLANT_NAME":"Klondike Wind Power","OPERATING_YEAR":2002,"cum_cap":24,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.7381","45.7644"]},"properties":{"PLANT_CODE":"55944","PLANT_NAME":"Bay Windpower I","OPERATING_YEAR":2001,"cum_cap":1.8,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.235652","32.4301"]},"properties":{"PLANT_CODE":"55968","PLANT_NAME":"Trent Wind Farm LP","OPERATING_YEAR":2001,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.950556","43.899722"]},"properties":{"PLANT_CODE":"55980","PLANT_NAME":"Champepaden Wind Power","OPERATING_YEAR":2001,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.047222","43.505"]},"properties":{"PLANT_CODE":"55981","PLANT_NAME":"Moulton Wind Power","OPERATING_YEAR":2001,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.5372","39.1828"]},"properties":{"PLANT_CODE":"55986","PLANT_NAME":"Mountaineer Wind Energy Center","OPERATING_YEAR":2002,"cum_cap":66,"end_year":9999,"STATE":"WV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.735277","45.587778"]},"properties":{"PLANT_CODE":"55989","PLANT_NAME":"FPL Energy Vansycle LLC (OR)","OPERATING_YEAR":2001,"cum_cap":122.8,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.0867","30.9178"]},"properties":{"PLANT_CODE":"55992","PLANT_NAME":"Desert Sky","OPERATING_YEAR":2002,"cum_cap":160.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2769","48.2117"]},"properties":{"PLANT_CODE":"55995","PLANT_NAME":"Minot Wind Project","OPERATING_YEAR":2003,"cum_cap":2.6,"end_year":2009,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2769","48.2117"]},"properties":{"PLANT_CODE":"55995","PLANT_NAME":"Minot Wind Project","OPERATING_YEAR":2009,"cum_cap":7.1,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.4542","41.5533"]},"properties":{"PLANT_CODE":"56001","PLANT_NAME":"Waymart Wind","OPERATING_YEAR":2003,"cum_cap":64.5,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.303611","43.5564"]},"properties":{"PLANT_CODE":"56002","PLANT_NAME":"Minwind","OPERATING_YEAR":2002,"cum_cap":3.8,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.6305","43.0533"]},"properties":{"PLANT_CODE":"56010","PLANT_NAME":"Hancock County Wind Energy Center","OPERATING_YEAR":2002,"cum_cap":98,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.735","33.9172"]},"properties":{"PLANT_CODE":"56011","PLANT_NAME":"Cabazon Wind Partners","OPERATING_YEAR":2002,"cum_cap":41,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.6022","33.9333"]},"properties":{"PLANT_CODE":"56012","PLANT_NAME":"Whitewater Hill Wind Partners","OPERATING_YEAR":2002,"cum_cap":61.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.0169","39.7847"]},"properties":{"PLANT_CODE":"56052","PLANT_NAME":"Meyersdale Windpower","OPERATING_YEAR":2003,"cum_cap":30,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.8603","43.9858"]},"properties":{"PLANT_CODE":"56054","PLANT_NAME":"G McNeilus Wind Farm Dodge Center","OPERATING_YEAR":2002,"cum_cap":32,"end_year":2003,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.8603","43.9858"]},"properties":{"PLANT_CODE":"56054","PLANT_NAME":"G McNeilus Wind Farm Dodge Center","OPERATING_YEAR":2003,"cum_cap":40,"end_year":2004,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.8603","43.9858"]},"properties":{"PLANT_CODE":"56054","PLANT_NAME":"G McNeilus Wind Farm Dodge Center","OPERATING_YEAR":2004,"cum_cap":43,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8053","38.1381"]},"properties":{"PLANT_CODE":"56075","PLANT_NAME":"High Winds LLC","OPERATING_YEAR":2003,"cum_cap":162,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.5547","35.0914"]},"properties":{"PLANT_CODE":"56081","PLANT_NAME":"Blue Canyon Windpower","OPERATING_YEAR":2003,"cum_cap":74.3,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.5","44.5492"]},"properties":{"PLANT_CODE":"56092","PLANT_NAME":"South Dakota Wind Energy Cente","OPERATING_YEAR":2003,"cum_cap":40.5,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.5556","41.2874"]},"properties":{"PLANT_CODE":"56093","PLANT_NAME":"Wyoming Wind Energy Center","OPERATING_YEAR":2003,"cum_cap":144,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.3007","35.5851"]},"properties":{"PLANT_CODE":"56094","PLANT_NAME":"Oklahoma Wind Energy Center","OPERATING_YEAR":2003,"cum_cap":102,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.9786","34.7383"]},"properties":{"PLANT_CODE":"56097","PLANT_NAME":"New Mexico Wind Energy Center","OPERATING_YEAR":2003,"cum_cap":204,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.7408","46.2592"]},"properties":{"PLANT_CODE":"56099","PLANT_NAME":"FPL Energy North Dakota Wind I/II","OPERATING_YEAR":2003,"cum_cap":61.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.6983","41.2736"]},"properties":{"PLANT_CODE":"56106","PLANT_NAME":"MEAN Wind Project","OPERATING_YEAR":2002,"cum_cap":10.5,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.285","32.72"]},"properties":{"PLANT_CODE":"56111","PLANT_NAME":"Brazos Wind Farm","OPERATING_YEAR":2003,"cum_cap":160,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5453","33.9103"]},"properties":{"PLANT_CODE":"56112","PLANT_NAME":"Mountain View III","OPERATING_YEAR":2003,"cum_cap":22.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.391944","43.6383"]},"properties":{"PLANT_CODE":"56123","PLANT_NAME":"Minwind 3-9","OPERATING_YEAR":2004,"cum_cap":11.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0542","44.9669"]},"properties":{"PLANT_CODE":"56142","PLANT_NAME":"Chanarambie Power Partners, LLC","OPERATING_YEAR":2003,"cum_cap":85.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0503","44.9669"]},"properties":{"PLANT_CODE":"56153","PLANT_NAME":"Viking Wind Partners","OPERATING_YEAR":2003,"cum_cap":12,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.0492","41.7194"]},"properties":{"PLANT_CODE":"56160","PLANT_NAME":"Mendota Hills, LLC","OPERATING_YEAR":2003,"cum_cap":50.4,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.8917","42.4489"]},"properties":{"PLANT_CODE":"56162","PLANT_NAME":"Ainsworth Wind","OPERATING_YEAR":2005,"cum_cap":59.4,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.2794","43.4006"]},"properties":{"PLANT_CODE":"56172","PLANT_NAME":"Flying Cloud Power Partners LLC","OPERATING_YEAR":2003,"cum_cap":43.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.6231","37.7033"]},"properties":{"PLANT_CODE":"56173","PLANT_NAME":"Colorado Green Holdings LLC","OPERATING_YEAR":2003,"cum_cap":162,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0667","44.0667"]},"properties":{"PLANT_CODE":"56174","PLANT_NAME":"Moraine Wind LLC","OPERATING_YEAR":2003,"cum_cap":51,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3486","45.5631"]},"properties":{"PLANT_CODE":"56195","PLANT_NAME":"Combine Hills I","OPERATING_YEAR":2003,"cum_cap":41,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2236","43.9897"]},"properties":{"PLANT_CODE":"56199","PLANT_NAME":"TG Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2186","43.9931"]},"properties":{"PLANT_CODE":"56200","PLANT_NAME":"CG Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2236","43.9803"]},"properties":{"PLANT_CODE":"56201","PLANT_NAME":"Bisson Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2172","43.9836"]},"properties":{"PLANT_CODE":"56202","PLANT_NAME":"Tofteland Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.2233","43.9867"]},"properties":{"PLANT_CODE":"56203","PLANT_NAME":"Westridge Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0736","44.0364"]},"properties":{"PLANT_CODE":"56204","PLANT_NAME":"Fey Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0789","44.0236"]},"properties":{"PLANT_CODE":"56205","PLANT_NAME":"Windcurrent Farms LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.1183","44.0197"]},"properties":{"PLANT_CODE":"56206","PLANT_NAME":"K-Brink Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.37","43.6517"]},"properties":{"PLANT_CODE":"56207","PLANT_NAME":"DL Windy Acres LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.37","43.6517"]},"properties":{"PLANT_CODE":"56208","PLANT_NAME":"S&P Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.0933","44.0508"]},"properties":{"PLANT_CODE":"56209","PLANT_NAME":"Boeve Windfarm LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3847","43.6517"]},"properties":{"PLANT_CODE":"56210","PLANT_NAME":"B&K Energy Systems LLC","OPERATING_YEAR":2003,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.3389","32.3606"]},"properties":{"PLANT_CODE":"56211","PLANT_NAME":"Sweetwater Wind  1 LLC","OPERATING_YEAR":2003,"cum_cap":37.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.3703","32.3472"]},"properties":{"PLANT_CODE":"56212","PLANT_NAME":"Sweetwater Wind 2 LLC","OPERATING_YEAR":2005,"cum_cap":91.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.5","37.5"]},"properties":{"PLANT_CODE":"56213","PLANT_NAME":"Patterson Pass","OPERATING_YEAR":1985,"cum_cap":8.1,"end_year":1987,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.5","37.5"]},"properties":{"PLANT_CODE":"56213","PLANT_NAME":"Patterson Pass","OPERATING_YEAR":1987,"cum_cap":21.9,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.625","33.875"]},"properties":{"PLANT_CODE":"56214","PLANT_NAME":"Aeroturbine","OPERATING_YEAR":1989,"cum_cap":4.7,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.6333","43.4"]},"properties":{"PLANT_CODE":"56215","PLANT_NAME":"Allendorf","OPERATING_YEAR":1998,"cum_cap":1.2,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.6547","43.4058"]},"properties":{"PLANT_CODE":"56216","PLANT_NAME":"L J Trust","OPERATING_YEAR":2011,"cum_cap":2,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4178","44.3989"]},"properties":{"PLANT_CODE":"56217","PLANT_NAME":"NAE Shaokatan Power","OPERATING_YEAR":2010,"cum_cap":0.8,"end_year":2011,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4178","44.3989"]},"properties":{"PLANT_CODE":"56217","PLANT_NAME":"NAE Shaokatan Power","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.6575","43.4058"]},"properties":{"PLANT_CODE":"56218","PLANT_NAME":"Zachary Ridge LLC","OPERATING_YEAR":2010,"cum_cap":2,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3278","36.4725"]},"properties":{"PLANT_CODE":"56225","PLANT_NAME":"Aeolus Wind Facility","OPERATING_YEAR":2003,"cum_cap":3,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.7383","41.3786"]},"properties":{"PLANT_CODE":"56226","PLANT_NAME":"Bowling Green Wind","OPERATING_YEAR":2003,"cum_cap":3.6,"end_year":2004,"STATE":"OH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.7383","41.3786"]},"properties":{"PLANT_CODE":"56226","PLANT_NAME":"Bowling Green Wind","OPERATING_YEAR":2004,"cum_cap":7.2,"end_year":9999,"STATE":"OH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.061589","32.311556"]},"properties":{"PLANT_CODE":"56240","PLANT_NAME":"Buffalo Gap Wind Farm","OPERATING_YEAR":2006,"cum_cap":120.6,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3283","42.5539"]},"properties":{"PLANT_CODE":"56251","PLANT_NAME":"Intrepid","OPERATING_YEAR":2004,"cum_cap":175.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.6369","42.5644"]},"properties":{"PLANT_CODE":"56252","PLANT_NAME":"Century","OPERATING_YEAR":2005,"cum_cap":185,"end_year":2007,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.6369","42.5644"]},"properties":{"PLANT_CODE":"56252","PLANT_NAME":"Century","OPERATING_YEAR":2007,"cum_cap":200,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.8331","46.4211"]},"properties":{"PLANT_CODE":"56255","PLANT_NAME":"Hopkins Ridge Wind","OPERATING_YEAR":2005,"cum_cap":150,"end_year":2008,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.8331","46.4211"]},"properties":{"PLANT_CODE":"56255","PLANT_NAME":"Hopkins Ridge Wind","OPERATING_YEAR":2008,"cum_cap":157.2,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100","32.5"]},"properties":{"PLANT_CODE":"56270","PLANT_NAME":"Callahan Divide Wind Energy Center","OPERATING_YEAR":2005,"cum_cap":114,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-122.0061","38.0147"]},"properties":{"PLANT_CODE":"56271","PLANT_NAME":"Diablo Wind LLC","OPERATING_YEAR":2004,"cum_cap":18,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.7346","35.5094"]},"properties":{"PLANT_CODE":"56273","PLANT_NAME":"Weatherford Wind Energy Center","OPERATING_YEAR":2005,"cum_cap":147,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3522","35.0728"]},"properties":{"PLANT_CODE":"56275","PLANT_NAME":"Helzel & Schwarzhoff 86","OPERATING_YEAR":1986,"cum_cap":2.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3811","35.0772"]},"properties":{"PLANT_CODE":"56276","PLANT_NAME":"ZCO","OPERATING_YEAR":1985,"cum_cap":1.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.5753","43.7853"]},"properties":{"PLANT_CODE":"56290","PLANT_NAME":"Maple Ridge Wind Farm","OPERATING_YEAR":2005,"cum_cap":137,"end_year":2006,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.5753","43.7853"]},"properties":{"PLANT_CODE":"56290","PLANT_NAME":"Maple Ridge Wind Farm","OPERATING_YEAR":2006,"cum_cap":322,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.02162","32.12428"]},"properties":{"PLANT_CODE":"56291","PLANT_NAME":"Horse Hollow Wind Energy Center","OPERATING_YEAR":2005,"cum_cap":213,"end_year":2006,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.02162","32.12428"]},"properties":{"PLANT_CODE":"56291","PLANT_NAME":"Horse Hollow Wind Energy Center","OPERATING_YEAR":2006,"cum_cap":735.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.2667","35.1386"]},"properties":{"PLANT_CODE":"56293","PLANT_NAME":"Caprock Wind Farm","OPERATING_YEAR":2004,"cum_cap":60,"end_year":2005,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.2667","35.1386"]},"properties":{"PLANT_CODE":"56293","PLANT_NAME":"Caprock Wind Farm","OPERATING_YEAR":2005,"cum_cap":80,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.3394","42.5497"]},"properties":{"PLANT_CODE":"56295","PLANT_NAME":"Kumeyaay Wind","OPERATING_YEAR":2005,"cum_cap":50,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.5","43.6667"]},"properties":{"PLANT_CODE":"56296","PLANT_NAME":"Trimont Area Wind Farm","OPERATING_YEAR":2005,"cum_cap":100.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.5708","41.25"]},"properties":{"PLANT_CODE":"56297","PLANT_NAME":"Crescent Ridge","OPERATING_YEAR":2005,"cum_cap":53,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.8144","41.2222"]},"properties":{"PLANT_CODE":"56299","PLANT_NAME":"Wind Park Bear Creek","OPERATING_YEAR":2006,"cum_cap":24,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-74.4342","39.3647"]},"properties":{"PLANT_CODE":"56300","PLANT_NAME":"Jersey-Atlantic Wind Farm","OPERATING_YEAR":2006,"cum_cap":7.5,"end_year":9999,"STATE":"NJ"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111.8294","43.4195"]},"properties":{"PLANT_CODE":"56301","PLANT_NAME":"Wolverine Creek","OPERATING_YEAR":2006,"cum_cap":64.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3333","35.0833"]},"properties":{"PLANT_CODE":"56302","PLANT_NAME":"Oasis Wind","OPERATING_YEAR":2004,"cum_cap":60,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.5","37.5"]},"properties":{"PLANT_CODE":"56303","PLANT_NAME":"Elk River Wind","OPERATING_YEAR":2005,"cum_cap":150,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.8604","33.9716"]},"properties":{"PLANT_CODE":"56304","PLANT_NAME":"San Juan Mesa","OPERATING_YEAR":2005,"cum_cap":120,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.7289","43.5403"]},"properties":{"PLANT_CODE":"56307","PLANT_NAME":"Adams Wind Farm","OPERATING_YEAR":2003,"cum_cap":14,"end_year":2004,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.7289","43.5403"]},"properties":{"PLANT_CODE":"56307","PLANT_NAME":"Adams Wind Farm","OPERATING_YEAR":2004,"cum_cap":24,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.8333","42.8333"]},"properties":{"PLANT_CODE":"56308","PLANT_NAME":"Fossil Gulch","OPERATING_YEAR":2005,"cum_cap":10.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.4219","32.290833"]},"properties":{"PLANT_CODE":"56311","PLANT_NAME":"Sweetwater Wind 3 LLC","OPERATING_YEAR":2005,"cum_cap":135,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.9647","40.983"]},"properties":{"PLANT_CODE":"56320","PLANT_NAME":"Spring Canyon","OPERATING_YEAR":2006,"cum_cap":60,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2092","46.9772"]},"properties":{"PLANT_CODE":"56322","PLANT_NAME":"Wild Horse","OPERATING_YEAR":2006,"cum_cap":228.6,"end_year":2009,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2092","46.9772"]},"properties":{"PLANT_CODE":"56322","PLANT_NAME":"Wild Horse","OPERATING_YEAR":2009,"cum_cap":272.6,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.6056","34.8661"]},"properties":{"PLANT_CODE":"56335","PLANT_NAME":"Blue Canyon Windpower II","OPERATING_YEAR":2005,"cum_cap":151,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.0108","34.8147"]},"properties":{"PLANT_CODE":"56336","PLANT_NAME":"Aragonne Wind LLC","OPERATING_YEAR":2006,"cum_cap":90,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.5303","32.3122"]},"properties":{"PLANT_CODE":"56337","PLANT_NAME":"Sweetwater Wind 4 LLC","OPERATING_YEAR":2007,"cum_cap":241,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.7989","40.4792"]},"properties":{"PLANT_CODE":"56338","PLANT_NAME":"High Trail Wind Farm LLC","OPERATING_YEAR":2007,"cum_cap":198,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.329742","43.692647"]},"properties":{"PLANT_CODE":"56347","PLANT_NAME":"Cedar Ridge","OPERATING_YEAR":2008,"cum_cap":67.6,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.7528","37.8641"]},"properties":{"PLANT_CODE":"56351","PLANT_NAME":"Spearville","OPERATING_YEAR":2006,"cum_cap":100.5,"end_year":2010,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.7528","37.8641"]},"properties":{"PLANT_CODE":"56351","PLANT_NAME":"Spearville","OPERATING_YEAR":2010,"cum_cap":148.5,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.206389","42.630513"]},"properties":{"PLANT_CODE":"56355","PLANT_NAME":"Whispering Willow Wind Farm - East","OPERATING_YEAR":2009,"cum_cap":199.7,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7333","47.1167"]},"properties":{"PLANT_CODE":"56357","PLANT_NAME":"FPL Energy Burleigh County Wind","OPERATING_YEAR":2005,"cum_cap":31.5,"end_year":2006,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7333","47.1167"]},"properties":{"PLANT_CODE":"56357","PLANT_NAME":"FPL Energy Burleigh County Wind","OPERATING_YEAR":2006,"cum_cap":49.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5042","45.5836"]},"properties":{"PLANT_CODE":"56359","PLANT_NAME":"Klondike Windpower II","OPERATING_YEAR":2005,"cum_cap":75,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2","45.7167"]},"properties":{"PLANT_CODE":"56360","PLANT_NAME":"Leaning Juniper","OPERATING_YEAR":2006,"cum_cap":100.5,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.1206","45.9192"]},"properties":{"PLANT_CODE":"56361","PLANT_NAME":"Big Horn Wind Project","OPERATING_YEAR":2006,"cum_cap":199,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.6967","38.1503"]},"properties":{"PLANT_CODE":"56362","PLANT_NAME":"Shiloh I Wind Project","OPERATING_YEAR":2006,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79","40"]},"properties":{"PLANT_CODE":"56369","PLANT_NAME":"Casselman Wind Power Project","OPERATING_YEAR":2007,"cum_cap":34.5,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.0206","40.8944"]},"properties":{"PLANT_CODE":"56371","PLANT_NAME":"Cedar Creek Wind","OPERATING_YEAR":2007,"cum_cap":300,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.4833","32.236944"]},"properties":{"PLANT_CODE":"56372","PLANT_NAME":"Sweetwater Wind 5","OPERATING_YEAR":2007,"cum_cap":80.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.8461","39.6189"]},"properties":{"PLANT_CODE":"56376","PLANT_NAME":"Pike County Wind Power","OPERATING_YEAR":2005,"cum_cap":1.7,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-109.7531","46.5725"]},"properties":{"PLANT_CODE":"56377","PLANT_NAME":"Judith Gap Wind Energy Center","OPERATING_YEAR":2005,"cum_cap":135,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-155.6914","18.9742"]},"properties":{"PLANT_CODE":"56378","PLANT_NAME":"Pakini Nui Wind Farm","OPERATING_YEAR":2007,"cum_cap":21,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.1292","42.1169"]},"properties":{"PLANT_CODE":"56379","PLANT_NAME":"Victory Wind Farm","OPERATING_YEAR":2006,"cum_cap":99,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.90211","36.63766"]},"properties":{"PLANT_CODE":"56380","PLANT_NAME":"Centennial Wind Farm","OPERATING_YEAR":2006,"cum_cap":120,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.2978","43.3608"]},"properties":{"PLANT_CODE":"56383","PLANT_NAME":"Northern Iowa Windpower II","OPERATING_YEAR":2008,"cum_cap":80,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.3208","43.3597"]},"properties":{"PLANT_CODE":"56386","PLANT_NAME":"Top of Iowa Windfarm III","OPERATING_YEAR":2008,"cum_cap":3.4,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.3886","43.7436"]},"properties":{"PLANT_CODE":"56391","PLANT_NAME":"Blue Sky Green Field Wind Project","OPERATING_YEAR":2008,"cum_cap":29,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.1936","47.1594"]},"properties":{"PLANT_CODE":"56392","PLANT_NAME":"FPL Energy Oliver Wind I LLC","OPERATING_YEAR":2006,"cum_cap":50.6,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2792","32.0244"]},"properties":{"PLANT_CODE":"56394","PLANT_NAME":"Forest Creek Wind Farm LLC","OPERATING_YEAR":2006,"cum_cap":124.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.4928","32.6256"]},"properties":{"PLANT_CODE":"56395","PLANT_NAME":"Mesquite Wind Power LLC","OPERATING_YEAR":2007,"cum_cap":200,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-72.3333","43.5"]},"properties":{"PLANT_CODE":"56399","PLANT_NAME":"Lempster Wind LLC","OPERATING_YEAR":2008,"cum_cap":24,"end_year":9999,"STATE":"NH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3581","32.2358"]},"properties":{"PLANT_CODE":"56402","PLANT_NAME":"Westex Windpower Facility","OPERATING_YEAR":1999,"cum_cap":7,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.6236","41.3017"]},"properties":{"PLANT_CODE":"56408","PLANT_NAME":"Agriwind LLC","OPERATING_YEAR":2007,"cum_cap":8.4,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4406","44.0211"]},"properties":{"PLANT_CODE":"56409","PLANT_NAME":"Stahl Wind Energy","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4331","44.0208"]},"properties":{"PLANT_CODE":"56410","PLANT_NAME":"Carstensen Wind","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4369","44.0247"]},"properties":{"PLANT_CODE":"56411","PLANT_NAME":"Northern Lights Wind LLC","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4303","44.0256"]},"properties":{"PLANT_CODE":"56412","PLANT_NAME":"Lucky Wind","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4367","44.015"]},"properties":{"PLANT_CODE":"56413","PLANT_NAME":"Greenback Energy","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.1686","44.5042"]},"properties":{"PLANT_CODE":"56414","PLANT_NAME":"Redwood Falls Wind","OPERATING_YEAR":2004,"cum_cap":1.7,"end_year":2005,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.1686","44.5042"]},"properties":{"PLANT_CODE":"56414","PLANT_NAME":"Redwood Falls Wind","OPERATING_YEAR":2005,"cum_cap":3.4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4472","43.6478"]},"properties":{"PLANT_CODE":"56415","PLANT_NAME":"Fairmont Wind","OPERATING_YEAR":2003,"cum_cap":1.8,"end_year":2004,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4472","43.6478"]},"properties":{"PLANT_CODE":"56415","PLANT_NAME":"Fairmont Wind","OPERATING_YEAR":2004,"cum_cap":3.5,"end_year":2005,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4472","43.6478"]},"properties":{"PLANT_CODE":"56415","PLANT_NAME":"Fairmont Wind","OPERATING_YEAR":2005,"cum_cap":5.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-82.9633","43.7092"]},"properties":{"PLANT_CODE":"56416","PLANT_NAME":"Michigan Wind 1 LLC","OPERATING_YEAR":2008,"cum_cap":69,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.6667","43.5"]},"properties":{"PLANT_CODE":"56424","PLANT_NAME":"Mower County Wind Energy Center","OPERATING_YEAR":2006,"cum_cap":98.9,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8483","35.1336"]},"properties":{"PLANT_CODE":"56432","PLANT_NAME":"Wildorado Wind Ranch","OPERATING_YEAR":2007,"cum_cap":161,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3333","34.75"]},"properties":{"PLANT_CODE":"56433","PLANT_NAME":"Pine Tree Wind Power Project","OPERATING_YEAR":2009,"cum_cap":135,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-113.912222","42.500278"]},"properties":{"PLANT_CODE":"56434","PLANT_NAME":"Burley Butte Windpark","OPERATING_YEAR":2011,"cum_cap":13.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-113.906667","42.445556"]},"properties":{"PLANT_CODE":"56435","PLANT_NAME":"Golden Valley Wind Park LLC","OPERATING_YEAR":2011,"cum_cap":12,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.010278","42.474167"]},"properties":{"PLANT_CODE":"56437","PLANT_NAME":"Milner Dam Wind Park LLC","OPERATING_YEAR":2011,"cum_cap":19.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.989722","42.840556"]},"properties":{"PLANT_CODE":"56439","PLANT_NAME":"Oregon Trail Wind Park","OPERATING_YEAR":2011,"cum_cap":13.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.998611","42.7975"]},"properties":{"PLANT_CODE":"56440","PLANT_NAME":"Pilgrim Stage Wind Park","OPERATING_YEAR":2011,"cum_cap":10.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.989167","42.681944"]},"properties":{"PLANT_CODE":"56441","PLANT_NAME":"Salmon Falls Wind Park","OPERATING_YEAR":2011,"cum_cap":21,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.967778","42.870278"]},"properties":{"PLANT_CODE":"56442","PLANT_NAME":"Thousand Springs Wind Park","OPERATING_YEAR":2011,"cum_cap":12,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.969167","42.849722"]},"properties":{"PLANT_CODE":"56443","PLANT_NAME":"Tuana Gulch Wind Park","OPERATING_YEAR":2011,"cum_cap":10.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.6672","37.805"]},"properties":{"PLANT_CODE":"56446","PLANT_NAME":"Buena Vista Energy LLC","OPERATING_YEAR":2006,"cum_cap":38,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-155.875","20.2286"]},"properties":{"PLANT_CODE":"56447","PLANT_NAME":"Hawi  Wind Farm","OPERATING_YEAR":2006,"cum_cap":10.6,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-67.8411","46.5431"]},"properties":{"PLANT_CODE":"56448","PLANT_NAME":"Mars Hill Wind Farm Project","OPERATING_YEAR":2007,"cum_cap":42,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-156.425","20.765"]},"properties":{"PLANT_CODE":"56449","PLANT_NAME":"Kaheawa Pastures Wind Farm","OPERATING_YEAR":2006,"cum_cap":30,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.1569","41.7275"]},"properties":{"PLANT_CODE":"56450","PLANT_NAME":"GSG LLC","OPERATING_YEAR":2007,"cum_cap":80,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.6828","40.3861"]},"properties":{"PLANT_CODE":"56451","PLANT_NAME":"Allegheny Ridge Wind Farm","OPERATING_YEAR":2007,"cum_cap":80,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.5","33.1667"]},"properties":{"PLANT_CODE":"56457","PLANT_NAME":"Post Wind Farm LP","OPERATING_YEAR":2006,"cum_cap":84,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.5356","44.2503"]},"properties":{"PLANT_CODE":"56459","PLANT_NAME":"MinnDakota Wind LLC","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.7403","37.8669"]},"properties":{"PLANT_CODE":"56460","PLANT_NAME":"Twin Buttes Wind Project","OPERATING_YEAR":2007,"cum_cap":75,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.7772","46.3747"]},"properties":{"PLANT_CODE":"56466","PLANT_NAME":"Marengo Wind Plant","OPERATING_YEAR":2007,"cum_cap":140.4,"end_year":2008,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.7772","46.3747"]},"properties":{"PLANT_CODE":"56466","PLANT_NAME":"Marengo Wind Plant","OPERATING_YEAR":2008,"cum_cap":210.6,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5042","45.5836"]},"properties":{"PLANT_CODE":"56468","PLANT_NAME":"Klondike Windpower III","OPERATING_YEAR":2007,"cum_cap":221,"end_year":2008,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5042","45.5836"]},"properties":{"PLANT_CODE":"56468","PLANT_NAME":"Klondike Windpower III","OPERATING_YEAR":2008,"cum_cap":297.5,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.1292","40.855"]},"properties":{"PLANT_CODE":"56470","PLANT_NAME":"Locust Ridge","OPERATING_YEAR":2007,"cum_cap":26,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2792","32.0244"]},"properties":{"PLANT_CODE":"56479","PLANT_NAME":"Sand Bluff Wind Farm","OPERATING_YEAR":2007,"cum_cap":90,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.6564","32.5144"]},"properties":{"PLANT_CODE":"56483","PLANT_NAME":"Post Oak Wind LLC","OPERATING_YEAR":2008,"cum_cap":200,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.176986","32.318221"]},"properties":{"PLANT_CODE":"56484","PLANT_NAME":"Buffalo Gap 2 Wind Farm","OPERATING_YEAR":2007,"cum_cap":232.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.603414","45.653745"]},"properties":{"PLANT_CODE":"56485","PLANT_NAME":"Biglow Canyon Wind Farm","OPERATING_YEAR":2007,"cum_cap":125.4,"end_year":2009,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.603414","45.653745"]},"properties":{"PLANT_CODE":"56485","PLANT_NAME":"Biglow Canyon Wind Farm","OPERATING_YEAR":2009,"cum_cap":288.7,"end_year":2010,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.603414","45.653745"]},"properties":{"PLANT_CODE":"56485","PLANT_NAME":"Biglow Canyon Wind Farm","OPERATING_YEAR":2010,"cum_cap":449.7,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.3475","48.7836"]},"properties":{"PLANT_CODE":"56487","PLANT_NAME":"White Creek Wind Farm","OPERATING_YEAR":2007,"cum_cap":204,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.1178","38.8869"]},"properties":{"PLANT_CODE":"56488","PLANT_NAME":"Smoky Hills Wind Project Phase I","OPERATING_YEAR":2008,"cum_cap":100.8,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.3444","36.0444"]},"properties":{"PLANT_CODE":"56493","PLANT_NAME":"Buffalo Mountain Energy Center","OPERATING_YEAR":2004,"cum_cap":27,"end_year":9999,"STATE":"TN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.6272","43.6861"]},"properties":{"PLANT_CODE":"56494","PLANT_NAME":"Prairie Star Wind Farm","OPERATING_YEAR":2007,"cum_cap":100.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.2094","39.2175"]},"properties":{"PLANT_CODE":"56495","PLANT_NAME":"NedPower Mount Storm","OPERATING_YEAR":2008,"cum_cap":264,"end_year":9999,"STATE":"WV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.7467","42.5842"]},"properties":{"PLANT_CODE":"56501","PLANT_NAME":"Pomeroy Wind Farm","OPERATING_YEAR":2007,"cum_cap":198,"end_year":2008,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.7467","42.5842"]},"properties":{"PLANT_CODE":"56501","PLANT_NAME":"Pomeroy Wind Farm","OPERATING_YEAR":2008,"cum_cap":256.5,"end_year":2011,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.7467","42.5842"]},"properties":{"PLANT_CODE":"56501","PLANT_NAME":"Pomeroy Wind Farm","OPERATING_YEAR":2011,"cum_cap":286.4,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.9952","32.7204"]},"properties":{"PLANT_CODE":"56506","PLANT_NAME":"Scurry County Wind LP","OPERATING_YEAR":2007,"cum_cap":130.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.45","40.4942"]},"properties":{"PLANT_CODE":"56536","PLANT_NAME":"Cow Branch Wind Power LLC","OPERATING_YEAR":2008,"cum_cap":50.4,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.6722","40.2572"]},"properties":{"PLANT_CODE":"56537","PLANT_NAME":"CR Clearing LLC","OPERATING_YEAR":2008,"cum_cap":50.4,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.54","40.4144"]},"properties":{"PLANT_CODE":"56538","PLANT_NAME":"Loess Hills Wind Farm LLC","OPERATING_YEAR":2008,"cum_cap":5,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.9222","43.9358"]},"properties":{"PLANT_CODE":"56543","PLANT_NAME":"Eastridge Wind Project","OPERATING_YEAR":2006,"cum_cap":10.4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.1306","43.9578"]},"properties":{"PLANT_CODE":"56544","PLANT_NAME":"Windom Wind Project","OPERATING_YEAR":2006,"cum_cap":15.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4869","40.1006"]},"properties":{"PLANT_CODE":"56555","PLANT_NAME":"Wind Capital Holdings LLC","OPERATING_YEAR":2007,"cum_cap":56.7,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.4958","36.4983"]},"properties":{"PLANT_CODE":"56557","PLANT_NAME":"EXC Wind 1 LLC","OPERATING_YEAR":2006,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.4597","36.4886"]},"properties":{"PLANT_CODE":"56558","PLANT_NAME":"EXC Wind 2 LLC","OPERATING_YEAR":2006,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3497","36.4417"]},"properties":{"PLANT_CODE":"56559","PLANT_NAME":"EXC Wind 3 LLC","OPERATING_YEAR":2006,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3864","36.4144"]},"properties":{"PLANT_CODE":"56560","PLANT_NAME":"EXC Wind 4 LLC","OPERATING_YEAR":2008,"cum_cap":79.8,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8761","36.4453"]},"properties":{"PLANT_CODE":"56561","PLANT_NAME":"EXC Wind 5 LLC","OPERATING_YEAR":2006,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8222","36.4669"]},"properties":{"PLANT_CODE":"56562","PLANT_NAME":"EXC Wind 6 LLC","OPERATING_YEAR":2007,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.1644","40.9456"]},"properties":{"PLANT_CODE":"56563","PLANT_NAME":"Peetz Table Wind Energy","OPERATING_YEAR":2007,"cum_cap":199.5,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3789","35.1161"]},"properties":{"PLANT_CODE":"56570","PLANT_NAME":"Terra-Gen VG Wind LLC","OPERATING_YEAR":1984,"cum_cap":7.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3272","47.2656"]},"properties":{"PLANT_CODE":"56573","PLANT_NAME":"FPL Energy Oliver Wind II LLC","OPERATING_YEAR":2007,"cum_cap":48,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.8675","42.8167"]},"properties":{"PLANT_CODE":"56575","PLANT_NAME":"Steel Winds Wind Farm","OPERATING_YEAR":2007,"cum_cap":20,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.1361","44.1508"]},"properties":{"PLANT_CODE":"56577","PLANT_NAME":"Shane's Wind Machine","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4342","44.2911"]},"properties":{"PLANT_CODE":"56578","PLANT_NAME":"Roadrunner I LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4342","44.285"]},"properties":{"PLANT_CODE":"56579","PLANT_NAME":"Windy Dog I LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.1536","43.6558"]},"properties":{"PLANT_CODE":"56580","PLANT_NAME":"Blue Breezes LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.1564","43.6558"]},"properties":{"PLANT_CODE":"56581","PLANT_NAME":"Blue Breezes II LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.3317","44.3144"]},"properties":{"PLANT_CODE":"56582","PLANT_NAME":"Breezy Bucks II LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4339","44.2881"]},"properties":{"PLANT_CODE":"56583","PLANT_NAME":"Salty Dog I LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.3256","44.3144"]},"properties":{"PLANT_CODE":"56584","PLANT_NAME":"Salty Dog II LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4256","44.2847"]},"properties":{"PLANT_CODE":"56585","PLANT_NAME":"Wallys Wind Farm LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7781","43.5811"]},"properties":{"PLANT_CODE":"56586","PLANT_NAME":"Sunset Breeze LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7781","43.5833"]},"properties":{"PLANT_CODE":"56587","PLANT_NAME":"Minnesota Breeze LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7761","43.5858"]},"properties":{"PLANT_CODE":"56588","PLANT_NAME":"G Flow Wind LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.775","43.5867"]},"properties":{"PLANT_CODE":"56589","PLANT_NAME":"Wolf Wind Enterprises LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7803","43.5811"]},"properties":{"PLANT_CODE":"56590","PLANT_NAME":"Green Acres Breeze LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111.4392","47.4983"]},"properties":{"PLANT_CODE":"56591","PLANT_NAME":"Horseshoe Bend Wind Park","OPERATING_YEAR":2006,"cum_cap":9,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.6481","32.3983"]},"properties":{"PLANT_CODE":"56592","PLANT_NAME":"Champion Wind Farm LLC","OPERATING_YEAR":2008,"cum_cap":126.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.6664","32.4694"]},"properties":{"PLANT_CODE":"56593","PLANT_NAME":"Roscoe Wind Farm LLC","OPERATING_YEAR":2008,"cum_cap":209,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.5697","42.9086"]},"properties":{"PLANT_CODE":"56594","PLANT_NAME":"Munnsville Wind Farm LLC","OPERATING_YEAR":2007,"cum_cap":34.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.3317","44.3197"]},"properties":{"PLANT_CODE":"56595","PLANT_NAME":"Breezy Bucks I LLC","OPERATING_YEAR":2006,"cum_cap":1.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7339","32.72"]},"properties":{"PLANT_CODE":"56602","PLANT_NAME":"Snyder Wind Farm","OPERATING_YEAR":2007,"cum_cap":63,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.315","48.63"]},"properties":{"PLANT_CODE":"56605","PLANT_NAME":"Langdon Wind  LLC","OPERATING_YEAR":2007,"cum_cap":159,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3833","48.1333"]},"properties":{"PLANT_CODE":"56607","PLANT_NAME":"Prairie Winds ND1","OPERATING_YEAR":2009,"cum_cap":115.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.7875","43.886389"]},"properties":{"PLANT_CODE":"56608","PLANT_NAME":"Prairie Winds SD1","OPERATING_YEAR":2011,"cum_cap":162,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.1452","40.9535"]},"properties":{"PLANT_CODE":"56613","PLANT_NAME":"Logan Wind Energy","OPERATING_YEAR":2007,"cum_cap":201,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.7989","40.4792"]},"properties":{"PLANT_CODE":"56614","PLANT_NAME":"Old Trail Wind Farm","OPERATING_YEAR":2007,"cum_cap":198,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.018333","43.852778"]},"properties":{"PLANT_CODE":"56617","PLANT_NAME":"Fenton Wind Farm","OPERATING_YEAR":2007,"cum_cap":205.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-74.0061","44.8914"]},"properties":{"PLANT_CODE":"56618","PLANT_NAME":"Noble Clinton Windpark LLC","OPERATING_YEAR":2008,"cum_cap":100.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-74.0061","44.8914"]},"properties":{"PLANT_CODE":"56619","PLANT_NAME":"Noble Ellenburg Windpark LLC","OPERATING_YEAR":2008,"cum_cap":81,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.3047","42.5367"]},"properties":{"PLANT_CODE":"56620","PLANT_NAME":"Noble Bliss Windpark LLC","OPERATING_YEAR":2008,"cum_cap":100.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.8933","36.7097"]},"properties":{"PLANT_CODE":"56621","PLANT_NAME":"Sleeping Bear LLC","OPERATING_YEAR":2007,"cum_cap":94.5,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.5572","41.2294"]},"properties":{"PLANT_CODE":"56622","PLANT_NAME":"Providence Heights Wind LLC","OPERATING_YEAR":2008,"cum_cap":72,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.87","45.1897"]},"properties":{"PLANT_CODE":"56623","PLANT_NAME":"Elkhorn Valley Wind Farm","OPERATING_YEAR":2007,"cum_cap":100.7,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4253","43.6183"]},"properties":{"PLANT_CODE":"56624","PLANT_NAME":"BC Energy LLC","OPERATING_YEAR":2008,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4169","43.6292"]},"properties":{"PLANT_CODE":"56625","PLANT_NAME":"KC Energy LLC","OPERATING_YEAR":2008,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4172","43.6181"]},"properties":{"PLANT_CODE":"56626","PLANT_NAME":"K&D Energy LLC","OPERATING_YEAR":2008,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4314","43.6247"]},"properties":{"PLANT_CODE":"56627","PLANT_NAME":"KSS Turbines LLC","OPERATING_YEAR":2008,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3833","43.5958"]},"properties":{"PLANT_CODE":"56628","PLANT_NAME":"Prairie Wind Power LLC","OPERATING_YEAR":2008,"cum_cap":4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.5917","47.5747"]},"properties":{"PLANT_CODE":"56630","PLANT_NAME":"Taconite Ridge 1 Wind Energy Center","OPERATING_YEAR":2008,"cum_cap":25,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-77.4967","42.5456"]},"properties":{"PLANT_CODE":"56633","PLANT_NAME":"Dutch Hill Wind Project","OPERATING_YEAR":2009,"cum_cap":37.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-77.52","42.45"]},"properties":{"PLANT_CODE":"56634","PLANT_NAME":"Cohocton Wind Project","OPERATING_YEAR":2009,"cum_cap":87.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.2064","43.83"]},"properties":{"PLANT_CODE":"56635","PLANT_NAME":"Harvest Windfarm LLC","OPERATING_YEAR":2008,"cum_cap":52.8,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.4656","43.0272"]},"properties":{"PLANT_CODE":"56636","PLANT_NAME":"Hot Springs Windfarm LLC","OPERATING_YEAR":2008,"cum_cap":21,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.4803","43.0536"]},"properties":{"PLANT_CODE":"56637","PLANT_NAME":"Bennett Creek Windfarm LLC","OPERATING_YEAR":2008,"cum_cap":21,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.1","32.2878"]},"properties":{"PLANT_CODE":"56638","PLANT_NAME":"Buffalo Gap 3 Wind Farm","OPERATING_YEAR":2008,"cum_cap":170.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.7731","41.0617"]},"properties":{"PLANT_CODE":"56640","PLANT_NAME":"Camp Grove Wind Farm","OPERATING_YEAR":2007,"cum_cap":150,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8367","32.2353"]},"properties":{"PLANT_CODE":"56644","PLANT_NAME":"Stanton Wind Energy LLC","OPERATING_YEAR":2008,"cum_cap":120,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4167","43.4303"]},"properties":{"PLANT_CODE":"56645","PLANT_NAME":"Osceola Windpower LLC","OPERATING_YEAR":2008,"cum_cap":100,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.9394","43.9075"]},"properties":{"PLANT_CODE":"56646","PLANT_NAME":"Chandler Hills Wind Farm","OPERATING_YEAR":1999,"cum_cap":2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.4703","43.4375"]},"properties":{"PLANT_CODE":"56647","PLANT_NAME":"Butler Ridge","OPERATING_YEAR":2009,"cum_cap":54,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.53","35.3919"]},"properties":{"PLANT_CODE":"56648","PLANT_NAME":"Majestic 1 Wind Farm","OPERATING_YEAR":2009,"cum_cap":79.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.1286","32.4081"]},"properties":{"PLANT_CODE":"56649","PLANT_NAME":"South Trent Wind Farm","OPERATING_YEAR":2009,"cum_cap":101.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.5919","44.0411"]},"properties":{"PLANT_CODE":"56650","PLANT_NAME":"Wessington Springs","OPERATING_YEAR":2009,"cum_cap":51,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.5436","40.4381"]},"properties":{"PLANT_CODE":"56651","PLANT_NAME":"North Allegheny Windpower Project","OPERATING_YEAR":2009,"cum_cap":70,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8036","40.8981"]},"properties":{"PLANT_CODE":"56654","PLANT_NAME":"Hatchet Ridge Wind Project","OPERATING_YEAR":2010,"cum_cap":101.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-82.746944","43.663056"]},"properties":{"PLANT_CODE":"56659","PLANT_NAME":"Michigan Wind 2","OPERATING_YEAR":2011,"cum_cap":90,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.5994","27.0011"]},"properties":{"PLANT_CODE":"56661","PLANT_NAME":"Pattern Gulf Wind","OPERATING_YEAR":2008,"cum_cap":283.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.903611","35.546944"]},"properties":{"PLANT_CODE":"56665","PLANT_NAME":"Dempsey Ridge Wind Farm","OPERATING_YEAR":2012,"cum_cap":132,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5908","45.7794"]},"properties":{"PLANT_CODE":"56666","PLANT_NAME":"Goodnoe Hills","OPERATING_YEAR":2008,"cum_cap":94,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.37","46.03"]},"properties":{"PLANT_CODE":"56669","PLANT_NAME":"Tatanka Wind Power LLC","OPERATING_YEAR":2008,"cum_cap":180,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.93","48.06"]},"properties":{"PLANT_CODE":"56670","PLANT_NAME":"Velva Windfarm LLC","OPERATING_YEAR":2005,"cum_cap":11.9,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.0986","34.105"]},"properties":{"PLANT_CODE":"56673","PLANT_NAME":"Whirlwind Energy Center","OPERATING_YEAR":2007,"cum_cap":57,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.62","43.0003"]},"properties":{"PLANT_CODE":"56677","PLANT_NAME":"Charles City Wind Farm","OPERATING_YEAR":2008,"cum_cap":75,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.4886","40.695"]},"properties":{"PLANT_CODE":"56679","PLANT_NAME":"Benton County Wind Farm","OPERATING_YEAR":2008,"cum_cap":130.5,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.8633","40.0853"]},"properties":{"PLANT_CODE":"56699","PLANT_NAME":"Forward Windpower LLC","OPERATING_YEAR":2008,"cum_cap":29.4,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.9183","39.8794"]},"properties":{"PLANT_CODE":"56700","PLANT_NAME":"Lookout Windpower LLC","OPERATING_YEAR":2008,"cum_cap":37.8,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.8072","45.8797"]},"properties":{"PLANT_CODE":"56702","PLANT_NAME":"Tuolumne Wind Project","OPERATING_YEAR":2009,"cum_cap":136.3,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3725","43.6256"]},"properties":{"PLANT_CODE":"56709","PLANT_NAME":"Christoffer Wind Energy I LLC","OPERATING_YEAR":2008,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3672","43.6256"]},"properties":{"PLANT_CODE":"56710","PLANT_NAME":"Christoffer Wind Energy II LLC","OPERATING_YEAR":2008,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3619","43.6256"]},"properties":{"PLANT_CODE":"56711","PLANT_NAME":"Christoffer Wind Energy III LLC","OPERATING_YEAR":2008,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3567","43.6256"]},"properties":{"PLANT_CODE":"56712","PLANT_NAME":"Christoffer Wind Energy IV LLC","OPERATING_YEAR":2008,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3214","44.0358"]},"properties":{"PLANT_CODE":"56750","PLANT_NAME":"Jeffers Wind 20 LLC","OPERATING_YEAR":2008,"cum_cap":50,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111.6297","40.0978"]},"properties":{"PLANT_CODE":"56751","PLANT_NAME":"Spanish Fork Wind Park 2 LLC","OPERATING_YEAR":2008,"cum_cap":18.9,"end_year":9999,"STATE":"UT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.480741","41.288056"]},"properties":{"PLANT_CODE":"56752","PLANT_NAME":"Mountain Wind Power  LLC","OPERATING_YEAR":2008,"cum_cap":61,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.295","41.2025"]},"properties":{"PLANT_CODE":"56753","PLANT_NAME":"Mountain Wind Power II  LLC","OPERATING_YEAR":2008,"cum_cap":80,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.665","29.5531"]},"properties":{"PLANT_CODE":"56754","PLANT_NAME":"Goat Wind LP","OPERATING_YEAR":2008,"cum_cap":80,"end_year":2009,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.665","29.5531"]},"properties":{"PLANT_CODE":"56754","PLANT_NAME":"Goat Wind LP","OPERATING_YEAR":2009,"cum_cap":149.6,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.9142","43.8953"]},"properties":{"PLANT_CODE":"56755","PLANT_NAME":"Odin Wind Farm","OPERATING_YEAR":2008,"cum_cap":20,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.9281","31.9261"]},"properties":{"PLANT_CODE":"56763","PLANT_NAME":"Capricorn Ridge Wind LLC","OPERATING_YEAR":2007,"cum_cap":364,"end_year":2008,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.9281","31.9261"]},"properties":{"PLANT_CODE":"56763","PLANT_NAME":"Capricorn Ridge Wind LLC","OPERATING_YEAR":2008,"cum_cap":662.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.7783","43.3258"]},"properties":{"PLANT_CODE":"56764","PLANT_NAME":"Winnebago Wind Power Project","OPERATING_YEAR":2008,"cum_cap":20,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.1392","43.4231"]},"properties":{"PLANT_CODE":"56765","PLANT_NAME":"Barton Windpower LLC","OPERATING_YEAR":2009,"cum_cap":160,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.5228","40.575"]},"properties":{"PLANT_CODE":"56767","PLANT_NAME":"Farmers City Wind LLC","OPERATING_YEAR":2009,"cum_cap":146,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.1547","40.8411"]},"properties":{"PLANT_CODE":"56770","PLANT_NAME":"Locust Ridge II LLC","OPERATING_YEAR":2009,"cum_cap":102,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.4678","32.3297"]},"properties":{"PLANT_CODE":"56771","PLANT_NAME":"Silver Star I Wind Power Project","OPERATING_YEAR":2008,"cum_cap":60,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.0061","33.7203"]},"properties":{"PLANT_CODE":"56773","PLANT_NAME":"McAdoo Wind Energy LLC","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.2686","32.1981"]},"properties":{"PLANT_CODE":"56774","PLANT_NAME":"Turkey Track Wind  Energy LLC","OPERATING_YEAR":2008,"cum_cap":169.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.9178","30.6672"]},"properties":{"PLANT_CODE":"56775","PLANT_NAME":"Scurry County Wind II","OPERATING_YEAR":2007,"cum_cap":120,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.3336","40.5786"]},"properties":{"PLANT_CODE":"56777","PLANT_NAME":"Fowler Ridge Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":600.3,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.705","30.6603"]},"properties":{"PLANT_CODE":"56779","PLANT_NAME":"Sherbino I Wind Farm","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.1836","46.2753"]},"properties":{"PLANT_CODE":"56782","PLANT_NAME":"Diamond Willow Wind Facility","OPERATING_YEAR":2007,"cum_cap":30,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3986","32.1408"]},"properties":{"PLANT_CODE":"56783","PLANT_NAME":"Elbow Creek Wind Project LLC","OPERATING_YEAR":2008,"cum_cap":121.9,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.6644","39.4375"]},"properties":{"PLANT_CODE":"56784","PLANT_NAME":"Cloud County Wind Farm","OPERATING_YEAR":2008,"cum_cap":201,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.125","45.7119"]},"properties":{"PLANT_CODE":"56789","PLANT_NAME":"Pebble Springs Wind LLC","OPERATING_YEAR":2009,"cum_cap":98.7,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5744","45.52"]},"properties":{"PLANT_CODE":"56790","PLANT_NAME":"Hay Canyon Wind Power LLC","OPERATING_YEAR":2009,"cum_cap":108,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5425","33.9472"]},"properties":{"PLANT_CODE":"56791","PLANT_NAME":"Dillon Wind LLC","OPERATING_YEAR":2008,"cum_cap":45,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4861","44.2389"]},"properties":{"PLANT_CODE":"56792","PLANT_NAME":"Buffalo Ridge I LLC","OPERATING_YEAR":2009,"cum_cap":50.4,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.8278","43.8047"]},"properties":{"PLANT_CODE":"56793","PLANT_NAME":"Elm Creek Wind LLC","OPERATING_YEAR":2008,"cum_cap":99,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.060833","44.064444"]},"properties":{"PLANT_CODE":"56794","PLANT_NAME":"Moraine II Wind LLC","OPERATING_YEAR":2009,"cum_cap":49.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.7892","27.2231"]},"properties":{"PLANT_CODE":"56795","PLANT_NAME":"Penascal Wind Power LLC","OPERATING_YEAR":2009,"cum_cap":201.6,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.570277","39.799722"]},"properties":{"PLANT_CODE":"56796","PLANT_NAME":"South Chestnut LLC","OPERATING_YEAR":2012,"cum_cap":50.4,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.6131","43.4839"]},"properties":{"PLANT_CODE":"56797","PLANT_NAME":"Pioneer Prairie Wind Farm","OPERATING_YEAR":2008,"cum_cap":300,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.856389","42.261111"]},"properties":{"PLANT_CODE":"56800","PLANT_NAME":"Hull Wind II","OPERATING_YEAR":2006,"cum_cap":1.8,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.3828","35.535"]},"properties":{"PLANT_CODE":"56804","PLANT_NAME":"Red Hills Wind Project LLC","OPERATING_YEAR":2008,"cum_cap":123,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.8775","42.4161"]},"properties":{"PLANT_CODE":"56805","PLANT_NAME":"EcoGrove Wind LLC","OPERATING_YEAR":2009,"cum_cap":100.5,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.93","42.1622"]},"properties":{"PLANT_CODE":"56809","PLANT_NAME":"Carroll Wind Farm","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.665","41.4236"]},"properties":{"PLANT_CODE":"56810","PLANT_NAME":"Adair Wind Farm","OPERATING_YEAR":2008,"cum_cap":174.8,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.2383","41.4517"]},"properties":{"PLANT_CODE":"56811","PLANT_NAME":"Walnut Wind Farm","OPERATING_YEAR":2008,"cum_cap":153,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.128056","38.497222"]},"properties":{"PLANT_CODE":"56818","PLANT_NAME":"Central Plains Wind Farm","OPERATING_YEAR":2009,"cum_cap":99,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.460278","37.369167"]},"properties":{"PLANT_CODE":"56819","PLANT_NAME":"Flat Ridge Wind Farm","OPERATING_YEAR":2009,"cum_cap":50,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.4228","32.7683"]},"properties":{"PLANT_CODE":"56823","PLANT_NAME":"Hackberry Wind Farm","OPERATING_YEAR":2008,"cum_cap":162.3,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8222","44.3236"]},"properties":{"PLANT_CODE":"56824","PLANT_NAME":"Marshall Wind 2 LLC","OPERATING_YEAR":2007,"cum_cap":4.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7942","44.3211"]},"properties":{"PLANT_CODE":"56825","PLANT_NAME":"Marshall Wind 3 LLC","OPERATING_YEAR":2007,"cum_cap":4.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8242","44.3361"]},"properties":{"PLANT_CODE":"56826","PLANT_NAME":"Marshall Wind 4 LLC","OPERATING_YEAR":2007,"cum_cap":4.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8344","44.3303"]},"properties":{"PLANT_CODE":"56827","PLANT_NAME":"Marshall Wind 5 LLC","OPERATING_YEAR":2007,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8297","44.3308"]},"properties":{"PLANT_CODE":"56828","PLANT_NAME":"Marshall Wind 6 LLC","OPERATING_YEAR":2007,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.5258","45.3853"]},"properties":{"PLANT_CODE":"56829","PLANT_NAME":"Kibby Wind Power Project","OPERATING_YEAR":2009,"cum_cap":66,"end_year":2010,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.5258","45.3853"]},"properties":{"PLANT_CODE":"56829","PLANT_NAME":"Kibby Wind Power Project","OPERATING_YEAR":2010,"cum_cap":132,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.3875","43.3639"]},"properties":{"PLANT_CODE":"56831","PLANT_NAME":"Crane Creek Wind Energy Center","OPERATING_YEAR":2009,"cum_cap":30,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.54","35.3503"]},"properties":{"PLANT_CODE":"56834","PLANT_NAME":"High Plains Wind Power LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.9789","35.8119"]},"properties":{"PLANT_CODE":"56835","PLANT_NAME":"EXC Wind 11 LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.9986","35.8081"]},"properties":{"PLANT_CODE":"56836","PLANT_NAME":"EXC Wind 10 LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8033","35.9614"]},"properties":{"PLANT_CODE":"56837","PLANT_NAME":"EXC Wind 9 LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8614","36.0075"]},"properties":{"PLANT_CODE":"56838","PLANT_NAME":"EXC Wind 8 LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.9","36.0264"]},"properties":{"PLANT_CODE":"56839","PLANT_NAME":"EXC Wind 7 LLC","OPERATING_YEAR":2008,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8142","44.3253"]},"properties":{"PLANT_CODE":"56840","PLANT_NAME":"Marshall Wind 1 LLC","OPERATING_YEAR":2007,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.835278","43.0181"]},"properties":{"PLANT_CODE":"56841","PLANT_NAME":"Glenrock","OPERATING_YEAR":2008,"cum_cap":99,"end_year":2009,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.835278","43.0181"]},"properties":{"PLANT_CODE":"56841","PLANT_NAME":"Glenrock","OPERATING_YEAR":2009,"cum_cap":138,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.8428","43.0181"]},"properties":{"PLANT_CODE":"56842","PLANT_NAME":"Rolling Hills","OPERATING_YEAR":2009,"cum_cap":99,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.3758","41.9203"]},"properties":{"PLANT_CODE":"56843","PLANT_NAME":"Seven Mile Hill","OPERATING_YEAR":2008,"cum_cap":118.5,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.3628","45.6731"]},"properties":{"PLANT_CODE":"56854","PLANT_NAME":"Wheat Field Wind Power Project","OPERATING_YEAR":2009,"cum_cap":97,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.2008","45.7167"]},"properties":{"PLANT_CODE":"56855","PLANT_NAME":"Arlington Wind Power Project","OPERATING_YEAR":2008,"cum_cap":97,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.4022","40.3692"]},"properties":{"PLANT_CODE":"56856","PLANT_NAME":"Rail Splitter Wind Farm","OPERATING_YEAR":2009,"cum_cap":100.5,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73.929722","44.975833"]},"properties":{"PLANT_CODE":"56857","PLANT_NAME":"Marble River Wind Farm","OPERATING_YEAR":2012,"cum_cap":215,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.6872","47.1356"]},"properties":{"PLANT_CODE":"56858","PLANT_NAME":"Sagebrush Power Partners","OPERATING_YEAR":2010,"cum_cap":100.7,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.9228","43.0475"]},"properties":{"PLANT_CODE":"56859","PLANT_NAME":"Crosswind Energy Project","OPERATING_YEAR":2007,"cum_cap":21,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.365","42.0822"]},"properties":{"PLANT_CODE":"56860","PLANT_NAME":"Hardin Hilltop Wind LLC","OPERATING_YEAR":2007,"cum_cap":14.7,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.8461","38.1711"]},"properties":{"PLANT_CODE":"56874","PLANT_NAME":"Shiloh Wind Project 2 LLC","OPERATING_YEAR":2009,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.6822","43.8006"]},"properties":{"PLANT_CODE":"56876","PLANT_NAME":"Wapsipinicon Wind Project","OPERATING_YEAR":2009,"cum_cap":100.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.2631","40.7178"]},"properties":{"PLANT_CODE":"56878","PLANT_NAME":"Hoosier Wind Project LLC","OPERATING_YEAR":2009,"cum_cap":106,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.4583","37.3764"]},"properties":{"PLANT_CODE":"56879","PLANT_NAME":"Flat Ridge Wind Energy LLC","OPERATING_YEAR":2009,"cum_cap":50,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73.6367","44.8311"]},"properties":{"PLANT_CODE":"56901","PLANT_NAME":"Noble Altona Windpark LLC","OPERATING_YEAR":2009,"cum_cap":97.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.2278","42.6697"]},"properties":{"PLANT_CODE":"56902","PLANT_NAME":"Noble Wethersfield Windpark LLC","OPERATING_YEAR":2009,"cum_cap":126,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73.9858","44.8908"]},"properties":{"PLANT_CODE":"56904","PLANT_NAME":"Noble Chateaugay Windpark LLC","OPERATING_YEAR":2009,"cum_cap":106.5,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3917","36.4964"]},"properties":{"PLANT_CODE":"56905","PLANT_NAME":"Noble Great Plains Windpark LLC","OPERATING_YEAR":2009,"cum_cap":114,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.3164","48.6292"]},"properties":{"PLANT_CODE":"56912","PLANT_NAME":"Langdon Wind II LLC","OPERATING_YEAR":2008,"cum_cap":40.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.4167","43.4303"]},"properties":{"PLANT_CODE":"56913","PLANT_NAME":"Osceola Windpower II","OPERATING_YEAR":2008,"cum_cap":50,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.8853","47.1294"]},"properties":{"PLANT_CODE":"56919","PLANT_NAME":"FPL Energy Ashtabula Wind LLC","OPERATING_YEAR":2008,"cum_cap":148.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.4542","32.7086"]},"properties":{"PLANT_CODE":"56920","PLANT_NAME":"EC&R Panther Creek Wind Farm I","OPERATING_YEAR":2008,"cum_cap":142.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.2983","31.9361"]},"properties":{"PLANT_CODE":"56921","PLANT_NAME":"EC&R Panther Creek Wind Farm II","OPERATING_YEAR":2008,"cum_cap":115.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.8311","43.2125"]},"properties":{"PLANT_CODE":"56923","PLANT_NAME":"FPL Energy Crystal Lake Wind LLC","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.2722","42.1044"]},"properties":{"PLANT_CODE":"56924","PLANT_NAME":"FPL Energy Story Wind LLC","OPERATING_YEAR":2008,"cum_cap":150,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.8311","43.2125"]},"properties":{"PLANT_CODE":"56925","PLANT_NAME":"FPL Energy Crystal Lake Wind II LLC","OPERATING_YEAR":2009,"cum_cap":200,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.9375","45.6758"]},"properties":{"PLANT_CODE":"56933","PLANT_NAME":"Threemile Canyon Wind I LLC","OPERATING_YEAR":2009,"cum_cap":9.9,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.0369","42.8444"]},"properties":{"PLANT_CODE":"56934","PLANT_NAME":"Cassia Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":10.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.0172","42.8744"]},"properties":{"PLANT_CODE":"56935","PLANT_NAME":"Cassia Gulch Wind Park LLC","OPERATING_YEAR":2009,"cum_cap":18.9,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.6836","41.2269"]},"properties":{"PLANT_CODE":"56941","PLANT_NAME":"Grand Ridge Wind Energy Center","OPERATING_YEAR":2008,"cum_cap":99,"end_year":2009,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.6836","41.2269"]},"properties":{"PLANT_CODE":"56941","PLANT_NAME":"Grand Ridge Wind Energy Center","OPERATING_YEAR":2009,"cum_cap":210,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.4969","43.6161"]},"properties":{"PLANT_CODE":"56942","PLANT_NAME":"Forward Wind Energy Center","OPERATING_YEAR":2008,"cum_cap":99,"end_year":2009,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.4969","43.6161"]},"properties":{"PLANT_CODE":"56942","PLANT_NAME":"Forward Wind Energy Center","OPERATING_YEAR":2009,"cum_cap":129,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.8564","34.4653"]},"properties":{"PLANT_CODE":"56945","PLANT_NAME":"High Lonesome Mesa  LLC","OPERATING_YEAR":2009,"cum_cap":100,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.6353","36.7767"]},"properties":{"PLANT_CODE":"56946","PLANT_NAME":"Buffalo Bear LLC","OPERATING_YEAR":2008,"cum_cap":18.9,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.6189","42.6978"]},"properties":{"PLANT_CODE":"56947","PLANT_NAME":"Elkhorn Ridge Wind LLC","OPERATING_YEAR":2009,"cum_cap":81,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.9914","45.6533"]},"properties":{"PLANT_CODE":"56952","PLANT_NAME":"Willow Creek Energy Center","OPERATING_YEAR":2009,"cum_cap":72,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.4269","42.7794"]},"properties":{"PLANT_CODE":"56953","PLANT_NAME":"High Sheldon Wind Farm","OPERATING_YEAR":2009,"cum_cap":112,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.4581","32.9153"]},"properties":{"PLANT_CODE":"56956","PLANT_NAME":"Bull Creek Wind","OPERATING_YEAR":2008,"cum_cap":180,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.3853","32.1217"]},"properties":{"PLANT_CODE":"56959","PLANT_NAME":"Ocotillo Windpower","OPERATING_YEAR":2008,"cum_cap":58.8,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.0078","41.1464"]},"properties":{"PLANT_CODE":"56960","PLANT_NAME":"Happy Jack Windpower Project","OPERATING_YEAR":2008,"cum_cap":29.4,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.8492","31.9986"]},"properties":{"PLANT_CODE":"56961","PLANT_NAME":"Notrees Windpower","OPERATING_YEAR":2009,"cum_cap":152.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4222","45.7017"]},"properties":{"PLANT_CODE":"56967","PLANT_NAME":"Butter Creek Power LLC","OPERATING_YEAR":2009,"cum_cap":5,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4647","45.655"]},"properties":{"PLANT_CODE":"56968","PLANT_NAME":"Big Top LLC","OPERATING_YEAR":2009,"cum_cap":1.7,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4181","45.7286"]},"properties":{"PLANT_CODE":"56969","PLANT_NAME":"Four Corners Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":10,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4533","45.6447"]},"properties":{"PLANT_CODE":"56970","PLANT_NAME":"Four Mile Canyon Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":10,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4044","45.7122"]},"properties":{"PLANT_CODE":"56971","PLANT_NAME":"Oregon Trail Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":9.9,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4869","45.6542"]},"properties":{"PLANT_CODE":"56972","PLANT_NAME":"Pacific Canyon Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":8.3,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4767","45.6447"]},"properties":{"PLANT_CODE":"56973","PLANT_NAME":"Sand Ranch Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":9.9,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4625","45.6531"]},"properties":{"PLANT_CODE":"56974","PLANT_NAME":"Wagon Trail LLC","OPERATING_YEAR":2009,"cum_cap":3.3,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-119.4097","45.6967"]},"properties":{"PLANT_CODE":"56975","PLANT_NAME":"Ward Butte Windfarm LLC","OPERATING_YEAR":2009,"cum_cap":6.6,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.1167","31.9925"]},"properties":{"PLANT_CODE":"56979","PLANT_NAME":"EC&R Panther Creek Wind Farm III","OPERATING_YEAR":2009,"cum_cap":199.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.8153","40.0311"]},"properties":{"PLANT_CODE":"56980","PLANT_NAME":"Stony Creek Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":52.5,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.6728","32.5886"]},"properties":{"PLANT_CODE":"56981","PLANT_NAME":"Pyron Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":249,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.4586","27.9386"]},"properties":{"PLANT_CODE":"56983","PLANT_NAME":"EC&R Papalote Creek I LLC","OPERATING_YEAR":2009,"cum_cap":180,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.5797","32.4969"]},"properties":{"PLANT_CODE":"56984","PLANT_NAME":"Inadale Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":197,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.2631","38.8756"]},"properties":{"PLANT_CODE":"56985","PLANT_NAME":"Smoky Hills Wind Project Phase II","OPERATING_YEAR":2008,"cum_cap":148.5,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-67.9944","45.4822"]},"properties":{"PLANT_CODE":"56989","PLANT_NAME":"Stetson Wind I","OPERATING_YEAR":2009,"cum_cap":57,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-68.35","45.366667"]},"properties":{"PLANT_CODE":"56990","PLANT_NAME":"Rollins Wind Project","OPERATING_YEAR":2011,"cum_cap":60,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-67.9586","45.5822"]},"properties":{"PLANT_CODE":"56991","PLANT_NAME":"Stetson Wind II","OPERATING_YEAR":2010,"cum_cap":25.5,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.705","43.7189"]},"properties":{"PLANT_CODE":"56994","PLANT_NAME":"Grand Meadow","OPERATING_YEAR":2008,"cum_cap":100.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.8975","47.3272"]},"properties":{"PLANT_CODE":"57031","PLANT_NAME":"Luverne Wind Farm","OPERATING_YEAR":2009,"cum_cap":4,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.8961","47.1244"]},"properties":{"PLANT_CODE":"57032","PLANT_NAME":"Ashtabula Wind Energy Center","OPERATING_YEAR":2008,"cum_cap":48,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.3169","48.6303"]},"properties":{"PLANT_CODE":"57033","PLANT_NAME":"Langdon Wind Energy Center","OPERATING_YEAR":2007,"cum_cap":40.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.5486","46.9783"]},"properties":{"PLANT_CODE":"57038","PLANT_NAME":"Bison I Wind Energy Center","OPERATING_YEAR":2010,"cum_cap":36.8,"end_year":2013,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.5486","46.9783"]},"properties":{"PLANT_CODE":"57038","PLANT_NAME":"Bison I Wind Energy Center","OPERATING_YEAR":2012,"cum_cap":81.8,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9906","41.7244"]},"properties":{"PLANT_CODE":"57039","PLANT_NAME":"McFadden Ridge","OPERATING_YEAR":2009,"cum_cap":28.5,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.9906","41.7244"]},"properties":{"PLANT_CODE":"57040","PLANT_NAME":"High Plains","OPERATING_YEAR":2009,"cum_cap":99,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.8553","41.7619"]},"properties":{"PLANT_CODE":"57044","PLANT_NAME":"Armenia Mountain Wind Farm","OPERATING_YEAR":2009,"cum_cap":100.5,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.133889","44.477778"]},"properties":{"PLANT_CODE":"57045","PLANT_NAME":"Rolling Thunder Wind Farm","OPERATING_YEAR":2009,"cum_cap":25,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.7131","43.7036"]},"properties":{"PLANT_CODE":"57047","PLANT_NAME":"Nobles Wind Project","OPERATING_YEAR":2010,"cum_cap":201,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.1097","48.51"]},"properties":{"PLANT_CODE":"57049","PLANT_NAME":"NaturEner Glacier Wind Energy 1","OPERATING_YEAR":2008,"cum_cap":104.2,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.1847","48.5333"]},"properties":{"PLANT_CODE":"57050","PLANT_NAME":"NaturEner Glacier Wind Energy 2","OPERATING_YEAR":2009,"cum_cap":100,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.853611","42.821111"]},"properties":{"PLANT_CODE":"57078","PLANT_NAME":"Steel Winds II","OPERATING_YEAR":2012,"cum_cap":15,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-113.0139","38.3947"]},"properties":{"PLANT_CODE":"57079","PLANT_NAME":"Milford Wind Corridor I LLC","OPERATING_YEAR":2009,"cum_cap":203.5,"end_year":9999,"STATE":"UT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-72.124444","44.659722"]},"properties":{"PLANT_CODE":"57080","PLANT_NAME":"Sheffield Wind","OPERATING_YEAR":2011,"cum_cap":40,"end_year":9999,"STATE":"VT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-156.551389","20.817778"]},"properties":{"PLANT_CODE":"57082","PLANT_NAME":"Kaheawa Wind Power II LLC","OPERATING_YEAR":2012,"cum_cap":21,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-68.2425","44.723056"]},"properties":{"PLANT_CODE":"57083","PLANT_NAME":"Bull Hill Wind Project","OPERATING_YEAR":2012,"cum_cap":34.5,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-157.974444","21.691944"]},"properties":{"PLANT_CODE":"57087","PLANT_NAME":"Kahuku Wind Power LLC","OPERATING_YEAR":2011,"cum_cap":30,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.0064","42.9683"]},"properties":{"PLANT_CODE":"57090","PLANT_NAME":"Campbell Hill Windpower","OPERATING_YEAR":2009,"cum_cap":99,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.0136","41.1456"]},"properties":{"PLANT_CODE":"57091","PLANT_NAME":"Silver Sage Windpower","OPERATING_YEAR":2009,"cum_cap":42,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.2331","42.9011"]},"properties":{"PLANT_CODE":"57093","PLANT_NAME":"Casper Wind Farm","OPERATING_YEAR":2009,"cum_cap":17,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.49","40.9969"]},"properties":{"PLANT_CODE":"57094","PLANT_NAME":"Streator Cayuga Ridge South","OPERATING_YEAR":2010,"cum_cap":300,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.7892","27.2231"]},"properties":{"PLANT_CODE":"57095","PLANT_NAME":"Penascal II Wind Project LLC","OPERATING_YEAR":2010,"cum_cap":201,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.5517","45.5781"]},"properties":{"PLANT_CODE":"57096","PLANT_NAME":"Star Point Wind Project LLC","OPERATING_YEAR":2010,"cum_cap":98.7,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.7514","46.8644"]},"properties":{"PLANT_CODE":"57097","PLANT_NAME":"Rugby Wind Power Project","OPERATING_YEAR":2009,"cum_cap":149,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.4217","34.5372"]},"properties":{"PLANT_CODE":"57098","PLANT_NAME":"Dry Lake Wind LLC","OPERATING_YEAR":2009,"cum_cap":63,"end_year":9999,"STATE":"AZ"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.74","35.17"]},"properties":{"PLANT_CODE":"57106","PLANT_NAME":"Mesalands Comm College Wind Turbine","OPERATING_YEAR":2008,"cum_cap":1.5,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-113.013888","38.394722"]},"properties":{"PLANT_CODE":"57107","PLANT_NAME":"Milford Wind Corridor Stage II LLC","OPERATING_YEAR":2011,"cum_cap":102,"end_year":9999,"STATE":"UT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.4525","34.8217"]},"properties":{"PLANT_CODE":"57108","PLANT_NAME":"Blue Canyon Windpower V LLC","OPERATING_YEAR":2009,"cum_cap":99,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-86.935","40.6275"]},"properties":{"PLANT_CODE":"57109","PLANT_NAME":"Meadow Lake Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":199.7,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.6233","41.1508"]},"properties":{"PLANT_CODE":"57110","PLANT_NAME":"Blackstone Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":102,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.3233","43.3456"]},"properties":{"PLANT_CODE":"57111","PLANT_NAME":"Lost Lakes Wind Farm LLC","OPERATING_YEAR":2009,"cum_cap":100,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.0242","40.6431"]},"properties":{"PLANT_CODE":"57112","PLANT_NAME":"Meadow Lake Wind Farm II LLC","OPERATING_YEAR":2010,"cum_cap":99,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.53","41.1406"]},"properties":{"PLANT_CODE":"57113","PLANT_NAME":"Blackstone Wind Farm II LLC","OPERATING_YEAR":2010,"cum_cap":200,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.0194","40.5986"]},"properties":{"PLANT_CODE":"57115","PLANT_NAME":"Meadow Lake Wind Farm III LLC","OPERATING_YEAR":2010,"cum_cap":103.5,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.3458","37.6"]},"properties":{"PLANT_CODE":"57118","PLANT_NAME":"Greensburg Wind Farm LLC","OPERATING_YEAR":2010,"cum_cap":12.5,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7011","47.1333"]},"properties":{"PLANT_CODE":"57120","PLANT_NAME":"Wilton Wind II LLC","OPERATING_YEAR":2009,"cum_cap":49.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.8956","47.1242"]},"properties":{"PLANT_CODE":"57121","PLANT_NAME":"Ashtabula Wind II LLC","OPERATING_YEAR":2009,"cum_cap":120,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.010833","42.825278"]},"properties":{"PLANT_CODE":"57124","PLANT_NAME":"Payne's Ferry","OPERATING_YEAR":2010,"cum_cap":21,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.048889","42.811944"]},"properties":{"PLANT_CODE":"57125","PLANT_NAME":"Camp Reed","OPERATING_YEAR":2010,"cum_cap":22.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.988611","42.770833"]},"properties":{"PLANT_CODE":"57126","PLANT_NAME":"Yahoo Creek","OPERATING_YEAR":2010,"cum_cap":21,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-69.35","44.4967"]},"properties":{"PLANT_CODE":"57130","PLANT_NAME":"Beaver Ridge Wind","OPERATING_YEAR":2008,"cum_cap":1.5,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-85.2983","44.19"]},"properties":{"PLANT_CODE":"57131","PLANT_NAME":"Stoney Corners Wind Farm","OPERATING_YEAR":2009,"cum_cap":59,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.456111","41.599167"]},"properties":{"PLANT_CODE":"57135","PLANT_NAME":"Big Sky Wind LLC","OPERATING_YEAR":2011,"cum_cap":240,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.0164","42.8925"]},"properties":{"PLANT_CODE":"57136","PLANT_NAME":"Tuana Springs","OPERATING_YEAR":2010,"cum_cap":16.8,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.3486","45.5631"]},"properties":{"PLANT_CODE":"57137","PLANT_NAME":"Eurus Combine Hills Turbine Ranch 2","OPERATING_YEAR":2010,"cum_cap":63,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.6908","40.3042"]},"properties":{"PLANT_CODE":"57139","PLANT_NAME":"Highland Wind Project","OPERATING_YEAR":2009,"cum_cap":62.5,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-80.4925","38.0878"]},"properties":{"PLANT_CODE":"57151","PLANT_NAME":"Beech Ridge Energy LLC","OPERATING_YEAR":2010,"cum_cap":100.5,"end_year":9999,"STATE":"WV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.3475","45.8131"]},"properties":{"PLANT_CODE":"57152","PLANT_NAME":"Harvest Wind Project","OPERATING_YEAR":2009,"cum_cap":98.9,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.5025","31.1178"]},"properties":{"PLANT_CODE":"57153","PLANT_NAME":"Langford Wind Power","OPERATING_YEAR":2009,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.1608","33.2067"]},"properties":{"PLANT_CODE":"57156","PLANT_NAME":"Barton Chapel Wind Farm","OPERATING_YEAR":2009,"cum_cap":120,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.8339","45.7269"]},"properties":{"PLANT_CODE":"57159","PLANT_NAME":"Windy Flats Wind Project","OPERATING_YEAR":2009,"cum_cap":262.2,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.7636","46.2486"]},"properties":{"PLANT_CODE":"57171","PLANT_NAME":"Cedar Hills","OPERATING_YEAR":2010,"cum_cap":19.5,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.743055","40.756944"]},"properties":{"PLANT_CODE":"57174","PLANT_NAME":"Colorado Highlands Wind","OPERATING_YEAR":2012,"cum_cap":67.2,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-75.165","38.8161"]},"properties":{"PLANT_CODE":"57176","PLANT_NAME":"University of Delaware Wind Turbine","OPERATING_YEAR":2010,"cum_cap":2,"end_year":9999,"STATE":"DE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.0328","40.6778"]},"properties":{"PLANT_CODE":"57177","PLANT_NAME":"Meadow Lake Wind Farm IV","OPERATING_YEAR":2010,"cum_cap":98.7,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.455555","39.959167"]},"properties":{"PLANT_CODE":"57182","PLANT_NAME":"PPL Frey Farm Landfill Wind","OPERATING_YEAR":2011,"cum_cap":3.2,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-152.4406","57.7869"]},"properties":{"PLANT_CODE":"57187","PLANT_NAME":"Pillar Mountain Wind Project","OPERATING_YEAR":2009,"cum_cap":4.5,"end_year":2013,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-152.4406","57.7869"]},"properties":{"PLANT_CODE":"57187","PLANT_NAME":"Pillar Mountain Wind Project","OPERATING_YEAR":2012,"cum_cap":9,"end_year":9999,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.1819","46.9547"]},"properties":{"PLANT_CODE":"57188","PLANT_NAME":"Vantage Wind Energy LLC","OPERATING_YEAR":2010,"cum_cap":90,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.6433","40.0381"]},"properties":{"PLANT_CODE":"57189","PLANT_NAME":"Lost Creek Wind Energy Facility","OPERATING_YEAR":2010,"cum_cap":150,"end_year":9999,"STATE":"MO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.492222","39.104167"]},"properties":{"PLANT_CODE":"57192","PLANT_NAME":"Spring Valley Wind Project","OPERATING_YEAR":2012,"cum_cap":150,"end_year":9999,"STATE":"NV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.9056","45.215"]},"properties":{"PLANT_CODE":"57194","PLANT_NAME":"Day County Wind LLC","OPERATING_YEAR":2010,"cum_cap":99,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.821666","46.524167"]},"properties":{"PLANT_CODE":"57195","PLANT_NAME":"Lower Snake River Wind Energy Project","OPERATING_YEAR":2012,"cum_cap":342,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.450429","43.724596"]},"properties":{"PLANT_CODE":"57198","PLANT_NAME":"Bent Tree Wind Farm Phase 1","OPERATING_YEAR":2011,"cum_cap":200,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.148056","43.563889"]},"properties":{"PLANT_CODE":"57199","PLANT_NAME":"Glacier Hills","OPERATING_YEAR":2011,"cum_cap":32.4,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.7833","38.7208"]},"properties":{"PLANT_CODE":"57201","PLANT_NAME":"FPL Energy Montezuma Winds LLC","OPERATING_YEAR":2010,"cum_cap":36.8,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.783889","40.9475"]},"properties":{"PLANT_CODE":"57210","PLANT_NAME":"Cedar Creek II","OPERATING_YEAR":2011,"cum_cap":250.8,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111.8403","43.5347"]},"properties":{"PLANT_CODE":"57211","PLANT_NAME":"Goshen Phase II","OPERATING_YEAR":2010,"cum_cap":124.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.2967","27.9958"]},"properties":{"PLANT_CODE":"57212","PLANT_NAME":"EC&R Papalote Creek II LLC","OPERATING_YEAR":2010,"cum_cap":200.1,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.4711","42.7317"]},"properties":{"PLANT_CODE":"57214","PLANT_NAME":"Waverly Community Wind Project","OPERATING_YEAR":2001,"cum_cap":0.9,"end_year":2009,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.4711","42.7317"]},"properties":{"PLANT_CODE":"57214","PLANT_NAME":"Waverly Community Wind Project","OPERATING_YEAR":2009,"cum_cap":1.8,"end_year":2013,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.4711","42.7317"]},"properties":{"PLANT_CODE":"57214","PLANT_NAME":"Waverly Community Wind Project","OPERATING_YEAR":2012,"cum_cap":2.7,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.467222","39.254444"]},"properties":{"PLANT_CODE":"57239","PLANT_NAME":"Roth Rock Wind Farm LLC","OPERATING_YEAR":2011,"cum_cap":40,"end_year":9999,"STATE":"MD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.434444","39.287222"]},"properties":{"PLANT_CODE":"57240","PLANT_NAME":"Roth Rock North Wind Farm, LLC","OPERATING_YEAR":2011,"cum_cap":10,"end_year":9999,"STATE":"MD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.3533","39.3383"]},"properties":{"PLANT_CODE":"57244","PLANT_NAME":"Kit Carson Windpower","OPERATING_YEAR":2010,"cum_cap":51,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.5892","43.6825"]},"properties":{"PLANT_CODE":"57248","PLANT_NAME":"Welcome Wind Turbine","OPERATING_YEAR":2008,"cum_cap":2.1,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.1475","43.3839"]},"properties":{"PLANT_CODE":"57251","PLANT_NAME":"Lakota Wind Wind Farm","OPERATING_YEAR":2009,"cum_cap":10.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.9617","43.4308"]},"properties":{"PLANT_CODE":"57252","PLANT_NAME":"Iowa Lakes Superior Wind Farm","OPERATING_YEAR":2009,"cum_cap":10.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.5942","41.6647"]},"properties":{"PLANT_CODE":"57253","PLANT_NAME":"MA Military Reservation Wind Project","OPERATING_YEAR":2009,"cum_cap":1.5,"end_year":2011,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.5942","41.6647"]},"properties":{"PLANT_CODE":"57253","PLANT_NAME":"MA Military Reservation Wind Project","OPERATING_YEAR":2011,"cum_cap":4.5,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.8156","42.3903"]},"properties":{"PLANT_CODE":"57257","PLANT_NAME":"Iowa Lakes Community College Wind Farm","OPERATING_YEAR":2005,"cum_cap":1,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.0667","34.36"]},"properties":{"PLANT_CODE":"57258","PLANT_NAME":"Texico Wind Ranch LP","OPERATING_YEAR":2003,"cum_cap":1.9,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.7653","33.5697"]},"properties":{"PLANT_CODE":"57259","PLANT_NAME":"Lubbock Wind Ranch","OPERATING_YEAR":2010,"cum_cap":7.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.8367","27.4472"]},"properties":{"PLANT_CODE":"57260","PLANT_NAME":"Cedro Hill Wind LLC","OPERATING_YEAR":2010,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.968333","35.855556"]},"properties":{"PLANT_CODE":"57261","PLANT_NAME":"Taloga Wind LLC","OPERATING_YEAR":2011,"cum_cap":130,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.078611","41.853333"]},"properties":{"PLANT_CODE":"57262","PLANT_NAME":"Laredo Ridge Wind LLC","OPERATING_YEAR":2011,"cum_cap":79.9,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.54","35.9342"]},"properties":{"PLANT_CODE":"57263","PLANT_NAME":"Little Pringle I Wind Farm","OPERATING_YEAR":2010,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.5414","35.9247"]},"properties":{"PLANT_CODE":"57264","PLANT_NAME":"Little Pringle II Wind Farm","OPERATING_YEAR":2010,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.430555","40.506111"]},"properties":{"PLANT_CODE":"57268","PLANT_NAME":"Chestnut Flats Wind Farm","OPERATING_YEAR":2011,"cum_cap":38,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.8844","45.8033"]},"properties":{"PLANT_CODE":"57274","PLANT_NAME":"Grant County Wind LLC","OPERATING_YEAR":2010,"cum_cap":20,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.58","42.698333"]},"properties":{"PLANT_CODE":"57278","PLANT_NAME":"Crofton Bluffs Wind LLC","OPERATING_YEAR":2012,"cum_cap":40,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.045278","35.022222"]},"properties":{"PLANT_CODE":"57282","PLANT_NAME":"Alta Wind Energy Center I","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.9289","40.0011"]},"properties":{"PLANT_CODE":"57283","PLANT_NAME":"Flat Water Wind Farm","OPERATING_YEAR":2010,"cum_cap":60,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.997222","40.888611"]},"properties":{"PLANT_CODE":"57284","PLANT_NAME":"Minonk Wind Farm","OPERATING_YEAR":2012,"cum_cap":192.3,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.222222","40.745278"]},"properties":{"PLANT_CODE":"57285","PLANT_NAME":"Sandy Ridge Wind Farm","OPERATING_YEAR":2012,"cum_cap":48.2,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.3542","36.2469"]},"properties":{"PLANT_CODE":"57286","PLANT_NAME":"OU Spirit Wind Farm","OPERATING_YEAR":2009,"cum_cap":101.2,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-74.878888","43.112222"]},"properties":{"PLANT_CODE":"57287","PLANT_NAME":"Hardscrabble Wind Power LLC","OPERATING_YEAR":2011,"cum_cap":74,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.191944","43.612222"]},"properties":{"PLANT_CODE":"57289","PLANT_NAME":"Big Blue","OPERATING_YEAR":2012,"cum_cap":36,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.8969","40.9881"]},"properties":{"PLANT_CODE":"57290","PLANT_NAME":"Northern Colorado Wind LLC","OPERATING_YEAR":2009,"cum_cap":174.3,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.295278","35.023889"]},"properties":{"PLANT_CODE":"57291","PLANT_NAME":"Alta Wind Energy Center II","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.295278","35.023889"]},"properties":{"PLANT_CODE":"57292","PLANT_NAME":"Alta Wind Energy Center III","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.242222","35.008611"]},"properties":{"PLANT_CODE":"57293","PLANT_NAME":"Alta Wind Energy Center IV","OPERATING_YEAR":2011,"cum_cap":102,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.242222","35.008611"]},"properties":{"PLANT_CODE":"57294","PLANT_NAME":"Alta Wind Energy Center V","OPERATING_YEAR":2011,"cum_cap":168,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.1553","44.4594"]},"properties":{"PLANT_CODE":"57296","PLANT_NAME":"Carleton College","OPERATING_YEAR":2004,"cum_cap":1.6,"end_year":2011,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.1553","44.4594"]},"properties":{"PLANT_CODE":"57296","PLANT_NAME":"Carleton College","OPERATING_YEAR":2011,"cum_cap":3.2,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-106.160278","42.043611"]},"properties":{"PLANT_CODE":"57299","PLANT_NAME":"Dunlap","OPERATING_YEAR":2010,"cum_cap":111,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.29","39.4047"]},"properties":{"PLANT_CODE":"57300","PLANT_NAME":"Criterion Wind Project","OPERATING_YEAR":2010,"cum_cap":70,"end_year":9999,"STATE":"MD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5603","33.8942"]},"properties":{"PLANT_CODE":"57301","PLANT_NAME":"Dutch Wind Energy","OPERATING_YEAR":1994,"cum_cap":8,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.5825","33.9053"]},"properties":{"PLANT_CODE":"57302","PLANT_NAME":"Garnet Wind Energy Center","OPERATING_YEAR":2009,"cum_cap":6.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7444","32.4375"]},"properties":{"PLANT_CODE":"57303","PLANT_NAME":"Loraine Windpower Park LLC","OPERATING_YEAR":2009,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.6953","39.4115"]},"properties":{"PLANT_CODE":"57315","PLANT_NAME":"Cedar Point Wind","OPERATING_YEAR":2011,"cum_cap":243,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.3039","45.9192"]},"properties":{"PLANT_CODE":"57319","PLANT_NAME":"Big Horn Wind II","OPERATING_YEAR":2011,"cum_cap":50,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.303889","45.919167"]},"properties":{"PLANT_CODE":"57320","PLANT_NAME":"Juniper Canyon I Wind Project","OPERATING_YEAR":2011,"cum_cap":151.2,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.8867","41.7678"]},"properties":{"PLANT_CODE":"57325","PLANT_NAME":"FPL Energy Illinois Wind LLC","OPERATING_YEAR":2009,"cum_cap":217.5,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.8244","35.1686"]},"properties":{"PLANT_CODE":"57326","PLANT_NAME":"Sunray Wind I","OPERATING_YEAR":2009,"cum_cap":49.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.7872","42.9258"]},"properties":{"PLANT_CODE":"57327","PLANT_NAME":"Top of the World Windpower Project","OPERATING_YEAR":2010,"cum_cap":200,"end_year":9999,"STATE":"WY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.722222","36.035"]},"properties":{"PLANT_CODE":"57332","PLANT_NAME":"Crossroads Wind Farm","OPERATING_YEAR":2012,"cum_cap":227,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.303889","45.919167"]},"properties":{"PLANT_CODE":"57333","PLANT_NAME":"Leaning Juniper Wind Power II","OPERATING_YEAR":2011,"cum_cap":201,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.046666","40.590833"]},"properties":{"PLANT_CODE":"57342","PLANT_NAME":"White Oak Energy LLC","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.8983","35.4642"]},"properties":{"PLANT_CODE":"57346","PLANT_NAME":"Elk City LLC","OPERATING_YEAR":2009,"cum_cap":98.9,"end_year":2010,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.8983","35.4642"]},"properties":{"PLANT_CODE":"57346","PLANT_NAME":"Elk City LLC","OPERATING_YEAR":2010,"cum_cap":198.1,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.7086","47.1133"]},"properties":{"PLANT_CODE":"57347","PLANT_NAME":"Baldwin Wind LLC","OPERATING_YEAR":2010,"cum_cap":102.4,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.2514","41.6144"]},"properties":{"PLANT_CODE":"57350","PLANT_NAME":"Portsmouth Wind Turbine","OPERATING_YEAR":2009,"cum_cap":1.5,"end_year":9999,"STATE":"RI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.4269","43.9811"]},"properties":{"PLANT_CODE":"57351","PLANT_NAME":"Uilk Wind LLC","OPERATING_YEAR":2010,"cum_cap":4.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-68.865833","44.094167"]},"properties":{"PLANT_CODE":"57354","PLANT_NAME":"Fox Island Wind LLC","OPERATING_YEAR":2009,"cum_cap":4.5,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-107.3828","35.2689"]},"properties":{"PLANT_CODE":"57357","PLANT_NAME":"Red Mesa Wind LLC","OPERATING_YEAR":2010,"cum_cap":102.4,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.4958","35.2697"]},"properties":{"PLANT_CODE":"57358","PLANT_NAME":"Keenan II Renewable Energy Co LLC","OPERATING_YEAR":2010,"cum_cap":151.8,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.156666","43.675"]},"properties":{"PLANT_CODE":"57374","PLANT_NAME":"Lakefield Wind Project LLC","OPERATING_YEAR":2011,"cum_cap":205.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.735555","44.916944"]},"properties":{"PLANT_CODE":"57375","PLANT_NAME":"Adams Wind Generations LLC","OPERATING_YEAR":2011,"cum_cap":20,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111","34.7167"]},"properties":{"PLANT_CODE":"57379","PLANT_NAME":"Dry Lake Wind II LLC","OPERATING_YEAR":2010,"cum_cap":65.1,"end_year":9999,"STATE":"AZ"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73","45"]},"properties":{"PLANT_CODE":"57380","PLANT_NAME":"New England Wind LLC","OPERATING_YEAR":2012,"cum_cap":28.5,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.583889","44.335833"]},"properties":{"PLANT_CODE":"57385","PLANT_NAME":"Community Wind North LLC","OPERATING_YEAR":2011,"cum_cap":30,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.065277","44.018889"]},"properties":{"PLANT_CODE":"57386","PLANT_NAME":"Ridgewind","OPERATING_YEAR":2011,"cum_cap":25.3,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.8956","47.1242"]},"properties":{"PLANT_CODE":"57387","PLANT_NAME":"Ashtabula Wind III LLC","OPERATING_YEAR":2010,"cum_cap":62.4,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.752222","45.071667"]},"properties":{"PLANT_CODE":"57396","PLANT_NAME":"Danielson Wind Farms LLC","OPERATING_YEAR":2011,"cum_cap":20,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.6089","41.6083"]},"properties":{"PLANT_CODE":"57414","PLANT_NAME":"Notus Wind 1","OPERATING_YEAR":2010,"cum_cap":1.7,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.884444","30.894722"]},"properties":{"PLANT_CODE":"57415","PLANT_NAME":"Sherbino II","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.370833","42.583889"]},"properties":{"PLANT_CODE":"57417","PLANT_NAME":"Elk Wind Farm","OPERATING_YEAR":2011,"cum_cap":40.8,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.4975","43.433889"]},"properties":{"PLANT_CODE":"57421","PLANT_NAME":"Gratiot Wind Park","OPERATING_YEAR":2011,"cum_cap":102,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.6267","44.5281"]},"properties":{"PLANT_CODE":"57424","PLANT_NAME":"Buffalo Ridge II LLC","OPERATING_YEAR":2010,"cum_cap":210,"end_year":9999,"STATE":"SD"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57427","PLANT_NAME":"Ryegrass Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57428","PLANT_NAME":"Hammett Hill Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57429","PLANT_NAME":"Mainline Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57430","PLANT_NAME":"Desert Meadow Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57431","PLANT_NAME":"Cold Springs Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.140555","43.920556"]},"properties":{"PLANT_CODE":"57432","PLANT_NAME":"Oak Glen Wind Farm","OPERATING_YEAR":2011,"cum_cap":44,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.037777","43.915833"]},"properties":{"PLANT_CODE":"57434","PLANT_NAME":"Valley View Transmission LLC","OPERATING_YEAR":2011,"cum_cap":10,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.488888","40.031111"]},"properties":{"PLANT_CODE":"57444","PLANT_NAME":"Two Ponds Windfarm","OPERATING_YEAR":2012,"cum_cap":23,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.935555","39.025"]},"properties":{"PLANT_CODE":"57447","PLANT_NAME":"Laurel Mountain","OPERATING_YEAR":2011,"cum_cap":97.6,"end_year":9999,"STATE":"WV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83","38"]},"properties":{"PLANT_CODE":"57449","PLANT_NAME":"Blue Creek Wind Project","OPERATING_YEAR":2011,"cum_cap":302,"end_year":9999,"STATE":"OH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.551111","33.907778"]},"properties":{"PLANT_CODE":"57459","PLANT_NAME":"Mountain View IV","OPERATING_YEAR":2012,"cum_cap":49,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.120833","41.215278"]},"properties":{"PLANT_CODE":"57463","PLANT_NAME":"Bishop Hill Energy LLC","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.8836","43.3192"]},"properties":{"PLANT_CODE":"57468","PLANT_NAME":"Crystal Lake 3 LLC","OPERATING_YEAR":2009,"cum_cap":66,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.2697","42.9692"]},"properties":{"PLANT_CODE":"57469","PLANT_NAME":"Garden Wind LLC","OPERATING_YEAR":2009,"cum_cap":150,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.39","33.661111"]},"properties":{"PLANT_CODE":"57474","PLANT_NAME":"Ralls Wind Farm","OPERATING_YEAR":2011,"cum_cap":10,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118","34"]},"properties":{"PLANT_CODE":"57484","PLANT_NAME":"Manzana Wind LLC","OPERATING_YEAR":2012,"cum_cap":189,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.570833","40.694444"]},"properties":{"PLANT_CODE":"57493","PLANT_NAME":"Settlers Trail Wind Farm LLC","OPERATING_YEAR":2011,"cum_cap":150.4,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.933333","41.883333"]},"properties":{"PLANT_CODE":"57500","PLANT_NAME":"Laurel Wind Farm","OPERATING_YEAR":2011,"cum_cap":119.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.766667","41.316667"]},"properties":{"PLANT_CODE":"57501","PLANT_NAME":"Rolling Hills Wind Farm","OPERATING_YEAR":2011,"cum_cap":443.9,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.044722","32.752778"]},"properties":{"PLANT_CODE":"57514","PLANT_NAME":"Ocotillo Express LLC","OPERATING_YEAR":2012,"cum_cap":265.4,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.393611","36.543889"]},"properties":{"PLANT_CODE":"57516","PLANT_NAME":"KODE Novus I","OPERATING_YEAR":2012,"cum_cap":80,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.622777","36.499444"]},"properties":{"PLANT_CODE":"57517","PLANT_NAME":"DeWind Frisco","OPERATING_YEAR":2012,"cum_cap":20,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.711944","33.383611"]},"properties":{"PLANT_CODE":"57520","PLANT_NAME":"Trinity Hills","OPERATING_YEAR":2011,"cum_cap":225,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.173888","45.288056"]},"properties":{"PLANT_CODE":"57526","PLANT_NAME":"North Hurlburt Wind LLC","OPERATING_YEAR":2012,"cum_cap":265,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-158.038889","21.675278"]},"properties":{"PLANT_CODE":"57529","PLANT_NAME":"Kawailoa Wind","OPERATING_YEAR":2012,"cum_cap":69,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.364444","47.155833"]},"properties":{"PLANT_CODE":"57530","PLANT_NAME":"Palouse","OPERATING_YEAR":2012,"cum_cap":105.3,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.924722","44.1125"]},"properties":{"PLANT_CODE":"57547","PLANT_NAME":"Winona County Wind LLC","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.173888","45.288056"]},"properties":{"PLANT_CODE":"57549","PLANT_NAME":"South Hurlburt Wind LLC","OPERATING_YEAR":2012,"cum_cap":290,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.173888","45.288056"]},"properties":{"PLANT_CODE":"57550","PLANT_NAME":"Horseshoe Bend Wind LLC","OPERATING_YEAR":2012,"cum_cap":290,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.9278","44.3481"]},"properties":{"PLANT_CODE":"57553","PLANT_NAME":"Shirley Wind","OPERATING_YEAR":2010,"cum_cap":20,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.6333","35.1333"]},"properties":{"PLANT_CODE":"57558","PLANT_NAME":"GE 1 5 SLE Prototype","OPERATING_YEAR":2000,"cum_cap":1.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.369444","35.155278"]},"properties":{"PLANT_CODE":"57566","PLANT_NAME":"GE 1 6 100 Prototype","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.627777","44.633611"]},"properties":{"PLANT_CODE":"57568","PLANT_NAME":"Record Hill Wind","OPERATING_YEAR":2012,"cum_cap":50.6,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.6439","45.5842"]},"properties":{"PLANT_CODE":"57578","PLANT_NAME":"PaTu Wind Farm LLC","OPERATING_YEAR":2010,"cum_cap":9,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.846944","38.169444"]},"properties":{"PLANT_CODE":"57586","PLANT_NAME":"Shiloh III Wind Project LLC","OPERATING_YEAR":2011,"cum_cap":102.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.9442","35.3125"]},"properties":{"PLANT_CODE":"57590","PLANT_NAME":"Minco Wind I, LLC","OPERATING_YEAR":2010,"cum_cap":99.2,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.556389","41.626111"]},"properties":{"PLANT_CODE":"57593","PLANT_NAME":"Broken Bow Wind LLC","OPERATING_YEAR":2012,"cum_cap":79.9,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.3564","37.6167"]},"properties":{"PLANT_CODE":"57594","PLANT_NAME":"Teichert Materials-Teichert Vernalis","OPERATING_YEAR":2010,"cum_cap":1.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-79.03","39.445"]},"properties":{"PLANT_CODE":"57595","PLANT_NAME":"Pinnacle Wind Force LLC","OPERATING_YEAR":2011,"cum_cap":55.2,"end_year":9999,"STATE":"WV"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.439722","42.159722"]},"properties":{"PLANT_CODE":"57609","PLANT_NAME":"New Harvest Wind Project LLC","OPERATING_YEAR":2011,"cum_cap":100,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-81.525555","41.584444"]},"properties":{"PLANT_CODE":"57613","PLANT_NAME":"LE Wind Turbine 1","OPERATING_YEAR":2011,"cum_cap":2.5,"end_year":9999,"STATE":"OH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.347777","35.309722"]},"properties":{"PLANT_CODE":"57616","PLANT_NAME":"Blue Canyon Windpower VI LLC","OPERATING_YEAR":2011,"cum_cap":100,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.779166","41.025278"]},"properties":{"PLANT_CODE":"57620","PLANT_NAME":"Paulding Wind Farm II","OPERATING_YEAR":2011,"cum_cap":150,"end_year":9999,"STATE":"OH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.521666","37.714167"]},"properties":{"PLANT_CODE":"57626","PLANT_NAME":"Foundation ST","OPERATING_YEAR":2011,"cum_cap":2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4447","41.3931"]},"properties":{"PLANT_CODE":"57631","PLANT_NAME":"Wolverine","OPERATING_YEAR":2010,"cum_cap":1.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.4406","41.2258"]},"properties":{"PLANT_CODE":"57632","PLANT_NAME":"Bulldog","OPERATING_YEAR":2010,"cum_cap":1.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.8228","45.7592"]},"properties":{"PLANT_CODE":"57635","PLANT_NAME":"Linden Wind Energy Project","OPERATING_YEAR":2010,"cum_cap":50,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.8172","40.1908"]},"properties":{"PLANT_CODE":"57637","PLANT_NAME":"Union City Wind Turbine","OPERATING_YEAR":2010,"cum_cap":1,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.8219","40.2097"]},"properties":{"PLANT_CODE":"57638","PLANT_NAME":"Randolph Eastern School Wind Turbine","OPERATING_YEAR":2010,"cum_cap":1,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.735833","37.855278"]},"properties":{"PLANT_CODE":"57639","PLANT_NAME":"Ironwood Wind","OPERATING_YEAR":2012,"cum_cap":167.9,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.62","38.1728"]},"properties":{"PLANT_CODE":"57643","PLANT_NAME":"Vestas Towers America, Inc.","OPERATING_YEAR":2010,"cum_cap":1.8,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.321388","43.836667"]},"properties":{"PLANT_CODE":"57644","PLANT_NAME":"Prairie Rose Wind Farm","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.965555","42.883889"]},"properties":{"PLANT_CODE":"57648","PLANT_NAME":"Zotos International WPGF","OPERATING_YEAR":2012,"cum_cap":3.4,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.8278","43.8047"]},"properties":{"PLANT_CODE":"57649","PLANT_NAME":"Elm Creek Wind II LLC","OPERATING_YEAR":2010,"cum_cap":148.8,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.6206","41.6067"]},"properties":{"PLANT_CODE":"57654","PLANT_NAME":"Town of Falmouth WWTP","OPERATING_YEAR":2010,"cum_cap":0.8,"end_year":2013,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.6206","41.6067"]},"properties":{"PLANT_CODE":"57654","PLANT_NAME":"Town of Falmouth WWTP","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.353611","38.058889"]},"properties":{"PLANT_CODE":"57663","PLANT_NAME":"Cimarron Windpower II","OPERATING_YEAR":2012,"cum_cap":131,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-88.118056","40.546667"]},"properties":{"PLANT_CODE":"57675","PLANT_NAME":"Pioneer Trail Wind Farm, LLC","OPERATING_YEAR":2011,"cum_cap":150.4,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.299444","38.841667"]},"properties":{"PLANT_CODE":"57678","PLANT_NAME":"Post Rock Wind Power Project, LLC","OPERATING_YEAR":2012,"cum_cap":201,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.2153","39.9139"]},"properties":{"PLANT_CODE":"57693","PLANT_NAME":"DOE Golden NWTC Turbine Side","OPERATING_YEAR":2010,"cum_cap":3.8,"end_year":2011,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-105.2153","39.9139"]},"properties":{"PLANT_CODE":"57693","PLANT_NAME":"DOE Golden NWTC Turbine Side","OPERATING_YEAR":2011,"cum_cap":8.8,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.718055","37.790833"]},"properties":{"PLANT_CODE":"57700","PLANT_NAME":"Vasco Winds","OPERATING_YEAR":2011,"cum_cap":78.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.821944","38.116667"]},"properties":{"PLANT_CODE":"57701","PLANT_NAME":"Montezuma Wind II","OPERATING_YEAR":2012,"cum_cap":78.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73.275","42.586667"]},"properties":{"PLANT_CODE":"57721","PLANT_NAME":"Berkshire Wind Power Project","OPERATING_YEAR":2011,"cum_cap":15,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.811388","38.143056"]},"properties":{"PLANT_CODE":"57725","PLANT_NAME":"Shiloh IV Wind Project LLC","OPERATING_YEAR":2012,"cum_cap":101.3,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.876944","45.585833"]},"properties":{"PLANT_CODE":"57732","PLANT_NAME":"UMM Wind Turbine","OPERATING_YEAR":2011,"cum_cap":0.6,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.28","35.75"]},"properties":{"PLANT_CODE":"57741","PLANT_NAME":"Suzlon Project VIII LLC","OPERATING_YEAR":2011,"cum_cap":4.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-77.076388","41.537778"]},"properties":{"PLANT_CODE":"57744","PLANT_NAME":"Laurel Hill Wind","OPERATING_YEAR":2012,"cum_cap":69,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.337777","46.411944"]},"properties":{"PLANT_CODE":"57748","PLANT_NAME":"Gordon Butte Wind LLC","OPERATING_YEAR":2012,"cum_cap":9.6,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.393333","42.982222"]},"properties":{"PLANT_CODE":"57749","PLANT_NAME":"Sawtooth Wind Project","OPERATING_YEAR":2011,"cum_cap":22.4,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.783611","26.342778"]},"properties":{"PLANT_CODE":"57751","PLANT_NAME":"Los Vientos Wind 1A","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.783333","26.333333"]},"properties":{"PLANT_CODE":"57752","PLANT_NAME":"Los Vientos Wind 1B","OPERATING_YEAR":2012,"cum_cap":201.6,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.015","41.851667"]},"properties":{"PLANT_CODE":"57755","PLANT_NAME":"TPW Petersburg","OPERATING_YEAR":2011,"cum_cap":40.5,"end_year":9999,"STATE":"NE"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-123.820833","46.9775"]},"properties":{"PLANT_CODE":"57756","PLANT_NAME":"Coastal Energy Project","OPERATING_YEAR":2010,"cum_cap":6,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.4325","34.891389"]},"properties":{"PLANT_CODE":"57757","PLANT_NAME":"Pacific Wind LLC","OPERATING_YEAR":2012,"cum_cap":140,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.753889","42.721944"]},"properties":{"PLANT_CODE":"57760","PLANT_NAME":"Power County Wind Park South","OPERATING_YEAR":2011,"cum_cap":22.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.753889","42.721944"]},"properties":{"PLANT_CODE":"57761","PLANT_NAME":"Power County Wind Park North","OPERATING_YEAR":2011,"cum_cap":22.5,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.280277","37.873889"]},"properties":{"PLANT_CODE":"57762","PLANT_NAME":"Cimarron Wind Energy LLC","OPERATING_YEAR":2012,"cum_cap":165.6,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.901944","42.674722"]},"properties":{"PLANT_CODE":"57766","PLANT_NAME":"Rockland Wind Farm","OPERATING_YEAR":2011,"cum_cap":79.2,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.699166","39.973333"]},"properties":{"PLANT_CODE":"57767","PLANT_NAME":"Brown County Wind Turbine","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-76.049167","41.420556"]},"properties":{"PLANT_CODE":"57769","PLANT_NAME":"Mehoopany Wind Energy LLC","OPERATING_YEAR":2012,"cum_cap":142.6,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.354722","35.054167"]},"properties":{"PLANT_CODE":"57774","PLANT_NAME":"Windstar 1","OPERATING_YEAR":2012,"cum_cap":120,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-114.060833","35.164722"]},"properties":{"PLANT_CODE":"57775","PLANT_NAME":"Kingman 1","OPERATING_YEAR":2011,"cum_cap":10,"end_year":9999,"STATE":"AZ"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.460277","37.374722"]},"properties":{"PLANT_CODE":"57787","PLANT_NAME":"Flat Ridge 2 Wind Energy LLC","OPERATING_YEAR":2012,"cum_cap":470.4,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-122.092778","38.232222"]},"properties":{"PLANT_CODE":"57791","PLANT_NAME":"Foundation AB","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.529444","34.084722"]},"properties":{"PLANT_CODE":"57792","PLANT_NAME":"Foundation IE","OPERATING_YEAR":2011,"cum_cap":1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.548611","46.978333"]},"properties":{"PLANT_CODE":"57800","PLANT_NAME":"Bison 2 Wind Energy Center","OPERATING_YEAR":2012,"cum_cap":105,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.548611","46.978333"]},"properties":{"PLANT_CODE":"57801","PLANT_NAME":"Bison 3 Wind Energy Center","OPERATING_YEAR":2012,"cum_cap":105,"end_year":9999,"STATE":"ND"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.691111","26.475278"]},"properties":{"PLANT_CODE":"57802","PLANT_NAME":"Magic Valley Wind Farm I LLC","OPERATING_YEAR":2012,"cum_cap":203,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.271944","44.396944"]},"properties":{"PLANT_CODE":"57803","PLANT_NAME":"Lime Wind","OPERATING_YEAR":2011,"cum_cap":3,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.877777","43.991667"]},"properties":{"PLANT_CODE":"57813","PLANT_NAME":"GL Wind","OPERATING_YEAR":2011,"cum_cap":5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.876944","45.590278"]},"properties":{"PLANT_CODE":"57823","PLANT_NAME":"WCROC Wind Farm","OPERATING_YEAR":2005,"cum_cap":0.4,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.237778","42.006111"]},"properties":{"PLANT_CODE":"57830","PLANT_NAME":"Rippey Wind Farm","OPERATING_YEAR":2012,"cum_cap":50,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.062222","42.948889"]},"properties":{"PLANT_CODE":"57832","PLANT_NAME":"Hawkeye Wind Farm","OPERATING_YEAR":2012,"cum_cap":36,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.293188","35.030855"]},"properties":{"PLANT_CODE":"57833","PLANT_NAME":"Alta Wind VI","OPERATING_YEAR":2012,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.234811","35.026683"]},"properties":{"PLANT_CODE":"57835","PLANT_NAME":"Alta Wind VIII","OPERATING_YEAR":2012,"cum_cap":150,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.336453","42.606737"]},"properties":{"PLANT_CODE":"57844","PLANT_NAME":"Franklin County Wind Farm","OPERATING_YEAR":2012,"cum_cap":99,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-82.783611","43.850833"]},"properties":{"PLANT_CODE":"57851","PLANT_NAME":"Sigel Wind Park","OPERATING_YEAR":2012,"cum_cap":64,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-82.758611","43.67"]},"properties":{"PLANT_CODE":"57852","PLANT_NAME":"Minden Wind Park","OPERATING_YEAR":2012,"cum_cap":32,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.241388","43.871944"]},"properties":{"PLANT_CODE":"57853","PLANT_NAME":"McKinley Wind Park","OPERATING_YEAR":2012,"cum_cap":14.4,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.841944","42.716389"]},"properties":{"PLANT_CODE":"57855","PLANT_NAME":"Ipswich Wind Turbine","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-96.42","37.46"]},"properties":{"PLANT_CODE":"57858","PLANT_NAME":"Caney River Wind Project","OPERATING_YEAR":2011,"cum_cap":200,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-85.843056","40.349444"]},"properties":{"PLANT_CODE":"57862","PLANT_NAME":"Wildcat Wind Farm I, LLC","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"IN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.21","35.243611"]},"properties":{"PLANT_CODE":"57866","PLANT_NAME":"Golden Spread Panhandle Wnd Rch","OPERATING_YEAR":2011,"cum_cap":78.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-77.538333","42.315278"]},"properties":{"PLANT_CODE":"57867","PLANT_NAME":"Howard Wind Farm","OPERATING_YEAR":2011,"cum_cap":51.3,"end_year":2013,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-77.538333","42.315278"]},"properties":{"PLANT_CODE":"57867","PLANT_NAME":"Howard Wind Farm","OPERATING_YEAR":2012,"cum_cap":55.4,"end_year":9999,"STATE":"NY"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.519444","41.505"]},"properties":{"PLANT_CODE":"57873","PLANT_NAME":"Eclipse Wind Farm","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.715","42.186111"]},"properties":{"PLANT_CODE":"57874","PLANT_NAME":"Vienna Wind Farm","OPERATING_YEAR":2012,"cum_cap":103,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.643611","41.500556"]},"properties":{"PLANT_CODE":"57875","PLANT_NAME":"Morning Light Wind Farm","OPERATING_YEAR":2012,"cum_cap":101,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.048056","44.728333"]},"properties":{"PLANT_CODE":"57880","PLANT_NAME":"Eolos Wind Energy Research Field Station","OPERATING_YEAR":2011,"cum_cap":2.5,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.322222","32.978333"]},"properties":{"PLANT_CODE":"57887","PLANT_NAME":"Wildcat Wind","OPERATING_YEAR":2012,"cum_cap":27.3,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.220278","43.824444"]},"properties":{"PLANT_CODE":"57888","PLANT_NAME":"Harvest II Windfarm","OPERATING_YEAR":2012,"cum_cap":59.4,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.540278","35.964167"]},"properties":{"PLANT_CODE":"57889","PLANT_NAME":"KODE Novus II","OPERATING_YEAR":2012,"cum_cap":40,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-111.726389","43.386389"]},"properties":{"PLANT_CODE":"57890","PLANT_NAME":"Horse Butte Wind I, LLC","OPERATING_YEAR":2012,"cum_cap":57.6,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-107.705278","32.305833"]},"properties":{"PLANT_CODE":"57947","PLANT_NAME":"Macho Springs Power I","OPERATING_YEAR":2011,"cum_cap":50.4,"end_year":9999,"STATE":"NM"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.250833","35.303333"]},"properties":{"PLANT_CODE":"57956","PLANT_NAME":"Minco Wind II, LLC","OPERATING_YEAR":2011,"cum_cap":100.8,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.241389","35.008333"]},"properties":{"PLANT_CODE":"57962","PLANT_NAME":"Brookfield Tehachapi 1","OPERATING_YEAR":2012,"cum_cap":102,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-109.482778","46.275278"]},"properties":{"PLANT_CODE":"57963","PLANT_NAME":"Musselshell Wind Project","OPERATING_YEAR":2012,"cum_cap":10,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-89.059722","41.666944"]},"properties":{"PLANT_CODE":"57964","PLANT_NAME":"Shady Oaks Wind Farm","OPERATING_YEAR":2012,"cum_cap":109.5,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-109.482778","46.275278"]},"properties":{"PLANT_CODE":"57965","PLANT_NAME":"Musselshell Wind Project Two LLC","OPERATING_YEAR":2012,"cum_cap":10,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.805","43.733889"]},"properties":{"PLANT_CODE":"57968","PLANT_NAME":"Cashton Greens Wind Farm","OPERATING_YEAR":2012,"cum_cap":5,"end_year":9999,"STATE":"WI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-102.46","35.306111"]},"properties":{"PLANT_CODE":"57973","PLANT_NAME":"Spinning Spur Wind LLC","OPERATING_YEAR":2012,"cum_cap":161,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.581944","33.493056"]},"properties":{"PLANT_CODE":"57974","PLANT_NAME":"Bobcat Bluff Wind Project LLC","OPERATING_YEAR":2012,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.838056","37.851111"]},"properties":{"PLANT_CODE":"57975","PLANT_NAME":"Spearville 3 LLC","OPERATING_YEAR":2012,"cum_cap":108,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.708333","42.568611"]},"properties":{"PLANT_CODE":"57976","PLANT_NAME":"Pocahontas Prairie Wind Farm","OPERATING_YEAR":2012,"cum_cap":80,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-72.457222","44.767778"]},"properties":{"PLANT_CODE":"57979","PLANT_NAME":"Kingdom Community Wind","OPERATING_YEAR":2012,"cum_cap":65,"end_year":9999,"STATE":"VT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-104.491944","37.801111"]},"properties":{"PLANT_CODE":"57980","PLANT_NAME":"Busch Ranch Wind Energy Farm","OPERATING_YEAR":2012,"cum_cap":11,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.386667","33.142778"]},"properties":{"PLANT_CODE":"57981","PLANT_NAME":"Senate Wind LLC","OPERATING_YEAR":2012,"cum_cap":150,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-86.334722","43.871944"]},"properties":{"PLANT_CODE":"57984","PLANT_NAME":"Lake Winds Energy Park","OPERATING_YEAR":2012,"cum_cap":100.8,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-98.024722","35.629722"]},"properties":{"PLANT_CODE":"57987","PLANT_NAME":"Canadian Hills Wind","OPERATING_YEAR":2012,"cum_cap":298.5,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.78","40.318056"]},"properties":{"PLANT_CODE":"57991","PLANT_NAME":"Highland North Wind Farm","OPERATING_YEAR":2012,"cum_cap":75,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.103333","48.820278"]},"properties":{"PLANT_CODE":"57995","PLANT_NAME":"NaturEner Rim Rock Energy","OPERATING_YEAR":2012,"cum_cap":180,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-156.331389","20.601944"]},"properties":{"PLANT_CODE":"57996","PLANT_NAME":"Auwahi Wind Energy","OPERATING_YEAR":2012,"cum_cap":24,"end_year":9999,"STATE":"HI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.874722","39.760556"]},"properties":{"PLANT_CODE":"57998","PLANT_NAME":"Twin Ridges Wind Farm","OPERATING_YEAR":2012,"cum_cap":139.4,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-78.686389","40.630278"]},"properties":{"PLANT_CODE":"57999","PLANT_NAME":"Patton Wind Farm","OPERATING_YEAR":2012,"cum_cap":30,"end_year":9999,"STATE":"PA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.209167","29.234722"]},"properties":{"PLANT_CODE":"58000","PLANT_NAME":"Anacacho Wind Farm, LLC","OPERATING_YEAR":2012,"cum_cap":99.8,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.2925","44.704444"]},"properties":{"PLANT_CODE":"58004","PLANT_NAME":"Granite Reliable Power","OPERATING_YEAR":2012,"cum_cap":99,"end_year":9999,"STATE":"NH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-87.878333","40.211667"]},"properties":{"PLANT_CODE":"58008","PLANT_NAME":"California Ridge Wind Energy LLC","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.446389","37.518889"]},"properties":{"PLANT_CODE":"58018","PLANT_NAME":"Shooting Star Wind Project LLC","OPERATING_YEAR":2012,"cum_cap":104,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-115.036667","42.88"]},"properties":{"PLANT_CODE":"58019","PLANT_NAME":"High Mesa Energy LLC","OPERATING_YEAR":2012,"cum_cap":40,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-84.499722","43.256944"]},"properties":{"PLANT_CODE":"58020","PLANT_NAME":"Beebe Renewable Energy LLC","OPERATING_YEAR":2012,"cum_cap":81.6,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.005278","27.488056"]},"properties":{"PLANT_CODE":"58021","PLANT_NAME":"Whitetail Wind Energy LLC","OPERATING_YEAR":2012,"cum_cap":92,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.984167","42.585833"]},"properties":{"PLANT_CODE":"58025","PLANT_NAME":"Mt Wachusett Community College","OPERATING_YEAR":2011,"cum_cap":3.4,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-70.553611","44.434167"]},"properties":{"PLANT_CODE":"58026","PLANT_NAME":"Spruce Mountain WInd","OPERATING_YEAR":2011,"cum_cap":20,"end_year":9999,"STATE":"ME"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-92.759444","43.385833"]},"properties":{"PLANT_CODE":"58038","PLANT_NAME":"Buffalo Center Wind LLC","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.673611","36.574722"]},"properties":{"PLANT_CODE":"58041","PLANT_NAME":"Chisholm View Wind Project","OPERATING_YEAR":2012,"cum_cap":235.2,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.234167","41.850833"]},"properties":{"PLANT_CODE":"58044","PLANT_NAME":"Pioneer Grove Wind Farm","OPERATING_YEAR":2012,"cum_cap":4.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-95.802778","43.713611"]},"properties":{"PLANT_CODE":"58045","PLANT_NAME":"Community Wind South","OPERATING_YEAR":2012,"cum_cap":30,"end_year":9999,"STATE":"MN"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.524167","32.969722"]},"properties":{"PLANT_CODE":"58048","PLANT_NAME":"BayWa r.e Mozart LLC","OPERATING_YEAR":2012,"cum_cap":30,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.070833","42.391389"]},"properties":{"PLANT_CODE":"58065","PLANT_NAME":"Charlestown Wind Turbine","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"MA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.221389","43.384722"]},"properties":{"PLANT_CODE":"58071","PLANT_NAME":"Windwalkers LLC","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.003056","35.135556"]},"properties":{"PLANT_CODE":"58078","PLANT_NAME":"Rocky Ridge Wind Project","OPERATING_YEAR":2012,"cum_cap":148.8,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.373333","33.688056"]},"properties":{"PLANT_CODE":"58080","PLANT_NAME":"Wolf Ridge Wind","OPERATING_YEAR":2008,"cum_cap":112.5,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-93.283333","43.297222"]},"properties":{"PLANT_CODE":"58089","PLANT_NAME":"Roeder Family Wind Farm LLC","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.763889","38.113889"]},"properties":{"PLANT_CODE":"58092","PLANT_NAME":"Solano Wind Plant III","OPERATING_YEAR":2012,"cum_cap":128,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.307222","34.561944"]},"properties":{"PLANT_CODE":"58101","PLANT_NAME":"Foundation Cemex River Plant","OPERATING_YEAR":2012,"cum_cap":3.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-117.1125","34.623056"]},"properties":{"PLANT_CODE":"58102","PLANT_NAME":"Foundation Cemex BMQ","OPERATING_YEAR":2012,"cum_cap":3,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-86.533889","45.795556"]},"properties":{"PLANT_CODE":"58103","PLANT_NAME":"Heritage Garden Wind Farm I LLC","OPERATING_YEAR":2012,"cum_cap":28,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.818056","38.42"]},"properties":{"PLANT_CODE":"58104","PLANT_NAME":"Foundation Superior Farms","OPERATING_YEAR":2012,"cum_cap":1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-122.193889","40.111111"]},"properties":{"PLANT_CODE":"58105","PLANT_NAME":"Foundation Wal-Mart Red Bluff","OPERATING_YEAR":2012,"cum_cap":1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.344722","43.959167"]},"properties":{"PLANT_CODE":"58106","PLANT_NAME":"Meadow Creek Project Company","OPERATING_YEAR":2012,"cum_cap":115.8,"end_year":9999,"STATE":"ID"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-90.174167","41.2325"]},"properties":{"PLANT_CODE":"58111","PLANT_NAME":"Bishop Hill II Wind Farm","OPERATING_YEAR":2012,"cum_cap":81,"end_year":9999,"STATE":"IL"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-121.9325","38.692778"]},"properties":{"PLANT_CODE":"58112","PLANT_NAME":"Foundation Cemex Madison","OPERATING_YEAR":2012,"cum_cap":1,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.815","33.917222"]},"properties":{"PLANT_CODE":"58113","PLANT_NAME":"Foundation RRM","OPERATING_YEAR":2012,"cum_cap":2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.749167","33.914167"]},"properties":{"PLANT_CODE":"58114","PLANT_NAME":"Foundation NWNA","OPERATING_YEAR":2012,"cum_cap":3.2,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.552778","39.446667"]},"properties":{"PLANT_CODE":"58126","PLANT_NAME":"Limon Wind I","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-103.581111","39.341389"]},"properties":{"PLANT_CODE":"58127","PLANT_NAME":"Limon Wind II","OPERATING_YEAR":2012,"cum_cap":200,"end_year":9999,"STATE":"CO"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-100.44","37.602778"]},"properties":{"PLANT_CODE":"58137","PLANT_NAME":"Ensign Wind LLC","OPERATING_YEAR":2012,"cum_cap":98.9,"end_year":9999,"STATE":"KS"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-71.79","43.776111"]},"properties":{"PLANT_CODE":"58141","PLANT_NAME":"Groton Wind LLC","OPERATING_YEAR":2012,"cum_cap":48,"end_year":9999,"STATE":"NH"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.186389","35.347778"]},"properties":{"PLANT_CODE":"58154","PLANT_NAME":"North Sky River Energy LLC","OPERATING_YEAR":2012,"cum_cap":162,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-112.271111","35.415556"]},"properties":{"PLANT_CODE":"58155","PLANT_NAME":"Perrin Ranch Wind LLC","OPERATING_YEAR":2012,"cum_cap":99.2,"end_year":9999,"STATE":"AZ"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.6875","33.033056"]},"properties":{"PLANT_CODE":"58162","PLANT_NAME":"Cirrus Wind 1 LLC","OPERATING_YEAR":2012,"cum_cap":61.2,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.944167","35.3125"]},"properties":{"PLANT_CODE":"58203","PLANT_NAME":"Minco Wind III, LLC","OPERATING_YEAR":2012,"cum_cap":100.8,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.4175","36.846667"]},"properties":{"PLANT_CODE":"58209","PLANT_NAME":"NextEra-Blackwell Wind, LLC","OPERATING_YEAR":2012,"cum_cap":59.8,"end_year":9999,"STATE":"OK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-110.639167","47.333333"]},"properties":{"PLANT_CODE":"58218","PLANT_NAME":"Spion Kop Wind Farm","OPERATING_YEAR":2012,"cum_cap":40,"end_year":9999,"STATE":"MT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-116.555556","33.908889"]},"properties":{"PLANT_CODE":"58233","PLANT_NAME":"WKN Wagner","OPERATING_YEAR":2012,"cum_cap":6,"end_year":9999,"STATE":"CA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-73.07","44.661667"]},"properties":{"PLANT_CODE":"58238","PLANT_NAME":"Georgia Mountain Community Wind Farm","OPERATING_YEAR":2012,"cum_cap":10,"end_year":9999,"STATE":"VT"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-118.591389","45.899167"]},"properties":{"PLANT_CODE":"58324","PLANT_NAME":"Vansycle II Wind Energy Center","OPERATING_YEAR":2009,"cum_cap":98.9,"end_year":9999,"STATE":"OR"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-83.65","43.525278"]},"properties":{"PLANT_CODE":"58351","PLANT_NAME":"Tuscola Bay Wind","OPERATING_YEAR":2012,"cum_cap":120,"end_year":9999,"STATE":"MI"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-101.540833","35.404167"]},"properties":{"PLANT_CODE":"58363","PLANT_NAME":"Majestic II Wind","OPERATING_YEAR":2012,"cum_cap":79.6,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-99.364722","34.29"]},"properties":{"PLANT_CODE":"58372","PLANT_NAME":"Blue Summit Wind LLC","OPERATING_YEAR":2012,"cum_cap":135.4,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.810833","43.326944"]},"properties":{"PLANT_CODE":"58407","PLANT_NAME":"Luther College Wind Project","OPERATING_YEAR":2011,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-91.394444","40.955"]},"properties":{"PLANT_CODE":"58414","PLANT_NAME":"NLMU Wind","OPERATING_YEAR":2011,"cum_cap":1.5,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-97.440278","27.832222"]},"properties":{"PLANT_CODE":"58424","PLANT_NAME":"Harbor Wind LLC","OPERATING_YEAR":2012,"cum_cap":9,"end_year":9999,"STATE":"TX"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-150.243611","61.13"]},"properties":{"PLANT_CODE":"58425","PLANT_NAME":"Fire Island Wind","OPERATING_YEAR":2012,"cum_cap":18,"end_year":9999,"STATE":"AK"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-120.753056","47.139167"]},"properties":{"PLANT_CODE":"58441","PLANT_NAME":"Swauk Wind LLC","OPERATING_YEAR":2012,"cum_cap":4.3,"end_year":9999,"STATE":"WA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.269167","42.098889"]},"properties":{"PLANT_CODE":"58444","PLANT_NAME":"Junction Hilltop Wind Farm","OPERATING_YEAR":2012,"cum_cap":8,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.434722","41.226944"]},"properties":{"PLANT_CODE":"58456","PLANT_NAME":"Cumberland Rose","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.57","41.338889"]},"properties":{"PLANT_CODE":"58457","PLANT_NAME":"Fontanelle","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.488056","41.29"]},"properties":{"PLANT_CODE":"58458","PLANT_NAME":"Greenfield","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.445833","41.39"]},"properties":{"PLANT_CODE":"58459","PLANT_NAME":"Meadow Ridge","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.485","41.29"]},"properties":{"PLANT_CODE":"58460","PLANT_NAME":"Sky Volt","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{"type":"Feature","geometry":{"type":"Point","coordinates":["-94.876389","41.391944"]},"properties":{"PLANT_CODE":"58461","PLANT_NAME":"Wiota","OPERATING_YEAR":2012,"cum_cap":1.6,"end_year":9999,"STATE":"IA"}},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-165.429384","64.505924"]
  },
  "properties":{
    "PLANT_CODE":"90",
    "PLANT_NAME":"Snake River",
    "OPERATING_YEAR":2013,
    "cum_cap":1.8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-102.743055","40.756944"]
  },
  "properties":{
    "PLANT_CODE":"57174",
    "PLANT_NAME":"Colorado Highlands Wind",
    "OPERATING_YEAR":2013,
    "cum_cap":23.8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-84.570277","40.905833"]
  },
  "properties":{
    "PLANT_CODE":"57570",
    "PLANT_NAME":"Cooper Farms VW Project",
    "OPERATING_YEAR":2013,
    "cum_cap":4.5,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-118.211835","35.043411"]
  },
  "properties":{
    "PLANT_CODE":"57834",
    "PLANT_NAME":"Pinyon Pine I",
    "OPERATING_YEAR":2013,
    "cum_cap":168,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-118.223333","35.026759"]
  },
  "properties":{
    "PLANT_CODE":"57837",
    "PLANT_NAME":"Pinyon Pine II",
    "OPERATING_YEAR":2013,
    "cum_cap":132,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-92.715","42.186111"]
  },
  "properties":{
    "PLANT_CODE":"57874",
    "PLANT_NAME":"Vienna Wind Farm",
    "OPERATING_YEAR":2013,
    "cum_cap":44.6,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-148.9","64.058333"]
  },
  "properties":{
    "PLANT_CODE":"57935",
    "PLANT_NAME":"Eva Creek Wind",
    "OPERATING_YEAR":2013,
    "cum_cap":24.6,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-78.248889","42.750278"]
  },
  "properties":{
    "PLANT_CODE":"58088",
    "PLANT_NAME":"Stony Creek Wind Farm NY",
    "OPERATING_YEAR":2013,
    "cum_cap":94.4,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-84.5875","41.016111"]
  },
  "properties":{
    "PLANT_CODE":"58220",
    "PLANT_NAME":"Haviland Plastic Products",
    "OPERATING_YEAR":2013,
    "cum_cap":4.5,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-98.466667","31.383333"]
  },
  "properties":{
    "PLANT_CODE":"58321",
    "PLANT_NAME":"Goldthwaite Wind Energy Facility",
    "OPERATING_YEAR":2013,
    "cum_cap":150,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-101.076111","37.620833"]
  },
  "properties":{
    "PLANT_CODE":"58474",
    "PLANT_NAME":"Buffalo Dunes Wind Project",
    "OPERATING_YEAR":2013,
    "cum_cap":249.8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-145.596667","64.013889"]
  },
  "properties":{
    "PLANT_CODE":"58511",
    "PLANT_NAME":"Delta Wind Farm",
    "OPERATING_YEAR":2013,
    "cum_cap":0.9,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-104.832222","37.772222"]
  },
  "properties":{
    "PLANT_CODE":"58548",
    "PLANT_NAME":"Huerfano River Wind",
    "OPERATING_YEAR":2013,
    "cum_cap":8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-83.297778","43.757778"]
  },
  "properties":{
    "PLANT_CODE":"58580",
    "PLANT_NAME":"Pheasant Run Wind LLC",
    "OPERATING_YEAR":2013,
    "cum_cap":74.8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-83.566944","43.526944"]
  },
  "properties":{
    "PLANT_CODE":"58587",
    "PLANT_NAME":"Tuscola Wind II LLC",
    "OPERATING_YEAR":2013,
    "cum_cap":100.3,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-96.952222","40.048889"]
  },
  "properties":{
    "PLANT_CODE":"58594",
    "PLANT_NAME":"Steele Flats Wind Project LLC",
    "OPERATING_YEAR":2013,
    "cum_cap":74.8,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-83.893333","40.449444"]
  },
  "properties":{
    "PLANT_CODE":"58630",
    "PLANT_NAME":"RP Wind",
    "OPERATING_YEAR":2013,
    "cum_cap":3.4,
    "end_year":9999,
    "STATE":"NA"
  }
},
{
  "type":"Feature",
  "geometry":{
    "type":"Point",
    "coordinates":["-71.944722","42.572222"]
  },
  "properties":{
    "PLANT_CODE":"58992",
    "PLANT_NAME":"Dept of Corrections NCCI Wind",
    "OPERATING_YEAR":2013,
    "cum_cap":3.4,
    "end_year":9999,
    "STATE":"NA"
  }
},


]}
];




var map = L.map('map', {
      // zoomControl: false
})
    .setView([40.908, -101.525], 4)
    .addLayer(L.mapbox.tileLayer('energy.map-5l5mgbbs',{
      detectRetina: true,   
    }));

/*create array:*/
var marker = new Array();
var farmnum; 

function buildMap() {


//create empty array to push into
    var raw = [];

//create array of values
    var iconvalue = [];


//for each point, push if it is the right type and if that has been clicked
    for (var i = 0; i < geoJson[0].features.length; i++) {
      if (geoJson[0].features[i].properties.end_year >= cur_year) {
        if (geoJson[0].features[i].properties.OPERATING_YEAR <= cur_year) {
            raw.push(geoJson[0].features[i])
            //iconvalue.push(geoJson[0].features[i].infomation);
            
        } 
      }
    };

    farmnum = raw.length;

    for (var i = 0; i < raw.length; i++) {
     //create a the "iconic" url for the icon, from the mapbox api.
    
     
     //cap = cap + raw[i].properties.cum_cap;
     
      var iconic

//can set iconic = to something here.

    if (raw[i].properties.OPERATING_YEAR === cur_year) {
        iconic = '/sites/prod/files/point.png'
    } else if (raw[i].properties.OPERATING_YEAR >= 2010 ) {iconic = '/sites/prod/files/recent.png'}
      else if (raw[i].properties.OPERATING_YEAR >= 2000 ) {iconic = '/sites/prod/files/00s.png'}
      else if (raw[i].properties.OPERATING_YEAR >= 1990 ) {iconic = '/sites/prod/files/90s.png'}
      else if (raw[i].properties.OPERATING_YEAR >= 1970 ) {iconic = '/sites/prod/files/80s.png'}


      // Create custom popup content
       
      /*pushing items into array each by each and then add markers*/
      var LamMarker = new L.marker([raw[i].geometry.coordinates[1],raw[i].geometry.coordinates[0]], {
        icon: L.icon({
            iconUrl: iconic,
            iconSize:     [9, 9], // size of the icon
            iconAnchor:   [4, 4], // point of the icon which will correspond to marker's location
            popupAnchor:  [1, -23]  // point from which the popup should open relative to the iconAnchor
            })
        });
          marker.push(LamMarker);
          map.addLayer(marker[i]);

    };


};



function removal() {
    for (var i = 0; i < marker.length; i++) {
        map.removeLayer(marker[i]);
    };
    marker = [];
    
};
handle = document.getElementById('handle');
startlight = document.getElementById('startlight');
yearnumber = document.getElementById('year-number');
farms2number = document.getElementById('farms2-number');
homes2number = document.getElementById('homes2-number');


num = 39;
start_year = 1975;
cur_year = 2013;
var takex;
var play, slowplay = 0;
var x;
var h;
var homenum = ["4149","4149","4149","4149","4149","4149","8575","13.5 K","109 K","146 K","175 K","196 K","225 K","230 K","257 K","294 K","314 K","315 K","317 K","342 K","349 K","357 K","361 K","405 K","579 K","592 K","948 K","1.1 M","1.6 M","1.7 M","2.2 M","2.9 M","4.2 M","6.5 M","8.9 M","10 M","12 M","15 M","15 M"];


var zoom_bar = new Dragdealer('zoom-bar',
{
    steps: num,
    snap: true,
    x: 1,
    animationCallback: function(x, y)
    {
        cur_year = start_year+(x*(num-1))
        handle.innerHTML = cur_year;
        takex = x;
        removal();
        h = Math.floor(x*(num-1));
        buildMap();             
        farms.innerHTML = farmnum;
        homes.innerHTML = homenum[h];
        yearnumber.innerHTML = cur_year;
        farms2number.innerHTML = farmnum;
        homes2number.innerHTML = homenum[h];
        
    }
});

//step through the years one by one.
var i = -8;
var j = 0;
var k = 0;

function mechanic() {
        i += 1;             
        //console.log(i+start_year-1)
        //console.log(cur_year);
        zoom_bar.setValue(i / num);
        if (i === num) {
            clearInterval(play);
            clearInterval(slowplay);
            j = 0;
            k = 0;
        };
}

function start() {
play = setInterval(mechanic,200);
}

function slowstart() {
slowplay = setInterval(mechanic,1000);
}

//Use buttn to move the scroll bar.
startlight.onclick=function(){
    clearInterval(slowplay);
    
    //after run all the way through, reset to beginning
    if (i === num) {i = -7};
    
    k = 0;
    j += 1;
    if (j === 1) {start();};
    
};

yellowlight.onclick=function(){
    clearInterval(play);

    //after run all the way through, reset to beginning
    if (i === num) {i = -2};
   
    j = 0;
    k += 1;
    if (k === 1) {slowstart();};

}   

stoplight.onclick=function(){
    clearInterval(play);
    clearInterval(slowplay);
    
    //reset to zero so that on play click, will start again.
    j = 0;
    k = 0;
};



// Allows handle click to be dragged without bouncing back to 
handle.onclick=function(){
    clearInterval(play);
    clearInterval(slowplay);
    i = (takex * (num-1));
    // console.log(i+start_year);
    zoom_bar.setValue(takex);
    
    //reset to zero so that on play click, will start again.
    j = 0;
    k = 0;
};	