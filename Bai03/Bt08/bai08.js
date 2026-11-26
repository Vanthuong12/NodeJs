const fs = require("fs");
const fsp = require("fs/promises");
const path = require("path");

const dirPath = path.join(__dirname, "data");
const oldFilePath = path.join(dirPath, "ghichu.txt");
const newFilePath = path.join(dirPath, "ghichu_moi.txt");
const tempFilePath = path.join(dirPath, "tam.txt");

async function run() {
  try {
    // 1. Tạo thư mục data
    await fsp.mkdir(dirPath, { recursive: true });
    console.log("[OK] Đã tạo thư mục 'data'.");

    // 2. Tạo tập tin ghichu.txt và ghi ít nhất 3 dòng nội dung
    const content = [
      "Dòng 1: Làm quen với module fs trong Node.js.",
      "Dòng 2: Thao tác tạo thư mục, ghi và đổi tên tập tin.",
      "Dòng 3: Đọc nội dung và xóa tập tin tạm an toàn."
    ].join("\n");

    await fsp.writeFile(oldFilePath, content, "utf8");
    console.log("[OK] Đã tạo và ghi nội dung vào 'data/ghichu.txt'.");

    // 3. Đổi tên tập tin thành ghichu_moi.txt bằng fs.rename()
    await new Promise((resolve, reject) => {
      fs.rename(oldFilePath, newFilePath, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
    console.log("[OK] Đã đổi tên 'ghichu.txt' thành 'ghichu_moi.txt' bằng fs.rename().");

    // 4. Đọc và hiển thị nội dung sau khi đổi tên
    const updatedContent = await fsp.readFile(newFilePath, "utf8");
    console.log("[OK] Nội dung tập tin 'data/ghichu_moi.txt':");
    console.log("--------------------------------------------------");
    console.log(updatedContent);
    console.log("--------------------------------------------------");

    // 5. Tạo tập tin tam.txt
    await fsp.writeFile(tempFilePath, "Đây là nội dung tập tin tạm.", "utf8");
    console.log("[OK] Đã tạo tập tin tạm 'data/tam.txt'.");

    // 6. Xóa tập tin tam.txt bằng fs.unlink()
    await new Promise((resolve, reject) => {
      fs.unlink(tempFilePath, (err) => {
        if (err) return reject(err);
        resolve();
      });
    });
    console.log("[OK] Đã xóa tập tin tạm 'data/tam.txt' bằng fs.unlink().");

    console.log("\n==> Hoàn tất toàn bộ thao tác quản lý tập tin!");
  } catch (error) {
    console.error("[LỖI] Đã xảy ra lỗi trong quá trình thực thi:", error.message);
  }
}

run();