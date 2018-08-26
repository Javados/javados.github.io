jQuery(document).ready(function($) {

	if ($('.wpcf7-form').length > 0) {

		$('.wpcf7-form').find('.wpcf7-form-control-wrap').each(function(i, item) {
		if ($(item).hasClass('your-name')) {
			$(item).append('<label class="indicators"><i class="fa fa-user-o"></i></label>');
		}
		if ($(item).hasClass('your-email')) {
			$(item).append('<label class="indicators"><i class="fa fa-envelope-o"></i></label>');
		}
		if ($(item).hasClass('your-message')) {
			$(item).append('<label class="indicators indicator-textarrea"><i class="fa fa-text-width"></i></label>');
		}
	});

	$('.your-name').children('input[name="your-name"]').on('keyup', function(etg) {
		var detectInputName = /[\w]|[а-я]{1,}/gi;
		var validInputName = $(this).val().match(detectInputName);
		var indicatorLabel = $(this).siblings('.indicators');
		if (validInputName) {
			indicatorLabel.addClass('indicator-succ');
			indicatorLabel.removeClass('indicator-err');
		}
		else {
			indicatorLabel.addClass('indicator-err');
			indicatorLabel.removeClass('indicator-succ');
		}
	});
	$('.your-email').children('input[name="your-email"]').on('keyup', function(etg) {
		var detectEmail = /[\w]{1,}@[\w]{1,}(\.)[\w]{2,}/gi;
    	var validEmail = $(this).val().match(detectEmail);
		var indicatorLabel = $(this).siblings('.indicators');
		if (validEmail) {
			indicatorLabel.addClass('indicator-succ');
			indicatorLabel.removeClass('indicator-err');
		}
		else {
			indicatorLabel.addClass('indicator-err');
			indicatorLabel.removeClass('indicator-succ');
		}
	});
	$('.wpcf7-form').on('mouseenter', function(etg) {
		var indicatorName = $(this).find('input[name="your-name"]');
		var indicatorEmail = $(this).find('input[name="your-email"]');
		var indicatorLabelName = indicatorName.siblings('.indicators');
		var indicatorLabelEmail = indicatorEmail.siblings('.indicators');
		if (indicatorName.val() === "") {
			indicatorLabelName.addClass('indicator-err');
		}
		if (indicatorEmail.val() === "") {
			indicatorLabelEmail.addClass('indicator-err');
		}
	});
	$('.wpcf7-form').on('mouseleave', function(etg) {
		var indicatorName = $(this).find('input[name="your-name"]');
		var indicatorEmail = $(this).find('input[name="your-email"]');
		var indicatorLabelName = indicatorName.siblings('.indicators');
		var indicatorLabelEmail = indicatorEmail.siblings('.indicators');
		if (indicatorName.val() === "") {
			indicatorLabelName.removeClass('indicator-err');
		}
		if (indicatorEmail.val() === "") {
		indicatorLabelEmail.removeClass('indicator-err');
		}
	});
	$('.wpcf7-form').on('submit', function(etg) {
		var indicatorName = $(this).find('input[name="your-name"]');
		var indicatorEmail = $(this).find('input[name="your-email"]');
		var indicatorLabelName = indicatorName.siblings('.indicators');
		var indicatorLabelEmail = indicatorEmail.siblings('.indicators');
		setTimeout(function() {
			indicatorLabelName.removeClass('indicator-succ');
			indicatorLabelEmail.removeClass('indicator-succ');
		},1000);
	});
	}
});