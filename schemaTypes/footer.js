export default {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo',
      type: 'image',
      options: {
        hotspot: true, // If you need to crop the image
      },
    },
    {
      name: 'socialMediaHandles',
      title: 'Social Media Handles',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'platform',
              title: 'Platform',
              type: 'string',
              options: {
                list: [
                  {title: 'Facebook', value: 'facebook'},
                  {title: 'Twitter', value: 'twitter'},
                  {title: 'YouTube', value: 'youtube'},
                  {title: 'Google', value: 'google'},
                  {title: 'LinkedIn', value: 'linkedin'},
                ],
              },
            },
            {
              name: 'url',
              title: 'URL',
              type: 'url',
            },
          ],
        },
      ],
    },
    {
      name: 'contactDetails',
      title: 'Contact Details',
      type: 'object',
      fields: [
        {
          name: 'addressLine1',
          title: 'Address Line 1',
          type: 'string',
        },
        {
          name: 'addressLine2',
          title: 'Address Line 2',
          type: 'string',
        },
        {
          name: 'pin',
          title: 'PIN',
          type: 'string',
        },
      ],
    },
    {
      name: 'copyright',
      title: 'Copyright Text',
      type: 'string',
    },
  ],
}
