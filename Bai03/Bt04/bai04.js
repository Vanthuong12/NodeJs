const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB đang chạy trên máy (cổng mặc định 27017)
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Database riêng cho Bài 04
const DB_NAME = 'qlsinhvien_bt04';
const COLLECTION_NAME = 'students';

async function main() {
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const studentsCollection = db.collection(COLLECTION_NAME);

        // Làm sạch dữ liệu cũ và thêm ít nhất 3 sinh viên
        await studentsCollection.deleteMany({});
        const danhSachSinhVien = [
            { masv: "SV01", hoten: "Cao Văn Thượng", tuoi: 20, diem: 8.5 },
            { masv: "SV02", hoten: "Trần Thị Mai", tuoi: 19, diem: 6.8 },
            { masv: "SV03", hoten: "Lê Hoàng Nam", tuoi: 21, diem: 7.5 },
            { masv: "SV04", hoten: "Phạm Minh Tuấn", tuoi: 20, diem: 5.0 }
        ];

        await studentsCollection.insertMany(danhSachSinhVien);

        // Hiển thị kết quả danh sách sinh viên bằng find()
        const list = await studentsCollection.find({}).toArray();
        console.log("Danh sách sinh viên trong MongoDB:");
        console.table(list.map(s => ({
            "Mã SV": s.masv,
            "Họ và Tên": s.hoten,
            "Tuổi": s.tuoi,
            "Điểm": s.diem
        })));

    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    } finally {
        await client.close();
    }
}

main();
