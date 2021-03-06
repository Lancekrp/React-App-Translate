import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class LanguageSelector extends React.Component {
  static contextType = LanguageContext;

  render() {
    return (
      <div>
        Select a language:
        <i
          className="flag uk"
          onClick={() => this.context.onLanguageChange('english')}
        />
        <i
          className="flag fr"
          onClick={() => this.context.onLanguageChange('francais')}
        />
      </div>
    );
  }
}

export default LanguageSelector;
