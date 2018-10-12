import React, { Component } from 'react';
import Menu from '../../Components/Menu/Menu';
import Search from '../../Components/Search/Search';
import Form from '../../Components/Form/Form';
import Banner from '../../Components/Banner/Banner';
class Home extends Component {
  render() {
    return(
<div className='home'>
  <header>
    <Menu/>
  </header>
  <div className='container'>
    <content>
      <div className='row pt-5'>
        <Form />
        <Banner image='https://cdn.shopify.com/s/files/1/2501/7648/files/https__blueprint-api-production.s3.amazonaws.com_uploads_card_image_803289_d71e18ef-c4cc-4180-9a15-a07553811740_grande.jpg?v=1530589821'/>
      </div>
    </content>
    <footer></footer>
  </div>
</div>
    )
  }
}
export default Home;
