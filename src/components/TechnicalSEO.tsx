import { CheckCircle, Smartphone, XCircle } from "lucide-react";
import type { ITechnicalSEO } from "../types/IResults";

const TechnicalSEO = ({ technicalSEO }: { technicalSEO: ITechnicalSEO }) => {
    const labels: Record<keyof ITechnicalSEO, string> = {
        hasViewportMeta: "Viewport Meta Tag",
        hasCanonical: "Canonical URL",
        hasLangAttribute: "Language Attribute",
        hasOpenGraph: "Open Graph Tags",
        hasJsonLd: "Structured Data",
        hasFavicon: "Favicon",
        hasRobotsMeta: "Robots Meta Tag",
        hasTwitterCard: "Twitter Card Tags",
    };

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Smartphone className="w-5 h-5" />
                Technical SEO
            </h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                {(
                    Object.entries(technicalSEO) as Array<
                        [keyof ITechnicalSEO, boolean]
                    >
                ).map(([key, value]) => (
                    <div
                        key={key}
                        className={`p-4 rounded-lg border-2 ${
                            value
                                ? "border-green-200 bg-green-50"
                                : "border-red-200 bg-red-50"
                        }`}
                    >
                        <div className="flex items-center gap-2">
                            {value ? (
                                <CheckCircle className="w-5 h-5 text-green-600" />
                            ) : (
                                <XCircle className="w-5 h-5 text-red-600" />
                            )}
                            <span
                                className={`font-medium ${
                                    value ? "text-green-800" : "text-red-800"
                                }`}
                            >
                                {labels[key] || key}
                            </span>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TechnicalSEO;
