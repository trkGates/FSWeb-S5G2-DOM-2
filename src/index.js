import './less/index.less'

// Örnek bir event kullanımı aşağıdadır. Çalıştırmak için comment dışına alın
// document.querySelector("h1").addEventListener("click",function(e){
// alert("Bana tıkladın!")
// });  


// Kodlar buraya gelecek!


const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
  link.addEventListener("mouseover", () => {
    link.style.color = "red";
  });

  link.addEventListener("mouseout", () => {
    link.style.color = "";
  });
});


var navBar = document.querySelector(".main-navigation");
var foto = document.querySelectorAll(".intro img");

foto.forEach(function(img) {
  img.addEventListener("mouseover", function() {
    img.style.transform = "scale(1.25)";
    img.style.transition = "transform 0.5s";
    img.style.marginTop = "20px"; // Üst marjini ayarla
    img.style.marginBottom = "20px"; // Alt marjini ayarla
    navBar.style.zIndex = "-1"; // Nav bar'ın z-index değerini değiştir
  });

  img.addEventListener("mouseout", function() {
    img.style.transform = "scale(1)";
    img.style.transition = "transform 0.5s";
    img.style.marginTop = "0"; // Üst marjini geri al
    img.style.marginBottom = "0"; // Alt marjini geri al    
    navBar.style.zIndex = "1"; // Nav bar'ın z-index değerini geri al
  });
}); 

const buttons = document.getElementsByClassName('btn');

for (let i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener('click', function() {
    alert('SENİDE ALDIM :D');
  });
}