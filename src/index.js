// DO NOT EDIT
const $ = require('jquery');
require('select2/dist/css/select2.min.css');
require('select2/dist/js/select2.min.js');
require('./index.scss');
// End: DO NOT EDIT


// Custom Javascript Below Here

// Variables
let list = [];
let select = [];
let selected = [];
let items = [];
let locations;
let size;
let user;

// Format Tabel Data
function listCheck() {
    var data = $('.options').select2('data');
    $('.list .item').hide();
    for (var d in data) {
        var name = data[d].id;
        var target = $('.list .item-' + name);
        target.css('display', 'flex');
    }
}

// Get Table Data
$.ajax({
    url: 'data.json',
    dataType: 'json',
    success: function (data) {
        locations = data.locations;
        user = data.user;
        selected = user.selected;
        size = user.size;

        for (var l in locations) {
            var loc = locations[l];
            list.push(loc);
            select.push({ "id": loc.id, "text": loc.name });
        }

    }
}).done(function () {

    // Load Items
    for (var l in list) {
        var item = list[l];
        var r = item.results;
        items.push(
            '<div class="item item-' + item.id + '">' +
            '   <div>' + item.name + '</div>' +
            '   <div>' + r.result1 + '</div>' +
            '   <div>' + r.result2 + '</div>' +
            '   <div>' + r.result3 + '</div>' +
            '   <div>' + r.result4 + '</div>' +
            '   <div>' + r.result5 + '</div>' +
            '</div>');
    }
    $('.list-results').html(items);

    // Init Select2
    $(document).ready(function () {
        $('.options').select2({
            placeholder: 'Select a Location',
            closeOnSelect: false,
            data: select
        }).val(selected).trigger('change');

        listCheck();
    });

    // Init Size 
    if (size == 3) {
        $('.list-results').addClass('large');
    } else if (size == 3) {
        $('.list-results').addClass('medium');
    }
})


// Options
$(document).on('change', '.options', function () {
    listCheck();
});

$(document).on('click', '.open-options, .close-options', function () {
    $('.page-options').toggleClass('toggle');
});

$(document).on('click', function (e) {
    if (
        $(e.target).closest('.page-options').length == 0
        && $(e.target) != $('.open-options')
        && $(e.target).attr('class') != 'select2-selection__choice__remove'
        && $(e.target).closest('.open-options').length == 0
        && $(e.target).closest('.select2-container').length == 0
    ) {
        if ($('.page-options').hasClass('toggle')) {
            $('.page-options').removeClass('toggle');
        }
    }
});


// Table Font Size
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


// Item Details
$(document).on('click', '.item', function () {
    $('.item-details').addClass('toggle');
    let details = $(this).html();
    $('.item-details').html(details);
});

$(document).on('click', function (e) {
    if ($(e.target).closest('.item-details').length == 0
        && $(e.target).closest('.item').length == 0) {
        $('.item-details').removeClass('toggle');
    }
});


// Account Details
$(document).on('click', '.account', function () {
    var account = $('<div/>', {
        class: 'account-details',
    });

    account.appendTo('.header .controls');
    account.append('<h1>Account</h1>' +
        '<p><b>Username:</b> ' + user.name + '</p>' +
        '<p><b>Email:</b> ' + user.email + '</p>'
    );
});

$(document).on('click', function (e) {
    if ($(e.target).closest('.account-details').length == 0
        && $(e.target).closest('.account').length == 0) {
        $('.account-details').remove();
    }
});