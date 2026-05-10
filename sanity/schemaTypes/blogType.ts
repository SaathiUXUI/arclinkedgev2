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
      options: {
        hotspot: true,
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'content',
      title: 'Post Content',
      type: 'array',
      of: [{type: 'block'}, {type: 'image'}],
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
