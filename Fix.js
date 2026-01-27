import fs from "fs";
import path from "path";

const FILE_NAME = "wallet.txt";
const filePath = path.resolve(process.cwd(), FILE_NAME);

if (!fs.existsSync(filePath)) {
    console.log(`[ERROR] Không tìm thấy file ${FILE_NAME}`);
    process.exit(1);
}

const data = fs.readFileSync(filePath, "utf8");

const converted = data
    .split(/\r?\n/)
    .map(line => line.trim())
    .filter(line => line.length > 0)
    .map(wallet => wallet.toLowerCase())
    .join("\n");

fs.writeFileSync(filePath, converted, "utf8");

console.log(`[DONE] Đã chuyển toàn bộ ví trong ${FILE_NAME} sang chữ thường`);
console.log(`Tổng số ví: ${converted.split("\n").length}`);
