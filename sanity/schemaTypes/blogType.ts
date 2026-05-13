import {defineField, defineType} from 'sanity'

export const blogType = defineType({
  name: 'blog',
  title: 'Blog Posts',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Short Description',
      type: 'text',
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Design', value: 'Design'},
          {title: 'Development', value: 'Development'},
          {title: 'Mobile', value: 'Mobile'},
          {title: 'UX', value: 'UX'},
          {title: 'Business', value: 'Business'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'date',
      title: 'Published Date',
      type: 'date',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'readTime',
      title: 'Read Time',
      type: 'string',
      placeholder: 'e.g. 5 min read',
    }),
    defineField({
      name: 'image',
      title: 'Main Image',
      type: 'image',
      description: 'Upload an image in 16:9 aspect ratio.',
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'array',
      description: 'Write your blog post here. You can paste directly from Google Docs or Word and the formatting will be preserved automatically.',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
          options: {
            hotspot: true,
          },
          fields: [
            {
              name: 'alt',
              type: 'string',
              title: 'Alternative Text',
            }
          ]
        }
      ],
    }),
    defineField({
      name: 'authorName',
      title: 'Author Name (Optional)',
      type: 'string',
      description: 'Leave empty to use default founder: Saathi Rathod',
    }),
    defineField({
      name: 'authorRole',
      title: 'Author Role (Optional)',
      type: 'string',
      description: 'Leave empty to use default role',
    }),
    defineField({
      name: 'authorImage',
      title: 'Author Image (Optional)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'ctaType',
      title: 'Call to Action (CTA)',
      type: 'string',
      description: 'Select a CTA button to show at the bottom of the blog post.',
      options: {
        list: [
          { title: 'None', value: 'none' },
          { title: 'Hire Web Developers', value: 'web-developer' },
          { title: 'Hire Mobile App Developers', value: 'mobile-app-developer' },
          { title: 'Hire UI/UX Designers', value: 'ui-ux-designer' },
          { title: 'Hire SaaS Developers', value: 'saas-developer' },
          { title: 'Hire E-commerce Developers', value: 'ecommerce-developer' },
          { title: 'Hire DevOps Engineers', value: 'devops-engineer' },
          { title: 'Hire API Developers', value: 'api-developer' },
          { title: 'Hire AI Specialists', value: 'ai-specialist' },
          { title: 'Hire SEO Specialists', value: 'seo-specialist' },
        ],
      },
      initialValue: 'none',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      subtitle: 'category',
      media: 'image',
    },
  },
})
