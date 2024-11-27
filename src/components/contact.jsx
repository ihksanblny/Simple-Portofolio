export default function Contact() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
        {/* Foto */}
        <div className="flex justify-center">
          <img
            src="https://via.placeholder.com/300x400"
            alt="Your Profile"
            className="rounded-lg shadow-lg w-full max-w-xs"
          />
        </div>

        {/* Biodata */}
        <div className="bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-3xl font-extrabold text-black-900 mb-6">About Me</h2>
          <ul className="space-y-4 text-black-700">
            <li>
              <strong className="font-medium text-black-900">Name:</strong> John Doe
            </li>
            <li>
              <strong className="font-medium text-black-900">Location:</strong> Jakarta, Indonesia
            </li>
            <li>
              <strong className="font-medium text-black-900">Email: </strong> 
              <a href="mailto:john.doe@example.com"className="text-gradientStart hover:underline">
                john.doe@example.com
              </a>
            </li>
            <li>
              <strong className="font-medium text-black-900">Phone: </strong> 
              <a href="tel:+621234567890"className="text-gradientStart hover:underline">
                +62 123 456 7890
              </a>
            </li>
            <li>
              <strong className="font-medium text-black-900">Profession:</strong> Frontend Developer
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
