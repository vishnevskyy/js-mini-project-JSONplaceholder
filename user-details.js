const params = new URLSearchParams(location.search).get('userId');
let contentBox = document.createElement('div');
let mainBox = document.createElement('main');
let leftBox = document.createElement("section");
let photoBlock = document.createElement('figure');
let addUserButton = document.createElement('button');
let postOfCurrentUser = document.createElement('button');

leftBox.className = 'leftBox';
contentBox.className = 'contentBox';

postOfCurrentUser.className = 'postOfCurrentUser';
postOfCurrentUser.innerText = 'post of current user';

postOfCurrentUser.addEventListener('click', function () {
    let postsBlock = document.createElement('div');
    postsBlock.className = 'postsBlock'
    window.scrollBy({
        top: 1000,
        behavior: "smooth"
    });
    fetch(`https://jsonplaceholder.typicode.com/users/${params}/posts`).then(value => value.json()).then(value => {
        for (const valueElement of value) {
            let postElement = document.createElement('div');
            let postLink=document.createElement('a');
            let postButton = document.createElement('button');
            let valueTextBox = document.createElement('div');

            postElement.className='postElement';
            postButton.className = 'postButton';
            postButton.innerText = 'Go to Post';
            postLink.appendChild(postButton);


            valueTextBox.innerText = `${valueElement.title}`;
            postLink.href=`post-details.html?postId=${valueElement.id}`;
            postElement.appendChild(valueTextBox);
            postElement.appendChild(postLink);
            postsBlock.appendChild(postElement)
        }
    })
    document.body.appendChild(postsBlock);
})

addUserButton.className = 'addUserButton';
addUserButton.innerText = 'Add to Friends';
photoBlock.innerHTML = `<img src="images/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="photo"/>`;
photoBlock.className = 'photoBlock';

leftBox.appendChild(photoBlock);
leftBox.appendChild(addUserButton);

fetch(`https://jsonplaceholder.typicode.com/users/${params}`).then(value => value.json()).then(value => {
    createObject(value, 10);
});

function createObject(value, padding) {
    for (const valueElement in value) {
        let objectBox = document.createElement('div');
        let objectKey = document.createElement('sup');
        let objectValue = document.createElement('span');
        if ((typeof value[valueElement]) === 'object') {
            let test = document.createElement('sup');
            test.innerText = `${valueElement}:`;
            console.log(value[valueElement])
            objectBox.appendChild(test);
            objectBox.style.paddingLeft = `${padding}px`;
            mainBox.appendChild(objectBox);
            createObject(value[valueElement], 25)
        } else {
            objectKey.appendChild(objectValue)
            objectKey.className = 'objectKeys';
            objectBox.appendChild(objectKey);
            objectBox.appendChild(objectValue);
            objectBox.style.paddingLeft = `${padding}px`;
            objectValue.innerText = `${value[valueElement]}`;
            objectKey.innerText = `${valueElement}:`;
            mainBox.appendChild(objectBox);
        }
    }
}

contentBox.appendChild(leftBox);
contentBox.appendChild(mainBox);

document.body.appendChild(contentBox);
document.body.appendChild(postOfCurrentUser);
