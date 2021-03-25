var bookmark=[]
var urlbookmark=[]
window.onload=function(){
    var bookmarkresult=localStorage.getItem(bookmark)
    document.getElementById('div1').innerHTML+="<a href='"+bookmarkresult+"'>"+bookmarkresult+"</a>"
}
function test(){
        var name = prompt('Enter Name of Bookmark', 'Bookmark')
        console.log(name)
        var url1 = prompt('Enter URL', '')
        console.log(url1)
        bookmark.push(name)
        urlbookmark.push(url1)
        localStorage.setItem(name, url1)
        for (let i = 0; i < bookmark.length; i++) { 
            document.getElementById('div1').innerHTML+="<a href='"+urlbookmark[i]+"'>"+name+"</a>"
    }
}