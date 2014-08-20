## Patient Safety Tablet/Phone App

How to make a call to the "select_steps" Google App Script's endpoint from Titanium:
```javascript
// Pull task data from Google Sheets Script End-point
var ajax = Ti.Network.createHTTPClient();
ajax.onerror = function(e){
    alert('Error');
};
var taskDataSet = [];
ajax.onload = function(){
    Titanium.API.info(this.responseText);
    var data = this.responseText;
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
