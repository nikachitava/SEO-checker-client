import { AlertCircle, CheckCircle, FileText } from "lucide-react";
import ScoreBreakdownCard from "./ScoreBreakdownCard";
import type { ISeoInfo } from "../types/ISeoInfo";

const SeoInfo = ({ scoreBreakdown, basicSEO }: ISeoInfo) => {
    return (
        <div className="grid lg:grid-cols-2 gap-6">
            {/* Score Breakdown */}
            <ScoreBreakdownCard breakdown={scoreBreakdown} />

            {/* Basic SEO */}
            <div className="bg-white rounded-xl shadow-lg p-6">
                <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                    <FileText className="w-5 h-5" />
                    Basic SEO Elements
                </h3>
                <div className="space-y-4">
                    <div className="border-l-4 border-blue-500 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-700">
                                Title Tag
                            </span>
                            {basicSEO.title.optimal ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                            )}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                            Length: {basicSEO.title.length} characters
                        </div>
                        <div className="text-sm bg-gray-50 p-2 rounded">
                            {basicSEO.title.content || "No title found"}
                        </div>
                    </div>

                    <div className="border-l-4 border-green-500 pl-4">
                        <div className="flex items-center gap-2 mb-1">
                            <span className="font-semibold text-gray-700">
                                Meta Description
                            </span>
                            {basicSEO.metaDescription.optimal ? (
                                <CheckCircle className="w-4 h-4 text-green-600" />
                            ) : (
                                <AlertCircle className="w-4 h-4 text-yellow-600" />
                            )}
                        </div>
                        <div className="text-sm text-gray-600 mb-1">
                            Length: {basicSEO.metaDescription.length} characters
                        </div>
                        <div className="text-sm bg-gray-50 p-2 rounded">
                            {basicSEO.metaDescription.content ||
                                "No meta description found"}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SeoInfo;
