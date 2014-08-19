var tasksArray = ['foo', 'bar', 'baz', 'qux'];
var taskListView = $.taskList;

var tasksDataSet = [
    { properties: { title: 'Sedation protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Analgesia protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Neuromuscular blockade protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Delirium protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'DVT prophylaxis - standard ICU orders?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Head of bed mechanically ventilated?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Head of bed >= 30 degrees?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Head of bed recorded on bedside chart?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Skin condition - Braden score recorded', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Skin condition - Specialty bed ordered',  accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Skin condition - Lesion present on transfer to ICU', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Skin condition - Wound team consulted', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Nutrition team assessment updated in record',  accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Insulin protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'If Severe Sepsis present, protocol ordered?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Mechanical ventilation?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}},
    { properties: { title: 'Mechanical ventilation - Weaning protocol active?', accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE}}
];



var uncheckedTemplate = {
    childTemplates: [
        {                            
            type: 'Ti.UI.Label',     
            bindId: 'title',         
                properties: {       
                color: 'black',
                font: { fontFamily:'Arial', fontSize: '20dp', fontWeight:'bold' },
                left: '60dp', top: 0,
            }
        },
    ],
    // Binds a callback to the click event, which catches events bubbled by the view subcomponents.
   events: {click: toggleCheck}
};

var checkedTemplate = JSON.parse(JSON.stringify(uncheckedTemplate));
// Change the text color to red
checkedTemplate.childTemplates[0].properties.color = 'red';
checkedTemplate.events.click = toggleCheck;

var taskSection = Ti.UI.createListSection();
taskSection.setItems(tasksDataSet);
taskListView.sections = [taskSection];
taskListView.templates = {'uncheck': uncheckedTemplate, 'check': checkedTemplate };
taskListView.defaultItemTemplate = 'uncheck';

function toggleCheck(e) {
    var item = taskSection.getItemAt(e.itemIndex);
    if (item.properties.accessoryType == Ti.UI.LIST_ACCESSORY_TYPE_NONE) {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;
        item.template = 'check';
    }
    else {
        item.properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_NONE;
        item.template = 'uncheck';
    }
    taskSection.updateItemAt(e.itemIndex, item);
} 


$.index.open();
