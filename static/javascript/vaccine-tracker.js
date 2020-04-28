$('#top').hide();    
$(document).ready(function() {
    $(window).on('scroll', function() {
        if($(this).scrollTop() > 100) {
            $('#top').fadeIn(75);
        }
        else {
            $('#top').fadeOut();
        }
    });
    $('#top').on('click', function() {
        $('html, body').animate({scrollTop: 0}, "fast");
    });
    
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
                { y: 28, name: "Protein Sub-unit", exploded: true },
                { y: 8, name: "DNA-Based" },
                { y: 14, name: "RNA-Based" },
                { y: 12, name: "Non-Replicating Viral Vector" },
                { y: 4, name: "Virus-like Particle" },
                { y: 8, name: "Replicating Viral Vector" },
                { y: 3, name: "Inactive Viruses"},
                { y: 2, name: "Live Attenuated Virus"},
                { y: 14, name: "Unknown"}
            ]
        }]
    });
    
    $('#treatment_container').CanvasJSChart({
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
                { y: 49, name: "Antibodies", exploded: true },
                { y: 20, name: "Antivirals" },
                { y: 12, name: "Cell-Based Therapies" },
                { y: 5, name: "RNA-Based" },
                { y: 2, name: "Discontinued" },
                { y: 4, name: "Devices" },
                { y: 53, name: "Others"},
                { y: 14, name: "For Validation"}
            ]
        }]
    });
});

function explodePie (e) {
    if(typeof (e.dataSeries.dataPoints[e.dataPointIndex].exploded) === "undefined" || !e.dataSeries.dataPoints[e.dataPointIndex].exploded) {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = true;
    } else {
        e.dataSeries.dataPoints[e.dataPointIndex].exploded = false;
    }
    e.chart.render();
}