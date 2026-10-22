import { Question } from '../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI TIN HỌC LỚP 4 (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Bao gồm đầy đủ các dạng: Trắc nghiệm, Điền khuyết, Ghép nối cột, Kéo thả sắp xếp
 */
export const QUESTIONS_GRADE_4: Record<string, Question[]> = {
  'tin4-bai-1': [
    {
      id: 'g4-b1-1',
      type: 'multiple_choice',
      question: 'Thiết bị nào sau đây thuộc phần cứng của máy tính?',
      options: ['Bàn phím, chuột, màn hình, máy in.', 'Phần mềm soạn thảo văn bản Word.', 'Hệ điều hành Windows.', 'Phần mềm lập trình Scratch.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Phần cứng là các thiết bị vật lý có thể nhìn thấy và cầm nắm được như màn hình, chuột, bàn phím, loa, máy in.',
      hint: 'Phần cứng là thiết bị vật lý cụ thể.'
    },
    {
      id: 'g4-b1-2',
      type: 'multiple_choice',
      question: 'Phần mềm máy tính là gì?',
      options: [
        'Là các chương trình được cài đặt để điều khiển máy tính và thực hiện công việc cụ thể.',
        'Là các dây dẫn điện nối màn hình với thân máy.',
        'Là vỏ ngoài bằng nhựa của bàn phím.',
        'Là giấy in của máy in.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Phần mềm (Software) là các chương trình máy tính điều khiển phần cứng và hỗ trợ người dùng làm việc.',
      hint: 'Chương trình máy tính.'
    },
    {
      id: 'g4-b1-3',
      type: 'matching',
      question: 'Ghép mỗi mục ở cột trái với loại tương ứng (Phần cứng hay Phần mềm):',
      options: ['Ghép đúng loại'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'pc1', text: 'Bàn phím, Chuột và Màn hình' },
        { id: 'pc2', text: 'Phần mềm Paint và Scratch' },
        { id: 'pc3', text: 'Hệ điều hành Windows 11' },
        { id: 'pc4', text: 'Loa máy tính và Máy in màu' }
      ],
      matchingRight: [
        { id: 'loai1', text: 'Phần cứng máy tính (Hardware)' },
        { id: 'loai2', text: 'Phần mềm ứng dụng (Application Software)' },
        { id: 'loai3', text: 'Phần mềm hệ thống (System Software)' },
        { id: 'loai4', text: 'Thiết bị phần cứng xuất dữ liệu' }
      ],
      correctMatches: {
        pc1: 'loai1',
        pc2: 'loai2',
        pc3: 'loai3',
        pc4: 'loai4'
      },
      difficulty: 'trung_binh',
      explanation: 'Phân biệt chính xác giữa các bộ phận phần cứng và các chương trình phần mềm.',
      hint: 'Thiết bị nhìn thấy cầm nắm được là phần cứng; chương trình là phần mềm.'
    }
  ],

  'tin4-bai-4': [
    {
      id: 'g4-b4-1',
      type: 'multiple_choice',
      question: 'Khi muốn tìm kiếm thông tin về "Địa đạo Củ Chi" trên mạng Internet, từ khóa tìm kiếm nào sau đây là tốt nhất?',
      options: [
        '"Địa đạo Củ Chi"',
        'Tôi muốn biết thông tin chi tiết về di tích lịch sử Địa đạo Củ Chi nằm ở đâu?',
        'Di tích',
        'Lịch sử Việt Nam'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Từ khóa tìm kiếm nên ngắn gọn, chứa từ khóa trọng tâm rõ ràng (đặt trong ngoặc kép để tìm cụm từ chính xác).',
      hint: 'Ngắn gọn, trọng tâm, chứa cụm từ cần tìm.'
    },
    {
      id: 'g4-b4-2',
      type: 'multiple_choice',
      question: 'Công cụ tìm kiếm thông tin phổ biến nhất hiện nay trên Internet là:',
      options: ['Google (google.com).', 'Microsoft Word.', 'Paint.', 'Scratch.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Google là máy tìm kiếm (Search engine) lớn và phổ biến nhất thế giới.',
      hint: 'Google.'
    }
  ],

  'tin4-bai-5': [
    {
      id: 'g4-b5-1',
      type: 'multiple_choice',
      question: 'Thư mục trong máy tính có biểu tượng màu gì và có tác dụng gì?',
      options: [
        'Biểu tượng chiếc kẹp giấy màu vàng, dùng để chứa tệp và các thư mục con giúp sắp xếp dữ liệu ngăn nắp.',
        'Màu đỏ, chỉ dùng để xóa tệp.',
        'Màu xanh lá cây, dùng để nghe nhạc.',
        'Màu đen, dùng để vẽ tranh.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Thư mục (Folder) có biểu tượng kẹp màu vàng, giúp phân loại và quản lý các tệp tin một cách khoa học.',
      hint: 'Biểu tượng màu vàng dùng để chứa tệp và sắp xếp ngăn nắp.'
    },
    {
      id: 'g4-b5-2',
      type: 'fill_blank',
      question: 'Hãy điền từ thích hợp vào chỗ trống: "Để đổi tên một tệp hoặc thư mục, em nhấp chuột phải và chọn lệnh [1], còn để xóa em chọn lệnh [2]."',
      options: ['Rename', 'Delete', 'Copy', 'Paste'],
      correctAnswer: 0,
      blankAnswers: ['Rename', 'Delete'],
      wordBank: ['Rename', 'Delete', 'Copy', 'Paste'],
      difficulty: 'trung_binh',
      explanation: 'Rename: Đổi tên; Delete: Xóa bỏ tệp hoặc thư mục.',
      hint: 'Rename và Delete.'
    },
    {
      id: 'g4-b5-3',
      type: 'drag_drop_order',
      question: 'Sắp xếp các bước để tạo một Thư mục mới (New folder) trên máy tính:',
      options: ['Tạo thư mục mới'],
      correctAnswer: 0,
      orderItems: [
        { id: 't1', text: '1. Nháy nút phải chuột vào vùng trống trong cửa sổ ổ đĩa' },
        { id: 't2', text: '2. Di chuyển con trỏ chuột đến dòng lệnh New' },
        { id: 't3', text: '3. Nháy chuột chọn mục Folder' },
        { id: 't4', text: '4. Gõ tên thư mục mới rồi nhấn phím Enter' }
      ],
      correctOrder: ['t1', 't2', 't3', 't4'],
      difficulty: 'trung_binh',
      explanation: 'Nháy phải -> New -> Folder -> Gõ tên -> Enter.',
      hint: 'Nháy phải -> New -> Folder -> Nhập tên.'
    }
  ],

  'tin4-bai-7': [
    {
      id: 'g4-b7-1',
      type: 'multiple_choice',
      question: 'Trong kiểu gõ Telex, để gõ chữ "ă" và chữ "đ", em gõ như thế nào?',
      options: ['aw và dd.', 'aa và d.', 'ow và dd.', 'as và df.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Quy tắc Telex: a + w = ă; d + d = đ.',
      hint: 'aw và dd.'
    },
    {
      id: 'g4-b7-2',
      type: 'multiple_choice',
      question: 'Để viết hoa một chữ cái bất kỳ khi đang soạn thảo văn bản, em giữ phím nào trong khi nhấn chữ cái đó?',
      options: ['Phím Shift.', 'Phím Space.', 'Phím Enter.', 'Phím Backspace.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Nhấn giữ phím Shift trong khi gõ chữ cái sẽ tạo ra chữ hoa tương ứng.',
      hint: 'Phím Shift.'
    }
  ],

  'tin4-bai-11': [
    {
      id: 'g4-b11-1',
      type: 'multiple_choice',
      question: 'Nhân vật mặc định xuất hiện trên Sân khấu khi khởi động phần mềm lập trình Scratch là chú gì?',
      options: ['Chú mèo vàng Scratch (Cat).', 'Chú chó con.', 'Chú chim cánh cụt.', 'Chú rô bốt.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Nhân vật mặc định mang tính biểu tượng của Scratch là chú mèo vàng Scratch Cat.',
      hint: 'Chú mèo Scratch.'
    },
    {
      id: 'g4-b11-2',
      type: 'multiple_choice',
      question: 'Để chạy chương trình các khối lệnh trong Scratch, người dùng nhấp chuột vào biểu tượng nào trên góc sân khấu?',
      options: ['Lá cờ màu xanh lá cây.', 'Nút tròn màu đỏ.', 'Hình ngôi sao màu vàng.', 'Kính lúp màu đen.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Lá cờ màu xanh (Green Flag) để bắt đầu chạy kịch bản, nút tròn màu đỏ để dừng chương trình.',
      hint: 'Lá cờ màu xanh lá cây.'
    },
    {
      id: 'g4-b11-3',
      type: 'matching',
      question: 'Ghép nối khu vực trong màn hình Scratch với chức năng tương ứng:',
      options: ['Ghép khu vực Scratch'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'sc1', text: 'Sân khấu (Stage)' },
        { id: 'sc2', text: 'Khu vực nhân vật (Sprites)' },
        { id: 'sc3', text: 'Ngăn chứa khối lệnh (Blocks)' },
        { id: 'sc4', text: 'Vùng kịch bản (Script Area)' }
      ],
      matchingRight: [
        { id: 'kn1', text: 'Nơi hiển thị kết quả hoạt động của nhân vật' },
        { id: 'kn2', text: 'Chứa danh sách các nhân vật trong dự án' },
        { id: 'kn3', text: 'Chứa các khối lệnh di chuyển, hiển thị, âm thanh' },
        { id: 'kn4', text: 'Nơi lắp ráp và kéo ghép các khối lệnh' }
      ],
      correctMatches: {
        sc1: 'kn1',
        sc2: 'kn2',
        sc3: 'kn3',
        sc4: 'kn4'
      },
      difficulty: 'trung_binh',
      explanation: 'Sân khấu là nơi diễn xuất; Vùng kịch bản là nơi lắp ghép mã lệnh.',
      hint: 'Mỗi khu vực trên Scratch có vai trò đặc thù.'
    }
  ],

  'tin4-on-tap-giua-ki-1': [
    {
      id: 'g4-gk1-1',
      type: 'multiple_choice',
      question: 'Phần cứng và phần mềm có mối quan hệ như thế nào với nhau?',
      options: [
        'Phần cứng và phần mềm gắn bó mật thiết, máy tính phải có cả hai mới hoạt động được.',
        'Máy tính chỉ cần phần cứng là chạy được, không cần phần mềm.',
        'Máy tính chỉ cần phần mềm, không cần phần cứng.',
        'Phần cứng và phần mềm hoàn toàn độc lập, không liên quan đến nhau.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Phần cứng là thể xác, phần mềm là linh hồn. Thiếu một trong hai máy tính không thể hoạt động.',
      hint: 'Phải có cả hai mới hoạt động được.'
    },
    {
      id: 'g4-gk1-2',
      type: 'multiple_choice',
      question: 'Để gõ dấu tiếng Việt theo kiểu Telex: Sắc, Huyền, Hỏi, Ngã, Nặng, em sử dụng các phím nào?',
      options: ['s, f, r, x, j.', '1, 2, 3, 4, 5.', 'a, e, o, w, d.', 'z, c, v, b, n.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Quy tắc Telex: s = sắc, f = huyền, r = hỏi, x = ngã, j = nặng.',
      hint: 's, f, r, x, j.'
    },
    {
      id: 'g4-gk1-3',
      type: 'fill_blank',
      question: 'Điền từ vào chỗ trống: "Phần mềm trình chiếu [1] giúp em tạo các bài thuyết trình sinh động gồm nhiều [2]."',
      options: ['PowerPoint', 'trang chiếu (slides)', 'Paint', 'tranh vẽ'],
      correctAnswer: 0,
      blankAnswers: ['PowerPoint', 'trang chiếu (slides)'],
      wordBank: ['PowerPoint', 'trang chiếu (slides)', 'Paint', 'tranh vẽ'],
      difficulty: 'trung_binh',
      explanation: 'Microsoft PowerPoint dùng để thiết kế bài trình chiếu gồm các slide.',
      hint: 'PowerPoint và trang chiếu.'
    },
    {
      id: 'g4-gk1-4',
      type: 'matching',
      question: 'Ghép tên khối lệnh Scratch với tác dụng tương ứng:',
      options: ['Ghép khối lệnh Scratch'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'b1', text: 'move 10 steps' },
        { id: 'b2', text: 'say "Xin chào!" for 2 seconds' },
        { id: 'b3', text: 'play sound "Meow" until done' },
        { id: 'b4', text: 'when green flag clicked' }
      ],
      matchingRight: [
        { id: 'a1', text: 'Di chuyển nhân vật tiến lên 10 bước' },
        { id: 'a2', text: 'Hiện bóng thoại nói "Xin chào!" trong 2 giây' },
        { id: 'a3', text: 'Phát ra âm thanh tiếng mèo kêu cho đến hết' },
        { id: 'a4', text: 'Bắt đầu chạy kịch bản khi bấm vào cờ xanh' }
      ],
      correctMatches: {
        b1: 'a1',
        b2: 'a2',
        b3: 'a3',
        b4: 'a4'
      },
      difficulty: 'trung_binh',
      explanation: 'Move: di chuyển; Say: hội thoại; Play sound: phát tiếng; When clicked: sự kiện bắt đầu.',
      hint: 'Ý nghĩa tiếng Anh của từng khối lệnh.'
    }
  ],
// ================= BÀI 2: GÕ BÀN PHÍM ĐÚNG CÁCH VÀ AN TOÀN KHI SỬ DỤNG =================
  'tin4-bai-2': [
    {
      id: 'g4-b2-1',
      type: 'multiple_choice',
      question: 'Khi gõ bàn phím bằng 10 ngón, phím cách (Space) thường do ngón tay nào phụ trách?',
      options: ['Hai ngón tay cái', 'Ngón trỏ tay phải', 'Ngón út tay trái', 'Ngón giữa tay trái'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 4 KNTT: Hai ngón tay cái luôn đặt hờ trên phím cách Space để tạo khoảng cách giữa các từ.',
      hint: 'Phím dài nhất do ngón tay cái đảm nhiệm.'
    },
    {
      id: 'g4-b2-2',
      type: 'multiple_choice',
      question: 'Để bảo vệ mắt khi sử dụng máy tính, quy tắc 20-20-20 khuyên chúng ta điều gì?',
      options: [
        'Cứ sau 20 phút nhìn màn hình, hãy nhìn ra xa 20 feet (khoảng 6 mét) trong 20 giây.',
        'Nhìn màn hình liên tục 20 tiếng đồng hồ.',
        'Mở 20 cửa sổ ứng dụng cùng lúc.',
        'Chớp mắt đúng 20 lần mỗi giây.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Quy tắc 20-20-20 giúp mắt thư giãn, tránh mỏi mắt và cận thị khi làm việc với thiết bị điện tử.',
      hint: 'Sau 20 phút, nhìn xa 6 mét trong 20 giây.'
    }
  ],

  // ================= BÀI 3: THÔNG TIN TRÊN TRANG WEB =================
  'tin4-bai-3': [
    {
      id: 'g4-b3-1',
      type: 'multiple_choice',
      question: 'Thông tin trên trang web thường được trình bày dưới những dạng nào?',
      options: [
        'Văn bản, hình ảnh, âm thanh, video và siêu liên kết (hyperlink).',
        'Chỉ có duy nhất dạng chữ viết đen trắng.',
        'Chỉ có âm thanh radio.',
        'Chỉ có hình ảnh chụp không có chữ.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Trang web là môi trường đa phương tiện kết hợp chữ, hình ảnh, âm thanh, video và liên kết web.',
      hint: 'Đa phương tiện: chữ, ảnh, âm thanh, video, liên kết.'
    },
    {
      id: 'g4-b3-2',
      type: 'multiple_choice',
      question: 'Siêu liên kết (Hyperlink) trên trang web có đặc điểm nhận biết nào?',
      options: [
        'Khi rê chuột vào, con trỏ chuột thường chuyển thành hình bàn tay chỉ ngón.',
        'Con trỏ chuột biến mất hoàn toàn.',
        'Màn hình máy tính tự động tắt.',
        'Bàn phím phát ra tiếng chuông reo.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Khi di chuyển con trỏ chuột vào siêu liên kết, con trỏ đổi thành biểu tượng bàn tay có ngón trỏ chỉ vào.',
      hint: 'Biểu tượng hình bàn tay chỉ ngón.'
    }
  ],

  // ================= BÀI 6: SỬ DỤNG PHẦN MỀM CÓ BẢN QUYỀN VÀ TÔN TRỌNG TÁC QUYỀN =================
  'tin4-bai-6': [
    {
      id: 'g4-b6-1',
      type: 'multiple_choice',
      question: 'Hành động nào sau đây thể hiện sự TÔN TRỌNG BẢN QUYỀN phần mềm và tác quyền tác giả?',
      options: [
        'Sử dụng phần mềm có bản quyền hợp pháp hoặc phần mềm mã nguồn mở miễn phí được tác giả cho phép.',
        'Tải các bản phần mềm bẻ khóa (crack) lậu trên các trang web lạ.',
        'Sao chép bài văn của bạn khác trên mạng rồi nhận là của mình.',
        'Tải ảnh có bản quyền về xóa tên tác giả rồi đăng lên mạng.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Tôn trọng tác quyền là phẩm chất đạo đức quan trọng trong thời đại số, giúp tránh nhiễm virus từ phần mềm lậu.',
      hint: 'Dùng phần mềm có bản quyền hoặc mã nguồn mở hợp pháp.'
    },
    {
      id: 'g4-b6-2',
      type: 'fill_blank',
      question: 'Điền từ vào chỗ trống: "Khi sử dụng thông tin hoặc tranh ảnh từ Internet vào bài học, em cần ghi rõ [1] để tôn trọng [2]."',
      options: ['nguồn trích dẫn', 'tác giả', 'tiền bạc', 'máy tính'],
      correctAnswer: 0,
      blankAnswers: ['nguồn trích dẫn', 'tác giả'],
      wordBank: ['nguồn trích dẫn', 'tác giả', 'tiền bạc', 'máy tính'],
      difficulty: 'trung_binh',
      explanation: 'Luôn ghi rõ nguồn và tác giả khi sử dụng tài liệu tham khảo.',
      hint: 'Nguồn trích dẫn và tác giả.'
    }
  ],

  // ================= BÀI 8: CHÈN HÌNH ẢNH VÀ ĐỊNH DẠNG VĂN BẢN =================
  'tin4-bai-8': [
    {
      id: 'g4-b8-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm soạn thảo văn bản Word, muốn chèn thêm một hình ảnh vào văn bản ta chọn dải lệnh nào?',
      options: ['Insert -> Pictures', 'Home -> Font', 'View -> Zoom', 'Layout -> Margins'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Dải lệnh Insert (Chèn) chứa nút lệnh Pictures để chèn tranh ảnh minh họa vào trang văn bản.',
      hint: 'Insert nghĩa là chèn, Pictures là tranh ảnh.'
    },
    {
      id: 'g4-b8-2',
      type: 'matching',
      question: 'Ghép nút lệnh định dạng văn bản với tác dụng tương ứng:',
      options: ['Ghép nút lệnh'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'b', text: 'Nút lệnh chữ B (Bold)' },
        { id: 'i', text: 'Nút lệnh chữ I (Italic)' },
        { id: 'u', text: 'Nút lệnh chữ U (Underline)' },
        { id: 'c', text: 'Nút Center (Căn giữa)' }
      ],
      matchingRight: [
        { id: 't1', text: 'Làm chữ in đậm' },
        { id: 't2', text: 'Làm chữ in nghiêng' },
        { id: 't3', text: 'Gạch chân dưới chữ' },
        { id: 't4', text: 'Căn văn bản vào chính giữa trang' }
      ],
      correctMatches: { b: 't1', i: 't2', u: 't3', c: 't4' },
      difficulty: 'trung_binh',
      explanation: 'B: Bold (đậm); I: Italic (nghiêng); U: Underline (gạch chân); Center: căn giữa tiêu đề.',
      hint: 'Các chữ cái viết tắt tiếng Anh.'
    }
  ],

  // ================= BÀI 9: LÀM QUEN VỚI BÀI TRÌNH CHIẾU =================
  'tin4-bai-9': [
    {
      id: 'g4-b9-1',
      type: 'multiple_choice',
      question: 'Phần mềm trình chiếu Microsoft PowerPoint thường được dùng để làm gì?',
      options: [
        'Tạo các bài thuyết trình, bài giảng điện tử sinh động trước lớp học hoặc hội nghị.',
        'Soạn thảo văn bản hành chính dài hàng trăm trang sách.',
        'Lập trình hệ điều hành cho điện thoại.',
        'Quản lý dữ liệu kế toán lớn.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'PowerPoint là phần mềm chuyên dụng tạo bài trình chiếu gồm các slide phục vụ thuyết trình.',
      hint: 'Tạo bài thuyết trình trước lớp.'
    },
    {
      id: 'g4-b9-2',
      type: 'multiple_choice',
      question: 'Trang đầu tiên của bài trình chiếu thường chứa nội dung gì?',
      options: [
        'Tiêu đề bài thuyết trình, tên người thuyết trình và tên trường lớp.',
        'Toàn bộ bảng đáp án câu hỏi.',
        'Danh sách tài liệu tham khảo dài.',
        'Một trang trắng tinh không có chữ.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Trang đầu tiên là trang tiêu đề (Title slide) giới thiệu chủ đề và tác giả bài trình chiếu.',
      hint: 'Tiêu đề bài và người trình bày.'
    }
  ],

  // ================= BÀI 10: THÊM HÌNH ẢNH VÀ HIỆU ỨNG VÀO TRANG CHIẾU =================
  'tin4-bai-10': [
    {
      id: 'g4-b10-1',
      type: 'multiple_choice',
      question: 'Trong PowerPoint, phím nào trên bàn phím dùng để bắt đầu trình chiếu toàn màn hình từ trang đầu tiên?',
      options: ['Phím F5', 'Phím Enter', 'Phím Esc', 'Phím Space'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Nhấn phím F5 để bắt đầu trình chiếu từ slide đầu tiên; phím Esc dùng để thoát khỏi chế độ trình chiếu.',
      hint: 'Phím chức năng F5 ở hàng trên cùng.'
    },
    {
      id: 'g4-b10-2',
      type: 'multiple_choice',
      question: 'Hiệu ứng chuyển từ trang chiếu này sang trang chiếu khác trong PowerPoint được gọi là gì?',
      options: ['Transitions', 'Animations', 'WordArt', 'Shapes'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Transitions là hiệu ứng chuyển trang chiếu; còn Animations là hiệu ứng chuyển động cho từng đối tượng (chữ, hình) trong slide.',
      hint: 'Transitions là chuyển tiếp giữa các trang.'
    }
  ],

  // ================= BÀI 12: ĐIỀU KHIỂN NHÂN VẬT DI CHUYỂN VÀ ĐỔI MÀU =================
  'tin4-bai-12': [
    {
      id: 'g4-b12-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm Scratch, khối lệnh nào dùng để bắt đầu chương trình khi người dùng nhấn chuột vào lá cờ xanh?',
      options: ['when green flag clicked', 'move 10 steps', 'say Hello', 'stop all'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Khối lệnh sự kiện màu vàng "when green flag clicked" là điểm khởi đầu kích hoạt kịch bản Scratch.',
      hint: 'Lá cờ xanh biểu tượng của nút bắt đầu.'
    },
    {
      id: 'g4-b12-2',
      type: 'multiple_choice',
      question: 'Để nhân vật chú mèo tiến về phía trước một khoảng ngắn, em sử dụng khối lệnh nào?',
      options: ['move 10 steps', 'turn 15 degrees', 'change color effect by 25', 'hide'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Lệnh move (di chuyển) giúp nhân vật tiến theo hướng đang nhìn một số bước nhất định.',
      hint: 'Move có nghĩa là di chuyển.'
    }
  ],

  // ================= BÀI 13: CHIA BÀI TOÁN THÀNH CÁC BÀI TOÁN NHỎ HƠN =================
  'tin4-bai-13': [
    {
      id: 'g4-b13-1',
      type: 'multiple_choice',
      question: 'Phương pháp phân rã bài toán (chia bài toán lớn thành các bài toán nhỏ hơn) giúp ta điều gì?',
      options: [
        'Giúp công việc phức tạp trở nên rõ ràng, dễ hiểu và dễ giải quyết hơn từng phần.',
        'Làm cho bài toán trở nên rối rắm và không thể hoàn thành.',
        'Khiến máy tính bị quá tải và chậm đi.',
        'Làm mất nhiều thời gian hơn mà không có lợi ích.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Tư duy phân rã là tư duy cốt lõi của lập trình và giải quyết vấn đề trong cuộc sống.',
      hint: 'Biến việc khó thành các việc nhỏ dễ làm.'
    },
    {
      id: 'g4-b13-2',
      type: 'fill_blank',
      question: 'Điền từ vào chỗ trống: "Để làm một dự án Scratch trò chơi, em có thể chia thành 3 phần: vẽ [1], lập trình cho [2] và thêm [3]."',
      options: ['sân khấu nền', 'nhân vật chuyển động', 'âm thanh tính điểm', 'bàn phím'],
      correctAnswer: 0,
      blankAnswers: ['sân khấu nền', 'nhân vật chuyển động', 'âm thanh tính điểm'],
      wordBank: ['sân khấu nền', 'nhân vật chuyển động', 'âm thanh tính điểm', 'bàn phím'],
      difficulty: 'trung_binh',
      explanation: 'Chia dự án thành: Sân khấu (Backdrop) -> Nhân vật (Sprites) -> Âm thanh & tính điểm.',
      hint: 'Sân khấu nền, nhân vật chuyển động, âm thanh tính điểm.'
    }
  ],

  // ================= BÀI 14: THỰC HÀNH TẠO CHƯƠNG TRÌNH SCRATCH ĐƠN GIẢN =================
  'tin4-bai-14': [
    {
      id: 'g4-b14-1',
      type: 'drag_drop_order',
      question: 'Sắp xếp quy trình các bước tạo chương trình Scratch chú mèo vừa đi vừa kêu Meow:',
      options: ['Quy trình tạo Scratch'],
      correctAnswer: 0,
      orderItems: [
        { id: 's1', text: '1. Kéo khối lệnh sự kiện "when green flag clicked" vào khu vực lập trình' },
        { id: 's2', text: '2. Kéo khối lệnh "move 10 steps" ghép ngay dưới cờ xanh' },
        { id: 's3', text: '3. Ghép khối lệnh "play sound Meow until done" vào sau lệnh di chuyển' },
        { id: 's4', text: '4. Bấm vào lá cờ xanh trên sân khấu để kiểm tra chú mèo hoạt động' }
      ],
      correctOrder: ['s1', 's2', 's3', 's4'],
      difficulty: 'trung_binh',
      explanation: 'Sự kiện mở đầu -> Di chuyển -> Phát tiếng -> Chạy thử nghiệm.',
      hint: 'Bắt đầu từ cờ xanh đến lúc chạy thử.'
    },
    {
      id: 'g4-b14-2',
      type: 'multiple_choice',
      question: 'Trong Scratch, nếu muốn nhân vật di chuyển liên tục không dừng lại, ta nên đặt lệnh di chuyển vào bên trong khối lệnh nào?',
      options: ['Khối lệnh lặp mãi mãi "forever"', 'Khối lệnh "if ... then"', 'Khối lệnh "stop all"', 'Khối lệnh "hide"'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Khối lệnh vòng lặp forever (mãi mãi) giúp lặp lại các hành động liên tục cho đến khi nhấn nút dừng màu đỏ.',
      hint: 'Khối lặp mãi mãi forever.'
    }
  ]
};
