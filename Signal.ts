class Signal {
    list:any[] = [];
    constructor() {}
    add(handler: (...args:any[]) => void):void {
    	
    	if (this.list.length <= 0) {
    		this.list.push(handler);
    		return;
    	}

    	var N:number = this.list.length;
    	for( var i:number = 0; i < N; i++) {
    		var h = this.list[i];
    		if (h == handler) {
    			return;
    		}
    	}
    	this.list.push(handler);
    }
    dispatch(...args:any[]):void {
    	var N:number = this.list.length;
    	for( var i:number = 0; i < N; i++) {
    		var h = this.list[i];
    		h.apply(null, args);
    	}
	}
}