
const loadComments = () =>{
    const url = `https://jsonplaceholder.typicode.com/comments`;

    fetch(url)
    .then(response => response.json())
    .then(data => loadComment(data))
    // .then(data => console.log(data[0]))
}

const loadComment = comments =>{
    const firstFifty = comments.slice(0, 50);
    console.log(firstFifty.length);
    firstFifty.forEach(element => {
        // console.log(element.name);

        const commentContainerDiv = document.getElementById('comment-container');
        commentContainerDiv.innerHtml = '';

        const commentCard = document.createElement('div');
        commentCard.classList.add('card');
        commentCard.classList.add('border-light');
        commentCard.classList.add('mb-3');
        // <div class="card-header">header</div>
        commentCard.innerHTML = `
                
                <div class="card-body">
                    <h5 class="card-title text-secondary">${element.name} says ...</h5>
                    <p class="card-text">${element.body}</p>
                </div>            
        `;
        commentContainerDiv.appendChild(commentCard);
    });
}


loadComments();