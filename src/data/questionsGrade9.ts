import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_9: Record<string, Question[]> = {
  // ================= BÀI 1: THẾ GIỚI KĨ THUẬT SỐ =================
  'tin9-bai-1': [
    {
      id: 'g9-b1-de-1',
      question: 'Thiết bị nào sau đây là thiết bị số thông minh có gắn bộ xử lí thông tin (CPU/Microcontroller)?',
      options: ['Điện thoại thông minh, Robot hút bụi, Đồng hồ thông minh Smartwatch', 'Cái bàn gỗ', 'Chiếc quạt cói', 'Bút bi truyền thống'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 5): Các thiết bị số hiện đại đều tích hợp bộ vi xử lí để tự động hoá hoạt động và xử lý dữ liệu.',
      hint: 'Thiết bị có vi mạch điện tử xử lý thông tin.',
    },
    {
      id: 'g9-b1-tb-1',
      question: 'Máy tính và công nghệ thông tin giúp nâng cao hiệu quả trong lĩnh vực y tế như thế nào?',
      options: [
        'Hỗ trợ chẩn đoán bệnh từ xa, phân tích hình ảnh MRI/CT bằng AI và quản lí hồ sơ bệnh án điện tử',
        'Tự động sản xuất thuốc không cần kiểm nghiệm',
        'Thay thế hoàn toàn bác sĩ trong 100% ca bệnh',
        'Chỉ dùng để bật tắt đèn bệnh viện'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Tin học đóng vai trò hỗ trợ bác sĩ chẩn đoán hình ảnh chính xác, lưu trữ bệnh án số và phẫu thuật robot chuẩn xác.',
      hint: 'Chẩn đoán hình ảnh, hồ sơ bệnh án điện tử.',
    },
    {
      id: 'g9-b1-kho-1',
      question: 'Tác động tiêu cực của kỉ nguyên số đối với con người nếu sử dụng thiết bị số thiếu kiểm soát là gì?',
      options: [
        'Lối sống ít vận động, nguy cơ mắc các bệnh về mắt/cột sống, giảm tương tác xã hội thực tế và phụ thuộc công nghệ',
        'Làm tăng tuổi thọ con người tự động',
        'Tự động chữa lành mọi bệnh tật',
        'Làm cho thời gian trôi chậm lại'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Lạm dụng thiết bị số gây hại sức khỏe thể chất và tâm lý, làm giảm giao tiếp trực tiếp trong gia đình và xã hội.',
      hint: 'Ít vận động, giảm tương tác xã hội, phụ thuộc công nghệ.',
    }
  ],

  // ================= BÀI 2: THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ =================
  'tin9-bai-2': [
    {
      id: 'g9-b2-de-1',
      question: 'Bốn tiêu chí cơ bản để đánh giá chất lượng thông tin trong giải quyết vấn đề gồm những gì?',
      options: [
        'Tính mới (cập nhật), Tính chính xác, Tính đầy đủ, Tính sử dụng được',
        'Độ dài, Màu sắc, Số lượt like, Tác giả ẩn danh',
        'Chữ in hoa, Đắt tiền, Quen thuộc, Nhiều hình vẽ',
        'Tốc độ tải, Dung lượng lớn, Nhạc nền to, Đẹp mắt'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 9): 4 tiêu chí cốt lõi đánh giá thông tin là: Tính mới, Tính chính xác, Tính đầy đủ và Tính sử dụng được.',
      hint: 'Mới, chính xác, đầy đủ, sử dụng được.',
    },
    {
      id: 'g9-b2-tb-1',
      question: 'Em cần xem dự báo thời tiết cho chuyến dã ngoại vào ngày mai. Nguồn tin nào sau đây có TÍNH CHÍNH XÁC VÀ ĐÁNG TIN CẬY CAO NHẤT?',
      options: [
        'Cổng thông tin điện tử của Trung tâm Dự báo Khí tượng Thủy văn Quốc gia (.gov.vn)',
        'Một bình luận ẩn danh trên diễn đàn mạng xã hội',
        'Tin đồn truyền miệng của nhóm bạn',
        'Trang web bán hàng quảng cáo áo mưa'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Cơ quan khí tượng nhà nước (.gov.vn) có chuyên môn nghiệp vụ và hệ thống đo lường hiện đại nên thông tin có độ tin cậy cao nhất.',
      hint: 'Nguồn tin chính thống của cơ quan chuyên môn nhà nước (.gov.vn).',
    },
    {
      id: 'g9-b2-kho-1',
      question: 'Một bản tin thông báo lịch thi nhưng thiếu thông tin về "Địa điểm thi và giờ bắt đầu", bản tin đó vi phạm tiêu chí nào trong 4 tiêu chí chất lượng thông tin?',
      options: ['Tính đầy đủ', 'Tính mới', 'Tính sử dụng được', 'Tính bảo mật'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Bản tin thiếu các yếu tố cốt lõi (thời gian, địa điểm) để thí sinh có thể đi thi, nên vi phạm tiêu chí Tính đầy đủ.',
      hint: 'Thiếu thông tin quan trọng nên không đầy đủ.',
    }
  ],

  // ================= BÀI 4: MỘT SỐ VẤN ĐỀ PHÁP LÍ, ĐẠO ĐỨC, XÃ HỘI =================
  'tin9-bai-4': [
    {
      id: 'g9-b4-de-1',
      question: 'Phần mềm nguồn mở (Open Source Software) có đặc điểm nổi bật nào?',
      options: [
        'Mã nguồn được công khai, người dùng có quyền tự do sử dụng, nghiên cứu, sửa đổi và phân phối lại theo giấy phép',
        'Bắt buộc phải trả phí bản quyền rất đắt',
        'Không được phép xem mã nguồn',
        'Chỉ chạy được trên máy tính của một hãng duy nhất'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 17): Phần mềm nguồn mở cung cấp mã nguồn công khai (như Linux, GIMP, LibreOffice).',
      hint: 'Công khai mã nguồn, tự do sử dụng và cải tiến.',
    },
    {
      id: 'g9-b4-tb-1',
      question: 'Hành vi sử dụng phần mềm thương mại có bản quyền đã bị "bẻ khóa" (crack) vi phạm điều gì?',
      options: [
        'Vi phạm Luật Sở hữu trí tuệ và quyền tác giả của nhà phát triển phần mềm',
        'Là việc làm được luật pháp khuyến khích',
        'Không vi phạm gì vì trên mạng chia sẻ miễn phí',
        'Chỉ là vi phạm nội quy trường học'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Dùng phần mềm crack là vi phạm bản quyền tác giả và còn tiềm ẩn nguy cơ nhiễm mã độc, trojan đánh cắp thông tin.',
      hint: 'Vi phạm bản quyền sở hữu trí tuệ.',
    },
    {
      id: 'g9-b4-kho-1',
      question: 'Giấy phép Creative Commons (CC) thường được áp dụng cho mục đích gì?',
      options: [
        'Giúp tác giả chia sẻ tác phẩm số một cách hợp pháp với các điều kiện bản quyền linh hoạt cho cộng đồng',
        'Cấm tất cả mọi người xem tác phẩm',
        'Bắt buộc người xem phải trả tiền cho mỗi lượt nhấp chuột',
        'Chuyển quyền sở hữu cho chính phủ'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Giấy phép CC là chuẩn chia sẻ bản quyền sáng tạo phổ biến trên Internet, cho phép tái sử dụng có điều kiện (ghi nguồn, phi thương mại...).',
      hint: 'Chia sẻ tác phẩm với các điều kiện bản quyền linh hoạt.',
    }
  ],

  // ================= BÀI 5: PHẦN MỀM MÔ PHỎNG =================
  'tin9-bai-5': [
    {
      id: 'g9-b5-de-1',
      question: 'Phần mềm mô phỏng (Simulation Software) là gì?',
      options: [
        'Phần mềm tái tạo lại các hiện tượng, quá trình thực tế trong thế giới ảo nhằm phục vụ học tập, nghiên cứu',
        'Phần mềm nghe nhạc trực tuyến',
        'Phần mềm gõ dấu Tiếng Việt',
        'Trình duyệt web'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 21): Phần mềm mô phỏng mô hình hóa các hiện tượng tự nhiên, xã hội hoặc kỹ thuật trong môi trường máy tính.',
      hint: 'Mô phỏng lại hiện tượng thực tế trên máy tính.',
    },
    {
      id: 'g9-b5-tb-1',
      question: 'Ưu điểm lớn nhất của việc dùng phần mềm mô phỏng (như PhET) trong học tập môn Khoa học tự nhiên là gì?',
      options: [
        'An toàn tuyệt đối (không sợ cháy nổ, chất độc hại), chi phí thấp và có thể quan sát hiện tượng cực nhỏ hoặc cực lớn',
        'Không cần học bài vẫn được điểm 10',
        'Thay thế hoàn toàn các trường học',
        'Tự động làm bài tập hộ học sinh'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Phần mềm mô phỏng cho phép thử nghiệm các thí nghiệm nguy hiểm, tốn kém hoặc vô hình (nguyên tử, chuyển động hành tinh) một cách an toàn.',
      hint: 'An toàn, chi phí thấp, trực quan sinh động.',
    },
    {
      id: 'g9-b5-kho-1',
      question: 'Phần mềm PhET Interactive Simulations (do Đại học Colorado phát triển) thường mô phỏng các lĩnh vực khoa học nào?',
      options: ['Vật lí, Hóa học, Sinh học, Toán học và Khoa học Trái Đất', 'Chỉ dạy nấu ăn', 'Chỉ dịch tiếng nước ngoài', 'Chỉ chỉnh sửa video'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'PhET là dự án mô phỏng giáo dục tương tác nổi tiếng toàn cầu cho các môn STEM.',
      hint: 'Các môn STEM: Vật lý, Hóa học, Sinh học, Toán học.',
    }
  ],

  // ================= BÀI 9A: CÔNG CỤ XÁC THỰC DỮ LIỆU (DATA VALIDATION) =================
  'tin9-bai-9a': [
    {
      id: 'g9-b9a-de-1',
      question: 'Công cụ Data Validation trong Excel có chức năng chính là gì?',
      options: [
        'Thiết lập quy tắc giới hạn dữ liệu nhập vào ô tính, ngăn ngừa sai sót dữ liệu',
        'Xóa bảng tính tự động',
        'Đổi phông chữ toàn bộ máy tính',
        'Tắt tiếng loa máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 38): Data Validation dùng để kiểm soát và xác thực dữ liệu đầu vào trong Excel.',
      hint: 'Xác thực và giới hạn dữ liệu nhập vào ô.',
    },
    {
      id: 'g9-b9a-tb-1',
      question: 'Muốn tạo danh sách lựa chọn thả xuống (Drop-down list) trong ô tính, tại mục Allow của Data Validation ta chọn kiểu nào?',
      options: ['List', 'Any value', 'Whole number', 'Date'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Chọn kiểu List và nhập nguồn dữ liệu (Source) để tạo danh sách chọn dạng thả xuống tiện lợi.',
      hint: 'Chọn List để tạo danh sách thả xuống.',
    },
    {
      id: 'g9-b9a-kho-1',
      question: 'Thẻ "Error Alert" trong hộp thoại Data Validation có tác dụng gì?',
      options: [
        'Hiển thị thông báo lỗi cảnh báo khi người dùng nhập dữ liệu không thỏa mãn quy tắc đã đặt',
        'Tự động tắt phần mềm Excel',
        'Gửi email cho giáo viên',
        'Xóa hết dữ liệu của hàng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Error Alert đưa ra thông điệp cảnh báo rõ ràng hướng dẫn người dùng nhập đúng định dạng khi xảy ra lỗi nhập liệu.',
      hint: 'Hiển thị thông báo khi nhập sai quy tắc.',
    }
  ],

  // ================= BÀI 10A: SỬ DỤNG HÀM COUNTIF =================
  'tin9-bai-10a': [
    {
      id: 'g9-b10a-de-1',
      question: 'Cú pháp chuẩn của hàm COUNTIF trong bảng tính Excel là gì?',
      options: ['=COUNTIF(range, criteria)', '=COUNTIF(criteria, range)', '=COUNTIF(number1, number2)', '=COUNTIF(value)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 43): =COUNTIF(range, criteria) với range là vùng dữ liệu và criteria là điều kiện đếm.',
      hint: '=COUNTIF(phạm_vi, điều_kiện).',
    },
    {
      id: 'g9-b10a-tb-1',
      question: 'Để đếm số học sinh có giới tính là "Nữ" trong cột Giới tính từ B2 đến B40, công thức nào sau đây là ĐÚNG?',
      options: ['=COUNTIF(B2:B40, "Nữ")', '=COUNTIF("Nữ", B2:B40)', '=COUNT(B2:B40, "Nữ")', '=SUMIF(B2:B40, "Nữ")'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Cú pháp đúng: =COUNTIF(B2:B40, "Nữ"). Chuỗi điều kiện văn bản phải đặt trong cặp dấu ngoặc kép.',
      hint: 'Phạm vi B2:B40 trước, điều kiện "Nữ" sau.',
    },
    {
      id: 'g9-b10a-kho-1',
      question: 'Để đếm số sản phẩm có giá bán lớn hơn hoặc bằng 100,000 đồng trong cột C từ C2 đến C50, công thức nào viết CHUẨN XÁC?',
      options: ['=COUNTIF(C2:C50, ">=100000")', '=COUNTIF(C2:C50, >=100000)', '=COUNTIF(>=100000, C2:C50)', '=COUNT(C2:C50 > 100000)'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Toán tử so sánh trong điều kiện của COUNTIF bắt buộc phải bao bọc trong cặp dấu ngoặc kép: ">=100000".',
      hint: 'Điều kiện so sánh đặt trong dấu ngoặc kép ">=100000".',
    }
  ],

  // ================= BÀI 11A: SỬ DỤNG HÀM SUMIF =================
  'tin9-bai-11a': [
    {
      id: 'g9-b11a-de-1',
      question: 'Hàm SUMIF trong Excel dùng để làm gì?',
      options: [
        'Tính tổng các ô trong một phạm vi thỏa mãn một điều kiện xác định',
        'Đếm số ô có chứa chữ cái',
        'Tìm số lớn nhất',
        'Chia trung bình cộng'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 48): Hàm SUMIF tính tổng có điều kiện.',
      hint: 'SUM (tổng) + IF (nếu thỏa điều kiện).',
    },
    {
      id: 'g9-b11a-tb-1',
      question: 'Cú pháp đầy đủ của hàm SUMIF là gì?',
      options: ['=SUMIF(range, criteria, [sum_range])', '=SUMIF(criteria, range)', '=SUMIF(sum_range, range)', '=SUMIF(range, sum_range)'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'range: vùng kiểm tra điều kiện; criteria: điều kiện; sum_range: vùng tính tổng thực tế.',
      hint: 'range, criteria, sum_range.',
    },
    {
      id: 'g9-b11a-kho-1',
      question: 'Cho bảng theo dõi chi tiêu: Cột B (B2:B20) là Tên danh mục chi ("Ăn uống", "Học tập"...); Cột C (C2:C20) là Số tiền chi. Công thức tính tổng tiền chi cho danh mục "Học tập" là gì?',
      options: [
        '=SUMIF(B2:B20, "Học tập", C2:C20)',
        '=SUMIF(C2:C20, "Học tập", B2:B20)',
        '=SUMIF("Học tập", B2:B20, C2:C20)',
        '=COUNTIF(B2:B20, "Học tập")'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Vùng kiểm tra là B2:B20, điều kiện là "Học tập", vùng cộng tiền là C2:C20: =SUMIF(B2:B20, "Học tập", C2:C20).',
      hint: 'Kiểm tra cột B, điều kiện "Học tập", tính tổng cột C.',
    }
  ],

  // ================= BÀI 12A: SỬ DỤNG HÀM IF & QUẢN LÍ TÀI CHÍNH =================
  'tin9-bai-12a': [
    {
      id: 'g9-b12a-de-1',
      question: 'Cú pháp cơ bản của hàm điều kiện IF trong Excel là gì?',
      options: [
        '=IF(logical_test, value_if_true, value_if_false)',
        '=IF(value_if_true, logical_test)',
        '=IF(condition, value1, value2, value3)',
        '=IF(test)'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 52): =IF(điều_kiện, giá_trị_nếu_đúng, giá_trị_nếu_sai).',
      hint: 'Điều kiện, giá trị đúng, giá trị sai.',
    },
    {
      id: 'g9-b12a-tb-1',
      question: 'Quy tắc quản lí tài chính cá nhân 50/30/20 phân chia thu nhập theo tỉ lệ nào?',
      options: [
        '50% cho nhu cầu thiết yếu, 30% cho mong muốn cá nhân, 20% cho tiết kiệm và dự phòng',
        '50% mua sắm giải trí, 30% ăn uống, 20% đi chơi',
        '50% tiết kiệm, 50% ăn uống',
        'Chia đều mỗi phần 33%'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 9 KNTT (Trang 54): Quy tắc 50-30-20 chia thu nhập thành: 50% thiết yếu, 30% mong muốn, 20% tiết kiệm.',
      hint: '50% thiết yếu, 30% mong muốn, 20% tiết kiệm.',
    },
    {
      id: 'g9-b12a-kho-1',
      question: 'Tại ô D2 có điểm trung bình. Nếu D2 >= 8.0 thì xếp loại "Giỏi", ngược lại nếu D2 >= 6.5 thì "Khá", còn lại là "Đạt". Công thức hàm IF lồng nhau nào ĐÚNG?',
      options: [
        '=IF(D2>=8.0, "Giỏi", IF(D2>=6.5, "Khá", "Đạt"))',
        '=IF(D2>=8.0, "Giỏi", "Khá", "Đạt")',
        '=IF(D2>=6.5, "Khá", IF(D2>=8.0, "Giỏi", "Đạt"))',
        '=IF(D2>=8.0, "Đạt", IF(D2>=6.5, "Khá", "Giỏi"))'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Hàm IF lồng kiểm tra từ mức cao nhất trước: =IF(D2>=8.0, "Giỏi", IF(D2>=6.5, "Khá", "Đạt")).',
      hint: 'Kiểm tra >= 8.0 trước, rồi mới kiểm tra tiếp >= 6.5.',
    }
  ],

  // ================= BÀI 13: DỊCH VỤ MẠNG VÀ AN NINH THÔNG TIN =================
  'tin9-bai-13': [
    {
      id: 'g9-b13-de-1',
      question: 'Tường lửa (Firewall) trong hệ thống mạng máy tính có vai trò gì?',
      options: [
        'Kiểm soát và ngăn chặn các truy cập trái phép từ bên ngoài vào mạng nội bộ hoặc máy tính cá nhân',
        'Phòng chống cháy nổ cho thiết bị',
        'Làm mát bộ vi xử lý máy tính',
        'Tăng tốc độ sạc pin cho máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 58): Tường lửa là rào chắn an ninh kiểm soát lưu lượng mạng vào/ra để ngăn ngừa tin tặc.',
      hint: 'Rào chắn an ninh kiểm soát các kết nối mạng.',
    },
    {
      id: 'g9-b13-tb-1',
      question: 'Giao thức HTTPS trên thanh địa chỉ trình duyệt (có biểu tượng ổ khóa) khác với HTTP ở điểm nào?',
      options: [
        'Dữ liệu truyền giữa trình duyệt và máy chủ được mã hóa an toàn bằng chứng chỉ SSL/TLS',
        'HTTPS chỉ dùng cho xem phim',
        'HTTP nhanh hơn HTTPS 100 lần',
        'HTTPS không dùng được trên điện thoại'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Chữ S trong HTTPS viết tắt của Secure. Dữ liệu truyền tải được mã hóa bảo mật chống nghe lén và đánh cắp tài khoản.',
      hint: 'HTTPS có mã hóa dữ liệu an toàn.',
    },
    {
      id: 'g9-b13-kho-1',
      question: 'Hành vi tấn công mạng "Lừa đảo mạo danh" (Phishing) thường được thực hiện qua hình thức nào?',
      options: [
        'Gửi email hoặc tin nhắn giả mạo ngân hàng/nhà trường kèm đường link đăng nhập giả để lừa người dùng nhập mật khẩu',
        'Đến tận nhà lấy cắp máy tính',
        'Cắt đứt dây cáp quang biển',
        'Bấm còi xe lớn làm gián đoạn mạng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Tấn công Phishing tạo website mạo danh y hệt trang thật để đánh lừa người dùng tự cung cấp tên đăng nhập và mật khẩu.',
      hint: 'Giả mạo ngân hàng hoặc dịch vụ uy tín để lừa mật khẩu.',
    }
  ],

  // ================= BÀI 15: ĐỊNH HƯỚNG NGHỀ NGHIỆP TRONG KỶ NGUYÊN SỐ =================
  'tin9-bai-15': [
    {
      id: 'g9-b15-de-1',
      question: 'Nghề nào sau đây là nghề chuyên nghiệp trong lĩnh vực Công nghệ thông tin?',
      options: [
        'Kĩ sư phát triển phần mềm, Chuyên gia an ninh mạng, Chuyên viên phân tích dữ liệu AI',
        'Lái xe buýt truyền thống',
        'Thợ may trang phục thủ công',
        'Nhân viên bán hoa quả'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 67): Lập trình viên, chuyên gia bảo mật, kỹ sư trí tuệ nhân tạo là các nghề ICT trọng điểm.',
      hint: 'Phát triển phần mềm, an ninh mạng, dữ liệu AI.',
    },
    {
      id: 'g9-b15-tb-1',
      question: 'Để chuẩn bị tốt cho các nghề nghiệp trong tương lai ở kỷ nguyên trí tuệ nhân tạo (AI), học sinh THCS cần rèn luyện năng lực nào?',
      options: [
        'Tư duy logic, tư duy giải quyết vấn đề, khả năng tự học công nghệ mới và kỹ năng làm việc nhóm sáng tạo',
        'Chỉ cần học thuộc lòng sách giáo khoa',
        'Không cần học gì vì AI sẽ làm thay hết',
        'Chỉ chơi game cả ngày'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Kỷ nguyên AI đòi hỏi khả năng tư duy giải quyết vấn đề thực tế, khả năng thích ứng linh hoạt và sáng tạo không ngừng.',
      hint: 'Tư duy logic, tự học và sáng tạo thích ứng.',
    },
    {
      id: 'g9-b15-kho-1',
      question: 'Xu hướng ứng dụng Tin học và Trí tuệ nhân tạo trong các ngành nghề truyền thống (nông nghiệp, may mặc, vận tải) mang lại lợi ích gì lớn nhất?',
      options: [
        'Tự động hóa dây chuyền, giảm chi phí, tăng năng suất lao động và tạo ra các sản phẩm chất lượng cao, bền vững',
        'Làm mất đi toàn bộ cây trồng vật nuôi',
        'Làm cho các sản phẩm trở nên đắt đỏ không ai mua được',
        'Không đem lại lợi ích gì'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Chuyển đổi số trong mọi ngành nghề giúp tối ưu hóa chuỗi cung ứng, tự động hóa và nâng cao năng suất đột phá.',
      hint: 'Tự động hóa, tăng năng suất và chất lượng sản phẩm.',
    }
  ],
// ================= BÀI 3: THỰC HÀNH: ĐÁNH GIÁ CHẤT LƯỢNG THÔNG TIN =================
  'tin9-bai-3': [
    {
      id: 'g9-b3-de-1',
      question: 'Khi tìm kiếm thông tin trên Internet để phục vụ bài thuyết trình, 4 tiêu chí cốt lõi để đánh giá chất lượng thông tin là gì?',
      options: [
        'Tính mới, tính chính xác, tính đầy đủ và tính sử dụng được.',
        'Độ dài bài viết, số lượng ảnh, tên miền đắt tiền và số lượt thích ảo.',
        'Chỉ cần thông tin có nhiều người chia sẻ nhất trên mạng xã hội.',
        'Thông tin được viết bằng chữ in hoa toàn bộ.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 12): Bốn tiêu chí đánh giá chất lượng thông tin gồm: Tính mới (thời sự), Tính chính xác (nguồn uy tín), Tính đầy đủ (toàn diện) và Tính sử dụng được (phù hợp mục tiêu).',
      hint: 'Mới - Chính xác - Đầy đủ - Sử dụng được.'
    },
    {
      id: 'g9-b3-tb-1',
      question: 'Để kiểm tra tính xác thực của một thông tin y tế giật gân lan truyền trên mạng xã hội, cách xử lý nào sau đây là KHOA HỌC nhất?',
      options: [
        'Đối chiếu thông tin đó với cổng thông tin chính thức của Bộ Y tế, Tổ chức Y tế Thế giới (WHO) hoặc các bài báo khoa học uy tín.',
        'Chia sẻ ngay lên trang cá nhân kèm lời cảnh báo khẩn cấp.',
        'Nhắn tin cho bạn bè yêu cầu làm theo ngay lập tức.',
        'Tin tưởng 100% vì bài viết có hàng nghìn lượt thả tim.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 9 KNTT (Trang 14): Cần đối chiếu với các nguồn tin chính thống, có kiểm chứng của cơ quan chuyên môn uy tín.',
      hint: 'Đối chiếu với nguồn chính thống của Bộ Y tế hoặc WHO.'
    },
    {
      id: 'g9-b3-kho-1',
      question: 'Dấu hiệu nào sau đây cho thấy một trang tin tức có khả năng cao là trang "tin giả" (Fake News)?',
      options: [
        'Tiêu đề giật gân câu khách (Clickbait), lỗi chính tả nhiều, không có tên tác giả và trích dẫn nguồn mập mờ "theo một chuyên gia giấu tên".',
        'Có bài viết được ký tên nhà nghiên cứu rõ ràng và đăng trên tên miền cơ quan chính phủ (.gov.vn).',
        'Có dữ liệu thống kê từ Viện Thống kê Quốc gia kèm biểu đồ chi tiết.',
        'Có ghi rõ ngày giờ xuất bản và cập nhật chính xác.'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Tin giả thường có tiêu đề câu view gây sốc, nội dung sai ngữ pháp, tác giả nặc danh và thiếu bằng chứng khoa học cụ thể.',
      hint: 'Tiêu đề giật gân, thiếu tên tác giả và nguồn mập mờ.'
    }
  ],

  // ================= BÀI 6: THỰC HÀNH: KHAI THÁC PHẦN MỀM MÔ PHỎNG =================
  'tin9-bai-6': [
    {
      id: 'g9-b6-de-1',
      question: 'Phần mềm mô phỏng (Simulation Software) trong giáo dục mang lại lợi ích nổi bật nào?',
      options: [
        'Giúp học sinh quan sát trực quan các hiện tượng vật lý, hóa học, sinh học nguy hiểm hoặc khó thực hiện trong phòng thí nghiệm thực tế một cách an toàn.',
        'Thay thế hoàn toàn việc đọc sách giáo khoa.',
        'Tự động làm bài thi tốt nghiệp thay cho học sinh.',
        'Chỉ dùng để chơi game giải trí.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 25): Phần mềm mô phỏng giúp học sinh tương tác với các mô hình trực quan, an toàn, tiết kiệm chi phí hóa chất thiết bị.',
      hint: 'Quan sát hiện tượng phức tạp hoặc nguy hiểm một cách an toàn.'
    },
    {
      id: 'g9-b6-tb-1',
      question: 'Nền tảng thí nghiệm ảo tương tác mở nổi tiếng thế giới nào thường được dùng để mô phỏng mạch điện, quang học và chuyển động vật lý?',
      options: ['PhET Interactive Simulations (Đại học Colorado)', 'Phần mềm Unikey', 'Trình duyệt Cốc Cốc', 'Phần mềm nén WinRAR'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 9 KNTT (Trang 26): Nền tảng PhET cung cấp hàng trăm mô phỏng khoa học tương tác miễn phí bằng Tiếng Việt.',
      hint: 'PhET của Đại học Colorado.'
    }
  ],

  // ================= BÀI 7: TRÌNH BÀY THÔNG TIN TRONG TRAO ĐỔI VÀ HỢP TÁC =================
  'tin9-bai-7': [
    {
      id: 'g9-b7-de-1',
      question: 'Khi làm việc nhóm để chuẩn bị bài báo cáo thuyết trình dự án, công cụ nào sau đây cho phép các thành viên cùng soạn thảo slide trực tuyến thời gian thực?',
      options: ['Google Slides hoặc Microsoft PowerPoint Online', 'Phần mềm vẽ Paint', 'Ứng dụng Notepad', 'Máy tính cầm tay Calc'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 31): Các công cụ trình chiếu trên nền tảng đám mây cho phép nhiều người cùng truy cập và chỉnh sửa đồng thời.',
      hint: 'Google Slides hoặc PowerPoint Online.'
    },
    {
      id: 'g9-b7-tb-1',
      question: 'Để bài báo cáo thuyết trình dự án gây ấn tượng tích cực với người nghe, nhóm thuyết trình cần tuân thủ nguyên tắc nào?',
      options: [
        'Bố cục mạch lạc, thông tin cô đọng, sử dụng sơ đồ/biểu đồ trực quan và kết hợp lời nói truyền cảm, tự tin.',
        'Đọc nguyên văn toàn bộ từng chữ có trên slide từ đầu đến cuối.',
        'Bật thật nhiều nhạc nền ồn ào át cả tiếng người thuyết trình.',
        'Chiếu liên tục 100 trang slide trong vòng 5 phút.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Thuyết trình hiệu quả đòi hỏi sự tương tác với khán giả, slide chỉ đóng vai trò hỗ trợ trực quan, không phải bản đọc chép.',
      hint: 'Bố cục mạch lạc, thông tin cô đọng, kết hợp biểu đồ trực quan.'
    }
  ],

  // ================= BÀI 8: THỰC HÀNH: CÔNG CỤ TRỰC TUYẾN XỬ LÍ VÀ CHIA SẺ THÔNG TIN =================
  'tin9-bai-8': [
    {
      id: 'g9-b8-de-1',
      question: 'Khi chia sẻ tệp tài liệu học tập qua Google Drive, quyền chia sẻ nào cho phép người nhận ĐƯỢC PHÉP SỬA nội dung tệp?',
      options: ['Quyền Người chỉnh sửa (Editor)', 'Quyền Người xem (Viewer)', 'Quyền Người nhận xét (Commenter)', 'Quyền Hạn chế (Restricted)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 36): Quyền Editor (Người chỉnh sửa) cho phép thay đổi dữ liệu; Viewer chỉ được xem; Commenter chỉ được thêm nhận xét.',
      hint: 'Editor có nghĩa là người chỉnh sửa.'
    },
    {
      id: 'g9-b8-tb-1',
      question: 'Tính năng "Lịch sử phiên bản" (Version History) trên các dịch vụ đám mây (Google Docs/Drive) có tác dụng gì?',
      options: [
        'Xem lại lịch sử ai đã sửa nội dung gì vào thời điểm nào và có thể khôi phục lại phiên bản cũ khi cần thiết.',
        'Tự động dịch văn bản sang 100 thứ tiếng.',
        'Xóa vĩnh viễn tệp sau 1 ngày sử dụng.',
        'Tăng tốc độ kết nối Internet lên gấp đôi.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Lịch sử phiên bản giúp theo dõi sự đóng góp của từng thành viên trong nhóm và an toàn phục hồi dữ liệu khi bị chỉnh sửa nhầm.',
      hint: 'Xem lại và khôi phục các phiên bản cũ đã lưu.'
    }
  ],

  // ================= BÀI 14: THỰC HÀNH: BẢO MẬT AN TOÀN THÔNG TIN =================
  'tin9-bai-14': [
    {
      id: 'g9-b14-de-1',
      question: 'Phương thức xác thực hai yếu tố (2FA - Two-Factor Authentication) bảo vệ tài khoản người dùng như thế nào?',
      options: [
        'Yêu cầu mật khẩu và thêm một mã xác thực thứ hai (gửi qua tin nhắn SMS hoặc ứng dụng Authenticator) khi đăng nhập từ thiết bị mới.',
        'Yêu cầu nhập mật khẩu đúng 2 lần liên tiếp.',
        'Yêu cầu 2 người cùng nhập mật khẩu một lúc.',
        'Tự động đổi mật khẩu sau mỗi 2 phút.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 61): 2FA kết hợp giữa mật khẩu (điều bạn biết) và thiết bị tin cậy (điều bạn sở hữu) để ngăn chặn tin tặc.',
      hint: 'Mật khẩu kèm mã xác thực gửi về điện thoại.'
    },
    {
      id: 'g9-b14-tb-1',
      question: 'Mật khẩu nào sau đây được coi là MẬT KHẨU MẠNH và AN TOÀN nhất?',
      options: [
        'TinHoc9@KNTT#2026! (Dài trên 12 ký tự, gồm chữ hoa, chữ thường, chữ số và ký tự đặc biệt)',
        '12345678',
        'matkhau123',
        'hovaten2010'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Mật khẩu mạnh phải dài từ 8-12 ký tự trở lên, không chứa thông tin cá nhân dễ đoán và kết hợp chữ hoa, thường, số, ký tự đặc biệt.',
      hint: 'Kết hợp chữ hoa, thường, số và ký tự đặc biệt.'
    }
  ],

  // ================= BÀI 16: DỰ ÁN: KHỞI NGHIỆP CÙNG CÔNG NGHỆ SỐ =================
  'tin9-bai-16': [
    {
      id: 'g9-b16-de-1',
      question: 'Trong dự án "Khởi nghiệp cùng công nghệ số", bước đầu tiên và quan trọng nhất để xây dựng một sản phẩm số thành công là gì?',
      options: [
        'Xác định vấn đề thực tế của khách hàng/người dùng và khảo sát nhu cầu thị trường.',
        'Chi thật nhiều tiền thuê văn phòng lớn.',
        'In tờ rơi quảng cáo khi chưa có sản phẩm.',
        'Bán sản phẩm với giá thật đắt.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 9 KNTT (Trang 72): Khởi nghiệp số bắt nguồn từ việc phát hiện nhu cầu chưa được đáp ứng và dùng công nghệ giải quyết hiệu quả.',
      hint: 'Xác định vấn đề thực tế và nhu cầu người dùng.'
    },
    {
      id: 'g9-b16-tb-1',
      question: 'Công cụ kỹ thuật số nào giúp dự án khởi nghiệp tiếp cận khách hàng tiềm năng với chi phí tiết kiệm nhất?',
      options: [
        'Xây dựng trang web giới thiệu, Fanpage mạng xã hội và kênh video ngắn sáng tạo (TikTok, YouTube Shorts).',
        'Chỉ dùng thư tay gửi qua bưu điện.',
        'Mua biển quảng cáo ngoài trời đắt đỏ hàng tỷ đồng.',
        'Nhắn tin làm phiền (spam) số điện thoại của người lạ.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Marketing số (Digital Marketing) qua website và mạng xã hội là kênh truyền thông có chi phí tối ưu cho các dự án khởi nghiệp trẻ.',
      hint: 'Trang web, mạng xã hội và video ngắn.'
    }
  ]
};
