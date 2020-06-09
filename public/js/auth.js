
$('#login-tab .error').hide();
$('#login-form').submit(async (event) => {
  event.preventDefault();

  $.post('/api/login', {
    email: $('#login_email').val(),
    password: $('#login_password').val(),
  }, (data, status) => {
    console.log('Status: ', status);
    console.log('data: ', data);
    if (data.success === false) {
      $('#login-tab .error').fadeIn();
    } else {
      $('#auth-modal').modal('hide');
      window.location.reload();
    }
  });
});

$('#register-tab .error').hide();
$('#register-form').submit(async (event) => {
  event.preventDefault();

  $.post('/api/register', {
    firstName: $('#register_firstName').val(),
    lastName: $('#register_lastName').val(),
    email: $('#register_email').val(),
    password: $('#register_password').val(),
  }, (data, status) => {
    console.log('Status: ', status);
    console.log('data: ', data);
    if (data.success === false) {
      $('#register-tab .error .alert').html(data.message);
      $('#register-tab .error').fadeIn();
    } else {
      $('#auth-modal').modal('hide');
      window.location.reload();
    }
  });
});
