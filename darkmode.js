val = localStorage.key(0)
key = localStorage.key(0)

function ck() {
    for (let index = 0; index < localStorage.length; index++) {
        key = localStorage.key(index)
        val = localStorage.getItem(key)
        console.log(key)
        if (val == "true") {
            document.getElementById('displayswitch').checked = true
            toggle();
            break;
        } else if (val == "false") {
            document.getElementById('displayswitch').checked = false
            toggle();
            break;
        }

    }
}
ck()

function toggle() {

    if (document.getElementById('displayswitch').checked == true) {

        console.log(key)
        document.getElementById('body_background').style.backgroundColor = 'black'
        document.getElementById('body_background').style.color = 'white'
        document.getElementById('setup').style.background = 'white'
        document.getElementById('setup').style.color = 'black'
        document.getElementById('hr1').style.color = 'white'
        console.log(key)
        localStorage.setItem('true', true)
        document.getElementById('displayswitch').checked = true

    } else if (document.getElementById('displayswitch').checked == false) {
        console.log(key)
        localStorage.setItem('true', false)
        document.getElementById('body_background').style.backgroundColor = 'white'
        document.getElementById('body_background').style.color = 'black'
        document.getElementById('hr1').style.color = 'black'
        document.getElementById('setup').style.background = 'auto'
        document.getElementById('setup').style.color = 'auto'
        console.log(key)
        document.getElementById('displayswitch').checked = false
    }

}