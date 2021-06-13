import { Link } from "react-router-dom";

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
        <div className="pb-20">
            <h1 className="text-5xl font-bold text-thrift-dark">Start thrifting now.</h1>
            <div className="mt-6">
                <CallToActionButton text="Set up budget strategy" />
            </div>
            {/* Overall/General budget report */}
            <section className="mt-[79px] space-y-10">
                <GeneralExpenseGroupContainer reports={wallet} title="Wallet" />
                <GeneralExpenseGroupContainer reports={spentExpenses} title="Spent" />
            </section>
            <section className="mt-[79px]">
                <ExpensesTable />
            </section>
        </div>
    )
}

function CallToActionButton(props) {
    const {icon, text} = props
    return (
        <Link to="/budget/set-up">
            <button className="focus:outline-none px-6 py-3 bg-thrift-highlight text-thrift-dark rounded-md bg-opacity-90 
                hover:shadow-sm hover:bg-opacity-70 focus:bg-opacity-100 transition-colors duration-150 ease-in-out flex items-center space-x-3">
                    { icon && <span className="inline-block w-5 h-5">{icon}</span> }
                    <span className="inline-block text-lg font-medium">{text}</span>
            </button>
        </Link>
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
                    reports.map((report, index) => (
                        <GeneralExpensesCard key={`${report.title}-${index}`} expensesTitle={report.title} expensesValue={report.value} />
                    )
                )}
            </div>
        </div>
    )
}
  
function ExpensesTable() {
    const expenses = [
        {
            id: 0,
            date: new Date().toDateString(),
            income: '6000.00',
            essential: '3000.00',
            personal: '2000.00',
            savings: '1000.00',
        },
        {
            id: 1,
            date: new Date().toDateString(),
            income: '6000.00',
            essential: '3000.00',
            personal: '2000.00',
            savings: '1000.00',
        },
        {
            id: 2,
            date: new Date().toDateString(),
            income: '6000.00',
            essential: '3000.00',
            personal: '2000.00',
            savings: '1000.00',
        },
    ]
    const tableHeaders = ['Date', 'Income', 'Total Essential Expenses', 'Total Personal Expenses', 'Savings']
    return (
      <div className="flex flex-col">
        <div className="-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8">
          <div className="py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8">
            <div className="shadow overflow-hidden border-b border-gray-200 sm:rounded-lg">
              <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-thrift">
                    <tr>
                        { tableHeaders.map(header => (
                                <th key={header}
                                    scope="col"
                                    className="px-6 py-3 text-left text-xs font-medium uppercase tracking-wider text-thrift-highlight"
                                >
                                    {header}
                                </th>
                            )
                        )}
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                  {expenses.map(expense => (
                    <tr key={expense.id}>
                        <td className="px-6 py-4 whitespace-nowrap bg-thrift-lightest">
                            <div className="text-sm text-gray-900">{expense.date}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap bg-thrift-lightest">
                            <div className="text-sm text-gray-900">Php. {expense.income}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap bg-thrift-lightest">
                            <div className="text-sm text-gray-900">Php. {expense.essential}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap bg-thrift-lightest">
                            <div className="text-sm text-gray-900">Php. {expense.personal}</div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap bg-thrift-lightest">
                            <div className="text-sm text-gray-900">Php. {expense.savings}</div>
                        </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    )
}

export default Home;