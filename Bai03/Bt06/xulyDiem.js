/**
 * Module xulyDiem.js
 * Chứa các hàm xử lý điểm và xếp loại học lực cho sinh viên
 */

/**
 * Tính điểm trung bình của 3 môn học
 * @param {number} m1 - Điểm môn 1
 * @param {number} m2 - Điểm môn 2
 * @param {number} m3 - Điểm môn 3
 * @returns {number} Điểm trung bình làm tròn 2 chữ số thập phân
 */
function tinhDiemTrungBinh(m1, m2, m3) {
    const dtb = (m1 + m2 + m3) / 3;
    return Math.round(dtb * 100) / 100;
}

/**
 * Xếp loại học tập dựa trên điểm trung bình
 * Quy định:
 * - Giỏi: từ 8.0 trở lên
 * - Khá: từ 6.5 đến dưới 8.0
 * - Trung bình: từ 5.0 đến dưới 6.5
 * - Yếu: dưới 5.0
 * @param {number} dtb - Điểm trung bình
 * @returns {string} Xếp loại học tập
 */
function xepLoai(dtb) {
    if (dtb >= 8.0) {
        return "Giỏi";
    } else if (dtb >= 6.5) {
        return "Khá";
    } else if (dtb >= 5.0) {
        return "Trung bình";
    } else {
        return "Yếu";
    }
}

// Xuất các hàm bằng module.exports
module.exports = {
    tinhDiemTrungBinh,
    xepLoai
};
