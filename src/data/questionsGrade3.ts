import { Question } from '../types/quiz';

/**
 * NGÂN HÀNG CÂU HỎI TIN HỌC LỚP 3 (SGK KẾT NỐI TRI THỨC VỚI CUỘC SỐNG)
 * Bao gồm đầy đủ các dạng: Trắc nghiệm, Điền khuyết, Ghép nối cột, Kéo thả sắp xếp
 */
export const QUESTIONS_GRADE_3: Record<string, Question[]> = {
  'tin3-bai-1': [
    {
      id: 'g3-b1-1',
      type: 'multiple_choice',
      question: 'Khi nghe thấy tiếng trống trường vang lên báo giờ ra chơi, em quyết định làm gì?',
      options: [
        'Cùng các bạn ra sân trường vui chơi, tập thể dục.',
        'Mở sách vở ra làm bài kiểm tra.',
        'Đi về nhà ngay lập tức.',
        'Ngủ trong lớp học.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Tiếng trống trường là thông tin giúp em đưa ra quyết định ra sân trường vui chơi cùng bạn bè.',
      hint: 'Tiếng trống báo hiệu giờ ra chơi.'
    },
    {
      id: 'g3-b1-2',
      type: 'multiple_choice',
      question: 'Khi đi bộ đến ngã tư đường, nhìn thấy đèn tín hiệu giao thông chuyển sang màu đỏ, em sẽ đưa ra quyết định nào?',
      options: [
        'Dừng lại trước vạch dừng.',
        'Chạy thật nhanh qua đường.',
        'Đi sang làn đường khác.',
        'Nhắm mắt đi tiếp.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Đèn đỏ là thông tin thị giác giúp người tham gia giao thông quyết định dừng lại để đảm bảo an toàn.',
      hint: 'Đèn đỏ có ý nghĩa là dừng lại.'
    },
    {
      id: 'g3-b1-3',
      type: 'fill_blank',
      question: 'Hãy chọn từ thích hợp để điền vào chỗ trống: "[1] giúp con người hiểu biết về thế giới xung quanh và đưa ra các [2] đúng đắn."',
      options: ['Thông tin', 'quyết định', 'Máy tính', 'Bàn phím'],
      correctAnswer: 0,
      blankAnswers: ['Thông tin', 'quyết định'],
      wordBank: ['Thông tin', 'quyết định', 'Máy tính', 'Bàn phím'],
      difficulty: 'trung_binh',
      explanation: 'Thông tin giúp con người hiểu biết về thế giới xung quanh và là cơ sở để đưa ra các quyết định.',
      hint: 'Thông tin -> quyết định.'
    },
    {
      id: 'g3-b1-4',
      type: 'matching',
      question: 'Em hãy ghép thông tin thu nhận được với quyết định hành động tương ứng:',
      options: ['Ghép nối đúng các cặp'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'l1', text: 'Trời sắp đổ mưa to' },
        { id: 'l2', text: 'Đồng hồ báo thức reo' },
        { id: 'l3', text: 'Đèn giao thông bật xanh' }
      ],
      matchingRight: [
        { id: 'r1', text: 'Mang theo áo mưa hoặc ô' },
        { id: 'r2', text: 'Thức dậy để chuẩn bị đi học' },
        { id: 'r3', text: 'Được phép di chuyển qua đường' }
      ],
      correctMatches: {
        l1: 'r1',
        l2: 'r2',
        l3: 'r3'
      },
      difficulty: 'trung_binh',
      explanation: 'Trời mưa -> mang áo mưa; Chuông reo -> thức dậy; Đèn xanh -> sang đường an toàn.',
      hint: 'Ghép thông tin với hành vi phù hợp trong đời sống.'
    }
  ],

  'tin3-bai-2': [
    {
      id: 'g3-b2-1',
      type: 'multiple_choice',
      question: 'Máy tính để bàn gồm có bao nhiêu bộ phận cơ bản?',
      options: ['4 bộ phận.', '2 bộ phận.', '3 bộ phận.', '5 bộ phận.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Máy tính để bàn có 4 bộ phận cơ bản: Thân máy, Màn hình, Bàn phím và Chuột máy tính.',
      hint: 'Gồm thân máy, màn hình, bàn phím và chuột.'
    },
    {
      id: 'g3-b2-2',
      type: 'multiple_choice',
      question: 'Bộ phận nào của máy tính được ví như "bộ não", chứa bộ vi xử lý thực hiện mọi phép tính và điều khiển máy tính?',
      options: ['Thân máy tính.', 'Màn hình.', 'Chuột máy tính.', 'Bàn phím.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Thân máy chứa bộ vi xử lý (CPU) được coi là bộ não điều khiển toàn bộ hoạt động của máy tính.',
      hint: 'Thân máy tính.'
    },
    {
      id: 'g3-b2-3',
      type: 'matching',
      question: 'Em hãy ghép nối bộ phận máy tính để bàn với chức năng tương ứng:',
      options: ['Ghép nối đúng'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'bp1', text: 'Màn hình' },
        { id: 'bp2', text: 'Bàn phím' },
        { id: 'bp3', text: 'Chuột máy tính' },
        { id: 'bp4', text: 'Thân máy' }
      ],
      matchingRight: [
        { id: 'cn1', text: 'Hiển thị kết quả làm việc (chữ, hình ảnh, video)' },
        { id: 'cn2', text: 'Nhập chữ cái, số và ký hiệu vào máy tính' },
        { id: 'cn3', text: 'Điều khiển con trỏ trên màn hình nhanh chóng' },
        { id: 'cn4', text: 'Là "bộ não" xử lý và lưu trữ dữ liệu' }
      ],
      correctMatches: {
        bp1: 'cn1',
        bp2: 'cn2',
        bp3: 'cn3',
        bp4: 'cn4'
      },
      difficulty: 'trung_binh',
      explanation: 'Màn hình hiển thị; Bàn phím nhập chữ; Chuột điều khiển; Thân máy xử lý.',
      hint: 'Mỗi bộ phận có chức năng riêng.'
    }
  ],

  'tin3-bai-3': [
    {
      id: 'g3-b3-1',
      type: 'multiple_choice',
      question: 'Chuột máy tính thông thường gồm có các bộ phận nào?',
      options: [
        'Nút trái, nút phải và bánh lăn (nút cuộn).',
        'Nút nguồn và màn hình nhỏ.',
        'Các phím chữ và phím số.',
        'Bộ vi xử lý và dây nguồn.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Chuột máy tính cơ bản gồm nút chuột trái, nút chuột phải và bánh lăn ở giữa.',
      hint: 'Nút trái, nút phải, bánh lăn.'
    },
    {
      id: 'g3-b3-2',
      type: 'multiple_choice',
      question: 'Thao tác "nhấn nhanh nút chuột trái hai lần liên tiếp rồi thả tay" được gọi là gì?',
      options: ['Nháy đúp chuột.', 'Nháy chuột.', 'Kéo thả chuột.', 'Cuộn chuột.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Nháy đúp chuột (Double click) là nhấn nhanh 2 lần nút chuột trái.',
      hint: 'Nháy đúp chuột.'
    },
    {
      id: 'g3-b3-3',
      type: 'drag_drop_order',
      question: 'Em hãy kéo thả để sắp xếp các bước của thao tác Kéo thả chuột:',
      options: ['Thực hiện kéo thả chuột'],
      correctAnswer: 0,
      orderItems: [
        { id: 's1', text: '1. Di chuyển con trỏ chuột đến đối tượng cần kéo' },
        { id: 's2', text: '2. Nhấn và giữ nút chuột trái' },
        { id: 's3', text: '3. Di chuyển chuột đến vị trí đích mới' },
        { id: 's4', text: '4. Thả ngón tay khỏi nút chuột trái' }
      ],
      correctOrder: ['s1', 's2', 's3', 's4'],
      difficulty: 'trung_binh',
      explanation: 'Thao tác kéo thả chuột gồm: Trỏ vào đối tượng -> Nhấn giữ nút trái -> Rê chuột -> Thả tay.',
      hint: 'Trỏ chuột -> Nhấn giữ nút trái -> Di chuyển -> Thả tay.'
    }
  ],

  'tin3-bai-4': [
    {
      id: 'g3-b4-1',
      type: 'multiple_choice',
      question: 'Trên bàn phím máy tính, hai phím nào có gờ nổi để đặt hai ngón tay trỏ khi bắt đầu gõ?',
      options: ['Phím F và phím J.', 'Phím A và phím L.', 'Phím G và phím H.', 'Phím C và phím M.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Hai phím có gờ là phím F (ngón trỏ trái) và phím J (ngón trỏ phải) nằm ở hàng phím cơ sở.',
      hint: 'Phím F và J trên hàng phím cơ sở.'
    },
    {
      id: 'g3-b4-2',
      type: 'multiple_choice',
      question: 'Hàng phím quan trọng nhất, nơi đặt các ngón tay ở vị trí xuất phát gọi là gì?',
      options: ['Hàng phím cơ sở.', 'Hàng phím số.', 'Hàng phím trên.', 'Hàng phím dưới.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Hàng phím cơ sở (chứa A, S, D, F, G, H, J, K, L) là hàng phím xuất phát của 10 ngón tay.',
      hint: 'Hàng phím cơ sở.'
    },
    {
      id: 'g3-b4-3',
      type: 'fill_blank',
      question: 'Điền từ còn thiếu: "Phím dài nhất trên bàn phím là phím [1], do ngón tay [2] phụ trách."',
      options: ['Cách (Space)', 'cái', 'Enter', 'trỏ'],
      correctAnswer: 0,
      blankAnswers: ['Cách (Space)', 'cái'],
      wordBank: ['Cách (Space)', 'cái', 'Enter', 'trỏ'],
      difficulty: 'trung_binh',
      explanation: 'Phím dài nhất là phím Cách (Spacebar), được gõ bằng ngón tay cái.',
      hint: 'Phím Cách do ngón cái bấm.'
    }
  ],

  'tin3-bai-9': [
    {
      id: 'g3-b9-1',
      type: 'multiple_choice',
      question: 'Hành động nào sau đây là KHÔNG AN TOÀN khi ngồi học trong phòng máy tính?',
      options: [
        'Vừa uống nước ngọt vừa dùng máy tính, nghịch dây điện.',
        'Ngồi thẳng lưng, mắt cách màn hình 50 cm đến 80 cm.',
        'Bật máy tính khi có sự hướng dẫn của thầy cô giáo.',
        'Giữ gìn vệ sinh bàn phím và màn hình sạch sẽ.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Mang đồ ăn uống hay nghịch dây điện có thể làm đổ nước gây chập cháy, giật điện rất nguy hiểm.',
      hint: 'Không mang nước uống và nghịch dây điện.'
    },
    {
      id: 'g3-b9-2',
      type: 'multiple_choice',
      question: 'Khoảng cách an toàn và khoa học nhất từ mắt đến màn hình máy tính là bao nhiêu?',
      options: [
        'Từ 50 cm đến 80 cm.',
        'Dưới 20 cm.',
        'Cách xa trên 3 mét.',
        'Càng gần càng tốt.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Khoảng cách mắt hợp lý là khoảng 50cm - 80cm (khoảng bằng độ dài một cánh tay) để bảo vệ thị lực.',
      hint: 'Từ 50 đến 80 cm.'
    }
  ],

  'tin3-bai-10': [
    {
      id: 'g3-b10-1',
      type: 'multiple_choice',
      question: 'Phần mềm Paint có biểu tượng hộp đựng bút vẽ và bảng màu được dùng để làm gì?',
      options: [
        'Vẽ tranh, tô màu và chỉnh sửa hình ảnh đơn giản.',
        'Nghe nhạc và xem video hoạt hình.',
        'Gõ bài kiểm tra tiếng Anh.',
        'Điều khiển rô bốt tự hành.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Phần mềm Paint là công cụ đồ họa giúp học sinh vẽ tranh, tô màu và sáng tạo hình ảnh.',
      hint: 'Vẽ tranh và tô màu.'
    },
    {
      id: 'g3-b10-2',
      type: 'multiple_choice',
      question: 'Để xóa một nét vẽ bị sai trên phần mềm Paint, em dùng công cụ nào?',
      options: [
        'Công cụ Cục tẩy (Eraser).',
        'Công cụ Bút chì (Pencil).',
        'Công cụ Đổ màu (Fill with color).',
        'Công cụ Kính lúp (Magnifier).'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Công cụ Cục tẩy (Eraser) có biểu tượng hình cục tẩy dùng để xóa các nét vẽ sai.',
      hint: 'Công cụ Cục tẩy (Eraser).'
    }
  ],

  'tin3-bai-11': [
    {
      id: 'g3-b11-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm Paint, khi muốn vẽ một hình tròn hoàn hảo bằng công cụ Oval, em cần nhấn giữ phím nào trong lúc kéo thả chuột?',
      options: ['Phím Shift.', 'Phím Ctrl.', 'Phím Alt.', 'Phím Space.'],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Nhấn giữ phím Shift giúp vẽ hình tròn hoàn hảo (khi dùng Oval) hoặc hình vuông hoàn hảo (khi dùng Rectangle).',
      hint: 'Nhấn giữ phím Shift.'
    },
    {
      id: 'g3-b11-2',
      type: 'multiple_choice',
      question: 'Color 1 trong phần mềm Paint là màu gì?',
      options: ['Màu vẽ nét (tiền cảnh).', 'Màu nền.', 'Màu trong suốt.', 'Màu tẩy xóa.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Color 1 là màu vẽ nét chính (Foreground color) khi dùng chuột trái vẽ hình.',
      hint: 'Color 1 là màu nét vẽ.'
    }
  ],

  'tin3-on-tap-giua-ki-1': [
    {
      id: 'g3-gk1-1',
      type: 'multiple_choice',
      question: 'Máy tính để bàn gồm 4 bộ phận cơ bản là:',
      options: [
        'Thân máy, Màn hình, Bàn phím và Chuột.',
        'Màn hình, Loa, Tai nghe và Chuột.',
        'Bàn phím, Chuột, Máy in và Ổ cứng.',
        'Thân máy, Pin sạc, Dây mạng và Màn hình.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: '4 bộ phận cơ bản của máy tính để bàn: Thân máy, Màn hình, Bàn phím và Chuột.',
      hint: 'Thân máy, Màn hình, Bàn phím, Chuột.'
    },
    {
      id: 'g3-gk1-2',
      type: 'multiple_choice',
      question: 'Thao tác nào giúp khởi động một phần mềm trên màn hình nền Desktop bằng chuột máy tính?',
      options: ['Nháy đúp chuột trái vào biểu tượng phần mềm.', 'Nháy nút phải một lần.', 'Kéo thả chuột ra chỗ trống.', 'Lăn bánh xe cuộn.'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Nháy đúp chuột (nhấn 2 lần liên tiếp nút chuột trái) vào biểu tượng để mở phần mềm.',
      hint: 'Nháy đúp nút chuột trái.'
    },
    {
      id: 'g3-gk1-3',
      type: 'fill_blank',
      question: 'Hãy điền từ vào chỗ trống: "Hai phím có gờ trên hàng phím cơ sở là phím [1] và phím [2]."',
      options: ['F', 'J', 'A', 'S'],
      correctAnswer: 0,
      blankAnswers: ['F', 'J'],
      wordBank: ['F', 'J', 'A', 'S'],
      difficulty: 'de',
      explanation: 'Phím F dành cho ngón trỏ tay trái, phím J dành cho ngón trỏ tay phải.',
      hint: 'Phím F và J.'
    },
    {
      id: 'g3-gk1-4',
      type: 'matching',
      question: 'Ghép thao tác chuột với công dụng tương ứng:',
      options: ['Ghép đúng thao tác'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'm1', text: 'Nháy chuột trái' },
        { id: 'm2', text: 'Nháy đúp chuột' },
        { id: 'm3', text: 'Nháy nút phải' },
        { id: 'm4', text: 'Lăn nút cuộn' }
      ],
      matchingRight: [
        { id: 'd1', text: 'Chọn đối tượng trên màn hình' },
        { id: 'd2', text: 'Mở ứng dụng hoặc tệp tin' },
        { id: 'd3', text: 'Mở bảng chọn thực đơn lệnh (menu)' },
        { id: 'd4', text: 'Cuộn trang văn bản lên hoặc xuống' }
      ],
      correctMatches: {
        m1: 'd1',
        m2: 'd2',
        m3: 'd3',
        m4: 'd4'
      },
      difficulty: 'trung_binh',
      explanation: 'Nháy trái: Chọn; Nháy đúp: Mở; Nháy phải: Mở menu; Lăn cuộn: Cuộn trang.',
      hint: 'Thao tác cơ bản của chuột.'
    },
    {
      id: 'g3-gk1-5',
      type: 'drag_drop_order',
      question: 'Sắp xếp quy trình các bước vẽ hình ngôi nhà cơ bản trong Paint:',
      options: ['Quy trình vẽ Paint'],
      correctAnswer: 0,
      orderItems: [
        { id: 'b1', text: '1. Khởi động phần mềm Paint từ màn hình nền' },
        { id: 'b2', text: '2. Dùng công cụ Rectangle vẽ thân nhà và công cụ Polygon/Line vẽ mái nhà' },
        { id: 'b3', text: '3. Dùng công cụ Fill with color để tô màu mái ngói và tường nhà' },
        { id: 'b4', text: '4. Lưu tranh vẽ vào thư mục của em (File -> Save)' }
      ],
      correctOrder: ['b1', 'b2', 'b3', 'b4'],
      difficulty: 'trung_binh',
      explanation: 'Mở Paint -> Vẽ khung hình -> Đổ màu -> Lưu tranh.',
      hint: 'Khởi động -> Vẽ hình -> Tô màu -> Lưu lại.'
    }
  ],
// ================= BÀI 5: SỬ DỤNG BÀN PHÍM ĐÚNG CÁCH =================
  'tin3-bai-5': [
    {
      id: 'g3-b5-1',
      type: 'multiple_choice',
      question: 'Trên bàn phím máy tính, hai phím nào có gờ nổi để đặt hai ngón trỏ làm mốc?',
      options: ['Phím F và phím J', 'Phím A và phím L', 'Phím G và phím H', 'Phím D và phím K'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'SGK Tin học 3 KNTT: Hai phím F và J trên hàng phím cơ sở có gờ nổi giúp người dùng định vị ngón tay mà không cần nhìn bàn phím.',
      hint: 'Hai phím có gờ nổi trên hàng cơ sở.'
    },
    {
      id: 'g3-b5-2',
      type: 'multiple_choice',
      question: 'Khi ngồi làm việc với máy tính, tư thế ngồi nào sau đây là ĐÚNG?',
      options: [
        'Lưng thẳng, mắt cách màn hình 50 cm đến 70 cm, bàn chân đặt bằng phẳng trên sàn.',
        'Nằm bò ra bàn học để nhìn màn hình cho gần.',
        'Ngồi nghiêng một bên và gác chân lên ghế.',
        'Cúi sát mắt vào màn hình cách 10 cm.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Tư thế ngồi thẳng lưng và giữ khoảng cách mắt 50-70cm giúp bảo vệ cột sống và thị lực của học sinh.',
      hint: 'Lưng thẳng, mắt cách màn hình 50-70cm.'
    },
    {
      id: 'g3-b5-3',
      type: 'matching',
      question: 'Ghép ngón tay với phím xuất phát tương ứng trên hàng phím cơ sở:',
      options: ['Ghép đúng ngón tay với phím'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'n1', text: 'Ngón trỏ tay trái' },
        { id: 'n2', text: 'Ngón trỏ tay phải' },
        { id: 'n3', text: 'Ngón út tay trái' },
        { id: 'n4', text: 'Hai ngón tay cái' }
      ],
      matchingRight: [
        { id: 'p1', text: 'Phím F (có gờ)' },
        { id: 'p2', text: 'Phím J (có gờ)' },
        { id: 'p3', text: 'Phím A' },
        { id: 'p4', text: 'Phím cách Space (phím dài nhất)' }
      ],
      correctMatches: { n1: 'p1', n2: 'p2', n3: 'p3', n4: 'p4' },
      difficulty: 'trung_binh',
      explanation: 'Quy tắc 10 ngón: Trỏ trái F, trỏ phải J, út trái A, hai ngón cái đặt trên phím cách.',
      hint: 'F và J dành cho ngón trỏ.'
    }
  ],

  // ================= BÀI 6: KHÁM PHÁ THÔNG TIN TRÊN INTERNET =================
  'tin3-bai-6': [
    {
      id: 'g3-b6-1',
      type: 'multiple_choice',
      question: 'Phần mềm nào sau đây là trình duyệt web giúp em truy cập các trang thông tin trên Internet?',
      options: ['Google Chrome, Cốc Cốc', 'Phần mềm Paint', 'Phần mềm gõ Unikey', 'Máy tính cầm tay Calculator'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Google Chrome, Microsoft Edge, Cốc Cốc là các trình duyệt web phổ biến để xem tin tức và bài giảng trực tuyến.',
      hint: 'Biểu tượng hình tròn nhiều màu sắc.'
    },
    {
      id: 'g3-b6-2',
      type: 'multiple_choice',
      question: 'Khi sử dụng Internet, hành vi nào sau đây là AN TOÀN cho học sinh tiểu học?',
      options: [
        'Hỏi ý kiến cha mẹ/thầy cô trước khi xem nội dung mới và không cung cấp địa chỉ nhà cho người lạ.',
        'Cung cấp mật khẩu và số điện thoại cho bất kỳ ai trên mạng.',
        'Bấm vào các liên kết lạ nhấp nháy trúng thưởng tiền.',
        'Tự ý hẹn gặp người quen trên mạng mà không báo người lớn.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Học sinh chỉ xem các trang web an toàn, hỏi ý kiến bố mẹ và tuyệt đối không chia sẻ thông tin cá nhân.',
      hint: 'Hỏi ý kiến cha mẹ và thầy cô.'
    }
  ],

  // ================= BÀI 7: SẮP XẾP ĐỂ DỄ TÌM =================
  'tin3-bai-7': [
    {
      id: 'g3-b7-1',
      type: 'multiple_choice',
      question: 'Vì sao chúng ta nên phân loại và sắp xếp sách vở, đồ dùng hoặc tệp dữ liệu gọn gàng?',
      options: [
        'Để dễ dàng và nhanh chóng tìm thấy khi cần sử dụng.',
        'Để chiếm thật nhiều diện tích cất giữ.',
        'Để người khác không bao giờ tìm thấy được.',
        'Chỉ để nhìn cho có việc làm.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Sắp xếp khoa học theo nhóm/chủ đề giúp tiết kiệm thời gian tìm kiếm và làm việc hiệu quả.',
      hint: 'Dễ dàng và nhanh chóng tìm thấy.'
    },
    {
      id: 'g3-b7-2',
      type: 'matching',
      question: 'Ghép đồ vật/tài liệu vào ngăn cất giữ hợp lí nhất:',
      options: ['Ghép đúng phân loại'],
      correctAnswer: 0,
      matchingLeft: [
        { id: 'o1', text: 'Sách giáo khoa và vở bài tập' },
        { id: 'o2', text: 'Bút chì, thước kẻ, compa' },
        { id: 'o3', text: 'Các bài hát thiếu nhi dạng tệp MP3' }
      ],
      matchingRight: [
        { id: 'c1', text: 'Giá sách ngăn nắp' },
        { id: 'c2', text: 'Hộp bút học sinh' },
        { id: 'c3', text: 'Thư mục Âm nhạc (Music) trong máy tính' }
      ],
      correctMatches: { o1: 'c1', o2: 'c2', o3: 'c3' },
      difficulty: 'trung_binh',
      explanation: 'Phân loại đồ vật thực tế tương tự việc chia thư mục trong máy tính.',
      hint: 'Đồ dùng học tập vào hộp bút, tệp nhạc vào thư mục Music.'
    }
  ],

  // ================= BÀI 8: SƠ ĐỒ TƯ DUY =================
  'tin3-bai-8': [
    {
      id: 'g3-b8-1',
      type: 'multiple_choice',
      question: 'Sơ đồ tư duy (Mindmap) có thành phần chính ở trung tâm là gì?',
      options: [
        'Chủ đề chính (từ khóa hoặc hình ảnh trung tâm)',
        'Một đoạn văn bản dài 10 trang',
        'Hình ảnh trò chơi điện tử',
        'Địa chỉ trang web'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Sơ đồ tư duy bắt đầu từ chủ đề chính ở trung tâm, sau đó tỏa ra các nhánh chứa từ khóa và hình minh họa.',
      hint: 'Chủ đề chính ở trung tâm.'
    },
    {
      id: 'g3-b8-2',
      type: 'fill_blank',
      question: 'Điền từ vào chỗ trống: "Sơ đồ tư duy giúp em ghi nhớ kiến thức tốt hơn nhờ sự kết hợp giữa [1] và [2]."',
      options: ['từ khóa', 'hình ảnh màu sắc', 'âm thanh', 'trò chơi'],
      correctAnswer: 0,
      blankAnswers: ['từ khóa', 'hình ảnh màu sắc'],
      wordBank: ['từ khóa', 'hình ảnh màu sắc', 'âm thanh', 'trò chơi'],
      difficulty: 'trung_binh',
      explanation: 'Sơ đồ tư duy kết hợp từ khóa cô đọng và hình ảnh màu sắc kích thích não bộ ghi nhớ sâu.',
      hint: 'Từ khóa và hình ảnh.'
    }
  ],

  // ================= BÀI 12: EM TẬP TÔ MÀU VÀ CHỈNH SỬA TRANH VẼ =================
  'tin3-bai-12': [
    {
      id: 'g3-b12-1',
      type: 'multiple_choice',
      question: 'Trong phần mềm Paint, công cụ nào dùng để đổ màu vào một vùng kín?',
      options: ['Fill with color (biểu tượng thùng sơn đổ)', 'Pencil (bút chì)', 'Eraser (cục tẩy)', 'Magnifier (kính lúp)'],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Công cụ Fill with color (thùng sơn) dùng để tô màu vào vùng khép kín trong Paint.',
      hint: 'Biểu tượng chiếc thùng sơn đang nghiêng.'
    },
    {
      id: 'g3-b12-2',
      type: 'multiple_choice',
      question: 'Nếu em đổ màu mà màu bị loang ra khắp toàn bộ trang vẽ thì nguyên nhân là gì?',
      options: [
        'Hình vẽ chưa khép kín (có khe hở ở đường viền)',
        'Do máy tính bị mất mạng Internet',
        'Do chọn nhầm phím cách Space',
        'Do Paint không hỗ trợ tô màu'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Nếu đường viền bị hở dù chỉ 1 điểm nhỏ, màu sẽ tràn ra ngoài toàn bộ khung vẽ.',
      hint: 'Đường viền có khe hở chưa khép kín.'
    }
  ],

  // ================= BÀI 13: CÁC BƯỚC THỰC HIỆN MỘT CÔNG VIỆC =================
  'tin3-bai-13': [
    {
      id: 'g3-b13-1',
      type: 'multiple_choice',
      question: 'Để hoàn thành một công việc lớn đạt kết quả tốt, chúng ta nên làm gì?',
      options: [
        'Chia công việc thành các bước nhỏ hơn và thực hiện tuần tự theo thứ tự hợp lí.',
        'Làm lộn xộn các bước không cần theo quy trình.',
        'Chỉ làm bước cuối cùng và bỏ qua các bước đầu.',
        'Nhờ người khác làm hộ toàn bộ.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Chia việc lớn thành các bước tuần tự giúp giải quyết công việc dễ dàng, chính xác và không bị bỏ sót.',
      hint: 'Chia thành các bước nhỏ và làm tuần tự.'
    },
    {
      id: 'g3-b13-2',
      type: 'drag_drop_order',
      question: 'Sắp xếp quy trình các bước rửa tay bằng xà phòng đúng cách:',
      options: ['Quy trình rửa tay'],
      correctAnswer: 0,
      orderItems: [
        { id: 'r1', text: 'Làm ướt tay dưới vòi nước sạch và lấy xà phòng' },
        { id: 'r2', text: 'Xoa hai lòng bàn tay, kẽ ngón tay và mu bàn tay' },
        { id: 'r3', text: 'Rửa sạch xà phòng dưới vòi nước chảy' },
        { id: 'r4', text: 'Lau khô tay bằng khăn sạch hoặc giấy khô' }
      ],
      correctOrder: ['r1', 'r2', 'r3', 'r4'],
      difficulty: 'trung_binh',
      explanation: 'Quy trình: Làm ướt và lấy xà phòng -> Xoa đều -> Xả nước sạch -> Lau khô.',
      hint: 'Thứ tự từ lúc bắt đầu rửa đến khi lau khô tay.'
    }
  ],

  // ================= BÀI 14: EM TẬP LÀM THEO CÁC BƯỚC =================
  'tin3-bai-14': [
    {
      id: 'g3-b14-1',
      type: 'multiple_choice',
      question: 'Khi thực hiện công việc theo chỉ dẫn từng bước của thuật toán, yêu cầu quan trọng nhất là gì?',
      options: [
        'Thực hiện đúng và tuần tự từng bước theo thứ tự đã định.',
        'Tự ý đảo ngược thứ tự các bước tùy thích.',
        'Bỏ qua các bước kiểm tra.',
        'Chỉ làm những bước mình thích.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Làm theo từng bước chỉ dẫn giúp máy tính hoặc người thực hiện đạt kết quả chuẩn xác.',
      hint: 'Thực hiện tuần tự đúng thứ tự.'
    },
    {
      id: 'g3-b14-2',
      type: 'multiple_choice',
      question: 'Một robot đang đứng ở ô A1 mặt hướng về phía trước. Để đến ô A3 (cách 2 bước), lệnh cho robot là:',
      options: [
        'Tiến lên 1 bước, sau đó tiến lên 1 bước nữa.',
        'Rẽ trái rồi lùi lại.',
        'Quay 360 độ rồi đứng yên.',
        'Tắt nguồn robot.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Robot di chuyển thẳng 2 bước liên tiếp để từ A1 tới A3.',
      hint: 'Mỗi bước tiến tương ứng 1 ô.'
    }
  ],

  // ================= BÀI 15: NHIỆM VỤ CỦA EM VÀ SỰ TRỢ GIÚP CỦA MÁY TÍNH =================
  'tin3-bai-15': [
    {
      id: 'g3-b15-1',
      type: 'multiple_choice',
      question: 'Máy tính có thể giúp em thực hiện những công việc học tập nào sau đây?',
      options: [
        'Luyện tập làm toán, tra cứu từ điển tiếng Anh, tập gõ phím và vẽ tranh.',
        'Tự động ăn cơm và uống nước thay cho em.',
        'Tự đi đến trường học thay cho học sinh.',
        'Tự động làm sạch phòng ngủ mà không cần người điều khiển.'
      ],
      correctAnswer: 0,
      difficulty: 'de',
      explanation: 'Máy tính là công cụ hỗ trợ đắc lực cho việc học tập, giải trí và phát triển tư duy.',
      hint: 'Học toán, tiếng Anh, vẽ tranh.'
    },
    {
      id: 'g3-b15-2',
      type: 'multiple_choice',
      question: 'Để sử dụng máy tính hiệu quả và không ảnh hưởng xấu đến sức khỏe, em nên:',
      options: [
        'Sử dụng tối đa 30-40 phút mỗi lần, kết hợp nghỉ giải lao vận động mắt và cơ thể.',
        'Ngồi chơi liên tục 5 tiếng đồng hồ không nghỉ.',
        'Vừa ăn uống vừa đổ nước ngọt lên bàn phím.',
        'Tắt hết đèn trong phòng tối và dí sát mắt vào màn hình.'
      ],
      correctAnswer: 0,
      difficulty: 'trung_binh',
      explanation: 'Cần giới hạn thời gian ngồi máy tính và nghỉ ngơi sau mỗi 30-40 phút.',
      hint: 'Sử dụng có thời gian hợp lý và nghỉ ngơi.'
    }
  ]
};
