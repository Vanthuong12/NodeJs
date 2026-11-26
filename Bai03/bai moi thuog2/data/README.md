# BÀI 8: QUẢN LÝ TẬP TIN VỚI FILE SYSTEM

## 1. Yêu cầu bài thực hành
- Sử dụng module `fs` trong Node.js thực hiện các thao tác quản lý tập tin và thư mục bất đồng bộ (Asynchronous).
- Tạo thư mục `data` và các tập tin theo đúng yêu cầu đề bài.

## 2. Các bước thực hiện

### Bước 1: Tạo thư mục data
Sử dụng `fs.existsSync()` kiểm tra thư mục `./data`. Nếu chưa có thì sử dụng `fs.mkdirSync()` để tạo mới.

### Bước 2: Ghi nội dung vào file ghichu.txt
Sử dụng `fs.writeFile()` ghi ít nhất 3 dòng nội dung vào tập tin `./data/ghichu.txt`.

### Bước 3: Đổi tên file
Sử dụng `fs.rename()` để đổi tên file `./data/ghichu.txt` thành `./data/ghichu_moi.txt`.

### Bước 4: Đọc nội dung file
Sử dụng `fs.readFile()` để đọc nội dung file `./data/ghichu_moi.txt` và hiển thị ra màn hình Terminal.

### Bước 5: Tạo file tam.txt
Sử dụng `fs.writeFile()` để tạo file tạm `./data/tam.txt`.

### Bước 6: Xóa file tam.txt
Sử dụng `fs.unlink()` để xóa file tạm `./data/tam.txt` vừa tạo.

## 3. Ảnh chụp màn hình kết quả chạy chương trình

![Kết quả chạy bai08.js](images/Picture2.png)

## 4. Kết luận
Chương trình đã hoàn thành đầy đủ các yêu cầu quản lý file system bất đồng bộ bằng module `fs` trong Node.js.