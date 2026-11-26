# BÀI 09: XÓA DỮ LIỆU CÓ ĐIỀU KIỆN TRONG MONGODB

**Sinh viên:** Cao Văn Thượng  
**Môn học:** Bài 3 – Module, File System và Cơ sở dữ liệu

---

## 1. Mục tiêu bài thực hành

Thực hành sử dụng MongoDB với Node.js để quản lý và xóa dữ liệu có điều kiện.

Các yêu cầu:
- Kết nối database `qlsinhvien`.
- Sử dụng collection riêng `students_test`.
- Thêm ít nhất 5 sinh viên mẫu gồm các trường: `masv`, `hoten`, `tuoi`, `diem`.
- Sử dụng `deleteOne()` để xóa một sinh viên theo mã sinh viên.
- Sử dụng `deleteMany()` để xóa các sinh viên có điểm dưới 5.
- Hiển thị số bản ghi đã xóa và danh sách sinh viên còn lại bằng `find()`.

## 2. Công nghệ sử dụng

- Node.js
- MongoDB
- MongoDB Compass
- Visual Studio Code
- MongoDB Node.js Driver

## 3. Cài đặt thư viện

Mở Terminal tại thư mục bài tập và thực hiện các lệnh:

```bash
npm init -y
npm install mongodb
```

## 4. Các bước thực hiện

### Bước 1: Kết nối MongoDB

Sử dụng `MongoClient` để kết nối MongoDB tại địa chỉ:

```javascript
const uri = "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri);
```

Chọn database và collection:

```javascript
const db = client.db("qlsinhvien");
const students = db.collection("students_test");
```

### Bước 2: Thêm dữ liệu sinh viên

Sử dụng `insertMany()` để thêm 5 sinh viên mẫu vào collection `students_test`.

Dữ liệu gồm các trường:
- masv: Mã sinh viên.
- hoten: Họ tên sinh viên.
- tuoi: Tuổi.
- diem: Điểm.

### Bước 3: Xóa một sinh viên bằng deleteOne()

Sử dụng lệnh:

```javascript
const resultOne = await students.deleteOne({
    masv: "SV003"
});
```

Kết quả: Xóa thành công 1 sinh viên có mã SV003.

### Bước 4: Xóa sinh viên có điểm dưới 5 bằng deleteMany()

Sử dụng lệnh:

```javascript
const resultMany = await students.deleteMany({
    diem: { $lt: 5 }
});
```

Kết quả: Xóa 2 sinh viên có điểm dưới 5.

### Bước 5: Hiển thị danh sách sinh viên còn lại

Sử dụng `find()` để lấy danh sách dữ liệu:

```javascript
const remaining = await students.find({}).toArray();

console.table(remaining);
```

## 5. Chạy chương trình

Sử dụng lệnh:

```bash
node bai09.js
```

## 6. Kết quả thực hiện

Sau khi chạy chương trình:

- Thêm thành công 5 sinh viên.
- `deleteOne()` xóa 1 sinh viên SV003.
- `deleteMany()` xóa 2 sinh viên SV004 và SV005.
- Còn lại 2 sinh viên SV001 và SV002.

Danh sách sinh viên còn lại:

| Mã sinh viên | Họ tên | Tuổi | Điểm |
|---|---|---:|---:|
| SV001 | Nguyen Van An | 20 | 8.5 |
| SV002 | Tran Thi Binh | 21 | 7.0 |

## 7. Hình ảnh minh chứng

### Ảnh 1: Kết quả chạy chương trình trên VS Code

<img width="605" height="255" alt="P9_p1" src="https://github.com/user-attachments/assets/5e3163cb-d477-4217-af20-167c53bab25f" />


### Ảnh 2: Danh sách sinh viên còn lại trên MongoDB Compass

<img width="605" height="284" alt="P9_p2" src="https://github.com/user-attachments/assets/0a8c476b-f216-4c83-93c5-fa044839283e" />


Kết Luận:

Qua bài thực hành, em đã biết cách kết nối MongoDB với Node.js, thêm dữ liệu sinh viên, sử dụng `deleteOne()` để xóa một bản ghi, sử dụng `deleteMany()` để xóa nhiều bản ghi theo điều kiện và sử dụng `find()` để hiển thị dữ liệu còn lại.


