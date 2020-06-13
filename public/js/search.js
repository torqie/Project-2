const searchBar = $('#search').val();
const searchResults = $('#search-results');

let keyTimer;
$('#search').on('keyup', () => {
  clearTimeout(keyTimer)
  if ($('#search').val().length >= 3) {
    keyTimer = setTimeout(() => {
      console.log('made it');
      $.ajax({
        url: `/api/search?&q=${searchBar}`,
        method: 'GET',
        timeout: 0,
      }).done((response) => {
        console.log(response);
        // push lis to the modal
        searchResults.empty();
        for (let i = 0; i < response.length; i++) {
          const blah = $(`<li>${response[i].title}</li>`);
          blah.appendTo(searchResults);
        }
      });
    }, 500);
  }
});
