var jsonObject;

window.onload = () => 
{
    initizlizeData();
};

function onChangeHandler(groundName)
{
    fillTable(groundName);
};

function initizlizeData()
{
    fetch("https://sun-street.github.io/Data/safe-grounds.json")
        .then(response => response.json())
        .then(json => 
                {
                    jsonObject = json;
                    fillSelector();
                    fillTable("Все участки")
                }
            );
};

function fillSelector()
{
    var innerHtml = "<option selected>Все участки</option>";

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
            var maxIndex = jsonObject.groundsList[i].phoneNumbers.length - 1;
            innerHtml += "<tr>"
            innerHtml += "<td>" + jsonObject.groundsList[i].number + "</td>";
            innerHtml += "<td>"

            for (var j = 0; j < jsonObject.groundsList[i].phoneNumbers.length; j++) 
            {
                innerHtml += fillTableColumn(jsonObject.groundsList[i].phoneNumbers[j].cellNumber, maxIndex)
            }

            innerHtml += "</td>"
            innerHtml += "<td>"

            for (var j = 0; j < jsonObject.groundsList[i].phoneNumbers.length; j++) 
            {
                innerHtml += fillTableColumn(jsonObject.groundsList[i].phoneNumbers[j].number, maxIndex)
            }

            innerHtml += "</td>"
            innerHtml += "</tr>";
        }
    }
    
    document.getElementById("tbody").innerHTML = innerHtml;
};

function fillTableColumn(columnContent, newLineRequired)
{
    var result = columnContent;

    if(newLineRequired)
    {
        result += "</br>";
    }

    return result;
};