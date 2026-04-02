type AddFavoriteButtonProps = {
    isDisabled?: boolean
    onClick: () => void
}

export const AddFavoriteButton = ({ isDisabled, onClick }: AddFavoriteButtonProps) => {
    return (
        <div className="px-5 pt-5">
            <button
                onClick={onClick}
                disabled={isDisabled}
                className="h-12 w-full cursor-pointer rounded-lg bg-[#0077c7] text-sm font-medium text-white hover:bg-[#0063b4] disabled:cursor-not-allowed disabled:bg-gray-400"
            >
                Add to Favorites
            </button>
        </div>
    )
}
