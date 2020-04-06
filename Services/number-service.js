function fillNumbers()
{
    var fileContent = fs.readFileSync("Data/grounds.json", "utf8");
    console.log(fileContent);
}

fillNumbers();
