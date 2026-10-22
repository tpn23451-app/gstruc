import { Question, EssayQuestion } from '../types/quiz';

/**
 * 76 CÂU HỎI TRẮC NGHIỆM ÔN TẬP GIỮA KÌ 1 TIN HỌC 9 (NĂM HỌC 2026 - 2027)
 * Bám sát 100% tài liệu ôn tập của Giáo viên
 * Gồm 4 Chủ đề:
 * - Chủ đề 1: Bài 1 Thế giới kĩ thuật số (26 câu)
 * - Chủ đề 2: Bài 2 & Bài 3 Thông tin trong giải quyết vấn đề, Đánh giá chất lượng thông tin (14 câu)
 * - Chủ đề 3: Bài 4 Một số vấn đề pháp lý về sử dụng dịch vụ Internet (20 câu)
 * - Chủ đề 4: Bài 5 Tìm hiểu phần mềm mô phỏng (16 câu)
 * Đáp án chuẩn 100% theo Bảng đáp án chính thức (Trang 10).
 */
export const GRADE_9_MIDTERM_76_MCQ: Question[] = [
  // =========================================================================
  // CHỦ ĐỀ 1: MÁY TÍNH VÀ CỘNG ĐỒNG – BÀI 1: THẾ GIỚI KỸ THUẬT SỐ (26 CÂU)
  // =========================================================================
  {
    id: 'g9-cd1-1',
    type: 'multiple_choice',
    question: 'Máy tính trở thành công cụ lao động không thể thiếu được trong xã hội hiện đại vì lí do nào sau đây? (chọn đáp án đúng nhất)',
    options: [
      'Máy tính cho ta khả năng lưu trữ lượng lớn dữ liệu và xử lí nhiều dạng thông tin.',
      'Máy tính giúp con người giải tất cả các bài toán khó.',
      'Máy tính tính toán cực kỳ nhanh và chính xác.',
      'Máy tính là công cụ soạn thảo văn bản, cho ta truy cập vào mạng Internet để tìm kiếm thông tin.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Máy tính cho ta khả năng lưu trữ lượng lớn dữ liệu và xử lí nhiều dạng thông tin, hỗ trợ toàn diện mọi ngành nghề trong xã hội hiện đại.',
    hint: 'Khả năng lưu trữ lượng lớn dữ liệu và xử lí đa dạng thông tin.'
  },
  {
    id: 'g9-cd1-2',
    type: 'multiple_choice',
    question: 'Lập trình điều khiển rô bốt hỗ trợ con người trong sản xuất và nghiên cứu khoa học là ứng dụng của máy tính trong lĩnh vực nào sau đây?',
    options: [
      'Văn phòng.',
      'Rô bốt và máy thông minh.',
      'Giải trí.',
      'Giáo dục.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Lập trình điều khiển cánh tay robot công nghiệp, robot tự hành thuộc lĩnh vực rô bốt và máy thông minh.',
    hint: 'Rô bốt và máy thông minh.'
  },
  {
    id: 'g9-cd1-3',
    type: 'multiple_choice',
    question: 'Thiết bị nào dưới đây KHÔNG gắn bộ xử lí thông tin?',
    options: [
      'Cửa đóng, mở tự động ở sân bay và ở một số siêu thị, cửa hàng.',
      'Hệ thống báo cháy.',
      'Máy giặt thông minh.',
      'Đồng hồ lên dây cót tự động'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Đồng hồ lên dây cót hoạt động hoàn toàn bằng cơ học thuần túy (lò xo cót, bánh răng cơ khí), không gắn bộ vi xử lý thông tin.',
    hint: 'Đồng hồ cơ học lên dây cót không có mạch điện tử hay chip xử lý.'
  },
  {
    id: 'g9-cd1-4',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI về "Bộ xử lí thông tin"?',
    options: [
      'là thành phần quan trọng của máy tính',
      'làm việc với dữ liệu được biểu diễn dãy Bit.',
      'chỉ được gắn trong máy tính hoặc điện thoại.',
      'chỉ được gắn trong tất cả các thiết bị hỗ trợ xử lí thông tin có thể số hoá.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Phát biểu "chỉ được gắn trong máy tính hoặc điện thoại" là SAI, vì bộ xử lý còn được gắn trong máy giặt, ô tô, robot, điều hòa, hệ thống thu phí, thiết bị y tế...',
    hint: 'Bộ xử lý hiện diện trong rất nhiều thiết bị thông minh khác nhau xung quanh ta.'
  },
  {
    id: 'g9-cd1-5',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI về ứng dụng thực tế các thiết bị có gắn bộ xử lí ?',
    options: [
      'Những thiết bị có gắn bộ xử lí hiện diện xung quanh ta và ngày càng trở nên quen thuộc.',
      'Hệ thống thu phí tự động trên đường cao tốc là một ví dụ về thiết bị có gắn bộ xử lí trong sản xuất công nghiệp.',
      'Bộ xử lí không chỉ xuất hiện trong máy tính hay điện thoại thông minh mà còn được gắn vào các thiết bị khác để hỗ trợ xử lí bất kì loại thông tin nào có thể số hoá được.',
      'Ô tô lái tự động là một ví dụ về thiết bị có gắn bộ xử lí trong lĩnh vực giao thông.'
    ],
    correctAnswer: 1, // B
    difficulty: 'trung_binh',
    explanation: 'Đáp án B là SAI vì hệ thống thu phí tự động (ETC) trên đường cao tốc là ứng dụng trong lĩnh vực GIAO THÔNG, không phải sản xuất công nghiệp.',
    hint: 'Hệ thống thu phí đường cao tốc phục vụ giao thông vận tải.'
  },
  {
    id: 'g9-cd1-6',
    type: 'multiple_choice',
    question: 'Máy tính ứng dụng vào lĩnh vực nào? (Chọn nhiều đáp án)',
    options: [
      'Giáo dục',
      'Khoa học kỹ thuật',
      'Giao thông',
      'Cả 4 lĩnh vực: Giáo dục, Khoa học kỹ thuật, Giao thông, Y tế (ABCD)'
    ],
    correctAnswer: 3, // ABCD
    difficulty: 'de',
    explanation: 'Đáp án ABCD: Máy tính được ứng dụng sâu rộng trong tất cả các lĩnh vực đời sống: Giáo dục, Khoa học kỹ thuật, Giao thông và Y tế.',
    hint: 'Ứng dụng trong hầu hết tất cả các ngành nghề.'
  },
  {
    id: 'g9-cd1-7',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây là ví dụ về thiết bị có gắn bộ xử lí trong lĩnh vực nông nghiệp?',
    options: [
      'Máy cày tự động.',
      'Máy tim phổi.',
      'Máy rút tiền tự động.',
      'Máy chiếu trong lớp học.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Máy cày tự động định vị GPS là ứng dụng công nghệ số có bộ xử lý trong nông nghiệp thông minh.',
    hint: 'Máy cày phục vụ làm đất sản xuất nông nghiệp.'
  },
  {
    id: 'g9-cd1-8',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây là ví dụ về thiết bị có gắn bộ xử lí trong lĩnh vực Y tế?',
    options: [
      'Máy cày tự động.',
      'Máy tim phổi.',
      'Máy rút tiền tự động.',
      'Máy chiếu trong lớp học.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Máy tim phổi nhân tạo (ECMO) hỗ trợ duy trì sự sống cho bệnh nhân là thiết bị y tế kỹ thuật số hiện đại.',
    hint: 'Máy tim phổi phục vụ hồi sức cấp cứu trong bệnh viện.'
  },
  {
    id: 'g9-cd1-9',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI?',
    options: [
      'Nhiều dữ liệu trên Internet miễn phí.',
      'Cần sử dụng CNTT đúng cách.',
      'Máy tính có nhiều ứng dụng hiệu quả.',
      'CNTT có tác hại nhiều hơn có lợi.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Phát biểu "CNTT có tác hại nhiều hơn có lợi" là SAI. CNTT đem lại lợi ích to lớn thúc đẩy xã hội phát triển; tác hại chỉ phát sinh khi con người sử dụng sai cách.',
    hint: 'CNTT mang lại lợi ích to lớn vượt trội cho nhân loại.'
  },
  {
    id: 'g9-cd1-10',
    type: 'multiple_choice',
    question: 'Câu nào KHÔNG phải tác động tích cực của CNKTS trong giáo dục?',
    options: [
      'Cổ vũ thái độ sống tích cực.',
      'Chia sẻ kiến thức, kỹ năng.',
      'Mở rộng tiếp cận giáo dục.',
      'Kết nối nhanh chóng.'
    ],
    correctAnswer: 3, // D (theo bảng đáp án chính thức: 10 D)
    difficulty: 'trung_binh',
    explanation: 'Đáp án D (theo bảng đáp án đề cương): "Kết nối nhanh chóng" là đặc trưng chung của viễn thông/mạng, còn trong giáo dục các tác động cốt lõi là chia sẻ tri thức, mở rộng cơ hội học tập và cổ vũ thái độ sống tích cực.',
    hint: 'Theo bảng đáp án đề cương của giáo viên, đáp án đúng là D.'
  },
  {
    id: 'g9-cd1-11',
    type: 'multiple_choice',
    question: 'Công nghệ kĩ thuật số ảnh hưởng tiêu cực nào đến sức khỏe thể chất?',
    options: [
      'Làm thụ động.',
      'Giảm thị lực.',
      'Giảm tương tác xã hội.',
      'Thông tin giả lan tràn.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Nhìn màn hình điện thoại, máy tính quá nhiều trong cự ly gần và ánh sáng xanh làm giảm thị lực mắt (mỏi mắt, cận thị).',
    hint: 'Ảnh hưởng trực tiếp đến đôi mắt.'
  },
  {
    id: 'g9-cd1-12',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI?',
    options: [
      'CNKTS không gây hại cho sức khỏe.',
      'CNKTS giúp dễ dàng tiếp cận thông tin.',
      'CNKTS giúp khám phá tri thức mới.',
      'Internet giúp hiểu biết ở mọi nơi, mọi lúc.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Phát biểu "CNKTS không gây hại cho sức khỏe" là SAI. Sử dụng thiết bị số sai tư thế hoặc quá nhiều giờ sẽ gây cận thị, thoái hóa đốt sống cổ, mất ngủ và béo phì.',
    hint: 'Sử dụng quá mức sẽ gây hại cho cả mắt và cơ xương khớp.'
  },
  {
    id: 'g9-cd1-13',
    type: 'multiple_choice',
    question: 'Thiết bị nào có bộ xử lý dùng trong thương mại?',
    options: [
      'Máy chụp X-quang.',
      'Hệ thống phun tưới tự động.',
      'Máy chiếu.',
      'Hệ thống thanh toán.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Hệ thống thanh toán điện tử (POS, quét mã QR, cổng thanh toán trực tuyến) được sử dụng trong hoạt động thương mại.',
    hint: 'Hệ thống thanh toán tiền tại quầy thu ngân và mua sắm số.'
  },
  {
    id: 'g9-cd1-14',
    type: 'multiple_choice',
    question: 'Robot lắp ráp dùng trong lĩnh vực nào?',
    options: [
      'Giao thông.',
      'Giải trí.',
      'Xây dựng.',
      'Công nghiệp.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Robot lắp ráp tự động (linh kiện điện tử, ô tô, cơ khí) được sử dụng rộng rãi trong các nhà máy sản xuất công nghiệp.',
    hint: 'Dây chuyền sản xuất tự động trong các nhà máy công nghiệp.'
  },
  {
    id: 'g9-cd1-15',
    type: 'multiple_choice',
    question: 'Ứng dụng của máy tính trong y tế là gì?',
    options: [
      'Điều khiển ô tô tự lái.',
      'Chẩn đoán bệnh.',
      'Dự báo thời tiết.',
      'Mô phỏng dòng chảy chất lỏng'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Máy tính hỗ trợ bác sĩ chẩn đoán bệnh thông qua phân tích hình ảnh X-quang, MRI, nội soi và xét nghiệm.',
    hint: 'Chẩn đoán bệnh cho bệnh nhân.'
  },
  {
    id: 'g9-cd1-16',
    type: 'multiple_choice',
    question: 'Máy tính không có khả năng nào?',
    options: [
      'Cảm thụ văn học.',
      'Tính toán nhanh.',
      'Lưu trữ nhiều dữ liệu.',
      'Kết nối toàn cầu nhanh chóng.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Máy tính hoạt động theo quy tắc logic và thuật toán số học, không có cảm xúc, rung động tâm hồn hay khả năng cảm thụ văn học nghệ thuật như con người.',
    hint: 'Cảm xúc và rung động văn học là đặc quyền của con người.'
  },
  {
    id: 'g9-cd1-17',
    type: 'multiple_choice',
    question: 'CNKTS gây hại cho môi trường như thế nào?',
    options: [
      'Bạo lực mạng.',
      'Rác thải công nghệ.',
      'Tin tức giả mạo.',
      'Tăng thất nghiệp.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Các thiết bị điện tử hỏng hóc, lỗi thời bị thải bỏ tạo ra lượng lớn rác thải điện tử (rác thải công nghệ) chứa nhiều kim loại nặng độc hại gây ô nhiễm môi trường đất và nước.',
    hint: 'Rác thải điện tử từ thiết bị lỗi thời.'
  },
  {
    id: 'g9-cd1-18',
    type: 'multiple_choice',
    question: 'Biện pháp giảm hại của CNTT đến sức khỏe là gì?',
    options: [
      'Tham gia thể thao, hoạt động ngoại khóa.',
      'Đánh giá độ tin cậy thông tin.',
      'Cẩn trọng chia sẻ thông tin.',
      'Cập nhật tiến bộ công nghệ.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Tích cực tham gia thể dục thể thao, hoạt động ngoài trời giúp thư giãn mắt, cải thiện vóc dáng và tăng cường thể lực để cân bằng sau thời gian sử dụng thiết bị số.',
    hint: 'Vận động thể thao và sinh hoạt ngoại khóa.'
  },
  {
    id: 'g9-cd1-19',
    type: 'multiple_choice',
    question: 'Ứng dụng máy bay không người lái được dùng trong lĩnh vực nào? (có thể chọn nhiều đáp án)',
    options: [
      'An ninh – quân sự.',
      'Xây dựng.',
      'Y học.',
      'Cả 4 lĩnh vực: An ninh - quân sự, Xây dựng, Y học, Nghệ thuật - giải trí (ABCD)'
    ],
    correctAnswer: 3, // ABCD
    difficulty: 'trung_binh',
    explanation: 'Đáp án ABCD: Drone được dùng tuần tra an ninh quân sự, khảo sát công trình xây dựng, vận chuyển thuốc men khẩn cấp trong y học và quay phim nghệ thuật.',
    hint: 'Ứng dụng đa dạng trong cả 4 lĩnh vực.'
  },
  {
    id: 'g9-cd1-20',
    type: 'multiple_choice',
    question: 'Kính viễn vọng Hubble là ứng dụng của máy tính trong nghiên cứu gì?',
    options: [
      'Vật lý.',
      'Vũ trụ.',
      'Giao thông.',
      'Hóa học.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Kính thiên văn không gian Hubble do NASA vận hành dùng máy tính xử lý ảnh để chụp và nghiên cứu các thiên hà, tinh vân sâu trong vũ trụ.',
    hint: 'Khám phá các thiên hà và các vì sao trong vũ trụ.'
  },
  {
    id: 'g9-cd1-21',
    type: 'multiple_choice',
    question: 'Công nghệ thông tin giúp con người trong việc gì?',
    options: [
      'Khám phá tri thức mới, kết nối và hỗ trợ học tập, lao động',
      'Làm giảm khả năng giao tiếp của con người',
      'Chỉ hỗ trợ cho việc giải trí',
      'Không có tác dụng trong giáo dục'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: CNTT mở rộng không gian tìm kiếm tri thức, kết nối mọi người trên toàn cầu và nâng cao hiệu suất học tập, lao động.',
    hint: 'Khám phá tri thức mới, kết nối và hỗ trợ học tập, lao động.'
  },
  {
    id: 'g9-cd1-22',
    type: 'multiple_choice',
    question: 'Một trong những lợi ích của công nghệ thông tin trong giáo dục là gì?',
    options: [
      'Giúp con người chia sẻ kiến thức, kỹ năng và thái độ sống tích cực',
      'Giảm khả năng tiếp cận thông tin miễn phí',
      'Làm giảm hiệu quả học tập của học sinh',
      'Hạn chế khả năng truy cập thông tin từ xa'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: CNTT giúp thầy cô và học sinh dễ dàng chia sẻ nguồn học liệu mở, lan tỏa kỹ năng và thái độ sống tích cực đến cộng đồng.',
    hint: 'Chia sẻ kiến thức, kỹ năng và thái độ sống tích cực.'
  },
  {
    id: 'g9-cd1-23',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây là một ứng dụng thực tế của công nghệ máy tính trong lĩnh vực y tế?',
    options: [
      'Máy tính được sử dụng để nhận dạng biển số xe.',
      'Máy tính được sử dụng để làm việc từ xa.',
      'Máy tính được sử dụng để chơi các trò chơi thực tế ảo.',
      'Máy tính được sử dụng để quản lí hồ sơ bệnh án của bệnh nhân.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Quản lý hồ sơ bệnh án điện tử (EMR) giúp lưu trữ lịch sử khám chữa bệnh an toàn, đồng bộ giữa các cơ sở y tế.',
    hint: 'Hồ sơ bệnh án điện tử của bệnh nhân.'
  },
  {
    id: 'g9-cd1-24',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây là tác động tiêu cực của công nghệ kĩ thuật số đến xã hội?',
    options: [
      'Gia tăng lượng chất thải nông nghiệp ra môi trường.',
      'Sự lan truyền của những thông tin sai lệch và tin tức giả mạo.',
      'Thúc đẩy kinh doanh.',
      'Dễ dàng truy cập thông tin.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Mạng xã hội tạo điều kiện cho tin giả (fake news), thông tin giật gân sai sự thật lan truyền nhanh chóng gây hoang mang dư luận.',
    hint: 'Sự lan truyền tin tức giả mạo và thông tin sai lệch.'
  },
  {
    id: 'g9-cd1-25',
    type: 'multiple_choice',
    question: 'Thiết bị nào sau đây không gắn bộ xử lí?',
    options: [
      'Robot hút bụi.',
      'Bảng từ',
      'Máy giặt',
      'Máy chụp cắt lớp'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Bảng từ thông thường dùng phấn hoặc bút dạ viết bảng kim loại, không sử dụng điện hay gắn bộ vi xử lý.',
    hint: 'Bảng viết bằng từ tính thông thường trong lớp học.'
  },
  {
    id: 'g9-cd1-26',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây KHÔNG PHẢI là tác động tiêu cực của công nghệ kĩ thuật số đến đời sống con người?',
    options: [
      'Thông tin cá nhân bị rò rỉ và sử dụng bất hợp pháp.',
      'Tỉ lệ thất nghiệp tăng.',
      'Quảng cáo hàng hoá.',
      'Người dân ở các vùng khó khăn ngày càng tụt hậu.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Quảng cáo hàng hóa là hoạt động thương mại bình thường của nền kinh tế, không phải là tác động tiêu cực xã hội của CNKTS.',
    hint: 'Quảng cáo hàng hoá phục vụ hoạt động sản xuất kinh doanh.'
  },

  // =========================================================================
  // CHỦ ĐỀ 2: TỔ CHỨC LƯU TRỮ, TÌM KIẾM VÀ TRAO ĐỔI THÔNG TIN (14 CÂU)
  // BÀI 2: THÔNG TIN TRONG GIẢI QUYẾT VẤN ĐỀ & BÀI 3: ĐÁNH GIÁ CHẤT LƯỢNG THÔNG TIN
  // =========================================================================
  {
    id: 'g9-cd2-1',
    type: 'multiple_choice',
    question: 'Vì sao chúng ta cần phải có kỹ năng đánh giá chất lượng thông tin? (chọn 1 đáp án đúng)',
    options: [
      'Để giải trí',
      'Để đưa ra các quyết định đúng đắn trong cuộc sống',
      'Để trở nên thông minh hơn',
      'Để tham gia vào các cuộc tranh luận trên mạng.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Thông tin chính xác và chất lượng là cơ sở tin cậy giúp con người đưa ra các quyết định đúng đắn và hành động hiệu quả trong cuộc sống.',
    hint: 'Đưa ra các quyết định đúng đắn trong cuộc sống.'
  },
  {
    id: 'g9-cd2-2',
    type: 'multiple_choice',
    question: 'Đánh giá chất lượng thông tin cần những tiêu chí nào? (Có thể chọn nhiều đáp án)',
    options: [
      'Tính phù hợp trong tương lai',
      'Tính mới và tính đầy đủ',
      'Tính sử dụng được và tính chính xác (hoặc kết hợp 4 tiêu chí cốt lõi: mới, đầy đủ, chính xác, dùng được)',
      'Tính cũ'
    ],
    correctAnswer: 2, // C (theo bảng đáp án chính thức C)
    difficulty: 'de',
    explanation: 'Đáp án C (theo bảng đáp án): Bốn tiêu chí cốt lõi của SGK Tin học 9 KNTT là tính mới, tính chính xác, tính đầy đủ và tính sử dụng được.',
    hint: 'Tính sử dụng được và tính chính xác.'
  },
  {
    id: 'g9-cd2-3',
    type: 'multiple_choice',
    question: 'Điền vào chỗ trống để có phát biểu đúng: "Cần quan tâm đến …. …. …. khi tìm kiếm, tiếp nhận và trao đổi thông tin"',
    options: [
      'Đường truyền mạng',
      'Thông tin',
      'Chất lượng thông tin',
      'Trình duyệt web'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Cần quan tâm đến "Chất lượng thông tin" khi tìm kiếm, tiếp nhận và trao đổi thông tin.',
    hint: 'Chất lượng thông tin.'
  },
  {
    id: 'g9-cd2-4',
    type: 'multiple_choice',
    question: 'Để kiểm tra tính chính xác của một thông tin, bạn nên làm gì? (chọn 1 đáp án đúng)',
    options: [
      'Hỏi ý kiến của bạn bè',
      'Tin ngay lập tức',
      'Tìm kiếm thêm các nguồn tin khác để so sánh',
      'Không quan tâm'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Cần so sánh và đối chiếu chéo thông tin với ít nhất hai nguồn tin độc lập, có uy tín để xác thực tính chính xác.',
    hint: 'Tìm kiếm thêm các nguồn tin khác có uy tín để so sánh đối chiếu.'
  },
  {
    id: 'g9-cd2-5',
    type: 'multiple_choice',
    question: 'Tiêu chí nào sau đây không được dùng để đánh giá chất lượng thông tin?',
    options: [
      'Tính sử dụng được.',
      'Tính mới.',
      'Tính chính xác.',
      'Tính phổ biến.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Tính phổ biến (nhiều người biết, nhiều lượt xem) không đồng nghĩa với thông tin chính xác hay hữu ích; tin đồn thất thiệt cũng có thể rất phổ biến.',
    hint: 'Tính phổ biến không phải là tiêu chí đánh giá chất lượng.'
  },
  {
    id: 'g9-cd2-6',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI về tiêu chí đánh giá chất lượng thông tin?',
    options: [
      'Không phải thông tin nào cũng hữu ích đối với việc giải quyết vấn đề.',
      'Chất lượng thông tin được đánh giá thông qua tính mới, tính chính xác, tính đầy đủ, tính sử dụng được.',
      'Tính sử dụng được cung cấp cho người tìm kiếm có được cái nhìn tổng thể về vấn đề được đặt ra.',
      'Tính mới cho biết thông tin đã bị lỗi thời chưa'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C là SAI vì: "Tính đầy đủ" mới cung cấp cho người tìm kiếm cái nhìn tổng thể về vấn đề; còn "tính sử dụng được" thể hiện mức độ phù hợp và giá trị ứng dụng thực tế.',
    hint: 'Tính đầy đủ mới mang lại cái nhìn toàn diện, tổng thể.'
  },
  {
    id: 'g9-cd2-7',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI về vai trò của chất lượng thông tin?',
    options: [
      'Số lượng bản tin làm cho thông tin trở thành hữu ích.',
      'Internet là một kho thông tin khổng lồ.',
      'Cần phải quan tâm đến chất lượng thông tin khi tìm kiếm, tiếp nhận, trao đổi và sử dụng thông tin để có thể đưa ra các quyết định đúng đắn.',
      'Thông tin là cơ sở để đưa ra các quyết định.'
    ],
    correctAnswer: 0, // A
    difficulty: 'trung_binh',
    explanation: 'Đáp án A là SAI vì: Số lượng nhiều không đồng nghĩa với hữu ích; nếu nhận phải hàng ngàn tin rác, tin sai sự thật thì chỉ gây nhiễu loạn và dẫn tới quyết định sai lầm.',
    hint: 'Chất lượng quyết định giá trị, không phải số lượng bản tin.'
  },
  {
    id: 'g9-cd2-8',
    type: 'multiple_choice',
    question: 'Điền vào chỗ trống để được phát biểu đúng về vai trò và chất lượng thông tin: "Thông tin là [1] để đưa ra các [2]. Cần quan tâm đến [3] khi tìm kiếm, tiếp nhận và sử dụng [4]" (với: a. chất lượng thông tin; b. thông tin; c. cơ sở; d. quyết định)',
    options: [
      'a - b - c - d',
      'd - a - c - b',
      'b - c - d - a',
      'c - d - a - b'
    ],
    correctAnswer: 3, // D (c-d-a-b)
    difficulty: 'trung_binh',
    explanation: 'Đáp án D: "Thông tin là [c. cơ sở] để đưa ra các [d. quyết định]. Cần quan tâm đến [a. chất lượng thông tin] khi tìm kiếm, tiếp nhận và sử dụng [b. thông tin]".',
    hint: 'Thứ tự ghép đúng là c - d - a - b.'
  },
  {
    id: 'g9-cd2-9',
    type: 'multiple_choice',
    question: 'Trong khi tìm thông tin về kỳ thi tuyển sinh 10 năm 2025, An đã không để ý đến tiêu đề bài báo nên đã xem nhầm sang kỳ thi tuyển sinh 10 năm 2024. Theo em, sơ suất này vi phạm tiêu chí nào về chất lượng thông tin?',
    options: [
      'Tính mới',
      'Tính sử dụng được',
      'Tính chính xác',
      'Tính đầy đủ'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Thông tin của năm 2024 đã cũ đối với kỳ thi năm 2025, do đó vi phạm tiêu chí Tính mới (tính cập nhật của thông tin).',
    hint: 'Vi phạm tính mới (cập nhật).'
  },
  {
    id: 'g9-cd2-10',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI khi nói về việc tìm kiếm thông tin trên Internet?',
    options: [
      'Chúng ta có thể tìm kiếm các kiến thức ở các trang web khác nhau trên Internet.',
      'Chúng ta có thể tìm kiếm chính xác lời giải của tất cả các bài tập.',
      'Có thể tổ chức dạy và học trực tuyến.',
      'Chúng ta có thể trao đổi thông tin với bạn bè, thầy cô trên Internet.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B là SAI vì không phải bài tập hay vấn đề nào cũng có sẵn lời giải chính xác trên Internet; học sinh cần tự tư duy và giải quyết.',
    hint: 'Không thể tìm thấy lời giải chính xác của tất cả mọi bài tập.'
  },
  {
    id: 'g9-cd2-11',
    type: 'multiple_choice',
    question: 'Trong khi tìm thông tin về các trường THPT, Lan đã không để ý đến thời gian đăng kí nguyện vọng dự thi và xét tuyển vào lớp 10 các trường THPT công lập. Theo em, sơ suất này vi phạm tiêu chí nào về chất lượng thông tin?',
    options: [
      'Tính mới',
      'Tính sử dụng được',
      'Tính chính xác',
      'Tính đầy đủ'
    ],
    correctAnswer: 3, // D
    difficulty: 'trung_binh',
    explanation: 'Đáp án D: Bỏ sót mốc thời gian nộp hồ sơ khiến thông tin thu thập bị thiếu một yếu tố cốt lõi để hoàn thành thủ tục, vi phạm tiêu chí "Tính đầy đủ".',
    hint: 'Thiếu mốc thời gian quan trọng là thiếu sót thông tin (vi phạm tính đầy đủ).'
  },
  {
    id: 'g9-cd2-12',
    type: 'multiple_choice',
    question: 'Lan muốn xem thông tin điểm chuẩn Tuyển sinh 10 của 3 năm học gần nhất. Lan vào trang web Sở GDĐT TPHCM để tìm thông tin thì Lan thấy trang web đăng điểm chuẩn các trường THPT năm học 2022 – 2023, 2023– 2024, 2024– 2025. Thông tin mà Lan tìm được từ trang web đảm bảo tính nào? (chọn nhiều đáp án)',
    options: [
      'Tính sử dụng được',
      'Tính mới',
      'Tính đầy đủ',
      'Đảm bảo cả 4 tiêu chí: Tính sử dụng được, Tính mới, Tính đầy đủ, Tính chính xác (ABCD)'
    ],
    correctAnswer: 3, // ABCD
    difficulty: 'trung_binh',
    explanation: 'Đáp án ABCD: Nguồn tin chính thống từ Sở GDĐT TPHCM đảm bảo độ chính xác tuyệt đối, đủ 3 năm liên tiếp (đầy đủ), cập nhật năm gần nhất (mới) và giúp chọn nguyện vọng (sử dụng được).',
    hint: 'Thỏa mãn đầy đủ cả 4 tiêu chí: mới, chính xác, đầy đủ, sử dụng được.'
  },
  {
    id: 'g9-cd2-13',
    type: 'multiple_choice',
    question: 'Khi tìm kiếm “Chương trình giáo dục phổ thông 2018” trên Internet, nhận được kết quả ở nhiều trang web khác nhau, em chọn kết quả ở trang web nào trong các trang sau đây? (có thể chọn nhiều đáp án)',
    options: [
      'Trang https://www.youtube.com/',
      'Trang https://moet.gov.vn/ (Bộ GD&ĐT)',
      'Trang https://download.vn/',
      'Chọn các trang chính thống của ngành Giáo dục: moet.gov.vn và hcm.edu.vn (BD)'
    ],
    correctAnswer: 3, // BD (theo bảng đáp án trang 10: 13 BD)
    difficulty: 'de',
    explanation: 'Đáp án BD: Trang moet.gov.vn là cổng thông tin của Bộ GD&ĐT và hcm.edu.vn là cơ quan quản lý giáo dục địa phương, có văn bản ban hành chính thức có giá trị pháp lý.',
    hint: 'Chọn website của Bộ GD&ĐT (moet.gov.vn) và Sở GD&ĐT (hcm.edu.vn).'
  },
  {
    id: 'g9-cd2-14',
    type: 'multiple_choice',
    question: 'Em cần tìm kiếm thông tin về bài thi IELTS ở đâu?',
    options: [
      'Website của Bộ Giáo dục và Đào tạo.',
      'Website của các đơn vị tổ chức thi (Hội đồng Anh - British Council, IDP).',
      'Website của Sở Giáo dục và Đào tạo.',
      'Website của nhà trường.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Bài thi IELTS được đồng sở hữu và tổ chức trực tiếp bởi Hội đồng Anh (British Council), IDP: IELTS Australia và Cambridge University Press & Assessment.',
    hint: 'Website của các tổ chức quốc tế trực tiếp khảo thí: British Council và IDP.'
  },

  // =========================================================================
  // CHỦ ĐỀ 3: ĐẠO ĐỨC, PHÁP LUẬT VÀ VĂN HÓA TRONG MÔI TRƯỜNG SỐ (20 CÂU)
  // BÀI 4: MỘT SỐ VẤN ĐỀ PHÁP LÍ VỀ SỬ DỤNG DỊCH VỤ INTERNET
  // =========================================================================
  {
    id: 'g9-cd3-1',
    type: 'multiple_choice',
    question: 'Khi em mua một phần mềm học tập để cài đặt trên máy tính, trường hợp nào sau đây thì phần mềm được cài đặt miễn phí?',
    options: [
      'Khi em cài trên 1 máy tính.',
      'Khi phần mềm đó có giá dưới 500.000VNĐ.',
      'Khi có sự đồng ý bản quyền của tác giả cho phép điều này',
      'Khi em có 5 máy tính để cài.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Phần mềm chỉ được cài đặt và sử dụng miễn phí hoặc nhân bản hợp pháp khi có sự cho phép rõ ràng trong điều khoản bản quyền của tác giả/nhà sản xuất.',
    hint: 'Khi có sự đồng ý bản quyền của tác giả.'
  },
  {
    id: 'g9-cd3-2',
    type: 'multiple_choice',
    question: 'Hành vi nào sau đây KHÔNG bị xem là vi phạm pháp luật trong việc sử dụng dịch vụ Internet?',
    options: [
      'Đưa lên mạng những phim, ảnh không lành mạnh.',
      'Xâm phạm thông tin cá nhân hoặc của tập thể nào đó.',
      'Làm lây lan virus qua mạng.',
      'Gửi email cho bạn để nhắc nhở bạn không nên mở các tệp đính kèm thư của người lạ gửi.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Gửi thư cảnh báo bạn bè phòng tránh mã độc là hành vi tích cực, có trách nhiệm và giúp bảo vệ an toàn trên không gian mạng.',
    hint: 'Nhắc nhở bạn cảnh giác trước tệp đính kèm độc hại là hành động tích cực.'
  },
  {
    id: 'g9-cd3-3',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây chỉ ra đúng ngày luật công nghệ thông tin có hiệu lực?',
    options: [
      '12/12/2005.',
      '01/01/2007.',
      '13/01/2000.',
      '31/01/2005.'
    ],
    correctAnswer: 2, // C (theo bảng đáp án chính thức ghi 3 C: 13/01/2000)
    difficulty: 'kho',
    explanation: 'Đáp án C (theo Bảng đáp án chính thức của Đề cương ôn tập kiểm tra giữa kì 1 Tin học 9).',
    hint: 'Theo bảng đáp án đề cương của giáo viên, đáp án là C.'
  },
  {
    id: 'g9-cd3-4',
    type: 'multiple_choice',
    question: 'Yếu tố nào sau đây được coi là tác động tiêu cực của công nghệ kĩ thuật số đối với con người?',
    options: [
      'Mở ra nhiều cơ hội học tập.',
      'Rút ngắn khoảng cách với mọi người.',
      'Giảm bớt thời gian vận động ngoài trời',
      'Đẩy nhanh tốc độ trao đổi và giao tiếp.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Ngồi trước màn hình quá nhiều làm con người giảm bớt thời gian vận động ngoài trời, dẫn đến lối sống tĩnh tại, béo phì và suy giảm sức khỏe.',
    hint: 'Giảm bớt thời gian vận động thể chất ngoài trời.'
  },
  {
    id: 'g9-cd3-5',
    type: 'multiple_choice',
    question: 'Tình huống nào sau đây được coi là hành vi vi phạm pháp luật khi hoạt động trong môi trường số?',
    options: [
      'Đăng tải thông tin sai sự thật gây hoang mang dư luận.',
      'Đăng ảnh của mình đi du lịch lên mạng xã hội facebook.',
      'Trò chuyện với bạn bè về việc học tập trên mạng xã hội.',
      'Nhắn tin với bạn trên ứng dụng chat để hỏi thăm bạn bị ốm.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Đăng thông tin bịa đặt sai sự thật gây hoang mang dư luận vi phạm nghiêm trọng Luật An ninh mạng và Nghị định 15/2020/NĐ-CP của Chính phủ.',
    hint: 'Đăng tải thông tin sai sự thật gây hoang mang dư luận.'
  },
  {
    id: 'g9-cd3-6',
    type: 'multiple_choice',
    question: '"Trẻ em có quyền được bảo vệ, tiếp cận thông tin, tham gia hoạt động xã hội, vui chơi, giải trí, giữ bí mật cá nhân, đời sống riêng tư và các quyền khác khi tham gia trên không gian mạng hay không?" Câu trả lời nào dưới đây đúng?',
    options: [
      'Có khi được bố/mẹ cho phép.',
      'Không.',
      'Tùy trường hợp.',
      'Có.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Theo Luật Trẻ em 2016 và Luật An ninh mạng 2018, trẻ em có đầy đủ các quyền được pháp luật bảo vệ tính mạng, nhân phẩm, đời sống riêng tư trên không gian mạng.',
    hint: 'Trẻ em CÓ đầy đủ các quyền này theo quy định pháp luật.'
  },
  {
    id: 'g9-cd3-7',
    type: 'multiple_choice',
    question: 'Theo em trước khi chia sẻ, bình luận hay bày tỏ cảm xúc của mình với các thông tin, trạng thái trên mạng xã hội, em cần thực hiện điều gì dưới đây?',
    options: [
      'Không chia sẻ, bình luận hay bày tỏ cảm xúc với những thông tin người khác đăng lên vì có thể gây rắc rối.',
      'Xem mối quan hệ của mình với người đó có tốt không mới tương tác lại.',
      'Kiểm chứng các thông tin trên mạng xã hội xem có chính xác, tin cậy hay không trước khi chia sẻ, bình luận',
      'Xem thông tin đó hiện nay giới trẻ và mạng xã hội có quan tâm, yêu thích hay không.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Luôn luôn kiểm chứng nguồn gốc và tính xác thực của thông tin trước khi chia sẻ để không vô tình tiếp tay lan truyền tin giả.',
    hint: 'Kiểm chứng tính chính xác và tin cậy trước khi chia sẻ.'
  },
  {
    id: 'g9-cd3-8',
    type: 'multiple_choice',
    question: 'Theo em, trong những tình huống dưới đây, tình huống nào có nguy cơ bị lừa đảo trên mạng?',
    options: [
      'Có người dùng những lời nói để chê bai hay xúc phạm danh dự của em.',
      'Em nhận được thông báo trúng thưởng trên mạng xã hội.',
      'Em nhận được lời chúc mừng sinh nhật.',
      'Cô giáo chủ nhiệm nhắn tin ngày mai lớp nghỉ học.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Tin nhắn "trúng thưởng lớn" (xe máy, sổ tiết kiệm, hiện vật đắt tiền) yêu cầu nộp lệ phí hoặc gửi mã OTP là chiêu trò lừa đảo mạo danh phổ biến.',
    hint: 'Thông báo trúng thưởng bất ngờ trên mạng xã hội.'
  },
  {
    id: 'g9-cd3-9',
    type: 'multiple_choice',
    question: 'Theo em, để kết bạn trên mạng xã hội an toàn chúng ta cần kết bạn dựa trên những tiêu chí nào về họ?',
    options: [
      'Trang cá nhân của họ có nhiều thông tin hấp dẫn, phù hợp với xu hướng của giới trẻ hiện nay.',
      'Là người mình chưa từng gặp gỡ để có thêm bạn mới.',
      'Là người quen hoặc người mình đã từng gặp mặt; người đó có danh sách bạn bè chung với mình trên mạng xã hội.',
      'Là người mà mình cảm mến hoặc yêu thích, cần kết bạn để xem họ có quí mến mình không.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Chỉ nên kết bạn với người quen biết ngoài đời thực hoặc người đã gặp mặt có bạn chung tin cậy để phòng tránh các đối tượng xấu giả mạo lừa đảo.',
    hint: 'Là người quen hoặc người đã từng gặp mặt, có bạn bè chung.'
  },
  {
    id: 'g9-cd3-10',
    type: 'multiple_choice',
    question: 'Hành động nào sau đây là vi phạm pháp luật, trái đạo đức, thiếu văn hoá khi hoạt động trong môi trường số?',
    options: [
      'Nhắn tin trò chuyện với bạn bè.',
      'Tự ý đăng thông tin cá nhân của người khác lên mạng xã hội.',
      'Xem đánh giá sản phẩm trước khi mua hàng.',
      'Sử dụng những phần mềm có bản quyền.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Tự ý đăng số điện thoại, địa chỉ nhà, ảnh riêng tư hoặc thông tin cá nhân của người khác khi chưa được phép là hành vi vi phạm quyền bí mật đời tư.',
    hint: 'Tự ý đăng thông tin cá nhân của người khác lên mạng xã hội.'
  },
  {
    id: 'g9-cd3-11',
    type: 'multiple_choice',
    question: 'Em hãy chọn nội dung để nối câu đúng nhất: “Xem phim lậu là hành vi:”',
    options: [
      'vi phạm quyền nhân thân, uy tín của cá nhân và tổ chức.',
      'vi phạm đến việc bảo đảm an toàn thông tin trên không gian mạng.',
      'tuyên truyền, quảng cáo, giới thiệu sản phẩm không phù hợp thuần phong mỹ tục.',
      'vi phạm pháp luật liên quan đến sở hữu trí tuệ, sở hữu tài sản, đánh bạc,...'
    ],
    correctAnswer: 3, // D
    difficulty: 'trung_binh',
    explanation: 'Đáp án D: Xem hoặc phát tán phim lậu xâm phạm trực tiếp đến quyền tác giả, quyền sở hữu trí tuệ của nhà sản xuất phim theo Luật Sở hữu trí tuệ.',
    hint: 'Vi phạm pháp luật liên quan đến quyền sở hữu trí tuệ.'
  },
  {
    id: 'g9-cd3-12',
    type: 'multiple_choice',
    question: 'Hành vi nào dưới đây vi phạm đến việc bảo đảm an toàn thông tin trên không gian mạng?',
    options: [
      'Quảng cáo bán hàng hoá, dịch vụ cấm.',
      'Truy cập trang web tổ chức đánh bạc trực tuyến trái pháp luật.',
      'Phát tán virus máy tính thông qua truy cập các liên kết lừa đảo.',
      'Phát tán thông tin chưa được kiểm chứng.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Phát tán mã độc, virus máy tính phá hủy hệ thống hoặc đánh cắp dữ liệu người dùng là hành vi vi phạm nghiêm trọng an toàn thông tin.',
    hint: 'Phát tán virus, phần mềm độc hại.'
  },
  {
    id: 'g9-cd3-13',
    type: 'multiple_choice',
    question: 'Chọn đáp án phù hợp với phát biểu sau: “Làm lộ thông tin cá nhân gây ảnh hưởng xấu là hành vi…..”:',
    options: [
      'vi phạm an ninh quốc gia, trật tự, an toàn xã hội.',
      'vi phạm quyền nhân thân, uy tín của cá nhân và tổ chức.',
      'vi phạm pháp luật liên quan đến sở hữu trí tuệ, sở hữu tài sản, đánh bạc,...',
      'vi phạm đến việc bảo đảm an toàn thông tin trên không gian mạng.'
    ],
    correctAnswer: 1, // B
    difficulty: 'trung_binh',
    explanation: 'Đáp án B: Thông tin cá nhân gắn liền với quyền nhân thân (danh dự, nhân phẩm, uy tín) được pháp luật dân sự bảo vệ.',
    hint: 'Vi phạm quyền nhân thân, uy tín của cá nhân và tổ chức.'
  },
  {
    id: 'g9-cd3-14',
    type: 'multiple_choice',
    question: 'Luật nào sau đây quy định chi tiết về “quyền và trách nhiệm của tổ chức, cá nhân tham gia ứng dụng và phát triển công nghệ thông tin cũng như các hành vi bị nghiêm cấm”?',
    options: [
      'Luật Công nghệ thông tin.',
      'Luật An toàn thông tin.',
      'Luật An ninh mạng.',
      'Luật Công nghệ mạng.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Luật Công nghệ thông tin quy định toàn diện quyền và nghĩa vụ trong hoạt động ứng dụng và phát triển CNTT tại Việt Nam.',
    hint: 'Luật Công nghệ thông tin.'
  },
  {
    id: 'g9-cd3-15',
    type: 'multiple_choice',
    question: 'Luật nào sau đây quy định chi tiết về “hoạt động bảo vệ an ninh quốc gia và bảo đảm trật tự an toàn xã hội trên không gian mạng, trong đó các hành vi bị nghiêm cấm về an ninh mạng”?',
    options: [
      'Luật Công nghệ thông tin.',
      'Luật An toàn thông tin.',
      'Luật An ninh mạng.',
      'Luật Công nghệ mạng.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Luật An ninh mạng (năm 2018) quy định về bảo vệ an ninh quốc gia và trật tự an toàn xã hội trên không gian mạng.',
    hint: 'Luật An ninh mạng.'
  },
  {
    id: 'g9-cd3-16',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây SAI?',
    options: [
      'Bạo lực mạng là một ví dụ tiêu biểu cho việc sử dụng công nghệ không đúng cách và thiếu trách nhiệm dẫn tới những tác động tiêu cực như ảnh hưởng xấu đến sức khoẻ thể chất và tinh thần con người.',
      'CNKTS có tác động mạnh mẽ, đem lại những thay đổi tích cực trong xã hội.',
      'CNKTS có tác động tiêu cực đến con người và xã hội nhiều hơn so với tác động tích cực.',
      'Bằng cách sử dụng Internet, mọi người có thể bổ sung sự hiểu biết của mình về bất kì lĩnh nào, ở mọi nơi và vào mọi lúc.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C là SAI vì: Công nghệ số mang lại lợi ích to lớn vượt bậc cho văn minh nhân loại, tác động tích cực là chủ đạo và vượt trội so với tiêu cực.',
    hint: 'Tác động tích cực của CNKTS lớn hơn nhiều so với tiêu cực.'
  },
  {
    id: 'g9-cd3-17',
    type: 'multiple_choice',
    question: 'Phương án nào sau đây KHÔNG PHẢI là tác động tiêu cực của công nghệ kĩ thuật số đến đời sống con người?',
    options: [
      'Nhờ trí tuệ nhân tạo làm bài tập về nhà.',
      'Thường xuyên sử dụng phần mềm soạn thảo văn bản để làm báo cáo.',
      'Vừa ăn vừa xem video trên trang YouTube.',
      'Truy cập mạng xã hội trong nhiều giờ.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Soạn thảo văn bản làm báo cáo là ứng dụng văn phòng tích cực, nâng cao hiệu suất công việc và học tập.',
    hint: 'Dùng phần mềm soạn thảo văn bản để làm việc là điều tích cực.'
  },
  {
    id: 'g9-cd3-18',
    type: 'multiple_choice',
    question: 'Chọn những phương án nói về tác động tiêu cực của công nghệ kĩ thuật số tới đời sống con người và xã hội. (chọn nhiều đáp án)',
    options: [
      'Quyền riêng tư dễ bị ảnh hưởng.',
      'Dữ liệu tài khoản ngân hàng bị đánh cắp.',
      'Giao dịch trong thương mại tăng nhanh nhờ ứng dụng ngân hàng số.',
      'Bao gồm các phương án tiêu cực: Quyền riêng tư bị ảnh hưởng, tài khoản bị đánh cắp, rác thải công nghệ (ABD)'
    ],
    correctAnswer: 3, // ABD
    difficulty: 'trung_binh',
    explanation: 'Đáp án ABD: Quyền riêng tư bị lộ, tài khoản bị tấn công và rác thải công nghệ là các hệ lụy tiêu cực; còn giao dịch nhanh chóng là mặt tích cực.',
    hint: 'Phương án c là mặt tích cực, các phương án còn lại là tiêu cực.'
  },
  {
    id: 'g9-cd3-19',
    type: 'multiple_choice',
    question: 'Những hành động nào sau đây vi phạm pháp luật, trái đạo đức, thiếu văn hoá? (chọn nhiều đáp án)',
    options: [
      'Tải về một hình ảnh trên Internet khi chưa có sự cho phép của chủ sở hữu và sử dụng như là của mình.',
      'Chia sẻ một hình ảnh trên Internet khi chưa có sự cho phép của chủ sở hữu.',
      'Chúc mừng sinh nhật bạn trên mạng xã hội.',
      'Bao gồm các hành vi vi phạm: Tự ý tải ảnh dùng như của mình, chia sẻ ảnh không phép, đăng bài bôi nhọ người khác (ABD)'
    ],
    correctAnswer: 3, // ABD
    difficulty: 'trung_binh',
    explanation: 'Đáp án ABD: Vi phạm bản quyền hình ảnh và xúc phạm danh dự người khác là các hành vi sai trái; gửi lời chúc mừng sinh nhật là hành vi văn hóa tốt đẹp.',
    hint: 'Chúc mừng sinh nhật bạn là hành vi văn minh, các hành vi còn lại vi phạm.'
  },
  {
    id: 'g9-cd3-20',
    type: 'multiple_choice',
    question: 'Em hãy cho biết những cách nào sau đây giúp em tránh được các tác động tiêu cực khi sử dụng công nghệ kĩ thuật số? (chọn nhiều đáp án)',
    options: [
      'Không sử dụng thiết bị số trong thời gian dài và liên tục',
      'Không xem các video phản cảm.',
      'Giảm thời gian dùng điện thoại dành thời gian để trò chuyện với gia đình.',
      'Thực hiện cả 4 giải pháp khoa học: Hạn chế thời gian, tránh nội dung xấu, trò chuyện gia đình, tập thể thao (ABCD)'
    ],
    correctAnswer: 3, // ABCD
    difficulty: 'de',
    explanation: 'Đáp án ABCD: Cần kết hợp đồng bộ: kiểm soát thời gian sử dụng, chọn lọc nội dung lành mạnh, gắn kết gia đình và rèn luyện thể thao hàng ngày.',
    hint: 'Cả 4 biện pháp đều rất hữu ích để phòng tránh tác động tiêu cực.'
  },

  // =========================================================================
  // CHỦ ĐỀ 4: ỨNG DỤNG TIN HỌC – BÀI 5: TÌM HIỂU PHẦN MỀM MÔ PHỎNG (16 CÂU)
  // =========================================================================
  {
    id: 'g9-cd4-1',
    type: 'multiple_choice',
    question: 'Phần mềm nào sau đây là phần mềm mô phỏng?',
    options: [
      'Microsoft Word.',
      'Microsoft Excel.',
      'Microsoft Power Point',
      'Crocodile Physics'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Crocodile Physics là phần mềm mô phỏng nổi tiếng mô phỏng các thí nghiệm vật lý về điện trường, quang học, lực học.',
    hint: 'Crocodile Physics mô phỏng các thí nghiệm Vật lý.'
  },
  {
    id: 'g9-cd4-2',
    type: 'multiple_choice',
    question: 'Hãy chọn phát biểu đúng trong các phát biểu sau đây:',
    options: [
      'Phần mềm mô phỏng dùng để soạn thảo văn bản.',
      'Phần mềm mô phỏng dùng để trình chiếu văn bản.',
      'Phần mềm mô phỏng dùng để mô phỏng thế giới thực trên không gian số.',
      'Phần mềm mô phỏng là một phần mềm hệ thống.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Khái niệm cốt lõi: Phần mềm mô phỏng dùng để mô phỏng các hiện tượng, quá trình của thế giới thực trên không gian số.',
    hint: 'Mô phỏng thế giới thực trên không gian số.'
  },
  {
    id: 'g9-cd4-3',
    type: 'multiple_choice',
    question: 'Môn học nào sau đây KHÔNG có ưu thế trong việc sử dụng phần mềm mô phỏng để thực hiện các thí nghiệm ảo?',
    options: [
      'Vật lí.',
      'Sinh học.',
      'Hóa học.',
      'Ngữ văn'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Môn Ngữ văn là môn khoa học xã hội về ngôn ngữ và cảm thụ tác phẩm văn học, không thực hiện các thí nghiệm đo đạc khoa học tự nhiên.',
    hint: 'Môn Ngữ văn không cần phòng thí nghiệm ảo.'
  },
  {
    id: 'g9-cd4-4',
    type: 'multiple_choice',
    question: 'Phòng thí nghiệm hóa học ảo KHÔNG giúp chúng ta thực hiện nhiệm vụ nào dưới đây?',
    options: [
      'Mô phỏng việc lấy hóa chất.',
      'Chọn các loại hóa chất.',
      'Mô phỏng phản ứng giữa các hóa chất',
      'Mô phỏng sự nảy mầm của hạt đậu.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Sự nảy mầm của hạt đậu là quá trình sinh học (thực vật học) thuộc môn Sinh học, không thuộc môn Hóa học.',
    hint: 'Sự nảy mầm của hạt thuộc môn Sinh học.'
  },
  {
    id: 'g9-cd4-5',
    type: 'multiple_choice',
    question: 'Ứng dụng nào dưới đây KHÔNG là ứng dụng của phần mềm mô phỏng?',
    options: [
      'Phục vụ học tập.',
      'Mô phỏng thế giới thực trên không gian số.',
      'Lập kế hoạch, trao đổi thông tin.',
      'Tính điểm tổng kết cho học sinh.'
    ],
    correctAnswer: 2, // C (theo bảng đáp án chính thức 5: C)
    difficulty: 'trung_binh',
    explanation: 'Đáp án C (theo bảng đáp án chính thức của Đề cương ôn tập): Lập kế hoạch, trao đổi thông tin là chức năng của phần mềm quản lý dự án/truyền thông.',
    hint: 'Theo bảng đáp án đề cương của giáo viên, đáp án là C.'
  },
  {
    id: 'g9-cd4-6',
    type: 'multiple_choice',
    question: 'Thí nghiệm môn hóa học trên phần mềm mô phỏng KHÔNG có đặc điểm nào dưới đây?',
    options: [
      'Dễ dàng chỉnh sửa và điều chỉnh.',
      'Không sử dụng máy tính.',
      'Tạo nhanh các phản ứng và không độc hại.',
      'Có thể lưu dưới dạng video và chia sẻ qua Internet.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Phát biểu "Không sử dụng máy tính" là SAI vì phần mềm mô phỏng bắt buộc phải cài đặt và chạy trên máy tính hoặc thiết bị số.',
    hint: 'Phần mềm mô phỏng bắt buộc phải chạy trên máy tính.'
  },
  {
    id: 'g9-cd4-7',
    type: 'multiple_choice',
    question: 'Phần mềm mô phỏng là gì?',
    options: [
      'Phần mềm giúp tạo ra các bản sao y hệt của một đối tượng thực.',
      'Phần mềm giúp mô phỏng các quá trình, hệ thống hoặc hiện tượng trong thế giới thực.',
      'Phần mềm chỉ dùng để giải trí.',
      'Phần mềm dùng để viết các chương trình máy tính.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: SGK Tin học 9 KNTT: Phần mềm mô phỏng giúp mô phỏng các quá trình, hệ thống hoặc hiện tượng trong thế giới thực trên máy tính.',
    hint: 'Mô phỏng các quá trình, hệ thống hoặc hiện tượng trong thế giới thực.'
  },
  {
    id: 'g9-cd4-8',
    type: 'multiple_choice',
    question: 'Mục đích chính của phần mềm mô phỏng là gì?',
    options: [
      'Giúp người dùng hiểu rõ hơn về các hệ thống phức tạp.',
      'Thay thế hoàn toàn các thí nghiệm thực tế.',
      'Chỉ dùng để tạo ra các hình ảnh đẹp mắt.',
      'Cả a và b.'
    ],
    correctAnswer: 0, // A (theo bảng đáp án chính thức: 8 A)
    difficulty: 'trung_binh',
    explanation: 'Đáp án A: Phần mềm mô phỏng giúp người dùng trực quan hóa và hiểu sâu sắc hơn về các hệ thống, hiện tượng phức tạp hoặc trừu tượng.',
    hint: 'Giúp người dùng hiểu rõ hơn về các hệ thống phức tạp.'
  },
  {
    id: 'g9-cd4-9',
    type: 'multiple_choice',
    question: 'Lợi ích lớn nhất của việc sử dụng phần mềm mô phỏng là gì?',
    options: [
      'Tiết kiệm thời gian và chi phí.',
      'Tăng tính an toàn trong các thí nghiệm.',
      'Giúp người dùng dễ dàng hình dung và hiểu các khái niệm trừu tượng.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Phần mềm mô phỏng đem lại cả 3 lợi ích vượt trội: tiết kiệm chi phí hóa chất thiết bị, tuyệt đối an toàn không sợ cháy nổ, và trực quan hóa sinh động.',
    hint: 'Đầy đủ tất cả các lợi ích trên.'
  },
  {
    id: 'g9-cd4-10',
    type: 'multiple_choice',
    question: 'Phần mềm mô phỏng thường được sử dụng trong lĩnh vực nào?',
    options: [
      'Giáo dục.',
      'Khoa học.',
      'Công nghiệp.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Mô phỏng được ứng dụng rộng rãi trong Giáo dục (học tập), Nghiên cứu Khoa học (vũ trụ, khí tượng) và Công nghiệp (mô phỏng ô tô, máy bay, nhà máy).',
    hint: 'Sử dụng trong cả Giáo dục, Khoa học và Công nghiệp.'
  },
  {
    id: 'g9-cd4-11',
    type: 'multiple_choice',
    question: 'Khi sử dụng phần mềm mô phỏng, người dùng có thể thực hiện các thao tác nào?',
    options: [
      'Thay đổi các thông số của mô hình.',
      'Quan sát sự thay đổi của hệ thống khi các thông số thay đổi.',
      'Thực hiện các thí nghiệm ảo.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Người dùng có thể tự do điều chỉnh biến số (nhiệt độ, áp suất, điện áp), quan sát đồ thị kết quả và tiến hành vô số lần thí nghiệm ảo.',
    hint: 'Người dùng thực hiện được tất cả các thao tác trên.'
  },
  {
    id: 'g9-cd4-12',
    type: 'multiple_choice',
    question: 'Phần mềm mô phỏng nào thường được sử dụng trong việc học vật lý?',
    options: [
      'Microsoft Word.',
      'PhET Simulations.',
      'Adobe Photoshop.',
      'Excel.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: PhET Interactive Simulations (Đại học Colorado) là nền tảng mô phỏng nổi tiếng thế giới dùng cho học tập Vật lý và Hóa học.',
    hint: 'PhET Simulations.'
  },
  {
    id: 'g9-cd4-13',
    type: 'multiple_choice',
    question: 'Ưu điểm của phần mềm mô phỏng so với thí nghiệm thực tế là gì?',
    options: [
      'An toàn hơn.',
      'Tiết kiệm chi phí hơn.',
      'Có thể lặp lại nhiều lần.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Thí nghiệm ảo tuyệt đối an toàn trước các chất độc phóng xạ hay điện cao thế, không tốn vật tư và có thể lặp đi lặp lại bất kỳ lúc nào.',
    hint: 'Bao gồm cả 3 ưu điểm lớn: an toàn, tiết kiệm và lặp lại dễ dàng.'
  },
  {
    id: 'g9-cd4-14',
    type: 'multiple_choice',
    question: 'Nhược điểm của phần mềm mô phỏng là gì?',
    options: [
      'Không thể thay thế hoàn toàn các thí nghiệm thực tế.',
      'Mô hình mô phỏng có thể không hoàn toàn giống với thực tế.',
      'Cần có máy tính và phần mềm phù hợp.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Mô phỏng phụ thuộc vào giả định mô hình toán học (có thể có sai số), đòi hỏi máy tính cấu hình tốt và không thay thế được cảm giác thao tác tay chân thực tế.',
    hint: 'Tất cả các hạn chế trên của phần mềm mô phỏng.'
  },
  {
    id: 'g9-cd4-15',
    type: 'multiple_choice',
    question: 'Ví dụ về một phần mềm mô phỏng được sử dụng trong lĩnh vực y học là gì?',
    options: [
      'Microsoft Excel.',
      'Anatomy 4D.',
      'Google Docs.',
      'PowerPoint.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Anatomy 4D là phần mềm thực tế ảo tăng cường mô phỏng trực quan 3D các cơ quan, hệ tuần hoàn và giải phẫu học cơ thể người.',
    hint: 'Anatomy 4D (mô phỏng giải phẫu học cơ thể người).'
  },
  {
    id: 'g9-cd4-16',
    type: 'multiple_choice',
    question: 'Tại sao phần mềm mô phỏng lại được sử dụng rộng rãi trong đào tạo?',
    options: [
      'Giúp người học chủ động hơn trong quá trình học tập.',
      'Tăng tính hấp dẫn của bài học.',
      'Giúp người học dễ dàng hình dung các khái niệm khó.',
      'Tất cả các đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Giúp học sinh học theo phương pháp trải nghiệm, tự khám phá kiến thức, tăng hứng thú và biến các hiện tượng vi mô vô hình thành hình ảnh trực quan.',
    hint: 'Đem lại tất cả các tác dụng đào tạo tích cực trên.'
  }
];

/**
 * 12 PHÁT BIỂU ĐÚNG / SAI (PHẦN II ĐỀ CƯƠNG ÔN TẬP GIỮA KÌ 1 TIN HỌC 9)
 * Được định dạng trắc nghiệm tương tác giúp học sinh rèn luyện kỹ năng phân tích phản biện.
 */
export const GRADE_9_MIDTERM_TRUE_FALSE: Question[] = [
  {
    id: 'g9-tf-1',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Để thông tin có tính chính xác cao, người dùng cần kiểm tra nguồn thông tin có phải là cá nhân hay tổ chức có uy tín, có chuyên môn liên quan hay không."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Nguồn thông tin uy tín từ cơ quan chuyên môn là tiêu chí hàng đầu bảo chứng cho tính chính xác.',
    hint: 'Kiểm tra thẩm quyền và chuyên môn của tác giả là nguyên tắc thẩm định thông tin.'
  },
  {
    id: 'g9-tf-2',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Khi đánh giá một thông tin, tiêu chí tính mới (cập nhật) luôn là tiêu chí quan trọng nhất, bất kể lĩnh vực nào."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 1,
    difficulty: 'trung_binh',
    explanation: 'Đáp án: SAI. Mức độ ưu tiên của tiêu chí phụ thuộc vào mục đích sử dụng. Ví dụ: Sự kiện lịch sử, định lý toán học thì tính chính xác quan trọng hơn tính mới.',
    hint: 'Không phải mọi lĩnh vực tính mới đều là quan trọng nhất.'
  },
  {
    id: 'g9-tf-3',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Mục đích của việc đặt mật khẩu mạnh (bao gồm chữ hoa, chữ thường, số, ký tự đặc biệt) là để bảo vệ thông tin cá nhân và tránh bị đánh cắp danh tính."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Mật khẩu phức tạp làm tăng độ khó khi kẻ gian sử dụng phần mềm tấn công vét cạn (brute-force).',
    hint: 'Mật khẩu mạnh ngăn chặn tin tặc bẻ khóa chiếm quyền điều khiển tài khoản.'
  },
  {
    id: 'g9-tf-4',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Mọi hành vi đăng tải thông tin cá nhân của người khác lên mạng đều là vi phạm pháp luật về quyền riêng tư."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 1,
    difficulty: 'trung_binh',
    explanation: 'Đáp án: SAI. Từ "Mọi hành vi" là không chính xác. Nếu đã có sự đồng ý của chính chủ hoặc được cơ quan pháp luật có thẩm quyền cho phép theo luật định thì không vi phạm.',
    hint: 'Nếu người đó đồng ý hoặc cơ quan chức năng công bố theo luật thì hợp pháp.'
  },
  {
    id: 'g9-tf-5',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Khi sử dụng AI để làm bài tập, học sinh cần ghi rõ nguồn hoặc công cụ đã dùng để đảm bảo trung thực học tập."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Trích dẫn rõ ràng nguồn gốc AI thể hiện tính trung thực trong học tập và tôn trọng đạo đức liêm chính học thuật.',
    hint: 'Ghi rõ nguồn AI thể hiện tính trung thực học tập.'
  },
  {
    id: 'g9-tf-6',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Một số ứng dụng AI có thể thu thập dữ liệu cá nhân, do đó người dùng cần đọc kỹ chính sách quyền riêng tư trước khi sử dụng."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. AI có thể lưu lại lịch sử hỏi đáp, địa chỉ IP và dữ liệu cá nhân để huấn luyện mô hình, người dùng cần đọc kỹ điều khoản.',
    hint: 'Luôn đọc kỹ chính sách quyền riêng tư của các nền tảng AI.'
  },
  {
    id: 'g9-tf-7',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Không nên chia sẻ hình ảnh cá nhân lên mạng xã hội nếu không cần thiết, đặc biệt là ảnh liên quan đến vị trí sinh hoạt hằng ngày."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Để lộ vị trí nhà ở, trường học, giờ giấc sinh hoạt có thể tạo cơ hội cho kẻ xấu theo dõi, bắt cóc hoặc trộm cắp.',
    hint: 'Bảo vệ vị trí sinh hoạt tránh nguy cơ kẻ xấu theo dõi.'
  },
  {
    id: 'g9-tf-8',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Việc sử dụng xác thực hai lớp (Two-Factor Authentication - 2FA) giúp tăng cường bảo mật cho tài khoản trực tuyến."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Xác thực 2 bước (mật khẩu + mã OTP gửi về điện thoại) giúp tài khoản an toàn ngay cả khi mật khẩu bị lộ.',
    hint: 'Xác thực 2 lớp tạo lớp khiên bảo vệ thứ hai cho tài khoản.'
  },
  {
    id: 'g9-tf-9',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Khi chia sẻ lại một thông tin trên mạng xã hội, người dùng không cần kiểm tra nguồn gốc vì không phải là người đăng đầu tiên."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 1,
    difficulty: 'de',
    explanation: 'Đáp án: SAI. Dù không phải người khởi tạo, hành vi chia sẻ (share) tin giả, tin bịa đặt vẫn bị coi là hành vi phát tán thông tin sai sự thật và bị xử phạt theo pháp luật.',
    hint: 'Người chia sẻ vẫn phải chịu trách nhiệm pháp lý trước thông tin mình chia sẻ.'
  },
  {
    id: 'g9-tf-10',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Khi thấy bạn bị bắt nạt trên mạng, im lặng xem mà không báo cho người lớn hoặc thầy cô là hành vi đúng đắn để tránh rắc rối."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 1,
    difficulty: 'de',
    explanation: 'Đáp án: SAI. Im lặng trước bạo lực mạng là thái độ thờ ơ, tiếp tay gián tiếp cho kẻ bắt nạt. Cần lên tiếng can ngăn hoặc báo ngay cho phụ huynh, thầy cô để can thiệp kịp thời.',
    hint: 'Cần kịp thời thông báo cho thầy cô, cha mẹ giúp đỡ bạn.'
  },
  {
    id: 'g9-tf-11',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Thông tin được đăng tải trên các trang web có tên miền phổ biến như .com (thương mại) luôn có độ tin cậy thấp hơn các trang có tên miền học thuật .edu (giáo dục)."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 1,
    difficulty: 'trung_binh',
    explanation: 'Đáp án: SAI. Khẳng định "luôn có độ tin cậy thấp hơn" là phiến diện. Rất nhiều viện nghiên cứu, tổ chức khoa học hoặc nhà xuất bản lớn quốc tế sử dụng tên miền .com có độ uy tín cực kỳ cao.',
    hint: 'Không phải mọi trang .com đều kém tin cậy hơn .edu.'
  },
  {
    id: 'g9-tf-12',
    type: 'multiple_choice',
    question: 'Phát biểu sau ĐÚNG hay SAI:\n"Phương pháp tốt nhất để kiểm tra tính chính xác của một thông tin là so sánh thông tin đó với nội dung từ ít nhất hai nguồn uy tín độc lập khác."',
    options: ['Đúng (Đ)', 'Sai (S)'],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đáp án: ĐÚNG. Đây là kỹ năng đối chiếu chéo (cross-check) thông tin khoa học và chuẩn xác nhất khi tiếp nhận thông tin số.',
    hint: 'Đối chiếu chéo ít nhất hai nguồn tin độc lập là chuẩn mực kiểm chứng thông tin.'
  }
];

/**
 * CÁC CÂU HỎI TƯƠNG TÁC ĐIỀN KHUYẾT (FILL IN THE BLANKS) CHO TIN HỌC 9
 */
export const GRADE_9_FILL_BLANK_QUESTIONS: Question[] = [
  {
    id: 'g9-fill-1',
    type: 'fill_blank',
    question: 'Kéo thả hoặc nhấp từ thích hợp vào các ô trống để hoàn thành nhận định về vai trò của thông tin trong giải quyết vấn đề:\n\n"Thông tin là [1] để đưa ra các [2]. Cần quan tâm đến [3] khi tìm kiếm, tiếp nhận và sử dụng [4]."',
    wordBank: [
      'cơ sở',
      'quyết định',
      'chất lượng thông tin',
      'thông tin',
      'máy tính',
      'đường truyền mạng',
      'lợi ích'
    ],
    blankAnswers: ['cơ sở', 'quyết định', 'chất lượng thông tin', 'thông tin'],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đề cương Chủ đề 2 Câu 8: Thông tin là cơ sở để đưa ra các quyết định. Cần quan tâm đến chất lượng thông tin khi tìm kiếm, tiếp nhận và sử dụng thông tin.',
    hint: 'Gợi ý: cơ sở -> quyết định -> chất lượng thông tin -> thông tin'
  },
  {
    id: 'g9-fill-2',
    type: 'fill_blank',
    question: 'Điền vào chỗ trống 4 tiêu chí đánh giá chất lượng thông tin theo SGK Tin học 9:\n\n"Chất lượng thông tin được đánh giá thông qua 4 tiêu chí cốt lõi: [1], [2], [3] và [4]."',
    wordBank: [
      'Tính mới',
      'Tính chính xác',
      'Tính đầy đủ',
      'Tính sử dụng được',
      'Tính phổ biến',
      'Tính hấp dẫn',
      'Độ dài'
    ],
    blankAnswers: ['Tính mới', 'Tính chính xác', 'Tính đầy đủ', 'Tính sử dụng được'],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'SGK Tin học 9 KNTT Bài 2: 4 tiêu chí cốt lõi gồm: Tính mới (cập nhật), Tính chính xác, Tính đầy đủ, Tính sử dụng được.',
    hint: 'Mới -> Chính xác -> Đầy đủ -> Sử dụng được'
  },
  {
    id: 'g9-fill-3',
    type: 'fill_blank',
    question: 'Hoàn thành định nghĩa chuẩn về phần mềm mô phỏng (Bài 5):\n\n"Phần mềm mô phỏng giúp mô phỏng các [1], [2] hoặc [3] trong [4] trên máy tính nhằm phục vụ nghiên cứu và học tập."',
    wordBank: [
      'quá trình',
      'hệ thống',
      'hiện tượng',
      'thế giới thực',
      'trò chơi',
      'hình ảnh đẹp',
      'bản in'
    ],
    blankAnswers: ['quá trình', 'hệ thống', 'hiện tượng', 'thế giới thực'],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 9 KNTT Bài 5: Phần mềm mô phỏng giúp mô phỏng các quá trình, hệ thống hoặc hiện tượng trong thế giới thực.',
    hint: 'quá trình -> hệ thống -> hiện tượng -> thế giới thực'
  },
  {
    id: 'g9-fill-4',
    type: 'fill_blank',
    question: 'Điền tên các đạo luật quy định hoạt động trong môi trường số tại Việt Nam:\n\n"Luật [1] quy định chi tiết về quyền và trách nhiệm khi ứng dụng và phát triển công nghệ thông tin. Luật [2] quy định về bảo vệ an ninh quốc gia và trật tự an toàn xã hội trên không gian mạng."',
    wordBank: [
      'Công nghệ thông tin',
      'An ninh mạng',
      'An toàn thông tin',
      'Dân sự',
      'Hình sự'
    ],
    blankAnswers: ['Công nghệ thông tin', 'An ninh mạng'],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'Đề cương Chủ đề 3 Câu 14 & 15: Luật Công nghệ thông tin điều chỉnh ứng dụng phát triển CNTT; Luật An ninh mạng điều chỉnh bảo vệ an ninh quốc gia trên mạng.',
    hint: 'Công nghệ thông tin -> An ninh mạng'
  }
];

/**
 * CÁC CÂU HỎI TƯƠNG TÁC GHÉP NỐI CỘT (MATCHING) CHO TIN HỌC 9
 */
export const GRADE_9_MATCHING_QUESTIONS: Question[] = [
  {
    id: 'g9-match-1',
    type: 'matching',
    question: 'Em hãy ghép từng lĩnh vực ở Cột A với thiết bị có gắn bộ xử lý tương ứng ở Cột B (Đề cương Bài 1):',
    matchingLeft: [
      { id: 'yte', text: '1. Y tế' },
      { id: 'nongnghiep', text: '2. Nông nghiệp' },
      { id: 'giaothong', text: '3. Giao thông' },
      { id: 'thuongmai', text: '4. Thương mại' }
    ],
    matchingRight: [
      { id: 'maycaydtt', text: 'Máy cày tự động' },
      { id: 'maytimphoi', text: 'Máy tim phổi nhân tạo (ECMO)' },
      { id: 'ototulai', text: 'Ô tô lái tự động' },
      { id: 'htthanhtoan', text: 'Hệ thống thanh toán tự động (POS, QR)' }
    ],
    correctMatches: {
      yte: 'maytimphoi',
      nongnghiep: 'maycaydtt',
      giaothong: 'ototulai',
      thuongmai: 'htthanhtoan'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Y tế gắn với Máy tim phổi; Nông nghiệp gắn với Máy cày tự động; Giao thông gắn với Ô tô tự lái; Thương mại gắn với Hệ thống thanh toán.',
    hint: 'Ghép đúng chức năng đặc trưng của từng thiết bị trong từng ngành.'
  },
  {
    id: 'g9-match-2',
    type: 'matching',
    question: 'Hãy ghép 4 tiêu chí đánh giá chất lượng thông tin ở Cột A với ý nghĩa tương ứng ở Cột B:',
    matchingLeft: [
      { id: 'tinhmoi', text: '1. Tính mới' },
      { id: 'tinhchinhxac', text: '2. Tính chính xác' },
      { id: 'tinhdaydu', text: '3. Tính đầy đủ' },
      { id: 'tinhsudung', text: '4. Tính sử dụng được' }
    ],
    matchingRight: [
      { id: 'yn-moi', text: 'Cho biết thông tin đã bị lỗi thời hay chưa' },
      { id: 'yn-chinhxac', text: 'Thông tin phản ánh đúng thực tế khách quan, có nguồn kiểm chứng uy tín' },
      { id: 'yn-daydu', text: 'Cung cấp cái nhìn toàn diện, không bỏ sót các khía cạnh trọng tâm' },
      { id: 'yn-sudung', text: 'Thông tin có giá trị ứng dụng thực tiễn, giúp người dùng ra quyết định' }
    ],
    correctMatches: {
      tinhmoi: 'yn-moi',
      tinhchinhxac: 'yn-chinhxac',
      tinhdaydu: 'yn-daydu',
      tinhsudung: 'yn-sudung'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 9 KNTT Bài 2: Khái niệm chuẩn của 4 tiêu chí chất lượng thông tin.',
    hint: 'Tính mới -> Lỗi thời hay chưa; Đầy đủ -> Cái nhìn toàn diện; Sử dụng được -> Giá trị ứng dụng.'
  },
  {
    id: 'g9-match-3',
    type: 'matching',
    question: 'Hãy ghép tên phần mềm mô phỏng ở Cột A với lĩnh vực môn học ứng dụng tương ứng ở Cột B (Bài 5):',
    matchingLeft: [
      { id: 'croc', text: '1. Crocodile Physics' },
      { id: 'phet', text: '2. PhET Simulations' },
      { id: 'anat', text: '3. Anatomy 4D' },
      { id: 'solar', text: '4. Solar System Scope' }
    ],
    matchingRight: [
      { id: 'app-vatly', text: 'Mô phỏng thí nghiệm mạch điện, quang học (Vật lý)' },
      { id: 'app-phet', text: 'Thí nghiệm ảo tương tác Vật lý và Hóa học' },
      { id: 'app-yhoc', text: 'Mô phỏng giải phẫu học cơ thể người 3D (Y học, Sinh học)' },
      { id: 'app-vutru', text: 'Mô phỏng chuyển động của các hành tinh trong Hệ Mặt Trời' }
    ],
    correctMatches: {
      croc: 'app-vatly',
      phet: 'app-phet',
      anat: 'app-yhoc',
      solar: 'app-vutru'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'Crocodile Physics (Vật lý), PhET (Vật lý/Hóa học), Anatomy 4D (Giải phẫu Y học/Sinh học), Solar System Scope (Hệ mặt trời/Thiên văn).',
    hint: 'Crocodile: Vật lý; PhET: Lý - Hóa; Anatomy: Cơ thể người; Solar: Hệ mặt trời.'
  },
  {
    id: 'g9-match-4',
    type: 'matching',
    question: 'Hãy phân loại các hành vi trong môi trường số vào đúng tính chất (Vi phạm pháp luật hay Vi phạm đạo đức / văn hóa):',
    matchingLeft: [
      { id: 'hv1', text: '1. Chiếm đoạt tài khoản mạng xã hội để lừa đảo vay tiền' },
      { id: 'hv2', text: '2. Tự ý lấy bài văn của bạn nộp cho thầy cô để lấy điểm cao' },
      { id: 'hv3', text: '3. Phát tán đường link chứa mã độc đánh cắp mật khẩu' },
      { id: 'hv4', text: '4. Nói xấu, đặt biệt danh khiếm nhã chê bai bạn bè trong nhóm chat' }
    ],
    matchingRight: [
      { id: 'pl-luadao', text: 'Hành vi vi phạm pháp luật hình sự (Lừa đảo, chiếm đoạt tài sản)' },
      { id: 'dd-daovan', text: 'Hành vi trái đạo đức học tập (Gian lận, thiếu trung thực)' },
      { id: 'pl-antoan', text: 'Hành vi vi phạm pháp luật về an toàn thông tin' },
      { id: 'dd-baoluc', text: 'Hành vi thiếu văn hóa, bạo lực mạng trên không gian số' }
    ],
    correctMatches: {
      hv1: 'pl-luadao',
      hv2: 'dd-daovan',
      hv3: 'pl-antoan',
      hv4: 'dd-baoluc'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'Lừa đảo vay tiền & phát tán mã độc là vi phạm pháp luật nghiêm trọng; Đạo văn & chê bai bạn bè là hành vi trái đạo đức và thiếu văn hóa.',
    hint: 'Phân định rõ vi phạm pháp luật hình phạt nhà nước và vi phạm đạo đức chuẩn mực xã hội.'
  }
];

/**
 * CÁC CÂU HỎI TƯƠNG TÁC KÉO THẢ SẮP XẾP THỨ TỰ (DRAG & DROP ORDER) CHO TIN HỌC 9
 */
export const GRADE_9_DRAG_DROP_QUESTIONS: Question[] = [
  {
    id: 'g9-order-1',
    type: 'drag_drop_order',
    question: 'Hãy sắp xếp các bước trong quy trình giải quyết vấn đề bằng thông tin theo đúng trình tự khoa học:',
    orderItems: [
      { id: 'step-1', text: 'Bước 1: Xác định rõ vấn đề cần giải quyết' },
      { id: 'step-2', text: 'Bước 2: Tìm kiếm và thu thập thông tin liên quan' },
      { id: 'step-3', text: 'Bước 3: Đánh giá chất lượng thông tin thu thập được' },
      { id: 'step-4', text: 'Bước 4: Sử dụng thông tin đáng tin cậy để đưa ra quyết định' }
    ],
    correctOrder: ['step-1', 'step-2', 'step-3', 'step-4'],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'SGK Tin học 9 KNTT Bài 2: Quy trình gồm 4 bước liên tiếp từ xác định vấn đề -> thu thập -> đánh giá chất lượng -> ra quyết định.',
    hint: 'Bắt đầu từ việc xác định bài toán, sau đó tìm tin, đánh giá rồi mới ra quyết định.'
  },
  {
    id: 'g9-order-2',
    type: 'drag_drop_order',
    question: 'Hãy sắp xếp quy trình 5 bước kiểm tra tính xác thực của một thông tin nóng trên mạng xã hội trước khi chia sẻ:',
    orderItems: [
      { id: 'check-1', text: 'Bước 1: Đọc kỹ tiêu đề và nội dung bài viết' },
      { id: 'check-2', text: 'Bước 2: Kiểm tra tác giả và thẩm quyền của trang đăng tải' },
      { id: 'check-3', text: 'Bước 3: Đối chiếu với ít nhất 2 nguồn tin báo chí chính thống độc lập' },
      { id: 'check-4', text: 'Bước 4: Kiểm tra ngày tháng công bố (tính mới, cập nhật)' },
      { id: 'check-5', text: 'Bước 5: Đưa ra quyết định có tin tưởng hoặc chia sẻ thông tin hay không' }
    ],
    correctOrder: ['check-1', 'check-2', 'check-3', 'check-4', 'check-5'],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'Quy trình kiểm chứng thông tin: Đọc hiểu -> Thẩm định nguồn -> Đối chiếu chéo -> Đánh giá thời điểm -> Quyết định sử dụng/chia sẻ.',
    hint: 'Từ đọc tổng quan đến kiểm tra nguồn, đối chiếu chéo và ra quyết định chia sẻ.'
  },
  {
    id: 'g9-order-3',
    type: 'drag_drop_order',
    question: 'Hãy sắp xếp 4 bước chuẩn để tiến hành một thí nghiệm trên phần mềm mô phỏng (Bài 5):',
    orderItems: [
      { id: 'sim-1', text: 'Bước 1: Khởi động phần mềm và chọn bài học thí nghiệm ảo tương ứng' },
      { id: 'sim-2', text: 'Bước 2: Thiết lập và thay đổi các thông số đầu vào của mô hình' },
      { id: 'sim-3', text: 'Bước 3: Cho mô hình vận hành và quan sát diễn biến hiện tượng' },
      { id: 'sim-4', text: 'Bước 4: Thu thập số liệu, so sánh với lý thuyết và rút ra kết luận' }
    ],
    correctOrder: ['sim-1', 'sim-2', 'sim-3', 'sim-4'],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'SGK Tin học 9 KNTT Bài 5: Trình tự thí nghiệm ảo: Chọn bài -> Cài đặt tham số -> Chạy mô hình -> Phân tích kết quả.',
    hint: 'Bắt đầu từ mở phần mềm đến cài thông số, quan sát hiện tượng và ghi nhận kết quả.'
  }
];

/**
 * 5 CÂU HỎI TỰ LUẬN & TÌNH HUỐNG THỰC TẾ GIỮA KÌ 1 TIN HỌC 9
 * Trích xuất 100% nguyên văn từ Phần III (Trang 9 - 10) trong file đề cương ôn tập kèm gợi ý trả lời chi tiết.
 */
export const GRADE_9_MIDTERM_ESSAY_QUESTIONS: EssayQuestion[] = [
  {
    id: 'g9-tl-1',
    title: 'Câu 1: Các lợi ích mà tin học và máy tính có thể đem lại',
    question: 'Hãy chỉ ra các lợi ích mà tin học và máy tính có thể đem lại cho cuộc sống của con người?',
    suggestedAnswer: `GỢI Ý TRẢ LỜI CHI TIẾT THEO ĐỀ CƯƠNG:
• Nâng cao năng suất làm việc: Tự động hóa các quy trình sản xuất, xử lý khối lượng lớn công việc trong thời gian ngắn với độ chính xác cao.
• Kết nối và hợp tác: Chia sẻ dữ liệu, thông tin dễ dàng mọi lúc, mọi nơi trên phạm vi toàn cầu.
• Tiết kiệm thời gian và chi phí: Giảm bớt nhân công, chi phí in ấn giấy tờ và chi phí đi lại.
• Truy cập thông tin nhanh chóng: Đưa thông tin tri thức đến mọi người một cách nhanh chóng và chính xác.
• Giải trí: Xem phim, nghe nhạc chất lượng cao, chơi game, lướt web thư giãn.
• Học tập: Hỗ trợ việc học tập qua các ứng dụng, phần mềm học tập trực tuyến, lớp học thông minh.
• Giao tiếp: Kết nối mọi người với nhau thông qua mạng xã hội, email, video call.
• Mua sắm trực tuyến: Tiện lợi, nhanh chóng, đa dạng sản phẩm, thanh toán không dùng tiền mặt.
• Y tế: Hỗ trợ chẩn đoán bệnh chính xác bằng AI, hỗ trợ phẫu thuật robot, quản lý hồ sơ bệnh án điện tử.`,
    topic: 'Chủ đề 1: Bài 1'
  },
  {
    id: 'g9-tl-2',
    title: 'Câu 2: Ví dụ hành vi vi phạm pháp luật và trái đạo đức trong môi trường số',
    question: 'Em hãy lấy ví dụ về một hành vi vi phạm pháp luật và một hành vi trái đạo đức khi hoạt động trong môi trường số. Nêu cách phòng tránh vi phạm?',
    suggestedAnswer: `GỢI Ý TRẢ LỜI CHI TIẾT THEO ĐỀ CƯƠNG:
1. Hành vi vi phạm pháp luật:
- Thu thập, sử dụng, tiết lộ thông tin cá nhân của người khác mà không được sự đồng ý.
- Hack (xâm nhập trái phép) vào tài khoản mạng xã hội của người khác.
- Lừa đảo chiếm đoạt tài sản qua mạng (thông báo trúng thưởng giả mạo, mạo danh ngân hàng).

2. Hành vi trái đạo đức:
- Lan truyền tin giả, thông tin sai lệch, giật gân chưa qua kiểm chứng.
- Xâm phạm quyền riêng tư: Thu thập, sử dụng thông tin cá nhân của người khác một cách trái phép.
- Bôi nhọ, nói xấu, xúc phạm danh dự và nhân phẩm của người khác trên mạng xã hội.

3. Cách em phòng tránh vi phạm:
- Cần tìm hiểu thông tin, trang bị cho mình những hiểu biết, những kiến thức pháp luật (Luật CNTT, Luật An ninh mạng) để có nhận thức đúng đắn và đảm bảo rằng mình sử dụng công nghệ kĩ thuật số có trách nhiệm, tránh vi phạm pháp luật và chuẩn mực văn hoá, đạo đức của xã hội.
- Không nhấp vào đường link lạ không rõ nguồn gốc, các lời mời trúng thưởng bất ngờ; luôn tôn trọng quyền riêng tư và bản quyền sở hữu trí tuệ của tác giả.`,
    topic: 'Chủ đề 3: Bài 4'
  },
  {
    id: 'g9-tl-3',
    title: 'Câu 3: Các cách phòng tránh tác động tiêu cực của công nghệ kĩ thuật số',
    question: 'Em hãy cho biết những cách nào sau đây giúp em tránh được các tác động tiêu cực khi sử dụng công nghệ kĩ thuật số?',
    suggestedAnswer: `GỢI Ý TRẢ LỜI CHI TIẾT THEO ĐỀ CƯƠNG:
Để phòng tránh các tác động tiêu cực của công nghệ kỹ thuật số đối với sức khỏe thể chất và tinh thần, học sinh cần thực hiện các biện pháp:
1. Không sử dụng thiết bị số trong thời gian dài và liên tục (áp dụng quy tắc 20-20-20 để bảo vệ mắt, cứ 20 phút nhìn xa 20 feet trong 20 giây).
2. Không xem các video phản cảm, độc hại, bạo lực hoặc không phù hợp lứa tuổi.
3. Nên giảm thời gian dùng điện thoại thông minh và dành nhiều thời gian hơn để trò chuyện, gắn kết tình cảm với người thân trong gia đình.
4. Tích cực tham gia luyện tập thể dục, thể thao và các hoạt động ngoại khóa ngoài trời để nâng cao thể chất.`,
    topic: 'Chủ đề 1 & Chủ đề 3'
  },
  {
    id: 'g9-tl-4',
    title: 'Câu 4: Ví dụ cụ thể về tác động tiêu cực của công nghệ kĩ thuật số',
    question: 'Em hãy nêu một số ví dụ cụ thể về tác động tiêu cực của công nghệ kĩ thuật số đối với con người?',
    suggestedAnswer: `GỢI Ý TRẢ LỜI CHI TIẾT THEO ĐỀ CƯƠNG:
Một số ví dụ thực tế về tác động tiêu cực:
1. Chơi trò chơi điện tử quá nhiều, liên tục có thể gây nghiện game. Khi không được chơi sẽ cảm thấy bứt rứt, khó chịu, cáu gắt và không kiểm soát được cảm xúc của bản thân.
2. Quá lệ thuộc vào công nghệ kĩ thuật số để giải quyết những vấn đề nhỏ trong cuộc sống (ví dụ: học sinh nhờ trí tuệ nhân tạo làm hộ toàn bộ bài tập về nhà, viết văn hộ mà không tự mình tư duy suy nghĩ).
3. Trò chuyện trực tuyến với đối tượng ẩn danh hay mạo danh dẫn đến nguy cơ mất an toàn do có thể bị lộ thông tin cá nhân hoặc bị lừa gạt, dụ dỗ.
4. Thông tin số có thể bị đánh cắp, gây thiệt hại nghiêm trọng cho người sử dụng. Ví dụ: Việc lộ thông tin tài khoản ngân hàng có thể bị mất toàn bộ tiền trong tài khoản; thông tin về cha mẹ, số điện thoại, địa chỉ nhà của học sinh bị lộ có thể bị kẻ xấu lợi dụng mạo danh liên hệ để lừa tiền cha mẹ học sinh (như chiêu trò lừa "con đang cấp cứu").`,
    topic: 'Chủ đề 1 & Chủ đề 3'
  },
  {
    id: 'g9-tl-5',
    title: 'Câu 5: Tự liên hệ hành động chưa đúng của bản thân và biện pháp khắc phục',
    question: 'Em hãy nêu một vài hành động chưa đúng của em khi sử dụng công nghệ kĩ thuật số mà em đã mắc phải. Nêu cách em sẽ phòng tránh hoặc từ bỏ vi phạm?',
    suggestedAnswer: `GỢI Ý TRẢ LỜI CHI TIẾT THEO ĐỀ CƯƠNG:
1. Hành động chưa đúng có thể từng mắc phải:
- Từng thức khuya lướt mạng xã hội (TikTok, Facebook) hoặc xem video YouTube quá giờ quy định làm ảnh hưởng đến giấc ngủ và việc học sáng hôm sau.
- Sử dụng công cụ AI để tìm lời giải bài tập nhưng có lúc sao chép nguyên văn vào vở mà chưa đọc kỹ để hiểu bản chất kiến thức.
- Từng chia sẻ một thông tin giật gân trên mạng xã hội khi chưa kiểm chứng xem thông tin đó có chính xác hay không.

2. Cách em phòng tránh và từ bỏ vi phạm:
- Lập thời gian biểu khoa học: Đặt giới hạn thời gian sử dụng điện thoại mỗi ngày (tối đa 1-2 tiếng), tắt chuông thông báo và không mang điện thoại vào giường ngủ.
- Sử dụng AI có trách nhiệm: Chỉ dùng AI như một người gia sư gợi ý ý tưởng; luôn tự mình giải và suy nghĩ thấu đáo các bài tập.
- Luôn kiểm chứng nguồn tin uy tín (báo chí chính thống, cơ quan chức năng) trước khi nhấp nút Like hoặc Chia sẻ bất kỳ thông tin nào lên trang cá nhân.`,
    topic: 'Chủ đề 3: Bài 4'
  }
];

/**
 * TẤT CẢ CÂU HỎI ÔN TẬP GIỮA KỲ 1 TIN HỌC 9 (TỔNG HỢP CÁC DẠNG)
 */
export const ALL_GRADE_9_MIDTERM_QUESTIONS: Question[] = [
  ...GRADE_9_FILL_BLANK_QUESTIONS,
  ...GRADE_9_MATCHING_QUESTIONS,
  ...GRADE_9_DRAG_DROP_QUESTIONS,
  ...GRADE_9_MIDTERM_TRUE_FALSE,
  ...GRADE_9_MIDTERM_76_MCQ
];
