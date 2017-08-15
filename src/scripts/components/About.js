import DataStore from 'flux/stores/DataStore.js';
class About extends React.Component {

    render() {
        let page = DataStore.getPageBySlug('about');
        let acf = page.acf;
        return (
            <div>
                <h2>{page.title.rendered}</h2>
                <div><span>Author - {acf.author}</span></div>
            </div>
        );
    }
}

export default About;
