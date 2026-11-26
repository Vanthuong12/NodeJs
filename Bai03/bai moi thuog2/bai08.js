
const fs = require('fs');

// 1. Tao thu muc data
if (!fs.existsSync('./data')) {
    fs.mkdirSync('./data');
}
console.log('Da tao thu muc data');

// 2. Tao file va ghi noi dung vao ghichu.txt
fs.writeFileSync(
    './data/ghichu.txt',
    'Dong 1: Hoc NodeJS\n' +
    'Dong 2: Tim hieu File System\n' +
    'Dong 3: Thuc hanh NodeJS'
);
console.log('Da ghi file ghichu.txt');

// 3. Doi ten file thanh ghichu_moi.txt
fs.renameSync('./data/ghichu.txt', './data/ghichu_moi.txt');
console.log('Da doi ten file thanh ghichu_moi.txt');

// 4. Doc va hien thi noi dung file sau khi doi ten
const noiDung = fs.readFileSync('./data/ghichu_moi.txt', 'utf8');

console.log('\nNoi dung file:');
console.log(noiDung);

// 5. Tao file tam.txt
fs.writeFileSync('./data/tam.txt', 'Day la file tam');
console.log('\nDa tao file tam.txt');

// 6. Xoa file tam.txt bang fs.unlink()
fs.unlinkSync('./data/tam.txt');
console.log('Da xoa file tam.txt');

console.log('\nHoan thanh bai tap!');
