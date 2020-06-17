$(document).ready(() => {
  $('#auth-tabs a').on('click', function (e) {
    e.preventDefault();
    $(this).tab('show');
  });

  $('.auth-modal-link').on('click', function() {
    // Find which button was clicked, so we know which tab to target
    const tabTarget = $(this).data('tab');

    // Manually show the modal, since we are not doing it via data-toggle now
    $('#auth-modal').modal('show');

    // Now show the selected tab
    $(`.nav-tabs a[href="#${tabTarget}"]`).tab('show');
  });
});
