const Loader = ({ color = "bg-blue-500" }) => {
    return (
        <div className="w-64 h-2 bg-gray-200 rounded-full overflow-hidden">
            <div
                className={`h-full ${color} rounded-full`}
                style={{
                    animation:
                        "progress 2s cubic-bezier(0.4, 0, 0.2, 1) infinite",
                    width: "40%",
                }}
            />
        </div>
    );
};

export default Loader;
