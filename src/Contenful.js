//importamos en vez de requiere por no ser vanilla
import { createClient } from "contentful";

// exportamos nuestra function
export default createClient({
  space: process.env.REACT_APP_API_SPACE,
  accessToken: process.env.REACT_APP_API_TOKEN
});
// traido de la pagina de contenful
// const contentful = require('contentful')

// const client = contentful.createClient({
//   space: '<space_id>',
//   accessToken: '<content_delivery_api_key>'
// })

// client.getEntries()
// .then((response) => console.log(response.items))
// .catch(console.error)
