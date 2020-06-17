var create = {
    "url": "/api/tutorials/",
    "method":"POST",
    "timeout":0,
    "data": {
        "title": 
    }
};

$.ajax(create).done(function(response) {
    console.log(response);
});

