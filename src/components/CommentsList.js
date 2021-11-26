export class CommentsList {

    element = null;
    list = null;
    page = null;

    constructor() {
        this.element = document.createElement('div');
    }

    getData(url) {
        try {
            fetch(url)
                .then((response) => response.json())
                .then((data) => {
                    console.log(data);
                    let page = document.createElement('span');
                    page.innerText = "Page: " + data.current_page;
                    let list = document.createElement('ul');
                    list.className = 'commentsList';
                    localStorage.setItem('nextPageUrl', data.next_page_url);
                    data.data.map((item) => {
                        let li = document.createElement('li');
                        li.className = 'comment';
                        li.innerText = item.text + ' : ' + item.updated_at;
                        list.appendChild(li)
                    })
                    this.element.appendChild(page);
                    this.element.appendChild(list);
                });
        } catch (error) {
            console.log(error)
        }
    }

    render() {
        this.element.className = 'comments';
    }
}