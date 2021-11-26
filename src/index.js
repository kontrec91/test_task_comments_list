import {Form} from './components/form/FormComponent.js';
import {CommentsList} from './components/CommentsList.js';
import {ShowMoreButton} from './components/showMorebutton/ShowMoreButton.js';

import './css/form.css';

const commentsURL = 'https://jordan.ashton.fashion/api/goods/30/comments';

const main = document.createElement('div');
const form = new Form();
const commentsList = new CommentsList();
const showMoreButton = new ShowMoreButton();

commentsList.getData(commentsURL);

showMoreButton.element.addEventListener('click', () => {
    if(localStorage.nextPageUrl){
        commentsList.getData(localStorage.nextPageUrl);
    } else { 
        showMoreButton.element.disabled = true;
    }
})

form.render();
commentsList.render();
showMoreButton.render();

main.className = 'main';
main.appendChild(form.element);
main.appendChild(commentsList.element);
main.appendChild(showMoreButton.element);

document.body.appendChild(main);