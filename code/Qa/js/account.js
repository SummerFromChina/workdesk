var Acc = {};

Acc.login = (function() {
	return {
		showEventBind : function(id) {
			$(id).bind("click", function() {
				Acc.login.showHtml();
			});
		},
		showHtml : function() {
			
		}
	};
})();
