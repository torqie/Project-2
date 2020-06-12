var create = {
    "url": "/api/categories/2/tutorials",
    "method":"GET",
    "timeout":0,
};

$.ajax(create).done(function(response) {
    console.log(response);
});
