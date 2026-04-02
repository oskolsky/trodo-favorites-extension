type HeaderProps = {
    count: number
}

export const Header = ({ count }: HeaderProps) => {
    return (
        <div className="sticky top-0 z-20 bg-white px-5">
            <div className="flex items-center justify-between py-5">
                <a
                    href="https://trodo.com?utm_source=favorites_extension
                "
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    <img src="/images/trodo-logo.svg" alt="Trodo" className="h-6 object-contain" />
                </a>

                <div className="flex items-center gap-2">
                    <span className="text-sm font-semibold text-gray-800">Favorites</span>

                    {count > 0 && (
                        <span className="flex h-5 min-w-5 items-center justify-center rounded-full bg-[#de3618] px-1 text-xs font-semibold text-white">
                            {count}
                        </span>
                    )}
                </div>
            </div>

            <hr className="border-gray-300" />
        </div>
    )
}
