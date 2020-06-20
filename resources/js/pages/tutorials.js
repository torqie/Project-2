const simplemde = new SimpleMDE({ element: document.getElementById('content') });

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
    Swal.fire({
      icon: 'success',
      title: 'Tutorial Successfully Created!',
      html: `<h5 class="text-muted">${data.title}</h5>`,
      timer: 1500,
      showConfirmButton: false,
      timerProgressBar: true,
    }).then((result) => {
      /* Read more about handling dismissals below */
      if (result.dismiss === Swal.DismissReason.timer) {
        window.location.href = '/';
      }
    });
  });
});
