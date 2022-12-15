import { v4 as uuid } from "uuid";

export const setOfQuestions = [
  {
    id: uuid(),
    title: "Bộ câu hỏi 1",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1/ Phần của đường bộ đươc sử dụng cho các phương tiện giao thông qua lại là gì?",
        answers: [
          "1 – Phần mặt đường và lề đường",
          "2 – Phần đường xe chạy",
          "3 – Phần đường xe cơ giới",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question: "Câu 2/  “Làn đường” là gì?",
        answers: [
          "1 – Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
          "3 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",

          "2 – Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",

          "3 – Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",

          "2 – Là bộ phận đươcng để phân tách phần đường xe chạy và hành lang an toàn giao thông.",

          "3  – Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        correctAnswer: 2,
      },
      {
        id: uuid(),
        question: "Câu 5/ “Dải phân cách” trên đường bộ gồm những loại nào?",
        answers: [
          "1 – Dải phân cách gồm loại cố định và loại di động",

          "2 – Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",

          "3 – Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: uuid(),
    title: "Bộ câu hỏi 2",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1: Người lái xe được hiểu như thế nào trong các khái niệm dưới đây",
        answers: [
          "1 – Là người điều khiển xe cơ giới",
          "2 – LÀ người điều khiển xe thô sơ",
          "3 – LÀ người điều khiển xe có súc vật kéo",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 2/ Đường mà trên đó phương tiện tham gia giao thông được các phương tiện giao thông được các phương tiện giao thông đến từ hướng khác nhường đường khi qua nơi đường giao nhau, được cắm biển báo hiệu đường ưu tiên là loại đường gì?",
        answers: [
          "1 – Đường không ưu tiên",
          "2 – Đường tỉnh lộ",
          "3 – Đường quốc lộ",
          "4 – Đường ưu tiên",
        ],
        correctAnswer: 3,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khai niệm “phương tiện giao thông cơ giới đường bộ” được hiểu thế nào là đúng?",
        answers: [
          "1 – Gồm ô tô, máy kéo, xe mô tô hai bánh, xe mô to ba bánh, xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng",

          "2 – Gồm xe ô tô; máy kéo; rơ moóc hoặc sơ mi rơ moóc được kéo bởi xe ô tô, máy kéo; xe mô tô hai bánh; xe mô tô ba bánh, xe gắn máy(kể cả xe máy điện) và các loại xe tương tự.",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Khái niệm “phương tiện giao thông thô sơ đường bộ” được hiểu thế nào là đúng?",
        answers: [
          "1 – Gồm xe đạp (kể cả xe đạp máy, xe đạp điện), xe xích lô, xe lăn dùng cho người khuyết tật, xe súc vật kéo và các loại xe tương tự",

          "2 – Gồm xe đạp(kể cả xe đạp máy, xe đạp điện), xe gắn máy, xe cơ giới dùng cho người khuyết tật và xe máy chuyên dùng",

          "3- Gồm xe ô tô, máy kéo, rơ moóc hoặc sơ mi rơ mo óc được kéo bơi xe ô tô, máy kéo",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 5/ “ Phương tiện tham gia giao thông đường bộ” gồm những loại nào?",
        answers: [
          "1 – Phương tiện giao thông cơ giới đường bộ",

          "2 – Phương tiện giao thông thô sơ đường bộ và xe máy chuyên dùng",

          "3 – Cả ý 1 và 2",
        ],
        correctAnswer: 2,
      },
    ],
  },
  {
    id: uuid(),
    title: "Bộ câu hỏi 1",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1/ Phần của đường bộ đươc sử dụng cho các phương tiện giao thông qua lại là gì?",
        answers: [
          "1 – Phần mặt đường và lề đường",
          "2 – Phần đường xe chạy",
          "3 – Phần đường xe cơ giới",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question: "Câu 2/  “Làn đường” là gì?",
        answers: [
          "1 – Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
          "3 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",

          "2 – Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",

          "3 – Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",

          "2 – Là bộ phận đươcng để phân tách phần đường xe chạy và hành lang an toàn giao thông.",

          "3  – Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        correctAnswer: 2,
      },
      {
        id: uuid(),
        question: "Câu 5/ “Dải phân cách” trên đường bộ gồm những loại nào?",
        answers: [
          "1 – Dải phân cách gồm loại cố định và loại di động",

          "2 – Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",

          "3 – Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: uuid(),
    title: "Bộ câu hỏi 1",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1/ Phần của đường bộ đươc sử dụng cho các phương tiện giao thông qua lại là gì?",
        answers: [
          "1 – Phần mặt đường và lề đường",
          "2 – Phần đường xe chạy",
          "3 – Phần đường xe cơ giới",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question: "Câu 2/  “Làn đường” là gì?",
        answers: [
          "1 – Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
          "3 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",

          "2 – Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",

          "3 – Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",

          "2 – Là bộ phận đươcng để phân tách phần đường xe chạy và hành lang an toàn giao thông.",

          "3  – Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        correctAnswer: 2,
      },
      {
        id: uuid(),
        question: "Câu 5/ “Dải phân cách” trên đường bộ gồm những loại nào?",
        answers: [
          "1 – Dải phân cách gồm loại cố định và loại di động",

          "2 – Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",

          "3 – Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: uuid(),
    title: "Bộ câu hỏi 1",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1/ Phần của đường bộ đươc sử dụng cho các phương tiện giao thông qua lại là gì?",
        answers: [
          "1 – Phần mặt đường và lề đường",
          "2 – Phần đường xe chạy",
          "3 – Phần đường xe cơ giới",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question: "Câu 2/  “Làn đường” là gì?",
        answers: [
          "1 – Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
          "3 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",

          "2 – Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",

          "3 – Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",

          "2 – Là bộ phận đươcng để phân tách phần đường xe chạy và hành lang an toàn giao thông.",

          "3  – Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        correctAnswer: 2,
      },
      {
        id: uuid(),
        question: "Câu 5/ “Dải phân cách” trên đường bộ gồm những loại nào?",
        answers: [
          "1 – Dải phân cách gồm loại cố định và loại di động",

          "2 – Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",

          "3 – Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
        ],
        correctAnswer: 0,
      },
    ],
  },
  {
    id: uuid(),
    title: "Bộ câu hỏi 1",
    time: 300,
    point: 0,
    pointMax: 500,
    userAnswersT: 0,
    userAnswersF: 0,
    listQuestion: [
      {
        id: uuid(),
        question:
          "Câu 1/ Phần của đường bộ đươc sử dụng cho các phương tiện giao thông qua lại là gì?",
        answers: [
          "1 – Phần mặt đường và lề đường",
          "2 – Phần đường xe chạy",
          "3 – Phần đường xe cơ giới",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question: "Câu 2/  “Làn đường” là gì?",
        answers: [
          "1 – Là một phần của phần đường xe chạy được chai theo chiều dọc của đường, sử dụng cho xe chạy.",
          "2 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có bề rộng đủ cho xe chạy an toàn",
          "3 – Là một phần của phần đường xe chạy được chia theo chiều dọc của đường, có đủ bề rộng cho xe ô tô chạy an toàn",
        ],
        correctAnswer: 1,
      },
      {
        id: uuid(),
        question:
          "Câu 3/ Khái niệm “khổ giới hạn đường bộ” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là khoảng trống có kích thước giới hạn về chiều cao, chiều rộng của đường, cầu, bến phà, hầm đường bộ để các xe kể cả hàng hóa xếp trên xe đi qua được an toàn.",

          "2 – Là khoảng trống có kích thước giới hạn về chiều rộng của đường, cầu, bến phà, hầm trên đường bộ để các xe kể cả hàng hóa xếp trên xe được đi qua an toàn",

          "3 – Là khoảng trống có kích thước giới hạn về chiều cao của đường, cầu, bến phà, hầm trên đường bộ để các xe được đi qua an toàn",
        ],
        correctAnswer: 0,
      },
      {
        id: uuid(),
        question:
          "Câu 4/ Trong các khái niệm dưới đây, “dải phân cách” được hiểu như thế nào là đúng?",
        answers: [
          "1 – Là bộ phận của đường để ngăn cách không cho các loại xe vào những nơi không được phép",

          "2 – Là bộ phận đươcng để phân tách phần đường xe chạy và hành lang an toàn giao thông.",

          "3  – Là bộ phận của đường để phân chia mặt đường thành hai chiều xe chạy riêng biệt hoặc để phân chia phần đường của xe cơ giới và xe thô sơ.",
        ],
        correctAnswer: 2,
      },
      {
        id: uuid(),
        question: "Câu 5/ “Dải phân cách” trên đường bộ gồm những loại nào?",
        answers: [
          "1 – Dải phân cách gồm loại cố định và loại di động",

          "2 – Dải phân cách gồm tường chống ồn, hộ lan cứng và hộ lan mềm",

          "3 – Dải phân cách gồm giá long môn và biển báo hiệu đường bộ",
        ],
        correctAnswer: 0,
      },
    ],
  },
];
