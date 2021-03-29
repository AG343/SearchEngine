var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var newBookmark = ''
var bookmark = []
var x = ''
var urlbookmark = []
var content = ''
var input = ''


function logout() {
    window.location.href = 'https://accounts.google.com/Logout?ec=GAdAwAE'
}


function search() {
    input = document.getElementById('searchinput').value
    if (input.length == 0) {

    } else {
        document.getElementById('searchbutton').disabled == false
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
    document.getElementById('searchinput').value = ''
    recognition.start()
}
recognition.onresult = function (event) {
    console.log(event)
    content = event.results[0][0].transcript
    console.log(content)
    document.getElementById('searchinput').value = content
    recognition.stop()
    speak();
    search();
}
showData();

function showData() {
    for (let i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i)
        var bookmarkresult = localStorage.getItem(x)
        var sub=bookmarkresult.substring(0, 4)
       console.log(sub)
       if (sub=='http') {
        document.getElementById('btn_output').innerHTML += "<a class='btn btn-dark' href='" + bookmarkresult + "'>" + x + "</a>"
       }    

    }

}

function add() {
    var name = prompt('Enter Name of Bookmark', 'Bookmark')
    console.log(name)
    var url1 = prompt('Enter URL', '')
    console.log(url1)
    bookmark.push(name)
    urlbookmark.push(url1)
    localStorage.setItem(name, url1)
    document.getElementById('btn_output').innerHTML += "<a class='btn btn-dark' href='" + url1 + "'>" + name + "</a>"
}

function remove() {
    localStorage.clear()
    document.getElementById('btn_output').innerHTML = ''
}

var z = setInterval(clockfun, 1000)

function clockfun() {
    var clock = new Date()
    document.getElementById('clock').innerHTML = clock.toLocaleTimeString()
}
var input2 = document.getElementById('searchinput');
input2.addEventListener("keydown", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('searchbutton').click();
    }
})
var d = new Date()
document.getElementById('date').value = d.toLocaleDateString()

const e = document.getElementById('date');
e.valueAsNumber = Date.now() - (new Date()).getTimezoneOffset() * 60000;