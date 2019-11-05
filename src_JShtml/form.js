function check() {
    let name = document.getElementById("user").value.split('');
    console.log(name);
    if (name.length < 2) {
        window.alert('!!!');
        return false;
    }
    return true;

}

function change() {
    document.getElementById("color");
    document.bgColor = color.value;

}

function option() {
    document.getElementById('list');
    document.bgColor = list.value;
}


window.onload = (ev) => {
    let target = document.getElementById("target");
    target.textContent = "Hello!";
    console.log(ev);
}


function prova() {
    let x = document.getElementById("first");
    x.value = x.value.toUpperCase();
}


function second() {
    let y = document.getElementById("contr");
    y.value = y.value.toUpperCase();
}


function mouse(area) {
    let z = document.getElementById("third");
    if (area === false) {
        z.style.height = "20px";
    } else {
        z.style.height = "100px";
    }

}

function gatto(increase) {
    let img = document.getElementById("cat");
    if (increase === false) {
        img.style.height = "100px";
        document.bgColor = "pink";

    } else {
        img.style.height = "535px";
        document.bgColor = "skyblue";
    }


}


function getInfo() {
    let request = new XMLHttpRequest();
    request.onload = callback;
    request.open("GET", "tom.txt");
    request.send();
}

function callback() {
    let target = document.getElementById('devInfo');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let result = this.responseText.split(',');
    let array = [];
    for (let i = 0; i < result.length; i++) {
        array.push(result[i].split('='));
    }
    target.value += array[0][1] + '\n';
    target.value += array[1][1] + '\n';
    target.value += array[2][1] + '\n';
    target.value += array[3][1] + '\n';
}



function profile() {
    let request = new XMLHttpRequest();
    request.onload = getName;
    request.open("GET", "name.txt");
    request.send();
}


function getName() {
    let target = document.getElementById('name');
    if (this.status != 200) {
        target.value += "[" + this.status + "]\n";
        return;
    }
    let result = this.responseText.split(',');
    let single = [];
    for (let i = 0; i < result.length; i++) {
        single.push(result[i].split('='));
    }
    target.value += single[0][1] + '\n';
    target.value += single[1][1] + '\n';
    
}