import React, { Component } from 'react';
import { Navigation, Link } from 'react-toolbox';
import  Say from '../../i18n/Say.js';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setEnglish, setSpanish } from '../../actions/languageActions';

class LanguagePicker extends Component {
  constructor(props){
    super(props);

  }

  setEnglish(event){
    console.log('English clicked');
    event.preventDefault();
    this.props.setEnglish();
  }

  setSpanish(event){
    console.log('Spanish clicked');
    event.preventDefault();
    this.props.setSpanish();
  }
  
  isActive(lang){
    if (lang === this.props.language.currentLanguage ) {
      return true;
    }
    else{
      return false;
    }
  }

  render() {
    var isEnglishActive = this.isActive('en');
    var isSpanishActive = this.isActive('es');

    return (
      <Navigation type='vertical' >
        <Link href="#" onClick={this.setEnglish.bind(this)} active={isEnglishActive} ><Say text="english" /></Link>
        <Link href="#" onClick={this.setSpanish.bind(this)} active={isSpanishActive} ><Say text="spanish" /></Link>
      </Navigation>
    )
  }
}

function mapStateToProps(state) {
  return {
    language: state.language
  };
};

function matchDispatchToProps( dispatch ) {
  return bindActionCreators({
    // Put actions here
    setEnglish: setEnglish,
    setSpanish: setSpanish
  }, dispatch );
};

export default connect(mapStateToProps, matchDispatchToProps)(LanguagePicker);
