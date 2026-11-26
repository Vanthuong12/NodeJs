
const { MongoClient } = require("mongodb");

const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);

async function main() {
    try {
        // Kết nối MongoDB
        await client.connect();
        console.log("Kết nối MongoDB thành công!");

        // Chọn database và collection
        const db = client.db("qlsinhvien");
        const students = db.collection("students_test");

        // Xóa dữ liệu cũ để chạy lại không bị trùng
        await students.deleteMany({});

        // Thêm 5 sinh viên mẫu
        const data = [
            { masv: "SV001", hoten: "Nguyen Van An", tuoi: 20, diem: 8.5 },
            { masv: "SV002", hoten: "Tran Thi Binh", tuoi: 21, diem: 7 },
            { masv: "SV003", hoten: "Le Van Cuong", tuoi: 19, diem: 6 },
            { masv: "SV004", hoten: "Pham Thi Dung", tuoi: 20, diem: 4 },
            { masv: "SV005", hoten: "Hoang Van Em", tuoi: 22, diem: 3.5 }
        ];

        const insertResult = await students.insertMany(data);
        console.log("Đã thêm:", insertResult.insertedCount, "sinh viên");

        // Xóa một sinh viên theo mã SV
        const resultOne = await students.deleteOne({
            masv: "SV003"
        });

        console.log("deleteOne đã xóa:", resultOne.deletedCount, "sinh viên");

        // Xóa sinh viên có điểm dưới 5
        const resultMany = await students.deleteMany({
            diem: { $lt: 5 }
        });

        console.log("deleteMany đã xóa:", resultMany.deletedCount, "sinh viên");

        // Hiển thị danh sách còn lại
        const remaining = await students.find({}).toArray();

        console.log("\nDanh sách sinh viên còn lại:");
        console.table(remaining);

        console.log("Tổng sinh viên còn lại:", remaining.length);

    } catch (error) {
        console.log("Lỗi:", error);
    } finally {
        await client.close();
    }
}

main();
