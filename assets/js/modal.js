// Lấy các phần tử từ DOM
const modalRoot = document.getElementById("modal-root");
const modal = document.getElementById("modal");
const closeBtn = document.querySelector(".close");
const addCartLinks = document.querySelectorAll(".add-cart");

// Lắng nghe sự kiện click cho tất cả các thẻ a với class 'add-cart'
addCartLinks.forEach(link => {
    link.onclick = function(event) {
        event.preventDefault();  // Ngăn chặn hành vi mặc định của thẻ a
        modalRoot.style.display = "block";  // Hiển thị modal
        
        // Lấy thông tin sản phẩm từ phần tử cha của link
        const imageItem = this.closest('.image-item');
        const itemName = imageItem.querySelector('.image-item-text a').innerText;
        const itemDescription = imageItem.querySelector('.text-about').innerText;
        const itemPrice = imageItem.querySelector('.price span').innerText;

        // Cập nhật nội dung modal với thông tin sản phẩm
        modal.querySelector('.content .left img').src = imageItem.querySelector('img').src;
        modal.querySelector('.content .top h5').innerText = itemName;
        modal.querySelector('.content .top p').innerText = itemDescription;
        modal.querySelector('.content .top .sale-price').innerText = itemPrice;

        // Reset số lượng và tổng giá trong modal
        const totalPriceDisplay = document.getElementById('total-price');
        totalPriceDisplay.textContent = itemPrice; // Hiển thị giá ban đầu
        const quantityDisplay = document.querySelector('.quantity');
        quantityDisplay.textContent = 1; // Đặt lại số lượng về 1
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
