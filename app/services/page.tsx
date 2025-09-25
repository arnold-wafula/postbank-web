export default function ServicesPage() {
    return (
      <main className="px-8 py-16">
        <h1 className="text-3xl font-bold text-blue-700 mb-6">Our Services</h1>
        <ul className="space-y-4 text-gray-700">
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
            💳 Savings & Checking Accounts
          </li>
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
            🏦 Loans & Credit Solutions
          </li>
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
            📈 Investments & Wealth Management
          </li>
          <li className="p-4 border rounded-lg shadow-sm hover:shadow-md">
            🤝 Customer Support & Advisory
          </li>
        </ul>
      </main>
    );
}