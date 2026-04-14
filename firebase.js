const firebaseConfig = {
      apiKey: "AIzaSyCOaIl9c3n8BohutZN0-dEfD2TJIu28Ngk",
      authDomain: "bright-minds-math.firebaseapp.com",
      projectId: "bright-minds-math",
      storageBucket: "bright-minds-math.firebasestorage.app",
      messagingSenderId: "645800687175",
      appId: "1:645800687175:web:75241f3cac5e5433442362"
    };

    firebase.initializeApp(firebaseConfig);
    const auth = firebase.auth();
    const db = firebase.firestore();

