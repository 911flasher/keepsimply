export default function handler(req, res) {
    if (req.method === 'POST') {
      console.log(req.method)
    } else {
      console.log(req)
    }
  }