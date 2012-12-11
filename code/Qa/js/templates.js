/**
 * 页面模板
 */
Templates = {
	// 首页相关
	app_main : template('<div id="content_main"><div id="content_main_left"><div style="height: 25px;font-size: 18px;">综合资讯</div><div id="app_news"></div></div><div id="content_main_center"><div style="height: 25px;font-size: 18px;">技术分享</div><div id="app_share"></div></div><div id="content_main_right"><div style="height: 25px;font-size: 18px;">最新提问</div><div id="app_question"></div></div></div>'),
	
	// 子菜单
	submenu:['<span>综合资讯</span> &nbsp; <span>技术分享</span> &nbsp; <span>最新提问</span>','<span>活跃</span> &nbsp; <span>最新提问</span> &nbsp; <span>尚未回答</span>'],

	// 首页界面
	main_app_news : template('<ul><% for (var i = 0; i < list.length; i++){ %><li class="news"><div class="title"><p><%=list[i].title %></p></div><div class="tips"><div class="news_time">2012年11月11日  11:11</div></div></div></li><% } %></ul>'),
	main_app_share : template('<ul><% for (var i = 0; i < list.length; i++){ %><li class="news"><div class="title"><p><%=list[i].title %></p></div><div class="tips"><% include("main_app_tips", list[i]) %></div></div></li><% } %></ul>'),
	main_app_question : template('<ul><% for (var i = 0; i < list.length; i++){ %><li class="news"><div class="title"><p><%=list[i].title %></p></div><div class="tips"><% include("main_app_tips", list[i]) %></div></div></li><% } %></ul>'),
	main_app_tips : template('main_app_tips', '<% for (var i = 0; i < tips.length; i++){ %><div class="tip"><%=tips[i].name %></div><% } %>'),


	// 问答区
	app_question : '<div id="content_main"><div id="ques_left"><div id="ques_left_title"><span>技术问答</span><div id="btn_ask" class="btn_ask">我要提问</div></div><div id="ques_questions"></div></div><div id="ques_right"><div id="ques_tips_hot"><span>热门标签</span></div><div id="tips_hot"></div></div></div>',
	question_list:template('<ul><% for (var i = 0; i < list.length; i++){ %><li class="ques"><div class="ques_title"><span><%=list[i].title %></span><span class="ques_answer_num">10</span></div><div class="ques_info"><div class="tips"><div class="tip"><span>Java</span></div><div class="tip"><span>数据库</span></div></div><span>发布于 13小时前 ，最后回答(1小时前)：quque</span></div></li><% } %></ul>'),
	question_hottips : template('<% for (var i = 0; i < list.length; i++){ %><div class="ques_tip"><%=list[i].tip %></div><% } %>'),
	end:''
};

