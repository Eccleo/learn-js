username=prompt('who is there?','');
if(username == "admin"){
    pass=prompt('enter password','');
    if(pass=='black majesty'){
        alert('Welcome');
    }else if(pass==null){
        alert('abort');
    }else if (pass!='black majesty'){
        alert('incorrect');
    }
}else if(username!='admin'){
    alert('Who U R bitch?');
}