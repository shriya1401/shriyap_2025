// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBuW6xdTyyL5JZZslYT6sBpIB6bxu-ise4",
    authDomain: "collaborater-35a18.firebaseapp.com",
    projectId: "collaborater-35a18",
    storageBucket: "collaborater-35a18.appspot.comm",
    messagingSenderId: "497202051442",
    appId: "1:497202051442:web:f96a433df527282879c5eb",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const editor = document.getElementById('editor');
const docRef = db.collection('notes').doc('collab-note');

// Load existing content from Firestore
docRef.onSnapshot((doc) => {
    if (doc.exists) {
        editor.value = doc.data().content;
    } else {
        console.log("No such document!");
    }
});

// Update Firestore whenever the content changes
editor.addEventListener('input', () => {
    const content = editor.value;
    docRef.set({ content: content }, { merge: true });
});
