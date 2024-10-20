// Click show modal
// Lấy các phần tử từ DOM
const  modalRoot = document.getElementById("modal-root");
const  modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const addCartLinks = document.querySelectorAll(".add-cart");

// Lắng nghe sự kiện click cho tất cả các thẻ a với class 'add-cart'
addCartLinks.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();  // Ngăn chặn hành vi mặc định của thẻ a
        modalRoot.style.display = "block";  // Hiển thị modal
    //     let itemName = this.innerText;  // Lấy tên sản phẩm từ nội dung thẻ a
    //     modalRoot.querySelector(".modal-sub-option").innerHTML = `<p>Thêm ${itemName} vào giỏ hàng.</p>`;
     }
});

// Đóng modal khi nhấn vào nút "X"
closeBtn.onclick = function() {
  modalRoot.style.display = "none";  // Ẩn modal
}

// Đóng modal khi nhấn bên ngoài modal
window.addEventListener('click', function (event) {
  if (event.target === modal) {
    modalRoot.style.display = 'none'; // Ẩn modal
  }
});

// Selected Size Modal 
const sizeS = document.getElementById('size-S');
const sizeM = document.getElementById('size-M');
const sizeL = document.getElementById('size-L');

sizeS.addEventListener('click', function () {
  sizeS.classList.add('selected');
  sizeM.classList.remove('selected');
  sizeL.classList.remove('selected');
});
sizeM.addEventListener('click', function () {
    sizeS.classList.remove('selected');
    sizeM.classList.add('selected');
    sizeL.classList.remove('selected');
});

sizeL.addEventListener('click', function () {
    sizeS.classList.remove('selected');
    sizeM.classList.remove('selected');
    sizeL.classList.add('selected');
});

