import { MutatingDots } from "react-loader-spinner"

export const Loading = () => {
    return (
        <div className="flex justify-center items-center h-screen bg-blue transition-all duration-500 ease-out">
            <MutatingDots
                height="100"
                width="100"
                color="#00FFA3"
                secondaryColor= '#00FFA3'
                radius='12.5'
                ariaLabel="mutating-dots-loading"
                wrapperStyle={{}}
                wrapperClass=""
                visible={true}
                />
        </div>
    )
}