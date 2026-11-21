# BÀI THỰC HÀNH 02 - BT01: HTTP SERVER BẰNG NODE.JS THUẦN

## 1. Yêu cầu
- Tạo HTTP server bằng Node.js thuần (sử dụng module có sẵn `http`).
- Lắng nghe tại `localhost:3000`.
- Khi người dùng truy cập, trả về trang HTML chứa tên sinh viên: **Nguyễn Văn Thưởng**.
- Đẩy mã nguồn lên GitHub.

## 2. Cách thực hiện
- Sử dụng module `http` của Node.js: `require('http')`.
- Sử dụng phương thức `http.createServer()` để khởi tạo server.
- Sử dụng `res.setHeader('Content-Type', 'text/html; charset=utf-8')` để hiển thị chuẩn tiếng Việt.
- Dùng `res.end()` để gửi mã HTML về trình duyệt.
- Dùng `server.listen(3000, 'localhost')` để mở cổng 3000.

## 3. Hướng dẫn chạy chương trình
1. Mở Terminal tại thư mục `Bai02/Bt01`:
   ```bash
   node server.js
   ```
2. Mở trình duyệt web và truy cập vào địa chỉ:
   ```
   http://localhost:3000
   ```
3. Kết quả: Trình duyệt hiển thị trang giao diện đẹp mắt với tên sinh viên "Nguyễn Văn Thưởng".
