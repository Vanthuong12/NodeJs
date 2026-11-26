# Bài 8: Quản lý tập tin với File System (`bai08.js`)

- **Học phần:** Bài 3 — Module, File System và cơ sở dữ liệu
- **Đường dẫn nộp bài:** `NodeJS/Bai03/Bt08/`
- **Tập tin mã nguồn:** `bai08.js`

---

## 1. Mục tiêu và yêu cầu bài thực hành
Sử dụng module `fs` trong Node.js để thực hiện quản lý tập tin và thư mục:
1. Tạo thư mục `data` và tập tin `ghichu.txt`.
2. Ghi vào `ghichu.txt` ít nhất 3 dòng nội dung.
3. Đổi tên tập tin `ghichu.txt` thành `ghichu_moi.txt` bằng `fs.rename()`.
4. Đọc và hiển thị nội dung của `ghichu_moi.txt` sau khi đổi tên.
5. Tạo tập tin `tam.txt`, sau đó xóa bằng `fs.unlink()`.
6. Hiển thị thông báo kết quả của từng thao tác khi chạy lệnh `node bai08.js`.

---

## 2. Các lệnh thực hiện

### Bước 2.1. Di chuyển vào thư mục bài tập và kiểm tra file
```bash
cd NodeJS/Bai03/Bt08
ls -la
