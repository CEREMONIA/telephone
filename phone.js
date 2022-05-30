var connect = false;
var phone = {
    name:"CEREMONIA",
    tel: "010-1234-5678" 
};

var h2_name = document.getElementsByClassName("name")[0];
var div_contentTel = document.getElementsByClassName("contentTel")[0];
var button1 = document.getElementsByClassName("button_call")[0];
var button2 = document.getElementsByClassName("button_call2")[0];

function connection(){
    h2_name.innerHTML = phone.name;
    div_contentTel.innerHTML = phone.tel;
    connect = true;
}

function reset(){
    h2_name.innerHTML = "통화하기";
    div_contentTel.innerHTML = "";
    connect = false;
}

function loading(){
    if (connect == false){
        h2_name.innerHTML = "연결중...";
    }
    else{
        h2_name.innerHTML = "종료되었습니다";
    }
    button1.style.backgoundColor = "red";
}

function Call1(){
    if (connect == false){
        loading();
        setTimeout(connection, 2000);
    }
    else{
        loading();
        setTimeout(reset, 1000);
    }
}

function Call2(){
    if (connect == false){
        h2_name.innerHTML = "거절되었습니다.";
        setTimeout(reset, 1000);
    }
}
button1.addEventListener('click', Call1);
button2.addEventListener('click', Call2);