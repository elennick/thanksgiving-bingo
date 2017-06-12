let CONFIRM_MSG = "Are you sure you want to reset your bingo board? You will get a new randomized board and lose selected bingo squares!";

$(function () {
    let storedItems = JSON.parse(localStorage.getItem("bingoItems"));
    if (!storedItems) {
        items = shuffle(items);
        localStorage.setItem("bingoItems", JSON.stringify(items));
    } else {
        items = storedItems;
    }

    $("td").each(function (index) {
        let cell = $(this);
        cell.text(items[index].text);
        cell.css('font-weight', 'bold');
        cell.css('text-align', 'center');
        setCellColor(cell, items[index].selected);

        cell.click(function (event) {
            var result = items.filter(function (v) {
                return v.text === event.target.innerHTML;
            })[0];
            result.selected = !result.selected;
            setCellColor(cell, result.selected);

            localStorage.setItem("bingoItems", JSON.stringify(items));

            checkForBingo(items);
        });
    });
});

let items = [
    {text: "Someone says 'As Is Tradition'", selected: false},
    {text: "Uncle Dan FaceTime's (or tries to) someone", selected: false},
    {text: "Mom talks about an upcoming Disney trip", selected: false},
    {text: "Someone complains about 'kids these days'", selected: false},
    {text: "Dad complains about everyone being on their phone", selected: false},
    {text: "Nick calls someone 'bro'", selected: false},
    {text: "Dad says something needs more salt and/or puts salt on something", selected: false},
    {text: "Uncle Dan talks about retiring", selected: false},
    {text: "Tony or Nick wear a NIKE sweatshirt", selected: false},
    {text: "Josh gets yelled at", selected: false},
    {text: "Someone says 'Make America Great Again'", selected: false},
    {text: "Lucy spits up or vomits on someone", selected: false},
    {text: "Nick gets frustrated/angry over a spill/mess", selected: false},
    {text: "Dad says the apple pie isnt sweet enough", selected: false},
    {text: "Nat passive-aggressively insults the food", selected: false},
    {text: "Josh spills his drink on the table", selected: false},
    {text: "Lucy tries to grab an outlet/wire", selected: false},
    {text: "A Chris Farley movie is on the TV", selected: false},
    {text: "Someone jokes (or is serious) about Nick being the favorite", selected: false},
    {text: "Someone makes fun of Uncle Dan's pink golf cart car", selected: false},
    {text: "Someone complains about Clinton or Obama", selected: false},
    {text: "Someone complains about Trump", selected: false},
    {text: "Someone falls asleep on the couch", selected: false},
    {text: "Uncle Dan mentions travelling to Florida", selected: false},
    {text: "Someone mentions their (or someone elses) PhD/doctorate", selected: false}
];

function setCellColor(cell, selected) {
    console.log(selected);
    if (selected) {
        cell.css('background-color', 'green');
        cell.css('color', 'white');
    } else {
        cell.css('background-color', 'white');
        cell.css('color', 'black');
    }
}

function clearData() {
    if (confirm(CONFIRM_MSG)) {
        localStorage.removeItem("bingoItems");
        location.reload();
    }
}

function customizeData() {
    //let users customize their bingo square text
}

function checkForBingo(itemsToCheck) {
    //if there are 5 in a row then show an alert or something
}

//borrowed from http://stackoverflow.com/questions/2160890/how-do-you-append-rows-to-a-table-using-jquery
function shuffle(array) {
    let currentIndex = array.length, temporaryValue, randomIndex;

    // While there remain elements to shuffle...
    while (0 !== currentIndex) {

        // Pick a remaining element...
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;

        // And swap it with the current element.
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}