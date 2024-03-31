fetch('https://jsonplaceholder.typicode.com/users')
    .then(value => value.json())
    .then(users => {
        let mainBlock = document.createElement('main');
        for (const user of users) {
            let {id, name} = user;

            let userBlock = document.createElement('div');
            let userLink = document.createElement('a');
            let userButton = document.createElement('button');
            let userName = document.createElement('h3');
            let userPhoto = document.createElement('figure');

            userBlock.classList = ['userBox'];
            userPhoto.classList=['userPhoto'];
            userLink.classList=['button'];

            userBlock.method = 'post';
            userLink.href = `user-details.html?userId=${id}`;

            userPhoto.innerHTML = `<img src="images/360_F_64672736_U5kpdGs9keUll8CRQ3p3YaEv2M6qkVY5.jpg" alt="profilePhoto" class="photo"/>`;
            userName.innerText = `${id}. ${name}`;
            userButton.innerText = 'View Profile';

            userBlock.appendChild(userPhoto);
            userBlock.appendChild(userName);
            userBlock.appendChild(userLink);
            userLink.appendChild(userButton);
            mainBlock.appendChild(userBlock);
        }
        document.body.appendChild(mainBlock);
    });
