// Ajax call on click ok submit btn
$(".submit").click(function (e) {
  e.preventDefault();
  const url = $(this).attr("data-url");
  const modalId = $(this).attr("data-modal-id");
  const formID = $(this).attr("data-form-id");
  const form = $(formID);
  $.ajax({
    type: "post",
    url: url,
    data: form.serialize(),
    success: function (data) {
      console.log(data);
      $('[data-dismiss="modal"]').trigger("click");
      form[0].reset();
    },
    error: function (error) {
      console.log(error.responseText);
    },
  });
});

// On click of add student for interview add company name to hidden field
$(".schedule-interview-btn").click(function () {
  const companyName = $(this).attr("data-company-name");
  const interviewModal = $("#schedule-student-interview-modal");
  const companyNameFiled = interviewModal.find("input[name='company_name']");
  companyNameFiled.val(companyName);
});
