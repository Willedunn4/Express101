const express = require('express')
const app = express()
const port = 4000

app.get('/', (req, res) => res.send('How ya doin today?'))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))

<script ;src="https://www.gstatic.com/firebasejs/8.6.8/firebase-app.js"></script>

<script src="https://www.gstatic.com/firebasejs/8.6.8/firebase-analytics.js"></script>

var firebaseConfig = {
    apiKey: "AIzaSyBXrcFQbCo_BdB9-00f-rtANP8Dn4kb2AI",
    authDomain: "express101-b7b06.firebaseapp.com",
    projectId: "express101-b7b06",
    storageBucket: "express101-b7b06.appspot.com",
    messagingSenderId: "1087259336197",
    appId: "1:1087259336197:web:b946b9d945a9a3cfd8066c",
    measurementId: "G-XWM2JFZ9SB"
  };
  
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();

  