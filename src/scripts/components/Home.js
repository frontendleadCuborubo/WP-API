import { Link } from 'react-router-dom';
import PostList from 'components/PostList.js';
import DataStore from 'flux/stores/DataStore.js';

class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        // let allPosts = DataStore.getAllPosts();
        // console.log(allPosts);
        console.log(allData);

        return (
            <div>
                <h2>Home Page</h2>
                <PostList />
            </div>
        );
    }
}

export default Home;
