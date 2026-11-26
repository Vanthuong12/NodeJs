const fs = require('fs');
const path = require('path');

const dirPath = path.join(__dirname, 'data');
const oldFilePath = path.join(dirPath, 'ghichu.txt');
const newFilePath = path.join(dirPath, 'ghichu_moi.txt');
const tempFilePath = path.join(dirPath, 'tam.txt');

// 1. Tạo thư mục data nếu chưa tồn tại
if (!fs.existsSync(dirPath)) {
    fs.mkdirSync(dirPath);
    console.log('Da tao thu muc data');
} else {
    console.log('Thu muc data da ton tai');
}

// Nội dung ghi vào file (ít nhất 3 dòng)
const content = `Dong 1: Hoc NodeJS\nDong 2: Tim hieu File System\nDong 3: Thuc hanh NodeJS`;

// 2. Ghi vào tập tin ghichu.txt
fs.writeFile(oldFilePath, content, 'utf8', (err) => {
    if (err) return console.error('Loi khi ghi file:', err);
    console.log('Da ghi file ghichu.txt');

    // 3. Đổi tên tập tin bằng fs.rename()
    fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) return console.error('Loi khi doi ten file:', err);
        console.log('Da doi ten file thanh ghichu_moi.txt');

        // 4. Đọc và hiển thị nội dung sau khi đổi tên bằng fs.readFile()
        fs.readFile(newFilePath, 'utf8', (err, data) => {
            if (err) return console.error('Loi khi doc file:', err);
            console.log('\nNoi dung file:');
            console.log(data);

            // 5. Tạo tập tin tam.txt
            fs.writeFile(tempFilePath, 'Day la file tam', 'utf8', (err) => {
                if (err) return console.error('Loi khi tao file tam:', err);
                console.log('\nDa tao file tam.txt');

                // 6. Xóa tập tin tam.txt bằng fs.unlink()
                fs.unlink(tempFilePath, (err) => {
                    if (err) return console.error('Loi khi xoá file tam:', err);
                    console.log('Da xoa file tam.txt');
                    console.log('\nHoan thanh bai tap!');
                });
            });
        });
    });
});