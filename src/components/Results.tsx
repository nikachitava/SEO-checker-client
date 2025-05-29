import type { IResults } from "../types/IResults";
import ContentAnalysis from "./ContentAnalysis";
import ImageAnalysis from "./ImageAnalysis";
import SEOAnalysisResult from "./SEOAnalysisResult";
import SeoInfo from "./SeoInfo";
import Suggestions from "./Suggestions";
import TechnicalSEO from "./TechnicalSEO";

const Results = ({ results }: { results: IResults }) => {
    return (
        <div className="space-y-10 py-10">
            <div className="bg-white rounded-xl shadow-lg p-6">
                <SEOAnalysisResult
                    grade={results.grade}
                    seoScore={results.seoScore}
                    url={results.url}
                />
            </div>
            {results.suggestions && results.suggestions.length > 0 && (
                <Suggestions suggestions={results.suggestions} />
            )}

            <SeoInfo
                basicSEO={results.basicSEO}
                scoreBreakdown={results.scoreBreakdown}
            />

            <div className="grid lg:grid-cols-2 gap-6">
                <ImageAnalysis images={results.images} />

                <ContentAnalysis content={results.content} />
            </div>
            <TechnicalSEO technicalSEO={results.technicalSEO} />
        </div>
    );
};

export default Results;
