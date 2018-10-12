import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Banner extends Component {
  //cambiar el state
  // constructor(props){
  //   super(props)
  //   this.state={
  //     link: props.image
  //   }
  // }
  state = {
    link:this.props.image
  }
  fun = (event) => {
    //cambiar el state
    this.setState({
      link:'https://www.tuenlinea.com/wp-content/uploads/2018/08/5-tips-para-demostrar-que-sabes-de-futbol-soccer-en-la-final-de-la-Champions-League.jpg'
    })
  }
  render() {
    return(
      <div className='col-md-8'>
        <figure className="figure" onClick={this.fun}>
          <img src={this.state.link} className="figure-img img-fluid rounded" alt="A generic square placeholder image with rounded corners in a figure."/>
          <figcaption className="figure-caption">{this.state.link}</figcaption>
        </figure>
      </div>
      )
  }
}
Banner.propTypes = {
  image:PropTypes.string.isRequired
}
export default Banner;
