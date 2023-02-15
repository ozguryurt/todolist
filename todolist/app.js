$(document).on('click', '#ekleBtn', function () {
    $('#todoList').append(`<div class="d-flex justify-content-between align-items-center shadow-sm p-3 m-3 rounded-2 bg-white shadow-sm text-dark fw-bolder border border-2 overflow-auto animate__animated animate__fadeIn todoListItem">
    <div class="fs-5 fw-normal todoListText">
        `+$('#todoListInput').val()+`
    </div>
    <div><i class="fa-solid fa-trash silBtn"></i></div>
</div>`);
    $('#todoListInput').val('');
});

$(document).on('click', '.silBtn', function () {
    $(this).closest(".todoListItem").remove();
});

$(document).on('click', '.todoListItem', function () {
    if($(this).hasClass('text-decoration-line-through')) {
        $(this).removeClass('text-decoration-line-through');
    } else {
        $(this).addClass('text-decoration-line-through');
    }
});