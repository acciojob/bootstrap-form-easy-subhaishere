// JavaScript code to validate the form on submission
$(document).ready(function () {
  $("#internship-form").on("submit", function (event) {
    event.preventDefault();

    // Reset the invalid feedback messages
    $(".invalid-feedback").hide();

    // Validate each input field
    let valid = true;

    const firstName = $("#first-name-input").val();
    if (!firstName) {
      $("#first-name-input").siblings(".invalid-feedback").show();
      valid = false;
    }

    const lastName = $("#last-name-input").val();
    if (!lastName) {
      $("#last-name-input").siblings(".invalid-feedback").show();
      valid = false;
    }

    const email = $("#email-input").val();
    if (!email || !isValidEmail(email)) {
      $("#email-input").siblings(".invalid-feedback").show();
      valid = false;
    }

    const college = $("#college-input").val();
    if (!college) {
      $("#college-input").siblings(".invalid-feedback").show();
      valid = false;
    }

    const graduationYear = $("#graduation-year-select").val();
    if (!graduationYear) {
      $("#graduation-year-select").siblings(".invalid-feedback").show();
      valid = false;
    }

    const rollNo = $("#roll-no-input").val();
    if (!rollNo) {
      $("#roll-no-input").siblings(".invalid-feedback").show();
      valid = false;
    }

    const conditions = $("#conditions-checkbox").prop("checked");
    if (!conditions) {
      $("#conditions-checkbox").siblings(".invalid-feedback").show();
      valid = false;
    }

    // If the form is valid, submit it
    if (valid) {
      this.submit();
    }
  });

  // Function to check the email validity using a regular expression
  function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }
});
