const params = new URLSearchParams(location.search).get('postId');
fetch(`https://jsonplaceholder.typicode.com/posts/${params}`).then(value => value.json()).then(value => {
    createPost(value)
    createComments(value.id)
})
function createPost(value){
    let mainBlock=document.createElement('div');
    let textBlock=document.createElement('div');
    textBlock.innerText=`Id - ${value.id}\n userId - ${value.userId}\n title - ${value.title}\n body - ${value.body}`
    mainBlock.appendChild(textBlock)
    document.body.appendChild(mainBlock)
}
function createComments(params) {
    let mainBlock=document.createElement('div');
    fetch(`https://jsonplaceholder.typicode.com/posts/${params}/comments`).then(value => value.json()).then(value => {
        for (const valueElement of value) {
            let commentElement= document.createElement('div');
            mainBlock.appendChild(commentElement);
            for (const valueText in valueElement) {
                let valueTextBox= document.createElement('div');
                valueTextBox.innerText=`${valueText.charAt(0).toUpperCase()}${valueText.slice(1).replace(/([A-Z])/g, ' $1')}  - ${valueElement[valueText]}`
                commentElement.appendChild(valueTextBox);
            }
        }
    })
    document.body.appendChild(mainBlock)
}