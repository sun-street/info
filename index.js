window.onload = () => 
{
    fetch("grounds.json")
        .then(response => response.json())
        .then(json => console.log(json));

    // var request = new XMLHttpRequest();
    // request.open("GET", "grounds.json", false);
    // //request.send(null)
    // var my_JSON_object = JSON.parse(request.responseText);
    // alert (my_JSON_object.result[0]);
    //var obj = JSON.parse();
    document.getElementById("select").innerHTML = "<option>Все участки</option><option>390</option>";
};

function onChangeHandler()
{
    document.getElementById("tbody").innerHTML = "<tr><td>{{selectedGround}}</td><td>{{selectedGround.number}}</td></tr>";
};

