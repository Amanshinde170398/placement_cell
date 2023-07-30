// Ajax call on click ok submit btn
$(".submit").click(function (e) {
  e.preventDefault();
  const modalId = $(this).attr("data-modal-id");
  const formID = $(this).attr("data-form-id");
  const form = $(formID);
  $.ajax({
    type: "post",
    url: "/student/create",
    data: form.serialize(),
    success: function (data) {
      console.log(data);
      $('[data-dismiss="modal"]').trigger("click");
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
});
