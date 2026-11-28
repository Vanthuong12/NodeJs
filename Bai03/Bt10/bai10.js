const { MongoClient } = require('mongodb');

// Chuỗi kết nối MongoDB
const uri = 'mongodb://127.0.0.1:27017';
const client = new MongoClient(uri);

// Sử dụng database riêng biệt cho Bài 10: qlsinhvien_bt10
const DB_NAME = 'qlsinhvien_bt10';

async function main() {
    try {
        await client.connect();
        const db = client.db(DB_NAME);

        const departmentsCol = db.collection('departments');
        const studentsJoinCol = db.collection('students_join');

        // Làm sạch dữ liệu cũ trước khi thêm
        await departmentsCol.deleteMany({});
        await studentsJoinCol.deleteMany({});

        // 1. Tạo collection departments gồm ít nhất 2 khoa (makhoa, tenkhoa)
        const danhSachKhoa = [
            { makhoa: "CNTT", tenkhoa: "Công nghệ thông tin" },
            { makhoa: "QTKD", tenkhoa: "Quản trị kinh doanh" },
            { makhoa: "DTVT", tenkhoa: "Điện tử viễn thông" }
        ];
        await departmentsCol.insertMany(danhSachKhoa);

        // 2. Tạo collection students_join gồm ít nhất 4 sinh viên (masv, hoten, makhoa)
        const danhSachSinhVien = [
            { masv: "SV01", hoten: "Cao Văn Thượng", makhoa: "CNTT" },
            { masv: "SV02", hoten: "Trần Thị Mai", makhoa: "QTKD" },
            { masv: "SV03", hoten: "Lê Hoàng Nam", makhoa: "CNTT" },
            { masv: "SV04", hoten: "Phạm Minh Tuấn", makhoa: "DTVT" }
        ];
        await studentsJoinCol.insertMany(danhSachSinhVien);

        // 3. Sử dụng aggregate() kết hợp $lookup để liên kết sinh viên với khoa thông qua makhoa
        const pipeline = [
            {
                $lookup: {
                    from: 'departments',
                    localField: 'makhoa',
                    foreignField: 'makhoa',
                    as: 'thongtin_khoa'
                }
            },
            {
                $unwind: {
                    path: '$thongtin_khoa',
                    preserveNullAndEmptyArrays: true
                }
            },
            {
                $project: {
                    _id: 0,
                    masv: 1,
                    hoten: 1,
                    makhoa: 1,
                    tenkhoa: '$thongtin_khoa.tenkhoa'
                }
            }
        ];

        const ketQua = await studentsJoinCol.aggregate(pipeline).toArray();

        // 4. Hiển thị danh sách sinh viên kèm tên khoa tương ứng (chỉ hiện kết quả trên terminal)
        console.log("Danh sách sinh viên kèm tên khoa tương ứng:");
        console.table(ketQua.map(sv => ({
            "Mã SV": sv.masv,
            "Họ và Tên": sv.hoten,
            "Mã Khoa": sv.makhoa,
            "Tên Khoa": sv.tenkhoa
        })));

    } catch (error) {
        console.error("Đã xảy ra lỗi:", error);
    } finally {
        await client.close();
    }
}

main();
