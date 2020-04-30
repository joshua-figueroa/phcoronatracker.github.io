function update(id, count) {
    document.getElementById(id).innerHTML += (count.toLocaleString());
}

function search(input_id, tbody_id) {
    let input, filter, body, tr, td, i, txtValue;
    input = document.getElementById(input_id);
    filter = input.value.toUpperCase();
    body = document.getElementById(tbody_id);
    tr = body.getElementsByTagName("tr");
    for (i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("th")[0];
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } else {
                tr[i].style.display = "none";
            }
        }       
    }
}
   
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

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/all',
        dataType: 'json',
        success: function(data) {
            let x = (data.deaths/data.cases) * 100, y = (data.recovered/data.cases) * 100;
            update('cases', data.cases);
            update('total-cases', data.cases);
            update('new-cases', data.todayCases);
            update('deaths', data.deaths);
            update('total-deaths', data.deaths);
            update('new-deaths', data.todayDeaths);
            update('recover', data.recovered);
            update('total-recoveries', data.recovered);
            update('active-main', data.active);
            update('total-active', data.active);
            update('total-tests', data.testsPerOneMillion);
            update('fatality', x.toFixed(2) + '%');
            update('recovery', y.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
    
    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let flag = new Array();
            for(var i = 0; i < data.length; i++) {
                flag[i] = data[i].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[i].country + '&nbsp;(' + data[i].countryInfo['iso2'] + ')' + '</th><td>' + data[i].cases.toLocaleString() + '</td><td>' + data[i].todayCases.toLocaleString() +'</td><td>' + data[i].deaths.toLocaleString() + '</td><td>' + data[i].todayDeaths.toLocaleString() +'</td><td>' + data[i].recovered.toLocaleString() +'</td><td>' + data[i].active.toLocaleString() + '</td><td>' + data[i].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#global_body').append(row);
            }
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let sea = ["Philippines", "Indonesia", "Malaysia", "Singapore", "Brunei", "Cambodia", "Timor-Leste", "Lao People's Democratic Republic", "Myanmar", "Thailand", "Vietnam"];
            let num = new Array(), flag = new Array();
            for(var x = 0; x < data.length; x++) {
                for(var y = 0; y < sea.length; y++) {
                    if(data[x].country == sea[y]) {
                        num.push(x);
                    }
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#sea_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('sea-cases', totalCases);
            update('new-sea-cases', newcases);
            update('sea-deaths', deaths);
            update('new-sea-deaths', newdeaths);
            update('sea-recover', rec);
            update('sea-active', active);
            update('sea-tests', Math.round(tests / num.length));
            update('sea-fatality', a.toFixed(2) + '%');
            update('sea-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "Asia") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#asia_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('asia-cases', totalCases);
            update('new-asia-cases', newcases);
            update('asia-deaths', deaths);
            update('new-asia-deaths', newdeaths);
            update('asia-recover', rec);
            update('asia-active', active);
            update('asia-tests', Math.round(tests / num.length));
            update('asia-fatality', a.toFixed(2) + '%');
            update('asia-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "Europe") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#euro_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('euro-cases', totalCases);
            update('new-euro-cases', newcases);
            update('euro-deaths', deaths);
            update('new-euro-deaths', newdeaths);
            update('euro-recover', rec);
            update('euro-active', active);
            update('euro-tests', Math.round(tests / num.length));
            update('euro-fatality', a.toFixed(2) + '%');
            update('euro-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "North America") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#na_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('na-cases', totalCases);
            update('new-na-cases', newcases);
            update('na-deaths', deaths);
            update('new-na-deaths', newdeaths);
            update('na-recover', rec);
            update('na-active', active);
            update('na-tests', Math.round(tests / num.length));
            update('na-fatality', a.toFixed(2) + '%');
            update('na-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "South America") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#sa_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('sa-cases', totalCases);
            update('new-sa-cases', newcases);
            update('sa-deaths', deaths);
            update('new-sa-deaths', newdeaths);
            update('sa-recover', rec);
            update('sa-active', active);
            update('sa-tests', Math.round(tests / num.length));
            update('sa-fatality', a.toFixed(2) + '%');
            update('sa-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "Africa") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#afr_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('afr-cases', totalCases);
            update('new-afr-cases', newcases);
            update('afr-deaths', deaths);
            update('new-afr-deaths', newdeaths);
            update('afr-recover', rec);
            update('afr-active', active);
            update('afr-tests', Math.round(tests / num.length));
            update('afr-fatality', a.toFixed(2) + '%');
            update('afr-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });

    $.ajax({
        url: 'https://corona.lmao.ninja/v2/countries?sort=cases',
        dataType: 'json',
        success: function(data) {
            let num = new Array(), flag = new Array();
            for(var i = 0; i < data.length; i++) {
                if(data[i].continent == "Australia/Oceania") {
                    num.push(i);
                }
            }
            let totalCases = 0, newcases = 0, deaths = 0, newdeaths = 0, rec = 0, active = 0, tests = 0, a, b;
            for(i in num) {
                flag[i] = data[num[i]].countryInfo['flag'];
                var row = $('<tr><th scope="row"><img src="' + flag[i] + '">&nbsp;&nbsp;' + data[num[i]].country + '&nbsp;(' + data[num[i]].countryInfo['iso2'] + ')' + '</th><td>' + data[num[i]].cases.toLocaleString() + '</td><td>' + data[num[i]].todayCases.toLocaleString() +'</td><td>' + data[num[i]].deaths.toLocaleString() + '</td><td>' + data[num[i]].todayDeaths.toLocaleString() +'</td><td>' + data[num[i]].recovered.toLocaleString() +'</td><td>' + data[num[i]].active.toLocaleString() +'</td><td>' + data[num[i]].testsPerOneMillion.toLocaleString() + '</td></tr>');
                $('#au_body').append(row);
                totalCases += data[num[i]].cases;
                newcases += data[num[i]].todayCases;
                deaths += data[num[i]].deaths;
                newdeaths += data[num[i]].todayDeaths;
                rec += data[num[i]].recovered;
                active += data[num[i]].active;
                tests += data[num[i]].testsPerOneMillion;
            }
            a = (deaths/totalCases) * 100, b = (rec/totalCases) * 100;
            update('au-cases', totalCases);
            update('new-au-cases', newcases);
            update('au-deaths', deaths);
            update('new-au-deaths', newdeaths);
            update('au-recover', rec);
            update('au-active', active);
            update('au-tests', Math.round(tests / num.length));
            update('au-fatality', a.toFixed(2) + '%');
            update('au-recovery', b.toFixed(2) + '%');
        },
        error: function(jqXHR, textStatus, errorThrown) {
            alert('Error: ' + textStatus + ' - ' + errorThrown);
        }
    });
});