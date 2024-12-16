export default function Slide11() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Gumroad: Run Your Website, Store, Marketplace
      </h1>
      <div className="grid grid-cols-2 gap-8 w-[40%]">
        <div className="border-r pr-8">
          <h2 className="font-bold mb-4">2024</h2>
          <ul>
            <li className="line-through">✓ Merchant of Record</li>
            <li className="line-through">
              ✓ Collabs, bundles, reviews, and wishlists
            </li>
            <li className="line-through">✓ Content editor</li>
            <li className="line-through">✓ Profile/website builder</li>
            <li className="line-through">✓ Discovery on homepage</li>
            <li className="line-through">✓ Abandoned cart emails</li>
            <li className="line-through">
              ✓ Coffee, tipping, calls, commissions
            </li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="font-bold mb-4">2025</h2>
          <ul className="space-y-4">
            <li>
              Open Source:
              <ul className="ml-6 space-y-2 mt-2">
                <li>
                  Free-to-use under $1M/yr in total revenue, $10M/yr in
                  marketplace GMV
                </li>
                <li>Pay-to-use above $1M/yr</li>
                <li>Largest customers subsidize smallest ones</li>
              </ul>
            </li>

            <li>
              Features:
              <ul className="ml-6 space-y-2 mt-2">
                <li>Enhanced email marketing and analytics</li>
                <li>Social proof widgets</li>
                <li>Inline Helper-powered support</li>
                <li>Profile and product page customization</li>
                <li>Community features</li>
                <li>AI product creation tools</li>
              </ul>
            </li>

            <li>Mobile and desktop apps</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
