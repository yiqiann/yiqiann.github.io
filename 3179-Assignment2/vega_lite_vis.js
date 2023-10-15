var spec1 = "https://raw.githubusercontent.com/yiqiann/yiqiann.github.io/main/3179-Assignment2/vis/avgpercentage_line_chart.json"
vegaEmbed('#linegraph', spec1).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "https://raw.githubusercontent.com/yiqiann/yiqiann.github.io/main/3179-Assignment2/vis/stacked_bar_chart.json"
vegaEmbed('#stackedbarchart', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);

var spec2 = "https://raw.githubusercontent.com/yiqiann/yiqiann.github.io/main/3179-Assignment2/vis/mhd_chloropleth_map.json"
vegaEmbed('#chloroplethmap', spec2).then(function(result) {
    // Access the Vega view instance (https://vega.github.io/vega/docs/api/view/) as result.view
}).catch(console.error);