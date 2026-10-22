# Hướng Dẫn Tích Hợp Google Sheets Bảng Điểm Tự Động

**Google Sheets URL:** [Bảng điểm học sinh](https://docs.google.com/spreadsheets/d/14y9AAFojF-LybLPELwynwVu37e-yTM2-G55gmWlzF7I/edit?gid=0#gid=0)  
**ID Bảng tính:** `14y9AAFojF-LybLPELwynwVu37e-yTM2-G55gmWlzF7I`

---

## Cách 1: Sử dụng Xuất File Excel/CSV (Nhanh nhất & không cần cài đặt)

1. Mở trang web ứng dụng **Gia sư Tin học**.
2. Nhấn vào nút **"Bảng Vàng / Sổ Điểm"**.
3. Bấm nút **"Xuất Excel/CSV"** -> Hệ thống sẽ tải về tệp bảng điểm đầy đủ tiếng Việt có dấu.
4. Mở Google Sheet trên trình duyệt, chọn **Tệp (File) > Nhập (Import) > Tải lên (Upload)** tệp vừa tải.

---

## Cách 2: Tự động đẩy điểm trực tiếp vào Google Sheets mỗi khi học sinh nộp bài (Webhook)

Nếu bạn muốn mỗi khi bất kỳ học sinh nào hoàn thành bài kiểm tra, điểm số tự động ghi một hàng mới vào Google Sheet:

### Bước 1: Mở trình biên tập Apps Script
1. Mở Google Sheet: [Link bảng tính](https://docs.google.com/spreadsheets/d/14y9AAFojF-LybLPELwynwVu37e-yTM2-G55gmWlzF7I/edit?gid=0#gid=0)
2. Trên thanh menu, chọn **Tiện ích mở rộng (Extensions)** > **Apps Script**.

### Bước 2: Dán mã kịch bản sau
Xóa toàn bộ mã mặc định và dán đoạn mã này vào:

```javascript
function doPost(e) {
  try {
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Nếu trang tính chưa có tiêu đề, tự động tạo hàng tiêu đề
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        "Mã bản ghi",
        "Họ và tên",
        "Lớp",
        "Trường",
        "Khối",
        "Đợt thi / Chuyên đề",
        "Tên bài học",
        "Điểm (thang 10)",
        "Tỷ lệ đúng (%)",
        "Số câu đúng",
        "Tổng số câu",
        "Thời gian làm (giây)",
        "Thời gian nộp bài",
        "Xếp loại"
      ]);
      // Định dạng dòng tiêu đề in đậm
      sheet.getRange(1, 1, 1, 14).setFontWeight("bold").setBackground("#e2e8f0");
    }

    var data = JSON.parse(e.postData.contents);

    sheet.appendRow([
      data.id || "",
      data.studentName || "",
      data.className || "",
      data.schoolName || "",
      data.grade || "",
      data.examBatch || "",
      data.lessonTitle || "",
      data.score !== undefined ? data.score : "",
      data.percentage ? data.percentage + "%" : "",
      data.correctCount !== undefined ? data.correctCount : "",
      data.totalCount !== undefined ? data.totalCount : "",
      data.timeSpentSeconds || 0,
      data.date || new Date().toLocaleString("vi-VN"),
      data.rankTitle || ""
    ]);

    return ContentService.createTextOutput(JSON.stringify({ result: "success" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (error) {
    return ContentService.createTextOutput(JSON.stringify({ result: "error", message: error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
```

### Bước 3: Triển khai (Deploy) làm Web App
1. Nhấn nút **Triển khai (Deploy)** ở góc trên bên phải > chọn **Triển khai mới (New deployment)**.
2. Tại mục bánh răng (Chọn loại), chọn **Ứng dụng web (Web app)**.
3. Cấu hình:
   - **Mô tả**: Nhận điểm thi Tin học.
   - **Thực thi dưới dạng (Execute as)**: **Tôi (email của bạn)**.
   - **Ai có quyền truy cập (Who has access)**: **Bất kỳ ai (Anyone)**.
4. Bấm **Triển khai (Deploy)**, cấp quyền truy cập tài khoản Google.
5. Sao chép đường link **URL ứng dụng web (Web app URL)** (dạng `https://script.google.com/macros/s/.../exec`).

### Bước 4: Lưu URL vào ứng dụng
- Mở ứng dụng web Gia sư Tin học, nhấn F12 (Console) và gõ lệnh sau để lưu Webhook URL:
  ```javascript
  localStorage.setItem('ontap_gsheet_webhook_url', 'DÁN_LINK_WEB_APP_URL_VÀO_ĐÂY');
  ```
Từ thời điểm này, mỗi khi có bài nộp, điểm số sẽ tự động gửi thẳng vào Google Sheet của bạn!
