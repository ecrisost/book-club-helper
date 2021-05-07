import {readAll} from './common/firestore-methods.js';

$(document).ready(async function()
{
    let bookList = await readAll("booksSelection");
    console.dir("BookList content: " + bookList);
    
    let cardRight = '../contents/bookListCard.html';
    let cardLeft = '../contest/booksListCardLef.html';
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
            $(template).find('input').attr('value', element.uuid);
            $('#bookList').append(template);
        });
    });

    $(document).ready(function(){
        $('#bookListForm').submit(function(event){
            console.log("Form works!");
        });
    });
});






