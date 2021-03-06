/* Language initialisation for the jQuery UI date picker plugin. */
/* Written by Keith Wood (kbwood{at}iinet.com.au) and Stéphane Nahmani (sholby@sholby.net).
 * Modified by Cyril Rezé (Lyr!C) for iCagenda, joomla! extension
 */

/**
 *------------------------------------------------------------------------------
 *  iCagenda v3 by Jooml!C - Events Management Extension for Joomla! 2.5 / 3.x
 *------------------------------------------------------------------------------
 * @package     com_icagenda
 * @copyright   Copyright (c)2012-2015 Cyril Rezé, Jooml!C - All rights reserved
 *
 * @license     GNU General Public License version 3 or later; see LICENSE.txt
 * @author      Cyril Rezé (Lyr!C)
 * @link        http://www.joomlic.com
 *
 * @version     3.4.1 2015-01-22
 * @since       1.0
 *------------------------------------------------------------------------------
*/

jQuery(function($){
	$.datepicker.regional[''] = {
		currentText: Joomla.JText._('COM_ICAGENDA_TP_CURRENT', 'Now'),
		closeText: Joomla.JText._('COM_ICAGENDA_TP_CLOSE', 'Done'),
		prevText: '&#x3c;Prev',
		nextText: 'Next&#x3e;',
		ampm: false,
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		timeFormat: 'hh:mm tt',
		timeSuffix: '',
		monthNames: [Joomla.JText._('JANUARY', 'January'),
		Joomla.JText._('FEBRUARY', 'February'),
		Joomla.JText._('MARCH', 'March'),
		Joomla.JText._('APRIL', 'April'),
		Joomla.JText._('MAY', 'May'),
		Joomla.JText._('JUNE', 'June'),
		Joomla.JText._('JULY', 'July'),
		Joomla.JText._('AUGUST', 'August'),
		Joomla.JText._('SEPTEMBER', 'September'),
		Joomla.JText._('OCTOBER', 'October'),
		Joomla.JText._('NOVEMBER', 'November'),
		Joomla.JText._('DECEMBER', 'December')],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: [Joomla.JText._('SU', 'Su'),
		Joomla.JText._('MO', 'Mo'),
		Joomla.JText._('TU', 'Tu'),
		Joomla.JText._('WE', 'We'),
		Joomla.JText._('TH', 'Th'),
		Joomla.JText._('FR', 'Fr'),
		Joomla.JText._('SA', 'Sa')],
		weekHeader: 'Wk',
		isRTL: false,
		showMonthAfterYear: false,
		timeOnlyTitle: Joomla.JText._('COM_ICAGENDA_TP_TITLE', 'Choose Time'),
		timeText: [Joomla.JText._('COM_ICAGENDA_TP_TIME')],
		hourText: Joomla.JText._('COM_ICAGENDA_TP_HOUR', 'Hour'),
		minuteText: Joomla.JText._('COM_ICAGENDA_TP_MINUTE', 'Minute'),
		yearSuffix: ''};
	$.datepicker.setDefaults($.datepicker.regional['']);

	$.timepicker.regional[''] = {
		currentText: Joomla.JText._('COM_ICAGENDA_TP_CURRENT', 'Now'),
		closeText: Joomla.JText._('COM_ICAGENDA_TP_CLOSE', 'Done'),
		prevText: '&#x3c;Prev',
		nextText: 'Next&#x3e;',
		ampm: false,
		amNames: ['AM', 'A'],
		pmNames: ['PM', 'P'],
		timeFormat: 'hh:mm tt',
		timeSuffix: '',
		monthNames: [Joomla.JText._('JANUARY', 'January'),
		Joomla.JText._('FEBRUARY', 'February'),
		Joomla.JText._('MARCH', 'March'),
		Joomla.JText._('APRIL', 'April'),
		Joomla.JText._('MAY', 'May'),
		Joomla.JText._('JUNE', 'June'),
		Joomla.JText._('JULY', 'July'),
		Joomla.JText._('AUGUST', 'August'),
		Joomla.JText._('SEPTEMBER', 'September'),
		Joomla.JText._('OCTOBER', 'October'),
		Joomla.JText._('NOVEMBER', 'November'),
		Joomla.JText._('DECEMBER', 'December')],
		monthNamesShort: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
		'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
		dayNames: ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
		dayNamesShort: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
		dayNamesMin: [Joomla.JText._('SU', 'Su'),
		Joomla.JText._('MO', 'Mo'),
		Joomla.JText._('TU', 'Tu'),
		Joomla.JText._('WE', 'We'),
		Joomla.JText._('TH', 'Th'),
		Joomla.JText._('FR', 'Fr'),
		Joomla.JText._('SA', 'Sa')],
		weekHeader: 'Wk',
		isRTL: false,
		showMonthAfterYear: false,
		timeOnlyTitle: Joomla.JText._('COM_ICAGENDA_TP_TITLE', 'Choose Time'),
		timeText: [Joomla.JText._('COM_ICAGENDA_TP_TIME')],
		hourText: Joomla.JText._('COM_ICAGENDA_TP_HOUR', 'Hour'),
		minuteText: Joomla.JText._('COM_ICAGENDA_TP_MINUTE', 'Minute'),
		yearSuffix: ''};
	$.timepicker.setDefaults($.timepicker.regional['']);
});

jQuery(function($){

	var startDateTextBox = $('#startdate');
	var endDateTextBox = $('#enddate');

	startDateTextBox.datetimepicker({
		dateFormat: "yy-mm-dd",
		hourGrid: 4,
		minuteGrid: 10,
		onClose: function(dateText, inst) {
			if (endDateTextBox.val() != '') {
				var testStartDate = startDateTextBox.datetimepicker('getDate');
				var testEndDate = endDateTextBox.datetimepicker('getDate');
				if (testStartDate > testEndDate)
				{
					endDateTextBox.datetimepicker('setDate', startDateTextBox.val());
				}
			}
			else {
				endDateTextBox.val(dateText);
			}
		},
//		onSelect: function (selectedDateTime){
//			endDateTextBox.datetimepicker('option', 'minDate', startDateTextBox.datetimepicker('getDate') );
//		}
	});

	endDateTextBox.datetimepicker({
		dateFormat: "yy-mm-dd",
		hourGrid: 4,
		minuteGrid: 10,
		onClose: function(dateText, inst) {
			if (startDateTextBox.val() != '') {
				var testStartDate = startDateTextBox.datetimepicker('getDate');
				var testEndDate = endDateTextBox.datetimepicker('getDate');
				if (testStartDate > testEndDate)
				{
					startDateTextBox.datetimepicker('setDate', endDateTextBox.val());
				}
			}
			else {
				startDateTextBox.val(dateText);
			}
		},
//		onSelect: function (selectedDateTime){
//			startDateTextBox.datetimepicker('option', 'maxDate', endDateTextBox.datetimepicker('getDate') );
//		}
	});

	$( ".data" ).live('focus', function(){
		$(this).datetimepicker({
			dateFormat: 'yy-mm-dd',
			timeFormat: 'hh:mm',
		hourGrid: 4,
		minuteGrid: 10,
			addSliderAccess: true,
			sliderAccessArgs: { touchonly: true }
		});
	});

	$('#add').live('click', function(e){
		e.preventDefault();
		$delete=Joomla.JText._('COM_ICAGENDA_DELETE_DATE', 'Delete');
		$('#dTable').append('<tr><td><input class="data" type="text" name="d"/></td><td><a class="del" href="#">'+$delete+'</a></td></tr>');
	});

	$( ".ui-state-default" ).live('click', function(){
		$array=$('#dTable input').serialize();
		$('input.date').attr('value', $array);
		document.getElementById("startdate").removeClass("ic-date-invalid");
		document.getElementById("enddate").removeClass("ic-date-invalid");
		document.getElementById("dTable").removeClass("ic-date-invalid");
	});

	$('.del').live('click', function(e){
		e.preventDefault();
		$(this).parent().parent('tr').remove();
		$array=$('#dTable input').serialize();
		$('input.date').attr('value', $array);
	});

});
