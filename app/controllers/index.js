var tasksArray = ['foo', 'bar', 'baz', 'qux'];
positionCounter = 0;
$.label.text = tasksArray[positionCounter];

function doClick(e)
{
    setTask(positionCounter++);
}

function setTask(newIndex)
{
	if(newIndex >= tasksArray.length)
		positionCounter = 0;
    else if (newIndex < 0)
    	positionCounter = tasksArray.length-1;
    $.label.text = tasksArray[positionCounter];
}

function nextTask(e)
{
	if (e.direction == 'left')
	{
		positionCounter++;
	}
	else
	{
		positionCounter--;
	}
	setTask(positionCounter);
}

$.index.open();
