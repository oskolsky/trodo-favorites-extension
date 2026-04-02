export const EmptyState = () => (
    <div className="flex flex-col items-center justify-center pt-7 pb-12 text-center text-gray-500">
        <div className="mb-4">
            <a href="https://trodo.com" target="_blank" rel="noopener noreferrer">
                <img src="/icons/128.png" alt="Trodo" className="size-12" />
            </a>
        </div>
        <p className="mb-1 text-sm font-medium">No favorites yet</p>
        <p className="text-xs">
            Add products from Trodo by clicking the add button in the extension on any product page.
        </p>
    </div>
)
