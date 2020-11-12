$(document).ready(function() {
var modal = $('.popup'),
		overlay = $('.overlay'),
		link = $('button[data-popup="true"]'),
		close = $('.close-btn'),
		fruitName = $('.fruit-name');

// Закрытие модального окна по нажатию на кнопку Закрыть
close.click(function() {
	modal.toggleClass('popup_active');
	overlay.hide();
});

// Открытие модального окна по нажатию на кнопку
link.on('click', function () {
	fruitName.text($(this).attr('data-fruit'));
	overlay.show();
	modal.toggleClass('popup_active');
});

// Закрытие окна по нажатию на Esc
$(document).on('keydown', function (e) {
	if (e.which === 27) {
		overlay.hide();
		modal.toggleClass('popup_active');
	};
});

// Закрытие окна по нажатию вне области окна
$(overlay).on('mousedown', function (e) {
	// Если происходит клик вне окна или вне его дочерних объектов, то закрываем окно
	if (!modal.is(e.target) && modal.has(e.target).length === 0) {
		overlay.hide();
		modal.toggleClass('popup_active');
	}
});
});
