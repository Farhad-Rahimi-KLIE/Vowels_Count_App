$(document).ready(function () {
  $("#input").change(function () {
    let inputValue = $(this).val();
    $("ul").append("<li>" + inputValue + "</li>");
    $(this).val("");
  });
});
