var create = {
    "url": "/api/categories/2/tutorials",
    "method":"GET",
    "timeout":0,
};

$.ajax(create).done(function(response) {
    console.log(response);
});

var update = {
    "url": "/api/categories",
    "method": "POST",
    "timeout": 0,
    "data": {
        "name": "/"
    }
};

$.ajax(update).done(function(response) {
    console.log(response);
});

var deleteContent = {
    "url": "/api/categories",
    "method": "DELETE",
    "timeout": 0,
};

$.ajax(deleteContent).done(function(response) {
    console.log(response);
});