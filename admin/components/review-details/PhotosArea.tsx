export default function PhotosArea({ photos }) {
    console.log(photos);

    return (
        <div className="p-4 border rounded-lg bg-white shadow-md">
            <h2 className="text-lg font-semibold mb-2">Uploaded Photos</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {(photos || []).map((photo, index) => (
                    <div key={`${photo.question}-${index}`} className="flex flex-col items-center">
                        <h3 className="text-sm font-medium mb-2 text-center">
                            {photo.question || "No question"}
                        </h3>
                        <div className="w-full h-auto aspect-square bg-gray-200 flex items-center justify-center rounded-lg overflow-hidden">
                            {photo.answer ? (
                                <img
                                    src={photo.answer}
                                    alt={photo.question || "Uploaded photo"}
                                    className="object-cover w-full h-full"
                                />
                            ) : (
                                <span className="text-gray-500">No Image</span>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
