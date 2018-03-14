var task = {
	setID: function setId(ID) {
		this.id = ID;
	},
	outputID: function outputID() {
		console.log(this.id);
	}
};

// make 'ABC' delegate to task
var ABC = Object.create(task);

ABC.prepareTask = function(ID, label) {
	this.setID(ID);
	this.label = label;
};

ABC.outputTaskDetail = function() {
	this.outputID();
	console.log(this.label);
};


//ABC.prepareTask(1, 'COSTCO'); // output 1 using prototype chanin task.setID
//ABC.outputTaskDetail(); // output COSTCO using prototype chain task.outputID

// what we really care about is that ABC delegates to task object via Object.create(..)

module.exports = task;


// what we really care about is that ABC delegates to task object via Object.create(..)

