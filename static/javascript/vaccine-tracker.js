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
                { y: 32, name: "Protein Sub-unit", exploded: true },
                { y: 9, name: "DNA-Based" },
                { y: 16, name: "RNA-Based" },
                { y: 14, name: "Non-Replicating Viral Vector" },
                { y: 4, name: "Virus-like Particle" },
                { y: 11, name: "Replicating Viral Vector" },
                { y: 5, name: "Inactive Viruses"},
                { y: 3, name: "Live Attenuated Virus"},
                { y: 15, name: "Unknown"}
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
                { y: 56, name: "Antibodies", exploded: true },
                { y: 22, name: "Antivirals" },
                { y: 15, name: "Cell-Based Therapies" },
                { y: 6, name: "RNA-Based" },
                { y: 2, name: "Discontinued" },
                { y: 6, name: "Devices" },
                { y: 74, name: "Others"},
                { y: 18, name: "For Validation"}
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