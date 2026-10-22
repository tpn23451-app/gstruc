import { Question } from '../types/quiz';

export const QUESTIONS_GRADE_6: Record<string, Question[]> = {
  // ================= BÀI 1: THÔNG TIN VÀ DỮ LIỆU =================
  'tin6-bai-1': [
    {
      id: 'g6-b1-de-1',
      question: 'Dữ liệu là gì theo chương trình Tin học 6 Kết Nối Tri Thức?',
      options: [
        'Là thông tin dưới dạng các con số, văn bản, hình ảnh, âm thanh được ghi lại trong máy tính hoặc thiết bị lưu trữ',
        'Là suy nghĩ nảy sinh trong não người',
        'Là tất cả những gì mắt người nhìn thấy trong tự nhiên',
        'Chỉ là các chữ số từ 0 đến 9'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 5): Dữ liệu là thông tin dưới dạng được chứa trong vật mang tin như văn bản, chữ số, hình ảnh, âm thanh.',
      hint: 'Dữ liệu được lưu trong vật mang tin hoặc máy tính.',
    },
    {
      id: 'g6-b1-de-2',
      question: 'Vật mang tin là gì?',
      options: [
        'Vật chứa hoặc truyền tải dữ liệu, thông tin (như sách, báo, ổ cứng, USB, thẻ nhớ...)',
        'Chiếc cặp sách dùng để đựng đồ dùng học tập',
        'Chiếc máy bay chở bưu phẩm',
        'Bút mực dùng để viết bài'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 6): Vật mang tin là vật chứa dữ liệu (giấy viết, thẻ nhớ, USB, đĩa cứng...).',
      hint: 'Vật dùng để lưu trữ và truyền tải dữ liệu.',
    },
    {
      id: 'g6-b1-tb-1',
      question: 'Em đọc dòng chữ "Nhiệt độ ngoài trời hôm nay là 38 độ C", thông tin mà em thu nhận được là gì?',
      options: [
        'Thời tiết hôm nay rất nóng bức, cần che chắn hoặc uống nhiều nước khi ra đường',
        'Chỉ là con số 38',
        'Không có ý nghĩa gì đối với con người',
        'Là chữ cái "độ C"'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 6): Con số "38 độ C" là dữ liệu. Nhận thức "thời tiết rất nóng bức cần uống nhiều nước" chính là thông tin mà não bộ xử lí thu nhận được.',
      hint: 'Thông tin là ý nghĩa đem lại cho nhận thức của con người.',
    },
    {
      id: 'g6-b1-kho-1',
      question: 'Phát biểu nào sau đây phân biệt ĐÚNG NHẤT giữa "Thông tin" và "Dữ liệu"?',
      options: [
        'Dữ liệu là các con số, ký hiệu, hình ảnh ghi lại; còn thông tin là ý nghĩa mà con người rút ra được từ dữ liệu đó',
        'Thông tin và dữ liệu hoàn toàn giống nhau, không có sự khác biệt',
        'Dữ liệu chỉ tồn tại trong não người, thông tin ở trên giấy',
        'Thông tin luôn là các con số, còn dữ liệu là hình ảnh'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Dữ liệu là dạng biểu diễn thông tin trên vật mang tin. Khi con người tiếp nhận và xử lý dữ liệu thì thu được thông tin hữu ích cho hành động.',
      hint: 'Dữ liệu là vật mang tin ghi lại, thông tin là ý nghĩa nhận thức.',
    }
  ],

  // ================= BÀI 2: XỬ LÍ THÔNG TIN =================
  'tin6-bai-2': [
    {
      id: 'g6-b2-de-1',
      question: 'Quá trình xử lí thông tin của con người và máy tính gồm mấy bước cơ bản?',
      options: ['3 bước (Thu nhận, Xử lí, Xuất/Truyền)', '1 bước duy nhất', '5 bước ngẫu nhiên', '10 bước phức tạp'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 8): Quá trình xử lý thông tin gồm: Thu nhận thông tin (Input) -> Xử lý thông tin -> Xuất/Truyền và lưu trữ thông tin (Output).',
      hint: 'Thu nhận -> Xử lý -> Xuất ra.',
    },
    {
      id: 'g6-b2-tb-1',
      question: 'Khi nghe thấy tiếng chuông báo thức reo, em lập tức thức dậy và tắt chuông. Bộ phận nào trong cơ thể đóng vai trò xử lí thông tin?',
      options: ['Bộ não', 'Đôi tai', 'Bàn tay', 'Đôi mắt'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Đôi tai là cơ quan thu nhận âm thanh (dữ liệu vào), bộ não phân tích và đưa ra quyết định thức dậy (xử lý thông tin), bàn tay thực hiện hành động tắt chuông.',
      hint: 'Cơ quan trung ương điều khiển suy nghĩ của con người.',
    },
    {
      id: 'g6-b2-kho-1',
      question: 'Trong máy tính, thiết bị nào đảm nhận chức năng xử lí thông tin trung tâm?',
      options: ['Bộ vi xử lí (CPU)', 'Màn hình máy tính', 'Bàn phím', 'Chuột máy tính'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'CPU (Central Processing Unit) là bộ xử lí trung tâm đóng vai trò như bộ não của máy tính, thực hiện các phép tính và xử lý thông tin.',
      hint: 'Được ví như bộ não của máy tính.',
    }
  ],

  // ================= BÀI 3: THÔNG TIN TRONG MÁY TÍNH =================
  'tin6-bai-3': [
    {
      id: 'g6-b3-de-1',
      question: 'Đơn vị nhỏ nhất để đo dung lượng thông tin trong máy tính là gì?',
      options: ['Bit', 'Byte', 'Kilobyte (KB)', 'Megabyte (MB)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 13): Bit (viết tắt của Binary Digit) là đơn vị nhỏ nhất để lưu trữ thông tin trong máy tính, chỉ nhận giá trị 0 hoặc 1.',
      hint: 'Chỉ nhận 1 trong 2 ký hiệu 0 hoặc 1.',
    },
    {
      id: 'g6-b3-de-2',
      question: '1 Byte (B) bằng bao nhiêu bit?',
      options: ['8 bit', '2 bit', '10 bit', '1024 bit'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: '1 Byte gồm dãy 8 bit liên tiếp.',
      hint: 'Bằng 8 bit.',
    },
    {
      id: 'g6-b3-tb-1',
      question: '1 Kilobyte (1 KB) tương đương bằng bao nhiêu Byte?',
      options: ['1024 Byte', '100 Byte', '1000 bit', '8 Byte'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Trong tin học, các tiền tố nhị phân quy ước: 1 KB = 1024 Byte; 1 MB = 1024 KB; 1 GB = 1024 MB.',
      hint: 'Bội số của 2 lũy thừa 10 (1024).',
    },
    {
      id: 'g6-b3-kho-1',
      question: 'Một thẻ nhớ có dung lượng 16 GB có thể chứa được khoảng bao nhiêu bài hát chất lượng cao có dung lượng trung bình 4 MB mỗi bài?',
      options: ['Khoảng 4096 bài hát', 'Khoảng 4 bài hát', 'Khoảng 100 bài hát', 'Khoảng 64 bài hát'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: '16 GB = 16 * 1024 MB = 16384 MB. Số bài hát = 16384 / 4 = 4096 bài hát.',
      hint: 'Đổi 16 GB ra MB bằng cách nhân với 1024 rồi chia cho 4.',
    }
  ],

  // ================= BÀI 4: MẠNG MÁY TÍNH =================
  'tin6-bai-4': [
    {
      id: 'g6-b4-de-1',
      question: 'Mạng máy tính là gì?',
      options: [
        'Hai hay nhiều máy tính và thiết bị được kết nối với nhau để chia sẻ dữ liệu và tài nguyên',
        'Một chiếc máy tính cắm dây sạc',
        'Nhiều máy tính xếp cạnh nhau nhưng không có kết nối gì',
        'Màn hình tivi cắm vào máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 17): Mạng máy tính là nhóm các máy tính và thiết bị được kết nối để truyền thông tin và chia sẻ tài nguyên với nhau.',
      hint: 'Kết nối để chia sẻ dữ liệu và tài nguyên.',
    },
    {
      id: 'g6-b4-tb-1',
      question: 'Các thành phần cơ bản của mạng máy tính bao gồm những gì?',
      options: [
        'Thiết bị đầu cuối (máy tính, điện thoại...), thiết bị kết nối (Switch, Modem, Router...) và phần mềm mạng',
        'Chỉ gồm dây cáp mạng và phích cắm điện',
        'Chỉ có màn hình và chuột máy tính',
        'Chỉ gồm phần mềm nghe nhạc'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 18): Mạng máy tính gồm thiết bị đầu cuối, thiết bị kết nối và phần mềm mạng.',
      hint: 'Thiết bị đầu cuối, thiết bị mạng và phần mềm mạng.',
    },
    {
      id: 'g6-b4-kho-1',
      question: 'Lợi ích nào sau đây KHÔNG PHẢI là lợi ích của mạng máy tính?',
      options: [
        'Làm tăng tốc độ xử lí phần cứng của máy tính lên gấp đôi tự động',
        'Chia sẻ máy in, máy quét dùng chung cho cả văn phòng',
        'Trao đổi tập tin, hình ảnh và tài liệu nhanh chóng',
        'Truy cập dữ liệu từ xa thuận tiện'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Mạng máy tính giúp chia sẻ tài nguyên phần cứng (như máy in) và dữ liệu, chứ không làm CPU chạy nhanh hơn gấp đôi.',
      hint: 'Mạng giúp chia sẻ tài nguyên chứ không thay đổi tốc độ phần cứng vật lý.',
    }
  ],

  // ================= BÀI 5: INTERNET =================
  'tin6-bai-5': [
    {
      id: 'g6-b5-de-1',
      question: 'Mạng Internet là gì?',
      options: [
        'Là mạng liên kết hàng triệu máy tính và mạng máy tính trên phạm vi toàn cầu',
        'Là mạng nội bộ của riêng một trường học',
        'Là mạng của một hộ gia đình',
        'Là phần mềm soạn thảo văn bản Word'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 21): Internet là mạng liên kết các mạng máy tính trên khắp thế giới.',
      hint: 'Mạng máy tính toàn cầu.',
    },
    {
      id: 'g6-b5-tb-1',
      question: 'Đặc điểm nào sau đây là đặc điểm của Internet?',
      options: [
        'Không thuộc quyền sở hữu của bất kỳ cá nhân hay tổ chức riêng biệt nào trên thế giới',
        'Do một công ty duy nhất kiểm soát toàn bộ',
        'Chỉ hoạt động vào ban ngày, ban đêm tắt',
        'Chỉ người trên 18 tuổi mới được dùng'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Internet là mạng toàn cầu phi tập trung, hoạt động liên tục 24/7 và không thuộc quyền sở hữu của riêng quốc gia hay công ty nào.',
      hint: 'Mạng mở toàn cầu, không thuộc quyền sở hữu độc quyền của ai.',
    },
    {
      id: 'g6-b5-kho-1',
      question: 'Để kết nối điện thoại hoặc máy tính vào Internet thông qua sóng vô tuyến không dây, người ta thường dùng thiết bị nào?',
      options: ['Bộ phát Wi-Fi (Wireless Access Point / Wi-Fi Router)', 'Dây thừng', 'Bút thử điện', 'Kính lúp'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Bộ phát Wi-Fi truyền tín hiệu mạng qua sóng vô tuyến giúp các thiết bị kết nối không dây thuận tiện.',
      hint: 'Thiết bị phát sóng Wi-Fi.',
    }
  ],

  // ================= BÀI 6: MẠNG THÔNG TIN TOÀN CẦU (WWW) =================
  'tin6-bai-6': [
    {
      id: 'g6-b6-de-1',
      question: 'WWW là viết tắt của cụm từ tiếng Anh nào?',
      options: ['World Wide Web', 'World Wide Word', 'Web World Wide', 'Wide Web World'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'WWW viết tắt của World Wide Web - mạng thông tin toàn cầu gồm các trang web được liên kết với nhau bằng siêu liên kết.',
      hint: 'World Wide Web.',
    },
    {
      id: 'g6-b6-de-2',
      question: 'Phần mềm nào sau đây là một trình duyệt web (Web Browser)?',
      options: ['Google Chrome, Cốc Cốc, Microsoft Edge, Safari', 'Microsoft Excel', 'Paint vẽ tranh', 'Windows Media Player'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Google Chrome, Cốc Cốc, Safari, Edge là các trình duyệt web dùng để mở và duyệt các trang web.',
      hint: 'Phần mềm dùng để vào mạng xem web.',
    },
    {
      id: 'g6-b6-tb-1',
      question: 'Siêu liên kết (Hyperlink) trên trang web có tác dụng gì?',
      options: [
        'Khi nhấp chuột vào sẽ dẫn người xem chuyển đến một trang web hoặc tài liệu khác',
        'Tắt màn hình máy tính',
        'Xóa tài khoản người dùng',
        'Khởi động lại máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Siêu liên kết liên kết các trang web với nhau, khi nhấn vào sẽ chuyển tiếp tới địa chỉ trang web được chỉ định.',
      hint: 'Chuyển hướng sang trang web khác khi nhấn vào.',
    },
    {
      id: 'g6-b6-kho-1',
      question: 'Địa chỉ trang web nào sau đây có định dạng chuẩn URL?',
      options: ['https://moet.gov.vn', 'moet@gmail.com', 'C:\\Windows\\System32', 'moet#gov#vn'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'https://moet.gov.vn là địa chỉ website chuẩn (URL), còn moet@gmail.com là địa chỉ thư điện tử Email.',
      hint: 'Bắt đầu bằng http:// hoặc https://.',
    }
  ],

  // ================= BÀI 7: TÌM KIẾM THÔNG TIN TRÊN INTERNET =================
  'tin6-bai-7': [
    {
      id: 'g6-b7-de-1',
      question: 'Công cụ nào sau đây là một máy tìm kiếm (Search Engine) phổ biến?',
      options: ['Google, Bing, Yahoo', 'Microsoft Word', 'Calculator', 'Notepad'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 28): Google, Bing là các máy tìm kiếm phổ biến giúp người dùng tìm kiếm thông tin bằng từ khóa.',
      hint: 'Trang web tìm kiếm nổi tiếng nhất hiện nay.',
    },
    {
      id: 'g6-b7-tb-1',
      question: 'Khi muốn tìm kiếm chính xác một cụm từ trên Google, em nên làm gì?',
      options: [
        'Đặt cụm từ đó trong dấu ngoặc kép "..."',
        'Đặt cụm từ đó trong dấu ngoặc đơn (...)',
        'Viết toàn bộ bằng chữ in hoa',
        'Thêm dấu chấm hỏi vào cuối'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT: Đặt từ khóa trong cặp dấu ngoặc kép "..." giúp máy tìm kiếm trả về kết quả chứa chính xác cụm từ đó theo đúng thứ tự.',
      hint: 'Dùng dấu ngoặc kép "...".',
    },
    {
      id: 'g6-b7-kho-1',
      question: 'Em cần tìm thông tin về sách giáo khoa Tin học 6 bản PDF, từ khóa nào sau đây là TỐI ƯU NHẤT?',
      options: ['"Tin học 6" "Kết nối tri thức" filetype:pdf', 'sách', 'tin học trường em rất hay', 'sách lớp 6'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Từ khóa ngắn gọn, chứa cụm từ chính xác trong ngoặc kép và định dạng tệp filetype:pdf sẽ đem lại kết quả chuẩn xác nhất.',
      hint: 'Từ khóa rõ ràng, cụ thể và có định dạng filetype:pdf.',
    }
  ],

  // ================= BÀI 8: THƯ ĐIỆN TỬ (EMAIL) =================
  'tin6-bai-8': [
    {
      id: 'g6-b8-de-1',
      question: 'Cấu trúc của một địa chỉ thư điện tử (Email) có dạng chuẩn là gì?',
      options: ['<Tên đăng nhập>@<Tên nhà cung cấp dịch vụ>', '<Tên người dùng>#<Tên miền>', '<Tên miền>.<Tên người dùng>', '<Số điện thoại>@<Họ và tên>'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 32): Địa chỉ email có dạng: username@domainname (ví dụ: nguyenvana@gmail.com).',
      hint: 'Có ký hiệu @ ngăn cách giữa tên và nhà cung cấp.',
    },
    {
      id: 'g6-b8-tb-1',
      question: 'Ưu điểm nổi bật của Thư điện tử (Email) so với thư truyền qua đường bưu điện là gì?',
      options: [
        'Gửi và nhận gần như tức thì, chi phí thấp, có thể gửi kèm tệp hình ảnh, tài liệu đến nhiều người cùng lúc',
        'Không cần có kết nối mạng Internet',
        'Chỉ có thể gửi văn bản ngắn 10 từ',
        'Người nhận bắt buộc phải mở máy tính ngay lúc gửi mới nhận được'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Email gửi nhanh chóng toàn cầu, lưu trữ an toàn trong hộp thư và gửi kèm được nhiều tệp đa phương tiện.',
      hint: 'Nhanh chóng, tức thì và gửi kèm được tệp.',
    },
    {
      id: 'g6-b8-kho-1',
      question: 'Khi nhận được một email từ người lạ có đính kèm tệp tin lạ đuôi .exe, em nên xử lí như thế nào?',
      options: [
        'Không mở tệp đính kèm lạ, báo cáo thư rác hoặc hỏi ý kiến cha mẹ/thầy cô để tránh mã độc virus',
        'Nhấp chuột mở ngay lập tức xem có trúng thưởng không',
        'Gửi chuyển tiếp cho toàn bộ bạn bè trong lớp',
        'Gõ mật khẩu tài khoản của mình gửi lại cho người lạ'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Tệp đính kèm lạ từ người gửi không rõ danh tính thường chứa mã độc gián điệp, virus nguy hiểm làm hỏng thiết bị và đánh cắp thông tin.',
      hint: 'Cảnh giác không mở tệp lạ để tránh virus.',
    }
  ],

  // ================= BÀI 9: AN TOÀN THÔNG TIN TRÊN INTERNET =================
  'tin6-bai-9': [
    {
      id: 'g6-b9-de-1',
      question: 'Mật khẩu nào sau đây được coi là MẬT KHẨU MẠNH và an toàn?',
      options: ['Tr@nHuY#2026!', '123456', 'abcdef', 'nguyenvana'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Mật khẩu mạnh dài ít nhất 8 ký tự, kết hợp chữ hoa, chữ thường, chữ số và ký tự đặc biệt (@, #, !), không chứa thông tin dễ đoán.',
      hint: 'Chứa cả chữ hoa, chữ thường, số và ký tự đặc biệt.',
    },
    {
      id: 'g6-b9-tb-1',
      question: 'Hành động nào sau đây giúp em an toàn khi sử dụng mạng xã hội?',
      options: [
        'Không chia sẻ thông tin cá nhân nhạy cảm (địa chỉ nhà, số CCCD, tài khoản ngân hàng của cha mẹ)',
        'Đồng ý kết bạn với tất cả người lạ trên mạng',
        'Đăng ảnh chụp căn cước công dân lên mạng để khoe',
        'Dùng chung 1 mật khẩu đơn giản cho tất cả tài khoản'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 38): Bảo vệ thông tin riêng tư là nguyên tắc số 1 để tránh bị kẻ xấu lợi dụng lừa đảo.',
      hint: 'Không chia sẻ thông tin riêng tư cá nhân.',
    },
    {
      id: 'g6-b9-kho-1',
      question: 'Khi sử dụng máy tính ở nơi công cộng (quán net, thư viện), sau khi dùng xong tài khoản mạng xã hội hoặc email em cần làm gì?',
      options: [
        'Đăng xuất (Logout) khỏi tài khoản và không chọn lưu mật khẩu trên trình duyệt',
        'Chỉ cần tắt màn hình máy tính',
        'Để nguyên tài khoản đó cho người sau dùng',
        'Lưu mật khẩu vào trình duyệt công cộng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Luôn phải đăng xuất để người dùng máy tính sau không thể tự ý truy cập vào tài khoản riêng tư của em.',
      hint: 'Đăng xuất tài khoản hoàn toàn.',
    }
  ],

  // ================= BÀI 10: SƠ ĐỒ TƯ DUY =================
  'tin6-bai-10': [
    {
      id: 'g6-b10-de-1',
      question: 'Sơ đồ tư duy (Mind Map) là gì?',
      options: [
        'Phương pháp trình bày thông tin trực quan kết hợp từ khóa, hình ảnh và các nhánh liên kết xuất phát từ chủ đề trung tâm',
        'Một bức tranh phong cảnh tự do',
        'Một bảng điểm số của cả lớp',
        'Một đoạn văn bản dài không có tiêu đề'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 43): Sơ đồ tư duy là công cụ tổ chức tư duy trực quan, phát triển từ chủ đề trung tâm ra các nhánh.',
      hint: 'Hình vẽ có chủ đề ở giữa và các nhánh tỏa ra.',
    },
    {
      id: 'g6-b10-tb-1',
      question: 'Trong sơ đồ tư duy, các nhánh cấp 1 được nối trực tiếp với đối tượng nào?',
      options: ['Chủ đề trung tâm', 'Các nhánh cấp 3', 'Góc trang giấy', 'Tiêu đề chân trang'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Chủ đề chính nằm ở trung tâm, các nhánh chính (nhánh cấp 1) nối trực tiếp với chủ đề trung tâm.',
      hint: 'Nối với chủ đề ở trung tâm.',
    },
    {
      id: 'g6-b10-kho-1',
      question: 'Lợi ích lớn nhất của việc sử dụng phần mềm tạo sơ đồ tư duy (như MindMup, XMind) so với vẽ tay trên giấy là gì?',
      options: [
        'Dễ dàng chỉnh sửa, thêm bớt các nhánh, di chuyển vị trí và lưu trữ, chia sẻ dạng tệp số tiện lợi',
        'Máy tính tự động làm bài kiểm tra hộ học sinh',
        'Không cần suy nghĩ ý tưởng',
        'Chỉ dùng được khi không có điện'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Phần mềm sơ đồ tư duy cho phép chỉnh sửa linh hoạt mà không cần vẽ lại từ đầu, lưu trữ và xuất ra nhiều định dạng.',
      hint: 'Dễ dàng sửa đổi và chia sẻ dạng số.',
    }
  ],

  // ================= BÀI 11: ĐỊNH DẠNG VĂN BẢN =================
  'tin6-bai-11': [
    {
      id: 'g6-b11-de-1',
      question: 'Để in đậm một đoạn văn bản trong Microsoft Word, ta chọn đoạn văn bản rồi nhấn tổ hợp phím nào?',
      options: ['Ctrl + B', 'Ctrl + I', 'Ctrl + U', 'Ctrl + S'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Ctrl + B (Bold) là phím tắt định dạng in đậm chữ.',
      hint: 'B viết tắt của Bold.',
    },
    {
      id: 'g6-b11-tb-1',
      question: 'Định dạng đoạn văn bản bao gồm những thao tác nào sau đây?',
      options: [
        'Căn lề (trái, phải, giữa, đều hai bên), thụt lề đầu dòng, khoảng cách giữa các dòng và các đoạn',
        'Chỉ đổi màu màn hình máy tính',
        'Chỉ tắt máy tính',
        'Đổi tên người dùng'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 50): Định dạng đoạn văn bản gồm căn lề, thụt lề và dãn khoảng cách dòng.',
      hint: 'Căn lề, thụt lề, khoảng cách dòng.',
    },
    {
      id: 'g6-b11-kho-1',
      question: 'Tổ hợp phím nào dùng để căn đều hai bên (Justify) cho đoạn văn bản?',
      options: ['Ctrl + J', 'Ctrl + L', 'Ctrl + R', 'Ctrl + E'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Ctrl + J là căn đều hai bên (Justify); Ctrl + L căn trái; Ctrl + R căn phải; Ctrl + E căn giữa.',
      hint: 'J viết tắt của Justify.',
    }
  ],

  // ================= BÀI 12: TRÌNH BÀY THÔNG TIN Ở DẠNG BẢNG =================
  'tin6-bai-12': [
    {
      id: 'g6-b12-de-1',
      question: 'Bảng (Table) trong phần mềm soạn thảo văn bản được tạo thành từ những thành phần cơ bản nào?',
      options: ['Các hàng (Row), các cột (Column) và giao nhau thành các ô (Cell)', 'Chỉ gồm các đường thẳng chéo nhau', 'Các hình tròn lồng vào nhau', 'Các ký tự số'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Bảng gồm các hàng ngang và cột dọc, nơi giao nhau giữa hàng và cột là một ô (cell).',
      hint: 'Hàng, cột và ô.',
    },
    {
      id: 'g6-b12-tb-1',
      question: 'Để gộp nhiều ô liên tiếp nhau trong bảng thành một ô duy nhất, ta dùng lệnh nào?',
      options: ['Merge Cells', 'Split Cells', 'Delete Cells', 'Insert Table'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Merge Cells là lệnh gộp ô trong bảng của Microsoft Word.',
      hint: 'Merge nghĩa là hòa trộn, gộp lại.',
    },
    {
      id: 'g6-b12-kho-1',
      question: 'Khi nào người ta nên trình bày thông tin dưới dạng bảng biểu?',
      options: [
        'Khi thông tin có tính chất so sánh, tổng hợp theo các tiêu chí rõ ràng như danh sách học sinh, thời khóa biểu',
        'Khi viết một bức thư tâm sự cho bạn bè',
        'Khi vẽ một bức tranh nghệ thuật',
        'Khi ghi chép lời thoại kịch ngắn'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Dạng bảng giúp người xem dễ dàng quan sát, tra cứu và so sánh thông tin đa tiêu chí.',
      hint: 'Dùng khi cần so sánh và theo dõi danh sách, thời khóa biểu.',
    }
  ],

  // ================= BÀI 14: THUẬT TOÁN =================
  'tin6-bai-14': [
    {
      id: 'g6-b14-de-1',
      question: 'Thuật toán là gì theo chương trình Tin học 6?',
      options: [
        'Một dãy các chỉ dẫn từng bước rõ ràng, xác định, nhằm hoàn thành một nhiệm vụ hoặc giải quyết một vấn đề cụ thể',
        'Một trò chơi trên máy tính',
        'Một loại virus máy tính',
        'Tên của một hãng sản xuất phần cứng'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 63): Thuật toán là một dãy các chỉ dẫn từng bước nhằm giải quyết một vấn đề.',
      hint: 'Dãy các chỉ dẫn từng bước để giải quyết bài toán.',
    },
    {
      id: 'g6-b14-tb-1',
      question: 'Trong sơ đồ khối mô tả thuật toán, hình chữ nhật biểu thị thao tác nào?',
      options: ['Thao tác xử lí / Phép tính toán', 'Bắt đầu hoặc kết thúc', 'Điều kiện kiểm tra rẽ nhánh', 'Đường chỉ hướng đi'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Hình ovan (hoặc chữ nhật bo góc) là Bắt đầu/Kết thúc; Hình thoi là Kiểm tra điều kiện; Hình chữ nhật là Thao tác xử lí tính toán.',
      hint: 'Thao tác xử lý, tính toán bình thường.',
    },
    {
      id: 'g6-b14-kho-1',
      question: 'Trong sơ đồ khối, hình thoi biểu diễn thao tác gì?',
      options: ['Kiểm tra điều kiện (Rẽ nhánh đúng / sai)', 'Ghi nhận bắt đầu chương trình', 'Thực hiện phép cộng hai số', 'Kết thúc thuật toán'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Hình thoi dùng để kiểm tra điều kiện, rẽ nhánh Đúng (Yes) hoặc Sai (No).',
      hint: 'Kiểm tra điều kiện rẽ nhánh.',
    }
  ],

  // ================= BÀI 15: CÁC THUẬT TOÁN TÌM KIẾM =================
  'tin6-bai-15': [
    {
      id: 'g6-b15-de-1',
      question: 'Thuật toán tìm kiếm tuần tự (Linear Search) thực hiện như thế nào?',
      options: [
        'Xem xét lần lượt từng phần tử từ đầu đến cuối danh sách cho đến khi tìm thấy hoặc hết danh sách',
        'Chia đôi danh sách liên tục',
        'Chỉ kiểm tra phần tử đầu tiên rồi dừng lại',
        'Đảo ngược danh sách ngẫu nhiên'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 68): Tìm kiếm tuần tự duyệt qua từng phần tử theo thứ tự lần lượt từ đầu danh sách.',
      hint: 'Xem xét lần lượt từng phần tử từ đầu đến cuối.',
    },
    {
      id: 'g6-b15-tb-1',
      question: 'Điều kiện bắt buộc để áp dụng được thuật toán tìm kiếm nhị phân (Binary Search) là gì?',
      options: [
        'Danh sách dữ liệu phải ĐÃ ĐƯỢC SẮP XẾP theo một thứ tự xác định (tăng dần hoặc giảm dần)',
        'Danh sách phải có đúng 100 phần tử',
        'Danh sách không được chứa con số nào',
        'Tất cả các phần tử phải bằng nhau'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 72): Tìm kiếm nhị phân chỉ áp dụng được trên danh sách đã sắp xếp.',
      hint: 'Danh sách phải được sắp xếp trước.',
    },
    {
      id: 'g6-b15-kho-1',
      question: 'Cho dãy đã sắp xếp gồm 7 số: [3, 7, 12, 18, 25, 30, 42]. Áp dụng tìm kiếm nhị phân để tìm số 30, phần tử ở vị trí giữa được so sánh đầu tiên là số nào?',
      options: ['Số 18 (ở chính giữa)', 'Số 3', 'Số 42', 'Số 25'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Dãy có 7 phần tử, vị trí chính giữa là phần tử thứ 4 (số 18). So sánh 30 > 18 nên tiếp tục tìm kiếm ở nửa bên phải.',
      hint: 'Phần tử nằm ngay giữa danh sách (vị trí số 4).',
    }
  ],

  // ================= BÀI 16: CÁC THUẬT TOÁN SẮP XẾP =================
  'tin6-bai-16': [
    {
      id: 'g6-b16-de-1',
      question: 'Ý tưởng của thuật toán sắp xếp nổi bọt (Bubble Sort) là gì?',
      options: [
        'So sánh 2 phần tử liền kề nhau và đổi chỗ nếu chúng chưa đúng thứ tự, lặp lại cho đến khi dãy được sắp xếp',
        'Chọn phần tử nhỏ nhất đặt về đầu danh sách',
        'Xóa hết các số lẻ trong dãy',
        'Chỉ sắp xếp phần tử đầu và phần tử cuối'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 77): Sắp xếp nổi bọt liên tục so sánh hai phần tử cạnh nhau và hoán đổi vị trí.',
      hint: 'So sánh và đổi chỗ 2 phần tử cạnh nhau.',
    },
    {
      id: 'g6-b16-tb-1',
      question: 'Ý tưởng của thuật toán sắp xếp chọn (Selection Sort) tăng dần là gì?',
      options: [
        'Tìm phần tử nhỏ nhất trong phần chưa sắp xếp rồi đổi chỗ nó về vị trí đầu tiên của phần đó',
        'Chia đôi danh sách thành 2 nửa',
        'Gấp đôi giá trị của các số chẵn',
        'Ngẫu nhiên tráo đổi vị trí'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT (Trang 80): Sắp xếp chọn tìm phần tử nhỏ nhất đưa về đúng vị trí đầu tiên chưa sắp xếp.',
      hint: 'Chọn phần tử nhỏ nhất đưa về đầu.',
    },
    {
      id: 'g6-b16-kho-1',
      question: 'Cho dãy số [5, 2, 4, 1]. Sau lượt so sánh và đổi chỗ đầu tiên của thuật toán sắp xếp nổi bọt tăng dần (lần lượt so sánh các cặp từ trái sang phải), số lớn nhất sẽ nằm ở đâu?',
      options: [
        'Nằm ở vị trí cuối cùng của dãy',
        'Nằm ở vị trí đầu tiên của dãy',
        'Nằm ở chính giữa dãy',
        'Bị xóa khỏi dãy'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Sau một lượt duyệt của nổi bọt, phần tử lớn nhất sẽ "nổi" dần về cuối dãy giống như bọt khí nổi lên mặt nước.',
      hint: 'Số lớn nhất sẽ nổi về cuối dãy.',
    }
  ],
// ================= BÀI 13: THỰC HÀNH: HOÀN THIỆN SỔ LƯU NIỆM =================
  'tin6-bai-13': [
    {
      id: 'g6-b13-de-1',
      question: 'Khi thiết kế sổ lưu niệm lớp học bằng phần mềm soạn thảo văn bản, để trang trí tiêu đề nổi bật ta nên dùng công cụ nào?',
      options: ['WordArt hoặc Text Box với định dạng màu sắc hài hòa', 'Chỉ dùng một cỡ chữ 10 đơn điệu', 'Chèn một bức ảnh che kín toàn bộ chữ', 'Để trang bìa trắng hoàn toàn'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 6 KNTT (Trang 62): Sử dụng chữ nghệ thuật WordArt, khung viền Text Box và hình ảnh minh họa phù hợp giúp cuốn sổ lưu niệm sinh động, ấn tượng.',
      hint: 'Công cụ chữ nghệ thuật WordArt hoặc Text Box.'
    },
    {
      id: 'g6-b13-tb-1',
      question: 'Để chèn bảng danh sách thành viên lớp học có cột Họ và tên, Ngày sinh, Sở thích, ta chọn thao tác nào trong Word?',
      options: ['Insert -> Table -> chọn số hàng và số cột', 'File -> Print', 'Review -> Translate', 'View -> Zoom'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 6 KNTT: Chọn dải lệnh Insert -> Table để tạo bảng dữ liệu có hàng và cột.',
      hint: 'Insert Table để tạo bảng.'
    },
    {
      id: 'g6-b13-kho-1',
      question: 'Khi sử dụng hình ảnh của bạn bè trong lớp để đưa vào sổ lưu niệm số và chia sẻ lên Internet, em cần lưu ý điều gì?',
      options: [
        'Cần xin phép và được sự đồng ý của bạn trước khi sử dụng hình ảnh cá nhân để tôn trọng quyền riêng tư.',
        'Đăng bất kỳ ảnh dìm nào lên mạng mà không cần hỏi bạn.',
        'Tải ảnh lên mọi diễn đàn công cộng mà bạn không hề hay biết.',
        'Sử dụng thông tin cá nhân của bạn để tạo tài khoản ảo.'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Tôn trọng quyền riêng tư và hình ảnh cá nhân là nét văn hóa ứng xử quan trọng trên môi trường mạng.',
      hint: 'Xin phép và được sự đồng ý của bạn.'
    }
  ]
};
