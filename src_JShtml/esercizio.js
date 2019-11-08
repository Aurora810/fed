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
    request.open("GET", "job.json");
    request.send();
}

function getCheck() {
    let json = JSON.parse(this.responseText);
    for (let i = 0; i < json.job.languages.length; i++) {
        document.getElementById(json.job.languages[i]).checked = true;
    }

}

$(function () {
    let sum = document.getElementById("calcD");
    sum.textContent = $('div').length;
    document.getElementById("calcI").textContent = $('input').length;
    document.getElementById("calcL").textContent = $('label').length;
    $('<div><h1>Hello</h1></div>').css({ color: 'red' }).appendTo('body');
    $('a').click(function (event) {
        alert("You should not use any link on this page!");
        event.preventDefault();
    });
    $('html').dblclick(function (e) {
        console.log('Double-click detected at ' + e.pageX + ', ' + e.pageY + '\n');
    });
    $("#change").click(function () {
        $('#primo').addClass('red');
    });
    $("#chanche").click(function () {
        $('#secondo').addClass('chanche');
    });
    $('#inserisci').click(function () {
        $('#addText').val('Scrivere qualcosa');
    });
    $('#aumenta').click(function () {
        let cur = parseInt($('#saluto').css('font-size'));
        $('#saluto').css('font-size', cur * 2);
    });
    $('#diminuisci').click(function () {
        let cur = parseInt($('#saluto').css('font-size'));
        if (cur > 2) {
            return $('#saluto').css('font-size', cur / 2);
        } else {
            return false;
        }
    });
    
    })



