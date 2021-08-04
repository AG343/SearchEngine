var reg=/.com|.org|.co.uk|.co.au|.gov|.co.in|.edu|.io|.co|.net|.co.ch|/gi
var urlinput=document.getElementById('urlinput')
var urlarray=[]
var urlarray1=[]
urlarray1=localStorage.getItem('urlarray')
urlinput.addEventListener('keyup', function(e){
    var urlinput1=document.getElementById('urlinput').value
    console.log(urlinput)
var boolean=reg.test(urlinput1)
console.log(boolean)
urlarray1=localStorage.getItem('urlarray')
urlarray1=JSON.parse(urlarray1)
console.log(urlarray1)

    if(e.keyCode===13){
      if(boolean===true){
        window.location="https://"+urlinput1
        urlarray.push(urlinput1)
        console.log(urlarray)
        localStorage.setItem('urlarray', JSON.stringify(urlarray))
        
      }
     else if(boolean===false){
        window.location='https://www.google.com/search?q=' + urlinput1 + '&rlz=1C1CHBF_enUS736US736&oq' + urlinput1 + '&aqs=chrome.0.69i59l2j46i67j0i67j46i67j69i60l3.887j0j7&sourceid=chrome&ie=UTF-8' 
     }
    }
})