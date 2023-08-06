const app = firebase.initializeapp(firebaseConfig)
console.log(app)
let database=firebase();
const signup = () => {
    let username = document.getElementById('username').value
    let contact = document.getElementById('contact').value
    let email = document.getElementById('email').value
    let password = document.getElementById('password').value
    let role = document.getElementById('input[name="genre"]:checked').value

}

console.log(email, password) 
firebase.auth() =  createUserWithEmailAndPassword(email, password);
createUserWithEmailAndPassword(auth, email, password)
.then((userCredential) => {
    // Signed in 
    let user = userCredential.user; 
    console.log(user)
    firebase.database().ref('user/' + user.uid).set({
        uid:user.uid,
        username: username,
        role:role,
        contact: contact,
        email: email,
        password: password,

    })
    .then(()=>{
        console.log('User created succesfully.')
    })
    .catch((error) =>{
        console.log(error);
    });
})
    .catch((error)=>{
        let errorCode =error.code;
        let errorMessage=error.massage;
        console.log(errorCode+':'+errorMessage)

   
})