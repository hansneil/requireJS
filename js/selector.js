define(function(){
	function query(selector, context){
		var s= selector,
			doc = document,
			regId = /^#[\w\-]+/,
			regCls = /^([\w\-]+)?\.([\w\-]+)/,
			regTag = /^([\w\*]+)$/,
			regNodeAttr = /^([\w\-]+)?\[([\w]+)(=(\w+))?\]/;
			
		var context = 
				context == undefined ?
				document :
				typeof context == "string" ?
				doc.getElementById(context.substr(1, context.length)) : context;
		
		if (regId.test(s)) {
			return doc.getElementById(s.substr(1, s.length));
		}
		
		if (context.querySelectorAll) {
			if (context.nodeType == 1) {
				var old = context.id, id = context.id = "__$$__";
				try {
					return context.querySelectorAll('#' + id + ' ' + s);
				} catch(e) {
				} finally {
					old ? context.id = old : context.removeAttribute('id');
				}
			}
			
			return context.querySelectorAll(s);
		}
	}
	
	return query;
});