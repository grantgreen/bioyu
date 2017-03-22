var init = function() {

      var out = {
      "result" : "Ok",
      "searchResult": [{"parentnoderef": "workspace:\/\/SpacesStore\/a17d9453-4130-4b27-98c8-3b5f85032208", "noderef": "workspace:\/\/SpacesStore\/486ed614-baff-4205-a27f-c194abc6e8db", "title": "Det andet moede", "duration": "1800", "description": "Styregruppem\u00f8de inkl. alle mulige interessenter", "type": "4", "creator": "admin", "date": 1339154700000}, {"parentnoderef": "workspace:\/\/SpacesStore\/a17d9453-4130-4b27-98c8-3b5f85032208", "noderef": "workspace:\/\/SpacesStore\/5cbb739b-76c2-491a-9556-d4d11db7bd59", "title": "Styregruppem\u00f8de", "duration": "1800", "description": "Styregruppem\u00f8de inkl. alle mulige interessenter", "type": "3", "creator": "admin", "date": 1336985125696}]
      };

      var calendarDataSource = new YAHOO.util.LocalDataSource(out);
      

      calendarDataSource.responseSchema = {
        resultsList : "searchResult", // String pointer to result data
        // Field order doesn't matter and not all data is required to have a field
        fields : [
          { key: "parentnoderef" },
          { key: "noderef" },
          { key: "title" },
          { key: "date", parser: "date" }
        ],
        metaFields : {
          result: "result"
        }
      };
      

      var inputTextFormatter = function(elLiner, oRecord, oColumn, oData) {
        elLiner.innerHTML = '<input style="border:none" type="text" value="' + oData + '" />';
      };

//      var 

      var inputTimeFormatter = function(elLiner, oRecord, oColumn, oData) {
	  
	  elLiner.innerHTML = oData.getHours() + " " + oData.getMinutes();
      };

      var inputDurationFormatter = function(elLiner, oRecord, oColumn, oData) {
      };

      // Add the custom formatter to the shortcuts
      YAHOO.widget.DataTable.Formatter.inputText = inputTextFormatter;
      YAHOO.widget.DataTable.Formatter.inputTime = inputTimeFormatter;

      var calendarColumnDefs = [
//      { key: "parentnoderef", label: "Noderef of Parent" },
//      { key: "noderef", label: "Noderef of Self" },
      { key: "title", label: "Titel", formatter: "inputText" },
      {key:"button", label:"Show record data", formatter:YAHOO.widget.DataTable.formatButton},
      { key: "date", label: "Tidspunkt", formatter: "inputTime", sortable: true }
      ];
      // Defer instantiation
      YAHOO.util.Event.addListener(window, "load", function() {
        var calendarDataTable = new YAHOO.widget.DataTable("calendarContainer", calendarColumnDefs, calendarDataSource, {
          caption:"DataTable Caption",
          dateOptions:{format:'%H:%M %d/%m/%Y'}
        });
      });

};

init();

/*
<table>
  <tr>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('hour_tens', 1, 2, true, null, null, true);">&#x25B2;</span>
    </td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('hour_ones', 1, 9, null, true, true, null);">&#x25B2;</span>
    </td>
    <td></td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('minute_tens', 1, 5);">&#x25B2;</span>
    </td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('minute_ones', 1, 9);">&#x25B2;</span>
    </td>
  </tr>
  <tr>
    <td id="hour_tens">
      1
    </td>
    <td id="hour_ones">
      2
    </td>
    <td>:</td>
    <td id="minute_tens">
      3
    </td>
    <td id="minute_ones">
      0
    </td>
  </tr>
  <tr>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('hour_tens', -1, 2, true, null, null, true);">&#x25BC;</span>
    </td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('hour_ones', -1, 9, null, true, true, null);">&#x25BC;</span>
    </td>
    <td></td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('minute_tens', -1, 5);">&#x25BC;</span>
    </td>
    <td>
      <span style="font-size: 8pt; float: left" onclick="step('minute_ones', -1, 9);">&#x25BC;</span>
    </td>
  </tr>
</table>

*/


/*

function MagentaTimeWidget(parentId) {
    this.parentId = parentId;
};

MagentaTimeWidget.prototype = {    
    // Attributes
    startTime: new Date(),
    
    elements: {hourTens: null,
	       hourOnes: null,
	       separator: ":",
	       minuteTens: null,
	       minuteOnes: null},
    
    // Functions
    "init": function(e) {
	var Element = YAHOO.util.Element;
	var Dom = YAHOO.util.Dom;

	// Initialize starttime
	var hours = this.startTime.getHours().toString();
	hours = (hours.length == 1 ? "0" : "") + hours;
	this.elements.hourTens = hours[0];
	this.elements.hourOnes = hours[1];

	var minutes = this.startTime.getMinutes().toString();
	minutes = (minutes.length == 1 ? "0" : "") + minutes;
	this.elements.minuteTens = minutes[0];
	this.elements.minuteOnes = minutes[1];


	var elParent = new Element(this.parentId);
	var elTable = new Element(document.createElement("table"));
	elParent.appendChild(elTable);
	
	var elRow = new Element(document.createElement("tr"));
	elTable.appendChild(elRow);
	
	var setCellStyle = function(elCell) {
	    elCell.setStyle("padding", "0px");
	    elCell.setStyle("margin", "0px");
	    elCell.setStyle("text-align", "center");
	}


	// Top arrows
	for(var key in this.elements) {	
	    var elCell = new Element(document.createElement("td"));
	    setCellStyle(elCell);
	    elCell.setStyle("font-size", "8pt");
	    elCell.setStyle("cursor", "pointer");
	    elCell.addClass(key);
	    elCell.subscribe("click", this.step, {"key": key, "elements": this.elements, "inc": 1});
	    elCell.set("innerHTML", key == "separator" ? "" : "&#x25B2;");
	    
	    elRow.appendChild(elCell);
	}
	
	elRow = new Element(document.createElement("tr"));
	elTable.appendChild(elRow);
	
	for(var key in this.elements) {	
	    var elCell = new Element(document.createElement("td"));
	    setCellStyle(elCell);
	    elCell.set("innerHTML", this.elements[key]);
	    // Add elements instead of time
	    this.elements[key] = elCell;
	    elRow.appendChild(elCell);
	}

	elRow = new Element(document.createElement("tr"));
	elTable.appendChild(elRow);

	// Bottom arrows
	for(var key in this.elements) {	
	    var elCell = new Element(document.createElement("td"));
	    setCellStyle(elCell);
	    elCell.setStyle("font-size", "8pt");
	    elCell.setStyle("cursor", "pointer");
	    elCell.addClass(key);
	    elCell.subscribe("click", this.step, {"key": key, "elements": this.elements, "inc": -1});
	    elCell.set("innerHTML", key == "separator" ? "" : "&#x25BC;");
	    elRow.appendChild(elCell);
	}
	
	
	//	    var tableid = YAHOO.util.Dom.generateId(table,'dk.magenta.timetable');
	    
    },
    
    step: function(evt, args) {
	YAHOO.util.Event.preventDefault(evt);
	var key = args.key;
	var elements = args.elements;
	var inc = args.inc;
	var max = 9;

	if(key == "hourTens") {
	    if(Number(elements.hourOnes.get("innerHTML")) > 3) {
		max = 1;
	    }
	    else {
		max = 2;
	    }
	}
	else if(key == "hourOnes") {
	    if(Number(elements.hourTens.get("innerHTML")) == 2) {
		max = 3;
	    }
	}

	else if(key == "minuteTens") {
	    max = 5;
	}

	var element = elements[key];
	var value = Number(element.get("innerHTML"));
	value += inc;
	max++;
	value = value < 0 ? (max + value) % max : value % max;
	element.set("innerHTML", value);

    },

    // Get the time in a Date object.
    time: function() {
	var d = new Date();
	var me = this;
	var value = function(key) {return me.elements[key].get("innerHTML")}; 
	d.setHours(value("hourTens") + "" + value("hourOnes"));
	d.setMinutes(value("minuteTens") + "" + value("minuteOnes"));
	return d;
    }
};


var obj = (function() {
    return new MagentaTimeWidget("timeContainer");
})();
*/
var MagentaTimeWidget = function(parentId) {
  this.parentId = parentId;
  this.elements = this.elements();
};

MagentaTimeWidget.prototype = {
  // Attributes
  startTime : new Date(),

    elements : function () {
	return {
	    hourTens : null,
	    hourOnes : null,
	    separator : ":",
	    minuteTens : null,
	    minuteOnes : null
	};
    },

  splitTime: function(date) {
    var hours = date.getHours().toString();
    hours = (hours.length == 1 ? "0" : "") + hours;

    var minutes = date.getMinutes().toString();
    minutes = (minutes.length == 1 ? "0" : "") + minutes;

    return { "hourTens": hours[0], "hourOnes": hours[1], "minuteTens": minutes[0], "minuteOnes": minutes[1] };
  },
  
  // Functions
  init : function(e) {
      alert(this.hasOwnProperty("elements"));
    var Element = YAHOO.util.Element;
    var Dom = YAHOO.util.Dom;

    // Initialize starttime
    var timeParts = this.splitTime(this.startTime);
    this.elements.hourTens = timeParts.hourTens;
    this.elements.hourOnes = timeParts.hourOnes;

    this.elements.minuteTens = timeParts.minuteTens;
    this.elements.minuteOnes = timeParts.minuteOnes;

    var elParent = new Element(this.parentId);
    var elTable = new Element(document.createElement("table"));
    elParent.appendChild(elTable);

    var elRow = new Element(document.createElement("tr"));
    elTable.appendChild(elRow);

    var setCellStyle = function(elCell) {
      elCell.setStyle("padding", "0px");
      elCell.setStyle("margin", "0px");
      elCell.setStyle("text-align", "center");
    }

    // Top arrows
      var me = this;
    for ( var key in me.elements) {
      var elCell = new Element(document.createElement("td"));
	elCell.set("id", this.parentId + key);
      setCellStyle(elCell);
      elCell.setStyle("font-size", "8pt");
      elCell.setStyle("cursor", "pointer");
      elCell.addClass(key);
      elCell.subscribe("click", me.step, {
        "key" : key,
        "elements" : me.elements,
        "inc" : 1
      });
      elCell.set("innerHTML", key == "separator" ? "" : "&#x25B2;");

      elRow.appendChild(elCell);
    }

    elRow = new Element(document.createElement("tr"));
    elTable.appendChild(elRow);

    for ( var key in this.elements) {
      var elCell = new Element(document.createElement("td"));
      setCellStyle(elCell);
      elCell.set("innerHTML", this.elements[key]);
      // Add elements instead of time
      this.elements[key] = elCell;
      elRow.appendChild(elCell);
    }

    elRow = new Element(document.createElement("tr"));
    elTable.appendChild(elRow);

    // Bottom arrows
    for ( var key in this.elements) {
      var elCell = new Element(document.createElement("td"));
      setCellStyle(elCell);
      elCell.setStyle("font-size", "8pt");
      elCell.setStyle("cursor", "pointer");
      elCell.addClass(key);
      elCell.subscribe("click", this.step, {
        "key" : key,
        "elements" : this.elements,
        "inc" : -1
      });
      elCell.set("innerHTML", key == "separator" ? "" : "&#x25BC;");
      elRow.appendChild(elCell);
    }

    // var tableid = YAHOO.util.Dom.generateId(table,'dk.magenta.timetable');

  },

  step : function(evt, args) {
    YAHOO.util.Event.preventDefault(evt);
    var key = args.key;
    var elements = args.elements;
    var inc = args.inc;
    var max = 9;

    if (key == "hourTens") {
      if (Number(elements.hourOnes.get("innerHTML")) > 3) {
        max = 1;
      } else {
        max = 2;
      }
    } else if (key == "hourOnes") {
      if (Number(elements.hourTens.get("innerHTML")) == 2) {
        max = 3;
      }
    }

    else if (key == "minuteTens") {
      max = 5;
    }

    var element = elements[key];
    var value = Number(element.get("innerHTML"));
    value += inc;
    max++;
    value = value < 0 ? (max + value) % max : value % max;
    element.set("innerHTML", value);

  },

  // Get the time in a Date object.
  getTime : function() {
    var d = new Date();
    var me = this;
    var value = function(key) {
      return me.elements[key].get("innerHTML")
    };
    d.setHours(value("hourTens") + "" + value("hourOnes"));
    d.setMinutes(value("minuteTens") + "" + value("minuteOnes"));
    return d;
  },


  // Get the time in a Date object.
  setTime : function(date) {
    var me = this;
    var set = function(key, value) {
      return me.elements[key].set("innerHTML", value)
    };

    var timeParts = this.splitTime(date);
    set("hourTens", timeParts.hourTens);
    set("hourOnes", timeParts.hourOnes);
    set("minuteTens", timeParts.minuteTens);
    set("minuteOnes", timeParts.minuteOnes);
  }
};


var obj = (function() {
    return new MagentaTimeWidget("timeContainer");
})();

var obj1 = (function() {
    return new MagentaTimeWidget("timeContainer1");
})();


var startTime = new Date();
startTime.setHours(7);
obj.startTime = startTime;
obj1.startTime = startTime;
YAHOO.util.Event.addListener(window, "load", function() {obj.init();obj1.init();}, obj, true); 