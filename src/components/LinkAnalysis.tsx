import type { ILinkAnalysis } from "../types/ILinkAnalysis";

const LinkAnalysis: React.FC<ILinkAnalysis> = ({ linkAnalysis }) => {
    const { internalLinks, externalLinks, noFollowLinks, totalLinks } =
        linkAnalysis;

    const item = (label: string, value: number) => (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-2xl font-bold text-green-600">{value}</span>
        </div>
    );
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Link Analysis
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
                {item("Internal Links", internalLinks)}
                {item("External Links", externalLinks)}
                {item("NoFollow Links", noFollowLinks)}
                {item("Total Links", totalLinks)}
            </div>
        </div>
    );
};

export default LinkAnalysis;
