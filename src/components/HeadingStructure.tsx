import { Hash } from "lucide-react";
import type { IHeadingStructure } from "../types/IResults";

const HeadingStructure = ({
    headingStructure,
}: {
    headingStructure: IHeadingStructure;
}) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Hash className="w-5 h-5" />
                Heading Structure
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
                {headingStructure.map((heading, index) => {
                    const level = index + 1;
                    return (
                        <div key={level} className="space-y-3">
                            <div className="flex items-center gap-2">
                                <span className="font-semibold text-gray-700">
                                    H{level} Tags
                                </span>
                                <span className="text-sm bg-gray-100 text-gray-600 px-2 py-1 rounded">
                                    {heading.count}
                                </span>
                            </div>
                            {heading.tags.length > 0 ? (
                                <div className="space-y-2">
                                    {heading.tags
                                        .slice(0, 3)
                                        .map((tag, tagIndex) => (
                                            <div
                                                key={tagIndex}
                                                className="text-sm bg-gray-50 p-2 rounded truncate"
                                            >
                                                {tag}
                                            </div>
                                        ))}
                                    {heading.tags.length > 3 && (
                                        <div className="text-xs text-gray-500">
                                            +{heading.tags.length - 3} more
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <div className="text-sm text-gray-400 italic">
                                    No H{level} tags found
                                </div>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeadingStructure;
