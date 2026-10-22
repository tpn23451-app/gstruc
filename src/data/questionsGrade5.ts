import { Question } from '../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI TIN HỌC LỚP 5
 * CHUẨN 100% THEO SÁCH GIÁO KHOA TIN HỌC 5 - BỘ SÁCH "KẾT NỐI TRI THỨC VỚI CUỘC SỐNG"
 * (Tổng chủ biên: Nguyễn Chí Công - Chủ biên: Hoàng Thị Mai - NXB Giáo dục Việt Nam)
 * Bao gồm đầy đủ các dạng: Trắc nghiệm, Đúng/Sai, Điền khuyết, Ghép nối cột, Kéo thả sắp xếp
 */
export const QUESTIONS_GRADE_5: Record<string, Question[]> = {
  // =========================================================================
  // ĐỀ CƯƠNG ÔN TẬP GIỮA KÌ 1 TIN HỌC 5 (CHUẨN 100% BÀI 1, 2, 3, 4 SGK KNTT)
  // Gồm đầy đủ các dạng: Trắc nghiệm nhanh, Đúng/Sai, Điền khuyết, Nối cột, Kéo thả
  // =========================================================================
  'tin5-on-tap-giua-ki-1': [
    // -----------------------------------------------------------------------
    // BÀI 1: EM CÓ THỂ LÀM GÌ VỚI MÁY TÍNH? (SGK TRANG 5 - 7)
    // -----------------------------------------------------------------------
    {
      id: 'g5-mid-b1-1',
      type: 'multiple_choice',
      question: 'Theo SGK Tin học 5 trang 5, máy tính có thể giúp em tạo ra các sản phẩm số nào sau đây?',
      options: [
        'In sách vở giấy, đóng bìa vở ghi chép thủ công và sản xuất dụng cụ học tập.',
        'Lắp ráp bàn ghế học sinh, sửa chữa quạt điện và sơn lại tường phòng học.',
        'Viết truyện bằng phần mềm soạn thảo, làm album ảnh bằng phần mềm trình chiếu, viết trò chơi bằng Scratch.',
        'Vẽ tranh sơn dầu trên vải toan, nặn tượng đất sét và may trang phục biểu diễn.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Theo mục "Tạo ra sản phẩm số" SGK Tin học 5 trang 6: Em có thể viết truyện bằng phần mềm soạn thảo, thiết kế album ảnh bằng phần mềm trình chiếu hay viết chương trình trò chơi bằng Scratch.',
      hint: 'Sản phẩm số là các tác phẩm được sáng tạo bằng các phần mềm máy tính.'
    },
    {
      id: 'g5-mid-b1-2',
      type: 'multiple_choice',
      question: 'Các phần mềm nào sau đây giúp học sinh có thể họp nhóm, thảo luận học tập trực tuyến với nhau trên Internet (theo SGK Tin học 5 trang 6)?',
      options: [
        'Google Chrome, Cốc Cốc, Microsoft Edge (các trình duyệt web).',
        'Zoom, Google Meet, Microsoft Teams (họp và học trực tuyến).',
        'Microsoft Word, Microsoft Excel, Notepad (các phần mềm soạn thảo văn phòng).',
        'Windows Media Player, Paint, Calculator (các phần mềm ứng dụng tiện ích).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'SGK Tin học 5 trang 6: Em có thể tham gia các nhóm học tập trên Internet với bạn cùng lớp qua các phần mềm như Zoom, Google Meet, Microsoft Teams.',
      hint: 'Các phần mềm gọi video và học tập trực tuyến phổ biến.'
    },
    {
      id: 'g5-mid-b1-3',
      type: 'multiple_choice',
      question: 'Để tìm hiểu thế giới tự nhiên bằng phần mềm máy tính trong giờ học, SGK Tin học 5 trang 5 giới thiệu phần mềm nào?',
      options: [
        'Phần mềm luyện gõ bàn phím nhanh Mario Teaches Typing.',
        'Phần mềm xem phim hoạt hình thiếu nhi YouTube Kids.',
        'Phần mềm vẽ tranh và tô màu sáng tạo thiếu nhi Paint.',
        'Phần mềm tìm hiểu thế giới tự nhiên Kids Games Learning Science.'
      ],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'SGK Tin học 5 trang 5 (Mục 1 - Học tập): "Em có thể tìm hiểu thế giới tự nhiên bằng phần mềm Kids Games Learning Science, biết thêm những điều mới mẻ về lịch sử, văn hoá qua các video..."',
      hint: 'Phần mềm khoa học có tên Kids Games Learning Science.'
    },
    {
      id: 'g5-mid-b1-4',
      type: 'multiple_choice',
      question: 'Trong phần thực hành chơi trò chơi "Mê cung" (MeCung) viết bằng Scratch ở SGK Tin học 5 trang 6 - 7, em sử dụng các phím nào để điều khiển chú chuột?',
      options: [
        'Các phím chữ cái (A, S, D, W trên bàn phím máy tính).',
        'Các phím số (1, 2, 3, 4 ở hàng phím số phía trên).',
        'Phím dấu cách Spacebar và phím Enter trên bàn phím.',
        'Các phím mũi tên (lên, xuống, trái, phải).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Theo SGK Tin học 5 trang 6 - 7: Em sử dụng các phím mũi tên để điều khiển chú chuột di chuyển từ Lối vào đến Lối ra của mê cung.',
      hint: 'Dùng 4 phím mũi tên điều hướng.'
    },
    {
      id: 'g5-mid-b1-5',
      type: 'multiple_choice',
      question: 'Phát biểu nào sau đây nêu đúng nhất về vai trò của máy tính đối với học sinh lớp 5 (SGK Tin học 5 trang 6)?',
      options: [
        'Máy tính chỉ dùng để chơi trò chơi trực tuyến và xem phim giải trí, không có ích cho học tập.',
        'Máy tính giúp học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác bạn bè và tạo ra các sản phẩm số.',
        'Máy tính có thể làm thay toàn bộ bài tập và tự động học bài thay học sinh mà không cần suy nghĩ.',
        'Máy tính chỉ dành riêng cho người lớn làm việc văn phòng, học sinh tiểu học không nên sử dụng.'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 6: Máy tính có thể giúp em học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè và tạo ra sản phẩm số theo ý tưởng của mình.',
      hint: 'Máy tính là công cụ đa năng phục vụ học tập, kết nối và sáng tạo.'
    },
    {
      id: 'g5-mid-b1-6',
      type: 'multiple_choice',
      question: 'Khẳng định: "Máy tính giúp em tra cứu từ điển tiếng Anh bằng Google Translate và soạn bài thuyết trình báo cáo trước lớp." là Đúng hay Sai?',
      options: [
        'Đúng (SGK Tin học 5 giới thiệu tra từ điển và chuẩn bị bài thuyết trình trước lớp).',
        'Sai (máy tính chỉ dùng để xem phim chứ không tra từ điển hay làm bài thuyết trình được).'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'SGK Tin học 5 trang 5 - 6 nêu rõ: Em có thể dịch từ tiếng Anh bằng Google Translate, làm bài tập trên phần mềm soạn thảo hay chuẩn bị báo cáo trước lớp bằng phần mềm trình chiếu.',
      hint: 'Khẳng định này hoàn toàn đúng với nội dung Bài 1 SGK.'
    },
    {
      id: 'g5-mid-b1-7',
      type: 'multiple_choice',
      question: 'Khẳng định: "Học sinh tiểu học có thể ngồi chơi trò chơi trên máy tính liên tục 5 - 6 tiếng mỗi ngày mà không cần nghỉ ngơi." là Đúng hay Sai?',
      options: [
        'Đúng (chơi càng nhiều giờ liên tục càng giúp học sinh rèn luyện phản xạ nhanh nhẹn).',
        'Sai (cần sử dụng điều độ, nghỉ ngơi sau mỗi 30 phút để bảo vệ mắt và sức khỏe cột sống).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'SGK Tin học nhắc nhở học sinh cần sử dụng máy tính có kế hoạch, hợp lý và điều độ để bảo vệ mắt và cột sống, không ngồi quá lâu liên tục.',
      hint: 'Sử dụng máy tính liên tục nhiều giờ gây hại cho mắt và sức khỏe.'
    },
    {
      id: 'g5-mid-b1-8',
      type: 'fill_blank',
      question: 'Điền từ thích hợp vào chỗ trống: "Máy tính có thể giúp em [1], giải trí, tìm kiếm, [2] thông tin, hợp tác với bạn bè và tạo ra [3] theo ý tưởng của mình."',
      options: ['học tập', 'trao đổi', 'sản phẩm số', 'tiền bạc'],
      correctAnswer: 0,
      blankAnswers: ['học tập', 'trao đổi', 'sản phẩm số'],
      wordBank: ['học tập', 'trao đổi', 'sản phẩm số', 'tiền bạc'],
      difficulty: 'trung_binh',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 6: "Máy tính có thể giúp em học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè và tạo ra sản phẩm số theo ý tưởng của mình."',
      hint: 'Ba lợi ích lớn: học tập, trao đổi thông tin và tạo sản phẩm số.'
    },
    {
      id: 'g5-mid-b1-9',
      type: 'matching',
      question: 'Em hãy ghép nối hoạt động sử dụng máy tính ở Cột A với ví dụ cụ thể tương ứng ở Cột B (theo SGK Tin học 5 trang 5 - 6):',
      options: [],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'b1-l1', text: 'Học tập', label: '1' },
        { id: 'b1-l2', text: 'Giải trí', label: '2' },
        { id: 'b1-l3', text: 'Trao đổi thông tin', label: '3' },
        { id: 'b1-l4', text: 'Hợp tác với bạn bè', label: '4' }
      ],
      matchingRight: [
        { id: 'b1-r1', text: 'Khám phá thế giới tự nhiên qua Kids Games Learning Science', label: 'CN1' },
        { id: 'b1-r2', text: 'Nghe nhạc thiếu nhi, xem phim hoạt hình có âm thanh sống động', label: 'CN2' },
        { id: 'b1-r3', text: 'Gửi thư điện tử email, nhắn tin, gọi video cho người thân', label: 'CN3' },
        { id: 'b1-r4', text: 'Thảo luận làm bài tập nhóm trực tuyến qua Zoom, Google Meet', label: 'CN4' }
      ],
      correctMatches: {
        'b1-l1': 'b1-r1',
        'b1-l2': 'b1-r2',
        'b1-l3': 'b1-r3',
        'b1-l4': 'b1-r4'
      },
      pairs: [
        { left: 'Học tập', right: 'Khám phá thế giới tự nhiên qua Kids Games Learning Science' },
        { left: 'Giải trí', right: 'Nghe nhạc thiếu nhi, xem phim hoạt hình có âm thanh sống động' },
        { left: 'Trao đổi thông tin', right: 'Gửi thư điện tử email, nhắn tin, gọi video cho người thân' },
        { left: 'Hợp tác với bạn bè', right: 'Thảo luận làm bài tập nhóm trực tuyến qua Zoom, Google Meet' }
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Đối chiếu chính xác 4 mục Học tập, Giải trí, Trao đổi thông tin và Hợp tác với các bạn trong SGK Tin học 5 trang 5 - 6.',
      hint: 'Ghép từng hoạt động với ứng dụng phần mềm minh hoạ trong sách.'
    },
    {
      id: 'g5-mid-b1-10',
      type: 'drag_drop_order',
      question: 'Em hãy kéo thả để sắp xếp các bước trải nghiệm trò chơi Mê cung (MeCung) trong phần mềm Scratch (theo SGK Tin học 5 trang 7):',
      options: [],
      correctAnswer: 0,
      orderItems: [
        { id: 'mecung-1', text: '1. Khởi động phần mềm Scratch và mở tệp trò chơi MeCung' },
        { id: 'mecung-2', text: '2. Nháy chuột vào nút lệnh Lá cờ xanh để bắt đầu chơi' },
        { id: 'mecung-3', text: '3. Sử dụng các phím mũi tên để điều khiển chú chuột từ Lối vào đến Lối ra' },
        { id: 'mecung-4', text: '4. Quan sát thời gian chơi tính bằng giây hiển thị trên sân khấu khi hoàn thành' }
      ],
      correctOrder: ['mecung-1', 'mecung-2', 'mecung-3', 'mecung-4'],
      items: [
        '1. Khởi động phần mềm Scratch và mở tệp trò chơi MeCung',
        '2. Nháy chuột vào nút lệnh Lá cờ xanh để bắt đầu chơi',
        '3. Sử dụng các phím mũi tên để điều khiển chú chuột từ Lối vào đến Lối ra',
        '4. Quan sát thời gian chơi tính bằng giây hiển thị trên sân khấu khi hoàn thành'
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 1: Em có thể làm gì với máy tính?',
      explanation: 'Theo Hướng dẫn thực hành SGK Tin học 5 trang 7: Mở tệp MeCung -> Nháy cờ xanh -> Dùng phím mũi tên -> Quan sát thời gian.',
      hint: 'Mở tệp -> Bấm cờ xanh -> Phím mũi tên -> Hoàn thành.'
    },

    // -----------------------------------------------------------------------
    // BÀI 2: TÌM KIẾM THÔNG TIN TRÊN WEBSITE (SGK TRANG 8 - 13)
    // -----------------------------------------------------------------------
    {
      id: 'g5-mid-b2-1',
      type: 'multiple_choice',
      question: 'Khi truy cập vào một website bất kì trên Internet, trang đầu tiên xuất hiện được gọi là gì (theo SGK Tin học 5 trang 9)?',
      options: [
        'Trang giới thiệu tác giả website.',
        'Trang tìm kiếm nâng cao website.',
        'Trang chủ (homepage) của website.',
        'Trang điều khoản dịch vụ website.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 9: "Khi truy cập website, trang chủ (homepage) sẽ xuất hiện đầu tiên."',
      hint: 'Homepage là trang chính xuất hiện đầu tiên.'
    },
    {
      id: 'g5-mid-b2-2',
      type: 'multiple_choice',
      question: 'Để quay trở lại trang chủ của website khi đang xem các bài viết khác, người dùng thường nháy chuột vào nút lệnh có hình gì (SGK trang 9)?',
      options: [
        'Hình chiếc kính lúp phóng đại.',
        'Hình bánh răng cài đặt hệ thống.',
        'Hình mũi tên quay tròn tải lại.',
        'Hình ngôi nhà (biểu tượng Home).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 9 ghi chú: "Nút về trang chủ thường có hình ngôi nhà."',
      hint: 'Nút hình ngôi nhà (Home).'
    },
    {
      id: 'g5-mid-b2-3',
      type: 'multiple_choice',
      question: 'Nút công cụ tìm kiếm bên trong một website thường có hình biểu tượng nào (SGK Tin học 5 trang 9)?',
      options: [
        'Hình quyển sách mở rộng hai bên.',
        'Hình chiếc kính lúp (công cụ tìm kiếm).',
        'Hình chiếc chuông thông báo mới.',
        'Hình lá cờ màu đỏ ở góc trang web.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 9 ghi chú: "Nút tìm kiếm thường có hình kính lúp."',
      hint: 'Biểu tượng kính lúp phóng đại.'
    },
    {
      id: 'g5-mid-b2-4',
      type: 'multiple_choice',
      question: 'Theo Hộp kiến thức SGK Tin học 5 trang 10, để tìm kiếm thông tin trên một website em có thể thực hiện theo những cách nào?',
      options: [
        'Duyệt theo các chủ đề của website hoặc sử dụng công cụ tìm kiếm của website.',
        'Gửi thư điện tử cho tác giả bài viết hoặc gọi điện thoại trực tiếp cho ban quản trị.',
        'Tải toàn bộ trang web về máy tính rồi dùng phần mềm Word để tìm kiếm từng từ một.',
        'Đóng trình duyệt web rồi mở lại nhiều lần cho đến khi trang web tự hiển thị nội dung.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 10: "Để tìm kiếm thông tin trên một website em có thể: Duyệt theo các chủ đề của website; Sử dụng công cụ tìm kiếm của website."',
      hint: 'Hai cách: duyệt theo các chủ đề hoặc gõ vào ô tìm kiếm.'
    },
    {
      id: 'g5-mid-b2-5',
      type: 'multiple_choice',
      question: 'Muốn lưu một hình ảnh từ trang web về máy tính để làm tư liệu (SGK Tin học 5 trang 12), em thực hiện thao tác nào sau đây?',
      options: [
        'Nháy nút trái chuột liên tục vào bức ảnh, nhấn tổ hợp phím Ctrl + Delete rồi tắt máy tính.',
        'Kéo thả bức ảnh từ trình duyệt vào thùng rác Recycle Bin rồi nhấp lệnh Restore để lưu lại.',
        'Nháy nút phải chuột vào hình ảnh, chọn lệnh Save image as..., chọn thư mục lưu và nháy Save.',
        'Chụp ảnh màn hình bằng điện thoại di động rồi in ra giấy chuyển đến thư viện nhà trường.'
      ],
      correctAnswer: 2,
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 12 Bước 5: Nháy nút phải chuột vào hình biểu tượng, chọn Save image as..., chọn thư mục lưu tệp, nhập tên tệp rồi nhấn nút Save.',
      hint: 'Nháy chuột phải và chọn Save image as...'
    },
    {
      id: 'g5-mid-b2-6',
      type: 'multiple_choice',
      question: 'Theo SGK Tin học 5 trang 10, thông tin được lưu trên máy tính có thể được chia sẻ cho người khác bằng những cách nào?',
      options: [
        'In toàn bộ dữ liệu ra giấy rồi chuyển phát nhanh trực tiếp đến từng gia đình học sinh.',
        'Sao chép qua các thiết bị lưu trữ di động (USB) hoặc gửi qua mạng (email, mạng xã hội...).',
        'Chỉ có thể chia sẻ dữ liệu khi hai máy tính được đặt sát cạnh nhau và cắm chung một ổ điện.',
        'Không thể chia sẻ bất kì tệp tin nào đã lưu trên máy tính cho người khác dưới mọi hình thức.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 10: "Có nhiều cách để chia sẻ thông tin, ví dụ gửi qua mạng hay sử dụng các thiết bị lưu trữ di động."',
      hint: 'Chia sẻ qua mạng (email/mạng xã hội) hoặc qua thiết bị nhớ USB.'
    },
    {
      id: 'g5-mid-b2-7',
      type: 'multiple_choice',
      question: 'Khẳng định: "Khi cắm thiết bị nhớ USB vào máy tính, em cần quan sát để cắm đúng chiều và đẩy nhẹ tay vào cổng USB trên thân máy." là Đúng hay Sai?',
      options: [
        'Sai (cắm chiều nào cũng được và dùng lực ấn thật mạnh để USB kết nối chắc chắn hơn).',
        'Đúng (giúp bảo vệ chân tiếp xúc và không làm gãy cổng cắm USB trên thân máy tính).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 12 ghi rõ: "Cắm USB vào cổng USB trên thân máy tính. Chú ý quan sát để cắm đúng chiều, nhẹ tay. Có thể nhờ người lớn trợ giúp."',
      hint: 'Luôn cắm đúng chiều và nhẹ tay.'
    },
    {
      id: 'g5-mid-b2-8',
      type: 'multiple_choice',
      question: 'Khẳng định: "Sau khi sao chép tệp xong, em có thể rút ngay USB ra khỏi máy tính mà không cần thực hiện lệnh ngắt an toàn Eject." là Đúng hay Sai?',
      options: [
        'Đúng (rút trực tiếp nhanh hơn và không bao giờ gây ảnh hưởng đến dữ liệu lưu trữ).',
        'Sai (cần ngắt an toàn bằng lệnh Eject để tránh làm hỏng USB và làm mất tệp dữ liệu).'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 13: "Sau khi sao chép tệp, em cần ngắt USB khỏi máy tính đúng cách để tránh làm hỏng USB và tệp dữ liệu."',
      hint: 'Rút đột ngột khi chưa ngắt kết nối có thể làm hỏng USB và hỏng tệp.'
    },
    {
      id: 'g5-mid-b2-9',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Để tìm kiếm thông tin trên một website, em có thể: Duyệt theo các [1] của website hoặc sử dụng [2] của website. Khi cần ngắt kết nối USB, em chọn lệnh [3]."',
      options: ['chủ đề', 'công cụ tìm kiếm', 'Eject', 'Delete'],
      correctAnswer: 0,
      blankAnswers: ['chủ đề', 'công cụ tìm kiếm', 'Eject'],
      wordBank: ['chủ đề', 'công cụ tìm kiếm', 'Eject', 'Delete'],
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 10 và hướng dẫn ngắt USB trang 13.',
      hint: 'Duyệt chủ đề, dùng công cụ tìm kiếm và lệnh ngắt an toàn Eject.'
    },
    {
      id: 'g5-mid-b2-10',
      type: 'matching',
      question: 'Em hãy ghép nối thành phần trên website hoặc thao tác ở Cột A với chức năng tương ứng ở Cột B (theo SGK Tin học 5 trang 9 - 13):',
      options: [],
      matchingLeft: [
        { id: 'b2-l1', text: 'Nút hình ngôi nhà', label: '1' },
        { id: 'b2-l2', text: 'Nút hình chiếc kính lúp', label: '2' },
        { id: 'b2-l3', text: 'Lệnh Save image as...', label: '3' },
        { id: 'b2-l4', text: 'Lệnh Eject cho USB', label: '4' }
      ],
      matchingRight: [
        { id: 'b2-r1', text: 'Quay trở về trang chủ (homepage) của website', label: 'CN1' },
        { id: 'b2-r2', text: 'Mở ô tìm kiếm để nhập từ khoá nội dung cần tìm', label: 'CN2' },
        { id: 'b2-r3', text: 'Lưu hình ảnh từ trang web về máy tính', label: 'CN3' },
        { id: 'b2-r4', text: 'Ngắt kết nối thiết bị USB an toàn trước khi rút ra', label: 'CN4' }
      ],
      correctMatches: {
        'b2-l1': 'b2-r1',
        'b2-l2': 'b2-r2',
        'b2-l3': 'b2-r3',
        'b2-l4': 'b2-r4'
      },
      pairs: [
        { left: 'Nút hình ngôi nhà', right: 'Quay trở về trang chủ (homepage) của website' },
        { left: 'Nút hình chiếc kính lúp', right: 'Mở ô tìm kiếm để nhập từ khoá nội dung cần tìm' },
        { left: 'Lệnh Save image as...', right: 'Lưu hình ảnh từ trang web về máy tính' },
        { left: 'Lệnh Eject cho USB', right: 'Ngắt kết nối thiết bị USB an toàn trước khi rút ra' }
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'Theo SGK Tin học 5 trang 9 - 13: Các biểu tượng và thao tác cơ bản khi dùng website và USB.',
      hint: 'Ngôi nhà là trang chủ, kính lúp là tìm kiếm, Save image as lưu ảnh, Eject ngắt USB.'
    },
    {
      id: 'g5-mid-b2-11',
      type: 'drag_drop_order',
      question: 'Em hãy kéo thả để sắp xếp các bước ngắt kết nối an toàn thiết bị USB khỏi máy tính (theo SGK Tin học 5 trang 13):',
      options: [],
      orderItems: [
        { id: 'usb-1', text: '1. Nháy chuột vào mũi tên nhỏ ở góc dưới, bên phải màn hình nền' },
        { id: 'usb-2', text: '2. Chọn biểu tượng USB, chọn lệnh Eject trong hộp thoại vừa mở' },
        { id: 'usb-3', text: '3. Chờ máy tính hiện thông báo: "Safe to Remove Hardware"' },
        { id: 'usb-4', text: '4. Nhẹ nhàng rút USB ra khỏi cổng USB trên thân máy tính' }
      ],
      correctOrder: ['usb-1', 'usb-2', 'usb-3', 'usb-4'],
      items: [
        '1. Nháy chuột vào mũi tên nhỏ ở góc dưới, bên phải màn hình nền',
        '2. Chọn biểu tượng USB, chọn lệnh Eject trong hộp thoại vừa mở',
        '3. Chờ máy tính hiện thông báo: "Safe to Remove Hardware"',
        '4. Nhẹ nhàng rút USB ra khỏi cổng USB trên thân máy tính'
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 2: Tìm kiếm thông tin trên website',
      explanation: 'SGK Tin học 5 trang 13: Quy trình 4 bước ngắt USB an toàn bảo vệ thiết bị và dữ liệu.',
      hint: 'Mũi tên góc phải -> Biểu tượng USB & Eject -> Chờ thông báo Safe -> Rút USB.'
    },

    // -----------------------------------------------------------------------
    // BÀI 3: TÌM KIẾM THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ (SGK TRANG 14 - 18)
    // -----------------------------------------------------------------------
    {
      id: 'g5-mid-b3-1',
      type: 'multiple_choice',
      question: 'Vì sao việc thu thập và tìm kiếm thông tin là cần thiết và quan trọng trước khi giải quyết một vấn đề (SGK Tin học 5 trang 15)?',
      options: [
        'Vì việc tìm kiếm thông tin sẽ làm mất nhiều thời gian và khiến công việc bị đình trệ.',
        'Vì quy định nhà trường bắt buộc học sinh phải tra cứu thông tin dù không cần dùng đến.',
        'Vì có đầy đủ thông tin sẽ giúp em đưa ra quyết định đúng đắn và giải quyết vấn đề tốt hơn.',
        'Vì máy tính sẽ tự động thay thế con người làm hết mọi việc nếu chúng ta thu thập thông tin.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 15: "Thu thập và tìm kiếm thông tin là cần thiết và quan trọng trong giải quyết vấn đề. Có đầy đủ thông tin sẽ giúp em giải quyết vấn đề tốt hơn."',
      hint: 'Có thông tin mới đưa ra quyết định sáng suốt và chuẩn bị chu đáo.'
    },
    {
      id: 'g5-mid-b3-2',
      type: 'multiple_choice',
      question: 'Trong tình huống kì nghỉ hè ở SGK Tin học 5 trang 14 - 15, vì sao bạn An có chuyến đi nghỉ hè ở Nha Trang thành công và vui vẻ?',
      options: [
        'Vì An đã tìm hiểu trước thông tin thời tiết nắng nóng ở Nha Trang nên chuẩn bị đúng quần áo hè, đồ bơi, kem chống nắng.',
        'Vì An mang theo rất nhiều áo len dày ấm, ủng đi tuyết và túi sưởi ấm để phòng khi thời tiết Nha Trang chuyển lạnh đột ngột.',
        'Vì An không cần tìm kiếm bất kì thông tin nào trước chuyến đi mà chỉ mang theo sách vở và đồ dùng học tập của cả năm học.',
        'Vì An quyết định ở nhà xem tivi suốt kì nghỉ hè chứ không đi du lịch cùng gia đình đến bãi biển Nha Trang như kế hoạch.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'SGK Tin học 5 trang 14 - 15: "An đi Nha Trang, An tìm thông tin và biết Nha Trang là thành phố biển, quanh năm nắng nóng vì vậy chỉ cần mang quần áo mùa hè, đồ bơi, kính bơi, kem chống nắng... nên kì nghỉ của An rất thành công."',
      hint: 'Bạn An tìm hiểu kĩ thông tin nơi đến trước chuyến đi.'
    },
    {
      id: 'g5-mid-b3-3',
      type: 'multiple_choice',
      question: 'Trong SGK Tin học 5 trang 14 - 15, bạn Minh đi thăm họ hàng ở Úc vào kì nghỉ hè ở Việt Nam nhưng gặp khó khăn lớn. Nguyên nhân chính là gì?',
      options: [
        'Nước Úc có quy định nghiêm ngặt cấm tất cả du khách nước ngoài mang theo quần áo mùa hè khi nhập cảnh vào sân bay.',
        'Nước Úc ở Nam bán cầu đang là mùa đông lạnh giá, nhưng Minh không tìm hiểu trước nên chỉ mang toàn quần áo mùa hè.',
        'Minh bị thất lạc toàn bộ hành lí cá nhân trên máy bay nên không có quần áo ấm để mặc trong suốt thời gian ở nước Úc.',
        'Khí hậu nước Úc vào kì nghỉ hè luôn nóng trên 50 độ C khiến Minh bị say nắng và không thể ra ngoài tham quan được.'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'SGK Tin học 5 trang 15: "Úc là nước nằm ở Nam bán cầu, lúc này ở Úc đang là mùa đông. Minh không biết điều đó nên mang toàn quần áo mùa hè. Kì nghỉ hè của Minh vì thế không thành công như mong đợi."',
      hint: 'Úc ở Nam bán cầu có các mùa trái ngược với Việt Nam.'
    },
    {
      id: 'g5-mid-b3-4',
      type: 'multiple_choice',
      question: 'Khi làm việc nhóm để giải quyết một nhiệm vụ học tập (ví dụ làm bài trình chiếu), cách làm nào sau đây là hợp lý và hiệu quả nhất (SGK trang 16)?',
      options: [
        'Giao toàn bộ công việc cho bạn nhóm trưởng tự làm một mình, các thành viên còn lại trong nhóm không cần tham gia đóng góp ý kiến.',
        'Mỗi thành viên tự làm một bài trình chiếu riêng biệt theo ý mình rồi nộp cả nhóm nhiều bài khác nhau cho thầy cô giáo chấm điểm.',
        'Chỉ phân công công việc cho những bạn có máy tính xách tay xịn nhất, những bạn không có máy tính thì không được tham gia vào nhóm.',
        'Cả nhóm cùng thảo luận, chia công việc thành nhiều việc nhỏ, phân công theo điểm mạnh của mỗi người và có tinh thần trách nhiệm.'
      ],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 16: "Khi làm việc nhóm, cần thảo luận, phân công công việc dựa vào điểm mạnh của mỗi người. Khi được phân công, cần có ý thức, tinh thần trách nhiệm; hợp tác và giúp đỡ nhau."',
      hint: 'Thảo luận, phân công theo điểm mạnh và có trách nhiệm.'
    },
    {
      id: 'g5-mid-b3-5',
      type: 'multiple_choice',
      question: 'Khái niệm "Từ khoá" (keyword) khi tìm kiếm thông tin trên Internet được hiểu là gì (SGK Tin học 5 trang 19)?',
      options: [
        'Là từ hoặc cụm từ ngắn gọn thể hiện nội dung chúng ta muốn tìm kiếm.',
        'Là mật khẩu bí mật dùng để đăng nhập vào tài khoản thư điện tử cá nhân.',
        'Là tên của nhà sản xuất phần mềm hệ điều hành cài đặt trên máy tính.',
        'Là địa chỉ trang web bắt đầu bằng các chữ cái www mà em truy cập vào.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 19: "Từ khoá là từ hoặc cụm từ thể hiện nội dung muốn tìm kiếm."',
      hint: 'Từ hoặc cụm từ ngắn gọn thể hiện nội dung cần tìm.'
    },
    {
      id: 'g5-mid-b3-6',
      type: 'multiple_choice',
      question: 'Nhóm em dự định đi du lịch Sa Pa vào dịp Tết Dương lịch và muốn tìm hiểu các địa điểm tham quan trên Google. Từ khoá nào sau đây là phù hợp nhất (SGK trang 17)?',
      options: [
        'Du lịch bốn phương mùa xuân',
        'Những địa điểm đẹp Việt Nam',
        'Các điểm tham quan ở Sa Pa',
        'Thông tin thời tiết vùng cao'
      ],
      correctAnswer: 2,
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'SGK Tin học 5 trang 17: Tìm kiếm với từ khoá "Các điểm tham quan ở Sa Pa" giúp máy tìm kiếm đưa ra danh sách các thắng cảnh nổi tiếng của Sa Pa chính xác và đầy đủ.',
      hint: 'Từ khoá rõ ràng, chứa tên địa danh cụ thể Sa Pa và nội dung cần tìm.'
    },
    {
      id: 'g5-mid-b3-7',
      type: 'multiple_choice',
      question: 'Khẳng định: "Trước khi đưa ra một quyết định quan trọng, việc tìm kiếm và thu thập thông tin đầy đủ sẽ giúp em đưa ra quyết định chính xác hơn." là Đúng hay Sai?',
      options: [
        'Sai (thu thập thông tin chỉ làm mất thời gian chứ không giúp ích gì cho việc quyết định).',
        'Đúng (có đầy đủ thông tin giúp em hiểu rõ vấn đề và đưa ra quyết định đúng đắn, hợp lý).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 15: Để giải quyết vấn đề em cần đưa ra quyết định, để có quyết định thì cần phải có thông tin đầy đủ.',
      hint: 'Khẳng định hoàn toàn đúng với bài học.'
    },
    {
      id: 'g5-mid-b3-8',
      type: 'multiple_choice',
      question: 'Khẳng định: "Trong nhóm học tập, ai làm bài nhanh nhất thì nên tự làm hộ các bạn khác để đỡ mất công thảo luận." là Đúng hay Sai?',
      options: [
        'Đúng (làm như vậy nhóm sẽ tiết kiệm được nhiều thời gian và nhanh chóng hoàn thành bài).',
        'Sai (làm việc nhóm cần sự tham gia, đóng góp ý kiến và tinh thần trách nhiệm của mọi người).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'SGK Tin học 5 trang 16: Không nên để một bạn làm hộ cả nhóm, mỗi bạn đều cần có ý thức, tinh thần trách nhiệm và cùng nhau hợp tác.',
      hint: 'Mỗi thành viên cần có trách nhiệm và đóng góp sức mình.'
    },
    {
      id: 'g5-mid-b3-9',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Thu thập và tìm kiếm thông tin là cần thiết và [1] trong giải quyết vấn đề. Có đầy đủ thông tin sẽ giúp em [2] tốt hơn. Khi làm việc nhóm, cần phân công công việc dựa vào [3] của mỗi người."',
      options: ['quan trọng', 'giải quyết vấn đề', 'điểm mạnh', 'sở thích'],
      correctAnswer: 0,
      blankAnswers: ['quan trọng', 'giải quyết vấn đề', 'điểm mạnh'],
      wordBank: ['quan trọng', 'giải quyết vấn đề', 'điểm mạnh', 'sở thích'],
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 15 và 16.',
      hint: 'Quan trọng, giải quyết vấn đề, phân công theo điểm mạnh.'
    },
    {
      id: 'g5-mid-b3-10',
      type: 'matching',
      question: 'Em hãy ghép nối tình huống thực tế ở Cột A với bài học rút ra ở Cột B (theo SGK Tin học 5 trang 14 - 17):',
      options: [],
      matchingLeft: [
        { id: 'b3-l1', text: 'Bạn An tìm hiểu thời tiết Nha Trang trước khi đi', label: '1' },
        { id: 'b3-l2', text: 'Bạn Minh không tìm hiểu thông tin thời tiết ở Úc', label: '2' },
        { id: 'b3-l3', text: 'Làm việc nhóm tạo bài trình chiếu', label: '3' },
        { id: 'b3-l4', text: 'Tìm thông tin điểm du lịch trên Google', label: '4' }
      ],
      matchingRight: [
        { id: 'b3-r1', text: 'Chuẩn bị đúng đồ dùng cần thiết, kì nghỉ thành công', label: 'CN1' },
        { id: 'b3-r2', text: 'Gặp khó khăn vì mang đồ mùa hè vào mùa đông Úc', label: 'CN2' },
        { id: 'b3-r3', text: 'Phân công theo điểm mạnh và có tinh thần trách nhiệm', label: 'CN3' },
        { id: 'b3-r4', text: 'Xác định từ khoá ngắn gọn, chính xác với nội dung cần tìm', label: 'CN4' }
      ],
      correctMatches: {
        'b3-l1': 'b3-r1',
        'b3-l2': 'b3-r2',
        'b3-l3': 'b3-r3',
        'b3-l4': 'b3-r4'
      },
      pairs: [
        { left: 'Bạn An tìm hiểu thời tiết Nha Trang trước khi đi', right: 'Chuẩn bị đúng đồ dùng cần thiết, kì nghỉ thành công' },
        { left: 'Bạn Minh không tìm hiểu thông tin thời tiết ở Úc', right: 'Gặp khó khăn vì mang đồ mùa hè vào mùa đông Úc' },
        { left: 'Làm việc nhóm tạo bài trình chiếu', right: 'Phân công theo điểm mạnh và có tinh thần trách nhiệm' },
        { left: 'Tìm thông tin điểm du lịch trên Google', right: 'Xác định từ khoá ngắn gọn, chính xác với nội dung cần tìm' }
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'Theo các hoạt động và tình huống trong SGK Tin học 5 trang 14 - 17.',
      hint: 'Ghép từng tình huống thực tế với bài học kinh nghiệm trong sách.'
    },
    {
      id: 'g5-mid-b3-11',
      type: 'drag_drop_order',
      question: 'Em hãy kéo thả để sắp xếp các bước tìm kiếm thông tin về địa điểm tham quan bằng máy tìm kiếm Google (theo SGK Tin học 5 trang 19 - 20):',
      options: [],
      orderItems: [
        { id: 'gg-1', text: '1. Xác định từ khoá cần tìm kiếm (ví dụ: Các điểm tham quan ở Sa Pa)' },
        { id: 'gg-2', text: '2. Mở trình duyệt web và gõ địa chỉ google.com vào thanh địa chỉ' },
        { id: 'gg-3', text: '3. Gõ từ khoá tìm kiếm vào ô tìm kiếm rồi nhấn phím Enter' },
        { id: 'gg-4', text: '4. Nháy chuột vào một siêu liên kết trong danh sách kết quả để xem chi tiết' }
      ],
      correctOrder: ['gg-1', 'gg-2', 'gg-3', 'gg-4'],
      items: [
        '1. Xác định từ khoá cần tìm kiếm (ví dụ: Các điểm tham quan ở Sa Pa)',
        '2. Mở trình duyệt web và gõ địa chỉ google.com vào thanh địa chỉ',
        '3. Gõ từ khoá tìm kiếm vào ô tìm kiếm rồi nhấn phím Enter',
        '4. Nháy chuột vào một siêu liên kết trong danh sách kết quả để xem chi tiết'
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
      explanation: 'SGK Tin học 5 trang 19 - 20: 4 bước cơ bản để tìm kiếm thông tin bằng Google.',
      hint: 'Xác định từ khoá -> Mở google.com -> Gõ từ khoá và Enter -> Xem siêu liên kết.'
    },

    // -----------------------------------------------------------------------
    // BÀI 4: CÂY THƯ MỤC (SGK TRANG 19 - 23)
    // -----------------------------------------------------------------------
    {
      id: 'g5-mid-b4-1',
      type: 'multiple_choice',
      question: 'Sắp xếp các thư mục và tệp bằng cấu trúc cây hợp lí mang lại lợi ích gì cho người sử dụng máy tính (SGK Tin học 5 trang 20)?',
      options: [
        'Giúp tìm kiếm tệp và thư mục dễ dàng, nhanh chóng và tiết kiệm nhiều thời gian.',
        'Làm cho dung lượng bộ nhớ ổ đĩa máy tính bị đầy nhanh chóng và tốn diện tích lưu.',
        'Làm mất hoàn toàn các tệp hình ảnh, tài liệu văn bản và video đã lưu trữ từ trước.',
        'Làm cho máy tính hoạt động chậm chạp hơn và dễ bị lây nhiễm các loại virus độc hại.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 20: "Sắp xếp các thư mục và tệp bằng cấu trúc cây hợp lí sẽ giúp tìm kiếm dễ dàng và tiết kiệm thời gian."',
      hint: 'Tìm kiếm dễ dàng và tiết kiệm thời gian.'
    },
    {
      id: 'g5-mid-b4-2',
      type: 'multiple_choice',
      question: 'Để có được một cấu trúc cây thư mục hợp lí, em cần phân loại các tệp theo những tiêu chí nào (SGK Tin học 5 trang 20)?',
      options: [
        'Theo kích thước màn hình hiển thị, theo độ phân giải màu sắc và hãng sản xuất máy tính.',
        'Chỉ lưu toàn bộ tệp ra ngoài màn hình nền Desktop mà không cần phân loại vào thư mục nào.',
        'Theo mức độ cũ mới của bàn phím và chuột máy tính đang được kết nối với cây máy tính.',
        'Theo thời gian tạo tệp, theo nội dung chủ đề, theo định dạng loại tệp hoặc người sở hữu.'
      ],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 20: "Để có được cấu trúc cây hợp lí em cần phân loại các tệp theo các tiêu chí như thời gian, nội dung, loại tệp, người sở hữu,..."',
      hint: 'Thời gian, nội dung, loại tệp, người sở hữu.'
    },
    {
      id: 'g5-mid-b4-3',
      type: 'multiple_choice',
      question: 'Trong cửa sổ phần mềm File Explorer (This PC), công cụ tìm kiếm thư mục và tệp nằm ở vị trí nào (SGK Tin học 5 trang 20 - 21)?',
      options: [
        'Ở góc dưới, bên trái màn hình nằm cạnh nút khởi động Start Menu.',
        'Ở góc trên, bên phải cửa sổ (có ô Search và biểu tượng kính lúp).',
        'Ở chính giữa màn hình nền Desktop ngay phía dưới biểu tượng This PC.',
        'Ở phía sau thân máy tính cạnh các cổng cắm nguồn điện và dây mạng.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'SGK Tin học 5 trang 20: "Khi mở cửa sổ This PC, em sẽ nhìn thấy công cụ tìm kiếm nằm ở góc trên, bên phải cửa sổ."',
      hint: 'Góc trên, bên phải cửa sổ File Explorer.'
    },
    {
      id: 'g5-mid-b4-4',
      type: 'multiple_choice',
      question: 'Khi đặt tên cho thư mục hoặc tệp trong máy tính, em cần lưu ý điều gì (SGK Tin học 5 trang 20)?',
      options: [
        'Đặt tên thật dài gồm nhiều đoạn văn kể chuyện để lưu trữ càng nhiều thông tin càng tốt.',
        'Chỉ sử dụng các ký tự viết tắt ngẫu nhiên không mang ý nghĩa rõ ràng như aaa, bbb, ccc.',
        'Đặt tên theo cách thống nhất, rõ ràng và gợi nhớ đến nội dung của thư mục hoặc tệp đó.',
        'Không cần đặt tên cho thư mục, để hệ điều hành máy tính tự động gán số thứ tự bất kỳ.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'SGK Tin học 5 trang 20: "Đặt tên thư mục hoặc tệp theo một cách thống nhất. Tên cần rõ ràng, gợi nhớ nội dung của thư mục hoặc tệp."',
      hint: 'Tên thống nhất, rõ ràng, gợi nhớ nội dung.'
    },
    {
      id: 'g5-mid-b4-5',
      type: 'multiple_choice',
      question: 'Trong SGK Tin học 5 trang 22, bạn Khoa tạo cây thư mục lưu ảnh bài tập của nhóm trên ổ đĩa D:. Cách sắp xếp nào sau đây là hợp lí nhất?',
      options: [
        'Tạo thư mục chính Anh-Bai-tap-nhom, bên trong tạo ba thư mục con An, Minh, Khoa để chứa ảnh từng bạn.',
        'Lưu tất cả ảnh lộn xộn ra ngoài màn hình Desktop mà không phân chia thư mục của bạn nào với bạn nào.',
        'Chỉ tạo một thư mục duy nhất và đổi tên tất cả các bức ảnh của ba bạn thành cùng một tên số giống nhau.',
        'Sao chép toàn bộ ảnh của nhóm vào thư mục hệ thống Windows ở ổ đĩa C mà không cần tạo thư mục riêng.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'SGK Tin học 5 trang 22 Hình 19 và Nhiệm vụ 1: Cấu trúc thư mục gồm Anh-Bai-tap-nhom -> An, Minh, Khoa giúp phân loại rõ ràng theo từng người sở hữu.',
      hint: 'Thư mục chung của nhóm chứa các thư mục con mang tên từng bạn.'
    },
    {
      id: 'g5-mid-b4-6',
      type: 'multiple_choice',
      question: 'Khẳng định: "Công cụ tìm kiếm trên máy tính được cung cấp trong cửa sổ phần mềm File Explorer giúp em nhanh chóng tìm thấy thư mục và tệp muốn tìm." là Đúng hay Sai?',
      options: [
        'Sai (công cụ tìm kiếm trong File Explorer chỉ tìm được các trang web trên mạng Internet).',
        'Đúng (công cụ tìm kiếm trong File Explorer giúp nhanh chóng tìm thấy tệp và thư mục trên máy).'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 21: "Công cụ tìm kiếm trên máy tính được cung cấp trong cửa sổ phần mềm File Explorer. Sử dụng công cụ tìm kiếm trên máy tính em sẽ nhanh chóng tìm thấy thư mục và tệp muốn tìm."',
      hint: 'Khẳng định hoàn toàn đúng với hộp kiến thức.'
    },
    {
      id: 'g5-mid-b4-7',
      type: 'multiple_choice',
      question: 'Khẳng định: "Nếu không thường xuyên dọn dẹp và sắp xếp lại các thư mục, việc tìm kiếm tệp khi cần sẽ rất khó khăn và mất thời gian." là Đúng hay Sai?',
      options: [
        'Đúng (dọn dẹp và sắp xếp thường xuyên giúp cây thư mục gọn gàng, tra cứu tệp nhanh chóng).',
        'Sai (không cần sắp xếp vì máy tính để tệp ở đâu cũng tìm được ngay trong vòng một giây).'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'SGK Tin học 5 trang 20: "Số lượng các tệp và thư mục trong một máy tính rất lớn. Nếu em không sắp xếp và lưu trữ chúng một cách hợp lí thì sẽ rất khó khăn khi cần tìm. Thường xuyên dọn dẹp và sắp xếp lại các thư mục và tệp trong máy tính."',
      hint: 'Thường xuyên dọn dẹp và sắp xếp lại cây thư mục.'
    },
    {
      id: 'g5-mid-b4-8',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Sắp xếp các thư mục và tệp bằng [1] hợp lí sẽ giúp tìm kiếm dễ dàng và [2]. Công cụ tìm kiếm trên máy tính được cung cấp trong cửa sổ phần mềm [3]."',
      options: ['cấu trúc cây', 'tiết kiệm thời gian', 'File Explorer', 'Recycle Bin'],
      correctAnswer: 0,
      blankAnswers: ['cấu trúc cây', 'tiết kiệm thời gian', 'File Explorer'],
      wordBank: ['cấu trúc cây', 'tiết kiệm thời gian', 'File Explorer', 'Recycle Bin'],
      difficulty: 'trung_binh',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 20 và 21.',
      hint: 'Cấu trúc cây, tiết kiệm thời gian, File Explorer.'
    },
    {
      id: 'g5-mid-b4-9',
      type: 'matching',
      question: 'Em hãy ghép nối tiêu chí phân loại tệp ở Cột A với ví dụ thư mục tương ứng ở Cột B (theo SGK Tin học 5 trang 20 - 23):',
      options: [],
      matchingLeft: [
        { id: 'b4-l1', text: 'Phân loại theo người sở hữu', label: '1' },
        { id: 'b4-l2', text: 'Phân loại theo loại tệp', label: '2' },
        { id: 'b4-l3', text: 'Phân loại theo thời gian', label: '3' },
        { id: 'b4-l4', text: 'Công cụ tìm kiếm trong máy tính', label: '4' }
      ],
      matchingRight: [
        { id: 'b4-r1', text: 'Thư mục An, Minh, Khoa trong bài tập nhóm', label: 'CN1' },
        { id: 'b4-r2', text: 'Thư mục Anh, Video, Van-ban, Trinh-chieu', label: 'CN2' },
        { id: 'b4-r3', text: 'Thư mục Năm học 2026-2027, Kì nghỉ hè 2026', label: 'CN3' },
        { id: 'b4-r4', text: 'Ô Search ở góc trên bên phải cửa sổ File Explorer', label: 'CN4' }
      ],
      correctMatches: {
        'b4-l1': 'b4-r1',
        'b4-l2': 'b4-r2',
        'b4-l3': 'b4-r3',
        'b4-l4': 'b4-r4'
      },
      pairs: [
        { left: 'Phân loại theo người sở hữu', right: 'Thư mục An, Minh, Khoa trong bài tập nhóm' },
        { left: 'Phân loại theo loại tệp', right: 'Thư mục Anh, Video, Van-ban, Trinh-chieu' },
        { left: 'Phân loại theo thời gian', right: 'Thư mục Năm học 2026-2027, Kì nghỉ hè 2026' },
        { left: 'Công cụ tìm kiếm trong máy tính', right: 'Ô Search ở góc trên bên phải cửa sổ File Explorer' }
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'Theo các tiêu chí phân loại tệp được giới thiệu ở SGK Tin học 5 trang 20 - 23.',
      hint: 'Ghép từng tiêu chí phân loại với ví dụ thư mục minh hoạ.'
    },
    {
      id: 'g5-mid-b4-10',
      type: 'drag_drop_order',
      question: 'Em hãy kéo thả để sắp xếp các bước tìm kiếm nhanh một tệp bài trình chiếu có tên Ki-nghi-he bằng công cụ tìm kiếm trong File Explorer (theo SGK Tin học 5 trang 22 - 23):',
      options: [],
      orderItems: [
        { id: 'fe-1', text: '1. Mở cửa sổ This PC (hoặc File Explorer)' },
        { id: 'fe-2', text: '2. Nháy chuột vào ổ đĩa D: trong khung bên trái cửa sổ' },
        { id: 'fe-3', text: '3. Nháy chuột vào ô tìm kiếm Search ở góc trên, bên phải cửa sổ và gõ từ khoá Ki-nghi-he rồi nhấn Enter' },
        { id: 'fe-4', text: '4. Quan sát kết quả tìm kiếm hiển thị, nháy đúp chuột vào tệp để mở hoặc chọn Open file location' }
      ],
      correctOrder: ['fe-1', 'fe-2', 'fe-3', 'fe-4'],
      items: [
        '1. Mở cửa sổ This PC (hoặc File Explorer)',
        '2. Nháy chuột vào ổ đĩa D: trong khung bên trái cửa sổ',
        '3. Nháy chuột vào ô tìm kiếm Search ở góc trên, bên phải cửa sổ và gõ từ khoá Ki-nghi-he rồi nhấn Enter',
        '4. Quan sát kết quả tìm kiếm hiển thị, nháy đúp chuột vào tệp để mở hoặc chọn Open file location'
      ],
      difficulty: 'trung_binh',
      topic: 'Bài 4: Cây thư mục',
      explanation: 'SGK Tin học 5 trang 22 - 23: Nhiệm vụ 2 Tìm kiếm tệp trình chiếu Ki-nghi-he trong ổ D:.',
      hint: 'Mở This PC -> Chọn ổ D: -> Nhập từ khoá vào ô Search và Enter -> Mở tệp từ kết quả.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 1: MÁY TÍNH VÀ EM
  // BÀI 1: EM CÓ THỂ LÀM GÌ VỚI MÁY TÍNH? (SGK TRANG 5 - 7)
  // =========================================================================
  'tin5-bai-1': [
    {
      id: 'g5-b1-1',
      type: 'multiple_choice',
      question: 'Theo SGK Tin học 5 trang 5, máy tính có thể giúp em tạo ra các sản phẩm số nào sau đây?',
      options: [
        'Nấu cơm, giặt quần áo và dọn dẹp phòng ngủ tự động.',
        'Viết truyện bằng phần mềm soạn thảo, thiết kế album ảnh bằng phần mềm trình chiếu, viết trò chơi bằng Scratch.',
        'Biến đồ chơi hỏng thành đồ chơi mới mà không cần sửa chữa.',
        'Tạo ra bánh kẹo và nước uống thật ngay trên bàn học.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'Theo mục "Tạo ra sản phẩm số" SGK Tin học 5 trang 6: Em có thể viết truyện bằng phần mềm soạn thảo, thiết kế album ảnh bằng phần mềm trình chiếu hay viết chương trình trò chơi bằng Scratch.',
      hint: 'Sản phẩm số là các tác phẩm được tạo ra bằng phần mềm máy tính.'
    },
    {
      id: 'g5-b1-2',
      type: 'multiple_choice',
      question: 'Các phần mềm nào sau đây giúp học sinh có thể hợp tác, học nhóm và trao đổi trực tuyến với nhau trên Internet (theo SGK Tin học 5 trang 6)?',
      options: [
        'Kiran\'s Typing Tutor, Mario Teaches Typing.',
        'Paint, WordPad, Calculator.',
        'Zoom, Google Meet, Microsoft Teams.',
        'Recycle Bin, Control Panel.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 6 ghi rõ: Em có thể tham gia các nhóm học tập trên Internet với bạn cùng lớp qua các phần mềm như Zoom, Google Meet, Microsoft Teams.',
      hint: 'Các phần mềm họp và học trực tuyến.'
    },
    {
      id: 'g5-b1-3',
      type: 'multiple_choice',
      question: 'Trong phần thực hành chơi trò chơi "Mê cung" (MeCung) viết bằng Scratch ở SGK Tin học 5 trang 6 - 7, em sử dụng các phím nào để điều khiển chú chuột?',
      options: [
        'Phím Shift và phím Ctrl.',
        'Các phím số 1, 2, 3, 4 trên hàng phím số.',
        'Phím dấu cách Space và phím Enter.',
        'Các phím mũi tên (lên, xuống, trái, phải).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'Theo SGK Tin học 5 trang 6 - 7: Em sử dụng các phím mũi tên để điều khiển chú chuột di chuyển từ Lối vào đến Lối ra của mê cung.',
      hint: 'Dùng 4 phím mũi tên điều hướng.'
    },
    {
      id: 'g5-b1-4',
      type: 'fill_blank',
      question: 'Điền từ thích hợp vào chỗ trống: "Máy tính có thể giúp em [1], giải trí, tìm kiếm, [2] thông tin, hợp tác với bạn bè và tạo ra [3] theo ý tưởng của mình."',
      options: ['học tập', 'trao đổi', 'sản phẩm số', 'tiền bạc'],
      correctAnswer: 0,
      blankAnswers: ['học tập', 'trao đổi', 'sản phẩm số'],
      wordBank: ['học tập', 'trao đổi', 'sản phẩm số', 'tiền bạc'],
      difficulty: 'trung_binh',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 6: "Máy tính có thể giúp em học tập, giải trí, tìm kiếm, trao đổi thông tin, hợp tác với bạn bè và tạo ra sản phẩm số theo ý tưởng của mình."',
      hint: 'Các lợi ích chính của máy tính.'
    },
    {
      id: 'g5-b1-5',
      type: 'matching',
      question: 'Em hãy ghép nối hoạt động sử dụng máy tính ở Cột A với ví dụ cụ thể tương ứng ở Cột B (theo SGK Tin học 5 trang 5 - 6):',
      options: [],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'b1-l1', text: 'Học tập', label: '1' },
        { id: 'b1-l2', text: 'Giải trí', label: '2' },
        { id: 'b1-l3', text: 'Trao đổi thông tin', label: '3' },
        { id: 'b1-l4', text: 'Hợp tác với bạn bè', label: '4' }
      ],
      matchingRight: [
        { id: 'b1-r1', text: 'Khám phá thế giới tự nhiên qua phần mềm Kids Games Learning Science', label: 'CN1' },
        { id: 'b1-r2', text: 'Nghe nhạc, xem phim hoạt hình thiếu nhi có âm thanh sống động', label: 'CN2' },
        { id: 'b1-r3', text: 'Gửi thư điện tử email, gọi video cho người thân', label: 'CN3' },
        { id: 'b1-r4', text: 'Thảo luận làm bài tập nhóm qua Zoom, Google Meet', label: 'CN4' }
      ],
      correctMatches: {
        'b1-l1': 'b1-r1',
        'b1-l2': 'b1-r2',
        'b1-l3': 'b1-r3',
        'b1-l4': 'b1-r4'
      },
      pairs: [
        { left: 'Học tập', right: 'Khám phá thế giới tự nhiên qua phần mềm Kids Games Learning Science' },
        { left: 'Giải trí', right: 'Nghe nhạc, xem phim hoạt hình thiếu nhi có âm thanh sống động' },
        { left: 'Trao đổi thông tin', right: 'Gửi thư điện tử email, gọi video cho người thân' },
        { left: 'Hợp tác với bạn bè', right: 'Thảo luận làm bài tập nhóm qua Zoom, Google Meet' }
      ],
      difficulty: 'trung_binh',
      explanation: 'Phù hợp với các mục Học tập, Giải trí, Trao đổi thông tin và Hợp tác trong SGK Tin học 5 trang 5 - 6.',
      hint: 'Nối hoạt động với ứng dụng phần mềm minh họa trong bài.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 2: MẠNG MÁY TÍNH VÀ INTERNET
  // BÀI 2: TÌM KIẾM THÔNG TIN TRÊN WEBSITE (SGK TRANG 8 - 13)
  // =========================================================================
  'tin5-bai-2': [
    {
      id: 'g5-b2-1',
      type: 'multiple_choice',
      question: 'Khi truy cập vào một website, trang đầu tiên xuất hiện được gọi là gì (theo SGK Tin học 5 trang 9)?',
      options: [
        'Trang chủ (homepage).',
        'Trang kết thúc (endpage).',
        'Trang tìm kiếm nâng cao.',
        'Trang báo lỗi 404.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 9: "Khi truy cập website, trang chủ (homepage) sẽ xuất hiện đầu tiên."',
      hint: 'Homepage - trang đầu tiên của website.'
    },
    {
      id: 'g5-b2-2',
      type: 'multiple_choice',
      question: 'Để quay trở lại trang chủ của website, người dùng thường nháy chuột vào biểu tượng nút lệnh có hình gì?',
      options: [
        'Hình chiếc chìa khóa.',
        'Hình ngôi nhà.',
        'Hình mũi tên xoay tròn.',
        'Hình bông hoa.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 9 ghi chú: "Nút về trang chủ thường có hình ngôi nhà."',
      hint: 'Hình ngôi nhà thân quen.'
    },
    {
      id: 'g5-b2-3',
      type: 'multiple_choice',
      question: 'Nút công cụ tìm kiếm trong một website thường có hình biểu tượng nào (SGK Tin học 5 trang 9)?',
      options: [
        'Hình chiếc bút chì.',
        'Hình cuốn sách mở ra.',
        'Hình chiếc kính lúp.',
        'Hình quả địa cầu.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 9: "Nút tìm kiếm thường có hình kính lúp."',
      hint: 'Hình kính lúp phóng đại.'
    },
    {
      id: 'g5-b2-4',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Để tìm kiếm thông tin trên một website, em có thể: Duyệt theo các [1] của website hoặc sử dụng [2] của website."',
      options: ['chủ đề', 'công cụ tìm kiếm', 'hình ảnh', 'màu sắc'],
      correctAnswer: 0,
      blankAnswers: ['chủ đề', 'công cụ tìm kiếm'],
      wordBank: ['chủ đề', 'công cụ tìm kiếm', 'hình ảnh', 'màu sắc'],
      difficulty: 'trung_binh',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 10.',
      hint: 'Duyệt theo chủ đề hoặc dùng công cụ tìm kiếm.'
    },
    {
      id: 'g5-b2-5',
      type: 'multiple_choice',
      question: 'Để chia sẻ tệp bài trình chiếu cho bạn bằng thiết bị nhớ di động USB, bước đầu tiên em cần làm là gì (SGK Tin học 5 trang 12)?',
      options: [
        'Dùng búa gõ nhẹ vào đầu USB.',
        'Rút dây nguồn máy tính ra ngay lập tức.',
        'Nhấn nút công tắc nguồn để tắt máy tính.',
        'Cắm USB vào cổng USB trên thân máy tính đúng chiều, nhẹ tay.'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'Theo SGK Tin học 5 trang 12: Cắm USB vào cổng USB trên thân máy tính. Chú ý quan sát để cắm đúng chiều, nhẹ tay.',
      hint: 'Cắm đúng chiều, nhẹ tay vào cổng USB.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 3: TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN
  // BÀI 3: TÌM KIẾM THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ (SGK TRANG 14 - 18)
  // =========================================================================
  'tin5-bai-3': [
    {
      id: 'g5-b3-1',
      type: 'multiple_choice',
      question: 'Để giải quyết một vấn đề trong cuộc sống (ví dụ chuẩn bị đồ cho kì nghỉ hè), vì sao em cần phải thu thập và tìm kiếm thông tin trước (SGK Tin học 5 trang 15)?',
      options: [
        'Vì có đầy đủ thông tin sẽ giúp em đưa ra quyết định đúng đắn và giải quyết vấn đề tốt hơn.',
        'Vì để tốn thêm thời gian và không cần đi chơi nữa.',
        'Vì pháp luật bắt buộc mọi người phải tìm kiếm thông tin.',
        'Vì máy tính sẽ tự làm bài tập nếu em tìm kiếm thông tin.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 15: "Thu thập và tìm kiếm thông tin là cần thiết và quan trọng trong giải quyết vấn đề. Có đầy đủ thông tin sẽ giúp em giải quyết vấn đề tốt hơn."',
      hint: 'Có thông tin mới đưa ra quyết định đúng đắn.'
    },
    {
      id: 'g5-b3-2',
      type: 'multiple_choice',
      question: 'Khi làm việc nhóm để tạo bài trình chiếu, phương án hợp tác nào sau đây là hợp lý và hiệu quả nhất (SGK Tin học 5 trang 16)?',
      options: [
        'Để một bạn học giỏi nhất làm toàn bộ bài trình chiếu, các bạn khác đi chơi.',
        'Cả nhóm cùng thảo luận, chia công việc thành nhiều việc nhỏ hơn và phân công dựa vào điểm mạnh của từng người, mỗi người có ý thức trách nhiệm.',
        'Mỗi bạn tự làm một bài riêng rồi nộp cả ba bài cho cô giáo.',
        'Ai có máy tính xách tay thì phải làm hết mọi việc.'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 16: "Khi làm việc nhóm, cần thảo luận, phân công công việc dựa vào điểm mạnh của mỗi người. Khi được phân công, cần có ý thức, tinh thần trách nhiệm; hợp tác và giúp đỡ nhau."',
      hint: 'Thảo luận, phân công theo điểm mạnh và có trách nhiệm.'
    },
    {
      id: 'g5-b3-3',
      type: 'fill_blank',
      question: 'Điền từ thích hợp vào chỗ trống: "Từ khoá là [1] hoặc cụm từ thể hiện [2] chúng ta muốn tìm kiếm trên Internet."',
      options: ['từ', 'nội dung thông tin', 'hình vẽ', 'con số'],
      correctAnswer: 0,
      blankAnswers: ['từ', 'nội dung thông tin'],
      wordBank: ['từ', 'nội dung thông tin', 'hình vẽ', 'con số'],
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 20 (và trang 19): Từ khoá là từ hoặc cụm từ thể hiện nội dung muốn tìm kiếm.',
      hint: 'Từ hoặc cụm từ thể hiện nội dung cần tìm.'
    },
    {
      id: 'g5-b3-4',
      type: 'multiple_choice',
      question: 'Nếu nhóm em muốn tìm kiếm thông tin về Bảo tàng Dân tộc học Việt Nam trên Google, từ khoá nào sau đây là phù hợp và chính xác nhất (SGK Tin học 5 trang 20)?',
      options: [
        'Việt Nam',
        'Bảo tàng',
        'Bảo tàng Dân tộc học Việt Nam',
        'Các dân tộc ở Việt Nam'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 20: Từ khoá "Bảo tàng Dân tộc học Việt Nam" thể hiện chính xác và đầy đủ địa danh cần tìm, cho kết quả sát nhất.',
      hint: 'Từ khoá đầy đủ, chính xác tên đối tượng cần tìm.'
    }
  ],

  // =========================================================================
  // BÀI 4: CÂY THƯ MỤC (SGK TRANG 19 - 23)
  // =========================================================================
  'tin5-bai-4': [
    {
      id: 'g5-b4-1',
      type: 'multiple_choice',
      question: 'Sắp xếp các thư mục và tệp bằng cấu trúc cây hợp lí mang lại lợi ích gì cho người sử dụng máy tính (SGK Tin học 5 trang 20)?',
      options: [
        'Giúp máy tính không bao giờ phải sạc pin.',
        'Làm cho máy tính nặng hơn và chạy chậm lại.',
        'Làm mất các tệp hình ảnh và văn bản.',
        'Giúp tìm kiếm dễ dàng và tiết kiệm thời gian.'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 20: "Sắp xếp các thư mục và tệp bằng cấu trúc cây hợp lí sẽ giúp tìm kiếm dễ dàng và tiết kiệm thời gian."',
      hint: 'Tìm kiếm dễ dàng và tiết kiệm thời gian.'
    },
    {
      id: 'g5-b4-2',
      type: 'multiple_choice',
      question: 'Để có được một cấu trúc cây thư mục hợp lí, em cần phân loại các tệp theo những tiêu chí nào (SGK Tin học 5 trang 20)?',
      options: [
        'Theo thời gian (năm, tháng), theo nội dung, loại tệp hoặc người sở hữu.',
        'Theo dung lượng của ổ cứng máy tính.',
        'Chỉ xếp tất cả vào màn hình nền Desktop.',
        'Chỉ phân loại theo màu sắc của vỏ máy tính.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 20: Để có được cấu trúc cây hợp lí em cần phân loại các tệp theo các tiêu chí như: thời gian, nội dung, loại tệp, người sở hữu,...',
      hint: 'Thời gian, nội dung, loại tệp, người sở hữu.'
    },
    {
      id: 'g5-b4-3',
      type: 'multiple_choice',
      question: 'Trong cửa sổ File Explorer của máy tính, công cụ tìm kiếm thư mục và tệp nằm ở vị trí nào (SGK Tin học 5 trang 20 - 21)?',
      options: [
        'Ở góc dưới, bên trái màn hình.',
        'Ở góc trên, bên phải cửa sổ (có chữ Search và biểu tượng kính lúp).',
        'Ở giữa màn hình nền Desktop.',
        'Ở phía sau thân máy tính.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 20: Khi mở cửa sổ This PC, em sẽ nhìn thấy công cụ tìm kiếm nằm ở góc trên, bên phải cửa sổ.',
      hint: 'Góc trên, bên phải cửa sổ File Explorer.'
    },
    {
      id: 'g5-b4-4',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Công cụ tìm kiếm trên máy tính được cung cấp trong cửa sổ phần mềm [1]. Sử dụng công cụ này giúp em nhanh chóng tìm thấy [2] và tệp muốn tìm."',
      options: ['File Explorer', 'thư mục', 'Microsoft Word', 'Recycle Bin'],
      correctAnswer: 0,
      blankAnswers: ['File Explorer', 'thư mục'],
      wordBank: ['File Explorer', 'thư mục', 'Microsoft Word', 'Recycle Bin'],
      difficulty: 'trung_binh',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 21.',
      hint: 'File Explorer và thư mục.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 4: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HOÁ TRONG MÔI TRƯỜNG SỐ
  // BÀI 5: BẢN QUYỀN NỘI DUNG THÔNG TIN (SGK TRANG 24 - 28)
  // =========================================================================
  'tin5-bai-5': [
    {
      id: 'g5-b5-1',
      type: 'multiple_choice',
      question: 'Trong SGK Tin học 5 trang 24 - 25, khi làm tờ báo tường chào mừng ngày Nhà giáo Việt Nam lớp 5A, bài thơ "Cô giáo của em" cần ghi rõ tên tác giả là ai?',
      options: [
        'Bạn An lớp 5A.',
        'Bạn Ngô Hà Trang.',
        'Nhà thơ Xuân Quỳnh.',
        'Không cần ghi tên ai.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 25: Bài thơ "Cô giáo của em" là sáng tác của nhà thơ Xuân Quỳnh nên cần ghi rõ tên tác giả Xuân Quỳnh dưới bài thơ.',
      hint: 'Tác giả của bài thơ Cô giáo của em là nhà thơ Xuân Quỳnh.'
    },
    {
      id: 'g5-b5-2',
      type: 'multiple_choice',
      question: 'Hành vi nào sau đây là vi phạm đạo đức và không tôn trọng tính riêng tư của người khác (SGK Tin học 5 trang 27)?',
      options: [
        'Ghi rõ tên bạn vẽ tranh khi sử dụng tranh của bạn làm báo tường.',
        'Hỏi mượn sách giáo khoa của bạn trong giờ học.',
        'Xin phép bạn trước khi chụp ảnh chung.',
        'Tự ý mở đọc nhật kí, thư riêng hoặc xem trộm tin nhắn điện thoại của bạn khi chưa được bạn đồng ý.'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 27: Tự ý đọc nhật kí, xem thư riêng hay tin nhắn của người khác là hành vi xâm phạm tính riêng tư, vi phạm đạo đức.',
      hint: 'Tự ý xem thư riêng, nhật kí, tin nhắn của người khác.'
    },
    {
      id: 'g5-b5-3',
      type: 'matching',
      question: 'Em hãy ghép nối hành động ở Cột A với thái độ đúng đắn ở Cột B (theo SGK Tin học 5 trang 28):',
      options: [],
      correctAnswer: 0,
      pairs: [
        { left: 'Bạn An nêu tên tác giả bài thơ mà bạn đọc trong buổi sinh hoạt ngoại khoá', right: 'Đồng tình (tôn trọng bản quyền tác giả)' },
        { left: 'Bạn Bình xem sổ ghi chép của anh trai mà không xin phép', right: 'Không đồng tình (xâm phạm tính riêng tư)' },
        { left: 'Bạn Khoa xin phép bạn Minh trước khi sao chép tệp bài trình chiếu của Minh', right: 'Đồng tình (tôn trọng quyền tác giả và lịch sự)' },
        { left: 'Chia sẻ thông tin riêng tư (hình ảnh, nhật kí) của người khác lên mạng', right: 'Không đồng tình (vi phạm đạo đức và pháp luật)' }
      ],
      difficulty: 'trung_binh',
      explanation: 'Phù hợp với phần Luyện tập 2 SGK Tin học 5 trang 28.',
      hint: 'Đồng tình với hành động xin phép, ghi nguồn; Không đồng tình với xem trộm, chia sẻ trái phép.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 5: ỨNG DỤNG TIN HỌC
  // BÀI 6: ĐỊNH DẠNG KÍ TỰ VÀ BỐ TRÍ HÌNH ẢNH TRONG VĂN BẢN (SGK TRANG 29 - 33)
  // =========================================================================
  'tin5-bai-6': [
    {
      id: 'g5-b6-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm soạn thảo Word, định dạng kí tự (phông chữ, cỡ chữ, kiểu chữ, màu chữ) mang lại tác dụng gì (SGK Tin học 5 trang 31)?',
      options: [
        'Giúp trình bày văn bản đẹp hơn, dễ đọc và dễ ghi nhớ.',
        'Làm văn bản tự động chuyển sang trang chiếu PowerPoint.',
        'Làm cho máy in không in được văn bản.',
        'Tự động sửa lỗi chính tả mà không cần đọc lại.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 31: "Định dạng kí tự (phông chữ, kiểu chữ, cỡ chữ, màu chữ,...) giúp em trình bày văn bản đẹp hơn, dễ đọc và dễ ghi nhớ."',
      hint: 'Đẹp hơn, dễ đọc và dễ nhớ.'
    },
    {
      id: 'g5-b6-2',
      type: 'matching',
      question: 'Em hãy ghép nối các nút lệnh định dạng kí tự trong Microsoft Word ở Cột A với chức năng tương ứng ở Cột B (theo SGK Tin học 5 trang 30):',
      options: [],
      correctAnswer: 0,
      pairs: [
        { left: 'Nút B (Bold)', right: 'Kiểu chữ đậm' },
        { left: 'Nút I (Italic)', right: 'Kiểu chữ nghiêng' },
        { left: 'Nút U (Underline)', right: 'Kiểu chữ gạch chân' },
        { left: 'Nút chữ A có vạch màu phía dưới', right: 'Màu chữ (Font Color)' }
      ],
      difficulty: 'de',
      explanation: 'Hình 31 SGK Tin học 5 trang 30 mô tả các lệnh định dạng kí tự: B (đậm), I (nghiêng), U (gạch chân), chữ A có gạch màu (màu chữ).',
      hint: 'B là đậm, I là nghiêng, U là gạch chân, A gạch màu là màu chữ.'
    },
    {
      id: 'g5-b6-3',
      type: 'multiple_choice',
      question: 'Trong văn bản "Kem cầu vồng hoa quả" (SGK Tin học 5 trang 30 - 32), kiểu bố trí hình ảnh nào làm cho các dòng chữ trong văn bản bao quanh đều các cạnh của cốc kem?',
      options: [
        'Kiểu In Line with Text (ảnh nằm trên một dòng văn bản).',
        'Kiểu Square (With Text Wrapping).',
        'Kiểu Behind Text (ảnh chìm dưới nền chữ).',
        'Kiểu In Front of Text (ảnh che lấp mất chữ).'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'Hình 33 và Bước 2 SGK Tin học 5 trang 33: Chọn nút Layout Options và chọn cách bố trí Square (văn bản dàn xung quanh hình ảnh).',
      hint: 'Kiểu Square - chữ dàn xung quanh ảnh.'
    }
  ],

  // =========================================================================
  // BÀI 7: THỰC HÀNH SOẠN THẢO VĂN BẢN (SGK TRANG 34 - 36)
  // =========================================================================
  'tin5-bai-7': [
    {
      id: 'g5-b7-1',
      type: 'multiple_choice',
      question: 'Trong bài thực hành soạn thảo bài hát "Trẻ em hôm nay thế giới ngày mai" (SGK Tin học 5 trang 34 - 35), để sao chép nhanh các đoạn văn bản giống nhau, em sử dụng cặp phím tắt nào?',
      options: [
        'Ctrl + P và Ctrl + Z.',
        'Ctrl + S và Ctrl + O.',
        'Ctrl + C (sao chép Copy) và Ctrl + V (dán Paste).',
        'Shift + Delete và Alt + F4.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'Theo SGK Tin học 5 trang 35: Thực hiện gõ và sao chép những phần văn bản giống nhau (Copy và Paste) để không phải gõ lại nhiều lần.',
      hint: 'Ctrl + C để Copy và Ctrl + V để Paste.'
    },
    {
      id: 'g5-b7-2',
      type: 'multiple_choice',
      question: 'Để gõ chữ in hoa trong phần mềm soạn thảo văn bản, em thực hiện thao tác nào sau đây (SGK Tin học 5 trang 35)?',
      options: [
        'Nháy đúp chuột vào màn hình.',
        'Nhấn giữ phím Space trong khi gõ.',
        'Nhấn giữ phím Ctrl và Alt cùng lúc.',
        'Nhấn giữ phím Shift trong khi gõ phím chữ, hoặc bật phím Caps Lock.'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 35 ghi nhớ: "Để gõ chữ hoa em nhấn giữ phím Shift và gõ phím chữ (hoặc dùng Caps Lock)."',
      hint: 'Phím Shift hoặc Caps Lock.'
    }
  ],

  // =========================================================================
  // BÀI 8A & 9A: SỬ DỤNG PHẦN MỀM ĐỒ HOẠ MS PAINT (SGK TRANG 37 - 45)
  // =========================================================================
  'tin5-bai-8a': [
    {
      id: 'g5-b8a-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm đồ hoạ Paint (SGK Tin học 5 trang 40), để vẽ quả bóng bay hình bầu dục và sợi dây buộc bóng thẳng đứng, em dùng hai công cụ nào?',
      options: [
        'Công cụ Oval (vẽ bầu dục) và công cụ Line (vẽ đoạn thẳng).',
        'Công cụ Pencil và công cụ Eraser.',
        'Công cụ Text và công cụ Color picker.',
        'Công cụ Rectangle và công cụ Magnifier.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Theo Nhiệm vụ 2 SGK Tin học 5 trang 40: Chọn công cụ Oval để vẽ hình một quả bóng bay, chọn công cụ Line để vẽ hình dây bóng bay.',
      hint: 'Oval để vẽ bóng bay, Line để vẽ dây buộc.'
    },
    {
      id: 'g5-b8a-2',
      type: 'multiple_choice',
      question: 'Trong phần mềm Paint, sau khi đã chọn quả bóng bằng công cụ Select, để lật quả bóng quay sang hướng ngược lại, em chọn lệnh nào trong nút Rotate (SGK Tin học 5 trang 41)?',
      options: [
        'Rotate 180 (xoay 180 độ).',
        'Flip horizontal (lật theo chiều ngang).',
        'Flip vertical (lật theo chiều dọc).',
        'Crop (cắt hình).'
      ],
      correctAnswer: 1,
      difficulty: 'trung_binh',
      explanation: 'Theo Bước 4 SGK Tin học 5 trang 41: Nháy chuột vào mũi tên bên cạnh lệnh Rotate, chọn lệnh Flip horizontal để lật quả bóng thứ hai.',
      hint: 'Flip horizontal - lật ngang.'
    },
    {
      id: 'g5-b8a-3',
      type: 'matching',
      question: 'Em hãy ghép nối tên công cụ trong phần mềm Paint ở Cột A với biểu tượng hoặc công dụng tương ứng ở Cột B (theo SGK Tin học 5 trang 40 - 42):',
      options: [],
      correctAnswer: 0,
      pairs: [
        { left: 'Fill with color', right: 'Tô màu cho vùng vẽ kín' },
        { left: 'Select', right: 'Chọn một phần hoặc toàn bộ trang vẽ' },
        { left: 'Color 1', right: 'Màu nét vẽ (màu chính)' },
        { left: 'Transparent selection', right: 'Chế độ nền trong suốt khi di chuyển hình' }
      ],
      difficulty: 'trung_binh',
      explanation: 'Bảng công cụ và các bước thực hành trong SGK Tin học 5 trang 40 - 41.',
      hint: 'Fill with color đổ màu, Select chọn hình, Transparent selection nền trong suốt.'
    }
  ],

  'tin5-bai-9a': [
    {
      id: 'g5-b9a-1',
      type: 'multiple_choice',
      question: 'Khi thiết kế tấm thiệp chúc mừng sinh nhật trong phần mềm Paint (SGK Tin học 5 trang 44 - 45), em dùng công cụ nào để gõ lời chúc "CHÚC MỪNG SINH NHẬT"?',
      options: [
        'Công cụ Magnifier (kính lúp).',
        'Công cụ Brushes (bút vẽ).',
        'Công cụ Text (biểu tượng chữ A).',
        'Công cụ Color picker (sao chép màu).'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'Theo mục d SGK Tin học 5 trang 45: Chọn công cụ viết chữ Text (A), nháy chuột vào nền tấm thiệp và nhập dòng chữ CHÚC MỪNG SINH NHẬT.',
      hint: 'Công cụ chữ A (Text).'
    },
    {
      id: 'g5-b9a-2',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu vào chỗ trống: "Để tạo được thiệp chúc mừng, trước hết em cần xác định [1] và những [2] xuất hiện trong tấm thiệp (như khung hình, bóng bay, hoa, lời chúc).',
      options: ['chủ đề', 'thành phần', 'kích thước', 'giá tiền'],
      correctAnswer: 0,
      blankAnswers: ['chủ đề', 'thành phần'],
      wordBank: ['chủ đề', 'thành phần', 'kích thước', 'giá tiền'],
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 44.',
      hint: 'Xác định chủ đề và thành phần của thiệp.'
    }
  ],

  // =========================================================================
  // BÀI 8B & 9B: SỬ DỤNG VIDEO HƯỚNG DẪN LÀM ĐỒ THỦ CÔNG (SGK TRANG 46 - 51)
  // =========================================================================
  'tin5-bai-8b': [
    {
      id: 'g5-b8b-1',
      type: 'multiple_choice',
      question: 'Khi xem video hướng dẫn gấp hạc giấy trên YouTube (SGK Tin học 5 trang 47 - 48), gặp bước gấp khó mà em chưa kịp làm theo, em nên nhấn nút nào trên thanh điều khiển video?',
      options: [
        'Nút Tăng âm lượng to nhất.',
        'Nút Tắt máy tính ngay lập tức.',
        'Nút Chuyển sang video tiếp theo.',
        'Nút Tạm dừng (Pause).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'Theo SGK Tin học 5 trang 48: Sử dụng các nút điều khiển để tạm dừng, xem lại,... giúp em xem kĩ hơn và có đủ thời gian gấp giấy.',
      hint: 'Nút Tạm dừng (Pause).'
    },
    {
      id: 'g5-b8b-2',
      type: 'multiple_choice',
      question: 'Thanh trượt biểu thị thời lượng và vị trí đang phát của video trên YouTube được gọi là gì (SGK Tin học 5 trang 47)?',
      options: [
        'Nút tiến trình (thanh tiến trình video).',
        'Nút điều chỉnh độ sáng.',
        'Thanh cuộn dọc trang web.',
        'Thanh địa chỉ URL.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Hình 63 SGK Tin học 5 trang 47 chỉ rõ: "Nút tiến trình" cho phép kéo thả để chuyển đến đoạn video mong muốn.',
      hint: 'Nút tiến trình của video.'
    }
  ],

  'tin5-bai-9b': [
    {
      id: 'g5-b9b-1',
      type: 'multiple_choice',
      question: 'Theo SGK Tin học 5 trang 49, việc xem video hướng dẫn để làm hộp bút, thùng rác mini từ vỏ chai nhựa và bìa carton mang lại ý nghĩa gì?',
      options: [
        'Làm tăng rác thải nhựa trong trường học.',
        'Tạo ra đồ dùng hữu ích cho góc học tập gọn gàng và góp phần tái chế rác bảo vệ môi trường.',
        'Làm hỏng kéo và keo dán của gia đình.',
        'Làm mất kết nối mạng Internet.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 49: Tạo ra sản phẩm từ vật liệu tái chế để bảo vệ môi trường và giúp góc học tập của chúng mình gọn gàng, ngăn nắp.',
      hint: 'Bảo vệ môi trường và giúp góc học tập gọn gàng.'
    }
  ],

  // =========================================================================
  // CHỦ ĐỀ 6: GIẢI QUYẾT VẤN ĐỀ VỚI SỰ TRỢ GIÚP CỦA MÁY TÍNH
  // BÀI 10: CẤU TRÚC TUẦN TỰ (SGK TRANG 52 - 55)
  // =========================================================================
  'tin5-bai-10': [
    {
      id: 'g5-b10-1',
      type: 'multiple_choice',
      question: 'Thế nào là "cấu trúc tuần tự" trong đời sống và trong chương trình máy tính (SGK Tin học 5 trang 53)?',
      options: [
        'Các công việc được lặp đi lặp lại mãi mãi không bao giờ dừng.',
        'Các công việc được chọn ngẫu nhiên không cần theo thứ tự.',
        'Các công việc hoặc câu lệnh được thực hiện lần lượt theo thứ tự từ trên xuống dưới.',
        'Chỉ thực hiện công việc cuối cùng và bỏ qua tất cả các bước trước.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 53: "Trong cấu trúc tuần tự, các việc được thực hiện lần lượt theo thứ tự. Trong chương trình có cấu trúc tuần tự, các lệnh hoặc khối lệnh được thực hiện lần lượt theo thứ tự."',
      hint: 'Thực hiện lần lượt theo thứ tự.'
    },
    {
      id: 'g5-b10-2',
      type: 'drag_drop',
      question: 'Em hãy kéo thả để sắp xếp các lệnh trong chương trình Scratch "Xin chào!" theo đúng thứ tự tuần tự (theo SGK Tin học 5 trang 53 - 54):',
      options: [],
      correctAnswer: 0,
      items: [
        '1. Khi bấm vào lá cờ xanh',
        '2. Di chuyển 100 bước',
        '3. Nói "Xin chào!" trong 3 giây',
        '4. Phát âm thanh Meow đến hết',
        '5. Nói "Rất vui được gặp các bạn."'
      ],
      difficulty: 'trung_binh',
      explanation: 'Hình 73 SGK Tin học 5 trang 53: Chương trình "Xin chào!" chú mèo thực hiện tuần tự 5 lệnh trên.',
      hint: 'Cờ xanh -> Di chuyển 100 -> Nói Xin chào 3s -> Meow -> Rất vui gặp các bạn.'
    }
  ],

  // =========================================================================
  // BÀI 11: CẤU TRÚC LẶP (SGK TRANG 56 - 58)
  // =========================================================================
  'tin5-bai-11': [
    {
      id: 'g5-b11-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm Scratch, có mấy loại lệnh lặp thuộc nhóm lệnh Điều khiển (Control) theo SGK Tin học 5 trang 57 - 58?',
      options: [
        'Có 5 loại lệnh lặp khác nhau.',
        'Chỉ có 1 loại lệnh lặp duy nhất là lặp 10 lần.',
        'Có 2 loại lệnh lặp là lặp nhanh và lặp chậm.',
        'Có 3 loại lệnh lặp: Lặp với số lần biết trước (lặp lại 10), Lặp liên tục (liên tục), Lặp có điều kiện (lặp lại cho đến khi).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 58: "Trong Scratch, có ba lệnh lặp: Lệnh lặp với số lần biết trước, Lệnh lặp liên tục, Lệnh lặp có điều kiện."',
      hint: 'Có 3 lệnh lặp: biết trước số lần, liên tục và có điều kiện.'
    },
    {
      id: 'g5-b11-2',
      type: 'matching',
      question: 'Em hãy ghép nối khối lệnh lặp Scratch ở Cột A với ý nghĩa mô tả hoạt động ở Cột B (theo SGK Tin học 5 trang 57 - 58):',
      options: [],
      correctAnswer: 0,
      pairs: [
        { left: 'Khối lệnh [lặp lại 10]', right: 'Khối lệnh bên trong được lặp lại đúng 10 lần rồi dừng' },
        { left: 'Khối lệnh [liên tục]', right: 'Khối lệnh bên trong được lặp lại liên tục, không dừng lại' },
        { left: 'Khối lệnh [lặp lại cho đến khi <chuột được nhấn?>]', right: 'Khối lệnh bên trong được lặp lại cho đến khi người dùng nháy chuột' },
        { left: 'Bài tập Thể dục nhảy đập bóng 20 lần', right: 'Tương ứng với cấu trúc lặp với số lần biết trước' }
      ],
      difficulty: 'trung_binh',
      explanation: 'Theo Bảng mô tả lệnh lặp SGK Tin học 5 trang 57 và bài tập Luyện tập trang 58.',
      hint: 'Ghép từng lệnh lặp với cách hoạt động tương ứng.'
    }
  ],

  // =========================================================================
  // BÀI 12: THỰC HÀNH SỬ DỤNG LỆNH LẶP (SGK TRANG 59 - 61)
  // =========================================================================
  'tin5-bai-12': [
    {
      id: 'g5-b12-1',
      type: 'multiple_choice',
      question: 'Trong bài thực hành điều khiển chú vẹt bay liên tục trên sân khấu (SGK Tin học 5 trang 59 - 60), để chú vẹt khi chạm vào cạnh sân khấu không bị lộn ngược đầu, em sử dụng lệnh nào?',
      options: [
        'Lệnh [đặt kiểu xoay trái - phải] (set rotation style left-right).',
        'Lệnh [bật lại nếu chạm cạnh].',
        'Lệnh [thay đổi trang phục kế tiếp].',
        'Lệnh [đợi 1 giây].'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 60: Bổ sung lệnh [đặt kiểu xoay trái - phải] để khi vẹt quay lại không bị lộn ngược.',
      hint: 'Lệnh đặt kiểu xoay trái - phải.'
    },
    {
      id: 'g5-b12-2',
      type: 'fill_blank',
      question: 'Điền số thích hợp: "Để vẽ được một hình vuông trong Scratch, chú mèo cần lặp lại [1] lần cặp lệnh: di chuyển 100 bước và xoay sang phải [2] độ."',
      options: ['4', '90', '3', '60'],
      correctAnswer: 0,
      blankAnswers: ['4', '90'],
      wordBank: ['4', '90', '3', '60'],
      difficulty: 'kho',
      explanation: 'Phần Vận dụng SGK Tin học 5 trang 61: Hình vuông có 4 cạnh bằng nhau và góc quay là 90 độ, lặp lại 4 lần.',
      hint: 'Hình vuông có 4 cạnh và góc quay 90 độ.'
    }
  ],

  // =========================================================================
  // BÀI 13: CẤU TRÚC RẼ NHÁNH (SGK TRANG 62 - 66)
  // =========================================================================
  'tin5-bai-13': [
    {
      id: 'g5-b13-1',
      type: 'multiple_choice',
      question: 'Tình huống đèn giao thông: "Nếu thấy đèn dành cho người đi bộ màu xanh thì em qua đường; nếu không thì em dừng lại." là ví dụ minh hoạ cho cấu trúc nào (SGK Tin học 5 trang 62 - 63)?',
      options: [
        'Cấu trúc rẽ nhánh dạng thiếu (nếu <điều kiện> thì <công việc>).',
        'Cấu trúc rẽ nhánh dạng đủ (nếu <điều kiện> thì <công việc 1> nếu không thì <công việc 2>).',
        'Cấu trúc tuần tự không điều kiện.',
        'Cấu trúc lặp vô tận.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 63: Cấu trúc rẽ nhánh dạng đủ có hai nhánh: nếu <điều kiện> thì <công việc 1> nếu không thì <công việc 2>.',
      hint: 'Có cả 2 trường hợp "nếu... thì" và "nếu không thì" là dạng đủ.'
    },
    {
      id: 'g5-b13-2',
      type: 'multiple_choice',
      question: 'Trong phần mềm Scratch, khối lệnh rẽ nhánh dạng thiếu và dạng đủ nằm trong nhóm lệnh nào (SGK Tin học 5 trang 64)?',
      options: [
        'Nhóm lệnh Hiển thị (Looks màu tím).',
        'Nhóm lệnh Chuyển động (Motion màu xanh lam).',
        'Nhóm lệnh Điều khiển (Control màu cam).',
        'Nhóm lệnh Cảm biến (Sensing màu xanh lơ).'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 64: "Scratch có hai lệnh điều khiển cấu trúc rẽ nhánh thuộc nhóm lệnh Điều khiển."',
      hint: 'Nhóm lệnh Điều khiển (Control).'
    },
    {
      id: 'g5-b13-3',
      type: 'multiple_choice',
      question: 'Để kiểm tra điều kiện "chú mèo đang chạm vào con trỏ chuột" trong Scratch, em sử dụng khối lệnh nào trong nhóm Cảm biến (SGK Tin học 5 trang 64)?',
      options: [
        'Khối lệnh <phím trắng được bấm ?>.',
        'Khối lệnh <chuột được nhấn ?>.',
        'Khối lệnh (khoảng cách tới con trỏ chuột).',
        'Khối lệnh <đang chạm con trỏ chuột ?> (touching mouse-pointer ?).'
      ],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 64: Điều kiện chạm con trỏ chuột [đang chạm con trỏ chuột ?] thoả mãn khi con trỏ chuột chạm vào nhân vật.',
      hint: 'Khối lệnh đang chạm con trỏ chuột trong nhóm Cảm biến.'
    }
  ],

  // =========================================================================
  // BÀI 14: SỬ DỤNG BIẾN TRONG CHƯƠNG TRÌNH (SGK TRANG 67 - 72)
  // =========================================================================
  'tin5-bai-14': [
    {
      id: 'g5-b14-1',
      type: 'multiple_choice',
      question: 'Trong chương trình máy tính, "Biến" (Variable) được hiểu là gì (SGK Tin học 5 trang 70 và Bảng giải thích thuật ngữ trang 83)?',
      options: [
        'Là vùng lưu trữ dữ liệu trong máy tính được đặt tên, cho phép chương trình xử lí dữ liệu đó thông qua tên biến.',
        'Là một bài hát được lưu trong ổ đĩa cứng.',
        'Là sợi dây nối chuột vào thân máy tính.',
        'Là một con số cố định không bao giờ thay đổi được.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 70 và 83 định nghĩa: Biến là vùng lưu trữ dữ liệu trong máy tính được đặt tên, cho phép chương trình xử lí dữ liệu đó thông qua tên biến.',
      hint: 'Vùng nhớ lưu dữ liệu có tên và có thể thay đổi giá trị.'
    },
    {
      id: 'g5-b14-2',
      type: 'multiple_choice',
      question: 'Trong Scratch, khi sử dụng lệnh [hỏi "Tên của bạn là gì?" và đợi], câu trả lời do người dùng nhập từ bàn phím sẽ tự động được lưu trữ vào biến có sẵn nào (SGK Tin học 5 trang 67 - 68)?',
      options: [
        'Biến [tuổi] trong nhóm Các biến số.',
        'Biến [trả lời] (answer) trong nhóm Cảm biến.',
        'Biến [điểm] trong nhóm Chuyển động.',
        'Không được lưu vào đâu cả.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 67 - 68: Câu trả lời nhập vào từ bàn phím được lưu trong biến [trả lời]. Biến trả lời là biến có sẵn của Scratch.',
      hint: 'Biến trả lời (answer) trong nhóm Cảm biến.'
    },
    {
      id: 'g5-b14-3',
      type: 'multiple_choice',
      question: 'Để tạo một biến số mới (ví dụ biến "Tuổi" hoặc biến "Điểm") trong Scratch, em nháy chuột vào nút nào trong nhóm lệnh Các biến số (SGK Tin học 5 trang 69)?',
      options: [
        'Nháy vào nút "Chọn trang phục".',
        'Nháy vào nút "Thêm nhân vật mới".',
        'Nháy vào nút "Tạo một biến" (Make a Variable).',
        'Nháy vào nút "Tải âm thanh lên".'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 69: Nháy chuột vào nút "Tạo một biến" trong nhóm lệnh Các biến số và đặt tên cho biến.',
      hint: 'Nút Tạo một biến (Make a Variable).'
    },
    {
      id: 'g5-b14-4',
      type: 'multiple_choice',
      question: 'Giả sử biến "a" đang có giá trị là 4. Sau khi thực hiện lệnh [thay đổi a một lượng 2], giá trị mới của biến a là bao nhiêu (SGK Tin học 5 trang 70)?',
      options: [
        '8 (vì 4 x 2 = 8).',
        '2 (vì 4 - 2 = 2).',
        '4 (giữ nguyên không đổi).',
        '6 (vì 4 + 2 = 6).'
      ],
      correctAnswer: 3,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 70 câu hỏi củng cố: Giá trị ban đầu đặt a thành 4, sau đó lệnh thay đổi a một lượng 2 sẽ cộng thêm 2 vào a, kết quả là 6.',
      hint: '4 cộng thêm 2 bằng 6.'
    }
  ],

  // =========================================================================
  // BÀI 15: SỬ DỤNG BIỂU THỨC TRONG CHƯƠNG TRÌNH (SGK TRANG 73 - 77)
  // =========================================================================
  'tin5-bai-15': [
    {
      id: 'g5-b15-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm Scratch, các khối lệnh phép toán số học (+, -, *, /) và phép toán so sánh (<, =, >) nằm trong nhóm lệnh nào (SGK Tin học 5 trang 73 - 74)?',
      options: [
        'Nhóm lệnh Các phép toán (Operators màu xanh lá cây).',
        'Nhóm lệnh Chuyển động (Motion).',
        'Nhóm lệnh Cảm biến (Sensing).',
        'Nhóm lệnh Sự kiện (Events).'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 73: Nhóm lệnh Các phép toán (Operators) trong Scratch có các lệnh tạo biểu thức số học, so sánh và xử lý chuỗi.',
      hint: 'Nhóm Các phép toán (Operators) màu xanh lá cây.'
    },
    {
      id: 'g5-b15-2',
      type: 'matching',
      question: 'Em hãy ghép nối biểu thức tính toán trong toán học ở Cột A với cách viết lồng ghép khối lệnh tương ứng trong Scratch ở Cột B (theo SGK Tin học 5 trang 75):',
      options: [],
      correctAnswer: 0,
      pairs: [
        { left: 'Chu vi hình chữ nhật: 2 x (a + b)', right: 'Khối phép nhân: (Khối cộng a + b) * 2' },
        { left: 'Diện tích hình chữ nhật: a x b', right: 'Khối phép nhân: a * b' },
        { left: 'Phép chia lấy dư của 15 chia cho 4', right: 'Khối lệnh [15 chia lấy dư 4] (cho kết quả là 3)' },
        { left: 'Ghép nối chuỗi văn bản', right: 'Khối lệnh [kết hợp "táo" "chuối"]' }
      ],
      difficulty: 'trung_binh',
      explanation: 'Bảng ví dụ và phần Luyện tập SGK Tin học 5 trang 74 - 75.',
      hint: 'Ghép công thức toán học với biểu thức khối lệnh Scratch.'
    },
    {
      id: 'g5-b15-3',
      type: 'multiple_choice',
      question: 'Hai biến a và b lưu độ dài hai cạnh hình chữ nhật, hiện tại a = 3 và b = 4. Lệnh [kết hợp "Diện tích hình chữ nhật là " (a * b)] sẽ đưa ra thông báo nào trên màn hình (SGK Tin học 5 trang 77)?',
      options: [
        'Diện tích hình chữ nhật là 7.',
        'Diện tích hình chữ nhật là 12.',
        'Diện tích hình chữ nhật là 14.',
        'Diện tích hình chữ nhật là 34.'
      ],
      correctAnswer: 1,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 77 câu Luyện tập 2: a = 3, b = 4, biểu thức a * b = 12 nên câu thông báo là "Diện tích hình chữ nhật là 12".',
      hint: '3 nhân 4 bằng 12.'
    }
  ],

  // =========================================================================
  // BÀI 16: TỪ KỊCH BẢN ĐẾN CHƯƠNG TRÌNH (SGK TRANG 78 - 82)
  // =========================================================================
  'tin5-bai-16': [
    {
      id: 'g5-b16-1',
      type: 'multiple_choice',
      question: 'Trong dự án trò chơi "Mèo bắt bóng" (SGK Tin học 5 trang 78 - 80), để lưu trữ số điểm người chơi đạt được mỗi khi mèo bắt trúng quả bóng, em cần tạo thêm thành phần nào?',
      options: [
        'Một con chuột máy tính mới.',
        'Một bức tranh nền mới.',
        'Một biến số có tên là "Điểm" (Score).',
        'Một ổ đĩa USB cắm ngoài.'
      ],
      correctAnswer: 2,
      difficulty: 'de',
      explanation: 'SGK Tin học 5 trang 80 Bước 2: "Tạo biến mới [Điểm] để lưu điểm số của người chơi."',
      hint: 'Biến Điểm lưu điểm số của người chơi.'
    },
    {
      id: 'g5-b16-2',
      type: 'multiple_choice',
      question: 'Kịch bản điều khiển chú mèo trong trò chơi "Mèo bắt bóng" (SGK Tin học 5 trang 80) được mô tả như thế nào?',
      options: [
        'Mèo nhảy lên xuống và làm bóng nổ tung.',
        'Mèo đứng yên ở giữa sân khấu và không bao giờ cử động.',
        'Mèo tự động biến mất khi bấm cờ xanh.',
        'Mèo liên tục đi tới con trỏ chuột; nếu chạm vào quả bóng (Beachball) thì thay đổi Điểm một lượng 1.'
      ],
      correctAnswer: 3,
      difficulty: 'trung_binh',
      explanation: 'SGK Tin học 5 trang 80 Bước 4: Mèo liên tục đi tới con trỏ chuột, kiểm tra điều kiện [nếu đang chạm Beachball thì thay đổi Điểm một lượng 1].',
      hint: 'Mèo theo con trỏ chuột và chạm bóng thì tăng Điểm lên 1.'
    },
    {
      id: 'g5-b16-3',
      type: 'fill_blank',
      question: 'Điền từ thích hợp vào chỗ trống: "Kịch bản giúp em xác định cụ thể các [1] mà chương trình cần thực hiện. Từ kịch bản, em dễ dàng tạo ra [2] để thực hiện ý tưởng."',
      options: ['công việc', 'chương trình', 'hình ảnh', 'trò chơi'],
      correctAnswer: 0,
      blankAnswers: ['công việc', 'chương trình'],
      wordBank: ['công việc', 'chương trình', 'hình ảnh', 'trò chơi'],
      difficulty: 'de',
      explanation: 'Hộp kiến thức SGK Tin học 5 trang 79.',
      hint: 'Xác định cụ thể các công việc và tạo ra chương trình.'
    }
  ]
};
