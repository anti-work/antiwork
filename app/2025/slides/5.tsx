export default function Slide5() {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-20">
      <h1 className="text-4xl font-bold text-gray-900 mb-12">
        2024 Review
      </h1>
      <div className="prose">
        <ul>
          <li>Launched Helper, Iffy, and Shortest</li>
          <li>Flexile became an equity management tool</li>
          <li>Gumroad got a lot better, but didn&apos;t grow</li>
          <li>Opened NYC office with 4 in-person team members</li>
          <li>Grew revenue X% YoY to $XXM ARR</li>
          <li>Distributed $5.34M in profit sharing</li>
        </ul>
        <blockquote className="text-sm text-gray-600 mt-8 italic">
          &quot;If all 3 work (few million ARR), it would be nice to have
          ≈36 people work across the 3 products (up from 28 people
          today).&quot;
          <br />
          <span className="not-italic">— January 2023 Update</span>
        </blockquote>
        <p className="text-sm text-gray-600 mt-2">
          (Narrator: this didn&apos;t happen.)
        </p>
      </div>
    </div>
  );
}
