// DO NOT EDIT
var $ = require('jquery');
require('./index.scss');
// End: DO NOT EDIT


// Custom Javascript Below Here


var list = [];
var max = 20;
var min = 0;

for (var i = 1; i < 50; i++) {
    list.push({
        "id": i,
        "name": "Location " + i,
        "city1": Math.floor(Math.random() * (max - min + 1) + min),
        "city2": Math.floor(Math.random() * (max - min + 1) + min),
        "city3": Math.floor(Math.random() * (max - min + 1) + min),
        "city4": Math.floor(Math.random() * (max - min + 1) + min),
        "city5": Math.floor(Math.random() * (max - min + 1) + min)
    });
}

// console.table(list);


var items = [];
var options = [];

for (var l in list) {
    items.push('<div class="item item-' + list[l].id + '">' +
        '   <div>' + list[l].name + '</div>' +
        '   <div>' + list[l].city1 + '</div>' +
        '   <div>' + list[l].city2 + '</div>' +
        '   <div>' + list[l].city3 + '</div>' +
        '   <div>' + list[l].city4 + '</div>' +
        '   <div>' + list[l].city5 + '</div>' +
        '</div>');
    options.push('<div><input type="checkbox" name="item-' + list[l].id + '" checked /> <label for="item-' + list[l].id + '">' + list[l].name + '</label></div>');
}

//console.table(items);

$('.list').html(items);
$('.options').html(options);


$(document).on('click', '.options input', function (e) {
    var name = $(e.target).attr("name");
    var target = $('.list .' + name);
    if ($(this).is(':checked')) {
        target.show();
    } else {

        target.hide();
    }
})


$(document).on('click', '.open-options', function () {
    $('.page-options').toggleClass('toggle');
});


