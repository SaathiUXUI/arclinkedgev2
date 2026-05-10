import { client } from './client'
import { urlForImage } from './image'

export interface SanityProject {
  _id: string
  title: string
  images: any[]
  categories: string[]
  priority: number
}

export async function getProjects(): Promise<SanityProject[]> {
  try {
    const query = `*[_type == "serviceImage"] | order(priority asc, _createdAt desc)`
    const projects = await client.fetch(query, {}, { next: { revalidate: 10 } })
    return projects || []
  } catch (error) {
    console.error("Error fetching projects from Sanity:", error)
    return []
  }
}

export async function getProjectImagesByCategory(category?: string): Promise<string[]> {
  try {
    // 1. Determine if we need specific category filtering
    // Only Web Dev and Mobile App Dev have strict separate pools.
    const isSpecialCategory = category === 'web-development' || category === 'mobile-app-development';
    
    let query = `*[_type == "serviceImage"] | order(priority asc, _createdAt desc)`;
    
    if (category && isSpecialCategory) {
      // Strictly filter for special categories
      query = `*[_type == "serviceImage" && "${category}" in categories] | order(priority asc, _createdAt desc)`;
    }
    // If it's NOT a special category, we fetch ALL projects (mixup logic)
    
    const projects = await client.fetch(query, {}, { next: { revalidate: 10 } })
    
    if (!projects || projects.length === 0) return []
    
    // 2. Flatten all images from all matching projects
    const allImages: string[] = []
    
    projects.forEach((p: any) => {
      if (p.images && Array.isArray(p.images) && p.images.length > 0) {
        const url = urlForImage(p.images[0])?.url()
        if (url) allImages.push(url)
      }
    })
    
    return allImages;
  } catch (error) {
    console.error(`Error fetching project images for category ${category || 'all'}:`, error)
    return []
  }
}

export interface SanityBrandLogo {
  name: string
  src: string | null
}

export async function getBrandLogos(): Promise<SanityBrandLogo[]> {
  try {
    const query = `*[_type == "brandLogo"] | order(priority asc, _createdAt desc)`
    const logos = await client.fetch(query, {}, { next: { revalidate: 10 } })
    
    if (!logos || logos.length === 0) return []
    
    return logos.map((l: any) => ({
      name: l.name || "Brand Logo",
      src: l.logo ? urlForImage(l.logo)?.url() : null
    }))
  } catch (error) {
    console.error("Error fetching brand logos from Sanity:", error)
    return []
  }
}

export async function getFirstImagesPerCategory(): Promise<Record<string, string>> {
  try {
    // We only need the first image for each category for the Services hover.
    const query = `*[_type == "serviceImage" && defined(images)] | order(priority asc, _createdAt desc) { categories, "image": images[0] }`
    const projects = await client.fetch(query)
    
    const map: Record<string, string> = {}
    
    if (projects) {
      projects.forEach((p: any) => {
        if (p.categories && Array.isArray(p.categories) && p.image) {
          const url = urlForImage(p.image)?.url()
          if (url) {
            p.categories.forEach((cat: string) => {
              if (!map[cat]) {
                map[cat] = url
              }
            })
          }
        }
      })
    }
    
    return map
  } catch (error) {
    console.error("Error fetching first images per category from Sanity:", error)
    return {}
  }
}
export async function getSanityTestimonials() {
  try {
    const query = `*[_type == "testimonial"] | order(priority asc, _createdAt desc)`
    const testimonials = await client.fetch(query, {}, { next: { revalidate: 10 } })
    if (!testimonials) return []
    return testimonials.map((t: any) => ({
      id: t._id,
      quote: t.quote,
      name: t.name,
      role: t.role,
      company: t.company,
      avatar: t.avatar ? urlForImage(t.avatar)?.url() : null,
      rating: 5, // Default rating as design uses 5 stars
    }))
  } catch (error) {
    console.error("Error fetching testimonials:", error)
    return []
  }
}

export async function getSanityBlogs() {
  try {
    const query = `*[_type == "blog"] | order(date desc, _createdAt desc)`
    const blogs = await client.fetch(query, {}, { next: { revalidate: 10 } })
    if (!blogs) return []
    return blogs.map((b: any) => ({
      id: b._id,
      title: b.title,
      description: b.description,
      category: b.category,
      date: b.date,
      readTime: b.readTime,
      image: b.image ? urlForImage(b.image)?.url() : null,
      href: `/blog/${b.slug?.current}`,
    }))
  } catch (error) {
    console.error("Error fetching blogs:", error)
    return []
  }
}
export async function getTeamMembers() {
  try {
    const query = `*[_type == "teamMember"] | order(priority asc, _createdAt desc)`
    const members = await client.fetch(query, {}, { next: { revalidate: 10 } })
    if (!members) return []
    return members.map((m: any) => ({
      id: m._id,
      name: m.name,
      role: m.role,
      experience: m.experience,
      initials: m.initials,
      bio: m.bio,
      category: m.category,
      image: m.image ? urlForImage(m.image)?.url() : null,
    }))
  } catch (error) {
    console.error("Error fetching team members:", error)
    return []
  }
}
