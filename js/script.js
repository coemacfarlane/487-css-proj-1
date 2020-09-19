$(document).ready(function() {
    $('.my-news-ticker').AcmeTicker({
        controls: {
          prev: $('.acme-news-ticker-prev'),
          toggle: $('.acme-news-ticker-pause'),
          next: $('.acme-news-ticker-next')
        },
        type: 'horizontal',
        direction: 'left',
        autoplay: 4000
      });      

      // Specify data, options, and element in which to create the chart
    
      var options = {
          height: 180,
        animationEnabled: true,
        toolTip: {
            shared: true,
            reversed: true
        },
        data: [{
            type: "stackedColumn",
            name: "light blue",
            color: "rgb(36,152,244)",
            showInLegend: "false",
            yValueFormatString: "##",
            dataPoints: [
                { y: 111338, label: " "},
                { y: 49088, label: "06/30/11" },
                { y: 62200, label: " " },
                { y: 90085, label: "07/14/11" },
                { y: 38600, label: " " },
                { y: 48750, label: "TODAY" }
            ]
        },
        {
            type: "stackedColumn",
            name: "blue",
            color: "rgb(18,69,112)",
            showInLegend: "false",
            yValueFormatString: "##",
            dataPoints: [
                { y: 135305, label: " " },
                { y: 107922, label: "06/30/11"},
                { y: 52300, label: " " },
                { y: 3360, label: "07/14/11"},
                { y: 39900, label: " " },
                { y: 0, label: "TODAY" }
            ]
        }]
    };
    
    $("#chartContainerBar").CanvasJSChart(options);


    var options = {
        animationEnabled: true,
        data: [{
            type: "doughnut",
            innerRadius: "40%",
            dataPoints: [
                {color: "rgb(36,152,244)", x: 10, y: 6492917 },
                {color: "rgb(18,69,112)", x: 20, y: 7380554 },
                {color: "rgb(51,204,102)", x: 40, y: 1610846 },
                {color: "#3a599b", x: 70, y: 950875 },
            ]
        }]
    };
    $("#chartContainerDoughnut").CanvasJSChart(options);
    $("#chartContainerDoughnut2").CanvasJSChart(options);
    
});
