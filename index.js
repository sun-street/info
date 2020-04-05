var jsonObject;

window.onload = () => 
{
    //testData();
    fetch("grounds.json")
        .then(response => response.json())
        .then(json => 
                {
                    jsonObject = json;
                    fillSelector(json);
                }
            );
};

function onChangeHandler(groundName)
{
    fillTable(groundName);
};

function testData()
{
    var json = '{"groundsList":[{"number": "111", "phoneNumbers": ["+7-953-***-45-67", "+7-953-***-56-78"]},{"number": "222", "phoneNumbers": ["+7-913-***-11-11"]}]}';

    jsonObject = JSON.parse(json);

    fillSelector();
};

function fillSelector()
{
    var innerHtml = "<option>Все участки</option>";

    for (var i = 0; i < jsonObject.groundsList.length; i++) 
    {
        innerHtml += '<option value="' + jsonObject.groundsList[i].number + '">' + jsonObject.groundsList[i].number + '</option>';
    }
    
    document.getElementById("select").innerHTML = innerHtml;
};

function fillTable(groundName)
{
    var innerHtml = "";

    for (var i = 0; i < jsonObject.groundsList.length; i++) 
    {
        if (groundName == "Все участки" || groundName == jsonObject.groundsList[i].number)
        {
            innerHtml += "<tr><td>" + jsonObject.groundsList[i].number + "</td><td>";

            for (var j = 0; j < jsonObject.groundsList[i].phoneNumbers.length; j++) 
            {
                innerHtml += jsonObject.groundsList[i].phoneNumbers[j];

                if(j != jsonObject.groundsList[i].phoneNumbers.length)
                {
                    innerHtml += "</BR>";
                }
            }

            innerHtml += "</td></tr>";
        }
    }
    
    document.getElementById("tbody").innerHTML = innerHtml;
};