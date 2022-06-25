import {convertToCamelCase, splitByComma, generateUUID} from './common/utils.js';
import addDoc from './common/firestore-methods.js';

/**
 * Add books to bookList
 */
$(document).ready(function(){
    $("#addBooksBtn").click(function(){
      
        var tws;
        if($('#checkTriggers').checked)
        {
          tws = splitByComma($("#triggerWarnings").val());
        }
        else
        {
          tws = [];
        }

        var bookTitleVal =  $('#bookTitle').val();
        var docData = {
          bookTitle: bookTitleVal,
          firstName: $('#authorFirstName').val(),
          lastName: $('#authorLastName').val(),
          genre: splitByComma($('#genre').val()),
          summary: $('#summary').val(),
          triggers: tws,
          uuid: generateUUID(),
          votes: 0
        }
        addDoc('booksSelection', convertToCamelCase(bookTitleVal), docData);
    });
});

/**
 * Toggle trigger warning box
 */
$(document).ready(function()
{
  var checkBox = $("#checkTriggers");
  checkBox.on('change', function()
  {
    if(this.checked)
    {
      $("#triggerWarningLabel").show();
      $("#triggerWarnings").show();
      $("#triggerWarnings").defaultText = "Separate by comma";
    }
    else
    {
      $("#triggerWarningLabel").hide();
      $("#triggerWarnings").hide();
    }
  })

});

$("#genre").tagsInput();
