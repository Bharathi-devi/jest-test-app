import React, { Component } from 'react';
import Header from './component/header';
import Headline from './component/headline'
import SharedButton from './component/button';
import ListItem from './component/listitem';
import { connect } from 'react-redux';
import { fetchPosts } from './actions/index';
import './app.scss'

const tempArr = [{
  fName: 'Jhon',
  lName: 'helan',
  email: 'jhon.helan@gmail.com',
  age: 20,
  onlineStatus: true
}];

 const initialSate = { 
   hideSharedButton :false;
 }
class App extends Component {

  constructor(props) {
    super(props);
    this.state={
      ...initialState
    }
    this.fetch = this.fetch.bind(this);
  }

  fetch() {
    this.props.fetchPosts();
    this.exampleMethod_updatesstate();
  }

  exampleMethod_updatesstate()
  {
    const { hideSharedButton}= this.state; 
    this.setState({
      hideSharedButton:!hideSharedButton
    })
  }

  exampleMethod_updateNumer(number){
    return number+1;
  }
  render() {
    const { posts } = this.props;
    //console.log(posts);
     const {hideSharedButton} =this.state;
    const configButton = {
      buttonText: 'Get posts',
      emitEvent: this.fetch
    }

    return (
      <div data-test="appComponent">
        <Header />
        <section className="main">
          <Headline header="posts" desc="Click the button to render posts" tempArr={tempArr} />
          {hideSharedButton &&
          <SharedButton  {...configButton} />}
          {posts.length > 0 && <div>
            {posts.map((post, index) => {
              const { title, body } = post;
              const configListItem =
              {
                title, desc: body
              };
              return (
                <ListItem key={index} {...configListItem} />
              )
            })
            }
          </div>
          }
        </section>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    posts: state.posts
  }
}



export default connect(mapStateToProps, { fetchPosts })(App);
