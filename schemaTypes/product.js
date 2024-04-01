export default {
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    {
      name: 'productName',
      title: 'Product Name',
      type: 'string',
      description: 'The name of the product',
    },
    {
      name: 'productDescription',
      title: 'Product Description',
      type: 'text',
      description: 'Description of the product',
    },
    {
      name: 'productImage',
      title: 'Product Image',
      type: 'image',
      description: 'Image representing the product',
    },
    {
      name: 'demoLink',
      title: 'Demo Link',
      type: 'url',
      description: 'Link to the demo of the product',
    },
    {
      name: 'software',
      title: 'Software Upload',
      type: 'file',
      description: 'Upload the software file',
    },
    {
      name: 'instructions',
      title: 'Usage Manual',
      type: 'file',
      description: 'Upload the Usage Manual',
    },
  ],
}
