var Qa = {};

var cfg = {
	ajaxUrl : 'http://42.121.28.149:8080/QaApp/Qa/',
	width : 0,
	height : 0,
	ismax : false,
	titleHeight : 42,
	taskid : 'Qa',
	currentWin : '', // 当前软件主窗口
	miniWidth : 1035,
	miniHeight : 545
};

Win = {};

Win.events = (function() {
	return {
		close : function(dom, e) {
			if(!Util.isNull(dom)) {
				e = Util.isNull(e) ? 'click' : e;
				$(dom).off(e).on(e, function() {
					webtop.close();
				});
			} else {
				webtop.close();
			}
		},
		max : function(dom, e) {
			if(!Util.isNull(dom)) {
				e = Util.isNull(e) ? 'click' : e;
				$(dom).off(e).on(e, function() {
					if(cfg.ismax) {
						Log.info('unmax');
						webtop.move((cfg.width - cfg.miniWidth) / 2, (cfg.height - cfg.miniHeight) / 2);
						webtop.setSize(cfg.miniWidth, cfg.miniHeight);
						cfg.ismax = false;
						app_max_btn.className = "app_max_btn";
					} else {
						Log.info('max');
						webtop.move(0, 0);
						webtop.max();
						cfg.ismax = true;
						app_max_btn.className = "app_unmax_btn";
					}
				});
			} else {
				if(cfg.ismax) {
					webtop.move((cfg.width - cfg.miniWidth) / 2, (cfg.height - cfg.miniHeight) / 2);
					webtop.setSize(cfg.miniWidth, cfg.miniHeight);
					cfg.ismax = false;
					app_max_btn.className = "app_max_btn";
				} else {
					webtop.move(0, 0);
					webtop.max();
					cfg.ismax = true;
					app_max_btn.className = "app_unmax_btn";
				}
			}
		},
		min : function(dom, e) {
			if(!Util.isNull(dom)) {
				e = Util.isNull(e) ? 'click' : e;
				$(dom).off(e).on(e, function() {
					webtop.setTaskIcon(cfg.taskid, 'webtop.ico', 'Qa');
					webtop.hide();
				});
			} else {
				webtop.setTaskIcon(cfg.taskid, 'webtop.ico', 'Qa');
				webtop.hide();
			}
		},
		drag : function(dom) {
			if(!Util.isNull(dom)) {
				// 处理 窗体拖动事件
				dom.onmousedown = function() {
					webtop.drag();
				};
				dom.onmouseup = function() {
					webtop.stopDrag();
				};
				dom.onselectstart = function() {
					return false;
				};
			}
		}
	};
})();

/**
 * 窗体 事件，界面 初始化
 */
Qa.win = (function() {

	return {
		init : function() {
			Qa.win.eventBind();
			
			index.init();
		},

		eventBind : function() {
			document.onselectstart = function() {
				return false;
			};
			Win.events.close(app_close_btn, 'click');
			Win.events.max(app_title, 'dblclick');
			Win.events.drag(app_title);
			Win.events.max(app_max_btn, 'click');
			Win.events.min(app_min_btn);
			
			Acc.login.showEventBind(acc_login);
		},

		cleanContent : function() {
			Qa.win.cleanChild('#app_content');
		},
		clean : function(obj) {
			$(obj).off();
			$(obj).removeData();
			$(obj).remove();
		},
		cleanChild : function(obj) {
			$(obj).children().each(function() {
				Qa.win.cleanChild(this);
				Qa.win.clean(this);
			});
		},

		cleanSubApp : function() {
			$('.sub_app_menu').hide(1500);
			$('.sub_app_content').hide(1500);
			$('.sub_app_menu').remove();
			$('.sub_app_content').remove();
			$.idleTimer('destroy');
		}
	};
})();

Qa.msg = (function() {
	return {
		test : function() {
			var url = "ws:localhost:8080/SocketTest/action/SocketServlet.do";
			if('WebSocket' in window) {
				ws = new WebSocket(url);
			} else if('MozWebSocket' in window) {
				ws = new MozWebSocket(url);
			} else {
				alert('WebSocket is not supported by this browser.');
				return;
			}
			ws.onopen = function() {
				alert("connect success!");
			};
			ws.onmessage = function(event) {
				alert("revice mess:" + event.data);
			};
			ws.onclose = function() {
				alert("close connect..");
			};
		}
	};
})();

Qa.init = (function() {

	var relayoutWin = function() {
		$('.bg').css('height', cfg.height + 12 + 'px');
		$('#app_win').css('height', cfg.height + 12 + 'px');
		$('#app_title').css('height', cfg.titleHeight + 'px');
		$('#app_main').css('top', cfg.titleHeight + 'px');
		$('#app_main').css('height', cfg.height - cfg.titleHeight + 12 + 'px');
		$('#app_content').css('height', cfg.height - cfg.titleHeight + 12 - 100 + 'px');
	};
	return {
		readyHandler : function() {
			var screenSize = webtop.getScreenSize();
			cfg.width = screenSize.width;
			cfg.height = screenSize.height + 12;
			Win.events.max();
			console.log('ready');
			relayoutWin();
			Qa.win.init();
			Data.init();
		},
		sizeHandler : function(e) {
			var w = e.detail.width, h = e.detail.height;
			// container.style.height = h - 12 + 'px';
			cfg.width = w;
			cfg.height = h - 12;
			relayoutWin();

		},
		focusHandler : function() {
		},
		activeHandler : function(x, y) {
		},
		taskMouseHandler : function(e) {
			if(e.detail.type == '513') {
				webtop.restore();
			}
		},
		dragDropHandler : function(e) {
		}
	};
})();

/*
 * Webtop EventListener Config
 */
addEventListener("webtopReady", Qa.init.readyHandler);
addEventListener("webtopWindowResize", Qa.init.sizeHandler);
addEventListener("webtopWindowFocus", Qa.init.focusHandler);
addEventListener("webtopWindowActive", Qa.init.activeHandler);
addEventListener("webtopTaskMouse", Qa.init.taskMouseHandler);
addEventListener("webtopDragDrop", Qa.init.dragDropHandler);

