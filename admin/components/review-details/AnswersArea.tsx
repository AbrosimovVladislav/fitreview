import InfoCard from "@/components/design-system/InfoCard";

export default function AnswersArea({ answers }) {
    return (
        <div className="p-4 border rounded-lg bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">User Information</h2>
            <div className="flex justify-between">
                {(answers || []).map((answer, index) => (
                    <InfoCard
                        key={`${answer.question}-${index}`}
                        title={answer.question || "No question"}
                        value={answer.answer || "No answer"}
                    />
                ))}
            </div>
        </div>
    );
}
