/* eslint-disable import/no-anonymous-default-export */
export default {
  name: 'post',
  title: 'Post',
  type: 'document',
  fields: [
   {
    name: "name",
    title: "title",
    type: "string",
   },
   {
    name: "role",
    title: "Role",
    type: "string",
   },
   {
    name: "heroImage",
    title: "Image",
    type: "image",
    options: {
      hotspot: true,
    },
   },
   {
    name: "backgroundInformation ",
    title: "BackgroundInformation",
    type: "string",
   },
   {
    name: "profilePic",
    title: "ProfilePic",
    type: "image",
    options: {
      hotspot: true
    }
   },
   {
    name: 'phoneNumber',
    title: 'phoneNumber',
    type: 'string',
   },
   {
    name: 'email',
    title: 'email',
    type: 'string',
   },
   {
    name: 'address',
    title: 'Address',
    type: 'string',
   },
   {
    name: 'socials',
    title: 'Socials',
    type: 'array',
    of: [{type: "referrence", to: {type: "social"}}]
   },
  ],
}
