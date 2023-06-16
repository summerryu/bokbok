

const tabMenu = document.querySelectorAll("#container .center .submain .sub_left .menu li");

const subMain = document.querySelector("#container .center .submain .sub_main");
const subMaintwo = document.querySelector("#container .center .submain .sub_main_two");

let mains = [subMain,subMaintwo]


tabMenu[0].onclick = function(){
    subMain.classList.add("on");
    subMaintwo.classList.remove("on");
    tabMenu.classList.add("on");
}
tabMenu[1].onclick = function(){
    subMain.classList.remove("on");
    subMaintwo.classList.add("on");
}

for(let i=0; i<tabMenu.length; i++){
    tabMenu[i].onclick= function(event){
        event.preventDefault()
        for(let j=0; j<mains.length; j++){
            mains[j].classList.remove("on");
            tabMenu[j].classList.remove("on");
        }
        mains[i].classList.add("on");
        tabMenu[i].classList.add("on");
    }
}