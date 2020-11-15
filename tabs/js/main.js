/* Табы */
// 1. Создать переменную, которая содержит вкладку
// 2. Создать обработчик события при нажатии на вкладку
// 3. После нажатия на вкладку взять ее href как target
// 4. Присвоить контенту с target класс active


$(document).ready(function () {
	let tab = $('a[data-toggle="tab"]');

	tab.on('click', function (e) {
		e.preventDefault();

		$('.active').removeClass('active');
		$(this).parent().toggleClass('active');

		let activeContent = $(this).attr('href');
		$(activeContent).toggleClass('active');

	})
});
