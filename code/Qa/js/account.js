var Acc = {};

Acc.login = (function() {
	return {
		showEventBind : function(id) {
			$(id).bind("click", function() {
				Acc.login.showHtml();
				Acc.login.eventBind();
			});
		},
		showHtml : function() {
			$('body').append(Templates.login_html);
			$('.login_gray').show();
			$('.login_div').hide();
			$('.login_div').slideDown(500);
		},
		removeHtml:function(){
			$('.login_gray').hide(500);
			$('.login_div').hide(1000);
			$('.login_gray').remove();
			$('.login_div').remove();
		},
		eventBind : function() {
			$(login_back).bind('click',Acc.login.removeHtml);
			$(login_cancel).bind('click',Acc.login.removeHtml);
		}
	};
})();
