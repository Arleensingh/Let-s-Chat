// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyDkiPIw6N_sw6ohMpAVkGnfQBU2tNCj4z4",
    authDomain: "project-100-f7eee.firebaseapp.com",
    databaseURL: "https://project-100-f7eee-default-rtdb.firebaseio.com",
    projectId: "project-100-f7eee",
    storageBucket: "project-100-f7eee.appspot.com",
    messagingSenderId: "570198304831",
    appId: "1:570198304831:web:c2ba58bbb70979b5a7308a"
  };
  
  // Initialize Firebase
  const app = initializeApp(firebaseConfig);

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    
}



