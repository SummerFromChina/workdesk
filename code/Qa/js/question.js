/**
 * 问答区
 */

var question = {
	editor : null
};

question.init = function() {
	question.html.showHtml();
	question.events.bind();
}

question.html = (function() {
	return {

		showHtml : function() {
			$(app_content).append(Templates.app_question);
			question.html.showQuesList();
			question.html.showHotTips();
		},

		// 问题列表
		showQuesList : function() {
			var news = {
				title : "Developed with the advice of Microsoft to build the user interface"
			};
			var v = [];
			v.push(news);
			v.push(news);
			$(ques_questions).append(Templates.question_list({
				list : v
			}));
		},

		// 热门标签
		showHotTips : function() {
			var tips = {
				tip : "Java(132)"
			};
			var v = [];
			v.push(tips);
			v.push(tips);
			$(tips_hot).append(Templates.question_hottips({
				list : v
			}));
		}
	};
})();

question.add = (function() {
	return {
		html : function() {
			question.add.fckShow();
		},

		fckShow : function(html) {
			if(question.editor) {
				return;
			}
			var all_h = $(ques_left).height();
			KEditor.cfg.height = all_h - 145;
			question.editor = KindEditor.create('textarea[name="content"]', KEditor.cfg);
		}
	};
})();

question.events = (function() {
	return {
		bind : function() {
		},
	};
})();
