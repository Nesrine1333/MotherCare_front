import React, { useState } from "react";

const questions = [
  {
    id: 0,
    text: "1. كنتُ قادرًا على الضحك ورؤية الجانب المضحك من الأمور:",
    options: [
      "كما كنت دائمًا",
      "ليس بنفس القدر الآن",
      "بالتأكيد أقل من ذي قبل",
      "لا، لم أستطع على الإطلاق",
    ],
  },
  {
    id: 1,
    text: "2. كنتُ أتطلع إلى الأمور القادمة بشعور من الفرح:",
    options: [
      "كما كنت دائمًا",
      "أقل إلى حدٍّ ما مما كنت عليه",
      "أقل بكثير مما كنت عليه",
      "بالكاد أشعر بأي متعة",
    ],
  },
  {
    id: 2,
    text: "3. كنت ألوم نفسي دون سبب واضح عندما تسوء الأمور:",
    options: [
      "نعم، معظم الوقت",
      "نعم، أحيانًا",
      "نادرًا",
      "لا، أبدًا",
    ],
  },
  {
    id: 3,
    text: "4. شعرتُ بالقلق أو التوتر دون سبب واضح:",
    options: [
      "لا، أبدًا",
      "نادرًا جدًا",
      "نعم، أحيانًا",
      "نعم، كثيرًا",
    ],
  },
  {
    id: 4,
    text: "5. شعرتُ بالخوف أو الذعر دون سبب وجيه:",
    options: [
      "نعم، كثيرًا",
      "نعم، أحيانًا",
      "لا، ليس كثيرًا",
      "لا، أبدًا",
    ],
  },
  {
    id: 5,
    text: "6. شعرتُ أن الأمور تتراكم عليّ ولم أتمكن من التعامل معها:",
    options: [
      "نعم، في معظم الوقت ولم أكن أستطيع التأقلم",
      "نعم، أحيانًا لم أكن أتأقلم كما العادة",
      "لا، كنت أتعامل بشكل جيد في أغلب الأوقات",
      "لا، كنت أتعامل مع الأمور كما أفعل دائمًا",
    ],
  },
  {
    id: 6,
    text: "7. كنتُ حزينًا إلى درجة أن النوم أصبح صعبًا:",
    options: [
      "نعم، في معظم الوقت",
      "نعم، أحيانًا",
      "نادرًا",
      "لا، أبدًا",
    ],
  },
  {
    id: 7,
    text: "8. شعرت بالحزن أو الكآبة:",
    options: [
      "نعم، في معظم الوقت",
      "نعم، كثيرًا",
      "نادرًا",
      "لا، أبدًا",
    ],
  },
  {
    id: 8,
    text: "9. شعرتُ بالحزن الشديد لدرجة أنني بكيت:",
    options: [
      "نعم، في معظم الوقت",
      "نعم، كثيرًا",
      "فقط في بعض الأحيان",
      "لا، أبدًا",
    ],
  },
  {
    id: 9,
    text: "10. راودتني فكرة إيذاء نفسي:",
    options: [
      "نعم، كثيرًا",
      "أحيانًا",
      "نادرًا جدًا",
      "أبدًا",
    ],
  },
];

// Reverse scored questions indices (0-based): 6,7,8 (Q7–Q9)
const reverseScoredIndices = [6, 7, 8];

interface Result {
  totalScore: number;
  riskLevel: string;
  recommendation: string;
}

const calculateEPDSScore = (responses: number[]): Result => {
  let score = 0;
  for (let i = 0; i < responses.length; i++) {
    const raw = responses[i];
    const value = reverseScoredIndices.includes(i) ? 3 - raw : raw;
    score += value;
  }

  let riskLevel = "";
  let recommendation = "";

  if (score >= 13) {
    riskLevel = "High risk of postpartum depression";
    recommendation = "Strongly advised to seek professional help or therapy.";
  } else if (score >= 10) {
    riskLevel = "Possible depression";
    recommendation =
      "Recommended to monitor symptoms and consider speaking to a mental health professional.";
  } else {
    riskLevel = "Low risk";
    recommendation = "No immediate concern, but stay aware of mental health changes.";
  }

  return {
    totalScore: score,
    riskLevel,
    recommendation,
  };
};

const EPDSForm: React.FC = () => {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [responses, setResponses] = useState<number[]>(Array(10).fill(-1));
  const [showResult, setShowResult] = useState(false);
  const [result, setResult] = useState<Result | null>(null);

  const handleOptionClick = (optionIndex: number) => {
    const newResponses = [...responses];
    newResponses[currentQuestion] = optionIndex;
    setResponses(newResponses);
  };

  const nextQuestion = () => {
    if (responses[currentQuestion] === -1) return; // prevent going next without answer
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion((q) => q + 1);
    } else {
      // End of quiz
      const calcResult = calculateEPDSScore(responses);
      setResult(calcResult);
      setShowResult(true);
    }
  };

  const prevQuestion = () => {
    if (currentQuestion > 0) setCurrentQuestion((q) => q - 1);
  };

  if (showResult && result) {
    return (
      <div className="w-full py-16 p-16 bg-white rounded-lg shadow-lg text-[#2e1042]">
        <h2 className="text-2xl font-bold mb-4">نتيجة التقييم</h2>
        <p className="mb-2">
          <strong>النقاط الكلية:</strong> {result.totalScore}
        </p>
        <p className="mb-2">
          <strong>مستوى المخاطر:</strong> {result.riskLevel}
        </p>
        <p className="mb-4">{result.recommendation}</p>
        <button
          onClick={() => {
            setShowResult(false);
            setCurrentQuestion(0);
            setResponses(Array(10).fill(-1));
          }}
          className="bg-[#8fc4f5] hover:bg-[#2e1042] text-white px-6 py-2 rounded-lg"
        >
          ةإعادة المحاول
        </button>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = responses[currentQuestion];

  return (
    <div className="w-full p-16 mt-4 bg-[#e9e7e3] rounded-lg shadow-lg text-[#2e1042]">
      <h2 className="text-xl font-semibold mb-6">
        سؤال {currentQuestion + 1} من {questions.length}
      </h2>
      <p className="mb-6">{question.text}</p>
      <div className="flex flex-col gap-4">
        {question.options.map((option, i) => (
          <button
            key={i}
            onClick={() => handleOptionClick(i)}
            className={`text-left px-4 py-3 rounded-lg border cursor-pointer transition-colors
              ${
                selectedAnswer === i
                  ? "bg-[#8fc4f5] text-white border-[#8fc4f5]"
                  : "bg-white border-[#452923] hover:bg-[#c14f44] hover:text-white"
              }`}
          >
            {option}
          </button>
        ))}
      </div>

      <div className="flex justify-between mt-8">
        <button
          onClick={prevQuestion}
          disabled={currentQuestion === 0}
          className={`px-6 py-2 rounded-lg border border-[#452923] ${
            currentQuestion === 0
              ? "opacity-50 cursor-not-allowed"
              : "hover:bg-[#c14f44] hover:text-white"
          }`}
        >
          السابق
        </button>
        <button
          onClick={nextQuestion}
          disabled={selectedAnswer === -1}
          className={`px-6 py-2 rounded-lg border border-[#452923] ${
            selectedAnswer === -1
              ? "opacity-50 cursor-not-allowed"
              : "bg-[#8fc4f5] hover:bg-[#2e1042] text-white"
          }`}
        >
          {currentQuestion === questions.length - 1 ? "إظهار النتيجة" : "التالي"}
        </button>
      </div>
    </div>
  );
};

export default EPDSForm;
