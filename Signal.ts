class Signal {
    private list:any[] = [];
    public constructor() {}
    public add(handler: (...args:any[]) => void):void {
    	
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
    public dispatch(...args:any[]):void {
    	var N:number = this.list.length;
    	for( var i:number = 0; i < N; i++) {
    		var h = this.list[i];
    		if (args.length == 0) {
    			h();
    		} else if (args.length == 1) {
    			h(args[0]);
    		} else if (args.length == 2) {
    			h(args[0], args[1]);
    		} else if (args.length == 3) {
    			h(args[0], args[1], args[2]);
    		} else {
    			h.apply(null, args);
    		}
    	}
	}
}