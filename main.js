var SpeechRecognition = SpeechRecognition || window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var newBookmark = ''
var name = ''
var url = ''
var urlvalue = ''
var input = ''
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

    if (input.length == 0) {

    } else {
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

function voice() {
    document.getElementById('searchinput');
    recognition.start()
}
recognition.onresult = function run(event) {
    console.log(event)
    var content = event.results[0][0].transcript
    console.log(content)
    document.getElementById('searchinput').innerHTML = content
}

function add() {
    name = prompt('Enter Name of Bookmark', 'Bookmark')
    console.log(name)
    url = prompt('Enter URL', '')
    console.log(url)
    /*newBookmark = "<button id='BookmarkButton' class='link btn btn-dark' onclick='bookmark()'>" + name + "</button>"
    console.log(newBookmark)
    document.getElementById('btn-output').innerHTML += newBookmark*/
    firebase.database().ref('/').push({
        name: name,
        url: url
    })
}

function bookmark() {
    newUrl = document.getElementById('BookmarkButton').value
    window.open(urlvalue, '_blank')
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
                row = "<button value=" + urlvalue + " id='BookmarkButton' class='link btn btn-dark' onclick='bookmark()'>" + namevalue + "</button>"
                document.getElementById('btn_output').innerHTML += row

            };
        });

    })
}
getData();