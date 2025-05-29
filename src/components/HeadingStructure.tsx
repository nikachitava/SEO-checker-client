import { Hash } from "lucide-react";
import type { IHeadingStructure } from "../types/IResults";

const HeadingStructure = ({
    headingStructure,
}: {
    headingStructure: IHeadingStructure[];
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
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default HeadingStructure;
