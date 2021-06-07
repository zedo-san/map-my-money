import CalendarIcon from "../components/Icons/CalendarIcon";

function Home() {
    return (
        <div>
            <h1 className="text-5xl font-bold text-thrift-dark">Start thrifting now.</h1>
            <div className="mt-6">
                <CallToActionButton icon={<CalendarIcon />} text="Set up your budget" />
            </div>
            {/* Overall/General budget report */}
            <section className="mt-[79px]">
                <div className="flex items-center space-x-12">
                    <GeneralExpensesCard expensesTitle="Total Essential Expenses" expensesValue="3000.00" />
                    <GeneralExpensesCard expensesTitle="Total Personal Expenses" expensesValue="1000.00" />
                    <GeneralExpensesCard expensesTitle="Savings" expensesValue="500.00" />
                </div>
            </section>
        </div>
    )
}

function GeneralExpensesCard(props) {
    const { expensesTitle, expensesValue } = props
    return (
        <div className="w-72 py-4 pl-4 border-2 border-thrift rounded-md bg-thrift-lightest">
            <div className="font-medium text-lg">{expensesTitle}</div>
            <div className="text-lg mt-3">{expensesValue}</div>
        </div>
    )
}

function CallToActionButton(props) {
    const {icon, text} = props
    return (
        <button className="focus:outline-none px-6 py-3 bg-thrift-highlight text-thrift-dark rounded-md bg-opacity-90 
            hover:shadow-sm hover:bg-opacity-70 focus:bg-opacity-100 transition-colors duration-150 ease-in-out flex items-center space-x-3">
                { icon && <span className="inline-block w-5 h-5">{icon}</span> }
                <span className="inline-block text-lg font-medium">{text}</span>
        </button>
    )
}
export default Home;