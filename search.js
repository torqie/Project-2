const searchBar = new searchingID();
searchBar.readyStateChange = function() {
    if (this.readyState == 4 && this.status == 200) {
        // look-up what categoryID is called
        document.getElementById("categoryID").innerHTML = searchBar.ressponseText;
    }
};