const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Database riêng cho Bài 05
const DB_NAME = 'qlsinhvien_bt05';
const COLLECTION_NAME = 'students';

async function main() {
    try {
        await client.connect();
        const db = client.db(DB_NAME);
        const studentsCollection = db.collection(COLLECTION_NAME);

        // Khởi tạo bản dữ liệu độc lập cho Bài 05
        await studentsCollection.deleteMany({});
        const initialStudents = [
            { masv: "SV01", hoten: "Cao Văn Thượng", tuoi: 20, diem: 8.5 },
            { masv: "SV02", hoten: "Trần Thị Mai", tuoi: 19, diem: 6.8 },
            { masv: "SV03", hoten: "Lê Hoàng Nam", tuoi: 21, diem: 7.5 },
            { masv: "SV04", hoten: "Phạm Minh Tuấn", tuoi: 20, diem: 5.0 }
        ];
        await studentsCollection.insertMany(initialStudents);

        // 1. Tìm các sinh viên có diem >= 7 và sắp xếp giảm dần theo điểm
        const filteredStudents = await studentsCollection
            .find({ diem: { $gte: 7 } })
            .sort({ diem: -1 })
            .toArray();

        console.log("Danh sách sinh viên có điểm >= 7 (sắp xếp giảm dần):");
        console.table(filteredStudents.map(s => ({
            "Mã SV": s.masv,
            "Họ và Tên": s.hoten,
            "Tuổi": s.tuoi,
            "Điểm": s.diem
        })));

        // 2. Cập nhật điểm của sinh viên SV02 lên 8.0
        await studentsCollection.updateOne(
            { masv: 'SV02' },
            { $set: { diem: 8.0 } }
        );

        // 3. Hiển thị lại toàn bộ danh sách sau khi cập nhật để kiểm tra kết quả
        const updatedList = await studentsCollection.find({}).sort({ masv: 1 }).toArray();
        console.log("\nDanh sách sinh viên sau khi cập nhật:");
        console.table(updatedList.map(s => ({
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
