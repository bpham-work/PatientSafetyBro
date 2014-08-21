var tableView = $.tableView;
var tableData = [];

// Pull task data from Google Sheets Script End-point
var ajax = Ti.Network.createHTTPClient();
ajax.onerror = function(e){
    alert('Error');
    Titanium.API.error(e);
};
var taskDataSet = [];
ajax.onload = function(){
    Titanium.API.info(this.responseText);
    var data = this.responseText;
    var taskDataSet = JSON.parse(data).data;
    
    // Generate the required list objects for taskDataSet
    // TODO: We may want to cache this since it seems like it slows things down a bit
    // If we do it could work without a network connection and just store runs and issues locally until
    // a valid connection is established
    for(x = 0; x < taskDataSet.length; x++) {
		var row = Ti.UI.createTableViewRow();
		var label = Ti.UI.createLabel({
			left: 75,
			text: taskDataSet[x]['Step']
		});
		
		var reportButton = Ti.UI.createButton({
			left: 0,
			title: '!'
		});
	
		row.add(label);
		row.add(reportButton);
		
		//We can set some row unique identifier here
		row.rowId = taskDataSet[x]['Id'];
		
		label.addEventListener('click', checkRow);
		reportButton.addEventListener('click', reportTask);
	
		tableData.push(row);
	}
	
	tableView.data = tableData;

	$.index.open();
};
ajax.open('POST', 'https://script.google.com/macros/s/AKfycbzAonjX6IGGcefEIqkC5kfG1bJ_M-RXNS6RVa80wRNM8brHNs11/exec');
ajax.send({
    "key": "991087F6-2883-11E4-896E-1D75D34483DE"
});

function checkRow(event) {
	if(event.source.parent.hasCheck)
		event.source.parent.hasCheck = false;
	else
		event.source.parent.hasCheck = true;
}

function reportTask(event) {
	alert(event.source.parent.rowId);
}
