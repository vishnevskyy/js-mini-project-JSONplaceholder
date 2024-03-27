fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        CreateUser(users)
    });

function CreateUser(users) {

    for (const user of users) {

        let userForm=document.createElement('form');

        let userLink = document.createElement('a');
        let userName = document.createElement('h3');
        let userId = document.createElement('h2');
        userId.innerText = `${user.id}.`;
        userName.innerText = `${user.name}`;
        userForm.method='post';
        userLink.href=`user-details.html?userId=${user.id}&userName=${user.name}`;
        userLink.appendChild(userId);
        userLink.appendChild(userName);
        userForm.appendChild(userLink);
        document.body.appendChild(userForm)
    }
}
