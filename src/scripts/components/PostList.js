import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';

class PostList extends React.Component {
    render() {
        let allPosts = DataStore.getAllPosts();

        return (
            <div>
                <h2>Latest posts</h2>
                {allPosts.map(item => (
                    <li key={item.id}>
                      <Link to={`/post/${item.id}`}>{item.title.rendered}</Link>
                    </li>
                  ))
                }
            </div>
        );
    }
}

export default PostList;
