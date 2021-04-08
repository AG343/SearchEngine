
var SpeechRecognition = window.webkitSpeechRecognition
var recognition = new SpeechRecognition()
var newBookmark = ''
var bookmark = []
var x = ''
var urlbookmark = []
var content = ''
var input = ''
window.onload=function () {
    document.getElementById('searchinput').value=''
}

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
    search();
}


function add2() {
    var name = prompt('Enter Name of Bookmark', 'Bookmark')
    console.log(name)
    var url1 = prompt('Enter URL', '')
    console.log(url1)
    bookmark.push(name)
    urlbookmark.push(url1)
    localStorage.setItem(name, url1)
    document.getElementById('btn_output').innerHTML += "<a class='btn btn-dark' href='" + url1 + "'>" + name + "</a>"
}
showData();

function showData() {
    for (let i = 0; i < localStorage.length; i++) {
        x = localStorage.key(i)
        var bookmarkresult = localStorage.getItem(x)
        var sub = bookmarkresult.substring(0, 4)
        console.log(sub)
        if (sub == 'http') {
            document.getElementById('btn_output').innerHTML += "<a class='btn btn-dark' href='" + bookmarkresult + "'>" + x + "</a>"
        }

    }

}

function remove() {
    for (let index = 0; index < localStorage.length; index++) {
        sd = localStorage.key(index)
        if(sd=='true'){
        continue;
        }
        else{
            localStorage.removeItem(sd)
        }
        
    }
    document.getElementById('btn_output').innerHTML = ''
}
var c = setInterval(clockfun, 1000)

function clockfun() {
    var clock = new Date()
    document.getElementById('clock').innerHTML = clock.toLocaleTimeString()
}
var input2 = document.getElementById('searchinput');
input2.addEventListener("keyup", function (e) {
    if (e.keyCode === 13) {
        e.preventDefault();
        document.getElementById('searchbutton').click();
    }
})
var d = new Date()
document.getElementById('date').value = d.toLocaleDateString()
const e = document.getElementById('date');
e.valueAsNumber = Date.now() - (new Date()).getTimezoneOffset() * 60000;
var words=["amazon", "amazon prime", "youtube", "facebook", "alien", "aol mail", "airbnb", "apple",
"american airlines", "autozone", "alaska airlines", "amazon prime video", "bank of america", "best buy",
"bitcoin", "bed bath and beyond", "bridgerton", "bmi calculator", "bath and bode works", "barnes and noble",
"craigslist", "calculator", "costco", "chase bank", "covid vaccine", "cool math games", "cvs covid vaccine",
"dmx", "domino's pizza", "doordash", "disney", "disney plus", "discord", "dmv", "dollar tree", "ebay",
"espn", "etsy", "easter", "earthquake", "expedia", "e-trade", "fox news", "food near me", "fedex tracking",
"fb", "facebook marketplace", "flights", "fortnite", "gmail", "google translate", "google maps",
"google drive", "google docs", "gme", "gameshop", "google flights", "home depot", "hotmail","hulu",
"hbo max", "hobby lobby", "harbor freight tools", "h&m", "hawaiian airlines", "holly madison", "harry styles",
"instagram", "ikea", "internal revenue service", "indeed", "internet speed test", "instacart", "icloud",
"iphone 12", "i care a lot", "in-n-out burger", "jack hanna", "johnson and johnson vaccine", "jcpenny",
"jack in the box", "joelle joanie siwa", "joe biden", "jeff bezos", "judas and the black messiah",
"jamba", "juventus fc", "kahoot", "kaiser permanente", "kaiser login", "khloe kardashian","kohl's",
"khan academy", "kevin durant", "kim kardashian", "kroger", "lowe's", "linkedin", "lululemon athletica",
"louis vuitton", "living spaces", "lil esco 28", "los angeles lakers", "lebron james", "lil nas x",
"lauren boebert", "masters tournament", "maps", "masters 2021", "msn", "midwin charles", "mcdonald's",
"mega millions", "matt gaetz", "mortage calculator", "nba", "news", "netflix", "nfl", "nordstrom rack",
"nba standings", "nike", "old navy", "onlyfans", "outlook", "office depot", "olive garden", "olivia rodrigo",
"omegle", "office 365", "overstock", "one medical", "phillip adams", "pg&e", "paypal", "pinterest",
"pizza hut", "pfizer vaccien", "powerball", "panda express", "pizza near me", "ps5", "quizlet", "quizziz",
"queen of the south", "qvc", "quizlet live", "queen elizabeth II", "qqq", "the queen's gambit", "quadratic formula",
"restaurants near me", "robinhood", "reddit", "redfin", "recreational equipment, inc.", "round table pizza",
"raya and the last dragon", "realtor", "rh", "rite aid covid vaccine", "speed test", "stimulus check",
"safeway", "spotify", "southwest", "starbucks", "southwest airlines", "super bowl lv", "snake", "translate",
"target", "turbotax", "tesla stock", "tesla", "timer", "twitch", "usps tracking", "ups tracking",
"united states postal service", "united airlines", "united parcel service", "ulta beauty", "urban outfitters",
"urban dictionary", "uniqlo", "unemployment", "victoria's secret", "verizon", "vanguard", "vaccine finder",
"vrbo", "venmo", "vaccine", "valorant", "valheim", "vans", "weather", "walmart", "wells fargo", "golden state warriors",
"walgreens", "wandavision", "wayfair", "walmart near me", "what lies below", "whole foods market",
"xfinity", "xbox series x", "xfinity login", "xbox", "xrp price", "xfinity outage", "xfinity stream",
"xfinity speed test", "xrp", "xfinity phone number", "yahoo", "yahoo mail", "yahoo finance", "yelp",
"you", "new york yankees", "youtube to mp3", "yahoo news", "zoom", "zillow", "zoom login", "zara",
"zodiac signs", "zach avery", "zappos", "zendaya", "zach horwitz", "zoom stock", "artificial food coloring"]
function ac(inp, arr){
var currentfocus
inp.addEventListener('input', function(){
    var b,i,val=this.value
    closeAllLists()
    if(!val){return false}
    currentfocus=-1
    var a=document.createElement('div')
    a.setAttribute('id', this.id+'autocomplete-list')
    a.setAttribute('class', 'autocomplete-items')
    this.parentNode.appendChild(a)
    for(i=0; i<arr.length; i++){
        if(arr[i].substr(0, val.length).toUpperCase()==val.toUpperCase()){
b=document.createElement('div')
b.innerHTML="<strong>"+arr[i].substr(0, val.length)+"</strong>"
b.innerHTML+=arr[i].substr(val.length)
b.innerHTML+="<input type='hidden' value='"+arr[i]+"'>"
b.addEventListener('click', function(e){
    inp.value=this.getElementsByTagName('input')[0].value
    closeAllLists()
    search();
})
a.appendChild(b)
        }
    }
})
inp.addEventListener('keydown', function(e){
    var x=document.getElementById(this.id+'autocomplete-list')
    if(x)x=x.getElementsByTagName('div')
    if(e.keyCode==40){
        currentfocus++
    }
   else if (e.keyCode==38) {
        currentfocus--
    }
    else if(e.keyCode==13){
        e.preventDefault()
    
    if(currentfocus>-1){
        if(x)x[currentfocus].click()
    }
}
})

function closeAllLists(elmnt){
    var x=document.getElementsByClassName('autocomplete-items')
for (let i = 0; i < x.length; i++) {
    if(elmnt!=x[i]&&elmnt!=inp){
        x[i].parentNode.removeChild(x[i])
    }
    
}
}
document.addEventListener('click', function(e){
    closeAllLists(e.target)
})
}
ac(document.getElementById("searchinput"), words);