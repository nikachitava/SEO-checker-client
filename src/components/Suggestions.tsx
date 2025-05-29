import { AlertCircle, TrendingUp } from "lucide-react";

const Suggestions = ({ suggestions }: { suggestions: string[] }) => {
    return (
        <div className="border-t pt-6">
            <h3 className="text-lg font-semibold text-gray-800 mb-3 flex items-center gap-2">
                <TrendingUp className="w-5 h-5 text-blue-600" />
                Top Improvement Suggestions
            </h3>
            <div className="grid gap-2">
                {suggestions.map((suggestion, index) => (
                    <div
                        key={index}
                        className="flex items-start gap-3 p-3 bg-blue-50 rounded-lg"
                    >
                        <AlertCircle className="w-4 h-4 text-blue-600 mt-0.5 flex-shrink-0" />
                        <span className="text-sm text-blue-800">
                            {suggestion}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Suggestions;
