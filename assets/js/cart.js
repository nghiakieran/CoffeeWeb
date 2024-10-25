// Xử lý sửa, xóa
document.addEventListener('DOMContentLoaded', function (){
    // Lấy tất cả button update, delete
    const updateButtons = document.querySelectorAll('.update');
    const deleteButtons = document.querySelectorAll('.delete');

    // Xử lý sự kiện click cho các nút update
    updateButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Gọi backend xử lý !!!
        });
    });

    // Xử lý sự kiện click cho các nút delete
    deleteButtons.forEach(button => {
        button.addEventListener('click', function () {
            // Gọi backend xử lý !!!
        });
    });
});

// Xử lý hiên thị sản phẩm
document.addEventListener('DOMContentLoaded', function() {
    let items = document.querySelectorAll('.product-item');
    let seeMoreBtn = document.getElementById('seeMoreBtn');
    const container = document.querySelector('.bottom');
    let length = items.length;
    if (length > 3) {
        for (let i = 3; i < items.length; i++) {
            items[i].classList.add('hidden-item');
        }
        seeMoreBtn.style.display = 'block';
    }

    seeMoreBtn.addEventListener('click', function () {
        container.classList.toggle('show-more');  // Toggle class
        this.textContent = this.textContent === 'Xem thêm' ? 'Ẩn bớt' : 'Xem thêm';
    });
});