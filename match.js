var code = location.href.split("=")[1].replace('#', '');
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
    function (tableData) {
        var allMatches = {
            "all": []
        };

        for (var i = 0; i < tableData.rounds.length; i++) {
            for (var x = 0; x < tableData.rounds[i].matches.length; x++) {
                if (tableData.rounds[i].matches[x].team1.code == code || tableData.rounds[i].matches[x].team2.code == code) {
                    allMatches.all.push(tableData.rounds[i].matches[x]);
                }
            }
        }
        fillTable(allMatches.all);
    }
);

function fillTable(rows) {
    var table = document.querySelector("table");
    var content = "";
    for (var i = 0; i < rows.length; i++) {

        var tr = "<tr>";
        tr += "<td>" + (i + 1) + "</td>";
        tr += "<td>" + rows[i].team1.name + "</td>";
        tr += "<td>" + rows[i].team2.name + "</td>";
        tr += "<td>" + rows[i].date + "</td>";
        tr += "</tr>";

        content += tr;

    }
    table.querySelector("tbody").innerHTML = content;
}