import { sanityClient } from "sanity/sanity-client"

const mutateDataIntoSanity = ()=>{
  const tokenWithWriteAccess = "skjP2GL1yv9qK8DsdswU7wTM30gXkQB87mtS8QRDEWFfoXXYT5YW6laiYF0hpsDRDh1PxUojBhBXJJxieCBLl9fV8osSroJgYvyQXuVXTFlyvhNuFS8m7n8sKa8LhkHy4Uz2CQ1s4ODQPSi3MsciIRRlpEJgCZZ5cezNAs2ZmyGdTvR9HVKS"
  

  
  const mutations = [{
    createOrReplace: {
      _id: '123',
      _type: 'restaurant',
      name: 'HAHAHAH'
    },

  }]
  
  fetch(`https://uxt6vztd.api.sanity.io/v2022-03-07/data/mutate/production`, {
    method: 'post',
    headers: {
      'Content-type': 'application/json',
      Authorization: `Bearer ${tokenWithWriteAccess}`
    },
    body: JSON.stringify({mutations})
  })
    .then(response => response.json())
    .then(result => console.log(result))
    .catch(error => console.error(error))
}

export default mutateDataIntoSanity