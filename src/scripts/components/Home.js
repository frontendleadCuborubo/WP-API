import { Link } from 'react-router-dom';
import DataStore from 'flux/stores/DataStore.js';
class Home extends React.Component {
    render() {
        let allData = DataStore.getAll();
        let allPosts = DataStore.getAllPosts();
        console.log(allPosts);
        // console.log(allData);

        return (
            <div>
                <h2>Hello world!</h2>
                {allPosts.map(item => (
                    <li key={item.id}>
                      <Link to={`/${item.slug}`}>{item.title.rendered}</Link>
                    </li>
                  ))
                }
            </div>
        );
    }
}

export default Home;
