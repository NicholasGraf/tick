// DO NOT EDIT
var $ = require('jquery');
require('select2/dist/css/select2.min.css');
require('select2/dist/js/select2.min.js');
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
    options.push('<option value="item-' + list[l].id + '">' + list[l].name + '</option>');
}

$(document).ready(function () {
    $('.options').select2({
        placeholder: 'Select a Location',
        closeOnSelect: false
    });
});



//console.table(items);

$('.list-results').html(items);
$('.options').html(options);


$(document).on('change', '.options', function () {
    var data = $(this).select2('data');
    $('.list .item').hide();
    for (var d in data) {
        var name = data[d].id;
        var target = $('.list .' + name);
        target.css('display','flex');
    }
});


$(document).on('click', '.open-options, .close-options', function () {
    $('.page-options').toggleClass('toggle');
});


$(document).on('click', '.list-controls .small', function () {
    $('.list-results').removeClass('medium large');
});

$(document).on('click', '.list-controls .medium', function () {
    $('.list-results').removeClass('large');
    $('.list-results').addClass('medium');
});

$(document).on('click', '.list-controls .large', function () {
    $('.list-results').removeClass('medium');
    $('.list-results').addClass('large');
});