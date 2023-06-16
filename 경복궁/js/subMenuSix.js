// 인사말 클릭 이벤트
const HelloClick = document.querySelector(".sub_left p");
const mainText = document.querySelector(".main_center .main_text");

HelloClick.onclick = function(event){
    event.preventDefault()
    for(let i=0; i<Menus.length; i++){
        Menus[i].classList.remove("on");
    }
    mainText.classList.add("on");
    chageTitle.innerText = "인사말";
}

const CilckMenus = document.querySelectorAll(".sub_left .left_menu li");

let menusA = document.querySelector(".sub_text_one");
let menusB = document.querySelector(".sub_text_two");

let textChange = ["연혁","공지사항"];

const chageTitle = document.querySelector(".main_center .main .main_title h1");
const Menus = [menusA,menusB];

for(let i=0; i<CilckMenus.length; i++){
    CilckMenus[i].onclick = function(event){
        event.preventDefault()
        for(let j=0; j<Menus.length; j++){
            Menus[j].classList.remove("on");
            mainText.classList.remove("on");
            CilckMenus[j].classList.remove("on");
        }
        Menus[i].classList.add("on");
        chageTitle.innerText = textChange[i];
        CilckMenus[i].classList.add("on");
    }
}



