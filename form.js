$(function() {
  var $form = $(".sign-up");

  $form.on("submit", function(e) {
    e.preventDefault();

    var formUrl;
    if (location.hostname === "localhost") {
      formUrl = "http://localhost:3512/form";
    } else {
      formUrl = "http://46.101.181.63:3512/form";
    }

    $.post(formUrl, {
      name: $form.find('[name="name"]').val(),
      email: $form.find('[name="email"]').val(),
      phone: $form.find('[name="phone"]').val(),
      success: function() {
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

  $(".sign-up__skip").on("click", function() {
    hideForm();
  });

  console.log(
    "%cHere you can inspect object. But not hacking :)",
    "color: blue; font-size: x-large"
  );
});
