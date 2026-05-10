import {defineField, defineType} from 'sanity'

export const serviceImageType = defineType({
  name: 'serviceImage',
  title: 'Service Carousel Images',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Project/Service Title',
      type: 'string',
      description: 'Used for internal identification in Sanity Studio.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      validation: (rule) => rule.required().min(1),
    }),
    defineField({
      name: 'categories',
      title: 'Categories',
      type: 'array',
      of: [{type: 'string'}],
      options: {
        list: [
          {title: 'Web Development', value: 'web-development'},
          {title: 'Mobile App Development', value: 'mobile-app-development'},
          {title: 'UI/UX Design', value: 'ui-ux-design'},
          {title: 'SaaS Development', value: 'saas-development'},
          {title: 'E-commerce', value: 'ecommerce'},
          {title: 'Cloud & DevOps', value: 'cloud-devops'},
          {title: 'API Integration', value: 'api-integration'},
          {title: 'AI & Automation', value: 'ai-automation'},
          {title: 'Digital Marketing', value: 'digital-marketing'},
        ],
      },
      description: 'Select categories where these images should appear. Web and Mobile are separate, others are mixed.',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'priority',
      title: 'Display Order / Priority',
      type: 'number',
      description: 'Lower number means it shows up first (e.g., 1 is first).',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
    },
  },
})
