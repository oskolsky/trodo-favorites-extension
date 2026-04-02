export const EmptyState = () => (
    <div className="flex flex-col items-center justify-center px-5 py-12 text-center text-gray-500">
        <div className="mb-4">
            <a href="https://trodo.com?utm_source=favorites_extension" target="_blank" rel="noopener noreferrer">
                <img src="/icons/128.png" alt="Trodo" className="size-12" />
            </a>
        </div>
        <p className="mb-1 text-sm font-medium">No favorites yet</p>
        <p className="text-xs">
            Open a product page on{' '}
            <a
                href="https://trodo.com?utm_source=favorites_extension"
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
            >
                Trodo.com
            </a>{' '}
            and <br /> click “Add to Favorites” in the extension.
        </p>
    </div>
)
