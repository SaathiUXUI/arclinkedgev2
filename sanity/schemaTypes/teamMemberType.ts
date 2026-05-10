import {defineField, defineType} from 'sanity'

export const teamMemberType = defineType({
  name: 'teamMember',
  title: 'Team Member',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'role',
      title: 'Role',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'experience',
      title: 'Experience',
      type: 'string',
      description: 'e.g., 6+ Years',
    }),
    defineField({
      name: 'initials',
      title: 'Initials',
      type: 'string',
      description: 'e.g., SA',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
    defineField({
      name: 'bio',
      title: 'Bio',
      type: 'text',
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Founder', value: 'founder'},
          {title: 'Core Team', value: 'core-team'},
        ],
      },
      validation: (rule) => rule.required(),
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
      subtitle: 'role',
      media: 'image',
    },
  },
})
