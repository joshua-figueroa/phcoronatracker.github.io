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
                { y: 56, name: "Protein Subunit", exploded: true },
                { y: 13, name: "DNA-Based" },
                { y: 23, name: "RNA-Based" },
                { y: 19, name: "Non-Replicating Viral Vector" },
                { y: 10, name: "Virus-like Particle" },
                { y: 15, name: "Replicating Viral Vector" },
                { y: 1, name: "Replicating Bacterial Vector" },
                { y: 9, name: "Inactived Viruses"},
                { y: 3, name: "Live Attenuated Virus"},
                { y: 20, name: "Unknown"}
            ]
        }]
    });
    
    $.fn.DataTable.ext.pager.numbers_length = 6;
    $('#vaccine-table').DataTable({
        "lengthMenu": [[5, 10, 25, 50, 100, -1], [5, 10, 25, 50, 100, "All"]],
        "ajax": {
            "url": "https://phcoronatracker.com/static/JSON/vaccines.json",
            "dataSrc": ""
        },
        "columns": [
            { "data": "Developer_Researcher" },
            { "data": "Product_Category" },
            { "data": "Stage_of_Development" },
            { "data": "Product_Description" }
        ],
        "order": [[ 1, "asc" ]]
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
