/** 一些工具 * */

Util = (function() {
	return {
		getSmallPic : function(obj, width, height) {
			var obpic = obj;
			var smallwidth = width;
			// 获得尺寸宽度
			var smallheight = height;
			// 获得尺寸高度
			var OriginalWidth = obpic.width;
			var OriginalHeight = obpic.height;
			var n_scale;
			var newwidth;
			var newheight;
			if(OriginalWidth > OriginalHeight) {
				if(OriginalWidth > smallwidth) {
					n_scale = parseFloat(OriginalWidth / smallwidth);
					obpic.width = smallwidth;
					newwidth = smallwidth;
				} else {
					n_scale = 1;
					obpic.width = OriginalWidth;
					newwidth = OriginalWidth;
				}
				obpic.height = parseInt(OriginalHeight / n_scale);
				newheight = parseInt(OriginalHeight / n_scale);

				if(newheight > OriginalHeight) {
					n_scale = parseFloat(newheight / smallheight);
					obpic.height = smallheight;
					obpic.width = parseInt(smallwidth / n_scale);
				}
			} else {
				if(OriginalHeight > smallheight) {
					n_scale = parseFloat(OriginalHeight / smallheight);
					obpic.height = smallheight;
					newheight = smallheight;
				} else {
					n_scale = 1;
					obpic.height = OriginalHeight;
					newheight = OriginalHeight;
				}
				obpic.width = parseInt(OriginalWidth / n_scale);
				newwidth = parseInt(OriginalWidth / n_scale);

				if(newwidth > OriginalWidth) {
					n_scale = parseFloat(newwidth / smallwidth);
					obpic.width = smallwidth;
					obpic.height = parseInt(smallheight / n_scale);
				}
			}

			var _h = height - obpic.height;
			$(obj).css('margin-top', _h / 2 + 'px');
		},

		injectJs : function(url) {
			var oScript = document.createElement("script");
			oScript.src = url;
			oScript.charset = 'gb2312';
			document.body.appendChild(oScript);
		},
		formatTime : function(sec) {
			if(!isFinite(sec) || sec < 0) {
				return '';
				// '--:--';
			} else {
				var m = Math.floor(sec / 60), s = Math.floor(sec) % 60;
				return (m < 10 ? '0' + m : m) + ':' + (s < 10 ? '0' + s : s);
			}
		},
		isNull : function(o) {
			return (0 == null || typeof (o) == 'undefined');
		},
		isString : function(arg) {
			return Object.prototype.toString.call(arg) === "[object String]";
		},

		isDate : function(o) {
			return Object.prototype.toString.call(o) === "[object Date]";
		},
		date2String : function(date, format) {
			if(!Util.isDate(date) || Util.isNull(format)) {
				return "";
			}
			var o = {
				"M+" : date.getMonth() + 1, // month
				"d+" : date.getDate(), // day
				"H+" : date.getHours(), // hour
				"m+" : date.getMinutes(), // minute
				"s+" : date.getSeconds(), // second
				"q+" : Math.floor((date.getMonth() + 3) / 3), // quarter
				"S" : date.getMilliseconds()
				// millisecond
			}

			if(/(y+)/.test(format)) {
				format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
			}

			for(var k in o) {
				if(new RegExp("(" + k + ")").test(format)) {
					format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k] : ("00" + o[k]).substr(("" + o[k]).length));
				}
			}
			return format;
		},

		string2Date : function(str, format) {
			if(Util.isNull(str) || Util.isNull(format)) {
				return null;
			}
			var compare = {
				'y+' : 'y',
				'M+' : 'M',
				'd+' : 'd',
				'H+' : 'h',
				'm+' : 'm',
				's+' : 's'
			};
			var result = {
				'y' : '',
				'M' : '',
				'd' : '',
				'H' : '00',
				'm' : '00',
				's' : '00'
			};
			var tmp = format;
			for(var k in compare) {
				if(new RegExp('(' + k + ')').test(format)) {
					result[compare[k]] = str.substring(tmp.indexOf(RegExp.$1), tmp.indexOf(RegExp.$1) + RegExp.$1.length);
				}
			}
			return new Date(result['y'], result['M'] - 1, result['d'], result['H'], result['m'], result['s']);
		},
		sortBy : function(arr, prop, desc) {
			var props = [], ret = [], i = 0, len = arr.length;
			if( typeof prop == 'string') {
				for(; i < len; i++) {
					var oI = arr[i];
					(props[i] = new String(oI && oI[prop] || ''))._obj = oI;
				}
			} else if( typeof prop == 'function') {
				for(; i < len; i++) {
					var oI = arr[i];
					(props[i] = new String(oI && prop(oI) || ''))._obj = oI;
				}
			} else {
				throw '参数类型错误';
			}
			props.sort();
			for( i = 0; i < len; i++) {
				ret[i] = props[i]._obj;
			}
			if(desc)
				ret.reverse();
			return ret;
		},
		encodeGB2321 : function(str) {
			var z = '{0}';
			var strOut = "";
			for(var i = 0; i < str.length; i++) {
				var c = str.charAt(i);
				var code = str.charCodeAt(i);
				if(c == " ")
					strOut += "+";
				else if(code >= 19968 && code <= 40869) {
					index = code - 19968;
					strOut += "%" + z.substr(index * 4, 2) + "%" + z.substr(index * 4 + 2, 2);
				} else {
					strOut += "%" + str.charCodeAt(i).toString(16);
				}
			}
			return strOut;
		},
		readFile : function(fileurl) {
			var m = webtop.createMemory("tempfile", fileurl);
			var s = webtop.createStream(m);
			webtop.setStreamPos(0, s);
			var re = webtop.readString(65536/2, s);
			webtop.deleteStream(s);
			webtop.deleteMemory(m);
			
			var l = webtop.getFileSize('K:\\WORK\\Rest\\Rest\\data\\localmusic.json');
			console.log(l);
			return re;
		}
	};
})();

Log = (function(){
	return {
		info:function(message){
			console.log(Util.date2String(new Date(),"yyyy-MM-dd HH:mm:ss")+"[INFO ]:"+message);
		},
		error:function(message){
			console.log(Util.date2String(new Date(),"yyyy-MM-dd HH:mm:ss")+"[ERROR]:"+message);
		}
	};
})();
