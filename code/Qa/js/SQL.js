var DB = SQLite({
	shortName : 'Rest',
	defaultErrorHandler : fail,
	defaultDataHandler : pass
});

function pass(results, query) {
	Log.info(query);
}

function fail(error, query) {
	Log.error(query);
	Log.error(error.message);
}

var Data={};

Data = (function() {
	return {
		init : function() {
			DB.select('sqlite_master', 'name', {
				type : 'table',
				name : 'account'
			}, null, function(r, q) {
				if(r.rows.length > 0) {
					return;
				} else {
					DB.createTable('account', 
					['guid TEXT primary key',
					 'username TEXT',
					 'password TEXT',
					 'autologin TEXT',
					].join());
				}
			});
			
			DB.select('sqlite_master', 'name', {
				type : 'table',
				name : 'singer'
			}, null, function(r, q) {
				if(r.rows.length > 0) {
					return;
				} else {
					DB.createTable('singer', 'guid TEXT primary key,name TEXT,imgurl TEXT, id INTEGER');
					DB.insert('singer',{guid:'1',name:'未知',imgurl:'',id:9999});
				}
			});
		}
	};
})();

Data.init();