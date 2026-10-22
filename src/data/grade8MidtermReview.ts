import { Question, EssayQuestion } from '../types/quiz';

/**
 * 60 CÂU HỎI TRẮC NGHIỆM ÔN TẬP GIỮA KÌ 1 TIN HỌC 8 (NĂM HỌC 2026 - 2027)
 * Trích xuất 100% chính xác từ đề cương giáo viên (Bài 1, Bài 2, Bài 3, Bài 4)
 * Chuẩn đáp án chính thức Bộ môn Tin học.
 */
export const GRADE_8_MIDTERM_60_MCQ: Question[] = [
  // Trang 1
  {
    id: 'gk1-mcq-1',
    type: 'multiple_choice',
    question: 'Điền vào chỗ (...):\n"Ý tưởng cơ giới hóa việc tính toán đóng vai trò quan trọng trong lịch sử phát triển của ....................... . Năm 1642, nhà bác học Blaise Pascal đã sáng chế ra ......................................... Pascaline."',
    options: [
      'chiếc máy tính cơ khí / máy tính',
      'bàn phím / tính toán',
      'máy tính / chiếc bàn tính hiển thị số',
      'máy tính / chiếc máy tính cơ khí'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Ý tưởng cơ giới hóa việc tính toán đóng vai trò quan trọng trong lịch sử phát triển của máy tính. Năm 1642, nhà bác học Blaise Pascal đã sáng chế ra chiếc máy tính cơ khí Pascaline.',
    hint: 'Máy tính là lịch sử phát triển; Pascaline là chiếc máy tính cơ khí nổi tiếng.'
  },
  {
    id: 'gk1-mcq-2',
    type: 'multiple_choice',
    question: 'Chiếc máy tính cơ khí Pascaline của nhà bác học Blaise Pascal (năm 1642) là đại diện tiêu biểu của?',
    options: [
      'chiếc máy tính cơ khí',
      'bàn phím số',
      'máy tính điện - cơ',
      'Đáp án khác'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Pascaline do Blaise Pascal sáng chế năm 1642 là chiếc máy tính cơ khí hoạt động bằng các bánh răng kim loại.',
    hint: 'Dùng bánh răng cơ khí để thực hiện phép tính cộng trừ.'
  },
  {
    id: 'gk1-mcq-3',
    type: 'multiple_choice',
    question: 'Máy tính trong dự án của Charles Babbage có những đặc điểm gì?',
    options: [
      'Máy tính cơ học, thực hiện tự động.',
      'Máy tính có những ứng dụng ngoài tính toán thuần túy.',
      'Có thiết kế giống với máy tính ngày nay.',
      'Cả ba đặc điểm trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'trung_binh',
    explanation: 'Đáp án D: Dự án máy tính của Babbage là máy cơ học tự động, có ứng dụng mở rộng ngoài tính toán thuần túy và có cấu trúc bộ điều khiển, bộ nhớ, đọc chương trình tương tự máy tính ngày nay.',
    hint: 'Đầy đủ cả 3 đặc điểm mang tính cách mạng của Babbage.'
  },
  // Trang 2
  {
    id: 'gk1-mcq-4',
    type: 'multiple_choice',
    question: 'Nguyên lí thiết kế máy tính của Babbage là?',
    options: [
      'loại máy tính đa năng',
      'thực hiện tính toán tự động',
      'có những ứng dụng ngoài tính toán thuần túy',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Babbage đề xuất loại máy tính đa năng, tính toán tự động và có ứng dụng vượt ra ngoài các phép tính số học đơn thuần.',
    hint: 'Babbage là cha đẻ công nghệ máy tính nhờ cả 3 nguyên lý trên.'
  },
  {
    id: 'gk1-mcq-5',
    type: 'multiple_choice',
    question: 'Bàn phím hiển thị số trên máy tính cơ khí thể hiện nội dung gì?',
    options: [
      'Bàn phím hiển thị số 6 302 715 408',
      'Máy tính cơ khí',
      'Máy tính điện tử',
      'Đáp án khác.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Hình ảnh trong SGK Tin học 8 minh họa bàn phím hiển thị dãy số nguyên 6 302 715 408.',
    hint: 'Dãy số gồm 10 chữ số hiển thị trên bàn phím.'
  },
  {
    id: 'gk1-mcq-6',
    type: 'multiple_choice',
    question: 'Trong lịch sử phát triển của máy tính điện tử, có bao nhiêu thế hệ máy tính?',
    options: ['1', '3', '5', '7'],
    correctAnswer: 2, // C: 5
    difficulty: 'de',
    explanation: 'Đáp án C: Lịch sử máy tính điện tử được chia thành 5 thế hệ từ năm 1945 đến nay.',
    hint: 'Bao gồm từ thế hệ đèn chân không đến thế hệ trí tuệ nhân tạo (AI).'
  },
  {
    id: 'gk1-mcq-7',
    type: 'multiple_choice',
    question: 'Các thế hệ máy tính gắn liền với các tiến bộ công nghệ nào?',
    options: [
      'Đèn điện tử chân không',
      'Bóng bán dẫn, mạch tích hợp',
      'Vi xử lí, vi xử lí mật độ tích hợp siêu cao',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Cả 3 tiến bộ công nghệ trên tương ứng với các bước phát triển qua 5 thế hệ máy tính điện tử.',
    hint: 'Từ bóng chân không -> bóng bán dẫn -> IC -> vi xử lý VLSI / ULSI.'
  },
  {
    id: 'gk1-mcq-8',
    type: 'multiple_choice',
    question: 'Những chiếc máy tính phát minh sau đó hướng tới đặc điểm gì?',
    options: [
      'Nhỏ, nhẹ, tiêu thụ ít điện năng.',
      'Tốc độ, độ tin cậy cao hơn, dung lượng bộ nhớ lớn hơn.',
      'Thông minh hơn và giá thành hợp lí hơn.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Xu hướng phát triển chung là nhỏ nhẹ hơn, nhanh hơn, tin cậy hơn, thông minh hơn và giá thành hợp lý hơn.',
    hint: 'Mọi tiêu chí kỹ thuật và kinh tế đều hướng tới phục vụ người dùng tốt hơn.'
  },
  {
    id: 'gk1-mcq-9',
    type: 'multiple_choice',
    question: 'Sự phát triển của máy tính mang lại điều gì cho nhân loại?',
    options: [
      'hình thành, phát triển xã hội thông tin',
      'nông nghiệp, công nghiệp thông minh',
      'Cách mạng công nghiệp 4.0 và kinh tế tri thức',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Máy tính thúc đẩy xã hội thông tin, nông nghiệp/công nghiệp thông minh và cuộc CMCN 4.0 cùng nền kinh tế tri thức.',
    hint: 'Ảnh hưởng toàn diện tới mọi mặt của đời sống kinh tế - xã hội.'
  },
  // Trang 3
  {
    id: 'gk1-mcq-10',
    type: 'multiple_choice',
    question: 'Lựa chọn phương án SAI: Máy tính ngày càng trở nên gọn nhẹ hơn, nhanh hơn, thông minh hơn bởi vì:',
    options: [
      'Các linh kiện chế tạo máy tính ngày càng nhỏ hơn, nhẹ hơn, tốc độ xử lí nhanh hơn nhờ vào sự tiến bộ của công nghệ (điện tử, bán dẫn, mạch tích hợp, vi xử lí VLSI, vi xử lí ULSI).',
      'Trí tuệ nhân tạo đã trở thành hiện thực nhờ vào sự phát triển của công nghệ phần cứng.',
      'Máy tính được chế tạo bằng các vật liệu có giá thành cao hơn.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C là khẳng định SAI vì giá thành chế tạo máy tính ngày càng rẻ và hợp lý hơn, chứ không phải giá thành cao hơn.',
    hint: 'Nhờ sản xuất hàng loạt bằng silicon nên giá thành máy tính ngày càng hạ.'
  },
  {
    id: 'gk1-mcq-11',
    type: 'multiple_choice',
    question: 'Phát biểu nào sau đây là SAI?',
    options: [
      'Máy tính điện tử ra đời vào những năm 1950.',
      'Năm thế hệ máy tính gắn liền với các tiến độ công nghệ: đèn điện tử chân không, bóng bán dẫn, mạch tích hợp, vi xử lí mật độ tích hợp rất cao, vi xử lí mật độ tích hợp siêu cao.',
      'Càng về sau, các máy tính càng nhỏ, nhẹ, tiêu thụ ít điện năng, tốc độ, độ tin cậy cao hơn, dung lượng bộ nhớ lớn hơn, thông minh hơn và giá thành hợp lí hơn.'
    ],
    correctAnswer: 0, // A
    difficulty: 'trung_binh',
    explanation: 'Đáp án A là SAI vì máy tính điện tử đầu tiên (ENIAC) ra đời vào năm 1945, thuộc thập niên 1940 chứ không phải thập niên 1950.',
    hint: 'ENIAC hoàn thành vào năm 1945.'
  },
  {
    id: 'gk1-mcq-12',
    type: 'multiple_choice',
    question: 'Thế hệ thứ nhất trong lịch sử phát triển máy tính diễn ra vào khoảng thời gian nào?',
    options: ['1965 – 1974.', '1990 – nay.', '1945 – 1955.', '1955 – 1965.'],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Thế hệ thứ nhất diễn ra từ năm 1945 đến năm 1955 (sử dụng đèn điện tử chân không).',
    hint: 'Giai đoạn bắt đầu từ máy tính ENIAC năm 1945.'
  },
  {
    id: 'gk1-mcq-13',
    type: 'multiple_choice',
    question: 'Thế hệ thứ hai trong lịch sử phát triển máy tính diễn ra vào năm nào?',
    options: ['1965 – 1974.', '1990 – nay.', '1945 – 1955.', '1955 – 1965.'],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Thế hệ thứ hai diễn ra từ năm 1955 đến năm 1965 (sử dụng bóng bán dẫn Transistor).',
    hint: 'Nối tiếp ngay sau thế hệ 1 (1945 - 1955).'
  },
  {
    id: 'gk1-mcq-14',
    type: 'multiple_choice',
    question: 'Thế hệ thứ ba trong lịch sử phát triển máy tính diễn ra vào năm nào?',
    options: ['1965 – 1974.', '1990 – nay.', '1945 – 1955.', '1955 – 1965.'],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Thế hệ thứ ba diễn ra từ năm 1965 đến năm 1974 (sử dụng mạch tích hợp IC).',
    hint: 'Giai đoạn ứng dụng mạch tích hợp nhỏ gọn IC.'
  },
  {
    id: 'gk1-mcq-15',
    type: 'multiple_choice',
    question: 'Thế hệ thứ tư trong lịch sử phát triển máy tính diễn ra vào năm nào?',
    options: ['1965 – 1974.', '1990 – nay.', '1974 – 1990.', '1955 – 1965.'],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Thế hệ thứ tư diễn ra từ năm 1974 đến năm 1990 (sử dụng vi mạch tích hợp cỡ lớn VLSI và vi xử lý).',
    hint: 'Bắt đầu từ năm 1974 với sự xuất hiện của chip vi xử lý.'
  },
  {
    id: 'gk1-mcq-16',
    type: 'multiple_choice',
    question: 'Thế hệ thứ năm trong lịch sử phát triển máy tính diễn ra vào năm nào?',
    options: ['1965 – 1974.', '1990 – nay.', '1974 – 1989.', '1955 – 1965.'],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Thế hệ thứ năm diễn ra từ năm 1990 đến nay (phát triển trí tuệ nhân tạo, tính toán song song, mạng Internet).',
    hint: 'Kéo dài từ thập niên 90 tới thời điểm hiện tại.'
  },
  {
    id: 'gk1-mcq-17',
    type: 'multiple_choice',
    question: 'Trong các phát biểu sau, những phát biểu nào là SAI?\n1 – Kể từ khi ra đời, máy tính nói riêng và Tin học nói chung đã tác động mạnh mẽ, rộng khắp đến xã hội loài người.\n2 – Máy tính làm thay đổi cách thức con người thu thập, lưu trữ, xử lí, chia sẻ thông tin.\n3 – Các thiết bị thông minh không phải là thành phần của hệ thống thông minh.\n4 – Trong nông nghiệp, hệ thống thông minh cho phép tự động thực hiện việc chăm sóc phù hợp với từng thời kì phát triển của cây trồng, vật nuôi.\n5 – Trong công nghiệp, đã xuất hiện những nhà máy thông minh được tự động hóa hoàn toàn, không có công nhân làm việc trong nhà máy.\n6 – Cách mạng công nghiệp 4.0 và kinh tế tri thức đã, đang và sẽ mang lại nhiều thay đổi to lớn hơn nữa cho xã hội loài người.\n7 – Yếu tố quan trọng nhất trong kinh tế tri thức là các hệ thống máy tính.',
    options: ['2, 3.', '3, 5.', '3, 7.', '5, 6.'],
    correctAnswer: 2, // C: 3, 7
    difficulty: 'kho',
    explanation: 'Đáp án C: Phát biểu 3 sai vì thiết bị thông minh chính là thành phần cốt lõi của hệ thống thông minh; Phát biểu 7 sai vì yếu tố quan trọng nhất trong kinh tế tri thức là TRI THỨC VÀ CON NGƯỜI chứ không phải hệ thống máy tính.',
    hint: 'Thiết bị thông minh thuộc hệ thống thông minh; kinh tế tri thức lấy tri thức con người làm cốt lõi.'
  },
  // Trang 4
  {
    id: 'gk1-mcq-18',
    type: 'multiple_choice',
    question: 'Hãy chọn phương án ghép nối phù hợp giữa Lĩnh vực và Ví dụ:\n1) Giáo dục\t\ta) Giao tiếp, chia sẻ, tham gia các hoạt động cộng đồng trên mạng.\n2) Văn hóa\t\tb) Dạy học trực tuyến\n3) Giao thông\t\tc) Khám bệnh trực tuyến\n4) Y tế\t\t\td) Taxi công nghệ\n5) Giải trí\t\te) Mua bán trực tuyến\n6) Du lịch\t\tf) Du lịch trực tuyến\n7) Thương mại\tg) Xem phim, chơi game trực tuyến',
    options: [
      '1-b; 2-a; 3-d; 4-f; 5-c; 6-g; 7-e',
      '1-b; 2-a; 3-d; 4-c; 5-g; 6-f; 7-e',
      '1-b; 2-a; 3-c; 4-d; 5-f; 6-g; 7-e',
      '1-b; 2-a; 3-d; 4-c; 5-f; 6-e; 7-g'
    ],
    correctAnswer: 1, // B
    difficulty: 'trung_binh',
    explanation: 'Đáp án B: 1-b (Giáo dục - Dạy học trực tuyến); 2-a (Văn hóa - Giao tiếp, chia sẻ); 3-d (Giao thông - Taxi công nghệ); 4-c (Y tế - Khám bệnh trực tuyến); 5-g (Giải trí - Xem phim, chơi game); 6-f (Du lịch - Du lịch trực tuyến); 7-e (Thương mại - Mua bán trực tuyến).',
    hint: 'Giáo dục gắn với dạy học trực tuyến; Y tế gắn với khám bệnh trực tuyến; Giao thông gắn với taxi công nghệ.'
  },
  {
    id: 'gk1-mcq-19',
    type: 'multiple_choice',
    question: 'Thông tin kĩ thuật số là gì?',
    options: [
      'Nguồn thông tin số khổng lồ, phổ dụng nhất hiện nay.',
      'Thông tin được thông qua các thiết bị, phương tiện công nghệ kĩ thuật số.',
      'Thông tin được thu thập, lưu trữ, xử lí, truyền, trao đổi.',
      'Thông tin được thu thập, lưu trữ, xử lí, truyền, trao đổi thông qua các thiết bị, phương tiện công nghệ kĩ thuật số.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Định nghĩa chuẩn xác đầy đủ theo SGK: Thông tin số là thông tin được thu thập, lưu trữ, xử lí, truyền, trao đổi thông qua các thiết bị và phương tiện công nghệ kĩ thuật số.',
    hint: 'Gồm đầy đủ 5 thao tác: thu thập, lưu trữ, xử lý, truyền, trao đổi qua thiết bị số.'
  },
  {
    id: 'gk1-mcq-20',
    type: 'multiple_choice',
    question: 'Internet là gì?',
    options: [
      'Nguồn thông tin số khổng lồ, phổ dụng nhất hiện nay.',
      'Thông tin được thông qua các thiết bị, phương tiện công nghệ kĩ thuật số.',
      'Một mạng nội bộ trường học.',
      'Một phần mềm tìm kiếm.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Internet là nguồn thông tin số khổng lồ và phổ dụng nhất của nhân loại hiện nay.',
    hint: 'Mạng toàn cầu chứa kho tri thức khổng lồ.'
  },
  // Trang 5
  {
    id: 'gk1-mcq-21',
    type: 'multiple_choice',
    question: 'Đặc điểm của thông tin trên Internet là?',
    options: [
      'Nguồn thông tin khổng lồ, đa dạng, phong phú.',
      'Thường xuyên được cập nhật; có thể tìm kiếm dễ dàng, nhanh chóng.',
      'Có nguồn thông tin đáng tin cậy nhưng cũng có nguồn thông tin không thực sự đáng tin cậy.',
      'Cả ba đặc điểm trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Thông tin trên Internet khổng lồ, cập nhật nhanh chóng nhưng chất lượng và độ tin cậy rất khác nhau.',
    hint: 'Internet có cả thông tin đúng lẫn thông tin sai lệch cần chọn lọc.'
  },
  {
    id: 'gk1-mcq-22',
    type: 'multiple_choice',
    question: 'Em hãy chọn phương án ghép đúng:\n"Thông tin số được nhiều tổ chức và cá nhân lưu trữ với dung lượng rất lớn,........"',
    options: [
      'được truy cập tự do và có độ tin cậy khác nhau.',
      'được bảo hộ quyền tác giả và không đáng tin cậy.',
      'được bảo hộ quyền tác giả và có độ tin cậy khác nhau.',
      'được bảo hộ quyền tác giả và rất đáng tin cậy.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Thông tin số được bảo hộ quyền tác giả và có độ tin cậy khác nhau tùy vào nguồn gốc và tác giả.',
    hint: 'Được pháp luật bảo hộ quyền tác giả và có độ tin cậy đa dạng.'
  },
  {
    id: 'gk1-mcq-23',
    type: 'multiple_choice',
    question: 'Thông tin số có những đặc điểm chính là?',
    options: [
      'Thông tin số dễ dàng được nhân bản và lan truyền nhưng khó bị xóa bỏ hoàn toàn.',
      'Thông tin số có thể được truy cập từ xa nếu người quản lí thông tin đó cho phép.',
      'Cả A và B.',
      'Đáp án khác.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Thông tin số có đặc điểm nổi bật là dễ nhân bản lan truyền, khó xóa bỏ hoàn toàn và có thể truy cập từ xa.',
    hint: 'Hai đặc điểm cốt lõi của thông tin trên không gian mạng.'
  },
  {
    id: 'gk1-mcq-24',
    type: 'multiple_choice',
    question: 'Đặc điểm nào sau đây KHÔNG thuộc về thông tin số?',
    options: [
      'Nhiều người có thể truy cập đồng thời.',
      'Chỉ cho phép một người sử dụng tại một thời điểm.',
      'Có công cụ hỗ trợ tìm kiếm, xử lí, chuyển đổi hiệu quả.',
      'Có thể truy cập từ xa.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Thông tin số cho phép nhiều người cùng truy cập đồng thời, nên phương án "Chỉ cho phép một người sử dụng tại một thời điểm" là SAI.',
    hint: 'Thông tin số có tính chia sẻ cao, nhiều người dùng cùng lúc.'
  },
  {
    id: 'gk1-mcq-25',
    type: 'multiple_choice',
    question: 'Một số yếu tố nhận biết độ tin cậy của thông tin gồm:',
    options: [
      'tác giả, nguồn thông tin.',
      'mục đích, tính cập nhật của bài viết.',
      'trích dẫn nguồn thông tin trong bài viết.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Độ tin cậy được đánh giá qua tác giả/nguồn tin, mục đích bài viết, tính thời sự cập nhật và các trích dẫn chứng cứ.',
    hint: 'Tổng hợp tất cả các tiêu chí đánh giá khoa học.'
  },
  {
    id: 'gk1-mcq-26',
    type: 'multiple_choice',
    question: 'Thông tin đáng tin cậy giúp em điều gì?',
    options: [
      'Đưa ra kết luận đúng.',
      'Quyết định hành động đúng.',
      'Giải quyết được các vấn đề được đặt ra',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Thông tin đáng tin cậy giúp đưa ra kết luận đúng, hành động đúng và giải quyết vấn đề hiệu quả.',
    hint: 'Giúp ích toàn diện cho việc học tập và xử lý tình huống thực tế.'
  },
  {
    id: 'gk1-mcq-27',
    type: 'multiple_choice',
    question: 'Thông tin không đáng tin cậy có thể là?',
    options: [
      'Thông tin không trung thực, mang tính chất lừa dối.',
      'Thông tin đồn thổi, dẫn em đến kết luận thiếu căn cứ.',
      'Thông tin thiếu kiểm chứng dẫn em đến quyết định sai lầm.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Thông tin không tin cậy có thể lừa đảo, đồn thổi hoặc thiếu kiểm chứng gây ra hậu quả xấu.',
    hint: 'Cả ba dạng thông tin độc hại/sai lệch phổ biến.'
  },
  // Trang 6
  {
    id: 'gk1-mcq-28',
    type: 'multiple_choice',
    question: 'Xác định nguồn thông tin là gì?',
    options: [
      'Thẩm quyền và uy tín của tổ chức hay cá nhân cung cấp thông tin ảnh hưởng đến giá trị và độ tin cậy của thông tin.',
      'Những kết luận không có chứng cứ, cũng giống như những ý kiến mang tính chất cá nhân nên có độ tin cậy rất thấp.',
      'Cả A và B.'
    ],
    correctAnswer: 0, // A
    difficulty: 'trung_binh',
    explanation: 'Đáp án A: Xác định nguồn thông tin là xem xét thẩm quyền và uy tín của tổ chức/cá nhân phát hành thông tin.',
    hint: 'Gắn liền với thẩm quyền và uy tín của tác giả/cơ quan ban hành.'
  },
  {
    id: 'gk1-mcq-29',
    type: 'multiple_choice',
    question: 'Học sinh ở cuối năm học lớp 9 thường cần tìm hiểu thông tin tuyển sinh vào lớp 10. Giữa hai nguồn sau, thông tin nào đáng tin cậy hơn?',
    options: [
      'Internet.',
      'Thông báo chính thức của Sở Giáo dục và Đào tạo địa phương.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Thông báo chính thức của Sở GD&ĐT là cơ quan quản lý nhà nước có thẩm quyền cao nhất về kỳ thi tuyển sinh.',
    hint: 'Cơ quan quản lý nhà nước có thẩm quyền pháp lý chính thức.'
  },
  {
    id: 'gk1-mcq-30',
    type: 'multiple_choice',
    question: 'Theo em, trong hoạt động thường xuyên hằng ngày, các tổ chức (cơ quan, doanh nghiệp) sử dụng thông tin từ nguồn nào sau đây?',
    options: [
      'Từ kết quả tìm kiếm trên Internet.',
      'Từ một cá nhân nào đó trên mạng.',
      'Từ dữ liệu được thu thập và quản trị bởi các tổ chức đó.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Các cơ quan, doanh nghiệp chủ yếu dựa trên hệ thống cơ sở dữ liệu nội bộ được thu thập, xác thực và quản trị chuyên nghiệp.',
    hint: 'Hệ thống cơ sở dữ liệu nội bộ có độ chính xác và bảo mật cao.'
  },
  {
    id: 'gk1-mcq-31',
    type: 'multiple_choice',
    question: 'Để tìm hiểu về cách sử dụng một chiếc máy ảnh mới, nguồn thông tin nào sau đây cần được tham khảo nhất?',
    options: [
      'Hướng dẫn của một người đã từng chụp ảnh.',
      'Hướng dẫn sử dụng của nhà sản xuất.',
      'Hướng dẫn của một người giỏi Tin học.',
      'Câu trả lời trên một số diễn đàn về chụp ảnh.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Tài liệu hướng dẫn sử dụng chính thức của nhà sản xuất là nguồn chuẩn xác và đầy đủ nhất cho thiết bị.',
    hint: 'Nhà sản xuất là người thiết kế và hiểu rõ nhất sản phẩm của họ.'
  },
  {
    id: 'gk1-mcq-32',
    type: 'multiple_choice',
    question: 'Để tìm hiểu về một đội bóng đá ở châu Phi, nguồn thông tin nào sau đây đáng tin cậy nhất?',
    options: [
      'Nguồn tin từ câu lạc bộ người hâm mộ đội bóng đó.',
      'Nguồn tin từ câu lạc bộ của đội bóng đối thủ.',
      'Nguồn tin từ Liên đoàn bóng đá châu Phi.',
      'Nguồn tin từ diễn đàn bóng đá Việt Nam.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Liên đoàn bóng đá châu Phi (CAF) là cơ quan quản lý thể thao chính thức, khách quan và có thẩm quyền cao nhất.',
    hint: 'Cơ quan quản lý bóng đá chính thức của châu lục.'
  },
  {
    id: 'gk1-mcq-33',
    type: 'multiple_choice',
    question: 'Vì sao nói thời điểm công bố thông tin quan trọng?',
    options: [
      'vì nó đánh dấu một sự kiện xảy ra.',
      'vì nó cho biết thông tin đó có tin cậy hay không.',
      'Vì nó quyết định thông tin có còn ý nghĩa không hay đã trở nên lỗi thời.',
      'Đáp án khác.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Thời điểm công bố quyết định tính thời sự; thông tin quá hạn có thể không còn giá trị sử dụng hoặc đã bị thay đổi.',
    hint: 'Tính thời sự của thông tin (còn hiệu lực hay đã hết hạn).'
  },
  {
    id: 'gk1-mcq-34',
    type: 'multiple_choice',
    question: 'Thông tin trong những trường hợp nào sau đây là KHÔNG đáng tin cậy?',
    options: [
      'Thông tin trên website có tên miền là .gov.',
      'Bài viết của một cá nhân đăng tải trên mạng xã hội với mục đích bôi nhọ người khác.',
      'Bài viết hướng dẫn phòng tránh dịch bệnh trên trang web của cơ quan y tế.',
      'Bài viết trên tài khoản mạng xã hội của một nhà báo có uy tín và có trích dẫn nguồn thông tin từ trang web của Chính phủ.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Bài viết có mục đích xấu (bôi nhọ, công kích cá nhân) thường chứa đựng thông tin bóp méo, vu khống và không có kiểm chứng.',
    hint: 'Mục đích bôi nhọ phản ánh động cơ xấu, thiếu khách quan.'
  },
  // Trang 7
  {
    id: 'gk1-mcq-35',
    type: 'multiple_choice',
    question: 'Điền vào chỗ (...):\n"Pháp luật quy định rõ những hành vi nào là ......................... pháp luật, những hành vi nào bị cấm. Những hành vi khác không phù hợp với truyền thống tốt đẹp, lợi ích chung của cộng đồng hay ..................... được gọi là hành vi thiếu văn hóa, ..........................."',
    options: [
      'vi phạm đạo đức / xã hội / vi phạm.',
      'xã hội / vi phạm đạo đức / vi phạm.',
      'vi phạm / vi phạm đạo đức / xã hội.',
      'vi phạm / xã hội / vi phạm đạo đức.'
    ],
    correctAnswer: 3, // D
    difficulty: 'trung_binh',
    explanation: 'Đáp án D: Điền chuẩn: "vi phạm" pháp luật -> lợi ích của cộng đồng hay "xã hội" -> hành vi thiếu văn hóa, "vi phạm đạo đức".',
    hint: 'Pháp luật thì "vi phạm"; cộng đồng hay "xã hội"; thiếu văn hóa, "vi phạm đạo đức".'
  },
  {
    id: 'gk1-mcq-36',
    type: 'multiple_choice',
    question: 'Những hành vi nào là biểu hiện vi phạm khi sử dụng công nghệ kĩ thuật số?',
    options: [
      'Quay phim trong rạp chiếu phim.',
      'Chụp ảnh ở nơi không cho phép.',
      'Ghi âm trái phép các cuộc nói chuyện.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Cả ba hành vi trên đều xâm phạm quyền riêng tư và bản quyền tác phẩm nghệ thuật, vi phạm nội quy và pháp luật.',
    hint: 'Đều là các hành vi bị nghiêm cấm khi sử dụng thiết bị số.'
  },
  {
    id: 'gk1-mcq-37',
    type: 'multiple_choice',
    question: 'Hành động nào sau đây KHÔNG vi phạm đạo đức và pháp luật?',
    options: [
      'Đăng tải thông tin sai sự thật lên mạng.',
      'Cố ý nghe, ghi âm trái phép các cuộc nói chuyện.',
      'Tặng đĩa nhạc có bản quyền em đã mua cho người khác.',
      'Tải một bài trình chiếu của người khác từ Internet và sử dụng như là của mình tạo ra.'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Tặng sản phẩm bản quyền vật lý chính hãng mà mình đã mua hợp pháp cho bạn bè là quyền sở hữu cá nhân, không vi phạm.',
    hint: 'Tặng lại đĩa nhạc chính hãng đã mua hợp pháp là hoàn toàn đúng luật.'
  },
  {
    id: 'gk1-mcq-38',
    type: 'multiple_choice',
    question: 'Những lưu ý để tránh các vi phạm khi sử dụng công nghệ kĩ thuật số là?',
    options: [
      'Tìm hiểu thông tin, trang bị cho mình những kiến thức cần thiết.',
      'Chỉ sử dụng những sản phẩm số khi có sự cho phép của tác giả hoặc có bản quyền sử dụng.',
      'Hầu hết thông tin trên Internet là có bản quyền.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Học sinh cần trang bị kiến thức, xin phép tác giả khi sử dụng và ý thức được rằng đa số sản phẩm trên mạng đều có bản quyền.',
    hint: 'Gồm cả kiến thức, ý thức tôn trọng tác quyền và sự cẩn trọng.'
  },
  {
    id: 'gk1-mcq-39',
    type: 'multiple_choice',
    question: 'Thế nào là vi phạm bản quyền?',
    options: [
      'Mua sản phẩm có dấu bản quyền của tác giả tại các cửa hàng uy tín.',
      'Là vi phạm quyền của tác giả đối với tác phẩm.',
      'Cả A và B.',
      'Đáp án khác.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Vi phạm bản quyền là hành vi xâm phạm các quyền nhân thân hoặc quyền tài sản của tác giả đối với tác phẩm.',
    hint: 'Xâm phạm quyền của tác giả đối với công sức sáng tạo của họ.'
  },
  {
    id: 'gk1-mcq-40',
    type: 'multiple_choice',
    question: 'Đâu là sản phẩm số?',
    options: [
      'Truyện tự sáng tác đưa lên mạng.',
      'Tạo một Trò chơi điện tử.',
      'Bài đăng trên mạng xã hội, diễn đàn.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Tất cả các nội dung tạo ra và lưu trữ dưới dạng số (bài viết, trò chơi, truyện online) đều là sản phẩm số.',
    hint: 'Bao gồm bất kỳ sản phẩm sáng tạo nào được số hóa.'
  },
  {
    id: 'gk1-mcq-41',
    type: 'multiple_choice',
    question: 'Mục đích của việc sáng tạo và sử dụng sản phẩm số là gì?',
    options: [
      'Tăng tính cạnh tranh của thị trường các nước.',
      'Phục vụ nhu cầu cá nhân của mỗi người.',
      'Làm cho xã hội và mỗi người trở nên tốt đẹp hơn, biết ứng xử lễ phép, lịch sự, tôn trọng danh dự của mình và người khác.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Sản phẩm số nhằm phát triển kinh tế, đáp ứng nhu cầu cá nhân và xây dựng xã hội văn minh, tốt đẹp hơn.',
    hint: 'Bao gồm cả giá trị kinh tế, cá nhân và văn hóa - xã hội.'
  },
  // Trang 8
  {
    id: 'gk1-mcq-42',
    type: 'multiple_choice',
    question: 'Những hành vi nào KHÔNG NÊN LÀM khi sử dụng công nghệ kĩ thuật số?',
    options: [
      'Liên tục sử dụng điện thoại khi đang gặp gỡ, trao đổi trực tiếp với người khác.',
      'Nói chuyện qua điện thoại trong phòng đọc của thư viện, rạp chiếu phim.',
      'Lén thu âm cuộc trao đổi trực tiếp hoặc qua điện thoại.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Cả 3 hành vi đều thể hiện sự thiếu văn hóa, làm phiền người xung quanh hoặc vi phạm quyền riêng tư bí mật đời tư.',
    hint: 'Tất cả đều là hành vi ứng xử kém văn minh nơi công cộng.'
  },
  {
    id: 'gk1-mcq-43',
    type: 'multiple_choice',
    question: 'Những hành vi nào NÊN LÀM khi sử dụng công nghệ kĩ thuật số?',
    options: [
      'Trong lớp học trực tuyến, một số học sinh tạo nhóm Zalo để trao đổi đáp án khi làm bài kiểm tra.',
      'Chuyển sang chế độ im lặng hoặc tắt điện thoại khi đang ở trong lớp học, buổi học, ...',
      'Cả A và B.'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Tắt chuông hoặc để chế độ im lặng trong lớp học là hành vi chuẩn mực; tạo nhóm gian lận thi cử (A) là hành vi sai trái.',
    hint: 'Tôn trọng giờ học của thầy cô và các bạn.'
  },
  {
    id: 'gk1-mcq-44',
    type: 'multiple_choice',
    question: 'Em hãy xác định hành động nào là vi phạm đạo đức, pháp luật và văn hóa khi sử dụng công nghệ kĩ thuật số?',
    options: [
      'Chia sẻ thông tin mua bán động vật hoang dã quý hiếm.',
      'Quay và lan truyền video bạo lực học đường.',
      'Tham gia cá cược bóng đá qua Internet.',
      'Cả 3 đáp án trên.'
    ],
    correctAnswer: 3, // D
    difficulty: 'de',
    explanation: 'Đáp án D: Cả 3 hành vi đều vi phạm nghiêm trọng pháp luật Việt Nam và đạo đức cộng đồng.',
    hint: 'Động vật quý hiếm, bạo lực học đường, cờ bạc cá độ đều là hành vi phạm pháp.'
  },
  {
    id: 'gk1-mcq-45',
    type: 'multiple_choice',
    question: 'Hãy chỉ ra những hành vi vi phạm bản quyền trong các tình huống dưới đây:\nA. Bình lấy sơ đồ tóm tắt bài học trên mạng, tự ghi tên mình là tác giả trên sơ đồ đó rồi gửi cho các bạn trong lớp tham khảo.\nB. Sau khi mua được cuốn sách Tin học mới xuất bản, Lan dùng điện thoại thông minh chụp ảnh các trang sách và gửi cho các bạn đọc.',
    options: [
      'Chỉ tình huống A.',
      'Chỉ tình huống B.',
      'Cả A và B.',
      'Cả hai đều không vi phạm.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Cả Bình (mạo nhận quyền tác giả) và Lan (sao chép phát tán tài liệu in ấn trái phép) đều vi phạm luật bản quyền.',
    hint: 'Nhận tác phẩm của người khác là của mình hoặc tự ý sao chép phát tán đều vi phạm.'
  },
  {
    id: 'gk1-mcq-46',
    type: 'multiple_choice',
    question: 'Em đồng ý, không đồng ý hay đồng ý một phần với ý kiến sau: "Chúng ta có thể sử dụng điện thoại di động khi đang lái xe miễn là không gây tai nạn giao thông"?',
    options: ['Đồng ý.', 'Không đồng ý.', 'Đồng ý một phần.'],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Không đồng ý. Luật Giao thông đường bộ nghiêm cấm việc dùng điện thoại khi điều khiển phương tiện vì làm mất tập trung và có nguy cơ gây tai nạn bất cứ lúc nào.',
    hint: 'Sử dụng điện thoại khi lái xe là hành vi bị pháp luật giao thông nghiêm cấm.'
  },
  {
    id: 'gk1-mcq-47',
    type: 'multiple_choice',
    question: 'Đâu là hành vi KHÔNG có đạo đức, văn hóa khi sử dụng công nghệ kĩ thuật số?',
    options: [
      'Sử dụng tai nghe khi nghe ca nhạc, xem phim, chơi trò chơi điện tử ở nơi có nhiều người.',
      'Luôn cố gắng trả lời tin nhắn sớm nhất có thể.',
      'Chúng ta có thể tùy ý sử dụng bất kì hình ảnh, âm thanh nào để làm màn hình nền, nhạc chờ, nhạc chuông cho điện thoại của bản mình mà không quan tâm bản quyền.',
      'Nên nói xin phép, xin lỗi khi phải dừng trao đổi với bạn để nghe điện thoại.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Tùy tiện khai thác âm thanh, hình ảnh không có bản quyền là thiếu tôn trọng quyền sở hữu trí tuệ.',
    hint: 'Tùy ý sử dụng không cần bản quyền là sai quy định.'
  },
  // Trang 9
  {
    id: 'gk1-mcq-48',
    type: 'multiple_choice',
    question: 'Tình huống: Vân mua cuốn sách các bài văn hay trong hiệu sách. Vân chụp một bài văn gửi cho Long. Long dùng Word gõ lại, chỉnh sửa cắt xén rồi nộp cho cô giáo chấm điểm. Hành vi vi phạm bản quyền, vi phạm đạo đức ở đây là gì?',
    options: [
      'Vân chụp một bài văn trong cuốn sách và gửi cho Long.',
      'Long sử dụng phần mềm để gõ lại, cắt xén và coi như đó là bài văn của mình.',
      'Cả A và B.',
      'Không có ai vi phạm.'
    ],
    correctAnswer: 2, // C
    difficulty: 'trung_binh',
    explanation: 'Đáp án C: Vân vi phạm việc sao chép tác phẩm trái phép; Long vi phạm nghiêm trọng đạo đức học tập và bản quyền khi đạo văn làm bài của mình.',
    hint: 'Cả hai bạn đều có hành vi sai trái trong tình huống này.'
  },
  {
    id: 'gk1-mcq-49',
    type: 'multiple_choice',
    question: 'Tình huống nào dưới đây là vi phạm quy định pháp luật?',
    options: [
      'Phong chụp ảnh Lan đang đùa nghịch với tư thế không đẹp mắt. Phong chia sẻ bức ảnh lên mạng xã hội làm Lan xấu hổ và không dám đến trường.',
      'Mua một phần mềm diệt virus và cài trong máy tính cá nhân của mình.',
      'Sáng tác một bài thơ về lớp và gửi các bạn cùng đọc.',
      'Tạo một trang cá nhân để chia sẻ những kinh nghiệm học tập của mình.'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Hành vi phát tán hình ảnh riêng tư nhằm làm nhục, xúc phạm danh dự nhân phẩm người khác là hành vi vi phạm Luật An ninh mạng và Bộ luật Dân sự.',
    hint: 'Xúc phạm danh dự, nhân phẩm của người khác trên mạng xã hội.'
  },
  {
    id: 'gk1-mcq-50',
    type: 'multiple_choice',
    question: 'Nguồn nào sau đây là nguồn thông tin số?',
    options: [
      'Sách in',
      'Báo giấy',
      'Trang web của Bộ Giáo dục và Đào tạo',
      'Bảng thông báo ở trường'
    ],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Trang web của Bộ GD&ĐT (moet.gov.vn) lưu trữ và phân phối thông tin dưới dạng dữ liệu điện tử/số.',
    hint: 'Website trên mạng Internet là nguồn thông tin số điển hình.'
  },
  {
    id: 'gk1-mcq-51',
    type: 'multiple_choice',
    question: 'Công cụ tìm kiếm thông tin phổ biến nhất hiện nay là:',
    options: ['Facebook', 'Zalo', 'Google', 'Wikipedia'],
    correctAnswer: 2, // C
    difficulty: 'de',
    explanation: 'Đáp án C: Google Search là máy tìm kiếm phổ biến và thông dụng nhất trên toàn thế giới.',
    hint: 'Máy tìm kiếm (Search Engine) phổ biến nhất.'
  },
  {
    id: 'gk1-mcq-52',
    type: 'multiple_choice',
    question: 'Khi tìm kiếm thông tin trên Internet, việc sử dụng "từ khóa" giúp:',
    options: [
      'Giảm tốc độ tìm kiếm',
      'Tăng tính chính xác và nhanh chóng',
      'Giấu thông tin thật',
      'Xóa dữ liệu'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Lựa chọn từ khóa chuẩn xác giúp máy tìm kiếm lọc đúng nội dung cần tìm một cách nhanh chóng.',
    hint: 'Tìm đúng nội dung và tiết kiệm thời gian.'
  },
  {
    id: 'gk1-mcq-53',
    type: 'multiple_choice',
    question: 'Từ khóa tìm kiếm nên có đặc điểm nào sau đây?',
    options: [
      'Ngắn gọn, rõ ràng, liên quan chủ đề',
      'Dài dòng và có nhiều dấu câu',
      'Viết sai chính tả',
      'Dùng toàn bộ đoạn văn'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Từ khóa hiệu quả cần súc tích, ngắn gọn, chứa các từ ngữ then chốt liên quan mật thiết đến chủ đề.',
    hint: 'Ngắn gọn, then chốt, đúng trọng tâm.'
  },
  {
    id: 'gk1-mcq-54',
    type: 'multiple_choice',
    question: 'Đâu là yếu tố cần xem xét khi đánh giá độ tin cậy của trang web?',
    options: [
      'Màu sắc đẹp',
      'Nguồn xuất bản, tác giả, thời gian cập nhật',
      'Có nhiều hình ảnh',
      'Có nhiều quảng cáo'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Độ tin cậy dựa trên uy tín cơ quan xuất bản, trình độ tác giả và thời gian công bố thông tin gần nhất.',
    hint: 'Uy tín của tác giả, nơi xuất bản và tính cập nhật.'
  },
  {
    id: 'gk1-mcq-55',
    type: 'multiple_choice',
    question: 'Khi lấy thông tin, tài liệu tham khảo trên mạng để làm bài tập, ta cần:',
    options: [
      'Sao chép và đăng lại tùy ý',
      'Ghi rõ nguồn trích dẫn',
      'Sửa nội dung gốc',
      'Không cần ghi nguồn'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Luôn ghi rõ nguồn trích dẫn tác giả và đường liên kết để tôn trọng bản quyền và đảm bảo tính học thuật trung thực.',
    hint: 'Thể hiện sự trung thực và tôn trọng công sức tác giả.'
  },
  // Trang 10
  {
    id: 'gk1-mcq-56',
    type: 'multiple_choice',
    question: 'Hành động nào thể hiện vi phạm bản quyền thông tin số?',
    options: [
      'Tự viết bài đăng',
      'Sao chép nguyên văn mà không ghi nguồn',
      'Dẫn nguồn đầy đủ',
      'Dẫn liên kết trang web'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Sao chép nguyên văn tác phẩm của người khác mà không dẫn nguồn là hành vi đạo văn, vi phạm bản quyền.',
    hint: 'Copy bài người khác mà không ghi tên tác giả.'
  },
  {
    id: 'gk1-mcq-57',
    type: 'multiple_choice',
    question: 'Khi kết quả tìm kiếm trả về có quá nhiều thông tin không đúng trọng tâm, ta nên:',
    options: [
      'Đọc tất cả',
      'Bổ sung hoặc thay đổi từ khóa',
      'Ngừng tìm kiếm',
      'Mở tất cả liên kết'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Thu hẹp phạm vi bằng cách bổ sung thêm từ khóa chi tiết hơn hoặc thay đổi cụm từ khóa đồng nghĩa.',
    hint: 'Tinh chỉnh từ khóa tìm kiếm cho chính xác hơn.'
  },
  {
    id: 'gk1-mcq-58',
    type: 'multiple_choice',
    question: 'Trang web có phần mở rộng tên miền nào thường là của các tổ chức giáo dục đáng tin cậy tại Việt Nam?',
    options: ['.com', '.edu.vn', '.net', '.tv'],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Tên miền .edu.vn (Education VietNam) được cấp riêng cho các cơ sở giáo dục và đào tạo được nhà nước công nhận.',
    hint: 'Viết tắt của education (giáo dục) tại Việt Nam.'
  },
  {
    id: 'gk1-mcq-59',
    type: 'multiple_choice',
    question: 'Mục đích chính của việc khai thác thông tin số trong môn Tin học 8 là:',
    options: [
      'Giải trí',
      'Sử dụng thông tin phục vụ học tập, đời sống',
      'Sao chép bài viết',
      'Lưu trữ dữ liệu cá nhân'
    ],
    correctAnswer: 1, // B
    difficulty: 'de',
    explanation: 'Đáp án B: Khai thác thông tin số có mục tiêu cốt lõi là phục vụ cho học tập, nghiên cứu và nâng cao chất lượng đời sống.',
    hint: 'Phục vụ đắc lực cho công việc, học hành và hiểu biết.'
  },
  {
    id: 'gk1-mcq-60',
    type: 'multiple_choice',
    question: 'Để tìm kiếm thông tin chính xác theo đúng cụm từ khóa trên Google, ta có thể đặt cụm từ trong:',
    options: [
      'Dấu ngoặc kép (“ ”)',
      'Dấu ngoặc đơn ( )',
      'Dấu ngoặc nhọn { }',
      'Dấu gạch dưới _'
    ],
    correctAnswer: 0, // A
    difficulty: 'de',
    explanation: 'Đáp án A: Cú pháp đặt cụm từ trong dấu ngoặc kép "" yêu cầu máy tìm kiếm trả về đúng thứ tự các từ trong cụm.',
    hint: 'Cặp dấu " " dùng để tìm kiếm chính xác nguyên văn.'
  }
];

/**
 * BỘ CÂU HỎI ĐIỀN KHUYẾT (FILL IN THE BLANKS)
 * Xây dựng trực tiếp từ nội dung cốt lõi của đề cương ôn tập Tin học 8
 */
export const GRADE_8_FILL_BLANK_QUESTIONS: Question[] = [
  {
    id: 'gk1-blank-1',
    type: 'fill_blank',
    question: 'Ý tưởng cơ giới hóa việc tính toán đóng vai trò quan trọng trong lịch sử phát triển của [1]. Năm 1642, nhà bác học Blaise Pascal đã sáng chế ra [2] Pascaline.',
    blankAnswers: ['máy tính', 'chiếc máy tính cơ khí'],
    wordBank: [
      'máy tính',
      'chiếc máy tính cơ khí',
      'bàn phím số',
      'máy tính điện tử',
      'thước logarit',
      'chương trình'
    ],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'SGK Tin học 8 KNTT Trang 5: Ý tưởng cơ giới hóa việc tính toán là nền móng phát triển của máy tính. Chiếc máy Pascaline do Pascal sáng chế năm 1642 là chiếc máy tính cơ khí đầu tiên.',
    hint: 'Vị trí 1: thiết bị công nghệ; Vị trí 2: tên gọi thể loại của chiếc máy Pascaline.'
  },
  {
    id: 'gk1-blank-2',
    type: 'fill_blank',
    question: 'Pháp luật quy định rõ những hành vi nào là [1] pháp luật, những hành vi nào bị cấm. Những hành vi khác không phù hợp với truyền thống tốt đẹp, lợi ích chung của cộng đồng hay [2] được gọi là hành vi thiếu văn hóa, [3].',
    blankAnswers: ['vi phạm', 'xã hội', 'vi phạm đạo đức'],
    wordBank: [
      'vi phạm',
      'xã hội',
      'vi phạm đạo đức',
      'quy định',
      'công nghệ',
      'gia đình',
      'văn minh'
    ],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 8 KNTT Trang 17: Phân định rõ giữa hành vi vi phạm pháp luật và các hành vi vi phạm chuẩn mực văn hóa, đạo đức xã hội khi dùng thiết bị số.',
    hint: 'Pháp luật -> vi phạm; cộng đồng hay... -> xã hội; thiếu văn hóa -> vi phạm đạo đức.'
  },
  {
    id: 'gk1-blank-3',
    type: 'fill_blank',
    question: 'Thông tin số có đặc điểm chính: dễ dàng được [1] và lan truyền nhưng khó bị [2]. Thông tin số có thể được [3] nếu người quản lí thông tin đó cho phép.',
    blankAnswers: ['nhân bản', 'xóa bỏ hoàn toàn', 'truy cập từ xa'],
    wordBank: [
      'nhân bản',
      'xóa bỏ hoàn toàn',
      'truy cập từ xa',
      'bảo mật',
      'chỉnh sửa',
      'in ra giấy'
    ],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 8 KNTT Trang 11: Đặc điểm cơ bản của thông tin số là dễ sao chép nhân bản, khó xóa bỏ triệt để trên mạng và hỗ trợ truy cập từ xa qua Internet.',
    hint: 'Nhân bản nhanh chóng; dấu vết số khó xóa hết; xem tài liệu từ bất cứ đâu.'
  },
  {
    id: 'gk1-blank-4',
    type: 'fill_blank',
    question: 'Tiến trình 5 thế hệ máy tính điện tử: Thế hệ thứ nhất sử dụng [1]; Thế hệ thứ hai sử dụng [2]; Thế hệ thứ ba sử dụng [3]; Thế hệ thứ tư sử dụng [4]; Thế hệ thứ năm hướng tới [5].',
    blankAnswers: [
      'Đèn điện tử chân không',
      'Bóng bán dẫn (Transistor)',
      'Mạch tích hợp (IC)',
      'Bộ vi xử lý (VLSI)',
      'Trí tuệ nhân tạo (AI)'
    ],
    wordBank: [
      'Đèn điện tử chân không',
      'Bóng bán dẫn (Transistor)',
      'Mạch tích hợp (IC)',
      'Bộ vi xử lý (VLSI)',
      'Trí tuệ nhân tạo (AI)',
      'Thẻ đục lỗ',
      'Trống từ',
      'Bánh răng cơ học'
    ],
    options: [],
    correctAnswer: 0,
    difficulty: 'kho',
    explanation: 'SGK Tin học 8 KNTT Trang 7-8: Bảng 5 thế hệ máy tính điện tử tương ứng với 5 cột mốc linh kiện công nghệ cốt lõi.',
    hint: 'Từ bóng chân không to lớn -> bán dẫn -> IC -> chip vi xử lý -> AI.'
  },
  {
    id: 'gk1-blank-5',
    type: 'fill_blank',
    question: 'Khi tìm kiếm thông tin bằng Google, muốn tìm cụm từ chính xác ta đặt trong [1]. Để tìm tài liệu của các cơ quan nhà nước uy tín ta ưu tiên tên miền có đuôi [2], còn của các trường học và tổ chức giáo dục là đuôi [3].',
    blankAnswers: ['dấu ngoặc kép (“ ”)', '.gov.vn', '.edu.vn'],
    wordBank: [
      'dấu ngoặc kép (“ ”)',
      '.gov.vn',
      '.edu.vn',
      '.com',
      'dấu ngoặc đơn',
      '.org',
      'dấu thăng #'
    ],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'SGK Tin học 8 KNTT Bài 3: Sử dụng cặp dấu ngoặc kép "" để tìm chính xác cụm từ; đuôi .gov.vn của chính phủ, .edu.vn của giáo dục.',
    hint: 'Tìm chính xác dùng " "; cơ quan chính phủ gov; giáo dục edu.'
  }
];

/**
 * BỘ CÂU HỎI GHÉP NỐI CỘT (MATCHING COLUMNS)
 * Xây dựng trực tiếp từ Câu 18 và các bảng tổng hợp trong tài liệu ôn tập
 */
export const GRADE_8_MATCHING_QUESTIONS: Question[] = [
  {
    id: 'gk1-match-1',
    type: 'matching',
    question: 'Câu 18 (Đề cương): Hãy ghép nối mỗi lĩnh vực ở Cột A với ví dụ ứng dụng công nghệ số phù hợp ở Cột B:',
    matchingLeft: [
      { id: '1', text: '1) Giáo dục' },
      { id: '2', text: '2) Văn hóa' },
      { id: '3', text: '3) Giao thông' },
      { id: '4', text: '4) Y tế' },
      { id: '5', text: '5) Giải trí' },
      { id: '6', text: '6) Du lịch' },
      { id: '7', text: '7) Thương mại' }
    ],
    matchingRight: [
      { id: 'a', text: 'Giao tiếp, chia sẻ, tham gia các hoạt động cộng đồng trên mạng' },
      { id: 'b', text: 'Dạy học trực tuyến, thi trực tuyến qua máy tính' },
      { id: 'c', text: 'Khám bệnh trực tuyến, quản lý bệnh án điện tử' },
      { id: 'd', text: 'Ứng dụng đặt xe, taxi công nghệ, bản đồ dẫn đường GPS' },
      { id: 'e', text: 'Mua bán trực tuyến qua sàn thương mại điện tử, thanh toán quét mã QR' },
      { id: 'f', text: 'Du lịch trực tuyến, tham quan bảo tàng ảo 3D' },
      { id: 'g', text: 'Xem phim, nghe nhạc, chơi game trực tuyến' }
    ],
    correctMatches: {
      '1': 'b',
      '2': 'a',
      '3': 'd',
      '4': 'c',
      '5': 'g',
      '6': 'f',
      '7': 'e'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'Đáp án chuẩn Câu 18 Đề cương ôn tập: 1-b (Giáo dục - Dạy học trực tuyến); 2-a (Văn hóa - Giao tiếp cộng đồng); 3-d (Giao thông - Taxi công nghệ); 4-c (Y tế - Khám trực tuyến); 5-g (Giải trí - Xem phim, chơi game); 6-f (Du lịch - Du lịch trực tuyến); 7-e (Thương mại - Mua bán trực tuyến).',
    hint: 'Nhấp một lĩnh vực bên trái rồi chọn ví dụ tương ứng bên phải.'
  },
  {
    id: 'gk1-match-2',
    type: 'matching',
    question: 'Hãy ghép nối từng Thế hệ máy tính điện tử với mốc thời gian và linh kiện cốt lõi:',
    matchingLeft: [
      { id: 'th1', text: 'Thế hệ thứ nhất (1945 – 1955)' },
      { id: 'th2', text: 'Thế hệ thứ hai (1955 – 1965)' },
      { id: 'th3', text: 'Thế hệ thứ ba (1965 – 1974)' },
      { id: 'th4', text: 'Thế hệ thứ tư (1974 – 1990)' },
      { id: 'th5', text: 'Thế hệ thứ năm (1990 – nay)' }
    ],
    matchingRight: [
      { id: 'lk1', text: 'Đèn điện tử chân không, kích thước chiếm trọn căn phòng (máy ENIAC)' },
      { id: 'lk2', text: 'Bóng bán dẫn (Transistor), kích thước giảm và ít tốn điện hơn' },
      { id: 'lk3', text: 'Mạch tích hợp (IC), xuất hiện máy tính mini và bàn phím, màn hình' },
      { id: 'lk4', text: 'Vi mạch tích hợp quy mô lớn (VLSI), khai sinh máy tính cá nhân PC' },
      { id: 'lk5', text: 'Mạch tích hợp siêu lớn (ULSI), mạng Internet và Trí tuệ nhân tạo (AI)' }
    ],
    correctMatches: {
      th1: 'lk1',
      th2: 'lk2',
      th3: 'lk3',
      th4: 'lk4',
      th5: 'lk5'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 8 KNTT Trang 7-8: Quá trình phát triển phần cứng qua 5 thế hệ từ đèn điện tử đến vi xử lý thông minh tích hợp AI.',
    hint: 'Thế hệ 1: Đèn chân không; 2: Bóng bán dẫn; 3: IC; 4: VLSI/PC; 5: ULSI/AI.'
  },
  {
    id: 'gk1-match-3',
    type: 'matching',
    question: 'Hãy ghép nối Nhà phát minh khoa học với cống hiến lịch sử tiêu biểu (SGK Tin học 8):',
    matchingLeft: [
      { id: 'p1', text: 'Blaise Pascal (1642)' },
      { id: 'p2', text: 'Gottfried Leibniz' },
      { id: 'p3', text: 'Charles Babbage (1833)' },
      { id: 'p4', text: 'Howard Aiken (1943)' },
      { id: 'p5', text: 'John Von Neumann (1945)' }
    ],
    matchingRight: [
      { id: 'c1', text: 'Sáng chế máy tính cơ khí Pascaline dùng bánh răng để giúp cha tính thuế' },
      { id: 'c2', text: 'Cải tiến máy tính cơ khí thực hiện được cả 4 phép tính: cộng, trừ, nhân, chia' },
      { id: 'c3', text: 'Thiết kế máy tính cơ khí đa năng, được coi là cha đẻ của công nghệ máy tính' },
      { id: 'c4', text: 'Chế tạo máy tính điều khiển tuần tự tự động ASCC (Harvard Mark I)' },
      { id: 'c5', text: 'Đưa ra nguyên lý máy tính có "chương trình được lưu trữ" trong bộ nhớ' }
    ],
    correctMatches: {
      p1: 'c1',
      p2: 'c2',
      p3: 'c3',
      p4: 'c4',
      p5: 'c5'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 8 KNTT Trang 5-7: 5 nhà khoa học đặt nền móng vĩ đại cho công nghệ máy tính thế giới.',
    hint: 'Pascal: Pascaline; Leibniz: 4 phép tính; Babbage: đa năng; Aiken: Mark I; Von Neumann: lưu trữ chương trình.'
  },
  {
    id: 'gk1-match-4',
    type: 'matching',
    question: 'Hãy ghép nối từng Tình huống thực tế với Đánh giá pháp luật và đạo đức:',
    matchingLeft: [
      { id: 'th1', text: 'Dùng điện thoại livestream trực tiếp bộ phim đang chiếu trong rạp' },
      { id: 'th2', text: 'Chụp lại bài văn trong sách rồi gõ lại, nộp bài nhận là của mình' },
      { id: 'th3', text: 'Chia sẻ thông tin mua bán động vật hoang dã quý hiếm' },
      { id: 'th4', text: 'Tắt chuông hoặc để chế độ im lặng khi bước vào lớp học' },
      { id: 'th5', text: 'Tặng đĩa nhạc chính hãng có bản quyền mình đã mua cho bạn thân' }
    ],
    matchingRight: [
      { id: 'dg1', text: 'Hành vi vi phạm bản quyền tác phẩm điện ảnh, bị cấm trong rạp' },
      { id: 'dg2', text: 'Hành vi vi phạm bản quyền và đạo đức học tập (đạo văn)' },
      { id: 'dg3', text: 'Hành vi vi phạm pháp luật hình sự về bảo vệ động vật hoang dã' },
      { id: 'dg4', text: 'Hành vi có văn hóa, văn minh và tôn trọng môi trường học đường' },
      { id: 'dg5', text: 'Hành vi hoàn toàn hợp pháp và phù hợp đạo đức' }
    ],
    correctMatches: {
      th1: 'dg1',
      th2: 'dg2',
      th3: 'dg3',
      th4: 'dg4',
      th5: 'dg5'
    },
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đề cương Tin 8: Phân biệt rõ các hành vi đúng chuẩn mực văn hóa, hợp pháp với các hành vi xâm phạm quyền tác giả hoặc vi phạm pháp luật.',
    hint: 'Livestream rạp phim vi phạm bản quyền; tắt chuông lớp học là văn hóa tốt.'
  }
];

/**
 * BỘ CÂU HỎI KÉO THẢ SẮP XẾP THỨ TỰ (DRAG & DROP ORDERING)
 */
export const GRADE_8_DRAG_DROP_QUESTIONS: Question[] = [
  {
    id: 'gk1-order-1',
    type: 'drag_drop_order',
    question: 'Hãy kéo thả để sắp xếp các công cụ tính toán theo đúng tiến trình lịch sử phát triển từ xưa đến nay:',
    orderItems: [
      { id: 'it-1', text: 'Bàn tính hạt thủ công sơ khai (hàng nghìn năm trước)' },
      { id: 'it-2', text: 'Chiếc máy tính cơ khí Pascaline của Blaise Pascal (năm 1642)' },
      { id: 'it-3', text: 'Máy tính cơ khí đa năng của Charles Babbage (năm 1833)' },
      { id: 'it-4', text: 'Chiếc máy tính điện tử đa năng đầu tiên ENIAC (năm 1945)' },
      { id: 'it-5', text: 'Máy tính cá nhân (PC) sử dụng chip vi xử lý VLSI (năm 1974)' },
      { id: 'it-6', text: 'Máy tính thông minh kết nối toàn cầu tích hợp Trí tuệ nhân tạo (AI)' }
    ],
    correctOrder: ['it-1', 'it-2', 'it-3', 'it-4', 'it-5', 'it-6'],
    options: [],
    correctAnswer: 0,
    difficulty: 'trung_binh',
    explanation: 'SGK Tin học 8 KNTT Trang 5-8: Trình tự tiến hóa từ bàn tính cổ đại -> máy cơ học Pascaline -> máy Babbage -> máy điện tử ENIAC -> máy cá nhân PC -> máy tính thông minh AI.',
    hint: 'Sắp xếp theo thứ tự mốc năm tăng dần từ cổ đại đến hiện đại.'
  },
  {
    id: 'gk1-order-2',
    type: 'drag_drop_order',
    question: 'Hãy kéo thả sắp xếp quy trình 5 bước xác định và đánh giá độ tin cậy của một thông tin trên Internet:',
    orderItems: [
      { id: 'st-1', text: 'Bước 1: Xác định nguồn thông tin, tác giả và cơ quan công bố (thẩm quyền, uy tín)' },
      { id: 'st-2', text: 'Bước 2: Phân biệt rõ đâu là sự kiện khách quan, đâu là ý kiến nhận xét chủ quan' },
      { id: 'st-3', text: 'Bước 3: Kiểm tra các dẫn chứng, số liệu và cơ sở của kết luận được đưa ra' },
      { id: 'st-4', text: 'Bước 4: Đánh giá tính thời sự, thời điểm công bố có còn cập nhật hay đã lỗi thời' },
      { id: 'st-5', text: 'Bước 5: Rút ra kết luận và quyết định có sử dụng thông tin đó hay không' }
    ],
    correctOrder: ['st-1', 'st-2', 'st-3', 'st-4', 'st-5'],
    options: [],
    correctAnswer: 0,
    difficulty: 'kho',
    explanation: 'SGK Tin học 8 KNTT Bài 2 & Bài 3: Phương pháp khoa học thẩm định thông tin số qua 5 bước logic.',
    hint: 'Kiểm tra nguồn -> phân tích sự kiện -> kiểm tra chứng cứ -> kiểm tra ngày tháng -> quyết định.'
  },
  {
    id: 'gk1-order-3',
    type: 'drag_drop_order',
    question: 'Hãy sắp xếp các mốc thời gian của 5 thế hệ máy tính điện tử theo trình tự tăng dần:',
    orderItems: [
      { id: 'gen-1', text: '1945 – 1955: Thế hệ thứ nhất (Đèn điện tử chân không)' },
      { id: 'gen-2', text: '1955 – 1965: Thế hệ thứ hai (Bóng bán dẫn Transistor)' },
      { id: 'gen-3', text: '1965 – 1974: Thế hệ thứ ba (Mạch tích hợp IC)' },
      { id: 'gen-4', text: '1974 – 1990: Thế hệ thứ tư (Vi mạch VLSI, máy tính cá nhân)' },
      { id: 'gen-5', text: '1990 – nay: Thế hệ thứ năm (Mạch ULSI, Internet, Trí tuệ nhân tạo AI)' }
    ],
    correctOrder: ['gen-1', 'gen-2', 'gen-3', 'gen-4', 'gen-5'],
    options: [],
    correctAnswer: 0,
    difficulty: 'de',
    explanation: 'Đề cương câu 12-16: 5 thế hệ diễn ra liên tục từ 1945-1955, 1955-1965, 1965-1974, 1974-1990, 1990-nay.',
    hint: 'Từ 1945 đến nay qua 5 giai đoạn liên tiếp.'
  }
];

/**
 * 7 CÂU HỎI TỰ LUẬN & XỬ LÝ TÌNH HUỐNG GIỮA KÌ 1 TIN HỌC 8
 * Trích xuất 100% nguyên văn từ Phần B (trang 11-12) trong file đề cương ôn tập
 */
export const GRADE_8_MIDTERM_ESSAY_QUESTIONS: EssayQuestion[] = [
  {
    id: 'gk1-tl-1',
    title: 'Câu 1: So sánh hoạt động học tập xưa và nay',
    question: 'Em hãy nêu một ví dụ cho thấy sự khác nhau rõ ràng trong hoạt động học tập khi chưa có và khi có các thiết bị công nghệ số hiện nay?',
    suggestedAnswer: `• Học tập ngày xưa: Học trực tiếp tại lớp học truyền thống, không có phương tiện nghe nhìn hỗ trợ hiện đại, việc tra cứu và tìm kiếm tài liệu học tập trong thư viện gặp nhiều khó khăn, mất nhiều thời gian.
• Học tập ngày nay: Ngoài học trực tiếp còn có học trực tuyến qua Internet, có phương tiện hỗ trợ giảng dạy hiện đại như máy chiếu, bảng tương tác, các phần mềm dạy và học, học sinh dễ dàng tìm kiếm nguồn học liệu phong phú trên Internet mọi lúc mọi nơi.`,
    topic: 'Chủ đề 1: Bài 1'
  },
  {
    id: 'gk1-tl-2',
    title: 'Câu 2: Ví dụ về ứng dụng thông minh của máy tính thế hệ mới',
    question: 'Em hãy nêu ví dụ về một ứng dụng mà em cho là thông minh của những máy tính thế hệ mới.',
    suggestedAnswer: `• Máy tính thế hệ mới được tích hợp trí tuệ nhân tạo (AI). Nhờ vậy, máy tính có khả năng xử lí thông tin trong thế giới thực giống con người như: cảm nhận, suy luận, tương tác, nhận diện giọng nói, khuôn mặt và tự động dịch thuật đa ngôn ngữ...
• Ví dụ thực tế: Trợ lý ảo (Siri, Google Assistant), ô tô tự lái nhận biết biển báo và chướng ngại vật, hoặc phần mềm nhận diện học sinh điểm danh tự động qua camera.`,
    topic: 'Chủ đề 1: Bài 1'
  },
  {
    id: 'gk1-tl-3',
    title: 'Câu 3: Ba ví dụ máy tính thay đổi sâu sắc cuộc sống con người',
    question: 'Em hãy lấy ba ví dụ cho thấy máy tính thay đổi sâu sắc cuộc sống của con người:',
    suggestedAnswer: `1. Trong lĩnh vực y tế: Các thiết bị nhỏ gọn như đồng hồ thông minh có thể theo dõi nhịp tim, giấc ngủ, chỉ số sức khỏe thường xuyên; hệ thống máy chụp cắt lớp và robot phẫu thuật giúp bác sĩ chẩn đoán và điều trị chính xác.
2. Trong lĩnh vực giáo dục: Internet là kho thông tin khổng lồ giúp con người có thể học tập trực tuyến mọi lúc mọi nơi, kết nối với thầy cô và bạn bè trên toàn thế giới.
3. Trong lĩnh vực an ninh - quốc phòng: Thiết bị bay không người lái thông minh có thể hỗ trợ tuần tra, quan sát vùng trời, vùng biển, bảo vệ an ninh lãnh thổ một cách an toàn và chính xác.`,
    topic: 'Chủ đề 1: Bài 1'
  },
  {
    id: 'gk1-tl-4',
    title: 'Câu 4: Nguồn thông tin không đáng tin cậy và ví dụ',
    question: 'Thông tin không đáng tin cậy có thể là nguồn thông tin gì? Cho ví dụ minh họa.',
    suggestedAnswer: `Thông tin không đáng tin cậy thường xuất phát từ:
• Thông tin không trung thực, mang tính chất lừa dối. Ví dụ: Tin nhắn trúng thưởng mạo danh ngân hàng yêu cầu gửi mã OTP để lừa đảo chiếm đoạt tài sản.
• Thông tin đồn thổi dẫn đến kết luận thiếu căn cứ. Ví dụ: Tin đồn thất thiệt thổi phồng giá trị về lan đột biến gây xôn xao dư luận.
• Thông tin thiếu kiểm chứng dẫn đến quyết định sai lầm. Ví dụ: Các bài thuốc gia truyền tự chế, thông tin chữa bệnh tràn lan chưa qua kiểm định y tế trên mạng xã hội và YouTube.`,
    topic: 'Chủ đề 2: Bài 2'
  },
  {
    id: 'gk1-tl-5',
    title: 'Câu 5: Lợi ích của thông tin đáng tin cậy',
    question: 'Thông tin đáng tin cậy giúp chúng ta điều gì trong học tập và cuộc sống?',
    suggestedAnswer: `Thông tin đáng tin cậy giúp em:
1. Đưa ra kết luận đúng đắn, khách quan.
2. Quyết định hành động đúng, tránh được rủi ro và sai lầm.
3. Giải quyết được các vấn đề học tập và đời sống được đặt ra một cách hiệu quả, an toàn.`,
    topic: 'Chủ đề 2: Bài 2'
  },
  {
    id: 'gk1-tl-6',
    title: 'Câu 6: Các cách xác định thông tin đáng tin cậy',
    question: 'Nêu một số cách xác định thông tin có đáng tin cậy hay không?',
    suggestedAnswer: `Để xác định một thông tin có đáng tin cậy hay không, học sinh cần thực hiện các bước:
1. Kiểm tra nguồn thông tin: Xem xét tác giả bài viết, uy tín và thẩm quyền của cơ quan, tổ chức phát hành thông tin.
2. Phân biệt ý kiến với sự kiện: Tách bạch rõ đâu là sự kiện khách quan đã được chứng minh, đâu là cảm nghĩ, đánh giá chủ quan của cá nhân.
3. Kiểm tra chứng cứ của kết luận: Đối chiếu số liệu, tài liệu trích dẫn xem có từ các nguồn đáng tin cậy không.
4. Đánh giá tính thời sự của thông tin: Kiểm tra thời điểm công bố xem thông tin còn hiệu lực hay đã trở nên lỗi thời.`,
    topic: 'Chủ đề 2: Bài 2 & Bài 3'
  },
  {
    id: 'gk1-tl-7',
    title: 'Câu 7: Xử lý 2 tình huống vi phạm sử dụng công nghệ số',
    question: `Hãy chỉ ra những hành vi vi phạm khi sử dụng công nghệ kĩ thuật số trong các tình huống dưới đây và nêu cách xử lí:
Tình huống 1: Minh mua vé vào rạp chiếu phim để xem phim. Minh dùng điện thoại di động để phát trực tiếp (livestream) bộ phim cho bạn bè và người thân xem cùng. Hành vi quay phim của Minh gọi là hành vi gì? Nếu là bạn đi xem cùng phim với Minh hôm đó, em sẽ làm gì?
Tình huống 2: Lan mua cuốn sách các bài văn hay trong tiệm sách. Lan dùng điện thoại di động chụp một bài văn trong cuốn sách và gửi cho Nam. Nam sử dụng phần mềm Word để gõ lại bài văn này và nộp cho cô giáo để chấm điểm. Hành động vi phạm của Lan và Nam là gì? Nếu là bạn của Lan và Nam, em sẽ khuyên các bạn như thế nào?`,
    suggestedAnswer: `HƯỚNG DẪN XỬ LÝ THEO ĐỀ CƯƠNG:
1. Tình huống 1:
- Hành vi vi phạm: Hành vi quay phim, livestream trong rạp chiếu phim là hành vi VI PHẠM BẢN QUYỀN (xâm phạm quyền sở hữu trí tuệ của nhà sản xuất phim) và vi phạm nội quy của rạp.
- Cách xử lí: Em sẽ nhắc nhở và kiên quyết yêu cầu Minh dừng việc livestream lại ngay lập tức, vì bạn đã vi phạm quy định của rạp chiếu và luật bản quyền; nếu bị nhân viên rạp phát hiện bạn sẽ bị lập biên bản xử phạt theo quy định.

2. Tình huống 2:
- Hành động vi phạm:
  + Lan chụp ảnh bài văn trong sách và tự ý gửi cho bạn là hành vi tiếp tay cho sao chép trái phép.
  + Nam sao chép bài văn của người khác thành của mình để nộp cho cô giáo chấm điểm là hành vi VI PHẠM BẢN QUYỀN và VI PHẠM ĐẠO ĐỨC HỌC TẬP (đạo văn, thiếu trung thực).
- Cách xử lí: Em sẽ khuyên nhủ, phân tích cho Lan và Nam hiểu rằng làm như vậy là vi phạm bản quyền tác giả và gian lận trong học tập. Khuyên Nam nên tự mình đọc hiểu, suy nghĩ và tự viết bài văn bằng chính năng lực của mình để được cô giáo đánh giá đúng và tiến bộ hơn.`,
    topic: 'Chủ đề 3: Bài 4'
  }
];

/**
 * TẤT CẢ CÂU HỎI ÔN TẬP GIỮA KỲ 1 (TỔNG HỢP CÁC DẠNG)
 */
export const ALL_GRADE_8_MIDTERM_QUESTIONS: Question[] = [
  ...GRADE_8_FILL_BLANK_QUESTIONS,
  ...GRADE_8_MATCHING_QUESTIONS,
  ...GRADE_8_DRAG_DROP_QUESTIONS,
  ...GRADE_8_MIDTERM_60_MCQ
];
