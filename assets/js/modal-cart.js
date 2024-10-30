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


// Xử lý tăng, giảm quantity button
// Chỉ xử lý khi DOM sẵn sàng (DOMContentLoaded)
document.addEventListener('DOMContentLoaded', function () {
    // Lấy giá sản phẩm từ thuộc tính data-price trong HTML
    const pricePerUnitElement = document.querySelector('.sale-price');
    const pricePerUnit = parseInt(pricePerUnitElement.getAttribute('data-price'));

    // Lấy phần tử hiển thị tổng tiền
    const totalPriceDisplay = document.getElementById('total-price');

    // Hàm cập nhật số lượng và tính toán tổng tiền
    function updateQuantityAndTotalPrice(counterElement, change) {
        const quantityDisplay = counterElement.querySelector('.quantity');
        let quantity = parseInt(counterElement.getAttribute('data-quantity')) || 1;

        // Cập nhật số lượng và đảm bảo số lượng tối thiểu là 1
        quantity = Math.max(1, quantity + change);
        quantityDisplay.textContent = quantity;
        counterElement.setAttribute('data-quantity', quantity);

        // Tính tổng tiền
        const totalPrice = pricePerUnit * quantity;

        // Cập nhật hiển thị tổng tiền trong giỏ hàng
        totalPriceDisplay.textContent = totalPrice.toLocaleString() + ' ₫';
    }

    // Gán sự kiện cho các nút tăng/giảm số lượng
    document.querySelectorAll('.counter-wrapper').forEach(function (counterWrapper) {
        counterWrapper.addEventListener('click', function (event) {
            const button = event.target.closest('.increase, .decrease');
            if (button) {
                const counterElement = button.closest('.counter');
                const change = button.classList.contains('decrease') ? -1 : 1;
                updateQuantityAndTotalPrice(counterElement, change);
            }
        });
    });
});


