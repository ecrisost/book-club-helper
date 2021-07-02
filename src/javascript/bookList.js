import {readAll} from './common/firestore-methods.js';

$(document).ready(async function()
{
    let bookList = await readAll("booksSelection");
    console.dir("BookList content: " + bookList);
    
    let cardRight = '../contents/bookListCard.html';
    // Populate 
    $.get(cardRight, function(data) {
        bookList.forEach(element => {
            let template = $.parseHTML(data);
            console.dir("element: " + element);
            for (const key in element) {
                $(template)
                    .find('[data-name=' + key + ']')
                    .text(element[key]);
            }
            $(template).find('input').attr('name', element.uuid);
            $('#bookList').append(template);
        });
    });

});

$(document).ready(async function()
{
    $("form").submit(function(event)
    {
        var formData = {
            uuid: $(this).attr('name').val()
        };
    });

    $.ajax({
       type:"POST",
       url: "../php/select.php",
       data: formData,
       dataType: "json",
       encode: true,
    }).done(function (data) {
        console.log(data);
    });

});






