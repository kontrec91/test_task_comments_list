export class ShowMoreButton{
    showMore=null;
    constructor(){
        this.element = document.createElement('button')
    }


    render(){
        this.element.innerText = 'Show more';
     }
} 