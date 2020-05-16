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
    
    $('#vaccine_container').CanvasJSChart({
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
                { y: 41, name: "Protein Sub-unit", exploded: true },
                { y: 11, name: "DNA-Based" },
                { y: 18, name: "RNA-Based" },
                { y: 16, name: "Non-Replicating Viral Vector" },
                { y: 7, name: "Virus-like Particle" },
                { y: 12, name: "Replicating Viral Vector" },
                { y: 1, name: "Replicating Bacterial Vector" },
                { y: 7, name: "Inactive Viruses"},
                { y: 2, name: "Live Attenuated Virus"},
                { y: 17, name: "Unknown"}
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
                { y: 61, name: "Antibodies", exploded: true },
                { y: 22, name: "Antivirals" },
                { y: 15, name: "Cell-Based Therapies" },
                { y: 6, name: "RNA-Based" },
                { y: 5, name: "Discontinued" },
                { y: 7, name: "Devices" },
                { y: 87, name: "Others"},
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
