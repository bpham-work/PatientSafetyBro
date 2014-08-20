var tableView = $.tableView;
var tableData = [];

var taskDataSet = [
    { task: 'Sedation protocol ordered?'},
    { task:  'Analgesia protocol ordered?'},
    { task:  'Neuromuscular blockade protocol ordered?'},
    { task:  'Delirium protocol ordered?'},
    { task:  'DVT prophylaxis - standard ICU orders?'},
    { task:  'Head of bed mechanically ventilated?'},
    { task:  'Head of bed >= 30 degrees?'},
    { task:  'Head of bed recorded on bedside chart?'},
    { task:  'Skin condition - Braden score recorded'},
    { task:  'Skin condition - Specialty bed ordered'},
    { task:  'Skin condition - Lesion present on transfer to ICU'},
    { task:  'Skin condition - Wound team consulted'},
    { task:  'Nutrition team assessment updated in record'},
    { task:  'Insulin protocol ordered?'},
    { task:  'If Severe Sepsis present, protocol ordered?'},
    { task:  'Mechanical ventilation?'},
    { task:  'Mechanical ventilation - Weaning protocol active?'}
];

for(x = 0; x < taskDataSet.length; x++) {
	var row = Ti.UI.createTableViewRow();
	var label = Ti.UI.createLabel({
		left: 75,
		text: taskDataSet[x].task
	});
	
	var reportButton = Ti.UI.createButton({
		left: 0,
		title: '!'
	});

	row.add(label);
	row.add(reportButton);
	
	//We can set some row unique identifier here
	row.rowId = x;
	
	label.addEventListener('click', checkRow);
	reportButton.addEventListener('click', reportTask);
	
	tableData.push(row);
}

tableView.data = tableData;

function checkRow(event) {
	if(event.source.parent.hasCheck)
		event.source.parent.hasCheck = false;
	else
		event.source.parent.hasCheck = true;
}

function reportTask(event) {
	alert(event.source.parent.rowId);
}

$.index.open();


