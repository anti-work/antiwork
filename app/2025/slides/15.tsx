export default function Slide15() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        Shortest: AI QA
      </h1>
      <div className="grid grid-cols-2 gap-8 w-[40%]">
        <div className="border-r pr-8">
          <h2 className="font-bold mb-4">2024</h2>
          <ul>
            <li className="line-through">✓ Shipped v1</li>
            <li className="line-through">✓ Used for Iffy</li>
          </ul>
        </div>

        <div className="pl-8">
          <h2 className="font-bold mb-4">2025</h2>
          <ul className="space-y-4">
            <li>Free-to-use, winner-take-all</li>
            <li>Used for Helper</li>
            <li>Used for Flexile</li>
            <li>Used for Gumroad</li>
            <li>Managed CI service</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
