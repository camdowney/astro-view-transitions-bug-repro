import { useEffect, useState } from 'react'

export default function Posts() {
  const [posts, setPosts] = useState<number[]>([])

  useEffect(() => {
    // Mock getting posts from database dynamically
    setPosts([...Array(20).keys()])
  }, [])

  return (
	  <div className='container post-grid'>
      {posts.map(i =>
        <a
          href='/post'
          className='post'
          key={i}
        >
          Post {i}
        </a>
      )}
    </div>
  )
}