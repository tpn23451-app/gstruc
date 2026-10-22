import { Question } from '../types/quiz';
import { QUESTIONS_GRADE_3 } from './questionsGrade3';
import { QUESTIONS_GRADE_4 } from './questionsGrade4';
import { QUESTIONS_GRADE_5 } from './questionsGrade5';
import { QUESTIONS_GRADE_6 } from './questionsGrade6';
import { QUESTIONS_GRADE_7 } from './questionsGrade7';
import { QUESTIONS_GRADE_9 } from './questionsGrade9';
import { ALL_GRADE_8_MIDTERM_QUESTIONS } from './grade8MidtermReview';
import { ALL_GRADE_9_MIDTERM_QUESTIONS } from './grade9MidtermReview';

const GRADE_8_QUESTIONS: Record<string, Question[]> = {
  // ================= CHUYÊN ĐỀ ÔN TẬP GIỮA KÌ 1 TIN HỌC 8 =================
  'tin8-on-tap-giua-ki-1': ALL_GRADE_8_MIDTERM_QUESTIONS,
  // ================= BÀI 1: LƯỢC SỬ CÔNG CỤ TÍNH TOÁN =================
  'tin8-bai-1': [
    {
      id: 'b1-de-1',
      question: 'Chiếc máy tính cơ khí đầu tiên Pascaline do nhà bác học Blaise Pascal sáng chế ra vào năm nào?',
      options: ['Năm 1642', 'Năm 1833', 'Năm 1945', 'Năm 1974'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 5): Năm 1642, nhà bác học Blaise Pascal khi chưa đầy 20 tuổi đã chế tạo ra chiếc máy tính cơ khí Pascaline để giúp cha tính thuế.',
      hint: 'Thế kỉ XVII, nhà bác học Pascal khi còn rất trẻ.',
    },
    {
      id: 'b1-de-2',
      question: 'Ai được lịch sử công nhận là "cha đẻ của công nghệ máy tính"?',
      options: ['Gottfried Leibniz', 'Charles Babbage', 'John Von Neumann', 'Howard Aiken'],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 6): Charles Babbage đã thiết kế máy tính đa năng có nguyên lý tính toán tự động tương tự máy tính ngày nay, nên ông được coi là cha đẻ của công nghệ máy tính.',
      hint: 'Nhà toán học người Anh khởi xướng dự án máy phân tích năm 1833.',
    },
    {
      id: 'b1-de-3',
      question: 'Công cụ tính toán thủ công xuất hiện từ thời cổ đại và vẫn còn được sử dụng tới ngày nay ở một số nơi là gì?',
      options: ['Bàn tính hạt', 'Đồng hồ cát', 'Máy tính Pascaline', 'Thước kẻ logarit'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 5): Bàn tính là công cụ tính toán thủ công sơ khai xuất hiện hàng nghìn năm trước và vẫn còn được sử dụng cho việc rèn luyện tính nhẩm.',
      hint: 'Dùng các hạt gỗ trượt trên các thanh dọc.',
    },
    {
      id: 'b1-de-4',
      question: 'Chiếc máy tính điện tử đa năng đầu tiên trên thế giới có tên gọi là gì?',
      options: ['ENIAC', 'UNIVAC', 'IBM PC', 'Pascaline'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 7): Máy tính ENIAC hoàn thành năm 1945 tại Mỹ được coi là chiếc máy tính điện tử đa năng đầu tiên.',
      hint: 'Bắt đầu bằng chữ cái E.',
    },
    {
      id: 'b1-de-5',
      question: 'Nhà bác học nào đã cải tiến máy tính Pascaline để thực hiện được cả 4 phép tính: cộng, trừ, nhân, chia?',
      options: ['Gottfried Leibniz', 'Charles Babbage', 'Blaise Pascal', 'John Von Neumann'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 6): Nhà toán học và triết học Gottfried Leibniz đã cải tiến máy tính cơ khí của Pascal, giúp máy thực hiện được cả bốn phép tính số học cơ bản (cộng, trừ, nhân, chia).',
      hint: 'Nhà khoa học người Đức hoàn thiện khả năng nhân chia cho máy tính cơ khí.',
    },
    {
      id: 'b1-tb-1',
      question: 'Máy tính điện tử thế hệ thứ nhất (1945 – 1955) sử dụng linh kiện điện tử chính nào?',
      options: ['Bóng bán dẫn (Transistor)', 'Đèn điện tử chân không', 'Mạch tích hợp (IC)', 'Bộ vi xử lý (VLSI)'],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 7): Máy tính thế hệ thứ nhất sử dụng đèn điện tử chân không, bộ nhớ bằng trống từ, kích thước rất lớn (chiếm trọn một căn phòng).',
      hint: 'Thời kỳ ENIAC sử dụng hàng vạn bóng đèn chân không tỏa nhiệt lớn.',
    },
    {
      id: 'b1-tb-2',
      question: 'Máy tính thế hệ thứ hai (1955 – 1965) có bước phát triển nhảy vọt nhờ thay thế đèn chân không bằng linh kiện gì?',
      options: ['Bóng bán dẫn (Transistor)', 'Mạch tích hợp IC', 'Mạch VLSI', 'Đĩa quang CD'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 7): Máy tính thế hệ thứ hai sử dụng bóng bán dẫn, kích thước thu nhỏ đáng kể, tiêu thụ ít điện năng hơn và độ tin cậy cao hơn.',
      hint: 'Transistor bằng chất bán dẫn silic/germani.',
    },
    {
      id: 'b1-tb-3',
      question: 'Nguyên lý kiến trúc máy tính lưu trữ chương trình trong bộ nhớ mang tên nhà bác học nào?',
      options: ['John Von Neumann', 'Blaise Pascal', 'Charles Babbage', 'Gottfried Leibniz'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 7): Kiến trúc Von Neumann đưa ra nguyên lý chương trình được lưu trữ sẵn trong bộ nhớ chính cùng với dữ liệu.',
      hint: 'Nhà toán học gốc Hungary - John Von Neumann.',
    },
    {
      id: 'b1-tb-4',
      question: 'Máy tính thế hệ thứ ba (1965 – 1974) sử dụng linh kiện điện tử nào làm nòng cốt?',
      options: ['Mạch tích hợp (IC)', 'Đèn chân không', 'Ống phóng điện tử', 'Thẻ nhớ flash'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 8): Máy tính thế hệ thứ ba sử dụng mạch tích hợp (Integrated Circuit - IC), tích hợp nhiều linh kiện trên một đế bán dẫn nhỏ.',
      hint: 'Mạch tích hợp viết tắt là IC.',
    },
    {
      id: 'b1-tb-5',
      question: 'Sự xuất hiện của máy tính cá nhân (Personal Computer - PC) bắt đầu từ thế hệ máy tính thứ mấy?',
      options: ['Thế hệ thứ nhất', 'Thế hệ thứ hai', 'Thế hệ thứ ba', 'Thế hệ thứ tư'],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 8): Thế hệ thứ tư (từ 1974 đến nay) sử dụng bộ vi xử lý đã tạo điều kiện ra đời các máy tính cá nhân nhỏ gọn, giá rẻ cho gia đình và trường học.',
      hint: 'Thế hệ dùng chip vi xử lý (Microprocessor).',
    },
    {
      id: 'b1-kho-1',
      question: 'Bộ vi xử lý (Microprocessor) ra đời ở thế hệ máy tính thứ tư nhờ thành tựu công nghệ nào?',
      options: [
        'Mạch tích hợp cỡ rất lớn (VLSI) tích hợp hàng triệu linh kiện bán dẫn trên một vi mạch duy nhất',
        'Cải tiến độ bền của bóng đèn điện tử chân không',
        'Bộ nhớ trống từ quay với tốc độ cao',
        'Công nghệ thẻ đục lỗ bằng bìa cứng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 8): Công nghệ vi mạch tích hợp mật độ rất cao (VLSI) cho phép tạo ra bộ vi xử lý trên một con chip duy nhất, khai sinh ra máy tính cá nhân (PC).',
      hint: 'VLSI là viết tắt của Very Large Scale Integration.',
    },
    {
      id: 'b1-kho-2',
      question: 'Điểm khác biệt căn bản nhất giữa máy tính cơ khí Pascaline (1642) và máy phân tích của Charles Babbage (1833) là gì?',
      options: [
        'Pascaline chỉ thực hiện được phép cộng trừ đơn giản bằng tay quay, còn máy của Babbage có khả năng tính toán tự động đa năng theo chương trình nạp từ thẻ đục lỗ',
        'Pascaline chạy bằng điện, máy Babbage chạy bằng hơi nước',
        'Pascaline có bàn phím và chuột, máy Babbage thì không',
        'Máy Babbage nhỏ gọn hơn Pascaline rất nhiều'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 5-6): Máy của Babbage là máy tính cơ khí đa năng có bộ điều khiển, bộ nhớ và khả năng đọc chương trình đục lỗ, trong khi Pascaline chỉ là máy cộng trừ cơ học đơn giản.',
      hint: 'Khả năng lập trình và tự động hoá theo chương trình.',
    },
    {
      id: 'b1-kho-3',
      question: 'Máy tính thế hệ thứ năm (tương lai và hiện tại) hướng tới đặc trưng nổi bật nào sau đây?',
      options: [
        'Trí tuệ nhân tạo (AI), tính toán lượng tử và xử lý ngôn ngữ tự nhiên thông minh',
        'Tăng kích thước máy tính lên bằng một tòa nhà',
        'Quay trở lại sử dụng bóng đèn chân không để chống bức xạ',
        'Chỉ sử dụng mã máy nhị phân 0 và 1 mà không cần phần mềm'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 8): Thế hệ thứ năm phát triển dựa trên trí tuệ nhân tạo (AI), học máy, siêu máy tính và máy tính lượng tử có khả năng nhận dạng tiếng nói, hình ảnh và tư duy mô phỏng con người.',
      hint: 'Gắn liền với trí tuệ nhân tạo (AI).',
    },
    {
      id: 'b1-kho-4',
      question: 'Phát biểu nào sau đây phản ánh ĐÚNG NHẤT về xu hướng phát triển phần cứng của máy tính điện tử qua 5 thế hệ?',
      options: [
        'Kích thước ngày càng thu nhỏ, tốc độ tính toán ngày càng tăng, điện năng tiêu thụ giảm và giá thành trở nên bình dân hơn',
        'Kích thước ngày càng to lớn và tiêu thụ nhiều điện năng hơn',
        'Tốc độ tính toán ngày càng chậm để bảo đảm an toàn dữ liệu',
        'Chỉ phục vụ mục đích quân sự và nghiên cứu vũ trụ'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 8-9): Từ máy tính khổng lồ chiếm trọn căn phòng (ENIAC), máy tính đã thu nhỏ thành laptop, điện thoại thông minh, tốc độ tính toán gấp hàng triệu lần.',
      hint: 'Nhỏ hơn, nhanh hơn, rẻ hơn, thông minh hơn.',
    },
  ],

  // ================= BÀI 2: THÔNG TIN TRONG MÔI TRƯỜNG SỐ =================
  'tin8-bai-2': [
    {
      id: 'b2-de-1',
      question: 'Theo bài 2 SGK Tin học 8, thông tin số có đặc điểm chính nào sau đây?',
      options: [
        'Dễ dàng được nhân bản và lan truyền nhưng khó bị xoá bỏ hoàn toàn',
        'Chỉ có thể lưu trữ trên giấy và không thể chia sẻ từ xa',
        'Mọi thông tin trên mạng Internet đều hoàn toàn đáng tin cậy',
        'Không thể tìm kiếm hay xử lí bằng máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 11): Thông tin số dễ dàng được nhân bản và lan truyền nhưng khó bị xoá bỏ hoàn toàn; có thể truy cập từ xa nếu người quản trị cho phép.',
      hint: 'Thông tin số một khi đã đăng tải lên Internet sẽ cực kỳ khó xoá sạch.',
    },
    {
      id: 'b2-de-2',
      question: 'Khả năng truy cập thông tin số từ xa mang lại lợi ích chủ yếu nào cho học sinh?',
      options: [
        'Có thể học tập, tra cứu tài liệu mọi lúc mọi nơi chỉ cần có kết nối mạng',
        'Không cần phải làm bài tập về nhà nữa',
        'Máy tính tự động viết bài thi thay cho học sinh',
        'Làm tăng nguy cơ hỏng màn hình máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 11): Truy cập từ xa giúp mọi người học tập trực tuyến, tìm kiếm bài giảng và trao đổi học liệu không phụ thuộc vào khoảng cách địa lý.',
      hint: 'Học tập mọi lúc, mọi nơi.',
    },
    {
      id: 'b2-de-3',
      question: 'Nguồn thông tin nào dưới đây thường có độ tin cậy cao nhất khi tìm hiểu về dịch bệnh y tế?',
      options: [
        'Cổng thông tin điện tử chính thức của Bộ Y tế (moh.gov.vn)',
        'Bài viết của một tài khoản ẩn danh trên Facebook không có nguồn dẫn',
        'Tin nhắn chuyển tiếp giật gân trong nhóm chat',
        'Bình luận trên một diễn đàn game'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 12): Cổng thông tin của cơ quan nhà nước, tổ chức chuyên môn chính thống có thẩm quyền và kiểm duyệt nghiêm ngặt.',
      hint: 'Cơ quan quản lý nhà nước có tên miền .gov.vn.',
    },
    {
      id: 'b2-tb-1',
      question: 'Để đánh giá độ tin cậy của thông tin tìm kiếm trên mạng Internet, học sinh CẦN làm gì?',
      options: [
        'Tin ngay thông tin có nhiều lượt like và chia sẻ giật gân',
        'Kiểm tra nguồn gốc, thẩm quyền của cơ quan công bố, chứng cứ xác thực và tính thời sự của tin',
        'Chỉ đọc tiêu đề bài viết mà không cần đọc nội dung',
        'Chia sẻ bài viết ngay cho bạn bè mà không cần kiểm chứng'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 12-13): Đánh giá thông tin đáng tin cậy dựa vào: thẩm quyền của nguồn cung cấp tin, phân biệt ý kiến với sự kiện, kiểm tra chứng cứ và tính thời sự.',
      hint: 'Kiểm tra nguồn chính thống, tác giả và chứng cứ thực tế.',
    },
    {
      id: 'b2-tb-2',
      question: 'Tác hại nguy hiểm nhất của việc chia sẻ thông tin giả mạo (tin sai sự thật) trên mạng xã hội là gì?',
      options: [
        'Gây hoang mang dư luận xã hội, làm tổn hại uy tín người khác và người chia sẻ có thể bị xử phạt theo pháp luật',
        'Làm bộ nhớ điện thoại bị đầy dung lượng',
        'Làm tăng tốc độ mạng Internet',
        'Máy tính tự động phát ra tiếng kêu'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 13): Tin giả gây hoang mang, hiểu lầm, thiệt hại kinh tế và người vi phạm bị xử phạt hành chính hoặc hình sự theo Luật An ninh mạng.',
      hint: 'Gây hoang mang xã hội và vi phạm pháp luật.',
    },
    {
      id: 'b2-tb-3',
      question: 'Khi nhận được một thông tin gây sốc kèm lời kêu gọi "Chia sẻ ngay lập tức", hành động đúng đắn của em là gì?',
      options: [
        'Bình tĩnh dừng lại, kiểm tra chéo thông tin trên các báo chính thống trước khi tin hoặc chia sẻ',
        'Bấm chia sẻ ngay lên tất cả các hội nhóm',
        'Sao chép nội dung gửi cho cả lớp đọc',
        'Đăng bài chỉ trích người khác ngay'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 13): Cần có tư duy phản biện, kiểm tra đối chiếu nguồn tin uy tín trước khi chia sẻ.',
      hint: 'Bình tĩnh kiểm tra nguồn tin chính thống.',
    },
    {
      id: 'b2-kho-1',
      question: 'Phát biểu nào sau đây thể hiện một "SỰ KIỆN" (Fact) chứ không phải là "Ý KIẾN" (Opinion)?',
      options: [
        '"Tôi nghĩ đây là bộ phim hoạt hình hay nhất mọi thời đại"',
        '"Chiếc máy tính bảng này có màu sắc rất đẹp và hiện đại"',
        '"Hội thi Tin học trẻ toàn quốc năm 2023 diễn ra tại Quảng Nam từ ngày 2 đến 4 tháng 8"',
        '"Học lập trình Scratch thú vị hơn nhiều so với học bảng tính Excel"'
      ],
      correctAnswer: 2,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 12): Sự kiện là thông tin khách quan, có thể kiểm chứng được tính đúng sai dựa trên số liệu, địa điểm, thời gian cụ thể.',
      hint: 'Sự kiện có số liệu, địa điểm cụ thể và kiểm chứng được.',
    },
    {
      id: 'b2-kho-2',
      question: 'Tại sao việc "khó bị xoá bỏ hoàn toàn" của thông tin số vừa là ưu điểm vừa là rủi ro tiềm ẩn đối với mỗi cá nhân?',
      options: [
        'Ưu điểm giúp lưu trữ di sản và tri thức lâu dài; rủi ro là các bài đăng thiếu suy nghĩ trong quá khứ có thể ảnh hưởng xấu đến tương lai và uy tín cá nhân',
        'Nó chỉ toàn ưu điểm chứ không có bất kì rủi ro nào',
        'Nó làm cho máy tính không bao giờ bị hỏng',
        'Nó giúp mọi người không cần bảo mật mật khẩu'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 11): Thông tin số một khi phát tán có thể được tải về và chia sẻ lại trên nhiều máy chủ khác nhau, tạo nên dấu chân số tồn tại mãi mãi.',
      hint: 'Dấu chân số tồn tại lâu dài trên không gian mạng.',
    },
  ],

  // ================= BÀI 3: THỰC HÀNH: KHAI THÁC THÔNG TIN SỐ =================
  'tin8-bai-3': [
    {
      id: 'b3-de-1',
      question: 'Để tìm kiếm chính xác một cụm từ trên Google, em nên đặt cụm từ đó trong ký hiệu nào?',
      options: ['Cặp dấu ngoặc kép "..."', 'Cặp dấu ngoặc vuông [...]', 'Cặp dấu ngoặc nhọn {...}', 'Cặp dấu sao *...*'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 14): Sử dụng dấu ngoặc kép để tìm kiếm chính xác cụm từ khóa theo đúng thứ tự các từ.',
      hint: 'Dấu ngoặc kép " ".',
    },
    {
      id: 'b3-de-2',
      question: 'Tên miền trang web của các cơ quan nhà nước Việt Nam thường có đuôi mở rộng là gì?',
      options: ['.gov.vn', '.com.vn', '.edu.vn', '.net.vn'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 15): Đuôi .gov.vn viết tắt của Government Vietnam, dành cho các cơ quan chính phủ và tổ chức nhà nước.',
      hint: 'gov viết tắt của Government.',
    },
    {
      id: 'b3-tb-1',
      question: 'Tên miền có đuôi ".edu.vn" thường thuộc về loại tổ chức nào tại Việt Nam?',
      options: [
        'Các cơ sở giáo dục và đào tạo (trường học, viện nghiên cứu, trường đại học)',
        'Các doanh nghiệp kinh doanh buôn bán',
        'Các tổ chức phi chính phủ quốc tế',
        'Các trang mạng xã hội giải trí'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 15): Đuôi .edu.vn dành riêng cho các tổ chức trong lĩnh vực giáo dục (Education).',
      hint: 'edu là viết tắt của Education (giáo dục).',
    },
    {
      id: 'b3-kho-1',
      question: 'Khi tổng hợp tài liệu từ Internet vào bài thuyết trình báo cáo, hành động nào thể hiện sự khai thác thông tin số ĐÚNG VÀ VĂN MINH?',
      options: [
        'Sao chép nguyên văn toàn bộ bài viết trên mạng mà không cần ghi tác giả',
        'Đọc hiểu, tổng hợp lại bằng lời của mình và ghi rõ nguồn tài liệu tham khảo ở cuối bài',
        'Xóa tên tác giả ban đầu và thay bằng tên của mình',
        'Chỉ tìm hình ảnh có bản quyền để sao chép trái phép'
      ],
      correctAnswer: 1,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 16): Khi khai thác thông tin số cần tôn trọng bản quyền, trích dẫn rõ nguồn gốc và tác giả.',
      hint: 'Tôn trọng quyền tác giả và trích dẫn nguồn.',
    },
  ],

  // ================= BÀI 4: ĐẠO ĐỨC VÀ VĂN HOÁ TRONG SỬ DỤNG CÔNG NGHỆ KĨ THUẬT SỐ =================
  'tin8-bai-4': [
    {
      id: 'b4-de-1',
      question: 'Hành vi nào dưới đây là vi phạm đạo đức và văn hoá khi sử dụng công nghệ số?',
      options: [
        'Tự ý quay lén và đăng tải video của bạn bè lên mạng xã hội để chế giễu',
        'Gửi email chúc mừng sinh nhật thầy cô giáo',
        'Tham gia nhóm học tập trực tuyến của lớp để trao đổi bài vở',
        'Tìm kiếm tài liệu học tập trên trang web của trường'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 17-18): Quay lén, xúc phạm danh dự người khác trên mạng là hành vi vi phạm đạo đức và pháp luật.',
      hint: 'Xâm phạm quyền riêng tư và bôi nhọ người khác.',
    },
    {
      id: 'b4-de-2',
      question: 'Luật nào tại Việt Nam quy định cụ thể các hành vi bị cấm trên không gian mạng?',
      options: ['Luật An ninh mạng', 'Luật Du lịch', 'Luật Xây dựng', 'Luật Giao thông đường bộ'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 18): Luật An ninh mạng năm 2018 quy định rõ các quy tắc bảo vệ an ninh thông tin và xử lý các hành vi sai phạm trên mạng.',
      hint: 'Luật An ninh mạng.',
    },
    {
      id: 'b4-tb-1',
      question: 'Việc tải và sử dụng các phần mềm bẻ khoá (crack, phần mềm lậu) tiềm ẩn nguy cơ lớn nào?',
      options: [
        'Dễ bị nhiễm virus, mã độc đánh cắp mật khẩu và dữ liệu cá nhân, đồng thời vi phạm bản quyền tác giả',
        'Giúp máy tính chạy nhanh gấp đôi',
        'Tăng độ bền cho bàn phím máy tính',
        'Làm giảm nhiệt độ của pin máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 18): Sử dụng phần mềm bẻ khoá vi phạm quyền tác giả và thường chứa trojan, virus theo dõi đánh cắp thông tin tài khoản.',
      hint: 'Vi phạm quyền tác giả và mang theo mã độc hại.',
    },
    {
      id: 'b4-kho-1',
      question: 'Khi An mượn bức ảnh phong cảnh do bạn Khoa chụp để làm bài thuyết trình, cách ứng xử nào dưới đây là ĐÚNG ĐẠO ĐỨC VÀ VĂN HOÁ NHẤT?',
      options: [
        'Xin phép Khoa, và khi sử dụng phải ghi rõ chú thích "Ảnh: tác giả Lê Khoa" để tôn trọng tác giả',
        'Tự ý chỉnh sửa và đăng lên mạng xã hội rồi nhận là ảnh do chính mình tự chụp',
        'Cắt bỏ chữ ký của Khoa để người khác không biết ai chụp',
        'Bán bức ảnh đó cho người khác lấy tiền mà không hỏi ý kiến Khoa'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 18): Cần xin phép tác giả và ghi rõ nguồn/chú thích tác giả để đảm bảo tính trung thực và văn hoá sử dụng sản phẩm số.',
      hint: 'Xin phép tác giả và ghi rõ nguồn ảnh.',
    },
  ],

  // ================= BÀI 5: SỬ DỤNG BẢNG TÍNH GIẢI QUYẾT BÀI TOÁN THỰC TẾ =================
  'tin8-bai-5': [
    {
      id: 'b5-de-1',
      question: 'Trong phần mềm bảng tính Excel, địa chỉ nào sau đây là ĐỊA CHỈ TUYỆT ĐỐI?',
      options: ['A1', '$A1', 'A$1', '$A$1'],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 23): Địa chỉ tuyệt đối có dấu $ trước tên cột và trước tên hàng (ví dụ: $A$1, $F$2).',
      hint: 'Địa chỉ có dấu đô la ($) ở cả trước chữ cái cột và chữ số hàng.',
    },
    {
      id: 'b5-de-2',
      question: 'Phím tắt nào trên bàn phím dùng để chuyển đổi nhanh giữa địa chỉ tương đối và tuyệt đối khi nhập công thức trong Excel?',
      options: ['Phím F2', 'Phím F4', 'Phím F5', 'Phím F12'],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 23-24): Sau khi nhập địa chỉ ô tương đối, nhấn phím F4 để chuyển thành địa chỉ tuyệt đối.',
      hint: 'Phím chức năng F4 ở hàng trên cùng của bàn phím.',
    },
    {
      id: 'b5-de-3',
      question: 'Đặc điểm của địa chỉ tương đối (ví dụ A1) trong bảng tính Excel là gì?',
      options: [
        'Tự động thay đổi tương ứng theo khoảng cách và hướng dịch chuyển khi sao chép công thức sang ô mới',
        'Luôn luôn giữ cố định không bao giờ thay đổi',
        'Chỉ có thể nhập một lần duy nhất trong toàn bộ bảng tính',
        'Chỉ chứa được số âm'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 23): Địa chỉ tương đối sẽ tự động thay đổi vị trí tương ứng khi công thức được sao chép đến ô khác.',
      hint: 'Tương đối nghĩa là thay đổi theo vị trí mới.',
    },
    {
      id: 'b5-de-4',
      question: 'Ký hiệu nào được dùng để bắt đầu nhập một công thức tính toán trong phần mềm bảng tính Excel?',
      options: ['Dấu bằng (=)', 'Dấu cộng (+)', 'Dấu hai chấm (:)', 'Dấu thăng (#)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 22): Mọi công thức trong Excel đều phải bắt đầu bằng dấu bằng (=).',
      hint: 'Dấu =.',
    },
    {
      id: 'b5-de-5',
      question: 'Địa chỉ nào sau đây là địa chỉ tương đối?',
      options: ['B5', '$B$5', '$B5', 'B$5'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 23): B5 không có dấu $ trước tên cột và tên hàng nên là địa chỉ tương đối.',
      hint: 'Không có ký hiệu $ ở trước cột và hàng.',
    },
    {
      id: 'b5-de-6',
      question: 'Ký hiệu phép toán nhân và phép toán chia trong công thức Excel lần lượt là gì?',
      options: ['Dấu sao (*) và dấu gạch chéo (/)', 'Dấu (x) và dấu (:)', 'Dấu (.) và dấu (÷)', 'Dấu (^) và dấu (%)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Trong Excel, phép nhân là dấu * và phép chia là dấu /.',
      hint: 'Ký tự * và /.',
    },
    {
      id: 'b5-tb-1',
      question: 'Tại ô F4 có công thức `=E4*$F$2`. Khi sao chép công thức này xuống ô F5, công thức tại ô F5 sẽ là:',
      options: ['=E5*$F$3', '=E5*$F$2', '=$E$5*$F$2', '=E4*$F$2'],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 23-24): Ô E4 là địa chỉ tương đối nên khi sao chép xuống dưới một hàng sẽ thành E5; ô $F$2 là tuyệt đối nên giữ nguyên cố định. Công thức tại F5 là `=E5*$F$2`.',
      hint: 'Ô tương đối E4 đổi thành E5, ô tuyệt đối $F$2 giữ nguyên.',
    },
    {
      id: 'b5-tb-2',
      question: 'Tại ô C2 có công thức `=A2+B2`. Khi sao chép công thức từ ô C2 sang ô D2 thì công thức tại D2 sẽ là gì?',
      options: ['=B2+C2', '=A2+B2', '=A3+B3', '=B3+C3'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 23): Từ C2 sang D2 là dịch chuyển sang phải 1 cột (giữ nguyên hàng 2). Cột A thành cột B, cột B thành cột C. Công thức tại D2 là `=B2+C2`.',
      hint: 'Dịch sang phải 1 cột: A->B, B->C.',
    },
    {
      id: 'b5-tb-3',
      question: 'Địa chỉ hỗn hợp `$A1` có đặc điểm gì khi sao chép công thức sang vị trí khác?',
      options: [
        'Cột A được cố định (không đổi), còn hàng 1 sẽ tự động thay đổi theo vị trí mới',
        'Cả cột A và hàng 1 đều bị cố định',
        'Cả cột A và hàng 1 đều bị thay đổi',
        'Hàng 1 được cố định, cột A thay đổi'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Dấu $ đặt trước chữ A nên cột A bị cố định; không có dấu $ trước số 1 nên chỉ số hàng 1 thay đổi tương đối.',
      hint: 'Dấu $ đứng trước thành phần nào thì thành phần đó được cố định.',
    },
    {
      id: 'b5-tb-4',
      question: 'Khi muốn sao chép một bảng dữ liệu dự án từ Excel sang bài trình chiếu PowerPoint, học sinh thực hiện các thao tác nào?',
      options: [
        'Chọn khối ô cần sao chép trong Excel -> Nhấn Ctrl+C -> Mở PowerPoint -> Nhấn Ctrl+V',
        'Chỉ có thể gõ lại toàn bộ bằng tay',
        'Chụp ảnh màn hình rồi gửi email',
        'Xóa bảng tính Excel đi'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 25): Dữ liệu từ bảng tính có thể dễ dàng sao chép sang Word hoặc PowerPoint bằng lệnh Copy (Ctrl+C) và Paste (Ctrl+V).',
      hint: 'Sử dụng phím tắt Copy (Ctrl+C) và Paste (Ctrl+V).',
    },
    {
      id: 'b5-tb-5',
      question: 'Tại ô D3 có công thức `=C3*$B$1`. Khi sao chép công thức từ D3 sang ô D5, công thức tại ô D5 sẽ biến đổi thành:',
      options: ['=C5*$B$1', '=C3*$B$1', '=C5*$B$3', '=D5*$B$1'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Từ D3 sang D5 là dịch xuống dưới 2 hàng (cùng cột D). C3 thành C5; $B$1 là tuyệt đối nên giữ nguyên. Kết quả là `=C5*$B$1`.',
      hint: 'C3 tăng 2 hàng thành C5, $B$1 giữ nguyên.',
    },
    {
      id: 'b5-tb-6',
      question: 'Trong bảng tính quản lý chi tiêu gia đình, nếu có ô "Tỉ lệ tiết kiệm" nằm cố định tại ô B1, khi viết công thức tính cho các tháng bên dưới thì địa chỉ ô B1 nên để ở dạng nào?',
      options: ['Địa chỉ tuyệt đối ($B$1)', 'Địa chỉ tương đối (B1)', 'Không được dùng địa chỉ ô', 'Gõ trực tiếp vào ô'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 24): Ô chứa giá trị dùng chung cố định cần được đặt ở dạng tuyệt đối ($B$1) để khi sao chép công thức xuống dưới, ô này không bị trượt đi.',
      hint: 'Cố định ô dùng chung bằng địa chỉ tuyệt đối.',
    },
    {
      id: 'b5-kho-1',
      question: 'Trong Hình 5.6 (SGK Tin học 8 trang 26), tại ô C1 có công thức `=A1*B1`. Khi sao chép công thức từ C1 sang ô E2 thì công thức tại ô E2 sẽ tự động biến đổi thành:',
      options: ['=C1*D2', '=C2*D1', '=C2*D2', '=B2*C2'],
      correctAnswer: 2,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 26 - Luyện tập 1): Từ C1 sang E2 là dịch chuyển sang phải 2 cột và xuống dưới 1 hàng (+2 cột, +1 hàng). Cả A1 và B1 đều là tương đối: A1 thành C2, B1 thành D2. Công thức tại E2 là `=C2*D2`.',
      hint: 'Dịch sang phải 2 cột (A->C, B->D) và xuống dưới 1 hàng (1->2).',
    },
    {
      id: 'b5-kho-2',
      question: 'Tại ô B4 có công thức `=A$2+$C3`. Khi sao chép công thức này từ ô B4 sang ô D6 thì công thức tại ô D6 sẽ trở thành gì?',
      options: ['=C$2+$C5', '=A$2+$C3', '=C$4+$E5', '=A$4+$D6'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Từ B4 sang D6 là dịch sang phải 2 cột (+2 cột) và xuống dưới 2 hàng (+2 hàng). Với A$2: cột A tăng 2 cột thành C, hàng $2 cố định -> C$2. Với $C3: cột $C cố định, hàng 3 tăng 2 hàng thành 5 -> $C5. Công thức là `=C$2+$C5`.',
      hint: 'Cột A->C, $2 giữ nguyên; $C giữ nguyên, hàng 3->5.',
    },
    {
      id: 'b5-kho-3',
      question: 'Trong dự án "Trường học xanh", ô D5 chứa số lượng cây hoa, ô E2 chứa đơn giá cố định `15000`. Công thức chuẩn nhất cần nhập tại ô F5 để khi kéo sao chép xuống F6, F7, F8 vẫn tính đúng tiền cho từng loại cây là:',
      options: ['=D5*$E$2', '=D5*E2', '=$D$5*$E$2', '=D5*15000 (gõ trực tiếp số)'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 24): D5 là số lượng của từng loại cây (cần tương đối để khi kéo xuống đổi thành D6, D7), còn E2 là đơn giá chung nên bắt buộc phải tuyệt đối ($E$2).',
      hint: 'D5 là tương đối, $E$2 là tuyệt đối.',
    },
    {
      id: 'b5-kho-4',
      question: 'Sau khi sao chép công thức tính tiền `=A2*B2` xuống các hàng bên dưới, tại ô C8 xuất hiện lỗi `#VALUE!`. Nguyên nhân chính xác nhất là gì?',
      options: [
        'Một trong hai ô A8 hoặc B8 chứa dữ liệu dạng văn bản (text) thay vì dạng số nên không nhân được',
        'Bảng tính bị mất kết nối Internet',
        'Excel không cho phép dùng phép nhân',
        'Dữ liệu trong ô A8 bằng 0'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Lỗi #VALUE! xảy ra khi công thức thực hiện phép tính số học trên dữ liệu sai kiểu (ví dụ ô chứa chữ cái hoặc khoảng trắng không phải số).',
      hint: 'Sai kiểu dữ liệu (chứa chữ cái thay vì số).',
    },
    {
      id: 'b5-kho-5',
      question: 'Tại ô C1 có công thức `=SUM($A$1:A1)`. Khi sao chép công thức từ ô C1 xuống ô C4 thì công thức tại ô C4 sẽ là gì?',
      options: ['=SUM($A$1:A4)', '=SUM($A$1:A1)', '=SUM($A$4:A4)', '=SUM(A1:A4)'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Điểm đầu $A$1 là tuyệt đối nên giữ cố định, điểm cuối A1 là tương đối nên khi kéo xuống 3 hàng sẽ thành A4. Công thức tại C4 là `=SUM($A$1:A4)`. Đây là kỹ thuật tính tổng tích lũy rất phổ biến.',
      hint: 'Đầu cố định $A$1, đuôi A1 chạy thành A4.',
    },
    {
      id: 'b5-kho-6',
      question: 'Lỗi `#DIV/0!` trong bảng tính Excel thường xuất hiện trong tình huống nào sau đây?',
      options: [
        'Công thức thực hiện phép chia cho số 0 hoặc chia cho một ô trống',
        'Tên hàm bị viết sai chính tả',
        'Độ rộng của cột quá hẹp không hiển thị hết số',
        'Công thức có chứa dấu ngoặc đơn'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'DIV/0! là viết tắt của Divide by Zero (chia cho 0). Trong toán học và Excel không thể thực hiện phép chia cho số 0.',
      hint: 'Divide by zero nghĩa là chia cho 0.',
    },
  ],

  // ================= BÀI 6: SẮP XẾP VÀ LỌC DỮ LIỆU =================
  'tin8-bai-6': [
    {
      id: 'b6-de-1',
      question: 'Trong Excel, để thực hiện sắp xếp hoặc lọc dữ liệu, người dùng chọn dải lệnh (thẻ) nào?',
      options: ['Thẻ Home', 'Thẻ Insert', 'Thẻ Data', 'Thẻ View'],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 28, 30): Các lệnh sắp xếp (Sort) và lọc dữ liệu (Filter) nằm trong nhóm Sort & Filter của thẻ Data.',
      hint: 'Data nghĩa là dữ liệu.',
    },
    {
      id: 'b6-de-2',
      question: 'Biểu tượng nút lệnh Lọc dữ liệu (Filter) trong Excel có hình gì?',
      options: ['Hình chiếc phễu lọc', 'Hình kính lúp', 'Hình cục tẩy', 'Hình chiếc kéo'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 30): Nút Filter có biểu tượng hình chiếc phễu lọc quen thuộc.',
      hint: 'Chiếc phễu lọc.',
    },
    {
      id: 'b6-de-3',
      question: 'Sắp xếp dữ liệu trong bảng tính là gì?',
      options: [
        'Hoán đổi vị trí các hàng để giá trị dữ liệu trong một hoặc nhiều cột được xếp theo thứ tự tăng dần hoặc giảm dần',
        'Xóa bỏ những hàng dữ liệu có giá trị thấp',
        'Đổi màu chữ các ô trong bảng tính',
        'Đổi tên trang tính'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 28): Sắp xếp dữ liệu là hoán đổi vị trí các hàng để dữ liệu được sắp theo thứ tự tăng dần hoặc giảm dần.',
      hint: 'Hoán đổi vị trí các hàng theo thứ tự tăng hoặc giảm.',
    },
    {
      id: 'b6-de-4',
      question: 'Ký hiệu nào đại diện cho sắp xếp tăng dần đối với dữ liệu văn bản?',
      options: ['Sort A to Z', 'Sort Z to A', 'Sort Newest to Oldest', 'Filter'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'A to Z sắp xếp từ A đến Z (tăng dần theo bảng chữ cái).',
      hint: 'A đến Z là tăng dần.',
    },
    {
      id: 'b6-tb-1',
      question: 'Khi muốn sắp xếp danh sách học sinh theo thứ tự: ưu tiên sắp xếp theo cột "Tên", nếu trùng Tên thì sắp xếp tiếp theo cột "Họ đệm", em thực hiện như thế nào trong hộp thoại Sort?',
      options: [
        'Chọn cột Tên ở tiêu chí thứ nhất, nháy nút "Add Level" để thêm tiêu chí thứ hai rồi chọn cột Họ đệm',
        'Chọn cột Tên rồi đóng hộp thoại ngay',
        'Chỉ có thể chọn sắp xếp theo một cột duy nhất',
        'Nháy nút Delete Level'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 29 - Hình 6.5): Để sắp xếp theo nhiều tiêu chí, nháy nút "Add Level" để thêm các cấp độ sắp xếp tiếp theo (Then by).',
      hint: 'Add Level nghĩa là thêm mức độ/tiêu chí sắp xếp.',
    },
    {
      id: 'b6-tb-2',
      question: 'Khi lọc dữ liệu trong bảng tính Excel, các hàng dữ liệu KHÔNG thoả mãn điều kiện lọc sẽ ra sao?',
      options: [
        'Tạm thời bị ẩn đi và sẽ hiển thị lại đầy đủ khi bỏ chế độ lọc (hoặc chọn Select All)',
        'Bị xoá vĩnh viễn khỏi bảng tính và không thể khôi phục',
        'Tự động đổi màu chữ sang màu đỏ',
        'Tự động chuyển sang một trang tính mới'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 30): Chức năng lọc chỉ hiển thị các dòng thoả mãn điều kiện, dữ liệu không đúng điều kiện lọc sẽ tạm thời bị ẩn đi chứ không bị xoá mất.',
      hint: 'Dữ liệu chỉ tạm thời bị ẩn, chọn Select All sẽ hiện lại đầy đủ.',
    },
    {
      id: 'b6-tb-3',
      question: 'Để lọc ra những học sinh có Điểm trung bình từ 8.0 trở lên, em chọn mục nào trong menu Number Filters?',
      options: ['Greater Than Or Equal To...', 'Less Than...', 'Between...', 'Equals...'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Greater Than Or Equal To nghĩa là Lớn hơn hoặc bằng (>= 8.0).',
      hint: 'Lớn hơn hoặc bằng.',
    },
    {
      id: 'b6-kho-1',
      question: 'Để huỷ bỏ chế độ lọc và hiển thị lại toàn bộ dữ liệu ban đầu của bảng tính, em thao tác như thế nào?',
      options: [
        'Vào thẻ Data, nháy chuột vào nút Filter đang sáng để tắt chế độ lọc, hoặc nháy nút Clear trong nhóm Sort & Filter',
        'Tắt máy tính và khởi động lại',
        'Xóa toàn bộ cột tiêu đề',
        'Nhấn phím Delete'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 31): Nháy lại vào nút Filter trên dải lệnh Data để tắt chế độ lọc, hoặc nháy nút Clear.',
      hint: 'Nháy lại nút Filter hoặc nút Clear.',
    },
    {
      id: 'b6-kho-2',
      question: 'Khi sắp xếp bảng dữ liệu có dòng tiêu đề cột, nếu không đánh dấu vào ô "My data has headers" trong hộp thoại Sort thì điều gì sẽ xảy ra?',
      options: [
        'Dòng tiêu đề cột sẽ bị coi như một dòng dữ liệu bình thường và bị xáo trộn vị trí trong bảng',
        'Bảng tính sẽ tự động bị khóa',
        'Excel sẽ tự động tạo một trang tính mới',
        'Không có sự cố nào xảy ra'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 28-29): Nếu không chọn "My data has headers", Excel sẽ xem dòng tiêu đề là dữ liệu và sắp xếp lẫn vào danh sách làm hỏng cấu trúc bảng.',
      hint: 'Dòng tiêu đề bị lẫn vào dữ liệu và bị sắp xếp sai vị trí.',
    },
  ],

  // ================= BÀI 7: TRỰC QUAN HOÁ DỮ LIỆU =================
  'tin8-bai-7': [
    {
      id: 'b7-de-1',
      question: 'Loại biểu đồ nào hữu ích nhất khi cần so sánh tỉ lệ phần trăm các phần so với tổng thể?',
      options: ['Biểu đồ cột (Column)', 'Biểu đồ đoạn thẳng (Line)', 'Biểu đồ hình quạt tròn (Pie)', 'Biểu đồ thanh ngang (Bar)'],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 33): Biểu đồ hình quạt tròn rất hữu ích trong trường hợp cần so sánh các phần với tổng thể (ví dụ tỉ lệ % số học sinh tham gia các CLB).',
      hint: 'Biểu đồ hình tròn chia thành các phần phần trăm.',
    },
    {
      id: 'b7-de-2',
      question: 'Biểu đồ đoạn thẳng (Line chart) thường được sử dụng tốt nhất trong trường hợp nào?',
      options: [
        'Quan sát xu hướng tăng giảm của dữ liệu theo thời gian hay quá trình liên tục',
        'So sánh thành phần phần trăm của một chiếc bánh',
        'Chỉ dùng để vẽ hình học trừu tượng',
        'Trình bày danh sách họ tên dài'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 33): Biểu đồ đoạn thẳng thường được sử dụng để quan sát xu hướng tăng giảm của dữ liệu theo thời gian (ví dụ tăng trưởng số lượng qua các năm).',
      hint: 'Đường gấp khúc nối các mốc thời gian phản ánh xu hướng.',
    },
    {
      id: 'b7-de-3',
      question: 'Để chèn một biểu đồ vào bảng tính Excel, người dùng chọn dải lệnh (thẻ) nào?',
      options: ['Thẻ Insert', 'Thẻ Data', 'Thẻ View', 'Thẻ Formulas'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 34): Nhóm Charts nằm trong dải lệnh Insert.',
      hint: 'Insert nghĩa là chèn thêm.',
    },
    {
      id: 'b7-tb-1',
      question: 'Biểu đồ cột (Column chart) thích hợp nhất cho mục đích nào dưới đây?',
      options: [
        'So sánh số lượng dữ liệu giữa các đối tượng khác nhau (ví dụ so sánh điểm số hoặc số học sinh giữa các lớp)',
        'Chỉ hiển thị tỉ lệ phần trăm hình tròn',
        'Lưu trữ video clip',
        'Tạo hiệu ứng âm thanh'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 33): Biểu đồ cột rất dễ quan sát để so sánh đại lượng, quy mô giữa các hạng mục với nhau.',
      hint: 'So sánh độ cao các cột số liệu giữa các lớp.',
    },
    {
      id: 'b7-tb-2',
      question: 'Thành phần "Legend" trong biểu đồ Excel có ý nghĩa là gì?',
      options: ['Bảng chú giải các màu sắc/kí hiệu đại diện cho từng chuỗi dữ liệu', 'Tiêu đề chính của biểu đồ', 'Trục tung thẳng đứng', 'Đường lưới nền'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Legend là bảng chú giải giúp người xem nhận biết mỗi màu sắc trên biểu đồ đại diện cho thông tin gì.',
      hint: 'Chú giải.',
    },
    {
      id: 'b7-kho-1',
      question: 'Để hiển thị nhãn dữ liệu là tỉ lệ phần trăm (%) trên biểu đồ hình quạt tròn trong Excel, em chọn mục nào trong cửa sổ Format Data Labels?',
      options: ['Percentage', 'Value', 'Series Name', 'Category Name'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 34 - Hình 7.7): Đánh dấu chọn vào mục Percentage trong tùy chọn nhãn dữ liệu để hiển thị số phần trăm trên từng phần của biểu đồ tròn.',
      hint: 'Percentage nghĩa là tỉ lệ phần trăm.',
    },
    {
      id: 'b7-kho-2',
      question: 'Sau khi đã tạo xong biểu đồ, nếu em sửa giá trị số liệu trong bảng tính thì biểu đồ sẽ như thế nào?',
      options: [
        'Biểu đồ sẽ tự động cập nhật ngay lập tức theo số liệu mới đã chỉnh sửa',
        'Biểu đồ bị xóa mất',
        'Phải vẽ lại từ đầu biểu đồ mới',
        'Biểu đồ bị biến thành hình vuông màu đen'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 35): Biểu đồ trong Excel liên kết động với bảng dữ liệu nguồn, khi dữ liệu nguồn thay đổi thì hình dạng biểu đồ tự động cập nhật theo.',
      hint: 'Tự động cập nhật theo dữ liệu nguồn.',
    },
  ],

  // ================= BÀI 8A: DANH SÁCH DẠNG LIỆT KÊ VÀ HÌNH ẢNH TRONG VĂN BẢN =================
  'tin8-bai-8a': [
    {
      id: 'b8a-de-1',
      question: 'Phần mềm soạn thảo văn bản cung cấp hai kiểu danh sách dạng liệt kê cơ bản nào?',
      options: [
        'Danh sách dấu đầu dòng (Bullets) và danh sách có thứ tự (Numbering)',
        'Danh sách tự do và danh sách bắt buộc',
        'Danh sách cột và danh sách bảng',
        'Danh sách chữ hoa và danh sách chữ thường'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 37): Phần mềm soạn thảo văn bản cung cấp hai kiểu danh sách dạng liệt kê là: danh sách dấu đầu dòng và danh sách có thứ tự.',
      hint: 'Bullets và Numbering trong Word.',
    },
    {
      id: 'b8a-tb-1',
      question: 'Để bức ảnh làm nền chìm dưới văn bản (văn bản nổi lên trên bức ảnh) trong phần mềm Word, em chọn kiểu bố trí nào trong lệnh Wrap Text?',
      options: ['Behind Text', 'In Line with Text', 'Square', 'In Front of Text'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 40): Chọn lệnh Wrap Text rồi chọn Behind Text để ảnh nằm ở lớp dưới văn bản.',
      hint: 'Behind nghĩa là ở phía sau/dưới.',
    },
    {
      id: 'b8a-kho-1',
      question: 'Trong danh sách có thứ tự, khi đặt con trỏ ở cuối dòng thứ 2 rồi nhấn Enter, điều gì sẽ xảy ra?',
      options: [
        'Tự động tạo ra mục số 3 mới, và các mục bên dưới tự động tăng thứ tự lên một đơn vị',
        'Toàn bộ danh sách biến mất',
        'Chương trình báo lỗi',
        'Chuyển thành danh sách dấu đầu dòng'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 37-38): Thứ tự trong danh sách có thứ tự được tự động tạo và cập nhật mỗi khi người dùng thêm hoặc bớt dòng mới.',
      hint: 'Tính năng tự động tăng chỉ số thứ tự của Word.',
    },
  ],

  // ================= BÀI 9A: TẠO ĐẦU TRANG, CHÂN TRANG CHO VĂN BẢN =================
  'tin8-bai-9a': [
    {
      id: 'b9a-de-1',
      question: 'Header và Footer trong phần mềm soạn thảo văn bản lần lượt được hiểu là gì?',
      options: ['Đầu trang và Chân trang', 'Tiêu đề bài viết và Thân bài', 'Cỡ chữ và Kiểu chữ', 'Cột trái và Cột phải'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 42): Header là phần đầu trang, Footer là phần chân trang xuất hiện lặp lại ở mọi trang tài liệu.',
      hint: 'Đầu trang và chân trang.',
    },
    {
      id: 'b9a-tb-1',
      question: 'Để chèn số trang tự động vào văn bản, người dùng sử dụng lệnh nào trong dải lệnh Insert?',
      options: ['Page Number', 'Table', 'WordArt', 'Equation'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 43): Lệnh Page Number dùng để chèn số trang tự động vào đầu hoặc cuối trang.',
      hint: 'Page Number.',
    },
    {
      id: 'b9a-kho-1',
      question: 'Thông tin nào dưới đây thường ĐƯỢC ĐẶT ở phần Chân trang (Footer) của một cuốn sách giáo khoa?',
      options: [
        'Số thứ tự trang sách hoặc tên bài học/tên tác giả ngắn gọn',
        'Toàn bộ nội dung một bài học dài 5 trang',
        'Một đoạn video clip',
        'Mã nguồn lập trình phức tạp'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 42): Footer thường dùng để đặt số trang, ngày tháng, tên sách ngắn gọn để người đọc tiện theo dõi.',
      hint: 'Số trang hoặc thông tin ngắn gọn nhận diện tài liệu.',
    },
  ],

  // ================= BÀI 10A: ĐỊNH DẠNG NÂNG CAO CHO TRANG CHIẾU =================
  'tin8-bai-10a': [
    {
      id: 'b10a-de-1',
      question: 'Mục đích chính của việc phối màu sắc và cỡ chữ hợp lý trên trang chiếu PowerPoint là gì?',
      options: [
        'Giúp bài thuyết trình rõ ràng, dễ đọc, làm nổi bật nội dung chính và thu hút người nghe',
        'Làm trang chiếu có càng nhiều màu sắc lòe loẹt càng tốt',
        'Giảm dung lượng file xuống mức 0 byte',
        'Làm cho máy chiếu chiếu sáng hơn'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 46): Định dạng nâng cao giúp tăng tính thẩm mỹ và hiệu quả truyền đạt thông tin đến người xem.',
      hint: 'Rõ ràng, dễ đọc và nổi bật trọng tâm.',
    },
    {
      id: 'b10a-tb-1',
      question: 'Quy tắc tương phản màu sắc nào dưới đây giúp chữ trên trang chiếu dễ đọc nhất?',
      options: [
        'Chữ màu tối trên nền màu sáng, hoặc chữ màu sáng trên nền màu tối',
        'Chữ màu vàng nhạt trên nền màu trắng tinh',
        'Chữ màu xanh thẫm trên nền màu đen kịt',
        'Chữ màu xám mờ trên nền xám nhạt'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 47): Độ tương phản cao (chữ đậm trên nền sáng hoặc chữ sáng trên nền tối) giúp người ngồi xa vẫn đọc rõ nội dung.',
      hint: 'Độ tương phản cao giữa màu chữ và màu nền.',
    },
    {
      id: 'b10a-kho-1',
      question: 'Để chèn ngày tháng hiện tại và số thứ tự trang chiếu cho tất cả các slide trong PowerPoint, em sử dụng lệnh nào?',
      options: [
        'Vào thẻ Insert -> Nhóm Text -> Chọn Header & Footer',
        'Vào thẻ View -> Nháy Zoom',
        'Vào thẻ Review -> Spelling',
        'Vào thẻ Home -> Cut'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 48): Hộp thoại Header & Footer trong thẻ Insert cho phép bật Date and time và Slide number cho toàn bộ bài thuyết trình.',
      hint: 'Header & Footer trong thẻ Insert.',
    },
  ],

  // ================= BÀI 11A: SỬ DỤNG BẢN MẪU TẠO BÀI TRÌNH CHIẾU =================
  'tin8-bai-11a': [
    {
      id: 'b11a-de-1',
      question: 'Bản mẫu (Template) trong phần mềm trình chiếu PowerPoint là gì?',
      options: [
        'Một tệp trình chiếu được thiết kế sẵn bố cục, phối màu, phông chữ và hình nền đồng bộ',
        'Một tệp âm thanh bài hát',
        'Một bức tranh tĩnh không sửa được',
        'Một phần mềm diệt virus'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 50): Bản mẫu (Template) là thiết kế hoàn chỉnh định sẵn phong cách giúp tạo bài trình chiếu nhanh chóng và đồng bộ.',
      hint: 'Bản thiết kế sẵn mẫu bố cục, màu sắc.',
    },
    {
      id: 'b11a-tb-1',
      question: 'Tệp bản mẫu trong PowerPoint thường có phần mở rộng mặc định là gì?',
      options: ['.potx', '.docx', '.xlsx', '.mp3'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 50): Tệp bản mẫu của PowerPoint có đuôi là .potx (PowerPoint Template).',
      hint: 'Đuôi .potx.',
    },
    {
      id: 'b11a-kho-1',
      question: 'Chức năng Hyperlink (liên kết) trong PowerPoint cho phép người thuyết trình làm gì?',
      options: [
        'Nhấp chuột vào một đối tượng để lập tức chuyển đến một trang slide khác, một trang web hoặc một tệp tài liệu bên ngoài',
        'Tự động sao lưu máy tính lên mây',
        'Tăng độ phân giải của máy tính',
        'Đổi màu của màn hình máy tính'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 52): Hyperlink tạo liên kết điều hướng nhanh đến trang chiếu khác, tệp tài liệu hay trang web Internet.',
      hint: 'Tạo liên kết chuyển tiếp nhanh.',
    },
  ],

  // ================= BÀI 8B: PHẦN MỀM CHỈNH SỬA ẢNH (GIMP) =================
  'tin8-bai-8b': [
    {
      id: 'b8b-de-1',
      question: 'Điểm ảnh (Pixel) là gì trong đồ hoạ máy tính?',
      options: [
        'Đơn vị nhỏ nhất cấu thành nên một bức ảnh số dạng raster',
        'Tên một phần mềm nghe nhạc',
        'Độ dài của bàn phím',
        'Dung lượng của ổ đĩa cứng'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 54): Pixel (Picture Element) là điểm ảnh, thành phần nhỏ nhất cấu tạo nên bức ảnh số.',
      hint: 'Điểm ảnh là phần tử nhỏ nhất cấu tạo ảnh.',
    },
    {
      id: 'b8b-tb-1',
      question: 'Khái niệm Lớp ảnh (Layer) trong phần mềm GIMP có ý nghĩa như thế nào?',
      options: [
        'Giống như các tờ giấy trong suốt xếp chồng lên nhau, cho phép chỉnh sửa từng phần tử mà không ảnh hưởng đến các phần khác',
        'Là độ sáng của bức ảnh',
        'Là dung lượng của bức ảnh tính bằng Megabyte',
        'Là phần mềm chống vi rút'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 56): Các lớp ảnh (Layers) xếp chồng lên nhau giúp chỉnh sửa độc lập từng đối tượng mà không làm hỏng bức ảnh gốc.',
      hint: 'Các lớp trong suốt xếp chồng lên nhau.',
    },
    {
      id: 'b8b-kho-1',
      question: 'Tệp dự án gốc lưu giữ đầy đủ các lớp ảnh và hiệu ứng của phần mềm GIMP có đuôi mở rộng là gì?',
      options: ['.xcf', '.jpg', '.png', '.gif'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 56): Định dạng .xcf là định dạng tệp chuẩn của GIMP lưu toàn bộ cấu trúc các layer.',
      hint: 'Đuôi .xcf.',
    },
  ],

  // ================= BÀI 9B: THAY ĐỔI KHUNG HÌNH, KÍCH THƯỚC ẢNH =================
  'tin8-bai-9b': [
    {
      id: 'b9b-de-1',
      question: 'Công cụ Crop trong phần mềm GIMP dùng để làm gì?',
      options: ['Cắt xén để lấy một phần khung hình của bức ảnh', 'Tô màu nền', 'Vẽ đường tròn', 'Xoá vĩnh viễn tệp ảnh'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 58): Công cụ Crop dùng để cắt lấy phần ảnh mong muốn và loại bỏ phần thừa.',
      hint: 'Crop nghĩa là cắt xén.',
    },
    {
      id: 'b9b-tb-1',
      question: 'Công cụ Scale Tool trong GIMP có chức năng gì?',
      options: ['Thay đổi kích thước (chiều rộng và chiều cao) của ảnh hoặc lớp ảnh', 'Xoay ảnh 90 độ', 'Lật ngược bức ảnh', 'Đổi ảnh màu thành ảnh đen trắng'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 60): Scale Tool dùng để co giãn, phóng to thu nhỏ kích thước của ảnh.',
      hint: 'Scale nghĩa là tỉ lệ kích thước.',
    },
    {
      id: 'b9b-kho-1',
      question: 'Khi thay đổi kích thước ảnh bằng Scale Image, biểu tượng mắt xích nối giữa Width và Height có ý nghĩa gì?',
      options: [
        'Khóa cố định tỉ lệ khung hình (khi đổi Width thì Height tự đổi theo để ảnh không bị méo mó)',
        'Khóa không cho lưu tệp',
        'Xóa bức ảnh ngay lập tức',
        'Tăng độ sáng của ảnh lên gấp đôi'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 60): Mắt xích giúp giữ nguyên tỉ lệ chiều rộng và chiều cao để đối tượng trong ảnh không bị biến dạng, méo mó.',
      hint: 'Giữ nguyên tỉ lệ để ảnh không bị méo.',
    },
  ],

  // ================= BÀI 10B: THÊM VĂN BẢN, TẠO HIỆU ỨNG CHO ẢNH =================
  'tin8-bai-10b': [
    {
      id: 'b10b-de-1',
      question: 'Công cụ nào trong GIMP dùng để chèn văn bản (chữ) vào bức ảnh?',
      options: ['Text Tool (biểu tượng chữ A)', 'Bucket Fill Tool', 'Eraser Tool', 'Blend Tool'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 62): Text tool có biểu tượng chữ A hoa dùng để chèn chữ vào ảnh.',
      hint: 'Biểu tượng chữ A.',
    },
    {
      id: 'b10b-tb-1',
      question: 'Bộ lọc nào trong GIMP giúp làm mờ hậu cảnh để làm nổi bật đối tượng chính trong ảnh?',
      options: ['Gaussian Blur', 'Sharpen', 'Brightness', 'Invert'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 64): Bộ lọc Blur (đặc biệt là Gaussian Blur) dùng để làm mờ các vùng ảnh.',
      hint: 'Blur nghĩa là làm mờ.',
    },
    {
      id: 'b10b-kho-1',
      question: 'Khi chèn chữ bằng Text Tool trong GIMP, chữ vừa tạo sẽ nằm ở đâu?',
      options: [
        'Tự động tạo ra một Lớp văn bản (Text Layer) riêng biệt',
        'Dính chặt vĩnh viễn vào ảnh nền không thể sửa lại',
        'Làm biến mất toàn bộ các layer khác',
        'Lưu thành một tệp Word riêng biệt'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 62): GIMP tự động tạo ra một lớp văn bản mới giúp người dùng dễ dàng chỉnh sửa lại nội dung chữ, màu sắc và phông chữ bất cứ lúc nào.',
      hint: 'Tạo thành một Text layer riêng biệt.',
    },
  ],

  // ================= BÀI 11B: THỰC HÀNH TỔNG HỢP CHỈNH SỬA ẢNH =================
  'tin8-bai-11b': [
    {
      id: 'b11b-de-1',
      question: 'Lệnh nào trong GIMP dùng để xuất bức ảnh đã hoàn thiện sang định dạng thông dụng như .jpg hoặc .png?',
      options: ['File -> Export As...', 'File -> Save', 'File -> New', 'File -> Close'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 66): Dùng lệnh Export As để xuất ảnh sang các định dạng chuẩn xem trên điện thoại hoặc chia sẻ lên web.',
      hint: 'Export As.',
    },
    {
      id: 'b11b-tb-1',
      question: 'Định dạng ảnh PNG có ưu điểm nổi bật nào so với định dạng JPG?',
      options: [
        'Hỗ trợ nền trong suốt (Transparency) và không bị suy giảm chất lượng khi lưu nhiều lần',
        'Dung lượng luôn lớn hơn video',
        'Chỉ mở được trên máy tính của Mỹ',
        'Không thể in ra giấy'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'PNG hỗ trợ kênh alpha trong suốt rất thích hợp để làm logo và cắt ghép ảnh.',
      hint: 'Hỗ trợ nền trong suốt.',
    },
    {
      id: 'b11b-kho-1',
      question: 'Để gộp một lớp ảnh phía trên vào lớp ảnh ngay phía dưới trong bảng điều khiển Layers của GIMP, em dùng lệnh nào?',
      options: ['Merge Down', 'Delete Layer', 'Duplicate Layer', 'New Layer'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 67): Lệnh Merge Down gộp lớp đang chọn vào lớp liền dưới.',
      hint: 'Merge Down nghĩa là gộp xuống dưới.',
    },
  ],

  // ================= BÀI 12: TỪ THUẬT TOÁN ĐẾN CHƯƠNG TRÌNH (SCRATCH) =================
  'tin8-bai-12': [
    {
      id: 'b12-de-1',
      question: 'Thuật toán là gì?',
      options: [
        'Một dãy các chỉ dẫn rõ ràng, có trình tự từng bước xác định để giải quyết một bài toán hay nhiệm vụ cụ thể',
        'Một chiếc máy tính xách tay hiện đại',
        'Một trò chơi giải trí trên mạng',
        'Một trang web chia sẻ hình ảnh'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 69): Thuật toán là dãy tuần tự các thao tác rõ ràng để biến đổi đầu vào (Input) thành đầu ra (Output).',
      hint: 'Dãy các chỉ dẫn từng bước có thứ tự.',
    },
    {
      id: 'b12-de-2',
      question: 'Trong môi trường lập trình trực quan Scratch, nhân vật di chuyển trên không gian nào?',
      options: ['Sân khấu (Stage)', 'Bảng tính (Sheet)', 'Trang soạn thảo (Document)', 'Thẻ nhớ (Flash)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 70): Sân khấu (Stage) là nơi biểu diễn hoạt động của các nhân vật (Sprites).',
      hint: 'Sân khấu Stage.',
    },
    {
      id: 'b12-tb-1',
      question: 'Để vẽ một tam giác đều có cạnh 100 bước trong Scratch, sau mỗi cạnh nhân vật cần quay một góc bao nhiêu độ?',
      options: ['120 độ', '60 độ', '90 độ', '180 độ'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 71 - Hình 12.3): Góc quay của nhân vật là góc ngoài của đa giác: 360 / 3 = 120 độ.',
      hint: 'Góc quay ngoài bằng 360 chia cho số cạnh (360/3 = 120).',
    },
    {
      id: 'b12-kho-1',
      question: 'Để vẽ một hình vuông có cạnh 80 bước, góc quay của nhân vật sau mỗi cạnh là bao nhiêu độ?',
      options: ['90 độ', '120 độ', '45 độ', '360 độ'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Góc quay của hình vuông là: 360 / 4 = 90 độ.',
      hint: '360 chia 4 bằng 90.',
    },
  ],

  // ================= BÀI 13: BIỂU DIỄN DỮ LIỆU (BIẾN VÀ HẰNG) =================
  'tin8-bai-13': [
    {
      id: 'b13-de-1',
      question: 'Biến (Variable) trong chương trình máy tính dùng để làm gì?',
      options: [
        'Dùng để lưu trữ dữ liệu và giá trị của nó có thể thay đổi trong quá trình thực hiện chương trình',
        'Dùng để kết nối mạng Internet',
        'Dùng để tắt máy tính',
        'Là giá trị cố định không bao giờ thay đổi'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 74): Biến là đại lượng được đặt tên dùng để lưu trữ dữ liệu, giá trị của biến có thể thay đổi trong khi chương trình chạy.',
      hint: 'Biến là đại lượng có thể thay đổi giá trị.',
    },
    {
      id: 'b13-de-2',
      question: 'Hằng (Constant) trong chương trình khác với Biến ở điểm nào?',
      options: [
        'Hằng là đại lượng có giá trị không đổi trong suốt quá trình thực hiện chương trình',
        'Hằng luôn luôn thay đổi liên tục',
        'Hằng chỉ dùng cho số âm',
        'Hằng không thể đặt tên'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 74): Hằng có giá trị cố định không đổi (ví dụ số Pi = 3.14).',
      hint: 'Hằng có giá trị không thay đổi.',
    },
    {
      id: 'b13-tb-1',
      question: 'Trong Scratch, khối lệnh `mod` trong nhóm Toán tử (Operators) thực hiện phép toán gì?',
      options: ['Chia lấy phần dư', 'Chia lấy phần nguyên', 'Tính tổng hai số', 'Tính luỹ thừa'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 76): Phép toán `a mod b` trả về phần dư của phép chia a cho b (ví dụ 7 mod 3 = 1).',
      hint: 'Phép chia lấy phần dư.',
    },
    {
      id: 'b13-kho-1',
      question: 'Khối lệnh `join "Tin học " "Lớp 8"` trong Scratch sẽ trả về kết quả là gì?',
      options: ['"Tin học Lớp 8"', '"Tin họcLớp 8"', 'Không thực hiện được', '0'],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'Khối lệnh join dùng để ghép nối các chuỗi văn bản lại với nhau.',
      hint: 'Ghép nối chuỗi văn bản.',
    },
  ],

  // ================= BÀI 14: CẤU TRÚC ĐIỀU KHIỂN =================
  'tin8-bai-14': [
    {
      id: 'b14-de-1',
      question: 'Trong Scratch, cấu trúc rẽ nhánh dạng đủ được thể hiện bằng khối lệnh nào?',
      options: ['if <điều kiện> then ... else ...', 'repeat <10>', 'forever', 'wait 1 secs'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 79): Cấu trúc nếu ... thì ... không thì ... tương ứng với khối lệnh if ... then ... else ...',
      hint: 'if ... then ... else ...',
    },
    {
      id: 'b14-tb-1',
      question: 'Khối lệnh `repeat until <điều kiện>` trong Scratch sẽ thực hiện lặp như thế nào?',
      options: [
        'Lặp đi lặp lại các lệnh bên trong cho đến khi điều kiện trở thành ĐÚNG thì dừng lặp',
        'Lặp vô tận không bao giờ dừng',
        'Chỉ lặp đúng 1 lần duy nhất',
        'Không thực hiện lệnh nào'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 80): Lệnh lặp với điều kiện dừng repeat until lặp liên tục cho tới khi điều kiện thoả mãn.',
      hint: 'Lặp cho đến khi điều kiện đúng thì dừng.',
    },
    {
      id: 'b14-kho-1',
      question: 'Trong trò chơi "Đoán số", máy tính chọn một số ngẫu nhiên từ 1 đến 100. Cấu trúc điều khiển nào là phù hợp nhất để cho phép người chơi đoán nhiều lần cho đến khi trúng số?',
      options: [
        'Cấu trúc lặp với điều kiện dừng: repeat until <số đoán = số bí mật>',
        'Cấu trúc tuần tự không lặp',
        'Chỉ dùng một khối lệnh if đơn lẻ',
        'Dùng lệnh wait 100 secs'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 80-81): Trò chơi đoán số cần lặp cho đến khi đoán đúng bằng khối lệnh repeat until.',
      hint: 'Lặp cho tới khi số đoán trùng số bí mật.',
    },
  ],

  // ================= BÀI 15: GỠ LỖI =================
  'tin8-bai-15': [
    {
      id: 'b15-de-1',
      question: 'Gỡ lỗi (Debugging) trong lập trình là quá trình gì?',
      options: [
        'Phát hiện, tìm nguyên nhân và sửa chữa các lỗi trong chương trình máy tính',
        'Lau chùi bụi bẩn bám trên màn hình',
        'Cài đặt thêm các trò chơi mới',
        'Xóa bỏ toàn bộ phần mềm'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 83): Gỡ lỗi là quá trình tìm kiếm và khắc phục các sai sót để chương trình chạy đúng mục tiêu.',
      hint: 'Tìm và sửa lỗi chương trình.',
    },
    {
      id: 'b15-tb-1',
      question: 'Lỗi logic (Logic error) trong chương trình có đặc điểm nào dưới đây?',
      options: [
        'Chương trình vẫn chạy được bình thường nhưng kết quả tính toán đưa ra bị SAI so với yêu cầu thực tế',
        'Chương trình báo lỗi đỏ và không thể chạy được',
        'Máy tính tự động sập nguồn',
        'Bàn phím bị liệt'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 84): Lỗi logic là lỗi thuật toán hoặc công thức sai, chương trình không bị lỗi cú pháp nhưng kết quả xuất ra không chính xác.',
      hint: 'Chương trình vẫn chạy nhưng kết quả ra sai.',
    },
    {
      id: 'b15-kho-1',
      question: 'Để kiểm thử và tìm lỗi cho chương trình tính chu vi hình chữ nhật, học sinh nên chọn các bộ dữ liệu kiểm thử (Test cases) như thế nào?',
      options: [
        'Chọn các trường hợp thông thường, trường hợp đặc biệt (chiều dài bằng chiều rộng) và trường hợp số âm để kiểm tra tính đúng đắn toàn diện',
        'Chỉ thử đúng 1 số duy nhất',
        'Không cần kiểm tra dữ liệu',
        'Chỉ nhập chữ cái vào ô số'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 84-85): Bộ dữ liệu kiểm thử tốt cần bao quát cả trường hợp biên và trường hợp đặc biệt.',
      hint: 'Thử nghiệm nhiều trường hợp, cả bình thường và đặc biệt.',
    },
  ],

  // ================= BÀI 16: TIN HỌC VỚI NGHỀ NGHIỆP =================
  'tin8-bai-16': [
    {
      id: 'b16-de-1',
      question: 'Ứng dụng của Tin học trong ngành Y tế bao gồm lĩnh vực nào nổi bật?',
      options: [
        'Chẩn đoán hình ảnh (chụp CT, MRI), hồ sơ bệnh án điện tử và phẫu thuật nội soi có robot hỗ trợ',
        'Trồng trọt lúa nước thủ công',
        'Đan lát mây tre truyền thống',
        'Chỉ dùng để bật đèn phòng khám'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 8 KNTT (Trang 87): Tin học ứng dụng sâu rộng trong y tế: quản lý bệnh án, phân tích hình ảnh X-quang, MRI bằng AI.',
      hint: 'Chẩn đoán hình ảnh và quản lý bệnh án.',
    },
    {
      id: 'b16-tb-1',
      question: 'Ngày Quốc tế "Phụ nữ và trẻ em gái trong ngành CNTT" (Girls in ICT Day) có ý nghĩa gì?',
      options: [
        'Khuyến khích bình đẳng giới và truyền cảm hứng cho nữ giới tham gia học tập, làm việc trong lĩnh vực công nghệ thông tin',
        'Quy định chỉ có phụ nữ mới được dùng máy tính',
        'Là ngày nghỉ lễ không dùng Internet',
        'Chỉ tổ chức tại một quốc gia duy nhất'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 8 KNTT (Trang 90): Ngày Girls in ICT Day tôn vinh và thúc đẩy cơ hội bình đẳng giới cho nữ giới trong ngành công nghệ.',
      hint: 'Khuyến khích bình đẳng giới trong ngành CNTT.',
    },
    {
      id: 'b16-kho-1',
      question: 'Ứng dụng của Internet vạn vật (IoT) và Tin học trong nông nghiệp công nghệ cao giúp người nông dân điều gì?',
      options: [
        'Tự động theo dõi độ ẩm đất, nhiệt độ và điều khiển hệ thống tưới tiêu chính xác từ xa qua điện thoại thông minh',
        'Không cần trồng cây mà vẫn có quả thu hoạch',
        'Làm cho đất tự biến thành cát',
        'Máy tính tự động nấu ăn'
      ],
      correctAnswer: 0,
      difficulty: 'kho',
      explanation: 'SGK Tin học 8 KNTT (Trang 88): Cảm biến IoT đo độ ẩm, ánh sáng để kích hoạt hệ thống tưới tiêu thông minh giúp tiết kiệm nước và nâng cao năng suất.',
      hint: 'Tự động đo độ ẩm, tưới tiêu chính xác từ xa.',
    },
  ],
};

export const BUILT_IN_QUESTIONS: Record<string, Question[]> = {
  ...QUESTIONS_GRADE_3,
  ...QUESTIONS_GRADE_4,
  ...QUESTIONS_GRADE_5,
  ...QUESTIONS_GRADE_6,
  ...QUESTIONS_GRADE_7,
  ...GRADE_8_QUESTIONS,
  ...QUESTIONS_GRADE_9,
  'tin9-on-tap-giua-ki-1': ALL_GRADE_9_MIDTERM_QUESTIONS,
};
