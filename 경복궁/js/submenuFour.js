

const menuson = document.querySelectorAll(".main_list .img_menu_list li");


const listone = document.querySelector(".img_wapper");
const listtwo = document.querySelector(".img_wapper2");
const listthree = document.querySelector(".img_wapper3");
const titlelist = document.querySelector(".main_title");


const menulist = [listone,listtwo,listthree];



console.log(menuson);

for(let i=0; i<menuson.length; i++){
    let titlechange = ["수문장 교대의식","수문장 임명의식","첩종"];
    menuson[i].onclick= function(event){
        event.preventDefault()
        for(let j=0; j<menuson.length; j++){
            menulist[j].classList.add("on");
            menuson[j].classList.remove("on");
        }
        menulist[i].classList.remove("on");
        menuson[i].classList.add("on");
        titlelist.innerText = titlechange[i];
        
    }
}


const imgOn = document.querySelectorAll(".img_list_slider .imgbox");
const miniClick = document.querySelectorAll(".img_list_mini .mini");


for(let i=0; i<miniClick.length; i++){
    miniClick[i].onclick=function(event){
        event.preventDefault()
        for(let j=0; j<miniClick.length; j++){
            miniClick[j].classList.remove("on");
            imgOn[j].classList.remove("on");
        }
        miniClick[i].classList.add("on");
        imgOn[i].classList.add("on");
    }
}

const imgOn2 = document.querySelectorAll(".imgbox2");
const miniClick2 = document.querySelectorAll(".img_list_mini2 .mini2");


for(let i=0; i<miniClick2.length; i++){
    miniClick2[i].onclick=function(event){
        event.preventDefault()
        for(let j=0; j<miniClick2.length; j++){
            miniClick2[j].classList.remove("on");
            imgOn2[j].classList.remove("on");
        }
        miniClick2[i].classList.add("on");
        imgOn2[i].classList.add("on");
    }
}


const imgOn3 = document.querySelectorAll(".imgbox3");
const miniClick3 = document.querySelectorAll(".img_list_mini3 .mini3");


for(let i=0; i<miniClick3.length; i++){
    miniClick3[i].onclick=function(event){
        event.preventDefault()
        for(let j=0; j<miniClick3.length; j++){
            miniClick3[j].classList.remove("on");
            imgOn3[j].classList.remove("on");
        }
        miniClick3[i].classList.add("on");
        imgOn3[i].classList.add("on");
    }
}