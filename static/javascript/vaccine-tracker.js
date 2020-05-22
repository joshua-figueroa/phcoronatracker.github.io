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

    const $dropdown = $(".dropdown");
    const $dropdownToggle = $(".dropdown-toggle");
    const $dropdownMenu = $(".dropdown-menu");
    const showClass = "show";
    
    $dropdown.hover(
        function() {
            const $this = $(this);
            $this.addClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "true");
            $this.find($dropdownMenu).addClass(showClass);
        },
        function() {
            const $this = $(this);
            $this.removeClass(showClass);
            $this.find($dropdownToggle).attr("aria-expanded", "false");
            $this.find($dropdownMenu).removeClass(showClass);
        }
    );
    
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
                { y: 44, name: "Protein Subunit", exploded: true },
                { y: 11, name: "DNA-Based" },
                { y: 19, name: "RNA-Based" },
                { y: 16, name: "Non-Replicating Viral Vector" },
                { y: 8, name: "Virus-like Particle" },
                { y: 14, name: "Replicating Viral Vector" },
                { y: 1, name: "Replicating Bacterial Vector" },
                { y: 8, name: "Inactive Viruses"},
                { y: 3, name: "Live Attenuated Virus"},
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
                { y: 63, name: "Antibodies", exploded: true },
                { y: 23, name: "Antivirals" },
                { y: 15, name: "Cell-Based Therapies" },
                { y: 6, name: "RNA-Based" },
                { y: 5, name: "Discontinued" },
                { y: 7, name: "Devices" },
                { y: 91, name: "Others"},
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
