const params = new URLSearchParams(location.search).get('userId');

fetch(`https://jsonplaceholder.typicode.com/users/${params}`).then(value => value.json()).then(value => {
    console.log(value)
    createObject(value);
    let btnShowPosts=document.createElement(`button`);
    btnShowPosts.innerText='Show Posts'
    document.body.appendChild(btnShowPosts);
    btnShowPosts.addEventListener('click',function () {
        createPost(params)

    })
})

function createObject(value){
    for (const valueElement in value) {

        if (typeof value[valueElement]==='object'){
            createObject(value[valueElement])
            continue;
        }
        let textBox = document.createElement("div");
        textBox.innerText=`${valueElement.charAt(0).toUpperCase()}${valueElement.slice(1).replace(/([A-Z])/g, ' $1')}  - ${value[valueElement]}`;
        document.body.appendChild(textBox)
    }
}
function createPost(params) {
    let postsBlock=document.createElement('div');
    document.body.appendChild(postsBlock);
    fetch(`https://jsonplaceholder.typicode.com/users/${params}/posts`).then(value => value.json()).then(value => {
        for (const valueElement of value) {
           let postElement= document.createElement('div');
           postsBlock.appendChild(postElement)
            for (const valueText in valueElement) {
                let valueTextBox= document.createElement('div');
                valueTextBox.innerText=`${valueText.charAt(0).toUpperCase()}${valueText.slice(1).replace(/([A-Z])/g, ' $1')}  - ${valueElement[valueText]}`
                postElement.appendChild(valueTextBox)
            }

        }
    })
}
