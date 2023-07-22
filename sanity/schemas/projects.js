/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'project',
  title: 'Project',
  type: 'document',
  fields: [
   {
    name: 'title',
    title: 'Title',
    description: "Title of the Project",
    type: 'string',
   },
   {
    name: 'image',
    title: 'Image',
    type: 'image',
    options: {
      hotspot: true,
    },
   },
   {
    name: 'summary',
    title: 'Summary',
    type: 'text',
   },
   {
    name: 'technologies',
    title: 'Technologies',
    type: 'array',
    of: [{type: "referrence", to: {type: "skill"} }],
   },
   {
    name: 'linkToBuild',
    title: 'LinkToBuild',
    type: 'url',
   }
  ],
};
