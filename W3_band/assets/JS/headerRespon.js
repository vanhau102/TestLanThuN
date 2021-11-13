// Đóng mở menu
const mobileMenu =document.querySelector("#mobile-menu");
const header=document.querySelector("#header");
var headerHeight= header.clientHeight;


mobileMenu.addEventListener("click",function(ev){
    let isClose = header.clientHeight===headerHeight;
    if(isClose)
    {
        header.style.height = "auto";
    }else{
        header.style.height = null;
    }
})
// Link
var menuItems = document.querySelectorAll('#nav >li a[href*="#"]');

for(var i=0;i<menuItems.length;i++){
    var menuItem = menuItems[i];
    menuItem.onclick=function(ev){
        let isParenMenu= this.nextElementSibling && this.nextElementSibling.classList.contains("subnav");
        if(isParenMenu){
            ev.preventDefault();
        }else{
            header.style.height = null;
        }
    }
}