var tasksArray = ['foo', 'bar', 'baz', 'qux'];
positionCounter = 0;
$.label.text = tasksArray[positionCounter];

function doClick(e) {
    if(positionCounter < tasksArray.length - 1)
    	positionCounter++;
    else
    	positionCounter = 0;
    $.label.text = tasksArray[positionCounter];
}

$.index.open();
