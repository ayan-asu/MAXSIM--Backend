export default {
  name: 'team',
  title: 'Team Member',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
      description: 'The name of the team member',
    },
    {
      name: 'role',
      title: 'Role',
      type: 'string',
      description: 'The role of the team member',
    },
    {
      name: 'introduction',
      title: 'Introduction',
      type: 'text',
      description: 'Introduction to the team member',
    },
    {
      name: 'linkedUrl',
      title: 'Linked URL',
      type: 'url',
      description: 'URL linked to the team member',
    },
    {
      name: 'photo',
      title: 'Photo',
      type: 'image',
      description: 'Photo of the team member',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
      description: 'Email address of the team member',
      validation: (Rule) => Rule.email().error('Please enter a valid email address'),
    },
  ],
}
