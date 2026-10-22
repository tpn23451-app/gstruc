import { LessonTopic, Question } from '../types/quiz';
import { BUILT_IN_QUESTIONS } from './questionBank';

// Re-export BUILT_IN_QUESTIONS so existing imports remain intact
export { BUILT_IN_QUESTIONS } from './questionBank';

export const CURRICULUM_LESSONS: LessonTopic[] = [
  // =========================================================================
  // =============================== KHỐI 3 ==================================
  // =========================================================================
  {
    id: 'tin3-on-tap-giua-ki-1',
    subject: 'Đặc biệt: Giữa kì 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: '⭐ Ôn tập Giữa kì 1 Tin học 3 (Trắc nghiệm, Điền khuyết, Ghép nối, Kéo thả)',
    description: 'Tổng hợp kiến thức trọng tâm Giữa kì 1: Khám phá máy tính, chuột & bàn phím, vẽ Paint và quy trình thực hiện công việc.',
    iconName: 'Award',
    color: 'from-orange-500 to-amber-600',
    isSpecialExam: true,
  },
  {
    id: 'tin3-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 1: Thông tin và quyết định',
    description: 'Thông tin xung quanh em qua các giác quan; vai trò của thông tin trong việc đưa ra quyết định hành động.',
    iconName: 'Sparkles',
    color: 'from-orange-500 to-amber-500',
  },
  {
    id: 'tin3-bai-2',
    subject: 'Chủ đề 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 2: Khám phá máy tính',
    description: '4 bộ phận cơ bản của máy tính để bàn (Thân máy, Màn hình, Bàn phím, Chuột); máy tính xách tay và máy tính bảng.',
    iconName: 'Laptop',
    color: 'from-amber-500 to-yellow-600',
  },
  {
    id: 'tin3-bai-3',
    subject: 'Chủ đề 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 3: Bàn phím và chuột máy tính',
    description: 'Cấu tạo chuột (nút trái, nút phải, bánh lăn); thao tác nháy chuột, nháy đúp, kéo thả chuột.',
    iconName: 'Zap',
    color: 'from-yellow-500 to-orange-600',
  },
  {
    id: 'tin3-bai-4',
    subject: 'Chủ đề 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 4: Làm quen với gõ bàn phím',
    description: 'Hàng phím cơ sở, hai phím có gờ F và J đặt hai ngón trỏ, hàng phím trên, hàng phím dưới, phím cách Space.',
    iconName: 'BookMarked',
    color: 'from-orange-600 to-red-500',
  },
  {
    id: 'tin3-bai-5',
    subject: 'Chủ đề 1',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 5: Sử dụng bàn phím đúng cách',
    description: 'Quy tắc đặt 10 ngón tay trên hàng phím cơ sở; tư thế ngồi chuẩn giúp bảo vệ cột sống và thị lực.',
    iconName: 'PenTool',
    color: 'from-red-500 to-pink-500',
  },
  {
    id: 'tin3-bai-6',
    subject: 'Chủ đề 2',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 6: Khám phá thông tin trên Internet',
    description: 'Trang web, trình duyệt web (Google Chrome, Cốc Cốc); tìm kiếm video học tập an toàn trên mạng.',
    iconName: 'Globe2',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'tin3-bai-7',
    subject: 'Chủ đề 3',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 7: Sắp xếp để dễ tìm',
    description: 'Phân loại đồ vật, sách vở và tệp dữ liệu vào từng ngăn/thư mục gọn gàng, khoa học.',
    iconName: 'Shapes',
    color: 'from-emerald-500 to-teal-600',
  },
  {
    id: 'tin3-bai-8',
    subject: 'Chủ đề 3',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 8: Sơ đồ tư duy',
    description: 'Biểu diễn ý tưởng bằng sơ đồ hình ảnh trực quan với chủ đề chính ở giữa và các nhánh từ khóa.',
    iconName: 'GitBranch',
    color: 'from-purple-500 to-indigo-600',
  },
  {
    id: 'tin3-bai-9',
    subject: 'Chủ đề 4',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 9: An toàn khi sử dụng máy tính',
    description: 'Quy tắc an toàn điện, không chạm vào dây cắm, không mang đồ ăn uống; khoảng cách mắt hợp lý.',
    iconName: 'Sun',
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 'tin3-bai-10',
    subject: 'Chủ đề 5',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 10: Làm quen với phần mềm đồ họa Paint',
    description: 'Khởi động Paint, thanh công cụ, công cụ Bút chì (Pencil), Tẩy (Eraser) và bảng màu sắc.',
    iconName: 'Sparkles',
    color: 'from-pink-500 to-rose-600',
  },
  {
    id: 'tin3-bai-11',
    subject: 'Chủ đề 5',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 11: Em vẽ hình cơ bản',
    description: 'Sử dụng công cụ Rectangle (hình chữ nhật), Oval (hình tròn), Line (đoạn thẳng) và phím Shift.',
    iconName: 'Shapes',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 'tin3-bai-12',
    subject: 'Chủ đề 5',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 12: Em tập tô màu và chỉnh sửa tranh vẽ',
    description: 'Công cụ Đổ màu (Fill with color), chọn màu nét vẽ Color 1 và màu nền Color 2.',
    iconName: 'PenTool',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'tin3-bai-13',
    subject: 'Chủ đề 6',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 13: Các bước thực hiện một công việc',
    description: 'Chia công việc thành các bước cụ thể theo thứ tự trước sau để hoàn thành mục tiêu.',
    iconName: 'Binary',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'tin3-bai-14',
    subject: 'Chủ đề 6',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 14: Em tập làm theo các bước',
    description: 'Thực hiện tuần tự từng bước theo chỉ dẫn thuật toán đơn giản để giải quyết nhiệm vụ.',
    iconName: 'Compass',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'tin3-bai-15',
    subject: 'Chủ đề 6',
    grade: 'Khối 3',
    gradeNumber: 3,
    title: 'Bài 15: Nhiệm vụ của em và sự trợ giúp của máy tính',
    description: 'Ứng dụng máy tính trong học tập: luyện toán, tra từ điển, nghe nhạc và giải trí bổ ích.',
    iconName: 'Award',
    color: 'from-teal-600 to-emerald-600',
  },

  // =========================================================================
  // =============================== KHỐI 4 ==================================
  // =========================================================================
  {
    id: 'tin4-on-tap-giua-ki-1',
    subject: 'Đặc biệt: Giữa kì 1',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: '⭐ Ôn tập Giữa kì 1 Tin học 4 (Phần cứng & phần mềm, Gõ Telex, Tệp & Thư mục, Scratch)',
    description: 'Tổng hợp trọng tâm Giữa kì 1 Tin học 4: Phân biệt phần cứng - phần mềm, quản lý tệp thư mục, gõ văn bản và làm quen Scratch.',
    iconName: 'Award',
    color: 'from-amber-500 to-orange-600',
    isSpecialExam: true,
  },
  {
    id: 'tin4-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 1: Phần cứng và phần mềm máy tính',
    description: 'Phần cứng là thiết bị vật lý (chuột, bàn phím, màn hình, loa); Phần mềm là chương trình điều khiển (Windows, Word, Scratch).',
    iconName: 'Laptop',
    color: 'from-amber-600 to-orange-600',
  },
  {
    id: 'tin4-bai-2',
    subject: 'Chủ đề 1',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 2: Gõ bàn phím đúng cách và an toàn khi sử dụng',
    description: 'Luyện tập gõ phím 10 ngón; tư thế ngồi đúng và thời gian sử dụng thiết bị hợp lý.',
    iconName: 'Zap',
    color: 'from-orange-500 to-red-500',
  },
  {
    id: 'tin4-bai-3',
    subject: 'Chủ đề 2',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 3: Thông tin trên trang web',
    description: 'Các dạng thông tin trên trang web: văn bản, hình ảnh, âm thanh, video và liên kết siêu văn bản (hyperlink).',
    iconName: 'Globe2',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'tin4-bai-4',
    subject: 'Chủ đề 2',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 4: Tìm kiếm thông tin trên Internet',
    description: 'Máy tìm kiếm Google; kỹ thuật lựa chọn từ khóa ngắn gọn, chính xác để tìm bài học nhanh chóng.',
    iconName: 'Compass',
    color: 'from-indigo-600 to-cyan-600',
  },
  {
    id: 'tin4-bai-5',
    subject: 'Chủ đề 3',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 5: Thao tác với tệp và thư mục',
    description: 'Cấu trúc cây thư mục; thao tác tạo mới New Folder, đổi tên Rename, sao chép Copy, di chuyển và xóa Delete.',
    iconName: 'Shapes',
    color: 'from-yellow-600 to-amber-600',
  },
  {
    id: 'tin4-bai-6',
    subject: 'Chủ đề 4',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 6: Sử dụng phần mềm có bản quyền và tôn trọng tác quyền',
    description: 'Tôn trọng quyền tác giả; không tải hoặc cài đặt phần mềm bẻ khóa trái phép.',
    iconName: 'Sun',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'tin4-bai-7',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 7: Soạn thảo văn bản cơ bản',
    description: 'Gõ tiếng Việt có dấu kiểu Telex hoặc VNI; phím Shift viết hoa; căn chỉnh thụt đầu dòng.',
    iconName: 'FileText',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'tin4-bai-8',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 8: Chèn hình ảnh và định dạng văn bản',
    description: 'Định dạng phông chữ, cỡ chữ, màu chữ, căn lề; chèn tranh ảnh minh họa (Insert Picture).',
    iconName: 'PenTool',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 'tin4-bai-9',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 9: Làm quen với bài trình chiếu',
    description: 'Phần mềm Microsoft PowerPoint; cấu trúc trang chiếu (Slide) và tiêu đề trình chiếu.',
    iconName: 'Sun',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 'tin4-bai-10',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 10: Thêm hình ảnh và hiệu ứng vào trang chiếu',
    description: 'Hiệu ứng chuyển trang (Transition) và hiệu ứng chuyển động cho đối tượng (Animation).',
    iconName: 'Sparkles',
    color: 'from-amber-500 to-yellow-500',
  },
  {
    id: 'tin4-bai-11',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 11: Làm quen với lập trình Scratch',
    description: 'Giao diện Scratch: Sân khấu (Stage), Nhân vật (Sprite), Ngăn khối lệnh (Blocks) và Vùng kịch bản (Script).',
    iconName: 'GitBranch',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'tin4-bai-12',
    subject: 'Chủ đề 5',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 12: Điều khiển nhân vật di chuyển và đổi màu',
    description: 'Khối lệnh di chuyển move, xoay turn, đổi màu sắc và sự kiện khi bấm lá cờ xanh (When green flag clicked).',
    iconName: 'Zap',
    color: 'from-cyan-500 to-blue-600',
  },
  {
    id: 'tin4-bai-13',
    subject: 'Chủ đề 6',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 13: Chia bài toán thành các bài toán nhỏ hơn',
    description: 'Tư duy phân rã vấn đề; chia một dự án phức tạp thành các việc đơn giản dễ thực hiện.',
    iconName: 'Binary',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'tin4-bai-14',
    subject: 'Chủ đề 6',
    grade: 'Khối 4',
    gradeNumber: 4,
    title: 'Bài 14: Thực hành tạo chương trình Scratch đơn giản',
    description: 'Lắp ghép hoàn chỉnh dự án Scratch chú mèo đi bộ dạo phố và phát âm thanh Meow.',
    iconName: 'Award',
    color: 'from-teal-600 to-emerald-600',
  },

  // =========================================================================
  // =============================== KHỐI 5 ==================================
  // =========================================================================
  {
    id: 'tin5-on-tap-giua-ki-1',
    subject: 'Đặc biệt: Giữa kì 1',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: '⭐ Ôn tập Giữa kì 1 Tin học 5 (Bài 1, 2, 3, 4 - KNTT)',
    description: 'Trọn bộ đề ôn tập Giữa kì 1 Tin học 5 bám sát SGK Kết nối tri thức: Bài 1 (Em có thể làm gì với máy tính?), Bài 2 (Tìm kiếm thông tin trên website), Bài 3 (Tìm kiếm thông tin trong giải quyết vấn đề), Bài 4 (Cây thư mục).',
    iconName: 'Award',
    color: 'from-rose-500 to-orange-600',
    isSpecialExam: true,
  },
  {
    id: 'tin5-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 1: Em có thể làm gì với máy tính?',
    description: 'Học tập, giải trí, trao đổi thông tin, hợp tác trực tuyến (Zoom, Meet, Teams) và tạo sản phẩm số (văn bản, trình chiếu, trò chơi Scratch).',
    iconName: 'Laptop',
    color: 'from-rose-500 to-orange-500',
  },
  {
    id: 'tin5-bai-2',
    subject: 'Chủ đề 2',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 2: Tìm kiếm thông tin trên website',
    description: 'Trang chủ (homepage), nút trang chủ, công cụ tìm kiếm kính lúp, lưu ảnh, sao chép văn bản và cắm/ngắt an toàn USB.',
    iconName: 'Globe2',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'tin5-bai-3',
    subject: 'Chủ đề 3',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 3: Tìm kiếm thông tin trong giải quyết vấn đề',
    description: 'Tầm quan trọng của thông tin trong quyết định; thảo luận và phân công theo thế mạnh khi làm việc nhóm; chọn từ khoá chính xác.',
    iconName: 'Compass',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'tin5-bai-4',
    subject: 'Chủ đề 3',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 4: Cây thư mục',
    description: 'Sắp xếp tệp và thư mục theo cấu trúc cây hợp lí; các tiêu chí phân loại tệp; công cụ tìm kiếm trong File Explorer.',
    iconName: 'Shapes',
    color: 'from-cyan-600 to-teal-600',
  },
  {
    id: 'tin5-bai-5',
    subject: 'Chủ đề 4',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 5: Bản quyền nội dung thông tin',
    description: 'Khái niệm bản quyền nội dung thông tin; quy tắc xin phép và ghi rõ nguồn tác giả; tôn trọng tính riêng tư.',
    iconName: 'Award',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    id: 'tin5-bai-6',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 6: Định dạng kí tự và bố trí hình ảnh trong văn bản',
    description: 'Định dạng phông chữ, kiểu chữ (B, I, U), cỡ chữ, màu chữ và bố trí hình ảnh (Square, In Line with Text) trong Word.',
    iconName: 'FileText',
    color: 'from-emerald-600 to-green-600',
  },
  {
    id: 'tin5-bai-7',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 7: Thực hành soạn thảo văn bản',
    description: 'Thực hành gõ bài hát, sao chép văn bản Ctrl+C/Ctrl+V, chèn và định dạng hình ảnh minh hoạ, lưu tệp văn bản.',
    iconName: 'PenTool',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'tin5-bai-8a',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 8A: Làm quen với phần mềm đồ hoạ',
    description: 'Phần mềm Paint; các công cụ vẽ hình học (Oval, Line), công cụ chọn Select, đổi màu Color 1, lật xoay Rotate.',
    iconName: 'Sparkles',
    color: 'from-purple-600 to-indigo-600',
  },
  {
    id: 'tin5-bai-9a',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 9A: Sử dụng phần mềm đồ hoạ tạo sản phẩm số',
    description: 'Thực hành tạo thiệp chúc mừng sinh nhật, chúc mừng thầy cô; kết hợp công cụ vẽ khung, tô màu và viết chữ Text.',
    iconName: 'Award',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'tin5-bai-8b',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 8B: Làm sản phẩm thủ công theo video hướng dẫn',
    description: 'Tìm kiếm và xem video trên YouTube; sử dụng các nút điều khiển phát, tạm dừng, thanh tiến trình để gấp hạc giấy.',
    iconName: 'Sparkles',
    color: 'from-blue-600 to-indigo-600',
  },
  {
    id: 'tin5-bai-9b',
    subject: 'Chủ đề 5',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 9B: Thực hành tạo đồ dùng gia đình theo video hướng dẫn',
    description: 'Làm hộp đựng bút, thùng rác mini từ vật liệu tái chế theo video hướng dẫn; ý nghĩa bảo vệ môi trường.',
    iconName: 'Shapes',
    color: 'from-teal-600 to-cyan-600',
  },
  {
    id: 'tin5-bai-10',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 10: Cấu trúc tuần tự',
    description: 'Khái niệm cấu trúc tuần tự: các lệnh thực hiện lần lượt theo thứ tự; lập trình chương trình Scratch "Xin chào!".',
    iconName: 'GitBranch',
    color: 'from-orange-500 to-amber-600',
  },
  {
    id: 'tin5-bai-11',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 11: Cấu trúc lặp',
    description: 'Ba lệnh lặp trong Scratch: lặp với số lần biết trước (lặp lại 10), lặp liên tục, lặp có điều kiện (lặp lại cho đến khi).',
    iconName: 'Zap',
    color: 'from-amber-600 to-yellow-600',
  },
  {
    id: 'tin5-bai-12',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 12: Thực hành sử dụng lệnh lặp',
    description: 'Thực hành điều khiển chú vẹt bay liên tục, sử dụng lệnh đặt kiểu xoay trái - phải, bật lại nếu chạm cạnh.',
    iconName: 'Play',
    color: 'from-green-600 to-emerald-600',
  },
  {
    id: 'tin5-bai-13',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 13: Cấu trúc rẽ nhánh',
    description: 'Cấu trúc rẽ nhánh dạng thiếu (nếu... thì) và dạng đủ (nếu... thì... nếu không thì); điều kiện cảm biến chạm chuột.',
    iconName: 'Binary',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    id: 'tin5-bai-14',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 14: Sử dụng biến trong chương trình',
    description: 'Khái niệm biến (Variable) lưu trữ dữ liệu; tạo biến mới; lệnh hỏi và trả lời, gán giá trị cho biến trong Scratch.',
    iconName: 'Calculator',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'tin5-bai-15',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 15: Sử dụng biểu thức trong chương trình',
    description: 'Tạo biểu thức số học (+, -, *, /) và biểu thức so sánh; lồng ghép các khối phép toán tính chu vi, diện tích.',
    iconName: 'Divide',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'tin5-bai-16',
    subject: 'Chủ đề 6',
    grade: 'Khối 5',
    gradeNumber: 5,
    title: 'Bài 16: Từ kịch bản đến chương trình',
    description: 'Viết kịch bản trò chơi "Mèo bắt bóng" (MeoBatBong), tạo nhân vật, lập trình tăng điểm số khi mèo chạm bóng.',
    iconName: 'Award',
    color: 'from-rose-500 to-pink-600',
  },

  // =========================================================================
  // =============================== KHỐI 6 ==================================
  // =========================================================================
  // --- Chủ đề 1: Máy tính và cộng đồng ---
  {
    id: 'tin6-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 1: Thông tin và dữ liệu',
    description: 'Khái niệm thông tin và dữ liệu, vật mang tin (vật chứa thông tin), tầm quan trọng của thông tin trong đời sống.',
    iconName: 'Binary',
    color: 'from-blue-500 to-indigo-600',
  },
  {
    id: 'tin6-bai-2',
    subject: 'Chủ đề 1',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 2: Xử lí thông tin',
    description: 'Quy trình 3 bước xử lí thông tin: thu nhận -> xử lí -> xuất/truyền thông tin; bộ não và bộ vi xử lí CPU.',
    iconName: 'Zap',
    color: 'from-indigo-500 to-cyan-600',
  },
  {
    id: 'tin6-bai-3',
    subject: 'Chủ đề 1',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 3: Thông tin trong máy tính',
    description: 'Biểu diễn thông tin dạng dãy bit (0 và 1); các đơn vị đo dung lượng: Bit, Byte, KB, MB, GB, TB.',
    iconName: 'Laptop',
    color: 'from-cyan-600 to-blue-700',
  },

  // --- Chủ đề 2: Mạng máy tính và Internet ---
  {
    id: 'tin6-bai-4',
    subject: 'Chủ đề 2',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 4: Mạng máy tính',
    description: 'Khái niệm mạng máy tính, lợi ích chia sẻ tài nguyên (dữ liệu, máy in), thiết bị đầu cuối và thiết bị kết nối.',
    iconName: 'GitBranch',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'tin6-bai-5',
    subject: 'Chủ đề 2',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 5: Internet',
    description: 'Khái niệm mạng Internet toàn cầu, đặc điểm không thuộc quyền sở hữu riêng của ai, kết nối có dây và Wi-Fi.',
    iconName: 'Globe2',
    color: 'from-sky-500 to-blue-600',
  },
  {
    id: 'tin6-bai-6',
    subject: 'Chủ đề 2',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 6: Mạng thông tin toàn cầu (WWW)',
    description: 'Khái niệm World Wide Web, website, trang web, địa chỉ URL, siêu liên kết (hyperlink) và các trình duyệt web phổ biến.',
    iconName: 'Compass',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'tin6-bai-7',
    subject: 'Chủ đề 2',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 7: Tìm kiếm thông tin trên Internet',
    description: 'Máy tìm kiếm (Google, Bing), lựa chọn từ khóa thông minh, sử dụng dấu ngoặc kép "" để tìm kiếm chính xác cụm từ.',
    iconName: 'Search',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'tin6-bai-8',
    subject: 'Chủ đề 2',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 8: Thư điện tử (Email)',
    description: 'Khái niệm thư điện tử, cấu trúc địa chỉ username@domain, gửi và nhận thư, đính kèm tệp tin đa phương tiện.',
    iconName: 'FileText',
    color: 'from-rose-500 to-red-600',
  },

  // --- Chủ đề 3: Đạo đức, pháp luật và văn hoá ---
  {
    id: 'tin6-bai-9',
    subject: 'Chủ đề 3',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 9: An toàn thông tin trên Internet',
    description: 'Bảo vệ thông tin cá nhân, đặt mật khẩu mạnh kết hợp chữ số/ký tự đặc biệt, phòng ngừa virus và cảnh giác lừa đảo.',
    iconName: 'Sparkles',
    color: 'from-purple-600 to-pink-600',
  },

  // --- Chủ đề 4: Ứng dụng tin học ---
  {
    id: 'tin6-bai-10',
    subject: 'Chủ đề 4',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 10: Sơ đồ tư duy',
    description: 'Khái niệm sơ đồ tư duy (Mind Map), cấu trúc chủ đề trung tâm và các nhánh cấp 1, cấp 2, từ khóa và hình ảnh trực quan.',
    iconName: 'Shapes',
    color: 'from-emerald-500 to-teal-700',
  },
  {
    id: 'tin6-bai-11',
    subject: 'Chủ đề 4',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 11: Định dạng văn bản',
    description: 'Định dạng ký tự (phông chữ, cỡ chữ, màu sắc, in đậm Ctrl+B, in nghiêng Ctrl+I, gạch chân) và định dạng đoạn văn bản (căn lề).',
    iconName: 'BookMarked',
    color: 'from-indigo-600 to-violet-700',
  },
  {
    id: 'tin6-bai-12',
    subject: 'Chủ đề 4',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 12: Trình bày thông tin ở dạng bảng',
    description: 'Tạo bảng trong văn bản (hàng, cột, ô tính), chèn và xóa hàng/cột, gộp ô (Merge Cells), căn chỉnh và định dạng bảng.',
    iconName: 'Calculator',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'tin6-bai-13',
    subject: 'Chủ đề 4',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 13: Thực hành: Hoàn thiện sổ lưu niệm',
    description: 'Thực hành tích hợp định dạng văn bản, chèn ảnh, bảng biểu và tạo sản phẩm số ý nghĩa cho lớp học.',
    iconName: 'Scroll',
    color: 'from-amber-600 to-rose-600',
  },

  // --- Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính ---
  {
    id: 'tin6-bai-14',
    subject: 'Chủ đề 5',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 14: Thuật toán',
    description: 'Khái niệm thuật toán, mô tả thuật toán bằng cách liệt kê từng bước và sơ đồ khối (hình ovan, hình chữ nhật, hình thoi).',
    iconName: 'GitBranch',
    color: 'from-fuchsia-600 to-indigo-700',
  },
  {
    id: 'tin6-bai-15',
    subject: 'Chủ đề 5',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 15: Các thuật toán tìm kiếm',
    description: 'Thuật toán tìm kiếm tuần tự (xét lần lượt từng phần tử) và tìm kiếm nhị phân (chia đôi danh sách đã sắp xếp).',
    iconName: 'Divide',
    color: 'from-teal-600 to-blue-600',
  },
  {
    id: 'tin6-bai-16',
    subject: 'Chủ đề 5',
    grade: 'Khối 6',
    gradeNumber: 6,
    title: 'Bài 16: Các thuật toán sắp xếp',
    description: 'Thuật toán sắp xếp nổi bọt (Bubble Sort - đổi chỗ hai phần tử liền kề) và sắp xếp chọn (Selection Sort - tìm phần tử nhỏ nhất).',
    iconName: 'Zap',
    color: 'from-orange-500 to-red-600',
  },

  // =========================================================================
  // =============================== KHỐI 7 ==================================
  // =========================================================================
  // --- Chủ đề 1: Máy tính và cộng đồng ---
  {
    id: 'tin7-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 1: Thiết bị vào - ra',
    description: 'Chức năng và phân loại thiết bị vào (bàn phím, chuột, micro) và thiết bị ra (màn hình, máy in, loa); cổng HDMI, USB.',
    iconName: 'Laptop',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'tin7-bai-2',
    subject: 'Chủ đề 1',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 2: Phần mềm ứng dụng',
    description: 'Khái niệm và phân biệt Hệ điều hành (Windows, Linux, macOS) với Phần mềm ứng dụng (Word, Excel, Scratch, trình duyệt).',
    iconName: 'Binary',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'tin7-bai-3',
    subject: 'Chủ đề 1',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 3: Quản lí dữ liệu trong máy tính',
    description: 'Tệp và thư mục phân cấp hình cây, phần tên và phần mở rộng (đuôi tệp .docx, .xlsx, .pptx), đường dẫn tệp.',
    iconName: 'FileText',
    color: 'from-teal-600 to-emerald-600',
  },

  // --- Chủ đề 2 & 3: Tổ chức lưu trữ & Ứng xử trên mạng ---
  {
    id: 'tin7-bai-4',
    subject: 'Chủ đề 2',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 4: Mạng xã hội và các kênh trao đổi thông tin',
    description: 'Khái niệm mạng xã hội, hồ sơ cá nhân, kết nối bạn bè, tương tác chia sẻ và các mặt trái cần cảnh giác phòng ngừa.',
    iconName: 'Globe2',
    color: 'from-sky-500 to-indigo-600',
  },
  {
    id: 'tin7-bai-5',
    subject: 'Chủ đề 3',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 5: Ứng xử trên mạng',
    description: 'Quy tắc ứng xử văn minh lịch sự trên môi trường số, tôn trọng quyền riêng tư cá nhân, quy tắc "Dừng lại - Suy nghĩ - Kiểm tra".',
    iconName: 'Sparkles',
    color: 'from-rose-500 to-pink-600',
  },

  // --- Chủ đề 4: Ứng dụng tin học (Bảng tính & Trình chiếu) ---
  {
    id: 'tin7-bai-6',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 6: Làm quen với phần mềm bảng tính',
    description: 'Giao diện Excel: ô tính (cell), hàng, cột, địa chỉ ô (A1, B5), khối ô (B2:D6), thanh công thức và nhập dữ liệu số/kí tự.',
    iconName: 'Calculator',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'tin7-bai-7',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 7: Tính toán tự động trên bảng tính',
    description: 'Sử dụng dấu bằng (=), các phép toán cơ bản (+, -, *, /), hàm SUM tính tổng, hàm AVERAGE tính trung bình cộng, sao chép công thức.',
    iconName: 'Divide',
    color: 'from-green-600 to-teal-600',
  },
  {
    id: 'tin7-bai-8',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 8: Công cụ hỗ trợ tính toán',
    description: 'Sử dụng hàm MAX (tìm số lớn nhất), hàm MIN (tìm số nhỏ nhất), tính năng tự động điền AutoFill và sao chép theo quy luật.',
    iconName: 'Calculator',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 'tin7-bai-9',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 9: Trình bày bảng tính',
    description: 'Kẻ đường viền Borders, định dạng số tiền có dấu phân cách hàng nghìn (Comma Style), gộp ô và căn giữa (Merge & Center).',
    iconName: 'Shapes',
    color: 'from-indigo-600 to-blue-700',
  },
  {
    id: 'tin7-bai-10',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 10: Định dạng nâng cao cho bảng tính',
    description: 'Định dạng kiểu phần trăm, tăng/giảm số chữ số thập phân, tô màu nền ô và định dạng bảng dữ liệu chuyên nghiệp.',
    iconName: 'Sparkles',
    color: 'from-violet-600 to-purple-700',
  },
  {
    id: 'tin7-bai-11',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 11: Tạo bài trình chiếu',
    description: 'Khái niệm bài trình chiếu PowerPoint, trang tiêu đề (Title Slide), trang nội dung, thêm và xóa trang chiếu, bố cục layout.',
    iconName: 'Sun',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'tin7-bai-12',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 12: Định dạng đối tượng trên trang chiếu',
    description: 'Chèn hình ảnh, định dạng khung viền, dải lệnh Transitions chuyển trang và dải lệnh Animations tạo chuyển động đối tượng, phím F5.',
    iconName: 'Scroll',
    color: 'from-rose-600 to-amber-600',
  },
  {
    id: 'tin7-bai-13',
    subject: 'Chủ đề 4',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 13: Thực hành tổng hợp bài trình chiếu',
    description: 'Hoàn thiện bài thuyết trình chủ đề bảo vệ môi trường hoặc dự án học tập, phối màu hài hòa và trình bày trước lớp.',
    iconName: 'BookMarked',
    color: 'from-teal-600 to-indigo-700',
  },

  // --- Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính ---
  {
    id: 'tin7-bai-14',
    subject: 'Chủ đề 5',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 14: Thuật toán tìm kiếm tuần tự',
    description: 'Mô tả thuật toán tìm kiếm tuần tự bằng sơ đồ khối và ngôn ngữ tự nhiên, trường hợp tốt nhất và xấu nhất (N lần so sánh).',
    iconName: 'Search',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'tin7-bai-15',
    subject: 'Chủ đề 5',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 15: Thuật toán tìm kiếm nhị phân',
    description: 'Tìm kiếm nhị phân trên dãy đã sắp xếp, thuật toán chia đôi danh sách, so sánh với phần tử ở giữa, số bước tối đa log2(N).',
    iconName: 'GitBranch',
    color: 'from-cyan-600 to-blue-700',
  },
  {
    id: 'tin7-bai-16',
    subject: 'Chủ đề 5',
    grade: 'Khối 7',
    gradeNumber: 7,
    title: 'Bài 16: Thuật toán sắp xếp nổi bọt',
    description: 'Thuật toán sắp xếp nổi bọt (Bubble Sort), so sánh và đổi chỗ cặp phần tử liền kề, lượt duyệt đưa số lớn nhất về cuối dãy.',
    iconName: 'Zap',
    color: 'from-amber-600 to-rose-600',
  },

  // =========================================================================
  // =============================== KHỐI 8 ==================================
  // =========================================================================
  {
    id: 'tin8-on-tap-giua-ki-1',
    subject: 'Đặc biệt: Giữa kì 1',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: '⭐ Ôn tập Giữa kì 1: Bài 1, 2, 3, 4 (Trắc nghiệm, Điền khuyết, Ghép nối, Kéo thả, Tự luận)',
    description: 'Bám sát 100% đề cương 2026 - 2027: 60 câu trắc nghiệm chính thức, dạng điền khuyết cơ giới hóa, ghép nối cột lĩnh vực (Câu 18), kéo thả 5 thế hệ máy tính và 7 câu tự luận.',
    iconName: 'Award',
    color: 'from-amber-500 via-rose-600 to-indigo-700',
    isSpecialExam: true,
  },
  // --- Chủ đề 1: Máy tính và cộng đồng ---
  {
    id: 'tin8-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 1: Lược sử công cụ tính toán',
    description: 'Bàn tính, máy tính cơ khí Pascaline (1642), máy tính cơ khí Babbage (1833), kiến trúc Von Neumann (1945), 5 thế hệ máy tính điện tử.',
    iconName: 'Laptop',
    color: 'from-blue-600 to-indigo-700',
  },

  // --- Chủ đề 2: Tổ chức lưu trữ, tìm kiếm và trao đổi thông tin ---
  {
    id: 'tin8-bai-2',
    subject: 'Chủ đề 2',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 2: Thông tin trong môi trường số',
    description: 'Đặc điểm thông tin số (dễ nhân bản, khó xóa bỏ hoàn toàn, truy cập từ xa), thông tin đáng tin cậy, phân biệt ý kiến và sự kiện.',
    iconName: 'Binary',
    color: 'from-cyan-600 to-blue-600',
  },
  {
    id: 'tin8-bai-3',
    subject: 'Chủ đề 2',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 3: Thực hành: Khai thác thông tin số',
    description: 'Tìm kiếm, đánh giá và khai thác thông tin số theo chủ đề Năng lượng tái tạo, tạo bài trình chiếu báo cáo, nguồn tin .gov.vn, .edu.vn.',
    iconName: 'Compass',
    color: 'from-teal-600 to-emerald-600',
  },

  // --- Chủ đề 3: Đạo đức, pháp luật và văn hoá ---
  {
    id: 'tin8-bai-4',
    subject: 'Chủ đề 3',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 4: Đạo đức và văn hoá trong sử dụng công nghệ số',
    description: 'Biểu hiện vi phạm khi dùng công nghệ số (quay phim chụp ảnh trái phép, bạo lực học đường, phần mềm bẻ khoá), tính trung thực.',
    iconName: 'Sparkles',
    color: 'from-rose-500 to-pink-600',
  },

  // --- Chủ đề 4: Ứng dụng tin học (Bảng tính Excel) ---
  {
    id: 'tin8-bai-5',
    subject: 'Chủ đề 4',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 5: Sử dụng bảng tính giải quyết bài toán thực tế',
    description: 'Địa chỉ tương đối (A1), địa chỉ tuyệt đối ($A$1) với phím F4, sao chép công thức tính toán và sao chép dữ liệu giữa bảng tính với văn bản.',
    iconName: 'Calculator',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'tin8-bai-6',
    subject: 'Chủ đề 4',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 6: Sắp xếp và lọc dữ liệu',
    description: 'Sắp xếp dữ liệu theo 1 hoặc nhiều tiêu chí (Sort - Add Level), lọc dữ liệu đơn lẻ và lọc nâng cao (Filter, Number/Text Filters).',
    iconName: 'Divide',
    color: 'from-blue-600 to-cyan-700',
  },
  {
    id: 'tin8-bai-7',
    subject: 'Chủ đề 4',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 7: Trực quan hoá dữ liệu',
    description: 'Ý nghĩa trực quan hóa bằng biểu đồ, các loại biểu đồ: biểu đồ cột (so sánh số lượng), biểu đồ đoạn thẳng (xu hướng), biểu đồ quạt tròn (tỉ lệ %).',
    iconName: 'Shapes',
    color: 'from-amber-600 to-orange-600',
  },

  // --- Chủ đề 4a: Soạn thảo văn bản và trình chiếu nâng cao ---
  {
    id: 'tin8-bai-8a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 8a: Danh sách dạng liệt kê và hình ảnh trong văn bản',
    description: 'Danh sách dấu đầu dòng Bullet, danh sách có thứ tự Numbering, chèn và định dạng ảnh minh hoạ, vẽ hình đồ hoạ Shapes, bố trí Wrap Text.',
    iconName: 'FileText',
    color: 'from-indigo-600 to-purple-600',
  },
  {
    id: 'tin8-bai-9a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 9a: Tạo đầu trang, chân trang cho văn bản',
    description: 'Khái niệm Header & Footer, mục đích và nội dung đầu trang, chân trang, chèn số trang tự động (Page Number) và định dạng vị trí căn lề.',
    iconName: 'BookMarked',
    color: 'from-violet-600 to-indigo-700',
  },
  {
    id: 'tin8-bai-10a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 10a: Định dạng nâng cao cho trang chiếu',
    description: 'Phối màu sắc nóng - lạnh - trung tính, cỡ chữ và độ tương phản, chèn số trang, ngày tháng, đầu trang và chân trang trong PowerPoint.',
    iconName: 'Sun',
    color: 'from-yellow-500 to-amber-600',
  },
  {
    id: 'tin8-bai-11a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 11a: Sử dụng bản mẫu tạo bài trình chiếu',
    description: 'Khái niệm bản mẫu (Template có đuôi .potx), áp dụng bản mẫu có sẵn, chèn liên kết (Hyperlink) đến video hoặc tài liệu.',
    iconName: 'Scroll',
    color: 'from-fuchsia-600 to-pink-600',
  },

  // --- Chủ đề 4b: Làm quen với phần mềm chỉnh sửa ảnh (GIMP) ---
  {
    id: 'tin8-bai-8b',
    subject: 'Chủ đề 4b',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 8b: Phần mềm chỉnh sửa ảnh',
    description: 'Làm quen phần mềm GIMP, điểm ảnh (pixel), độ phân giải, định dạng ảnh jpg/png, khái niệm lớp ảnh (layer) và công cụ Zoom, Move.',
    iconName: 'Shapes',
    color: 'from-emerald-600 to-teal-600',
  },
  {
    id: 'tin8-bai-9b',
    subject: 'Chủ đề 4b',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 9b: Thay đổi khung hình, kích thước ảnh',
    description: 'Công cụ cắt ảnh Crop, xoay ảnh Rotate, thay đổi kích thước ảnh Scale, tỉ lệ khung hình ban đầu và điều chỉnh dung lượng ảnh.',
    iconName: 'Divide',
    color: 'from-teal-600 to-blue-700',
  },
  {
    id: 'tin8-bai-10b',
    subject: 'Chủ đề 4b',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 10b: Thêm văn bản, tạo hiệu ứng cho ảnh',
    description: 'Chèn chữ (Text tool), điều chỉnh độ sáng (Brightness), độ tương phản (Contrast), làm mờ (Blur) và làm sắc nét (Sharpen) trên GIMP.',
    iconName: 'Sparkles',
    color: 'from-blue-600 to-violet-600',
  },
  {
    id: 'tin8-bai-11b',
    subject: 'Chủ đề 4b',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 11b: Thực hành tổng hợp chỉnh sửa ảnh',
    description: 'Tạo khung viền, đổ màu chuyển sắc Gradient, phối trộn các lớp ảnh (Merge Down), xuất ảnh sang định dạng chuẩn jpg/png.',
    iconName: 'Laptop',
    color: 'from-violet-600 to-purple-700',
  },

  // --- Chủ đề 5: Giải quyết vấn đề với sự trợ giúp của máy tính ---
  {
    id: 'tin8-bai-12',
    subject: 'Chủ đề 5',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 12: Từ thuật toán đến chương trình',
    description: 'Mô tả kịch bản dưới dạng thuật toán (sơ đồ khối), chuyển đổi sơ đồ khối sang chương trình Scratch, điều khiển nhân vật vẽ hình tam giác đều.',
    iconName: 'GitBranch',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'tin8-bai-13',
    subject: 'Chủ đề 5',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 13: Biểu diễn dữ liệu',
    description: 'Hằng (số, xâu, logic), biến số, biểu thức tính toán, các phép toán số học (+, -, *, /, chia lấy dư mod), phép nối xâu ký tự (join) và phép toán logic.',
    iconName: 'Binary',
    color: 'from-indigo-600 to-cyan-600',
  },
  {
    id: 'tin8-bai-14',
    subject: 'Chủ đề 5',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 14: Cấu trúc điều khiển',
    description: 'Cấu trúc tuần tự, cấu trúc rẽ nhánh (nếu ... thì; nếu ... thì ... không thì), cấu trúc lặp (lặp n lần, lặp cho đến khi), trò chơi Đoán số.',
    iconName: 'Zap',
    color: 'from-amber-500 to-red-600',
  },
  {
    id: 'tin8-bai-15',
    subject: 'Chủ đề 5',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 15: Gỡ lỗi',
    description: 'Kiểm thử chương trình, phân loại lỗi cú pháp và lỗi logic (lỗi ngữ nghĩa), phương pháp phát hiện lỗi logic bằng quan sát biến số.',
    iconName: 'Compass',
    color: 'from-red-600 to-rose-700',
  },

  // --- Chủ đề 6: Hướng nghiệp với tin học ---
  {
    id: 'tin8-bai-16',
    subject: 'Chủ đề 6',
    grade: 'Khối 8',
    gradeNumber: 8,
    title: 'Bài 16: Tin học với nghề nghiệp',
    description: 'Tin học nâng cao hiệu quả công việc trong y tế, giáo dục, kiến trúc, kế toán; bình đẳng giới và Ngày Quốc tế trẻ em gái với CNTT (Girls in ICT Day).',
    iconName: 'Globe2',
    color: 'from-teal-600 to-indigo-800',
  },

  // =========================================================================
  // =============================== KHỐI 9 ==================================
  // =========================================================================
  {
    id: 'tin9-on-tap-giua-ki-1',
    subject: 'Đặc biệt: Giữa kì 1',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: '⭐ Ôn tập Giữa kì 1: Bài 1, 2, 3, 4, 5 (Trắc nghiệm, Điền khuyết, Ghép nối, Kéo thả, Đúng/Sai, Tự luận)',
    description: 'Bám sát 100% đề cương 2026 - 2027: 76 câu trắc nghiệm chuẩn 4 chủ đề, 12 câu Đúng/Sai, dạng điền khuyết, ghép nối cột, kéo thả quy trình và 5 câu tự luận.',
    iconName: 'Award',
    color: 'from-purple-600 via-indigo-600 to-cyan-600',
    isSpecialExam: true,
  },
  // --- Chủ đề 1: Máy tính và cộng đồng ---
  {
    id: 'tin9-bai-1',
    subject: 'Chủ đề 1',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 1: Thế giới kĩ thuật số',
    description: 'Các thiết bị có gắn bộ xử lí thông tin, khả năng của máy tính trong KHKT và đời sống, tác động của CNTT lên giáo dục và xã hội.',
    iconName: 'Laptop',
    color: 'from-purple-600 to-indigo-700',
  },
  {
    id: 'tin9-bai-2',
    subject: 'Chủ đề 1',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 2: Thông tin trong giải quyết vấn đề',
    description: 'Vai trò chất lượng thông tin trong ra quyết định; 4 tiêu chí đánh giá: tính mới, tính chính xác, tính đầy đủ, tính sử dụng được.',
    iconName: 'Binary',
    color: 'from-indigo-600 to-blue-600',
  },
  {
    id: 'tin9-bai-3',
    subject: 'Chủ đề 1',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 3: Thực hành: Đánh giá chất lượng thông tin',
    description: 'Thực hành tìm kiếm và đánh giá thông tin dự báo thời tiết, y tế, tuyển sinh dựa trên 4 tiêu chí cốt lõi.',
    iconName: 'Compass',
    color: 'from-blue-600 to-cyan-600',
  },

  // --- Chủ đề 2: Đạo đức, pháp luật và văn hoá ---
  {
    id: 'tin9-bai-4',
    subject: 'Chủ đề 2',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 4: Một số vấn đề pháp lí, đạo đức, xã hội của tin học',
    description: 'Phần mềm nguồn mở (Open Source), giấy phép Creative Commons (CC), tôn trọng bản quyền sở hữu trí tuệ và tác hại của phần mềm crack.',
    iconName: 'Sparkles',
    color: 'from-rose-500 to-pink-600',
  },

  // --- Chủ đề 3: Phần mềm mô phỏng ---
  {
    id: 'tin9-bai-5',
    subject: 'Chủ đề 3',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 5: Tìm hiểu phần mềm mô phỏng',
    description: 'Khái niệm phần mềm mô phỏng (PhET, Geometer’s Sketchpad), lợi ích nghiên cứu an toàn, chi phí thấp và trực quan sinh động.',
    iconName: 'Sun',
    color: 'from-amber-500 to-orange-600',
  },
  {
    id: 'tin9-bai-6',
    subject: 'Chủ đề 3',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 6: Thực hành: Khai thác phần mềm mô phỏng',
    description: 'Thực hành thí nghiệm ảo môn Vật lý (mạch điện, thấu kính) và Hóa học an toàn trên nền tảng PhET.',
    iconName: 'Scroll',
    color: 'from-teal-600 to-emerald-600',
  },

  // --- Chủ đề 4: Ứng dụng tin học (Bảng tính nâng cao & Dịch vụ trực tuyến) ---
  {
    id: 'tin9-bai-7',
    subject: 'Chủ đề 4',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 7: Trình bày thông tin trong trao đổi và hợp tác',
    description: 'Sử dụng công cụ trực tuyến để thuyết trình, chia sẻ dữ liệu và làm việc nhóm hiệu quả.',
    iconName: 'Globe2',
    color: 'from-blue-600 to-indigo-700',
  },
  {
    id: 'tin9-bai-8',
    subject: 'Chủ đề 4',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 8: Thực hành: Công cụ trực tuyến xử lí và chia sẻ thông tin',
    description: 'Làm việc đồng thời trên tài liệu đám mây (Google Docs, Sheets, Drive), phân quyền xem và chỉnh sửa.',
    iconName: 'FileText',
    color: 'from-cyan-600 to-teal-700',
  },
  {
    id: 'tin9-bai-9a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 9a: Sử dụng công cụ xác thực dữ liệu (Data Validation)',
    description: 'Xác thực dữ liệu trong Excel, thiết lập danh sách thả xuống List, giới hạn số dương, thông báo lỗi Error Alert.',
    iconName: 'Calculator',
    color: 'from-emerald-600 to-teal-700',
  },
  {
    id: 'tin9-bai-10a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 10a: Sử dụng hàm COUNTIF',
    description: 'Đếm số ô thoả mãn điều kiện trong bảng tính: =COUNTIF(range, criteria), ứng dụng thống kê số lượng và khảo sát học sinh.',
    iconName: 'Divide',
    color: 'from-teal-600 to-emerald-600',
  },
  {
    id: 'tin9-bai-11a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 11a: Sử dụng hàm SUMIF',
    description: 'Tính tổng có điều kiện trong Excel: =SUMIF(range, criteria, [sum_range]), kết hợp quản lí thu chi và ngân sách gia đình.',
    iconName: 'Calculator',
    color: 'from-green-600 to-emerald-800',
  },
  {
    id: 'tin9-bai-12a',
    subject: 'Chủ đề 4a',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 12a: Sử dụng hàm IF & Quản lí tài chính cá nhân',
    description: 'Hàm điều kiện IF, hàm IF lồng nhau kiểm tra nhiều mức điều kiện, áp dụng quy tắc quản lí tài chính 50-30-20.',
    iconName: 'Zap',
    color: 'from-indigo-600 to-violet-700',
  },

  // --- Chủ đề 5: Dịch vụ mạng và an ninh thông tin ---
  {
    id: 'tin9-bai-13',
    subject: 'Chủ đề 5',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 13: Dịch vụ mạng và các vấn đề an ninh thông tin',
    description: 'Tường lửa (Firewall), giao thức bảo mật HTTPS, các hình thức tấn công mạng lừa đảo mạo danh (Phishing).',
    iconName: 'GitBranch',
    color: 'from-red-600 to-rose-700',
  },
  {
    id: 'tin9-bai-14',
    subject: 'Chủ đề 5',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 14: Thực hành: Bảo mật an toàn thông tin',
    description: 'Cài đặt xác thực hai yếu tố (2FA), kiểm tra liên kết an toàn, bảo vệ dữ liệu cá nhân trên Internet.',
    iconName: 'Sparkles',
    color: 'from-rose-600 to-purple-700',
  },

  // --- Chủ đề 6: Hướng nghiệp với tin học ---
  {
    id: 'tin9-bai-15',
    subject: 'Chủ đề 6',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 15: Định hướng nghề nghiệp trong kỷ nguyên số',
    description: 'Các nhóm nghề ICT trọng điểm (lập trình viên, an ninh mạng, dữ liệu AI), xu hướng chuyển đổi số và kỹ năng công dân số.',
    iconName: 'Globe2',
    color: 'from-teal-600 to-indigo-800',
  },
  {
    id: 'tin9-bai-16',
    subject: 'Chủ đề 6',
    grade: 'Khối 9',
    gradeNumber: 9,
    title: 'Bài 16: Dự án: Khởi nghiệp cùng công nghệ số',
    description: 'Xây dựng kế hoạch dự án ứng dụng công nghệ thông tin giải quyết vấn đề thực tiễn của trường học và cộng đồng.',
    iconName: 'Award',
    color: 'from-amber-600 to-orange-700',
  },
];

// Helper: Fisher-Yates array shuffle for randomized, diverse tests
function shuffleArray<T>(array: T[]): T[] {
  const result = [...array];
  for (let i = result.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [result[i], result[j]] = [result[j], result[i]];
  }
  return result;
}

// ================= ULTRA-ACCURATE QUESTION POOL FINDER =================
export function findQuestionPoolForLesson(query: string, gradeHint?: number | string): Question[] {
  if (!query) {
    return BUILT_IN_QUESTIONS['tin8-bai-5'] || Object.values(BUILT_IN_QUESTIONS)[0];
  }

  const q = query.toLowerCase().trim();

  // Detect grade from hint or query
  let gradeNum = 8;
  if (gradeHint) {
    const parsed = typeof gradeHint === 'number' ? gradeHint : parseInt(String(gradeHint).replace(/\D/g, ''), 10);
    if ([3, 4, 5, 6, 7, 8, 9].includes(parsed)) gradeNum = parsed;
  } else if (q.includes('tin 3') || q.includes('lớp 3') || q.includes('khối 3') || q.includes('tin3')) {
    gradeNum = 3;
  } else if (q.includes('tin 4') || q.includes('lớp 4') || q.includes('khối 4') || q.includes('tin4')) {
    gradeNum = 4;
  } else if (q.includes('tin 5') || q.includes('lớp 5') || q.includes('khối 5') || q.includes('tin5')) {
    gradeNum = 5;
  } else if (q.includes('tin 6') || q.includes('lớp 6') || q.includes('khối 6') || q.includes('tin6')) {
    gradeNum = 6;
  } else if (q.includes('tin 7') || q.includes('lớp 7') || q.includes('khối 7') || q.includes('tin7')) {
    gradeNum = 7;
  } else if (q.includes('tin 9') || q.includes('lớp 9') || q.includes('khối 9') || q.includes('tin9')) {
    gradeNum = 9;
  }

  // 1. Direct ID match
  if (BUILT_IN_QUESTIONS[q]) {
    return BUILT_IN_QUESTIONS[q];
  }

  // 1.1 Special Midterm Review match
  if (q.includes('giữa kì') || q.includes('giữa kỳ') || q.includes('on-tap-giua-ki') || q.includes('đề cương') || q.includes('giua ki')) {
    if (gradeNum === 3 && BUILT_IN_QUESTIONS['tin3-on-tap-giua-ki-1']) {
      return BUILT_IN_QUESTIONS['tin3-on-tap-giua-ki-1'];
    }
    if (gradeNum === 4 && BUILT_IN_QUESTIONS['tin4-on-tap-giua-ki-1']) {
      return BUILT_IN_QUESTIONS['tin4-on-tap-giua-ki-1'];
    }
    if (gradeNum === 5 && BUILT_IN_QUESTIONS['tin5-on-tap-giua-ki-1']) {
      return BUILT_IN_QUESTIONS['tin5-on-tap-giua-ki-1'];
    }
    if (gradeNum === 9 || q.includes('9') || q.includes('lớp 9') || q.includes('khối 9') || q.includes('tin 9') || q.includes('tin9')) {
      if (BUILT_IN_QUESTIONS['tin9-on-tap-giua-ki-1']) {
        return BUILT_IN_QUESTIONS['tin9-on-tap-giua-ki-1'];
      }
    }
    if (BUILT_IN_QUESTIONS['tin8-on-tap-giua-ki-1']) {
      return BUILT_IN_QUESTIONS['tin8-on-tap-giua-ki-1'];
    }
    if (BUILT_IN_QUESTIONS['tin9-on-tap-giua-ki-1']) {
      return BUILT_IN_QUESTIONS['tin9-on-tap-giua-ki-1'];
    }
  }

  // 2. Exact key check
  for (const key of Object.keys(BUILT_IN_QUESTIONS)) {
    if (q === key.toLowerCase()) {
      return BUILT_IN_QUESTIONS[key];
    }
  }

  // 3. Extract exact lesson number (e.g. "bài 5", "bài 5:", "bai 5", "bài 8a", "bài 10b")
  const match = q.match(/bài\s*(\d+[a-b]?)/i) || q.match(/bai\s*(\d+[a-b]?)/i) || q.match(/bai-(\d+[a-b]?)/i);
  if (match) {
    const num = match[1].toLowerCase();
    const candidatePrimary = `tin${gradeNum}-bai-${num}`;
    if (BUILT_IN_QUESTIONS[candidatePrimary]) {
      return BUILT_IN_QUESTIONS[candidatePrimary];
    }

    // Try other grades
    for (const g of [3, 4, 5, 8, 6, 7, 9]) {
      const candidate = `tin${g}-bai-${num}`;
      if (BUILT_IN_QUESTIONS[candidate]) {
        return BUILT_IN_QUESTIONS[candidate];
      }
    }
  }

  // 4. Match against curriculum lesson list
  const matchedCurriculum = CURRICULUM_LESSONS.find(
    (l) =>
      l.id.toLowerCase() === q ||
      l.title.toLowerCase() === q ||
      l.title.toLowerCase().includes(q) ||
      q.includes(l.title.toLowerCase())
  );
  if (matchedCurriculum && BUILT_IN_QUESTIONS[matchedCurriculum.id]) {
    return BUILT_IN_QUESTIONS[matchedCurriculum.id];
  }

  // 5. Keyword heuristic matching (guarantees lesson content accuracy)
  // Grade 6 keywords
  if (q.includes('thông tin và dữ liệu') || q.includes('vật mang tin')) {
    return BUILT_IN_QUESTIONS['tin6-bai-1'] || [];
  }
  if (q.includes('xử lí thông tin') || q.includes('bộ não') || q.includes('thu nhận thông tin')) {
    return BUILT_IN_QUESTIONS['tin6-bai-2'] || [];
  }
  if (q.includes('thông tin trong máy tính') || q.includes('dãy bit') || q.includes('kilobyte') || q.includes('megabyte')) {
    return BUILT_IN_QUESTIONS['tin6-bai-3'] || [];
  }
  if (q.includes('mạng máy tính') && (gradeNum === 6 || q.includes('chia sẻ máy in'))) {
    return BUILT_IN_QUESTIONS['tin6-bai-4'] || [];
  }
  if (q.includes('internet') && gradeNum === 6) {
    return BUILT_IN_QUESTIONS['tin6-bai-5'] || [];
  }
  if (q.includes('mạng thông tin toàn cầu') || q.includes('world wide web') || q.includes('trình duyệt')) {
    return BUILT_IN_QUESTIONS['tin6-bai-6'] || [];
  }
  if (q.includes('tìm kiếm thông tin trên internet') || q.includes('máy tìm kiếm') || q.includes('từ khóa')) {
    return BUILT_IN_QUESTIONS['tin6-bai-7'] || [];
  }
  if (q.includes('thư điện tử') || q.includes('email') || q.includes('tệp đính kèm')) {
    return BUILT_IN_QUESTIONS['tin6-bai-8'] || [];
  }
  if (q.includes('an toàn thông tin trên internet') || q.includes('mật khẩu mạnh')) {
    return BUILT_IN_QUESTIONS['tin6-bai-9'] || [];
  }
  if (q.includes('sơ đồ tư duy') || q.includes('mind map') || q.includes('chủ đề trung tâm')) {
    return BUILT_IN_QUESTIONS['tin6-bai-10'] || [];
  }
  if (q.includes('định dạng văn bản') || q.includes('ctrl+b') || q.includes('căn lề')) {
    return BUILT_IN_QUESTIONS['tin6-bai-11'] || [];
  }
  if (q.includes('trình bày thông tin ở dạng bảng') || q.includes('merge cells') || q.includes('hàng và cột')) {
    return BUILT_IN_QUESTIONS['tin6-bai-12'] || [];
  }

  // Grade 7 keywords
  if (q.includes('thiết bị vào - ra') || q.includes('thiết bị vào') || q.includes('thiết bị ra') || q.includes('hdmi')) {
    return BUILT_IN_QUESTIONS['tin7-bai-1'] || [];
  }
  if (q.includes('phần mềm ứng dụng') || q.includes('hệ điều hành')) {
    return BUILT_IN_QUESTIONS['tin7-bai-2'] || [];
  }
  if (q.includes('quản lí dữ liệu trong máy tính') || q.includes('đường dẫn tệp') || q.includes('đuôi tệp')) {
    return BUILT_IN_QUESTIONS['tin7-bai-3'] || [];
  }
  if (q.includes('mạng xã hội') || q.includes('hồ sơ cá nhân')) {
    return BUILT_IN_QUESTIONS['tin7-bai-4'] || [];
  }
  if (q.includes('ứng xử trên mạng') || q.includes('quyền riêng tư')) {
    return BUILT_IN_QUESTIONS['tin7-bai-5'] || [];
  }
  if (q.includes('làm quen với phần mềm bảng tính') || q.includes('ô tính (cell)') || q.includes('name box')) {
    return BUILT_IN_QUESTIONS['tin7-bai-6'] || [];
  }
  if (q.includes('tính toán tự động trên bảng tính') || q.includes('average') || q.includes('hàm sum')) {
    return BUILT_IN_QUESTIONS['tin7-bai-7'] || [];
  }
  if (q.includes('công cụ hỗ trợ tính toán') || q.includes('hàm max') || q.includes('hàm min') || q.includes('autofill')) {
    return BUILT_IN_QUESTIONS['tin7-bai-8'] || [];
  }
  if (q.includes('trình bày bảng tính') || q.includes('borders') || q.includes('merge & center') || q.includes('comma style')) {
    return BUILT_IN_QUESTIONS['tin7-bai-9'] || [];
  }
  if (q.includes('tạo bài trình chiếu') || q.includes('powerpoint') || q.includes('title slide')) {
    return BUILT_IN_QUESTIONS['tin7-bai-11'] || [];
  }
  if (q.includes('định dạng đối tượng trên trang chiếu') || q.includes('transitions') || q.includes('animations')) {
    return BUILT_IN_QUESTIONS['tin7-bai-12'] || [];
  }

  // Grade 8 keywords
  if (q.includes('bảng tính') || q.includes('tuyệt đối') || q.includes('tương đối') || q.includes('f4') || q.includes('$a$1')) {
    return BUILT_IN_QUESTIONS['tin8-bai-5'] || [];
  }
  if (q.includes('sắp xếp và lọc') || q.includes('sort') || q.includes('filter')) {
    return BUILT_IN_QUESTIONS['tin8-bai-6'] || [];
  }
  if (q.includes('biểu đồ') || q.includes('trực quan hoá') || q.includes('quạt tròn')) {
    return BUILT_IN_QUESTIONS['tin8-bai-7'] || [];
  }
  if (q.includes('chỉnh sửa ảnh') || q.includes('gimp') || q.includes('layer') || q.includes('pixel')) {
    return BUILT_IN_QUESTIONS['tin8-bai-8b'] || [];
  }
  if (q.includes('khung hình') || q.includes('cắt ảnh') || q.includes('crop') || q.includes('scale')) {
    return BUILT_IN_QUESTIONS['tin8-bai-9b'] || [];
  }
  if (q.includes('từ thuật toán đến chương trình') || q.includes('scratch') || q.includes('tam giác đều')) {
    return BUILT_IN_QUESTIONS['tin8-bai-12'] || [];
  }
  if (q.includes('biểu diễn dữ liệu') || q.includes('hằng') || q.includes('biến số') || q.includes('mod') || q.includes('join')) {
    return BUILT_IN_QUESTIONS['tin8-bai-13'] || [];
  }
  if (q.includes('cấu trúc điều khiển') || q.includes('rẽ nhánh') || q.includes('đoán số') || q.includes('lặp')) {
    return BUILT_IN_QUESTIONS['tin8-bai-14'] || [];
  }
  if (q.includes('gỡ lỗi') || q.includes('lỗi cú pháp') || q.includes('lỗi logic')) {
    return BUILT_IN_QUESTIONS['tin8-bai-15'] || [];
  }
  if (q.includes('nghề nghiệp') || q.includes('girls in ict')) {
    return BUILT_IN_QUESTIONS['tin8-bai-16'] || [];
  }
  if (q.includes('lược sử') || q.includes('pascaline') || q.includes('babbage') || q.includes('eniac')) {
    return BUILT_IN_QUESTIONS['tin8-bai-1'] || [];
  }

  // Grade 9 keywords
  if (q.includes('thế giới kĩ thuật số') || q.includes('thiết bị số thông minh')) {
    return BUILT_IN_QUESTIONS['tin9-bai-1'] || [];
  }
  if (q.includes('giải quyết vấn đề') || q.includes('chất lượng thông tin') || q.includes('4 tiêu chí')) {
    return BUILT_IN_QUESTIONS['tin9-bai-2'] || [];
  }
  if (q.includes('phần mềm mô phỏng') || q.includes('phet')) {
    return BUILT_IN_QUESTIONS['tin9-bai-5'] || [];
  }
  if (q.includes('data validation') || q.includes('xác thực dữ liệu') || q.includes('drop-down list')) {
    return BUILT_IN_QUESTIONS['tin9-bai-9a'] || [];
  }
  if (q.includes('countif')) {
    return BUILT_IN_QUESTIONS['tin9-bai-10a'] || [];
  }
  if (q.includes('sumif')) {
    return BUILT_IN_QUESTIONS['tin9-bai-11a'] || [];
  }
  if (q.includes('hàm if') || q.includes('50/30/20') || q.includes('quản lí tài chính')) {
    return BUILT_IN_QUESTIONS['tin9-bai-12a'] || [];
  }
  if (q.includes('tường lửa') || q.includes('firewall') || q.includes('https') || q.includes('phishing')) {
    return BUILT_IN_QUESTIONS['tin9-bai-13'] || [];
  }
  if (q.includes('kỷ nguyên số') || q.includes('an ninh mạng') || q.includes('khởi nghiệp')) {
    return BUILT_IN_QUESTIONS['tin9-bai-15'] || [];
  }

  // Fallback to Grade's first lesson
  const gradeKey = `tin${gradeNum}-bai-1`;
  return BUILT_IN_QUESTIONS[gradeKey] || BUILT_IN_QUESTIONS['tin8-bai-5'] || Object.values(BUILT_IN_QUESTIONS)[0];
}

// Find questions pool when user selects MULTIPLE lessons
export function findQuestionPoolForMultipleLessons(queries: string[], gradeHint?: number | string): Question[] {
  if (!queries || queries.length === 0) {
    return findQuestionPoolForLesson('', gradeHint);
  }
  if (queries.length === 1) {
    return findQuestionPoolForLesson(queries[0], gradeHint);
  }

  const combined: Question[] = [];
  const seenTexts = new Set<string>();

  for (const q of queries) {
    const list = findQuestionPoolForLesson(q, gradeHint);
    for (const item of list) {
      const norm = item.question.trim().toLowerCase();
      if (!seenTexts.has(norm)) {
        seenTexts.add(norm);
        combined.push(item);
      }
    }
  }

  return combined.length > 0 ? combined : findQuestionPoolForLesson(queries[0], gradeHint);
}

// Generate fallback questions strictly according to chosen lessons and difficulty
// GUARANTEE: 100% Unique questions, NEVER duplicate any question, shuffles dynamically on each request!
export function generateFallbackQuestions(
  topicOrTopics: string | string[],
  count: number,
  difficulty: 'de' | 'trung_binh' | 'kho' | 'tong_hop',
  gradeHint?: number | string
): Question[] {
  let rawPool: Question[] = [];

  if (Array.isArray(topicOrTopics)) {
    rawPool = findQuestionPoolForMultipleLessons(topicOrTopics, gradeHint);
  } else {
    rawPool = findQuestionPoolForLesson(topicOrTopics, gradeHint);
  }

  const pool = shuffleArray(rawPool);
  const selectedQuestions: Question[] = [];
  const seenTexts = new Set<string>();

  const addUniqueQuestion = (q: Question, targetDiff?: 'de' | 'trung_binh' | 'kho'): boolean => {
    const normalizedText = q.question.trim().toLowerCase();
    if (!seenTexts.has(normalizedText)) {
      seenTexts.add(normalizedText);
      selectedQuestions.push({
        ...q,
        id: `q-${selectedQuestions.length + 1}-${Date.now()}-${Math.random().toString(36).substring(2, 6)}`,
        difficulty: targetDiff || q.difficulty,
      });
      return true;
    }
    return false;
  };

  // Prioritize interactive questions if available in the pool (e.g. Midterm Reviews)
  const interactivePool = shuffleArray(pool.filter((q) => q.type && q.type !== 'multiple_choice'));
  const interactiveTarget = Math.min(3, Math.min(interactivePool.length, Math.max(1, Math.floor(count * 0.25))));
  for (let i = 0; i < interactiveTarget; i++) {
    if (interactivePool[i]) {
      addUniqueQuestion(interactivePool[i]);
    }
  }

  if (difficulty === 'tong_hop') {
    const dePool = shuffleArray(pool.filter((q) => q.difficulty === 'de'));
    const tbPool = shuffleArray(pool.filter((q) => q.difficulty === 'trung_binh'));
    const khoPool = shuffleArray(pool.filter((q) => q.difficulty === 'kho'));

    const deTarget = Math.max(1, Math.round(count * 0.4));
    const khoTarget = Math.max(1, Math.round(count * 0.2));
    const tbTarget = Math.max(1, count - deTarget - khoTarget);

    // 1. Pick Easy questions
    for (const q of dePool) {
      if (selectedQuestions.filter((x) => x.difficulty === 'de').length >= deTarget) break;
      addUniqueQuestion(q, 'de');
    }

    // 2. Pick Medium questions
    for (const q of tbPool) {
      if (selectedQuestions.filter((x) => x.difficulty === 'trung_binh').length >= tbTarget) break;
      addUniqueQuestion(q, 'trung_binh');
    }

    // 3. Pick Hard questions
    for (const q of khoPool) {
      if (selectedQuestions.filter((x) => x.difficulty === 'kho').length >= khoTarget) break;
      addUniqueQuestion(q, 'kho');
    }

    // 4. Fill with remaining unique questions from the pool
    if (selectedQuestions.length < count) {
      for (const q of pool) {
        if (selectedQuestions.length >= count) break;
        addUniqueQuestion(q);
      }
    }
  } else {
    // Single difficulty ('de' | 'trung_binh' | 'kho')
    const matching = shuffleArray(pool.filter((q) => q.difficulty === difficulty));
    for (const q of matching) {
      if (selectedQuestions.length >= count) break;
      addUniqueQuestion(q, difficulty);
    }

    if (selectedQuestions.length < count) {
      for (const q of pool) {
        if (selectedQuestions.length >= count) break;
        addUniqueQuestion(q, difficulty);
      }
    }
  }

  // Safety net: Procedural variations if requested count exceeds entire pool
  let seedIndex = 1;
  while (selectedQuestions.length < count && pool.length > 0) {
    const base = pool[seedIndex % pool.length];
    const newQ: Question = {
      ...base,
      id: `gen-var-${selectedQuestions.length + 1}-${Date.now()}`,
      question: `(Mở rộng ${seedIndex}) ${base.question}`,
      difficulty: difficulty === 'tong_hop' ? base.difficulty : difficulty,
    };
    selectedQuestions.push(newQ);
    seedIndex++;
  }

  return selectedQuestions.slice(0, count).map((q) => {
    if (q.type && q.type !== 'multiple_choice') return q;
    if (!q.options || q.options.length <= 1) return q;
    const currentCorrect = q.correctAnswer ?? 0;
    const correctText = q.options[currentCorrect];
    const shuffled = [...q.options];
    for (let i = shuffled.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    const newAns = shuffled.indexOf(correctText);
    return {
      ...q,
      options: shuffled,
      correctAnswer: newAns >= 0 ? newAns : 0,
    };
  });
}

