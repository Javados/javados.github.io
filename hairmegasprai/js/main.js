jQuery(document).ready(function($) {

// function demoFromHTML() {
//         var pdf = new jsPDF('p', 'pt', 'letter');
//         // source can be HTML-formatted string, or a reference
//         // to an actual DOM element from which the text will be scraped.
//         source = $('body')[0];

//         // we support special element handlers. Register them with jQuery-style 
//         // ID selector for either ID or node name. ("#iAmID", "div", "span" etc.)
//         // There is no support for any other type of selectors 
//         // (class, of compound) at this time.
//         specialElementHandlers = {
//             // element with id of "bypass" - jQuery style selector
//             '#bypassme': function (element, renderer) {
//                 // true = "handled elsewhere, bypass text extraction"
//                 return true
//             }
//         };
//         margins = {
//             top: 80,
//             bottom: 60,
//             left: 40,
//             width: 522
//         };
//         // all coords and widths are in jsPDF instance declared units
//         // 'inches' in this case
//         pdf.fromHTML(
//             source, // HTML string or DOM elem ref.
//             margins.left, // x coord
//             margins.top, { // y coord
//                 'width': margins.width, // max width of content on PDF
//                 'elementHandlers': specialElementHandlers
//             },

//             function (dispose) {
//                 // dispose: object with X, Y of the last line add to the PDF 
//                 //          this allow the insertion of new lines after html
//                 pdf.save('Test.pdf');
//             }, margins
//         );
//     }

    // $('.head-nav').find('.to-pdf').on('click', function(etg) {
    //     etg.preventDefault();
    //     demoFromHTML();
    // });

// var doc = new jsPDF();

// // We'll make our own renderer to skip this editor
// var specialElementHandlers = {
//     '#editor': function(element, renderer){
//         return true;
//     },
//     '.controls': function(element, renderer){
//         return true;
//     }
// };

// // All units are in the set measurement for the document
// // This can be changed to "pt" (points), "mm" (Default), "cm", "in"
// doc.fromHTML($('body').get(0), 15, 15, {
//     'width': 170, 
//     'elementHandlers': specialElementHandlers
// });

var testDivElement = document.getElementById('forpdfbody');

function savePDF() {
    var imgData;
    html2canvas($("body"), {
        useCORS: true,
        onrendered: function (canvas) {
            imgData = canvas.toDataURL(
               'image/png');
            var doc = new jsPDF('p', 'pt', 'a4');
            doc.addImage(imgData, 'PNG', 10, 10);
            doc.save('sample-file.pdf');
            window.open(imgData);
        }
    });
}

$('.head-nav').find('.to-pdf').on('click', function(etg) {
        etg.preventDefault();
        savePDF();
    });

});
