export default {
  name: 'homepage',
  title: 'Homepage',
  type: 'document',
  fields: [
    {
      name: 'cover',
      title: 'Homepage Cover',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for precise cropping
      },
    },
    {
      name: 'title',
      title: 'Homepage Title',
      type: 'string',
    },
    {
      name: 'caption',
      title: 'Homepage Caption',
      type: 'array', // Change type to 'array'
      of: [{type: 'string'}], // Define it as an array of strings
      description: 'Enter a caption for the homepage',
    },
    {
      name: 'aboutUs',
      title: 'About Us',
      type: 'text',
      description: 'Enter the description for the About Us section',
    },
    {
      name: 'aboutUsImage',
      title: 'About Us Image',
      type: 'image',
      options: {
        hotspot: true, // Enables hotspot for precise cropping
      },
    },
    {
      name: 'coreCompetencies',
      title: 'Core Competencies',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'title',
              type: 'string',
              title: 'Title',
            },
            {
              name: 'description',
              type: 'text',
              title: 'Description',
            },
            {
              name: 'image',
              type: 'image',
              options: {
                hotspot: true,
              },
            },
          ],
          preview: {
            select: {
              title: 'title',
              media: 'image',
            },
          },
        },
      ],
    },
  ],
}
