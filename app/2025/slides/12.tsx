export default function Slide12() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Flexile: Manage Your Team, Investors, and Equity
      </h1>
      <div className="grid grid-cols-2 gap-8 w-[40%]">
        <div className="border-r pr-8">
          <h2 className="font-bold mb-4">2024</h2>
          <ul>
            <li className="line-through">✓ Cap table management</li>
            <li className="line-through">✓ Equity grants and vesting</li>
            <li className="line-through">✓ Team updates</li>
            <li className="line-through">✓ Shareholder communications</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="font-bold mb-4">2025</h2>
          <ul className="space-y-4">
            <li>
              Open Source:
              <ul className="ml-6 space-y-2 mt-2">
                <li>
                  Free-to-use under 2,000 shareholders, $50M in market cap
                </li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 space-y-2 mt-2">
                <li>Buybacks, dividends, and crowdfunding</li>
                <li>Team and performance management</li>
                <li>Compliance automation</li>
                <li>API integrations</li>
                <li>Analytics and reporting</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
