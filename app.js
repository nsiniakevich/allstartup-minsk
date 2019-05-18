'use strict';

var dropZone = document.getElementById('drop-zone');
// var uploadForm = document.getElementById('js-upload-form');
//
// var startUpload = function (files) {
//     console.log(files)
// }

// uploadForm.addEventListener('submit', function (e) {
//     var uploadFiles = document.getElementById('js-upload-files').files;
//     e.preventDefault()
//
//     startUpload(uploadFiles)
// })

$('#drop-zone').click(function (e) {
    $('#imgupload').trigger('click');
});

$('#generate').click(function () {
    HoldOn.open({
        theme: 'sk-folding-cube',
        message: "<h4>Generating 3D Models</h4>"
    });

    setTimeout(function () {
        HoldOn.close();

        $('#images').fadeIn(5000);
    }, 3000);
});

// dropZone.ondrop = function (e) {
//     e.preventDefault();
//     this.className = 'upload-drop-zone';
//
//     startUpload(e.dataTransfer.files)
// }
//
// dropZone.ondragover = function () {
//     this.className = 'upload-drop-zone drop';
//     return false;
// }
//
// dropZone.ondragleave = function () {
//     this.className = 'upload-drop-zone';
//     return false;
// }
