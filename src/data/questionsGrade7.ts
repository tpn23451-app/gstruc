import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_7: Record<string, Question[]> = {
  // ================= BÀI 1: THIẾT BỊ VÀO - RA =================
  'tin7-bai-1': [
    {
      id: 'g7-b1-de-1',
      question: 'Thiết bị nào sau đây là thiết bị VÀO (Input Device) của máy tính?',
      options: ['Bàn phím, Chuột, Máy quét (Scanner)', 'Màn hình máy tính', 'Máy in', 'Loa vi tính'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 5): Thiết bị vào dùng để đưa thông tin vào máy tính như bàn phím, chuột, micro, máy quét.',
      hint: 'Dùng để nhập dữ liệu vào máy tính.',
    },
    {
      id: 'g7-b1-de-2',
      question: 'Thiết bị nào sau đây là thiết bị RA (Output Device) của máy tính?',
      options: ['Màn hình, Máy in, Loa, Máy chiếu', 'Bàn phím', 'Chuột máy tính', 'Microphone'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 6): Thiết bị ra đưa thông tin từ máy tính ra cho người dùng cảm nhận như màn hình, loa, máy in.',
      hint: 'Hiển thị hoặc phát âm thanh ra bên ngoài.',
    },
    {
      id: 'g7-b1-tb-1',
      question: 'Màn hình cảm ứng (Touchscreen) trên điện thoại thông minh thuộc loại thiết bị nào?',
      options: [
        'Vừa là thiết bị vào vừa là thiết bị ra',
        'Chỉ là thiết bị vào',
        'Chỉ là thiết bị ra',
        'Không phải thiết bị vào cũng không phải thiết bị ra'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Màn hình cảm ứng vừa hiển thị hình ảnh (thiết bị ra) vừa tiếp nhận thao tác chạm tay của người dùng (thiết bị vào).',
      hint: 'Vừa hiển thị hình ảnh vừa nhận cảm ứng ngón tay.',
    },
    {
      id: 'g7-b1-kho-1',
      question: 'Cổng kết nối HDMI trên máy tính dùng để làm gì?',
      options: [
        'Truyền đồng thời cả tín hiệu hình ảnh độ nét cao và âm thanh ra màn hình tivi, máy chiếu',
        'Chỉ cấp điện sạc pin',
        'Chỉ truyền tín hiệu mạng nội bộ',
        'Cắm tai nghe đơn thuần'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Cổng HDMI (High-Definition Multimedia Interface) truyền tải cả video và audio chất lượng cao qua 1 sợi cáp.',
      hint: 'Truyền cả hình ảnh và âm thanh chất lượng cao.',
    }
  ],

  // ================= BÀI 2: PHẦN MỀM ỨNG DỤNG =================
  'tin7-bai-2': [
    {
      id: 'g7-b2-de-1',
      question: 'Hệ điều hành (Operating System) có vai trò gì trong máy tính?',
      options: [
        'Quản lí và điều khiển toàn bộ phần cứng cũng như phần mềm hoạt động trơn tru trên máy tính',
        'Chỉ dùng để gõ văn bản',
        'Chỉ dùng để kết nối mạng Wi-Fi',
        'Là trò chơi giải trí'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 10): Hệ điều hành là phần mềm hệ thống điều khiển mọi tài nguyên phần cứng và làm nền tảng chạy các phần mềm ứng dụng.',
      hint: 'Quản lý toàn bộ phần cứng và phần mềm.',
    },
    {
      id: 'g7-b2-tb-1',
      question: 'Phần mềm nào sau đây là một Phần mềm ứng dụng (Application Software)?',
      options: ['Microsoft Word, Scratch, Unikey, Zoom', 'Windows 11', 'macOS Sonoma', 'Linux Ubuntu'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Windows, macOS, Linux là hệ điều hành. Còn Word, Scratch, Unikey là phần mềm ứng dụng phục vụ nhu cầu cụ thể của người dùng.',
      hint: 'Phần mềm phục vụ một công việc cụ thể.',
    },
    {
      id: 'g7-b2-kho-1',
      question: 'Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa Hệ điều hành và Phần mềm ứng dụng?',
      options: [
        'Hệ điều hành bắt buộc phải có để máy tính hoạt động; phần mềm ứng dụng được cài đặt thêm trên nền hệ điều hành theo nhu cầu sử dụng',
        'Máy tính không cần hệ điều hành vẫn chạy được phần mềm ứng dụng',
        'Hệ điều hành không thể cài đặt thêm phần mềm nào',
        'Phần mềm ứng dụng kiểm soát phần cứng tốt hơn hệ điều hành'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Hệ điều hành là nền tảng cốt lõi, không có hệ điều hành thì máy tính không thể hoạt động được.',
      hint: 'Hệ điều hành là nền tảng quản lý, phần mềm ứng dụng chạy trên nền hệ điều hành.',
    }
  ],

  // ================= BÀI 3: QUẢN LÍ DỮ LIỆU TRONG MÁY TÍNH =================
  'tin7-bai-3': [
    {
      id: 'g7-b3-de-1',
      question: 'Tên tệp (File) trong hệ điều hành Windows bao gồm mấy phần?',
      options: [
        'Gồm 2 phần: Phần tên (Name) và Phần mở rộng (Extension), ngăn cách nhau bởi dấu chấm',
        'Chỉ có 1 phần duy nhất',
        'Gồm 4 phần ngăn cách bởi dấu gạch chéo',
        'Gồm các chữ cái in hoa'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 14): Tên tệp gồm phần tên và phần mở rộng cách nhau bởi dấu chấm (ví dụ: BaiTap.docx).',
      hint: 'Phần tên và phần mở rộng (đuôi tệp).',
    },
    {
      id: 'g7-b3-tb-1',
      question: 'Phần mở rộng (đuôi tệp) nào sau đây biểu thị tệp Bảng tính Excel?',
      options: ['.xlsx hoặc .xls', '.docx', '.pptx', '.mp3'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: '.xlsx là tệp bảng tính Excel; .docx là Word; .pptx là PowerPoint; .mp3 là âm thanh.',
      hint: 'Bắt đầu bằng chữ xl (Excel).',
    },
    {
      id: 'g7-b3-kho-1',
      question: 'Đường dẫn tệp "D:\\HocTap\\TinHoc7\\Bai1.docx" cho biết điều gì?',
      options: [
        'Tệp Bai1.docx nằm trong thư mục TinHoc7, thư mục này nằm trong thư mục HocTap trên ổ đĩa D:',
        'Tệp Bai1.docx nằm ở ổ đĩa C',
        'Thư mục TinHoc7 chứa ổ đĩa D',
        'Tệp Bai1.docx chứa thư mục HocTap'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Đường dẫn chỉ rõ vị trí phân cấp từ ổ đĩa gốc D: qua thư mục HocTap đến thư mục con TinHoc7 chứa tệp Bai1.docx.',
      hint: 'Đi từ ổ đĩa D qua thư mục cha rồi đến thư mục con.',
    }
  ],

  // ================= BÀI 4: MẠNG XÃ HỘI =================
  'tin7-bai-4': [
    {
      id: 'g7-b4-de-1',
      question: 'Mạng xã hội (Social Network) là gì?',
      options: [
        'Nền tảng trực tuyến cho phép người dùng tạo hồ sơ cá nhân, kết nối, tương tác và chia sẻ thông tin với cộng đồng',
        'Mạng dây cáp điện thoại thoại',
        'Phần mềm diệt virus máy tính',
        'Một loại máy in màu'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 18): Mạng xã hội là kênh trực tuyến giúp kết nối và chia sẻ thông tin giữa các thành viên.',
      hint: 'Môi trường giao lưu, kết nối bạn bè trực tuyến.',
    },
    {
      id: 'g7-b4-tb-1',
      question: 'Mặt trái nào sau đây em cần cảnh giác khi tham gia mạng xã hội?',
      options: [
        'Nguy cơ nghiện mạng xã hội, bị lộ lọt dữ liệu cá nhân, tin giả mạo và bạo lực mạng',
        'Tất cả thông tin trên mạng xã hội luôn chính xác 100%',
        'Không bao giờ có nguy cơ lừa đảo',
        'Làm tăng thị lực của mắt'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Mạng xã hội tiềm ẩn nguy cơ nghiện ngập, mất tập trung học tập, tin giả mạo và bắt nạt trên không gian mạng.',
      hint: 'Nguy cơ nghiện, tin giả, lộ thông tin riêng tư.',
    },
    {
      id: 'g7-b4-kho-1',
      question: 'Khi phát hiện một thông tin sai sự thật hoặc bôi nhọ bạn bè trên mạng xã hội, hành động ĐÚNG ĐẮN NHẤT của em là gì?',
      options: [
        'Không like, không chia sẻ; báo cáo (Report) bài viết vi phạm và trao đổi với thầy cô, phụ huynh để can thiệp kịp thời',
        'Chia sẻ bài viết cho nhiều người cùng biết',
        'Viết bình luận chửi bới theo đám đông',
        'Tải video về gửi cho toàn trường'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Không tiếp tay lan truyền thông tin độc hại, sử dụng tính năng báo cáo vi phạm và tìm kiếm sự hỗ trợ từ người lớn.',
      hint: 'Không chia sẻ, báo cáo vi phạm và nhờ người lớn hỗ trợ.',
    }
  ],

  // ================= BÀI 5: ỨNG XỬ TRÊN MẠNG =================
  'tin7-bai-5': [
    {
      id: 'g7-b5-de-1',
      question: 'Hành vi nào sau đây thể hiện văn hóa ứng xử tốt trên mạng?',
      options: [
        'Tôn trọng người khác, dùng từ ngữ lịch sự, văn minh và xác thực thông tin trước khi chia sẻ',
        'Sử dụng tài khoản ẩn danh để xúc phạm người khác',
        'Tự ý đăng ảnh của người khác lên mạng khi chưa được phép',
        'Spam tin nhắn làm phiền bạn bè liên tục'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 23): Văn hóa ứng xử trên mạng đòi hỏi tôn trọng người khác, văn minh và tuân thủ pháp luật.',
      hint: 'Lịch sự, tôn trọng người khác.',
    },
    {
      id: 'g7-b5-tb-1',
      question: 'Việc đăng tải hình ảnh riêng tư của người khác lên mạng xã hội mà không có sự đồng ý của họ là hành vi vi phạm điều gì?',
      options: [
        'Vi phạm quyền riêng tư và quyền bảo vệ hình ảnh cá nhân theo pháp luật',
        'Là việc làm hoàn toàn được khuyến khích',
        'Không có ảnh hưởng gì',
        'Chỉ là trò đùa vô hại'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Pháp luật bảo hộ quyền hình ảnh và đời sống riêng tư của công dân. Tự ý đăng ảnh khi chưa được cho phép là vi phạm pháp luật.',
      hint: 'Vi phạm quyền riêng tư của cá nhân.',
    },
    {
      id: 'g7-b5-kho-1',
      question: 'Quy tắc "Dừng lại - Suy nghĩ - Kiểm tra" trước khi chia sẻ thông tin trên Internet giúp em điều gì?',
      options: [
        'Tránh lan truyền tin giả, tin độc hại gây hoang mang dư luận và bảo vệ uy tín của chính mình',
        'Tăng tốc độ truy cập Internet',
        'Tiết kiệm pin cho máy tính',
        'Tự động tăng lượt người theo dõi'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Suy nghĩ thấu đáo và kiểm chứng nguồn tin trước khi bấm share giúp ngăn chặn tin giả và thể hiện trách nhiệm công dân số.',
      hint: 'Tránh lan truyền tin giả và thông tin độc hại.',
    }
  ],

  // ================= BÀI 6: LÀM QUEN VỚI PHẦN MỀM BẢNG TÍNH =================
  'tin7-bai-6': [
    {
      id: 'g7-b6-de-1',
      question: 'Trong phần mềm bảng tính Excel, giao của một cột và một hàng được gọi là gì?',
      options: ['Ô tính (Cell)', 'Trang tính (Sheet)', 'Hộp tên (Name Box)', 'Thanh công thức'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 28): Ô tính (Cell) là giao của một cột và một hàng.',
      hint: 'Giao của cột và hàng.',
    },
    {
      id: 'g7-b6-de-2',
      question: 'Địa chỉ ô tính trong Excel được xác định theo quy tắc nào?',
      options: ['Tên cột ghép với Tên hàng (Ví dụ: B5, C10)', 'Tên hàng ghép với Tên cột (Ví dụ: 5B, 10C)', 'Chỉ bằng một con số', 'Bằng dấu hoa thị *'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Địa chỉ ô gồm chữ cái chỉ cột và chữ số chỉ hàng (như A1, B3, C10).',
      hint: 'Cột trước, hàng sau.',
    },
    {
      id: 'g7-b6-tb-1',
      question: 'Khối ô (Range) từ ô B2 đến ô D6 được viết như thế nào?',
      options: ['B2:D6', 'B2-D6', 'B2..D6', 'B2;D6'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Khối ô trong Excel được biểu diễn bằng địa chỉ ô góc trên bên trái và góc dưới bên phải, ngăn cách bởi dấu hai chấm :.',
      hint: 'Dùng dấu hai chấm :.',
    },
    {
      id: 'g7-b6-kho-1',
      question: 'Mặc định trong bảng tính Excel, dữ liệu kiểu KÍ TỰ (chữ) và dữ liệu kiểu SỐ được căn lề như thế nào trong ô?',
      options: [
        'Dữ liệu kiểu kí tự căn lề TRÁI; dữ liệu kiểu số căn lề PHẢI',
        'Dữ liệu kiểu kí tự căn lề PHẢI; dữ liệu kiểu số căn lề TRÁI',
        'Cả hai đều căn lề giữa',
        'Cả hai đều căn lề trái'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 7 KNTT: Mặc định Excel căn lề trái cho văn bản và căn lề phải cho các con số.',
      hint: 'Chữ căn trái, số căn phải.',
    }
  ],

  // ================= BÀI 7: TÍNH TOÁN TỰ ĐỘNG TRÊN BẢNG TÍNH =================
  'tin7-bai-7': [
    {
      id: 'g7-b7-de-1',
      question: 'Dấu đầu tiên bắt buộc phải gõ vào ô khi nhập công thức hoặc hàm tính toán trong Excel là gì?',
      options: ['Dấu bằng (=)', 'Dấu cộng (+)', 'Dấu chấm hỏi (?)', 'Dấu ngoặc kép (")'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 33): Mọi công thức trong bảng tính đều phải bắt đầu bằng dấu bằng (=).',
      hint: 'Bắt đầu bằng dấu =.',
    },
    {
      id: 'g7-b7-tb-1',
      question: 'Hàm nào trong Excel dùng để tính TRUNG BÌNH CỘNG của một dãy số?',
      options: ['AVERAGE', 'SUM', 'COUNT', 'MAX'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Hàm AVERAGE tính trung bình cộng; SUM tính tổng; COUNT đếm; MAX tìm giá trị lớn nhất.',
      hint: 'AVERAGE nghĩa là trung bình.',
    },
    {
      id: 'g7-b7-kho-1',
      question: 'Tại ô C1 có công thức: =A1+B1. Khi sao chép công thức từ ô C1 xuống ô C2, công thức tại ô C2 sẽ tự động đổi thành gì?',
      options: ['=A2+B2', '=A1+B1', '=B2+C2', '=A3+B3'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Địa chỉ tương đối A1 và B1 sẽ tự động điều chỉnh theo hàng khi sao chép công thức xuống hàng dưới (hàng 1 thành hàng 2).',
      hint: 'Hàng 1 tăng thêm 1 thành hàng 2: =A2+B2.',
    }
  ],

  // ================= BÀI 8: CÔNG CỤ HỖ TRỢ TÍNH TOÁN =================
  'tin7-bai-8': [
    {
      id: 'g7-b8-de-1',
      question: 'Hàm MAX trong Excel dùng để làm gì?',
      options: ['Tìm giá trị LỚN NHẤT trong danh sách số', 'Tìm giá trị nhỏ nhất', 'Tính tổng tất cả các số', 'Đếm các ô có dữ liệu'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Hàm MAX trả về giá trị lớn nhất trong các đối số.',
      hint: 'MAX là maximum (lớn nhất).',
    },
    {
      id: 'g7-b8-tb-1',
      question: 'Hàm MIN trong Excel dùng để làm gì?',
      options: ['Tìm giá trị NHỎ NHẤT trong danh sách số', 'Tính trung bình cộng', 'Làm tròn số', 'Xóa số nhỏ nhất'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Hàm MIN trả về giá trị nhỏ nhất (minimum).',
      hint: 'MIN là minimum (nhỏ nhất).',
    },
    {
      id: 'g7-b8-kho-1',
      question: 'Tính năng AutoFill (nút điền tự động kéo từ góc dưới bên phải ô tính) có tác dụng gì nổi bật?',
      options: [
        'Sao chép nhanh công thức hoặc tự động tạo dãy số/ngày tháng liên tiếp theo quy luật',
        'Xóa sạch dữ liệu trong bảng tính',
        'Đóng bảng tính tự động',
        'Tắt máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'AutoFill cho phép kéo sao chép công thức xuống các ô dưới hoặc sinh dãy số liên tiếp 1, 2, 3... cực kỳ nhanh chóng.',
      hint: 'Sao chép nhanh công thức và điền dữ liệu theo quy luật.',
    }
  ],

  // ================= BÀI 9: TRÌNH BÀY BẢNG TÍNH =================
  'tin7-bai-9': [
    {
      id: 'g7-b9-de-1',
      question: 'Để kẻ đường viền khung cho bảng tính trong Excel, em chọn lệnh nào trong nhóm lệnh Font?',
      options: ['Borders', 'Bold', 'Italic', 'Underline'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Lệnh Borders trên thanh Ribbon cho phép kẻ đường viền quanh ô hoặc toàn bộ bảng tính.',
      hint: 'Borders nghĩa là đường viền.',
    },
    {
      id: 'g7-b9-tb-1',
      question: 'Để định dạng hiển thị số tiền có dấu phân cách hàng nghìn (ví dụ 100,000 VND), em chọn lệnh định dạng nào?',
      options: ['Comma Style (Biểu tượng dấu phẩy)', 'Percent Style (%)', 'Decrease Decimal', 'Increase Indent'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Nút Comma Style (dấu phẩy) trên nhóm Number dùng để thêm dấu phân cách hàng nghìn.',
      hint: 'Biểu tượng dấu phẩy trên thanh Number.',
    },
    {
      id: 'g7-b9-kho-1',
      question: 'Nút lệnh Merge & Center trong Excel dùng để làm gì?',
      options: [
        'Gộp các ô được chọn thành một ô duy nhất và căn lề giữa dữ liệu',
        'Xóa các ô được chọn',
        'Tách ô thành nhiều ô nhỏ',
        'Đổi màu nền bảng tính'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Merge & Center gộp nhiều ô thành 1 ô lớn và căn giữa văn bản (thường dùng làm tiêu đề bảng biểu).',
      hint: 'Gộp ô và căn giữa tiêu đề.',
    }
  ],

  // ================= BÀI 11: TẠO BÀI TRÌNH CHIẾU =================
  'tin7-bai-11': [
    {
      id: 'g7-b11-de-1',
      question: 'Phần mềm nào sau đây dùng phổ biến nhất để thiết kế bài trình chiếu báo cáo?',
      options: ['Microsoft PowerPoint', 'Microsoft Excel', 'Notepad', 'Calculator'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'PowerPoint là phần mềm chuyên dụng tạo bài thuyết trình đa phương tiện.',
      hint: 'PowerPoint.',
    },
    {
      id: 'g7-b11-tb-1',
      question: 'Trang đầu tiên của bài trình chiếu thường có vai trò gì?',
      options: [
        'Trang tiêu đề (chứa tên chủ đề bài thuyết trình, tên người báo cáo / nhóm thực hiện)',
        'Trang kết thúc cảm ơn',
        'Trang liệt kê mục lục dài 10 trang',
        'Để trắng không ghi gì'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 7 KNTT (Trang 52): Trang đầu tiên là Title Slide giới thiệu tiêu đề và tác giả bài trình chiếu.',
      hint: 'Trang tiêu đề giới thiệu tên chủ đề và tác giả.',
    },
    {
      id: 'g7-b11-kho-1',
      question: 'Quy tắc nào sau đây giúp tạo một bài trình chiếu chuyên nghiệp, dễ theo dõi?',
      options: [
        'Mỗi trang chiếu chỉ nên truyền tải 1 ý chính, chữ ngắn gọn, phối màu tương phản rõ rệt giữa chữ và màu nền',
        'Chèn càng nhiều chữ càng tốt, chữ kín đặc trang',
        'Dùng 10 phông chữ khác nhau trên cùng 1 trang',
        'Chữ màu vàng trên nền trắng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Bài trình chiếu cần thoáng đãng, dùng gạch đầu dòng, hình ảnh minh họa chất lượng và độ tương phản cao để khán giả đọc rõ từ xa.',
      hint: 'Ngắn gọn, rõ ràng, màu chữ tương phản tốt với nền.',
    }
  ],

  // ================= BÀI 12: ĐỊNH DẠNG ĐỐI TƯỢNG TRÊN TRANG CHIẾU =================
  'tin7-bai-12': [
    {
      id: 'g7-b12-de-1',
      question: 'Trong PowerPoint, hiệu ứng chuyển tiếp giữa các trang chiếu (từ trang này sang trang tiếp theo) nằm ở dải lệnh nào?',
      options: ['Transitions', 'Animations', 'Design', 'Review'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Dải lệnh Transitions chứa các hiệu ứng chuyển đổi giữa các slide.',
      hint: 'Transitions là chuyển cảnh giữa các slide.',
    },
    {
      id: 'g7-b12-tb-1',
      question: 'Dải lệnh Animations trong PowerPoint dùng để tạo hiệu ứng cho đối tượng nào?',
      options: [
        'Các đối tượng trên trang chiếu (như đoạn văn bản, hình ảnh, sơ đồ)',
        'Chuyển cả slide sang slide mới',
        'Chỉnh sửa âm lượng loa máy tính',
        'Đổi độ phân giải màn hình'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Animations tạo hiệu ứng chuyển động cho các phần tử bên trong slide (chữ bay vào, ảnh xoay...).',
      hint: 'Hiệu ứng cho từng chữ và hình ảnh trong slide.',
    },
    {
      id: 'g7-b12-kho-1',
      question: 'Phím tắt nào dùng để BẮT ĐẦU TRÌNH CHIẾU toàn màn hình từ trang đầu tiên trong PowerPoint?',
      options: ['F5', 'F1', 'Ctrl + S', 'Esc'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Nhấn F5 để bắt đầu trình chiếu từ slide đầu tiên; Shift + F5 để chiếu từ slide hiện tại.',
      hint: 'Phím chức năng F5.',
    }
  ],

  // ================= BÀI 14: THUẬT TOÁN TÌM KIẾM TUẦN TỰ =================
  'tin7-bai-14': [
    {
      id: 'g7-b14-de-1',
      question: 'Thuật toán tìm kiếm tuần tự dừng lại khi nào?',
      options: [
        'Khi tìm thấy phần tử cần tìm hoặc khi đã duyệt hết toàn bộ danh sách mà không tìm thấy',
        'Chỉ dừng lại khi máy tính hết pin',
        'Chỉ dừng lại sau đúng 1 bước',
        'Không bao giờ dừng lại'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT: Thuật toán dừng lại ngay khi tìm thấy khóa hoặc khi duyệt hết danh sách.',
      hint: 'Tìm thấy thì dừng, hoặc duyệt hết danh sách thì dừng.',
    },
    {
      id: 'g7-b14-tb-1',
      question: 'Trong trường hợp xấu nhất, để tìm một số trong danh sách gồm N phần tử bằng tìm kiếm tuần tự, ta cần thực hiện bao nhiêu lần so sánh?',
      options: ['N lần so sánh', '1 lần', 'N / 2 lần', 'N * N lần'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Trường hợp xấu nhất là phần tử nằm ở cuối cùng hoặc không có trong danh sách, phải so sánh đủ N lần.',
      hint: 'Phải duyệt hết N phần tử.',
    },
    {
      id: 'g7-b14-kho-1',
      question: 'Ưu điểm lớn nhất của thuật toán tìm kiếm tuần tự so với tìm kiếm nhị phân là gì?',
      options: [
        'Có thể áp dụng trên mọi danh sách bất kỳ, kể cả danh sách CHƯA ĐƯỢC SẮP XẾP',
        'Tốc độ luôn nhanh hơn trên mọi tập dữ liệu khổng lồ',
        'Chỉ tốn 1 phép toán duy nhất',
        'Không cần máy tính vẫn chạy tự động'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Tìm kiếm tuần tự không đòi hỏi danh sách phải sắp xếp trước, dữ liệu lộn xộn vẫn tìm được.',
      hint: 'Không cần sắp xếp trước danh sách.',
    }
  ],

  // ================= BÀI 15: THUẬT TOÁN TÌM KIẾM NHỊ PHÂN =================
  'tin7-bai-15': [
    {
      id: 'g7-b15-de-1',
      question: 'Thuật toán tìm kiếm nhị phân chia đôi danh sách cần tìm kiếm thành mấy phần ở mỗi bước lặp?',
      options: ['2 phần bằng nhau (nửa trái và nửa phải)', '3 phần', '10 phần', 'Không chia'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 74): Tìm kiếm nhị phân so sánh với phần tử ở giữa rồi loại bỏ một nửa danh sách.',
      hint: 'Nhị phân nghĩa là chia thành 2 phần.',
    },
    {
      id: 'g7-b15-tb-1',
      question: 'Cho dãy tăng dần [2, 5, 8, 12, 16, 23, 38, 56, 72]. Khi tìm số 56, bước 1 so sánh với số 16 (ở giữa). Vì 56 > 16, thuật toán sẽ làm gì tiếp theo?',
      options: [
        'Thu hẹp phạm vi tìm kiếm sang nửa bên PHẢI (từ số 23 đến 72)',
        'Thu hẹp sang nửa bên trái (từ 2 đến 12)',
        'Dừng lại kết luận không tìm thấy',
        'Đổi chỗ số 56 với số 16'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Vì dãy tăng dần và 56 > 16 nên chắc chắn 56 chỉ có thể nằm ở nửa bên phải của số 16.',
      hint: 'Tìm ở nửa bên phải vì 56 lớn hơn số ở giữa.',
    },
    {
      id: 'g7-b15-kho-1',
      question: 'Với danh sách đã sắp xếp gồm 1000 phần tử, số lần so sánh tối đa của thuật toán tìm kiếm nhị phân là khoảng bao nhiêu?',
      options: ['Khoảng 10 lần (vì 2^10 = 1024)', 'Khoảng 500 lần', 'Khoảng 1000 lần', 'Chỉ 1 lần'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Mỗi lần chia đôi danh sách: 1000 -> 500 -> 250 -> 125 -> 63 -> 32 -> 16 -> 8 -> 4 -> 2 -> 1. Tối đa chỉ mất 10 lần so sánh!',
      hint: '2 lũy thừa 10 bằng 1024 nên tối đa chỉ 10 bước.',
    }
  ],

  // ================= BÀI 16: THUẬT TOÁN SẮP XẾP NỔI BỌT =================
  'tin7-bai-16': [
    {
      id: 'g7-b16-de-1',
      question: 'Thuật toán sắp xếp nổi bọt so sánh hai phần tử như thế nào?',
      options: ['So sánh 2 phần tử ĐỨNG LIỀN KỀ NHAU', 'So sánh phần tử đầu với phần tử cuối', 'So sánh ngẫu nhiên', 'So sánh với số 0'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Sắp xếp nổi bọt luôn xét từng cặp phần tử liền kề.',
      hint: 'Hai phần tử đứng sát cạnh nhau.',
    },
    {
      id: 'g7-b16-tb-1',
      question: 'Khi sắp xếp dãy số TĂNG DẦN bằng thuật toán nổi bọt, điều kiện để đổi chỗ 2 phần tử liền kề A[i] và A[i+1] là gì?',
      options: ['A[i] > A[i+1]', 'A[i] < A[i+1]', 'A[i] == A[i+1]', 'A[i] == 0'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Sắp xếp tăng dần đòi hỏi phần tử đứng trước phải nhỏ hơn phần tử đứng sau. Do đó nếu A[i] > A[i+1] thì phải hoán đổi vị trí.',
      hint: 'Số trước lớn hơn số sau thì đổi chỗ.',
    },
    {
      id: 'g7-b16-kho-1',
      question: 'Cho dãy 4 số [4, 1, 3, 2]. Sau khi hoàn thành lượt thứ nhất của sắp xếp nổi bọt tăng dần (duyệt từ trái sang phải), dãy số trở thành dãy nào?',
      options: ['[1, 3, 2, 4]', '[1, 2, 3, 4]', '[4, 3, 2, 1]', '[2, 1, 3, 4]'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Cặp (4,1) đổi thành (1,4) -> [1,4,3,2]; Cặp (4,3) đổi thành (3,4) -> [1,3,4,2]; Cặp (4,2) đổi thành (2,4) -> [1,3,2,4]. Số 4 lớn nhất nổi về cuối.',
      hint: 'Từng bước đổi chỗ đưa số 4 về cuối dãy: [1, 3, 2, 4].',
    }
  ],
// ================= BÀI 10: ĐỊNH DẠNG NÂNG CAO CHO BẢNG TÍNH =================
  'tin7-bai-10': [
    {
      id: 'g7-b10-de-1',
      question: 'Để định dạng một ô dữ liệu trong bảng tính Excel hiển thị dạng phần trăm (%), ta chọn nút lệnh nào?',
      options: ['Nút lệnh Percent Style (%) trên nhóm lệnh Number', 'Nút Currency ($)', 'Nút Bold (B)', 'Nút Wrap Text'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 48): Nhấn nút % (Percent Style) trong nhóm Number của dải lệnh Home để đổi giá trị thập phân sang dạng phần trăm.',
      hint: 'Biểu tượng dấu phần trăm %.'
    },
    {
      id: 'g7-b10-tb-1',
      question: 'Muốn gộp nhiều ô liền kề thành một ô duy nhất và căn giữa văn bản (thường dùng cho tiêu đề bảng), ta dùng lệnh gì?',
      options: ['Merge & Center', 'Wrap Text', 'Conditional Formatting', 'AutoSum'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Lệnh Merge & Center gộp các ô đã chọn thành một ô duy nhất và căn dữ liệu ra giữa.',
      hint: 'Merge (gộp) & Center (giữa).'
    },
    {
      id: 'g7-b10-kho-1',
      question: 'Ô tính A1 đang chứa số 0.3546. Khi bấm nút "Percent Style (%)" rồi bấm 1 lần nút "Increase Decimal" (tăng số chữ số thập phân), giá trị hiển thị sẽ là:',
      options: ['35.5%', '35%', '0.35%', '35.46%'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: '0.3546 đổi sang phần trăm là 35.46%. Khi hiển thị mặc định Percent Style là 35%, tăng 1 chữ số thập phân sẽ làm tròn thành 35.5%.',
      hint: 'Nhân với 100 và lấy 1 chữ số sau dấu phẩy kèm làm tròn.'
    }
  ],

  // ================= BÀI 13: THỰC HÀNH TỔNG HỢP BÀI TRÌNH CHIẾU =================
  'tin7-bai-13': [
    {
      id: 'g7-b13-de-1',
      question: 'Để bài trình chiếu đạt hiệu quả truyền tải thông tin tốt nhất khi thuyết trình, nguyên tắc phối màu nào là đúng?',
      options: [
        'Màu chữ phải tương phản rõ rệt với màu nền (ví dụ: chữ tối trên nền sáng hoặc chữ sáng trên nền tối).',
        'Dùng màu chữ trùng với màu nền để người xem phải nhìn thật kỹ.',
        'Mỗi dòng một màu sắc sặc sỡ khác nhau.',
        'Sử dụng nhiều hơn 10 phông chữ khác nhau trên một slide.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 7 KNTT (Trang 65): Màu chữ và nền cần có độ tương phản cao để khán giả ngồi xa vẫn đọc được rõ ràng.',
      hint: 'Màu chữ và nền tương phản rõ rệt.'
    },
    {
      id: 'g7-b13-tb-1',
      question: 'Quy tắc "6x6" hoặc "7x7" trong thiết kế slide thuyết trình có ý nghĩa là gì?',
      options: [
        'Mỗi trang chiếu không nên quá 6-7 dòng chữ, và mỗi dòng không nên quá 6-7 từ ngắn gọn.',
        'Slide phải có đúng 6 hình ảnh và 6 hiệu ứng nhấp nháy.',
        'Thời gian nói một slide phải kéo dài đúng 6 phút.',
        'Mỗi bài chỉ được tạo tối đa 6 trang chiếu.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Quy tắc này giúp slide cô đọng, tránh tình trạng "sao chép cả đoạn văn dài" lên trang chiếu.',
      hint: 'Tối đa 6-7 dòng, mỗi dòng 6-7 từ.'
    }
  ]
};
