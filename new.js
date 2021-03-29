var checked = ''
var key = ''
var isChecked = ''
toggle();

function toggle() {
    for (let index = 0; index < localStorage.length; index++) {
        if (document.getElementById('displayswitch').checked = true) {
            console.log(key)
            document.getElementById('displayswitch').checked = key
            if (key = 'true') {
                key = localStorage.key(index)
                console.log(key)
                document.getElementById('displayswitch').checked = key
                document.getElementById('body_background').style.backgroundColor = 'black'
                document.getElementById('body_background').style.color = 'white'
                document.getElementById('setup').style.background = 'white'
                document.getElementById('setup').style.color = 'black'
                document.getElementById('hr1').style.color = 'white'
                console.log(key)
                document.getElementById('displayswitch').checked = key
            }
        } else if (document.getElementById('displayswitch').checked = false) {
            console.log(key)
            document.getElementById('displayswitch').checked = key
            if (key = 'false') {
                key = localStorage.key(index)
                console.log(key)
                document.getElementById('displayswitch').checked = key
                document.getElementById('body_background').style.backgroundColor = 'white'
                document.getElementById('body_background').style.color = 'black'
                document.getElementById('hr1').style.color = 'black'
                document.getElementById('setup').style.background = 'auto'
                document.getElementById('setup').style.color = 'auto'
                console.log(key)
                document.getElementById('displayswitch').checked = key
            }

        }
    }
}

function darkmode() {
    checked = document.getElementById('displayswitch').checked == false
    if (document.getElementById('displayswitch').checked == true) {
        key = 'true'
        document.getElementById('body_background').style.backgroundColor = 'black'
        document.getElementById('body_background').style.color = 'white'
        document.getElementById('setup').style.background = 'white'
        document.getElementById('setup').style.color = 'black'
        document.getElementById('hr1').style.color = 'white'
        checked = document.getElementById('displayswitch').checked == true
        localStorage.removeItem('false')
        localStorage.setItem('true', checked)
    } else if (document.getElementById('displayswitch').checked == false) {
        key = 'false'
        document.getElementById('body_background').style.backgroundColor = 'white'
        document.getElementById('body_background').style.color = 'black'
        document.getElementById('hr1').style.color = 'black'
        document.getElementById('setup').style.background = 'auto'
        document.getElementById('setup').style.color = 'auto'
        checked = document.getElementById('displayswitch').checked == false
        localStorage.removeItem('true')
        localStorage.setItem('false', checked)
        localStorage.removeItem(key)
    }
}