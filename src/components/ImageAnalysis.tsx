import { Image } from "lucide-react";
import type { IImages } from "../types/IResults";

const ImageAnalysis = ({ images }: { images: IImages }) => {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6">
            <h3 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                <Image className="w-5 h-5" />
                Images Analysis
            </h3>
            <div className="space-y-4">
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">Total Images</span>
                    <span className="font-semibold">{images.total}</span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">Without Alt Text</span>
                    <span
                        className={`font-semibold ${
                            images.withoutAlt > 0
                                ? "text-red-600"
                                : "text-green-600"
                        }`}
                    >
                        {images.withoutAlt}
                    </span>
                </div>
                <div className="flex justify-between items-center">
                    <span className="text-gray-700">Empty Alt Text</span>
                    <span
                        className={`font-semibold ${
                            images.withEmptyAlt > 0
                                ? "text-yellow-600"
                                : "text-green-600"
                        }`}
                    >
                        {images.withEmptyAlt}
                    </span>
                </div>
                <div className="border-t pt-4">
                    <div className="flex justify-between items-center">
                        <span className="font-semibold text-gray-700">
                            Alt Optimization
                        </span>
                        <span
                            className={`text-xl font-bold ${
                                images.altOptimization >= 80
                                    ? "text-green-600"
                                    : images.altOptimization >= 60
                                    ? "text-yellow-600"
                                    : "text-red-600"
                            }`}
                        >
                            {images.altOptimization}%
                        </span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ImageAnalysis;
