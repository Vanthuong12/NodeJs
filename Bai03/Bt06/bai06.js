/**
 * Tập tin bai06.js
 * Sử dụng require() để gọi các hàm từ module xulyDiem.js
 */

const { tinhDiemTrungBinh, xepLoai } = require('./xulyDiem');

// Dữ liệu sinh viên với điểm 3 môn
const danhSachSinhVien = [
    { hoten: "Cao Văn Thượng", mon1: 8.5, mon2: 9.0, mon3: 8.5 },
    { hoten: "Trần Thị Mai",   mon1: 7.0, mon2: 7.5, mon3: 6.5 },
    { hoten: "Lê Hoàng Nam",   mon1: 5.5, mon2: 5.0, mon3: 5.5 },
    { hoten: "Phạm Minh Tuấn", mon1: 4.0, mon2: 4.5, mon3: 3.5 }
];

// Xử lý tính điểm trung bình và xếp loại
const ketQuaHocTap = danhSachSinhVien.map((sv, index) => {
    const dtb = tinhDiemTrungBinh(sv.mon1, sv.mon2, sv.mon3);
    const loai = xepLoai(dtb);
    return {
        "STT": index + 1,
        "Họ và tên": sv.hoten,
        "Điểm Môn 1": sv.mon1,
        "Điểm Môn 2": sv.mon2,
        "Điểm Môn 3": sv.mon3,
        "Điểm TB": dtb,
        "Xếp loại": loai
    };
});

// Hiển thị kết quả lên Terminal
console.log("BẢNG TỔNG HỢP KẾT QUẢ HỌC TẬP:");
console.table(ketQuaHocTap);

console.log("\nDANH SÁCH CHI TIẾT SINH VIÊN:");
ketQuaHocTap.forEach(sv => {
    console.log(`- Sinh viên: ${sv["Họ và tên"].padEnd(20)} | Điểm TB: ${sv["Điểm TB"].toString().padEnd(5)} | Xếp loại: ${sv["Xếp loại"]}`);
});
