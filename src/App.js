import './App.css';
import { useState, useEffect } from 'react'
import { CardList } from './components/Card-List/card-list.component';

function App() {
  const [posts, setPosts] = useState([])

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/posts/")
      .then(res => res.json())
      .then(posts => { setPosts(posts) })
      .catch((error) => {
        console.error('Error:', error);
      });
  })
  return (
    <div className="App">
      <CardList posts={posts} />
    </div>
  );
}

export default App;
