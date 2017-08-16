class Post extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      post: null
    };
  }

  componentWillMount () {
    return fetch('http://dev.wp-api/wp-json/wp/v2/posts/' + this.props.match.params.id).then((response) => response.json())
    .then(post => {
      this.setState({
        post: post,
      });
    })
  }

  render() {
    // console.log(this.props.match.params.id);
    if (!this.state.post) return <div>Загрузка...</div>
    return(
      <div>
        <h3>{this.state.post.title.rendered}</h3>
        <div dangerouslySetInnerHTML={{ __html : this.state.post.content.rendered }}></div><div></div>
      </div>
    );
  }
}

export default Post;
