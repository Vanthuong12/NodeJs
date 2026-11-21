# BÀI THỰC HÀNH 02 - BT02: HIỂN THỊ HỌ TÊN VÀ MÃ SINH VIÊN

## 1. Yêu cầu bài thực hành
- Tạo ứng dụng Node.js sử dụng module `http`.
- Server chạy tại cổng `3000`.
- Khi người dùng truy cập trang chủ (`/`), trả về trang HTML có hiển thị đầy đủ:
  - **Họ và tên:** Nguyễn Văn Thưởng
  - **Mã sinh viên:** CB261018B01
  - **Lớp:** CĐ-CNTT18B
- Nộp liên kết GitHub và mô tả cách chạy.

## 2. Mô tả cách chạy ứng dụng
1. Di chuyển vào thư mục bài tập:
   ```bash
   cd Bai02/Bt02
   ```
2. Khởi chạy ứng dụng:
   ```bash
   node server.js
   ```
   Terminal sẽ xuất hiện thông báo:
   ```
   Server Bt02 đang chạy tại http://localhost:3000/
   Truy cập trang chủ để xem Họ tên và Mã sinh viên.
   ```
3. Mở trình duyệt web bất kỳ (Chrome, Cốc Cốc, Edge, Firefox, v.v.), nhập đường dẫn:
   ```
   http://localhost:3000
   ```
4. Trang web sẽ hiển thị thẻ hồ sơ sinh viên gồm Họ tên và Mã sinh viên rõ ràng, căn giữa màn hình với giao diện hiện đại.
