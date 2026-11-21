const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Tạo ứng dụng Node.js sử dụng module http
const server = http.createServer((req, res) => {
    // Kiểm tra truy cập trang chủ (path là '/' hoặc '')
    if (req.url === '/' || req.url === '') {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');

        const htmlResponse = `
        <!DOCTYPE html>
        <html lang="vi">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Bai02 - Bt02: Thông Tin Sinh Viên</title>
            <style>
                body {
                    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
                    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    height: 100vh;
                    margin: 0;
                }
                .profile-card {
                    background: #ffffff;
                    border-radius: 16px;
                    padding: 35px 45px;
                    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
                    width: 420px;
                    text-align: center;
                }
                .avatar {
                    width: 80px;
                    height: 80px;
                    border-radius: 50%;
                    background-color: #667eea;
                    color: white;
                    display: flex;
                    align-items: center;
                    justify-content: center;
                    font-size: 32px;
                    font-weight: bold;
                    margin: 0 auto 20px auto;
                }
                h2 {
                    color: #333333;
                    margin-bottom: 25px;
                    font-size: 22px;
                    text-transform: uppercase;
                    letter-spacing: 1px;
                }
                .info-item {
                    display: flex;
                    justify-content: space-between;
                    padding: 12px 0;
                    border-bottom: 1px solid #f0f0f0;
                    font-size: 16px;
                }
                .info-item:last-child {
                    border-bottom: none;
                }
                .label {
                    color: #718096;
                    font-weight: 500;
                }
                .value {
                    color: #2d3748;
                    font-weight: 600;
                }
                .status-badge {
                    margin-top: 20px;
                    padding: 8px 16px;
                    background: #e6fffa;
                    color: #319795;
                    border-radius: 8px;
                    font-size: 14px;
                    font-weight: 600;
                    display: inline-block;
                }
            </style>
        </head>
        <body>
            <div class="profile-card">
                <div class="avatar">VT</div>
                <h2>HỒ SƠ SINH VIÊN</h2>
                <div class="info-item">
                    <span class="label">Họ và tên:</span>
                    <span class="value">Cao Văn Thượng</span>
                </div>
                <div class="info-item">
                    <span class="label">Mã sinh viên:</span>
                    <span class="value">CB261018B01</span>
                </div>
                <div class="info-item">
                    <span class="label">Lớp:</span>
                    <span class="value">CĐ-CNTT18B</span>
                </div>
                <div class="info-item">
                    <span class="label">Cổng kết nối:</span>
                    <span class="value">3000</span>
                </div>
                <div class="status-badge">✓ Server đang chạy ổn định</div>
            </div>
        </body>
        </html>
        `;
        res.end(htmlResponse);
    } else {
        res.statusCode = 404;
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.end('<h1>404 - Không tìm thấy trang yêu cầu</h1>');
    }
});

// Chạy server tại cổng 3000
server.listen(port, hostname, () => {
    console.log(`Server Bt02 đang chạy tại http://${hostname}:${port}/`);
    console.log(`Truy cập trang chủ để xem Họ tên và Mã sinh viên.`);
});
