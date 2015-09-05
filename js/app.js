function openFile() {
    if (window.File && window.FileReader && window.FileList && window.Blob) {

    } else {
        alert('The file APIs are not fully supported in this browser.');
    }
}

function process(st) {
    var sts = st.split(',');
    var data = [];
    var i = 0;
    var j = 0;
    while (sts.length > 3 * i + j) {

        j = 0;
        var single = [];
        while (sts.length > 3 * i + j && j < 2) {

            single.push(parseFloat(sts[3 * i + j]));
            j++;
        }
        data.push(single);
        i++;
    }
    return data;
}

function handleFileSelect(evt) {
    evt.stopPropagation();
    evt.preventDefault();

    var file = evt.dataTransfer.files[0]; // FileList object.
    var reader = new FileReader();

    reader.onload = (function (theFile) {
        return function (e) {
            document.querySelector("#myCanvas").style.display = "block";
            var data = process(e.target.result);
            console.log(e.target.result);
            globals.drawPath(data);
            //do some processing of the file
        };
    })(file);
    reader.readAsText(file);
}

function handleDragOver(evt) {
    evt.stopPropagation();
    evt.preventDefault();
    evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
}

// Setup the dnd listeners.
var dropZone = document.getElementById('drop_zone');
dropZone.addEventListener('dragover', handleDragOver, false);
dropZone.addEventListener('drop', handleFileSelect, false);