var tasksArray = ['foo', 'bar', 'baz', 'qux'];
positionCounter = 0;
$.label.text = tasksArray[positionCounter];

function completeTask(e)
{
	// Flag as completed and set end time
    setTask(positionCounter++);
    // Perhaps set start time of new task?
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
	else if (e.direction == 'right')
	{
		positionCounter--;
	}
	setTask(positionCounter);
}

$.index.open();
