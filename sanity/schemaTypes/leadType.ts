import {defineField, defineType} from 'sanity'

export const leadType = defineType({
  name: 'lead',
  title: 'Leads (Inquiries)',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email Address',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'company',
      title: 'Company Name',
      type: 'string',
    }),
    defineField({
      name: 'country',
      title: 'Country (User Entered)',
      type: 'string',
    }),
    defineField({
      name: 'message',
      title: 'Message / Audit Details',
      type: 'text',
    }),
    defineField({
      name: 'source',
      title: 'Traffic/Popup Source',
      type: 'string',
      description: 'e.g., exit-intent, scroll-trigger, footer-newsletter',
    }),
    defineField({
      name: 'ipAddress',
      title: 'IP Address',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'location',
      title: 'Location (City, Country)',
      type: 'string',
      readOnly: true,
    }),
    defineField({
      name: 'isp',
      title: 'ISP / Corporate Network',
      type: 'string',
      description: 'Useful for identifying corporate networks of anonymous visits.',
      readOnly: true,
    }),
    defineField({
      name: 'submittedAt',
      title: 'Submitted At',
      type: 'datetime',
      initialValue: () => new Date().toISOString(),
      readOnly: true,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'email',
    },
    prepare({title, subtitle}) {
      return {
        title: title || 'Anonymous Lead',
        subtitle: subtitle || 'No email provided',
      }
    }
  },
})
