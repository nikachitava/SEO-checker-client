import type { ISEOAnalysisResults } from "../types/ISEOAnalysisResults";
import ScoreCircle from "./ScoreCircle";

const SEOAnalysisResults = ({ url, seoScore, grade }: ISEOAnalysisResults) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 mb-6">
                <div className="flex-1">
                    <h2 className="text-2xl font-bold text-gray-800 mb-2">
                        SEO Analysis Results
                    </h2>
                    <div className="text-sm text-gray-600 break-all">{url}</div>
                </div>
                <div className="flex items-center gap-6">
                    <ScoreCircle score={seoScore} grade={grade} />
                    <div className="text-right">
                        <div className="text-3xl font-bold text-gray-800">
                            {seoScore}/100
                        </div>
                        <div className="text-sm text-gray-500">SEO Score</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SEOAnalysisResults;
