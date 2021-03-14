var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var newBookmark = ''
var name = ''
var url = ''
var urlvalue = ''
var content = ''
var input = ''
var row = ''
var firebaseConfig = {
    apiKey: "AIzaSyASRHCRQpyKxHAvoTAEl_I8CixCWAeJG1I",
    authDomain: "e-and-r-df0db.firebaseapp.com",
    databaseURL: "https://e-and-r-df0db.firebaseio.com",
    projectId: "e-and-r-df0db",
    storageBucket: "e-and-r-df0db.appspot.com",
    messagingSenderId: "466423939712",
    appId: "1:466423939712:web:f39472d9e295972caa9c65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

function logout() {
    window.location.href = 'https://accounts.google.com/Logout?ec=GAdAwAE'
}

function tutorial() {
    window.location = 'index2.html'
}

function search() {
    input = document.getElementById('searchinput').value
    if (input.length == 0) {} else {
        if (document.getElementById('goog').checked == true) {
            window.location = 'https://www.google.com/search?q=' + input + '&rlz=1C1CHBF_enUS736US736&oq' + input + '&aqs=chrome.0.69i59l2j46i67j0i67j46i67j69i60l3.887j0j7&sourceid=chrome&ie=UTF-8'
            console.log('google')
        } else if (document.getElementById('yt').checked == true) {
            window.location = 'https://www.youtube.com/results?search_query=' + input
            console.log('youtube')
        } else if (document.getElementById('gi').checked == true) {
            window.location = 'https://www.google.com/search?tbm=isch&sxsrf=ALeKk00WgBEDQRn8TIkiyIJkfWARRA5yNA%3A1614396817083&source=hp&biw=1920&bih=969&ei=kb05YMv2AsmX-gTthI7oBA&q=' + input + '&oq=' + input + '&gs_lcp=CgNpbWcQAzIECCMQJzIECCMQJzIFCAAQsQMyBQgAELEDMgUIABCxAzIFCAAQsQMyBQgAELEDMgIIADIICAAQsQMQgwEyBQgAELEDUOEEWJkFYKwGaABwAHgAgAFSiAFSkgEBMZgBAKABAaoBC2d3cy13aXotaW1n&sclient=img&ved=0ahUKEwiLg7rmkInvAhXJi54KHW2CA00Q4dUDCAc&uact=5'
            console.log('google images')
        } else if (document.getElementById('amz').checked == true) {
            window.location = 'https://www.amazon.com/s?k=' + input + 'yo&ref=nb_sb_noss'
            console.log('amazon')
        }
    }
}

function start() {
    document.getElementById('searchinput').value=''
    recognition.start()
    console.log('hi')
}
recognition.onresult = function(event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    document.getElementById('searchinput').value = content
    search();
}

function add() {
    name = prompt('Enter Name of Bookmark', 'Bookmark')
    console.log(name)
    url = prompt('Enter URL', '')
    console.log(url)
    firebase.database().ref('/').push({
        name: name,
        url: url
    })
    localStorage.setItem(name, url)
}

function getData() {
    firebase.database().ref("/").on('value', function (snapshot) {
        document.getElementById("btn_output").innerHTML = "";
        snapshot.forEach(function (childSnapshot) {
            childKey = childSnapshot.key;
            childData = childSnapshot.val();
            if (childKey != "purpose") {
                newBookmark = childKey;
                bookmark_data = childData
                console.log(childData)
                namevalue = bookmark_data['name']
                urlvalue = bookmark_data['url']
                console.log("newBookmark - " + newBookmark)
                row = "<a id='bookmarkanchor' class='btn btn-outline-dark' href='" + urlvalue + "' target='_blank'> " + namevalue + "</a>"
                document.getElementById('btn_output').innerHTML += row

            };
        });

    })


}
getData();

function remove() {
    firebase.database().ref('/').remove()
    document.getElementById('btn_output').innerHTML = ''
}