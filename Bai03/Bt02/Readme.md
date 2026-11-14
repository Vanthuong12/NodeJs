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

<img width="637" height="61" alt="vanthuong 3 2 anh1" src="https://github.com/user-attachments/assets/6a3ccb26-6754-4c63-bb1f-4dac7418924c" />


**2. Kết quả trang chủ**

<img width="1037" height="554" alt="vanthuong3 2 anh2" src="https://github.com/user-attachments/assets/83b55034-53ef-4ec9-85a4-127986d2e611" />


**3. Kết quả trang giới thiệu**

<img width="1172" height="630" alt="vanthuong3 2 anh3" src="https://github.com/user-attachments/assets/83561d27-6a6a-4200-9efc-612540db3f54" />


**4. Kết quả khi truy cập đường dẫn không tồn tại (404)**

<img width="1279" height="459" alt="vanthuong3 2 anh4" src="https://github.com/user-attachments/assets/76c00f3f-9209-45cf-a758-c40e376d09a2" />


## Kết quả thực hiện

Đã xây dựng và chạy thành công Web Server bằng module `http` của Node.js tại cổng 3000. Các đường dẫn `/` và `/about` hiển thị đúng nội dung yêu cầu. Khi truy cập đường dẫn không tồn tại, máy chủ trả về mã trạng thái HTTP 404.
