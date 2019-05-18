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

$('#imgupload').on('change', function (e) {
    $('#js-upload-form').submit();
});

$('#js-upload-form').submit(function (e) {
    $('#progressbar-container').css({display: 'block'});

    var elem = document.getElementById("progressbar");
    var width = 1;
    var id = setInterval(frame, 10);

    function frame() {
        if (width >= 100) {
            clearInterval(id);

            var filname = $('#imgupload').val().split('\\').pop();

            $('#upload-finished').fadeIn();

            $('#filename').text(filname);

            $('#generate').removeClass('disabled');

            $('#drop-zone').hide()
        } else {
            width++;
            elem.style.width = width + '%';
        }
    }
});

$('#generate').click(function () {
    HoldOn.open({
        theme: 'sk-folding-cube',
        message: "<h4>Generating 3D Models</h4>"
    });

    setTimeout(function () {
        HoldOn.close();

        $('#images').fadeIn(5000);

        $('html, body').animate({
            scrollTop: ($('#images').offset().top)
        }, 500);
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
