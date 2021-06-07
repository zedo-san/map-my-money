import CalendarIcon from "../components/Icons/CalendarIcon";

function Home() {
    const spentExpenses = [
        {title: 'Total Essential Expenses', value: '3000.00'},
        {title: 'Total Personal Expenses', value: '1000.00'},
    ]
    const wallet = [
        {title: 'For Total Essential Expenses', value: '3000.00'},
        {title: 'For Total Personal Expenses', value: '1000.00'},
        {title: 'Savings', value: '500.00'},
    ]
    return (
        <div>
            <h1 className="text-5xl font-bold text-thrift-dark">Start thrifting now.</h1>
            <div className="mt-6">
                <CallToActionButton icon={<CalendarIcon />} text="Set up your budget" />
            </div>
            {/* Overall/General budget report */}
            <section className="mt-[79px] space-y-10">
                <GeneralExpenseGroupContainer reports={spentExpenses} title="Spent" />
                <GeneralExpenseGroupContainer reports={wallet} title="Wallet" />
            </section>
        </div>
    )
}

function GeneralExpensesCard(props) {
    const { expensesTitle, expensesValue } = props
    return (
        <div className="w-72 py-4 pl-4 border-2 border-thrift rounded-md bg-thrift-lightest">
            <div className="font-medium">{expensesTitle}</div>
            <div className="mt-3">Php. {expensesValue}</div>
        </div>
    )
}
function GeneralExpenseGroupContainer(props) {
    const { reports, title } = props
    return (
        <div>
            <h1 className="text-lg font-medium">{ title }</h1>
            <div className="mt-3 flex flex-col w-full items-center space-y-10 md:flex-row md:space-y-0 md:space-x-12">
                { 
                    reports.map(report => <GeneralExpensesCard expensesTitle={report.title} expensesValue={report.value} />)
                }
            </div>
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