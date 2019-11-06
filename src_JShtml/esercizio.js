function autoFiller() {
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

function jobAutoF() {
    let request = new XMLHttpRequest();
    request.onload = getJob;
    request.open("GET", "job.txt");
    request.send();
}


function getJob() {
    let target = document.getElementById('job');
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
    

}

function checkF() {
    let request = new XMLHttpRequest();
    request.onload = getCheck;
    request.open("GET", "check.js");
    request.send();
}


function getCheck() {
    let target = document.getElementById('job');
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
    

}