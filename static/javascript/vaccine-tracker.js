$('#chartContainer').CanvasJSChart({
    animationEnabled: true,
    zoomEnabled: true,
    backgroundColor: "#F5F5F5",
    legend:{
        cursor: "pointer",
        itemclick: explodePie
    },
    data: [{
        type: "pie",
        showInLegend: true,
        toolTipContent: "{name}: <strong>{y}</strong>",
        indexLabel: "{name} - {y}",
        dataPoints: [
            { y: 92, name: "Vaccines", exploded: true },
            { y: 45, name: "Antibodies" },
            { y: 20, name: "Anti-virals" },
            { y: 12, name: "Cell-Based Therapies" },
            { y: 5, name: "RNA-Based" },
            { y: 12, name: "For Validation" },
            { y: 4, name: "Devices"},
            { y: 2, name: "Discontinued"},
            { y: 52, name: "Others"}
        ]
    }]
});
    
function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
}