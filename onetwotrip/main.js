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
    var i = 0;
    var j = document.getElementById('s1').value;
    var main = document.getElementById('main');
    main.innerHTML = '';

    for (i; i < flightData.flights.length; i++) {
        if (j === 'All' || j === flightData.flights[i].carrier) {

            var arrivalDT = new Date(Date.parse(flightData.flights[i].arrival));
            var departureDT = new Date(Date.parse(flightData.flights[i].departure));
            var div = main.appendChild(document.createElement('div'));
            div.style.display = 'inline-block';
            div.className = 'flightCard';
            var imageBlock = div.appendChild(document.createElement('div'));
            imageBlock.className = 'image';
            imageBlock.id = 'image'+flightData.flights[i].id;
            var txtBlock = div.appendChild(document.createElement('div'));
            imageBlock.innerHTML =
                ' <span id ="opacity">from:</span><br>' + flightData.flights[i].direction.from + '<br>' +
                '<span id = "opacity">to:</span><br>' + flightData.flights[i].direction.to + '<br>';
            txtBlock.innerHTML =
                '<span id ="opacity">arrival:</span> <br>' + arrivalDT + '<br>' +
                '<span id ="opacity">departure:</span> <br>' + departureDT + '<br>' +
                '<span id ="opacity">company: </span> <br>' + flightData.flights[i].carrier + '<br>' + '<br>';
      }

    }
}


function change() {
    loadJson('data.json', showData);
}

loadJson('data.json', showData);