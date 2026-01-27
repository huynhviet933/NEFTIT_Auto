# NEFTIT_Auto
auto Claim dayly , auto stake , auto claim stake , ...... update soon 

https://t.me/GruopHVchannels/203

Tham Gia Discor ( Vip ) : https://discord.gg/gKxvTNu5

Tham gia NHóm VIp Với Chi Phí 8u/1thang Lợi ích tham gia nhóm ViP Sẽ được cấp keey sử dụng các tool vip trong discor hỗ trợ Và tham khao Code các tool dự án mà các bạn đề xuất

Gửi Phí tháng vào đây và chụp hình gửi trực tiếp cho tôi tại discor để xác nhận Role VIp ☕ https://huynhviet933.github.io/donate_viet_mmo/ Có thể tặng tôi ít cafe tại đây



==============================
HƯỚNG DẪN SỬ DỤNG TOOL NEFTIT
==============================

I. GIỚI THIỆU
-------------
Tool dùng để:
- Check & Claim Daily NEFT
- Stake NEFT tự động
- Hỗ trợ chạy đa luồng (multi-thread)
- Hỗ trợ bật / tắt Proxy
- Có kiểm tra License trước khi chạy

Tool giữ nguyên logic gốc, chỉ bổ sung:
- Đa luồng theo config.json
- Màu log
- License check


II. YÊU CẦU MÔI TRƯỜNG
---------------------
- Node.js >= 18
- Hệ điều hành: Windows / Linux / VPS đều chạy được

Cài thư viện cần thiết:
npm install undici uuid axios


III. CẤU TRÚC FILE
------------------
Thư mục tool bao gồm các file sau:

1. wallet.txt
----------------
Danh sách ví EVM (mỗi dòng 1 ví)

Ví dụ:
0x123...
0x456...

2. proxy.txt
----------------
Danh sách proxy (tùy chọn, có thể để trống)

Định dạng:
http://user:pass@ip:port
hoặc
http://ip:port

3. user_agents.txt
----------------
Danh sách User-Agent
Tool sẽ tự xoay UA theo ví

4. profiles.json
----------------
TỰ ĐỘNG SINH – KHÔNG CẦN SỬA

Lưu:
- wallet
- user_agent
- device_id

Dùng lại cho các lần chạy sau để tránh đổi fingerprint

5. config.json
----------------
File cấu hình luồng & proxy

Ví dụ:
{
  "threads": 5,
  "use_proxy": true
}

Giải thích:
- threads  : số luồng chạy song song
- use_proxy: true = dùng proxy | false = chạy IP máy

6. license.key
----------------
Sinh tự động khi nhập key lần đầu
KHÔNG sửa tay

7. file tool 
----------------
Free.js : dành cho Free 
vip.js ; Dành Cho Anh Em Vip 
fix.js : chạy để đổi địa chỉ ví chữu hoa thành thường ( abứt buộc phải địa chỉ thường nha )


IV. CÁCH CHẠY TOOL
------------------
Bước 1: Chuẩn bị file
- wallet.txt : đã có ví
- config.json: chỉnh threads & proxy theo ý

Bước 2: Chạy tool
node v2.js

Bước 3: Nhập License Key (chỉ lần đầu)
- Tool sẽ hỏi: Enter License Key
- Nhập key → ENTER
- Nếu hợp lệ → tool chạy
- Nếu sai → tool dừng


V. LOG TOOL (Ý NGHĨA)
--------------------
- Start Wallet        : Bắt đầu xử lý ví
- Claim Already       : Ví đã claim hôm nay
- Claim +5 NEFT       : Claim thành công
- Stake X NEFT        : Stake toàn bộ NEFT
- Total X | Delay Ys  : Tổng NEFT & thời gian nghỉ

Màu sắc:
- Xanh dương : trạng thái chung
- Xanh lá    : claim thành công
- Vàng       : đã claim
- Tím        : stake
- Đỏ         : lỗi nghiêm trọng (license)


VI. LƯU Ý QUAN TRỌNG
-------------------
- Proxy FAIL sẽ TỰ retry và KHÔNG log
- Tool chạy đa luồng đúng theo threads
- Delay khởi động mỗi luồng: 3–6s
- Logic claim / stake giữ nguyên 100%
- Không chỉnh profiles.json thủ công


VII. KẾT LUẬN
-------------
- Chỉ cần chỉnh wallet.txt + config.json
- Chạy node là xong
- Phù hợp chạy VPS lâu dài, PM2, hoặc chạy tay

==============================
