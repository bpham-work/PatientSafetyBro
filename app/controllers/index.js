var uncheckedTemplate = {
    childTemplates: [
        {                            // Title 
            type: 'Ti.UI.Label',     // Use a label for the title 
            bindId: 'task',          // Maps to a custom info property of the item data
            properties: {            // Sets the label properties
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                left: '10dp', 
                top: 0,
            }
        }
    ],
    events: {click: toggleCheck}
};

var checkedTemplate = JSON.parse(JSON.stringify(uncheckedTemplate));
// Change the text color to red
checkedTemplate.childTemplates[0].properties.color = 'red';
checkedTemplate.events.click = toggleCheck;

var listView = Ti.UI.createListView({
    templates: { 'unchecked': uncheckedTemplate, 'checked': checkedTemplate },
    defaultItemTemplate: 'unchecked'
});

var sections = [];

var taskSection = Ti.UI.createListSection();
var taskDataSet = [
    { task: {text: 'Sedation protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Analgesia protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Neuromuscular blockade protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Delirium protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'DVT prophylaxis - standard ICU orders?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Head of bed mechanically ventilated?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Head of bed >= 30 degrees?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Head of bed recorded on bedside chart?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Skin condition - Braden score recorded'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Skin condition - Specialty bed ordered'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Skin condition - Lesion present on transfer to ICU'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Skin condition - Wound team consulted'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Nutrition team assessment updated in record'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Insulin protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'If Severe Sepsis present, protocol ordered?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Mechanical ventilation?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { task: {text: 'Mechanical ventilation - Weaning protocol active?'}, properties: {accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}}
];
taskSection.setItems(taskDataSet);
sections.push(taskSection);
listView.setSections(sections);

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


$.index.add(listView);
$.index.open();
