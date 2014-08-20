var listView = $.list;

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
listView.sections[0].items = taskDataSet;

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

$.index.open();
