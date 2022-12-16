// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import executeQuery from '../../lib/db'

async function getTestData () {
  const result = await executeQuery({
    query: 'SELECT * FROM test'
  })

  const results = await JSON.parse(JSON.stringify(result))
  return results;
}

let testData;
getTestData().then(data => testData = data)

export default function handler (req, res) {
  res
    .status(200)
    .json(
      {
        testData
      }
    )
}
