import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [post, setPost] = useState(null);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/posts/2')
      .then(response => setPost(response.data))
      .catch(error => console.error('Error:', error));
  }, []);

  return (
    <div>
      {post ? <h2>{post.title}</h2> : <p>Loading...</p>}
    </div>
  );
}

export default App;
