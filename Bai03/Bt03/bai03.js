const fs = require('fs');
const path = require('path');

const filePath = path.join(__dirname, 'thongtin.txt');

// 1. Tạo tập tin thongtin.txt chứa họ tên và mã sinh viên
const thongTinBanDau = "Họ và tên: Cao Văn Thượng\nMã sinh viên: CDCNTT18B29\n";

fs.writeFile(filePath, thongTinBanDau, 'utf8', (err) => {
    if (err) return console.error("Lỗi tạo file:", err);

    // 2. Đọc và hiển thị nội dung tập tin ban đầu
    fs.readFile(filePath, 'utf8', (err, data) => {
        if (err) return console.error("Lỗi đọc file:", err);
        console.log("Nội dung tập tin ban đầu:");
        console.log(data.trim());

        // 3. Ghi nối thêm tên lớp vào cuối tập tin bằng appendFile()
        const thongTinLop = "Lớp: CĐ-CNTT18B\n";
        fs.appendFile(filePath, thongTinLop, 'utf8', (err) => {
            if (err) return console.error("Lỗi ghi nối file:", err);

            // 4. Đọc lại tập tin để hiển thị nội dung sau cập nhật
            fs.readFile(filePath, 'utf8', (err, updatedData) => {
                if (err) return console.error("Lỗi đọc lại file:", err);
                console.log("\nNội dung tập tin sau cập nhật:");
                console.log(updatedData.trim());
            });
        });
    });
});
