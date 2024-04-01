export default {
  name: 'testimonial',
  title: 'Testimonial',
  type: 'document',
  fields: [
    {
      name: 'showPage',
      title: 'Show Page',
      type: 'boolean',
      description: 'Toggle to show this testimonial on the page',
    },
    {
      name: 'testimonials',
      title: 'Testimonials',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'givenBy',
              title: 'Given By',
              type: 'string',
            },
            {
              name: 'companyName',
              title: 'Company Name',
              type: 'string',
            },
            {
              name: 'companyLogo',
              title: 'Company Logo',
              type: 'image',
              options: {
                hotspot: true, // If you need to crop the image
              },
            },
            {
              name: 'description',
              title: 'Testimonial Description',
              type: 'text',
            },
          ],
        },
      ],
    },
  ],
}
