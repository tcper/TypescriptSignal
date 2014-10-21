/// <reference path="tsUnit.ts" />
/// <reference path="Signal.ts" />

module SignalTest {
	export class SignalTestStub extends tsUnit.TestClass {
		public TestProperty:string = "SignalTest";
		public signal;
		public setUp() {
			this.signal = new Signal();
		}
		public normalTest() {
			
			this.signal = new Signal();
			this.signal.removeAll();
			this.signal.add(function(){
				console.log("handler called");
			});
			this.signal.dispatch();

			
			this.signal.removeAll();
			this.signal.add(function(event:any) {
				console.log(event);
			});
			this.signal.dispatch({"key":"value"});		
		}
	}
}

window.onload = function () {
    // Instantiate tsUnit and pass in modules that contain tests
    var test = new tsUnit.Test(SignalTest);

    // Show the test results
    test.showResults(document.getElementById('result'), test.run());
};