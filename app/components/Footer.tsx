// components/Footer.tsx
export default function Footer() {
    return (
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
              <p>Email: info@example.com</p>
              <p>Phone: (123) 456-7890</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
              <ul>
                <li><a href="/about" className="hover:text-gray-300">About Us</a></li>
                <li><a href="/properties" className="hover:text-gray-300">Properties</a></li>
                <li><a href="/contact" className="hover:text-gray-300">Contact</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                {/* Add social media icons here */}
              </div>
            </div>
          </div>
          <div className="mt-8 text-center border-t border-gray-700 pt-8">
            <p>© 2024 Your Property Company. All rights reserved.</p>
          </div>
        </div>
      </footer>
    )
  }