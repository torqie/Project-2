const create = {
  url: '/api/tutorials/',
  method: 'POST',
  timeout: 0,
  data: {
    title: $('#title'),
    content: $('#content'),
  },
};

$.ajax(create).done((response) => {
  console.log(response);
});
