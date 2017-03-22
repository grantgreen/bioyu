var StopWatch = function(parentId, logoUrl) {
    this.stage = new Kinetic.Stage({
        container: parentId,
        width: 128,
        height: 128
    });
    this.dialLayer = new Kinetic.Layer();
    this.handLayer = new Kinetic.Layer();
    
    this.centerX = 64;
    this.centerY = 64;
    this.bigDialRadius = 60;
    this.border = new Kinetic.Circle({
	radius: this.bigDialRadius + 3,
	x: this.centerX,
	y: this.centerY,
	stroke: '#000000',
	strokeWidth: 2,
	fill: '#ffffff'
    });

    this.bigCenter = new Kinetic.Circle({
	radius: 3,
	x: this.centerX,
	y: this.centerY,
	fill: '#000000'
    });

    this.smallCenter = new Kinetic.Circle({
	radius: 2,
	x: this.centerX,
	y: this.centerY - 20,
	fill: '#000000'
    });

    this.bigDial = new Kinetic.Circle({
	radius: this.bigDialRadius,
	x: this.centerX,
	y: this.centerY,
	stroke: '#000000',
	strokeWidth: 1
    });

    this.bigHand = new Kinetic.Line({
	points: [0, 10, 0, -this.bigDialRadius],
	offset: [0, 0],
	x: this.centerX,
	y: this.centerY,
	stroke: '#000000',
	strokeWidth: 2
    });

    this.minuteHand = new Kinetic.Line({
	points: [0, 10, 0, -this.bigDialRadius],
	offset: [0, 0],
	x: this.centerX,
	y: this.centerY,
	stroke: 'red',
	strokeWidth: 2
    });


    this.smallDialRadius = 20;
    this.smallDial = new Kinetic.Circle({
	radius: this.smallDialRadius,
	x: this.centerX,
	y: this.centerY - 20,
	stroke: '#000000',
	strokeWidth: 1
    });

    this.smallHand = new Kinetic.Line({
	points: [0, 4, 0, -19],
	offset: [0, 0],
	x: this.centerX,
	y: this.centerY - 20,
	stroke: '#000000',
	strokeWidth: 1
    });


    this.dialLayer.add(this.border);
    this.handLayer.add(this.smallHand);
    this.handLayer.add(this.smallCenter);

    this.dialLayer.add(this.bigDial);
    this.handLayer.add(this.minuteHand);
    this.handLayer.add(this.bigHand);
    this.handLayer.add(this.bigCenter);
    this.dialLayer.add(this.smallDial);
    
    var largeTickLength = 5;
    for(var i = 60; i > 0; i--) {
	var angle = Math.PI / 2 - i * (Math.PI / 30);
	var x1 = Math.cos(angle) * (this.bigDialRadius - largeTickLength);
	var x2 = Math.cos(angle) * this.bigDialRadius;
	var y1 = Math.sin(angle) * (this.bigDialRadius - largeTickLength);
	var y2 = Math.sin(angle) * this.bigDialRadius;
	var majorTick = i % 5 == 0 ? 1 : 0;
	var tick = new Kinetic.Line({
	    points: [x1 - (majorTick * 0.5 * (x2-x1)), -y1 + (majorTick * 0.5 * (y2-y1)), x2, -y2],
	    offset: [0, 0],
	    x: this.centerX,
	    y: this.centerY,
	    stroke: '#000000',
	    strokeWidth: 1 + majorTick	    
	});

	if(i % 5 == 0) {
	    var text = new Kinetic.Text({
		text: i,
		x: x1 + this.centerX - (x2 - x1) * 2,
		y: -y1 + this.centerY + (y2 - y1) * 2,
		stroke: '#000000',
		strokeWidth: 1.0,
		fill: '#000000',
		fontSize: 8,
		fontFamily: 'verdana'
	    });

	    text.setX(text.getX() - text.getWidth() / 2);
	    text.setY(text.getY() - text.getHeight() / 2 + 1);
	    this.dialLayer.add(text);
	}

	this.dialLayer.add(tick);
    }

    var smallTickLength = 4;
    for(var i = 20; i > 0; i--) {
	var angle = Math.PI / 2 - i * (Math.PI / 10);
	var x1 = Math.cos(angle) * (this.smallDialRadius - smallTickLength);
	var x2 = Math.cos(angle) * this.smallDialRadius;
	var y1 = Math.sin(angle) * (this.smallDialRadius - smallTickLength);
	var y2 = Math.sin(angle) * this.smallDialRadius;
	var tick = new Kinetic.Line({
	    points: [x1, -y1, x2, -y2],
	    offset: [0, 0],
	    x: this.centerX,
	    y: this.centerY - 20,
	    stroke: '#000000',
	    strokeWidth: 0.5    
	});

	if(i % 5 == 0) {
	    var text = new Kinetic.Text({
		text: i * 5,
		x: x1 + this.centerX - (x2 - x1) * 1.5,
		y: -y1 + this.centerY - 20 + (y2 - y1) * 1.5,
		stroke: '#000000',
		strokeWidth: 0.5,
		fill: '#000000',
		fontSize: 7,
		fontFamily: 'verdana'
	    });
	    
	    text.setX(text.getX() - text.getWidth() / 2);
	    text.setY(text.getY() - text.getHeight() / 2 + 1);
	    this.dialLayer.add(text);
	}
	this.dialLayer.add(tick);
    }

    this.stage.add(this.dialLayer);
    this.stage.add(this.handLayer);

    // One revolution per 60 minutes
    var minuteHandAngularSpeed = Math.PI / 1800;
    var minuteTimeDiff = 0;

    // One revolution per 60 seconds
    var bigHandAngularSpeed = Math.PI / 30;
    var bigHandTimeDiff = 0;

    // One revolution per second
    var smallHandAngularSpeed = 2 * Math.PI;

    var self = this;
    this.handAnim = new Kinetic.Animation(function(frame) {
	var elapsedTime = new Date(new Date() - self.startTime);
	var rotateMinutes = elapsedTime.getMinutes() - self.elapsedTime.getMinutes();
	var rotateSeconds = elapsedTime.getSeconds() - self.elapsedTime.getSeconds();
	var rotateHundreds = (elapsedTime.getMilliseconds() - self.elapsedTime.getMilliseconds()) / 10;

	self.elapsedTime = elapsedTime;
	// Changed from radians to degress (2 * Math.PI => 360)
	self.minuteHand.rotate(360 / 60 * rotateMinutes);
	self.bigHand.rotate(360 / 60 * rotateSeconds);
	self.smallHand.rotate(360 / 100 * rotateHundreds);
    }, this.handLayer);

    // Add logo
    var ctx = this.dialLayer.getContext();
    var img = new Image();
    img.onload = function(){
	ctx.drawImage(img, self.centerX - 15, self.centerY + 12);
    };
    img.src = logoUrl != null ? logoUrl : 'images/stopwatch.png';
}

StopWatch.prototype.start = function() {
    this.startTime = new Date();
    this.elapsedTime = new Date(0);

    this.minuteHand.rotate(-this.minuteHand.getRotation());
    this.bigHand.rotate(-this.bigHand.getRotation());
    this.smallHand.rotate(-this.smallHand.getRotation());
    this.handAnim.start();
}

StopWatch.prototype.splitTime = function() {
    return new Date() - this.startTime;
}

StopWatch.prototype.stop = function() {
    this.handAnim.stop();
    this.stopTime = new Date();
    return this.stopTime - this.startTime;
}

StopWatch.prototype.restart = function() {
    this.startTime = new Date() - (this.stopTime - this.startTime);
    this.handAnim.start();
}


var tryMe = function() {
    var stopWatch = new StopWatch('container');
    stopWatch.start();

    var stopWatch1 = new StopWatch('container');
    setTimeout(function() {stopWatch1.start();}, 3000);
    
    setTimeout(function() {alert(stopWatch.stop());}, 5000);
    
    setTimeout(function() {stopWatch.restart();}, 7000);
    
    setTimeout(function() {alert(stopWatch.splitTime());}, 10000);
}

//tryMe();



