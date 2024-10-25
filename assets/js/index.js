// Scroll fill color
window.onscroll = () => {
    if(scrollY > 190){
        document.querySelector('.header').style.backgroundColor = '#1b1514e7';
    }
    else if (scrollY === 0){
        document.querySelector('.header').style.backgroundColor = 'transparent';
    }
}
// Xử lý tăng, giảm quantity button
// Chỉ xử lý khi DOM sẵn sàng (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    // Hàm cập nhật số lượng
    function updateQuantity(counterElement, change) {
        
        const quantityDisplay = counterElement.querySelector('.quantity');
        // Lấy số lượng hiện tại từ thuộc tính data-quantity
        let quantity = parseInt(counterElement.getAttribute('data-quantity')) || 1;
        
        // Cập nhật số lượng mới và đảm bảo không dưới 1
        quantity = Math.max(1, quantity + change);
        
        // Cập nhật hiển thị và thuộc tính data-quantity
        quantityDisplay.textContent = quantity;
        counterElement.setAttribute('data-quantity', quantity);
    }
    
    document.querySelector('.counter-wrapper').addEventListener('click', function (event) {
        const button = event.target.closest('.increase, .decrease');
        if (button) {
            // Tìm phần tử cha chứa số lượng (.counter)
            const counterElement = button.closest('.counter');
            // Thay đổi tăng hoặc giảm
            const change = button.classList.contains('decrease') ? -1 : 1;
            // Cập nhật số lượng
            updateQuantity(counterElement, change);
        }
    });
});