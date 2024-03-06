import { getProductsList } from "@/lib/data"
import { MetadataRoute } from "next"

type Sitemap = Array<{
  url: string
  lastModified?: string | Date
  changeFrequency?:
    | "always"
    | "hourly"
    | "daily"
    | "weekly"
    | "monthly"
    | "yearly"
    | "never"
  priority?: number
}>

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `${process.env.NEXT_PUBLIC_BASE_URL}`
  : "http://localhost:3000"

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  let fetchedProductRoutes: Sitemap = []

  try {
    const {
      response: { products },
    } = await getProductsList({ queryParams: {} })

    fetchedProductRoutes = products.map((product) => ({
      url: `${baseUrl}/products/${product.handle}`,
      lastModified: `${product.updated_at}`,
      priority: 0.9,
    }))
  } catch (error) {}

  const pagesRoutes = [
    {
      url: `${baseUrl}`,
      lastModified: new Date().toISOString(),
      priority: 1,
    },
    {
      url: `${baseUrl}/products`,
      lastModified: new Date().toISOString(),
      priority: 0.9,
    },
    {
      url: `${baseUrl}/about-us`,
      lastModified: new Date().toISOString(),
      priority: 0.8,
    },
    {
      url: `${baseUrl}/contact-us`,
      lastModified: new Date().toISOString(),
      priority: 0.7,
    },
  ]

  return [...pagesRoutes, ...fetchedProductRoutes]
}
