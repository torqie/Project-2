
const searchResults = $('#search-results');

let keyTimer;
$('#search').on('keyup', () => {
  clearTimeout(keyTimer)
  if ($('#search').val().length >= 3) {
    keyTimer = setTimeout(() => {
      console.log(`/api/search?q=${$('#search').val()}`);
      $.ajax({
        url: `/api/search?q=${$('#search').val()}`,
        method: 'GET',
        timeout: 0,
      }).done((response) => {
        searchResults.empty();
        console.log(response);
        if (response.length < 1) {
          const blah = $(`<li><h3 class="noSearch">No Search Results Found</h3></li>`);
          blah.appendTo(searchResults);
        }
        // push li's to the modal
        for (let i = 0; i < response.length; i++) {
          const blah = $(`
          <li>
            <a href='/tutorial/${response[i].id}' class="row">
            <span class="col-9">
              <h6>${response[i].title}</h6>
              <p>something will go here in place of this random ass text.</p>
            </span>
              <span class="col-3 text-right">
              <button class="btn btn-sm btn-primary">Mongo DB</button>
              </span>
              
            </a>
          </li>`);
          blah.appendTo(searchResults);
        }
      });
    }, 500);
  }
});
