const http = require('http');

const hostname = 'localhost';
const port = 3000;

// Tạo HTTP server bằng module http thuần
const server = http.createServer((req, res) => {
    // Thiết lập HTTP Header với status 200 và kiểu nội dung HTML (hỗ trợ tiếng Việt UTF-8)
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // Trả về trang HTML chứa tên sinh viên
    const htmlResponse = `
    <!DOCTYPE html>
    <html lang="vi">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Bai02 - Bt01: HTTP Server Node.js thuần</title>
        <style>
            body {
                font-family: Arial, sans-serif;
                background-color: #f0f2f5;
                display: flex;
                justify-content: center;
                align-items: center;
                height: 100vh;
                margin: 0;
            }
            .card {
                background: #ffffff;
                padding: 40px;
                border-radius: 12px;
                box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
                text-align: center;
                max-width: 500px;
                width: 90%;
            }
            h1 {
                color: #1a73e8;
                font-size: 24px;
                margin-bottom: 20px;
            }
            .student-name {
                font-size: 22px;
                font-weight: bold;
                color: #202124;
                margin: 15px 0;
            }
            .badge {
                display: inline-block;
                background-color: #e8f0fe;
                color: #1a73e8;
                padding: 6px 16px;
                border-radius: 20px;
                font-size: 14px;
                font-weight: 600;
            }
        </style>
    </head>
    <body>
        <div class="card">
            <span class="badge">Node.js HTTP Server Thuần</span>
            <h1>BÀI THỰC HÀNH 02 - BT01</h1>
            <p class="student-name">Sinh viên: Cao Văn Thượng</p>
            <p style="color: #5f6368;">Lớp: CĐ-CNTT18B</p>
            <p style="color: #34a853; font-weight: bold;">Truy cập cổng 3000 thành công!</p>
        </div>
    </body>
    </html>
    `;

    res.end(htmlResponse);
});

// Lắng nghe cổng 3000
server.listen(port, hostname, () => {
    console.log(`Server đang lắng nghe tại: http://${hostname}:${port}/`);
    console.log(`Nhấn Ctrl + C để dừng server.`);
});
