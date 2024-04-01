export default {
  name: 'services',
  title: 'Services',
  type: 'document',
  fields: [
    {
      name: 'cover',
      title: 'Cover',
      type: 'object',
      fields: [
        {
          name: 'image',
          title: 'Image',
          type: 'image',
          options: {
            hotspot: true, // If you need to crop the image
          },
        },
        {
          name: 'title',
          title: 'Title',
          type: 'string',
        },
        {
          name: 'tagline',
          title: 'Tagline',
          type: 'text',
        },
      ],
    },
    {
      name: 'services',
      title: 'Services',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              title: 'Title',
              type: 'string',
            },
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: {
                hotspot: true, // If you need to crop the image
              },
            },
            {
              name: 'description',
              title: 'Description',
              type: 'text',
            },
          ],
        },
      ],
    },
    {
      name: 'contactTagline',
      title: 'Contact Tagline',
      type: 'text',
    },
  ],
}
