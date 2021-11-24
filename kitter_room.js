
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
      apiKey: "AIzaSyDBW0SsNV5MK-M0ZUITArLMUJgkR0-ARlA",
      authDomain: "kwitter-c5323.firebaseapp.com",
      databaseURL: "https://kwitter-c5323-default-rtdb.firebaseio.com",
      projectId: "kwitter-c5323",
      storageBucket: "kwitter-c5323.appspot.com",
      messagingSenderId: "948511939822",
      appId: "1:948511939822:web:b408ca16801627116827ff"
}; // Initialize Firebase 
firebase.initializeApp(firebaseConfig); //

user_name=localStorage.getItem("user_name");
document.getELementById("user_name").innerHTML="Welcome "+user_name+" !";
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
       Room_names = childKey;
      //Start code
       console.log("Room Name- " + Room_name);
       row = "<div class='room_name' id="+Room_names+" onclick='redirectToRoomName(this.id)' >#" +Room_names+"</div><hr>";
       document.getElementById("output").innerHTML+= row;
      //End code
      });});}
getData();

function addRoom()
{
      room_name = document.getElementById("room_name").value;

      firebase.database().ref("/").child("room_name").update({
      purpose : "adding room name"   
      });

      localStorage.setItem("room_name", room_name);

      window.location = "kwitter_page.html";
}

function redirectToRoomName(name)
{
      console.log(name);
      localStorage.setItem("room_name", name);
       window.location= "kwitter_page.html";
}



