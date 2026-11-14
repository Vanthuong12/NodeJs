# Bài 2 - Xây dựng Web Server bằng Node.js

## Nội dung thực hiện

Sử dụng module `http` của Node.js để xây dựng Web Server chạy tại cổng 3000.

- Truy cập `/`: Hiển thị lời chào và mã sinh viên.
- Truy cập `/about`: Hiển thị thông tin giới thiệu bản thân.
- Truy cập đường dẫn không tồn tại: Trả về mã trạng thái HTTP 404.

## Các bước thực hiện

**Bước 1:** Mở Terminal tại thư mục `Bt02`.

**Bước 2:** Sử dụng lệnh sau để khởi chạy Web Server:

```bash
node BAI2.js
```

**Bước 3:** Mở trình duyệt và truy cập các địa chỉ:

- Trang chủ: http://localhost:3000
- Trang giới thiệu: http://localhost:3000/about
- Trang không tồn tại: http://localhost:3000/test

**Bước 4:** Kiểm tra nội dung hiển thị trên trình duyệt và mã trạng thái khi truy cập đường dẫn không tồn tại.

## Hình ảnh thực hiện

**1. Khởi chạy Web Server bằng Terminal**

![Khởi chạy Web Server](images/anh1-terminal.png)

**2. Kết quả trang chủ**

![Trang chủ](images/anh2-trangchu.png)

**3. Kết quả trang giới thiệu**

![Trang giới thiệu](images/anh3-about.png)

**4. Kết quả khi truy cập đường dẫn không tồn tại (404)**

![Trang lỗi 404](images/anh4-404.png)

## Kết quả thực hiện

Đã xây dựng và chạy thành công Web Server bằng module `http` của Node.js tại cổng 3000. Các đường dẫn `/` và `/about` hiển thị đúng nội dung yêu cầu. Khi truy cập đường dẫn không tồn tại, máy chủ trả về mã trạng thái HTTP 404.
