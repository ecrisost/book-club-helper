import {readAll} from './common/firestore-methods.js';

$(document).ready(function()
{
    var bookList = readAll("booksSelection");
    $.get('../contents/bookListCard.html', function(data) {
        bookList.forEach(element => {
            let template = $.parseHTML(data);
            for (const key in element) {
                $(Template)
                    .find('[data-name=' + key + ']')
                    .text(element[key]);
            }
            $('#bookList').append(template);
        });
    });
});

