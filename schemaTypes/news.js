export default {
  name: 'news',
  title: 'News',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      description: 'The title of the news article',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      description: 'Description of the news article',
    },
  ],
}
