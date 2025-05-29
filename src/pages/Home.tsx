import { Search, Zap } from "lucide-react";
import { useState } from "react";
import Results from "../components/Results";
import type { IResults } from "../types/IResults";

const Home = () => {
    const [url, setUrl] = useState("");
    const [results, setResults] = useState<null | IResults>(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");

    const checkSEO = async () => {
        if (!url) return;

        setLoading(true);
        setError("");
        setResults(null);

        try {
            const response = await fetch(
                `http://localhost:3000/seo-checker?url=${encodeURIComponent(
                    url
                )}`
            );

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            setResults(data);
        } catch (err: any) {
            setError(
                err.message ||
                    "Failed to analyze URL. Please check the URL and try again."
            );
        } finally {
            setLoading(false);
        }
    };

    console.log(results);

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 p-4">
            <div className="max-w-6xl mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2 flex items-center justify-center gap-3">
                        <Search className="text-blue-600" />
                        SEO Checker
                    </h1>
                    <p className="text-gray-600">
                        Complete SEO analysis with technical insights and
                        performance metrics
                    </p>
                </div>

                <div className="bg-white rounded-xl shadow-lg p-6 mb-8">
                    <div className="space-y-4">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Website URL
                            </label>
                            <div className="flex gap-3">
                                <input
                                    type="url"
                                    value={url}
                                    onChange={(e) => setUrl(e.target.value)}
                                    placeholder="https://example.com"
                                    className="flex-1 px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                                <button
                                    onClick={checkSEO}
                                    disabled={!url || loading}
                                    className="px-6 py-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2 font-medium transition-colors"
                                >
                                    {loading ? (
                                        <>
                                            <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                            Analyzing...
                                        </>
                                    ) : (
                                        <>
                                            <Zap className="w-4 h-4" />
                                            Analyze SEO
                                        </>
                                    )}
                                </button>
                            </div>
                            {error && (
                                <div className="mt-3 p-4 bg-red-50 border border-red-200 rounded-lg">
                                    <div className="text-red-600 text-sm">
                                        {error}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                {results && <Results results={results} />}
            </div>
        </div>
    );
};

export default Home;
