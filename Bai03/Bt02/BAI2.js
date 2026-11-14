
const http = require('http');

const server = http.createServer((req, res) => {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    if (req.url === '/') {
        res.writeHead(200);
        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>Trang chủ - Văn Thương</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #eaf2f8;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                    }
                    .container {
                        background: white;
                        padding: 35px;
                        width: 450px;
                        text-align: center;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    }
                    h1 { color: #2874a6; }
                    p { color: #444; font-size: 17px; }
                    a {
                        display: inline-block;
                        margin-top: 15px;
                        padding: 10px 20px;
                        background: #2874a6;
                        color: white;
                        text-decoration: none;
                        border-radius: 6px;
                    }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Xin chào!</h1>
                    <p>Chào mừng bạn đến với trang web của Văn Thương.</p>
                    <p><strong>Mã sinh viên:</strong> [CDCNTT18B29]</p>
                    <a href="/about">Giới thiệu bản thân</a>
                </div>
            </body>
            </html>
        `);

    } else if (req.url === '/about') {
        res.writeHead(200);
        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>Giới thiệu - Văn Thương</title>
                <style>
                    body {
                        font-family: Arial, sans-serif;
                        background: #f4f6f7;
                        display: flex;
                        justify-content: center;
                        align-items: center;
                        min-height: 100vh;
                        margin: 0;
                    }
                    .container {
                        background: white;
                        padding: 35px;
                        width: 450px;
                        border-radius: 12px;
                        box-shadow: 0 4px 15px rgba(0,0,0,0.1);
                    }
                    h1 { color: #1e8449; text-align: center; }
                    p { color: #444; font-size: 17px; line-height: 1.6; }
                    a { color: #2874a6; text-decoration: none; }
                </style>
            </head>
            <body>
                <div class="container">
                    <h1>Giới thiệu bản thân</h1>
                    <p><strong>Họ tên:</strong> Văn Thương</p>
                    <p><strong>Mã sinh viên:</strong> [CDCNTT18B29]</p>
                    <p><strong>Ngành học:</strong> Công nghệ thông tin</p>
                    <p>Tôi là sinh viên đang học tập và tìm hiểu về lập trình Node.js.</p>
                    <a href="/">Quay lại trang chủ</a>
                </div>
            </body>
            </html>
        `);

    } else {
        res.writeHead(404);
        res.end(`
            <!DOCTYPE html>
            <html lang="vi">
            <head>
                <meta charset="UTF-8">
                <title>404 - Không tìm thấy</title>
            </head>
            <body style="font-family: Arial; text-align: center; padding: 60px;">
                <h1>404 - Không tìm thấy trang</h1>
                <p>Đường dẫn bạn truy cập không tồn tại.</p>
                <a href="/">Quay lại trang chủ</a>
            </body>
            </html>
        `);
    }
});

server.listen(3000, () => {
    console.log('Server đang chạy tại http://localhost:3000');
});
