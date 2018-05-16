function loadJson(url, callback) {
    var xhr = new XMLHttpRequest();

    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            callback(JSON.parse(xhr.responseText));
        }
    };

    xhr.open('GET', url);
    xhr.send();
}

function showData(flightData) {

    var i = 1;
    for (var i = 0; i < 11; i++) {
        console.log(flightData.flights[i].id);
        console.log(flightData.flights[i].direction.from);
        console.log(flightData.flights[i].direction.to);
        console.log(flightData.flights[i].arrival);
        console.log(flightData.flights[i].departure);
        console.log(flightData.flights[i].carrier);
        console.log('' +
            '')
    }

}

loadJson('data.json', showData);




