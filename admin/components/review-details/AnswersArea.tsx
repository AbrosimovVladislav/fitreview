import { IAdminReviewAnswerDto } from "@/interface/interfaces";

interface AnswersAreaProps {
    answers: IAdminReviewAnswerDto[];
}

export default function AnswersArea({ answers }: AnswersAreaProps) {
    return (
        <div className="p-4 border rounded-lg bg-gradient-to-r from-green-400 to-green-600 text-white shadow-md">
            <h2 className="text-lg font-semibold mb-4">User Answers</h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                {(answers || []).map((answer, index) => {
                    let parsedAnswer;

                    try {
                        parsedAnswer = JSON.parse(answer.answer);
                        if (!Array.isArray(parsedAnswer)) {
                            parsedAnswer = [parsedAnswer]; // Преобразуем одиночный элемент в массив
                        }
                    } catch {
                        parsedAnswer = [answer.answer]; // Если парсинг не удался, оставляем как строку
                    }

                    return (
                        <div key={`${answer.question}-${index}`} className="flex flex-col p-4 bg-white text-black rounded-lg shadow-md">
                            <h3 className="text-md font-bold">{answer.question || "No question"}</h3>

                            {parsedAnswer.length > 1 ? (
                                <ul className="mt-2 space-y-2 list-none">
                                    {parsedAnswer.map((item, idx) => (
                                        <li key={idx} className="flex items-center">
                                            <div className="w-6 h-6 flex items-center justify-center bg-gray-800 text-white text-sm font-bold rounded-full mr-2">
                                                {idx + 1}
                                            </div>
                                            <span className="text-sm text-gray-700">{item}</span>
                                        </li>
                                    ))}
                                </ul>
                            ) : (
                                <p className="mt-2 text-md text-gray-700">{parsedAnswer[0] || "No answer"}</p>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
}
