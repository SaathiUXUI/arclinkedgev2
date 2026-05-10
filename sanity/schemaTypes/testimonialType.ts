import {defineField, defineType} from 'sanity'

export const testimonialType = defineType({
  name: 'testimonial',
  title: 'Testimonials',
  type: 'document',
  fields: [
    defineField({
      name: 'quote',
      title: 'Quote',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Author Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
    }),
    defineField({
      name: 'company',
      title: 'Company',
      type: 'string',
    }),
    defineField({
      name: 'avatar',
      title: 'Author Image (Avatar)',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'priority',
      title: 'Priority',
      type: 'number',
      description: 'Lower number means it shows up first.',
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'company',
      media: 'avatar',
    },
  },
})
