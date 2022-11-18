let navbar = document.querySelector('.navbar');

document.querySelector('#menu-btn').onclick = () =>{
    navbar.classList.toggle('active');
    
}


window.onscroll = () =>{
    navbar.classList.remove('active');
}

 
function Submit() {
    alert("Data telah disimpan!");
  }