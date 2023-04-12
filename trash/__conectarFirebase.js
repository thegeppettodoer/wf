import * as firebase from "firebase";
var database = null;
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
  apiKey: "AIzaSyB5SmL0TRYYWK578eVlQd1kClZX-qxWnLY",
  authDomain: "wf-learning-share.firebaseapp.com",
  databaseURL: "https://wf-learning-share.firebaseio.com",
  projectId: "wf-learning-share",
  storageBucket: "wf-learning-share.appspot.com",
  messagingSenderId: "246496321648",
  appId: "1:246496321648:web:8179171dcf7c32a69794b5",
  measurementId: "G-BH34R2CFB1",
};
// console.log('conectarFirebase>',firebase.apps);
if (!firebase.apps.length) {
  firebase.initializeApp(config);
}


// Listen for authentication state to change.
firebase.auth().onAuthStateChanged((user) => {
  if (user != null) {
    console.log("We are authenticated now!");
  }

  // Do other things
});

async function loginWithFacebook() {
//  loginWithFacebook = async () => {
  await Facebook.initializeAsync("383007856067427");
  console.log("loginWithFacebook");
  const { type, token } = await Facebook.logInWithReadPermissionsAsync({
    permissions: ["public_profile"],
  });

  if (type === "success") {
    console.log("loginWithFacebook", "success");

    // Build Firebase credential with the Facebook access token.
    const credential = firebase.auth.FacebookAuthProvider.credential(token);

    // Sign in with credential from the Facebook user.
      firebase
      .auth()
      .signInWithCredential(credential)
      .catch((error) => {
        // Handle Errors here.
      });
  } else {
    console.log("loginWithFacebook", "no success");
  }
};

async function fnloginWithFacebook(){
    await loginWithFacebook()
    return firebase.database;
}
export default { firebase, database, fnloginWithFacebook };
