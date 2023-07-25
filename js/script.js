document.getElementById("btn1").onclick=function(){
    confirm("Follow Us")
}
var all_products=document.querySelectorAll(".lists li")
var content=document.querySelector(".content")
var btn=document.querySelector("#btn")
var price_content=document.querySelector("#price_content")
var total_price=0

//-------------------------------------------------------1_variable---------------------------------------------//

all_products.forEach(function(item){
    item.onclick=function(){
    total_price+=+(item.getAttribute("price"))
    content.innerHTML+=item.textContent+"//"
    if(content.innerHTML != ""){
        btn.style.display = "block";
        btn.style.backgroundColor = "black";
        btn.style.color = "white";
        btn.style.width = "140px";
        btn.style.height = "40px";
    }
    }
})
btn.onclick=function(){
    price_content.style.display="block"
    price_content.innerHTML=total_price

}

