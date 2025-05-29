import { BarChart3 } from "lucide-react";
import type { IScoreBreakdown } from "../types/IResults";

type MaxScores = { [key in keyof IScoreBreakdown]: number };

const ScoreBreakdownCard = ({ breakdown }: { breakdown: IScoreBreakdown }) => {
    const maxScores: MaxScores = {
        title: 15,
        metaDescription: 15,
        headings: 10,
        images: 10,
        content: 15,
        technical: 15,
        pageSpeed: 20,
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <BarChart3 className="w-5 h-5" />
                Score Breakdown
            </h3>
            <div className="space-y-4">
                {(
                    Object.entries(breakdown) as Array<
                        [keyof IScoreBreakdown, any]
                    >
                ).map(([key, value]) => {
                    const maxScore = maxScores[key];
                    const score =
                        typeof value === "object" ? value.score : value;
                    const percentage = (score / maxScore) * 100;

                    return (
                        <div key={key} className="space-y-2">
                            <div className="flex justify-between items-center">
                                <span className="capitalize font-medium text-gray-700">
                                    {key.replace(/([A-Z])/g, " $1").trim()}
                                </span>
                                <span className="text-sm font-semibold text-gray-600">
                                    {score}/{maxScore}
                                </span>
                            </div>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div
                                    className={`h-2 rounded-full transition-all duration-500 ${
                                        percentage >= 80
                                            ? "bg-green-500"
                                            : percentage >= 60
                                            ? "bg-yellow-500"
                                            : "bg-red-500"
                                    }`}
                                    style={{ width: `${percentage}%` }}
                                />
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default ScoreBreakdownCard;
