import { Eye } from "lucide-react";
import type { IContent } from "../types/IResults";

const ContentAnalysis = ({ content }: { content: IContent }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Eye className="w-5 h-5" />
                Content Analysis
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">Word Count</span>
                    <span
                        className={`font-semibold ${
                            content.wordCount >= 300
                                ? "text-green-600"
                                : "text-yellow-600"
                        }`}
                    >
                        {content.wordCount}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">Readability Score</span>
                    <span
                        className={`font-semibold ${
                            content.readabilityScore >= 60
                                ? "text-green-600"
                                : "text-yellow-600"
                        }`}
                    >
                        {Math.round(content.readabilityScore)}/100
                    </span>
                </div>
            </div>
        </div>
    );
};

export default ContentAnalysis;
