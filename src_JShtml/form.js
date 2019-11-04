function check() {
    let name = document.getElementById("user").value.split('');
    console.log(name);
    if (name.length < 2) {
        window.alert('!!!');
        return false;
    }
    return true;

}

function change(){
    document.getElementById("color").value;
    
       document.bgColor=color;
      
    }
    


