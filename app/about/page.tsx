// app/about/page.tsx
import Image from 'next/image'

export default function AboutPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="lg:grid lg:grid-cols-2 lg:gap-8 lg:items-center">
        <div>
          <h2 className="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            About Our Company
          </h2>
          <p className="mt-3 text-lg text-gray-500">
            We are committed to helping you find the perfect property. With years of experience
            in the real estate market, we understand that buying or selling a property is one
            of the most important decisions you'll make.
          </p>
          
          <dl className="mt-10 space-y-10">
            <div className="relative">
              <dt>
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
                  {/* Add icon here */}
                </div>
                <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                  Professional Service
                </p>
              </dt>
              <dd className="mt-2 ml-16 text-base text-gray-500">
                Our team of experienced professionals is dedicated to providing
                exceptional service to all our clients.
              </dd>
            </div>

            {/* Add more features */}
          </dl>
        </div>

        <div className="mt-10 lg:mt-0">
          <div className="relative aspect-w-16 aspect-h-9">
            <Image
              src="/about-image.jpg"
              alt="About Us"
              fill
              className="object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>
      </div>

      <div className="mt-16">
        <h3 className="text-2xl font-bold text-gray-900">Our Team</h3>
        <div className="mt-8 grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-3">
          {/* Add team members */}
        </div>
      </div>
    </div>
  )
}