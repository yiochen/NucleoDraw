window.globals = {};
globals.startDraw = false;
globals.path;
globals.index = 0;
globals.drawPath = function (data) {
    // Add a text line on top of the program to indicate the purpose of the program
    //
    //    var textItem = new PointText({
    //        content: 'This program reads data input and outputs a graphical representation.',
    //        content: 'This program is written in JavaScript.',
    //        // point coordinates determine placement of text above
    //        point: new Point(50, 50),
    //        // fillColor determines color of text above	
    //        fillColor: 'red',
    //        // fontSize number determines size of text above
    //        fontSize: 30,
    //    });
    //
    //    var textItem = new PointText({
    //        content: 'This program reads data input and outputs a graphical representation.',
    //        // point coordinates determine placement of text above
    //        point: new Point(545, 50),
    //        // fillColor determines color of text above	
    //        fillColor: 'blue',
    //        // fontSize number determines size of text above
    //        fontSize: 30,
    //    });
    //
    globals.segments = data;
    globals.path = new Path();
    globals.path.strokeColor = 'black';
    var start = new Point(data[0][0], data[0][1]);
    globals.path.moveTo(start);
    globals.startDraw = true;
    //    //coordinates are input here, in an array

};

function onFrame(event) {

    if (globals.startDraw) {
        if (globals.segments && globals.segments.length > globals.index) {
            globals.path.add(globals.segments[globals.index]);
            view.draw();
            globals.index++;
        }
    }



}