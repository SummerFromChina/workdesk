/**
 * 首页
 */

var index = {
	menu_active : 0,

};

index.init = function() {
	index.html.showHtml();
	index.events.bind();
}

index.html = (function() {
	return {

		showHtml : function() {
			$(app_content).append(Templates.app_main());
			index.html.showAppnews();
			index.html.showAppshare();
			index.html.showAppquestion();
		},

		showAppnews : function(value) {
			var news = {
				title : "Developed with the advice of Microsoft to build the user interface"
			};
			var v = [];
			v.push(news);
			v.push(news);
			$(app_news).append(Templates.main_app_news({
				list : v
			}));
		},
		showAppshare : function(value) {
			var _tips = [{
				name : "Java"
			}, {
				name : '框架'
			}];
			var news = {
				title : "Developed with the advice of Microsoft to build the user interface",
				tips : _tips
			};
			var v = [];
			v.push(news);
			v.push(news);
			$(app_share).append(Templates.main_app_share({
				list : v
			}));
		},
		showAppquestion : function(value) {
			var _tips = [{
				name : "Java"
			}, {
				name : '框架'
			}];
			var news = {
				title : "Developed with the advice of Microsoft to build the user interface",
				tips : _tips
			};
			var v = [];
			v.push(news);
			v.push(news);
			$(app_question).append(Templates.main_app_question({
				list : v
			}));
		},
		showSubMenu : function() {

		}
	};
})();

index.events = (function() {
	return {
		bind : function() {
			index.events.menuBind();
		},
		menuBind : function() {
			$(main_menu).find('span').each(function() {
				$(this).bind('click', function() {
					$(main_menu).find('span').each(function() {
						$(this).css('color', '#ABA5A5');
					});
					$(this).css('color', '#000000');
				});

				$(this).bind('mouseover', function() {
					$(sub_menu).empty();
					var index = $(this).data('index');
					$(sub_menu).append(Templates.submenu[index]);
				});
				$(this).bind('mouseout', function() {
					$(sub_menu).empty();
					$(sub_menu).append(Templates.submenu[index.menu_active]);
				});
			});
			$(menu_index).bind('click', function() {
				$(app_content).empty();
				index.html.showHtml();
				index.menu_active = $(this).data('index');
			});
			
			$(menu_question).bind('click', function() {
				$(app_content).empty();
				var option = JSON.parse($(this).data('option'));
				index.menu_active = $(this).data('index');
			});
		}
	};
})();
