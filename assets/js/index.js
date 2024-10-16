// Scroll fill color
window.onscroll = () => {
    if(scrollY > 190){
        document.querySelector('.header').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header').style.backgroundColor = 'transparent';
    }
}
// Open, off modal menu buy item 
// Lấy các phần tử từ HTML
let modal = document.getElementById("modal-root");
let link = document.getElementById("add-cart");  // Thẻ link 'Đặt mua'
let closeBtn = document.querySelector(".close");  // Nút đóng modal

// Khi click vào thẻ a "Đặt mua", modal sẽ hiện lên
link.onclick = function(event) {
  event.preventDefault();  // Ngăn chặn điều hướng mặc định của thẻ a
  modal.style.display = "block";  // Hiển thị modal
}

// Khi click vào nút "X", modal sẽ bị ẩn
closeBtn.onclick = function() {
  modal.style.display = "none";  // Ẩn modal
}

// Khi người dùng click ra ngoài modal, modal cũng sẽ bị ẩn
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}
