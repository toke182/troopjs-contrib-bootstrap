define([ "troopjs-dom/component/widget" ], function (Widget) {
	return Widget.extend({
		"dom:input/change": function ($event) {
			var $target = $($event.target); 
			$target.toggleClass("checked", $target.is(":checked"));
		}
	});
});