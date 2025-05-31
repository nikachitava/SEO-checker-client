import type { IPageSpeed } from "../types/IPageSpeed";

const PageSpeed: React.FC<IPageSpeed> = ({ pageSpeed }) => {
    const scoreItem = (label: string, value: number | null) => (
        <div className="flex flex-col items-center bg-white rounded-lg shadow-md p-4">
            <span className="text-sm text-gray-500">{label}</span>
            <span className="text-2xl font-bold text-blue-600">
                {value !== null ? value : "N/A"}
            </span>
        </div>
    );

    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h2 className="text-xl font-semibold mb-4 text-gray-800">
                Page Speed Overview
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {scoreItem("Performance", pageSpeed.performance)}
                {scoreItem("SEO", pageSpeed.seo)}
                {scoreItem("Accessibility", pageSpeed.accessibility)}
            </div>
        </div>
    );
};

export default PageSpeed;
