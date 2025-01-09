// components/PropertyForm.tsx
'use client'
import { useState } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/navigation'

interface PropertyFormData {
    id?: number
    title: string
    description: string
    price: number
    location: string
    bedrooms: number
    bathrooms: number
    area: number
    image?: FileList
  }

interface PropertyFormProps {
  property?: PropertyFormData | null
}

export default function PropertyForm({ property = null }: PropertyFormProps) {
  const router = useRouter()
  const [isSubmitting, setIsSubmitting] = useState(false)
  
  const { register, handleSubmit, formState: { errors } } = useForm<PropertyFormData>({
    defaultValues: property || undefined
  })

  const onSubmit = async (data: PropertyFormData) => {
    setIsSubmitting(true)
    try {
      const formData = new FormData()
      Object.entries(data).forEach(([key, value]) => {
        if (key === 'image' && value instanceof FileList && value.length > 0) {
          formData.append('image', value[0])
        } else {
          formData.append(key, String(value))
        }
      })

      const url = property ? `/api/properties/${property.id}` : '/api/properties'
      const method = property ? 'PUT' : 'POST'

      const response = await fetch(url, {
        method,
        body: formData,
      })

      if (response.ok) {
        router.push('/properties')
        router.refresh()
      }
    } catch (error) {
      alert('Error submitting property. Please try again.')
    }
    setIsSubmitting(false)
  }

  // Rest of the component remains the same...
}