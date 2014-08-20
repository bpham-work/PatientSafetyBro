## Patient Safety Tablet/Phone App

### Calls to Google Sheets from Titanium
Calls to Google Sheets are all done in a similar manner.

```
ENDPOINT_NAME--ENDPOINT_URL
IN:  input_variable1 (variable_type)
     input_variable2 (variable_type)
        sub_input_variable (variable_type)
OUT: output_variable1 (variable_type)
     output_variable2 (variable_type)
```

```
insert_issue--https://script.google.com/macros/s/AKfycbytObLrGjCjqHXltuSGz9AxzVOMj8XiutDQO1vrrtaZQOyUfULm/exec
IN:  key (string)
     insert (object)
        Run Id (string)
        Timestamp (string)
        Step Id (string)
OUT: result (string--enumerated: "success", "error")
     row (number--optional)
     error (object--optional)
```

```
insert_run--https://script.google.com/macros/s/AKfycbwWY_aZRmmdkzuWkBsbjaY331aiCLvwqS4dgz77r6lR1sDoIVE/exec
IN:  key (string)
     insert (object)
        Id (string)
        Started (string)
        Completed (string)
        Device Type (string)
        Elapsed Seconds (number)
OUT: result (string--enumerated: "success", "error")
     row (number--optional)
     error (object--optional)
```

```
select_steps--https://script.google.com/macros/s/AKfycbzAonjX6IGGcefEIqkC5kfG1bJ_M-RXNS6RVa80wRNM8brHNs11/exec
IN:  key (string)
OUT: result (string--enumerated: "success", "error")
     data (JSON-array--optional)
     error (object--optional)
```

An example call to the "select_steps" Google App Script's endpoint from Titanium:
```javascript
// Pull task data from Google Sheets Script End-point
var ajax = Ti.Network.createHTTPClient();
ajax.onerror = function(e){
    alert('Error');
};
var taskDataSet = [];
ajax.onload = function(){
    // Log the response from Google Sheets
    Titanium.API.info(this.responseText);
    var data = this.responseText;
    // The jdata contains the selected steps from Google Sheets
    var jdata = JSON.parse(data).data;
    
    // YOUR CODE HERE
};

// A POST or a GET should work fine, the URL is important--it is the endpoint for "select_steps"
ajax.open('POST', 'https://script.google.com/macros/s/AKfycbzAonjX6IGGcefEIqkC5kfG1bJ_M-RXNS6RVa80wRNM8brHNs11/exec');
// Pass in any necessary parameters here
ajax.send({
    "key": "${SUPER_SECRET_KEY}"
});
```
