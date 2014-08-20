var listView = $.list;

var sections = [];

var taskSection = Ti.UI.createListSection();

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
    var jdata = JSON.parse(data).data;
    
    // Generate the required list objects for taskDataSet
    for (var row in jdata)
    {
    	taskDataSet.push( {task: {taskId: jdata[row]['Id'], text: jdata[row]['Step']}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}} );
    }
    
    // Attach task data to our list view section
	taskSection.setItems(taskDataSet);
	sections.push(taskSection);
	listView.sections[0].items = taskDataSet;
	
	$.index.open();
};
ajax.open('POST', 'https://script.google.com/macros/s/AKfycbzAonjX6IGGcefEIqkC5kfG1bJ_M-RXNS6RVa80wRNM8brHNs11/exec');
ajax.send({
    "key": "991087F6-2883-11E4-896E-1D75D34483DE"
});

function toggleCheck (e) {
    var item = taskSection.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.template = 'checked';
    }
    else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.template = 'unchecked';
    }
    taskSection.updateItemAt(e.itemIndex, item);
} 
