$(function() {
  "use strict";

  var USER_LOCAL_STORAGE_KEY = "user";

  var $form = $(".sign-up");

  var user = getUser();

  if (!user) {
    showForm();
  }

  $form.on("submit", function(e) {
    e.preventDefault();

    var formUrl = getFormUrl();

    const userData = {
      name: $form.find('[name="name"]').val(),
      email: $form.find('[name="email"]').val(),
      phone: $form.find('[name="phone"]').val()
    };

    $.post(formUrl, userData)
      .done(function() {
        saveUser(userData);
        hideForm();
      })
      .fail(function(e) {
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

  function showForm() {
    $(".sign-up__container").show();
  }

  $(".sign-up__skip").on("click", function() {
    hideForm();
  });

  console.log(
    "%cHere you can inspect object. But not hacking :)",
    "color: blue; font-size: x-large"
  );

  function getUser() {
    try {
      const data = localStorage.getItem(USER_LOCAL_STORAGE_KEY);
      if (!data) return null;

      return JSON.parse(data);
    } catch (e) {
      return null;
    }
  }

  function saveUser(user) {
    try {
      localStorage.setItem(USER_LOCAL_STORAGE_KEY, JSON.stringify(user));
    } catch (e) {
      return null;
    }
  }

  function getFormUrl() {
    if (location.hostname === "localhost") {
      return "http://localhost:3512/form";
    } else {
      return "http://46.101.181.63:3512/form";
    }
  }
});
