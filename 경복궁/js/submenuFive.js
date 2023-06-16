
// 센터 이미지 클릭이벤트
const springMiniClick = document.querySelectorAll(".seasons_wapper_spring_mini .season_img_list_mini .season_img_box");
const springimgChange = document.querySelectorAll(".seasons_wapper_spring .season_img_list .season_img_box");

for(let i=0; i<springMiniClick.length; i++){
    springMiniClick[i].onclick = function(event){
        event.preventDefault()
        for(let j=0; j<springimgChange.length; j++){
            springimgChange[j].classList.remove("on");
            springMiniClick[j].classList.remove("on");
        }
        springimgChange[i].classList.add("on");
        springMiniClick[i].classList.add("on");
    }
}

const autumnMiniClick = document.querySelectorAll(".seasons_wapper_autumn_mini .season_img_list_mini .season_img_box");
const autumnimgChange = document.querySelectorAll(".seasons_wapper_autumn .season_img_list .season_img_box");

for(let i=0; i<springMiniClick.length; i++){
    autumnMiniClick[i].onclick = function(event){
        event.preventDefault()
        for(let j=0; j<springimgChange.length; j++){
            autumnimgChange[j].classList.remove("on");
            autumnMiniClick[j].classList.remove("on");
        }
        autumnimgChange[i].classList.add("on");
        autumnMiniClick[i].classList.add("on");
    }
}

const summerMiniClick = document.querySelectorAll(".seasons_wapper_summer_mini .season_img_list_mini .season_img_box");
const summerimgChange = document.querySelectorAll(".seasons_wapper_summer .season_img_list .season_img_box");

for(let i=0; i<springMiniClick.length; i++){
    summerMiniClick[i].onclick = function(event){
        event.preventDefault()
        for(let j=0; j<springimgChange.length; j++){
            summerimgChange[j].classList.remove("on");
            summerMiniClick[j].classList.remove("on");
        }
        summerimgChange[i].classList.add("on");
        summerMiniClick[i].classList.add("on");
    }
}

const winterMiniClick = document.querySelectorAll(".seasons_wapper_winter_mini .season_img_list_mini .season_img_box");
const winterimgChange = document.querySelectorAll(".seasons_wapper_winter .season_img_list .season_img_box");

for(let i=0; i<springMiniClick.length; i++){
    winterMiniClick[i].onclick = function(event){
        event.preventDefault()
        for(let j=0; j<springimgChange.length; j++){
            winterimgChange[j].classList.remove("on");
            winterMiniClick[j].classList.remove("on");
        }
        winterimgChange[i].classList.add("on");
        winterMiniClick[i].classList.add("on");
    }
}

// 센터 서브메뉴 클릭 이벤트
const menusColorChange = document.querySelectorAll(".title_seasons > li");

const Spring = document.querySelector(".seasons_wapper_spring");
const SpringMini = document.querySelector(".seasons_wapper_spring_mini");

const Summer = document.querySelector(".seasons_wapper_summer");
const SummerMini = document.querySelector(".seasons_wapper_summer_mini");

const Autumn = document.querySelector(".seasons_wapper_autumn");
const AutumnMini = document.querySelector(".seasons_wapper_autumn_mini");

const Winter = document.querySelector(".seasons_wapper_winter");
const WinterMini = document.querySelector(".seasons_wapper_winter_mini");

let TheSeasons = [Spring,Summer,Autumn,Winter]
let TheSeasonsMini = [SpringMini,SummerMini,AutumnMini,WinterMini]

console.log(Summer);

for(let i=0; i<menusColorChange.length; i++){
    menusColorChange[i].onclick= function(event){
        event.preventDefault()
        for(let j=0; j<TheSeasons.length; j++){
            TheSeasons[j].classList.remove("on");
            TheSeasonsMini[j].classList.remove("on");
            menusColorChange[j].classList.remove("on");
        }
        TheSeasons[i].classList.add("on");
        TheSeasonsMini[i].classList.add("on");
        menusColorChange[i].classList.add("on");
    }
}