import { parseTpl } from "../../index.js";

export class Form {

    element = null
    inputName = null;
    textArea = null;
    addComment = null;

    constructor() {
        this.element = document.createElement('div');
        console.log('form');
    }

    async postData(url, data) {

        try {
            const response = await fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json' 
                }
            });

            const json = await response.json();

            console.log('Успех:', JSON.stringify(json));
        } catch (error) {
            console.error('Ошибка:', error);
        }
    }

    setData(){
        let input = document.querySelector('input');
        let textArea = document.querySelector('textArea');

        let textError = document.createElement('span');
        textError.className = 'error';
        textError.innerText = 'Invalid user comment. Please fill the field';

        let nameError = document.createElement('span');
        nameError.className = 'error';
        nameError.innerText = 'Invalid user name. Please fill the field';



        if(input.value.length && textArea.value.length){
            debugger
            let dataObject = {
                'name': input.value,
                'text': textArea.value
            }
            this.postData('https://jordan.ashton.fashion/api/goods/30/comments', dataObject);

        } else if(!textArea.value.length){
            this.element.insertBefore(textError, textArea);
        } else if(!input.value.length){
            this.element.insertBefore(nameError, input);
        } else {
            this.element.insertBefore(nameError, input);
            this.element.insertBefore(textError, textArea);
        }
    }

    

    render() {
        this.element.className = 'form';

        this.inputName = document.createElement('input');
        this.inputName.className = 'inputName';
        this.inputName.placeholder = 'Name'

        this.textArea = document.createElement('textarea');
        this.textArea.className = 'textArea';
        this.textArea.placeholder = 'Comment'


        this.addComment = document.createElement('button');
        this.addComment.className = 'addComment';
        this.addComment.innerText = 'Add comment';
        this.addComment.addEventListener('click', ()=>{
            this.setData();
        })

        this.element.appendChild(this.inputName);
        this.element.appendChild(this.textArea);
        this.element.appendChild(this.addComment);
    }
}