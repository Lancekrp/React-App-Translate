import React from 'react';

class LanguageSelector extends React.Component {
  render() {
    return (
      <div>
        Select a language:
        <i className="flag uk" onClick={() => this.props.onLanguageChange('english')}/>
        <i className="flag fr" onClick={() => this.props.onLanguageChange('francais')}/>
      </div>
    );
  }
}

export default LanguageSelector;
