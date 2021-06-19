import { useState } from 'react';
import { Link } from 'react-router-dom' 

function SetupBudgetForm() {
    const [page, setPage] = useState(1)
    const setNextPage = () => {
        setPage(page + 1)
    }
    const setPreviousPage = () => {
        if(page !== 1) {
            setPage(page - 1)
        }
    }
    return (
        <div>
            {/* <div className="bg-thrift-lightest bg-opacity-40 absolute inset-0 z-[-1]"></div> */}
            
            { page === 1 && 
                <div>
                    <div>
                        <Link to="/">
                            <button className="px-3 py-1 rounded-sm hover:bg-thrift-highlight hover:bg-opacity-70 text-sm bg-thrift-highlight bg-opacity-40">
                                <div>Cancel</div>
                            </button>
                        </Link>
                    </div>
                    <div className="mt-3">
                        <h1 className="text-2xl font-bold text-thrift-dark">Choose your strategy</h1>
                        <h2 className="mt-3 text-gray-600">To start with, we have given you options below on which budget strategy you'd like to choose.</h2>
                        <div className="mt-16">
                            <p className="font-medium text-gray-600">Click one to proceed:</p>
                            <div className="mt-5">
                                <StrategySelectionRadioButton nextPage={setNextPage}/>
                            </div>
                        </div>
                    </div>
                </div>
            }
            { page === 2 && 
            <div>
                <div>
                    <button 
                        className="px-3 py-1 rounded-sm hover:bg-thrift-highlight hover:bg-opacity-70 text-sm bg-thrift-highlight bg-opacity-40"
                        onClick={setPreviousPage}    
                    >
                        <div>Previous</div>
                    </button>
                </div>
                <div>
                    <div>
                        <div>50% will go to essential expenses</div>
                        <div>30% will go to personal expenses</div>
                        <div>and 20% will go to savings</div>
                        <div>If there are still excess from the first 2 expenses, you will have the option to put it in savings or just keep it there in their own wallet</div>
                        <Link to="/">
                            <button className="focus:outline-none px-6 py-3 bg-thrift-highlight text-thrift-dark rounded-md bg-opacity-90 
                                hover:shadow-sm hover:bg-opacity-70 focus:bg-opacity-100 transition-colors duration-150 ease-in-out flex items-center space-x-3">
                                    <span className="inline-block text-sm font-medium">Proceed</span>
                            </button>
                        </Link>
                    </div>
                </div>
            </div>
            }
        </div>
    )
}
function StrategySelectionRadioButton({nextPage}) {
    const [showInfo, setShowInfo] = useState(false)
    return (
        <>
            <div className="w-80 h-28 flex items-center justify-center space-x-3 rounded-md bg-thrift-lightest 
                shadow-md border border-thrift-dark transform transition-transform duration-300 hover:shadow-xl 
                hover:-translate-y-1 hover:-translate-x-1 cursor-pointer"
                onClick={ () => { nextPage() } }
                onMouseEnter={ () => { setShowInfo(true) } }
                onMouseLeave={ () => { setShowInfo(false) } }
            >
                <div>
                    <svg width="71" height="71" viewBox="0 0 71 71" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0)">
                            <path d="M32.5417 36.4734V4.43753C32.5417 3.62103 31.879 2.95831 31.0625 2.95831C13.9338 2.95831 0 18.2204 0 36.9791C0 55.7378 15.2621 71 34.0208 71C42.4136 71 46.9546 69.4795 52.7115 64.7461C53.3299 64.2373 53.4304 63.329 52.9394 62.6959L32.5417 36.4734ZM34.0208 68.0417C16.892 68.0417 2.95829 54.108 2.95829 36.9792C2.95829 20.4007 14.7709 6.81311 29.5833 5.9582V36.9792C29.5833 37.3076 29.6927 37.6271 29.8968 37.8874L49.7058 63.3557C45.0347 66.9235 41.1385 68.0417 34.0208 68.0417Z" fill="#263203"/>
                            <path d="M36.9792 35.5H69.5209C70.3374 35.5 71.0001 34.8373 71.0001 34.0208C71 15.2621 55.7379 0 36.9792 0C36.1627 0 35.5 0.662713 35.5 1.47921V34.0209C35.5 34.8373 36.1627 35.5 36.9792 35.5ZM38.4583 2.99379C54.4126 3.74525 67.2548 16.5874 68.0061 32.5416H38.4583V2.99379Z" fill="#263203"/>
                            <path d="M69.5208 38.4583H39.9375C39.3695 38.4583 38.8459 38.7867 38.6003 39.3014C38.3547 39.8162 38.4287 40.4256 38.7867 40.8663L58.0159 64.672C58.2733 64.9944 58.652 65.1897 59.0631 65.2193C59.0986 65.2223 59.1312 65.2223 59.1667 65.2223C59.5395 65.2223 59.9004 65.0803 60.1756 64.8258C67.0535 58.4093 71 49.3391 71 39.9375C71 39.121 70.3373 38.4583 69.5208 38.4583ZM59.2939 61.5452L43.0349 41.4167H68.0062C67.6423 48.9368 64.5301 56.1284 59.2939 61.5452Z" fill="#263203"/>
                        </g>
                        <defs>
                            <clipPath id="clip0">
                                <rect width="71" height="71" fill="white"/>
                            </clipPath>
                        </defs>
                    </svg>
                </div>
                <div className="font-medium select-none">50-30-20 budget strategy</div>
            </div>
            { showInfo && 
                <div className="absolute right-0 top-0 h-screen w-72 px-3 py-5 border-l-2 border-thrift-dark bg-thrift-lightest bg-blend-lighten">
                    <p>
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Adipisci ut nam sequi aliquid nobis labore a laborum repudiandae repellendus eaque sit aliquam doloremque asperiores soluta minus, totam neque possimus impedit!
                    </p>
                </div>
            }
        </>
    )
}


export default SetupBudgetForm;