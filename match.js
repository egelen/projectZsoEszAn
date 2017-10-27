var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
    function (tableData) {
        fillTable(tableData.rounds[0].matches);
    }
);

function fillTable(rows) {
    var urlSearchParams = URL.searchParams;
    console.log(rows);
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {
        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].team1.name + "</td>";
        tr += "<td>" + rows[i].team2.name + "</td>";
        tr += "<td>" + rows[i].date + "</td>";
        tr += "<td>" + rows[i].team1.code + "</td>";
        tr += "<td>" + rows[i].team2.code + "</td>";

        tr += "</tr>";
        content += tr;


    }
    table.querySelector("tbody").innerHTML = content;
}