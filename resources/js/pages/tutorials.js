var simplemde = new SimpleMDE({ element: document.getElementById('content') });

$('#create-tutorial').submit((event) => {
  event.preventDefault();
  $.ajax({
    url: '/api/tutorials/',
    method: 'POST',
    data: {
      title: $('#title').val(),
      description: $('#description').val(),
      content: simplemde.options.previewRender($('#content').val()),
      categoryId: $('#category').val(),
    },
  }).done((data) => {
    console.log(data);
  });
});
