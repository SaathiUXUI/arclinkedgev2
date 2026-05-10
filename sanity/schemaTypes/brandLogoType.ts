import {defineField, defineType} from 'sanity'

export const brandLogoType = defineType({
  name: 'brandLogo',
  title: 'Brand Logo',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Company Name (Text Logo)',
      type: 'string',
      description: 'Enter text if you want to show a text logo. Required if no image is uploaded.',
    }),
    defineField({
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      description: 'Upload PNG/SVG with transparent background. Required if no text is entered.',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'priority',
      title: 'Display Order',
      type: 'number',
      description: 'Lower number means it shows up first (e.g., 1 is first).',
    }),
  ],
  validation: (Rule) =>
    Rule.custom((fields: any) => {
      if (!fields?.name && !fields?.logo) {
        return 'You must provide either a Company Name or a Logo Image'
      }
      return true
    }),
  preview: {
    select: {
      title: 'name',
      media: 'logo',
    },
    prepare({title, media}) {
      return {
        title: title || 'Image Logo (No Text)',
        media,
      }
    }
  },
})
