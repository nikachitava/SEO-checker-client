import { Check, Copy, ExternalLink } from "lucide-react";
import type { ISEOAnalysisResults } from "../types/ISEOAnalysisResults";
import ScoreCircle from "./ScoreCircle";
import { useState } from "react";

const SEOAnalysisResults = ({ url, seoScore, grade }: ISEOAnalysisResults) => {
    const [copiedUrl, setCopiedUrl] = useState(false);

    const copyUrl = async () => {
        try {
            await navigator.clipboard.writeText(url);
            setCopiedUrl(true);
            setTimeout(() => setCopiedUrl(false), 2000);
        } catch (err) {
            console.error("Failed to copy URL");
        }
    };

    const getGradeColor = (grade: string) => {
        switch (grade) {
            case "A":
                return "from-green-500 to-emerald-600";
            case "B":
                return "from-blue-500 to-indigo-600";
            case "C":
                return "from-yellow-500 to-orange-500";
            case "D":
                return "from-orange-500 to-red-500";
            case "F":
                return "from-red-500 to-red-600";
            default:
                return "from-gray-500 to-gray-600";
        }
    };

    const getGradeDescription = (grade: string) => {
        switch (grade) {
            case "A":
                return "Excellent SEO optimization";
            case "B":
                return "Good SEO performance";
            case "C":
                return "Fair SEO, room for improvement";
            case "D":
                return "Poor SEO, needs attention";
            case "F":
                return "Critical SEO issues";
            default:
                return "SEO analysis complete";
        }
    };
    return (
        <div className="bg-gradient-to-br from-white to-gray-50 rounded-2xl shadow-xl border border-gray-100 overflow-hidden hover:shadow-2xl transition-shadow duration-300">
            <div
                className={`h-2 bg-gradient-to-r ${getGradeColor(grade)}`}
            ></div>

            <div className="p-8">
                <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8">
                    <div className="flex-1 min-w-0">
                        <div className="flex items-center gap-3 mb-4">
                            <h2 className="text-3xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent">
                                SEO Analysis Results
                            </h2>
                            <div
                                className={`px-3 py-1 rounded-full text-sm font-semibold text-white bg-gradient-to-r ${getGradeColor(
                                    grade
                                )} shadow-lg`}
                            >
                                Grade {grade}
                            </div>
                        </div>

                        <p className="text-gray-600 mb-4 text-lg">
                            {getGradeDescription(grade)}
                        </p>

                        <div className="group bg-white rounded-xl p-4 shadow-sm border border-gray-200 hover:border-gray-300 transition-all duration-200">
                            <div className="flex items-center gap-3">
                                <div className="p-2 bg-blue-50 rounded-lg group-hover:bg-blue-100 transition-colors">
                                    <ExternalLink className="w-4 h-4 text-blue-600" />
                                </div>
                                <div className="flex-1 min-w-0">
                                    <div className="text-xs text-gray-500 uppercase tracking-wide font-medium mb-1">
                                        analyzed url
                                    </div>
                                    <div className="text-sm text-gray-800 font-medium truncate">
                                        {url}
                                    </div>
                                </div>
                                <button
                                    onClick={copyUrl}
                                    className="flex items-center gap-2 px-3 py-2 text-xs bg-gray-100 hover:bg-gray-200 text-gray-700 rounded-lg transition-all duration-200 hover:shadow-sm"
                                >
                                    {copiedUrl ? (
                                        <>
                                            <Check className="w-3 h-3 text-green-600" />
                                            <span className="text-green-600 font-medium">
                                                Copied!
                                            </span>
                                        </>
                                    ) : (
                                        <>
                                            <Copy className="w-3 h-3" />
                                            <span>Copy</span>
                                        </>
                                    )}
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="flex items-center gap-8 lg:gap-12">
                        <ScoreCircle score={seoScore} grade={grade} />

                        <div className="text-center">
                            <div className="relative">
                                <div className="text-5xl lg:text-6xl font-bold text-gray-800 mb-2">
                                    {seoScore}
                                </div>
                                <div className="absolute -top-2 -right-6 text-2xl text-gray-400 font-medium">
                                    /100
                                </div>
                            </div>

                            <div className="bg-white px-4 py-2 rounded-full shadow-sm border border-gray-200">
                                <span className="text-sm font-semibold text-gray-600 uppercase tracking-wide">
                                    SEO Score
                                </span>
                            </div>

                            <div className="mt-3 flex justify-center">
                                <div className="flex items-center gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <div
                                            key={i}
                                            className={`w-2 h-2 rounded-full ${
                                                i < Math.ceil(seoScore / 20)
                                                    ? `bg-gradient-to-r ${getGradeColor(
                                                          grade
                                                      )}`
                                                    : "bg-gray-200"
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOAnalysisResults;
