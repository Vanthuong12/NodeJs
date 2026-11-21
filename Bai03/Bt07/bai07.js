const http = require('http');
const { URL } = require('url');

const hostname = 'localhost';
const port = 3001;

// Hàm tạo layout HTML chung với giao diện hiện đại (CSS Styling)
function getHtmlTemplate(title, content) {
    return `<!DOCTYPE html>
<html lang="vi">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${title} - Bài 07</title>
    <style>
        :root {
            --primary: #4f46e5;
            --primary-hover: #4338ca;
            --success: #10b981;
            --danger: #ef4444;
            --bg: #f8fafc;
            --card-bg: #ffffff;
            --text-main: #1e293b;
            --text-muted: #64748b;
        }
        * {
            box-sizing: border-box;
            margin: 0;
            padding: 0;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
        }
        body {
            background-color: var(--bg);
            color: var(--text-main);
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            padding: 20px;
        }
        .container {
            width: 100%;
            max-width: 600px;
            background: var(--card-bg);
            border-radius: 16px;
            box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.04);
            padding: 35px;
            border: 1px solid #e2e8f0;
        }
        .header {
            text-align: center;
            margin-bottom: 25px;
            border-bottom: 2px solid #f1f5f9;
            padding-bottom: 15px;
        }
        .header h1 {
            font-size: 24px;
            color: var(--primary);
            margin-bottom: 6px;
        }
        .header p {
            color: var(--text-muted);
            font-size: 14px;
        }
        .author-badge {
            display: inline-block;
            background: #eef2ff;
            color: var(--primary);
            padding: 4px 14px;
            border-radius: 20px;
            font-size: 13px;
            font-weight: 600;
            margin-top: 8px;
        }
        .grid {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 16px;
            margin-top: 10px;
        }
        @media (max-width: 600px) {
            .grid { grid-template-columns: 1fr; }
        }
        .card-action {
            background: #f8fafc;
            border: 1px solid #e2e8f0;
            border-radius: 12px;
            padding: 24px 20px;
            transition: all 0.2s ease;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            text-align: center;
        }
        .card-action:hover {
            border-color: var(--primary);
            box-shadow: 0 4px 12px rgba(79, 70, 229, 0.12);
            transform: translateY(-2px);
        }
        .card-action h3 {
            font-size: 18px;
            margin-bottom: 10px;
            color: #0f172a;
        }
        .card-action p {
            font-size: 13px;
            color: var(--text-muted);
            margin-bottom: 20px;
            line-height: 1.5;
        }
        .btn {
            display: inline-block;
            text-align: center;
            background: var(--primary);
            color: #ffffff;
            text-decoration: none;
            padding: 12px 18px;
            border-radius: 8px;
            font-weight: 600;
            font-size: 14px;
            transition: all 0.2s;
            border: none;
            cursor: pointer;
            width: 100%;
        }
        .btn:hover {
            background: var(--primary-hover);
            transform: scale(1.02);
        }
        .btn-success {
            background: #059669;
        }
        .btn-success:hover {
            background: #047857;
        }
        .btn-secondary {
            background: #f1f5f9;
            color: #334155;
            margin-top: 15px;
        }
        .btn-secondary:hover {
            background: #e2e8f0;
        }
        .result-box {
            text-align: center;
            padding: 30px 20px;
            background: #f0fdf4;
            border: 1px solid #bbf7d0;
            border-radius: 12px;
            margin: 20px 0;
        }
        .result-box.error {
            background: #fef2f2;
            border-color: #fecaca;
        }
        .result-title {
            font-size: 32px;
            font-weight: bold;
            color: #166534;
            margin-bottom: 10px;
        }
        .result-title.error {
            color: var(--danger);
            font-size: 22px;
        }
        .result-detail {
            font-size: 16px;
            color: #374151;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🌐 Web Server Điều Hướng - Bài 07</h1>
            <p>Xử lý Query Parameters bằng Module HTTP và đối tượng URL</p>
            <div class="author-badge">Sinh viên: Cao Văn Thượng | MSSV: CDCNTT18B29 | Lớp: CĐ-CNTT18B</div>
        </div>
        ${content}
    </div>
</body>
</html>`;
}

// Khởi tạo HTTP Web Server tại cổng 3001
const server = http.createServer((req, res) => {
    const baseUrl = `http://${req.headers.host || `${hostname}:${port}`}`;
    const myUrl = new URL(req.url, baseUrl);

    const pathname = myUrl.pathname;
    const searchParams = myUrl.searchParams;

    res.setHeader('Content-Type', 'text/html; charset=utf-8');

    // 1. Endpoint /hello?name=...
    if (pathname === '/hello') {
        const name = searchParams.get('name');

        if (!name || name.trim() === '') {
            res.statusCode = 400;
            const content = `
                <div class="result-box error">
                    <div class="result-title error">⚠️ Lỗi: Thiếu tham số</div>
                    <p class="result-detail">Vui lòng cung cấp tham số <strong>name</strong> trên URL.<br>Ví dụ hợp lệ: <code>/hello?name=Minh</code></p>
                </div>
                <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
            `;
            return res.end(getHtmlTemplate('Lỗi tham số', content));
        }

        res.statusCode = 200;
        const cleanName = name.trim();
        const content = `
            <div class="result-box">
                <div class="result-title">Xin chào ${cleanName}</div>
                <p class="result-detail">Tham số nhận được: <strong>name = "${cleanName}"</strong></p>
            </div>
            <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
        `;
        return res.end(getHtmlTemplate('Lời chào', content));
    }

    // 2. Endpoint /sum?a=...&b=...
    if (pathname === '/sum') {
        const aParam = searchParams.get('a');
        const bParam = searchParams.get('b');

        // Kiểm tra thiếu tham số
        if (aParam === null || bParam === null || aParam.trim() === '' || bParam.trim() === '') {
            res.statusCode = 400;
            const content = `
                <div class="result-box error">
                    <div class="result-title error">⚠️ Lỗi: Thiếu tham số</div>
                    <p class="result-detail">Cần truyền đủ cả 2 tham số <strong>a</strong> và <strong>b</strong>.<br>Ví dụ hợp lệ: <code>/sum?a=10&b=20</code></p>
                </div>
                <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
            `;
            return res.end(getHtmlTemplate('Lỗi tham số', content));
        }

        const a = Number(aParam);
        const b = Number(bParam);

        // Kiểm tra giá trị hợp lệ
        if (isNaN(a) || isNaN(b)) {
            res.statusCode = 400;
            const content = `
                <div class="result-box error">
                    <div class="result-title error">⚠️ Lỗi: Giá trị không hợp lệ</div>
                    <p class="result-detail">Tham số <strong>a</strong> và <strong>b</strong> phải là giá trị số.<br>Đã nhận: a = "${aParam}", b = "${bParam}"</p>
                </div>
                <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
            `;
            return res.end(getHtmlTemplate('Lỗi giá trị', content));
        }

        const sum = a + b;
        res.statusCode = 200;
        const content = `
            <div class="result-box">
                <div class="result-title">Tổng = ${sum}</div>
                <p class="result-detail">Phép tính: <strong>${a} + ${b} = ${sum}</strong></p>
            </div>
            <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
        `;
        return res.end(getHtmlTemplate('Phép tính tổng', content));
    }

    // 3. Trang chủ / (Chỉ gồm 2 thẻ định danh Lời chào và Phép tính để click chuyển tiếp trang)
    if (pathname === '/' || pathname === '') {
        res.statusCode = 200;
        const content = `
            <div class="grid">
                <!-- Card 1: Lời chào (Hello) -->
                <div class="card-action">
                    <h3>👋 Lời chào</h3>
                    <p>Click chuyển tiếp trang tới <code>/hello?name=Minh</code></p>
                    <a href="/hello?name=Minh" class="btn">Chuyển trang: Lời chào →</a>
                </div>

                <!-- Card 2: Phép tính tổng (Sum) -->
                <div class="card-action">
                    <h3>➕ Phép tính</h3>
                    <p>Click chuyển tiếp trang tới <code>/sum?a=10&b=20</code></p>
                    <a href="/sum?a=10&b=20" class="btn btn-success">Chuyển trang: Phép tính →</a>
                </div>
            </div>
        `;
        return res.end(getHtmlTemplate('Trang chủ', content));
    }

    // 4. Đường dẫn không tồn tại 404
    res.statusCode = 404;
    const notFoundContent = `
        <div class="result-box error">
            <div class="result-title error">404 - Không tìm thấy trang</div>
            <p class="result-detail">Đường dẫn <code>${pathname}</code> không tồn tại trên server.</p>
        </div>
        <a href="/" class="btn btn-secondary">← Quay lại trang chủ</a>
    `;
    res.end(getHtmlTemplate('404 Not Found', notFoundContent));
});

// Khởi chạy server tại cổng 3001
server.listen(port, hostname, () => {
    console.log(`Server đang chạy tại http://${hostname}:${port}/`);
});
