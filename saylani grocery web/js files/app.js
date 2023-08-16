const app = firebase.initializeApp(firebaseConfig);
console.log(app)

const signup = () => {
    let username = document.getElementById('username').value;
    let contact = document.getElementById('contact').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    let role = 'User'

    console.log(email, password)
    firebase.auth().createUserWithEmailAndPassword(email, password)
        .then((userCredential) => {
            let user = userCredential.user;
            firebase.database().ref('users/' + user.uid).set({
                uid: user.uid,
                username: username,
                role: role,
                contact: contact,
                email: email,
                password: password
            })
                .then(() => {
                    const user = { email: email };
                    localStorage.setItem('user', JSON.stringify(user));
                    console.log('User created successfully.')
                    window.location.href = '../Home/home.html'
                })
                .catch((error) => {
                    console.log(error);
                })
        })
        .catch((error) => {
            let errorCode = error.code;
            let errorMessage = error.message;
            console.log(errorCode + ': ' + errorMessage)
        });
}