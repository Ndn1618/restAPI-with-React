import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'

function Posts() {

  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)
  const [posts, setPosts] = useState([])

  useEffect(() => {
    (
      async function () {
        try {
          const response = await fetch('https://jsonplaceholder.typicode.com/posts')
          const json = await response.json()
          setLoading(false)
          setPosts(json)
        }
        catch (error) {
          setError(error)
        }
      }
    )()
  }, [])

  return (
    <>
      {
        loading && !error && <p>Loading...</p>
      }

      {
        error && <>{error.message}</>
      }

      {
        posts.length > 0 && (
          <ul>
            {
              posts.map((post) => (
                <li key={post.id}>
                  <NavLink to={'/comments/' + post.id}>{post.title}</NavLink>
                </li>
              ))
            }
          </ul>
        )
      }
    </>
  )
}

export default Posts