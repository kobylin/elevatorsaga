$(function() {
  var $form = $(".sign-up");

  $form.on("submit", function(e) {
    e.preventDefault();

    var formUrl = location.protocol + "//" + location.hostname + ":3512/form";

    $.post(formUrl, {
      name: $form.find('[name="name"]').val(),
      email: $form.find('[name="email"]').val(),
      phone: $form.find('[name="phone"]').val(),
      success: function() {
        console.log("success");
        hideForm();
      }
    }).fail(function(e) {
      alert(
        "There is some problems with storing email. Leave your email to guys near Beetroot stand!"
      );
      console.log(e);
      hideForm();
    });
  });

  function hideForm() {
    $(".sign-up__container").hide();
  }
});
