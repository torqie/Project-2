const searchBar = new searchingID();
searchBar.readyStateChange = function (options) {
    if (this.readyState == 4 && this.status == 200) {
        // look-up what categoryID is called
        document.getElementById("categoryId").innerHTML = searchBar.ressponseText;
    };

    const limit = options.limit || 12;
};

const searchSettings = {
    "url": "/api/search?categoryId=&q=Tutorial 2",
    "method": "GET",
    "timeout": 0,
};

$.ajax(searchSettings).done(function (response) {
    console.log(response);
});