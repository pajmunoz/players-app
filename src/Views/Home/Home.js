import React, { Component } from 'react';
import Menu from '../../Components/Menu/Menu';
import Search from '../../Components/Search/Search';
import Form from '../../Components/Form/Form';
class Home extends Component {
  render() {
    return(
<div className='home'>

  <header>
    <Menu/>
  </header>
  <div className='container'>
    <content>
      <Search/>
      <Form/>
    </content>
    <footer></footer>
  </div>
</div>
    )
  }
}
export default Home;
