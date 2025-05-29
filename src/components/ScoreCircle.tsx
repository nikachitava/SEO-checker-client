import type { IScoreCircle } from "../types/IScoreCircle";

const getGradeColor = (grade: string) => {
    switch (grade) {
        case "A":
            return "text-green-600 bg-green-100";
        case "B":
            return "text-blue-600 bg-blue-100";
        case "C":
            return "text-yellow-600 bg-yellow-100";
        case "D":
            return "text-orange-600 bg-orange-100";
        case "F":
            return "text-red-600 bg-red-100";
        default:
            return "text-gray-600 bg-gray-100";
    }
};

const ScoreCircle: React.FC<IScoreCircle> = ({ score, grade }) => {
    const circumference = 2 * Math.PI * 45;
    const strokeDasharray = `${(score / 100) * circumference} ${circumference}`;

    return (
        <div className="relative w-32 h-32">
            <svg
                className="w-32 h-32 transform -rotate-90"
                viewBox="0 0 100 100"
            >
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-gray-200"
                />
                <circle
                    cx="50"
                    cy="50"
                    r="45"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={strokeDasharray}
                    className={
                        score >= 80
                            ? "text-green-500"
                            : score >= 60
                            ? "text-yellow-500"
                            : "text-red-500"
                    }
                    style={{ transition: "stroke-dasharray 1s ease-in-out" }}
                />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                    <div className="text-2xl font-bold">{score}</div>
                    <div
                        className={`text-lg font-semibold px-2 py-1 rounded ${getGradeColor(
                            grade
                        )}`}
                    >
                        {grade}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ScoreCircle;
