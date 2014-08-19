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
                accessoryType: Ti.UI.LIST_ACCESSORY_TYPE_NONE
            }
        }
    ]
};

var checkedTemplate = JSON.parse(JSON.stringify(uncheckedTemplate));
// Change the text color to red
checkedTemplate.childTemplates[0].properties.color = 'red';
checkedTemplate.childTemplates[0].properties.accessoryType = Ti.UI.LIST_ACCESSORY_TYPE_CHECKMARK;

var listView = Ti.UI.createListView({
    templates: { 'unchecked': uncheckedTemplate, 'checked': checkedTemplate },
    defaultItemTemplate: 'unchecked'
});

var sections = [];

var taskSection = Ti.UI.createListSection();
var taskDataSet = [
    { task: {text: 'Sedation protocol ordered?'}},
    { task: {text: 'Analgesia protocol ordered?'}},
    { task: {text: 'Neuromuscular blockade protocol ordered?'}},
    { task: {text: 'Delirium protocol ordered?'}},
    { task: {text: 'DVT prophylaxis - standard ICU orders?'}},
    { task: {text: 'Head of bed mechanically ventilated?'}},
    { task: {text: 'Head of bed >= 30 degrees?'}},
    { task: {text: 'Head of bed recorded on bedside chart?'}},
    { task: {text: 'Skin condition - Braden score recorded'}},
    { task: {text: 'Skin condition - Specialty bed ordered'}},
    { task: {text: 'Skin condition - Lesion present on transfer to ICU'}},
    { task: {text: 'Skin condition - Wound team consulted'}},
    { task: {text: 'Nutrition team assessment updated in record'}},
    { task: {text: 'Insulin protocol ordered?'}},
    { task: {text: 'If Severe Sepsis present, protocol ordered?'}},
    { task: {text: 'Mechanical ventilation?'}},
    { task: {text: 'Mechanical ventilation - Weaning protocol active?'}}
];
taskSection.setItems(taskDataSet);
sections.push(taskSection);

listView.setSections(sections);
$.index.add(listView);
$.index.open();
