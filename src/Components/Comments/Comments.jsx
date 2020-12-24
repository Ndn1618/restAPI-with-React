import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

function Comments() {

  const { id } = useParams()
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [comments, setComments] = useState([])

  useEffect(() => {
    (
      async function () {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/comments')
          const json = await response.json()
          setLoading(false)
          setComments(json.filter(comment => comment.postId === Number(id)))
        }
        catch (error) {
          setError(error)
        }
      }
    )()
  }, [
    id,
  ])

  return (
    <>
      {
        loading && !error && <p>Loading...</p>
      }

      {
        error && <>{error.message}</>
      }

      {
        comments.length > 0 && (
          <ul>
            {
              comments.map(comment => <li key={comment.id}>
                {comment.body}
              </li>)
            }
          </ul>
        )
      }
    </>
  )
}

export default Comments