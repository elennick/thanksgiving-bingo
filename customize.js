$(function () {
    $("input").each(function (index) {
        let input = $(this)[0];
        input.maxLength = 50;
    });
});

function saveCustom() {
    var values = '';
    var success = true;

    $("input").each(function (index) {
        let input = $(this);
        let value = input.val();

        if (value.trim().length <= 0) {
            alert('All fields must be filled in!');
            success = false;
            return false;
        }

        let valueWithNoPipes = value.replace(/\|/g, '');

        values += valueWithNoPipes + '|';
    });

    if (success) {
        let base64EncodedValues = btoa(values);
        let url = 'bingo.html?v=' + base64EncodedValues;
        window.location.href = url;
    }
}