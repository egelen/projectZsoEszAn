var code = location.href.split("=")[1];
getJson(
    "https://raw.githubusercontent.com/opendatajson/football.json/master/2017-18/it.1.json",
    function (tableData) {
        fillTable(tableData.rounds[0].matches);
    }
);

function fillTable(rows) {
    console.log(rows);


}