const products = [
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Nhân Chi Không Tỉnh',
        newPrice: '34.000',
        oldPrice: '55.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Bí Mật Của Phép Thuật',
        newPrice: '40.000',
        oldPrice: '60.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Lịch Sử Thế Giới',
        newPrice: '70.000',
        oldPrice: '100.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Cuộc Phiêu Lưu Kỳ Thú',
        newPrice: '25.000',
        oldPrice: '45.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Hành Trình Vượt Đại Dương',
        newPrice: '50.000',
        oldPrice: '80.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Tâm Lý Học Hành Vi',
        newPrice: '65.000',
        oldPrice: '95.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Làm Chủ Tư Duy',
        newPrice: '30.000',
        oldPrice: '50.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Học Tập Hiệu Quả',
        newPrice: '55.000',
        oldPrice: '75.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Công Nghệ 4.0',
        newPrice: '45.000',
        oldPrice: '65.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Thiên Tài Bên Trái, Kẻ Điên Bên Phải',
        newPrice: '80.000',
        oldPrice: '120.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Lời Tự Thuật',
        newPrice: '60.000',
        oldPrice: '85.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Bước Chân Đầu Tiên',
        newPrice: '35.000',
        oldPrice: '55.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Tuyệt Tác Thời Gian',
        newPrice: '75.000',
        oldPrice: '110.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Cuộc Sống Xanh',
        newPrice: '20.000',
        oldPrice: '30.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Hành Trình Đến Thành Công',
        newPrice: '90.000',
        oldPrice: '130.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Khám Phá Vũ Trụ',
        newPrice: '100.000',
        oldPrice: '150.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Cuộc Cách Mạng Công Nghệ',
        newPrice: '85.000',
        oldPrice: '125.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Sống Chậm Lại',
        newPrice: '45.000',
        oldPrice: '70.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Sức Mạnh Của Thói Quen',
        newPrice: '65.000',
        oldPrice: '90.000'
    },
    {
        img: '../assets/tri-nan-hanh-di-01.webp',
        title: 'Chiến Lược Kinh Doanh',
        newPrice: '95.000',
        oldPrice: '140.000'
    }
];



const itemsPerPage = 8;

/**
 * Tạo danh sách sản phẩm dựa trên trang hiện tại
 * @param {number} currentPage - Trang hiện tại
 */

function displayProducts(currentPage) {
    const container = document.getElementById("grid-container");

    // Tính toán vị trí bắt đầu và kết thúc
    const start = (currentPage - 1) * itemsPerPage;
    const end = start + itemsPerPage;

    // Lấy sản phẩm cho trang hiện tại
    const currentProducts = products.slice(start, end);
    container.innerHTML = currentProducts
        .map(
            (product) => `
           <div class="item-newbook">
                        <a href="" class="thumb-b">
                            <img src=${product.img} alt="">
                        </a>
                        <h3>
                            <a href="/timothy-corrigan" title="Timothy Corrigan" class="a-title">${product.title}</a>
                        </h3>
                        <div class="price-box">
                            <span class="new-price">${product.newPrice} đ</span>
                            <span class="old-price">${product.oldPrice} đ</span>

                        </div>
                        <div class="overlay">
                            <button class="add-to-cart">Thêm vào giỏ hàng</button>
                            <a href="/timothy-corrigan" class="view-details">Chi tiết sản phẩm</a>
                        </div>
                    </div>
        `
        )
        .join("");
}
/**
 * Tạo nút phân trang
 * @param {number} totalItems - Tổng số sản phẩm
 * @param {number} itemsPerPage - Số sản phẩm trên mỗi trang
 */
function createPagination(totalItems, itemsPerPage) {
    const paginationContainer = document.getElementById("pagination");
    const totalPages = Math.ceil(totalItems / itemsPerPage);

    // Tạo nút phân trang
    let paginationHTML = `
        <button class="page-btn" onclick="changePage('prev')">Previous</button>
    `;

    for (let i = 1; i <= totalPages; i++) {
        paginationHTML += `
            <button class="page-btn" onclick="changePage(${i})">${i}</button>
        `;
    }

    paginationHTML += `
        <button class="page-btn" onclick="changePage('next')">Next</button>
    `;

    paginationContainer.innerHTML = paginationHTML;
}

// Biến để lưu trang hiện tại
let currentPage = 1;

/**
 * Hàm thay đổi trang
 * @param {number|string} page - Trang cần chuyển
 */
function changePage(page) {
    const totalPages = Math.ceil(products.length / itemsPerPage);

    if (page === "prev" && currentPage > 1) {
        currentPage--;
    } else if (page === "next" && currentPage < totalPages) {
        currentPage++;
    } else if (typeof page === "number") {
        currentPage = page;
    }

    displayProducts(currentPage);
}

// Khởi chạy
displayProducts(currentPage); // Hiển thị trang đầu tiên
createPagination(products.length, itemsPerPage); // Tạo nút phân trang