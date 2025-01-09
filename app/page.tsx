// app/page.tsx
import PropertyCard from './components/PropertyCard'
import prisma from '@/lib/prisma'

export default async function Home() {
  const properties = await prisma.property.findMany({
    take: 6,
    orderBy: {
  
    }
  })

  return (
    <div>
      <div className="relative h-[70vh]">
        <div className="absolute inset-0 bg-black opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl font-bold mb-4">Find Your Dream Property</h1>
            <p className="text-xl">Discover the perfect place to call home</p>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Featured Properties</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {properties.map((property) => (
            <PropertyCard
              key={property.id}
              {...property}
            />
          ))}
        </div>
      </div>
    </div>
  )
}