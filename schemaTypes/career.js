export default {
  name: 'career',
  title: 'Career',
  type: 'document',
  fields: [
    {
      name: 'jobTitle',
      title: 'Job Title',
      type: 'string',
      description: 'The title of the job position',
    },
    {
      name: 'jobType',
      title: 'Job Type',
      type: 'string',
      description: 'The type of job (full-time, part-time, etc.)',
    },
    {
      name: 'responsibilities',
      title: 'Responsibilities',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of responsibilities for the job',
    },
    {
      name: 'requirements',
      title: 'Requirements',
      type: 'array',
      of: [{type: 'string'}],
      description: 'List of requirements for the job',
    },
  ],
}
