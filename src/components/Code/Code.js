import React from 'react';
import './code.css'; 
import Prism from 'prismjs';
import 'prismjs/components/prism-python'; 
import 'prismjs/components/prism-java'; 
import 'prismjs/components/prism-sql'; 
import 'prismjs/components/prism-http'; 
import 'prismjs/components/prism-css'; 
import 'prismjs/components/prism-javascript'; 
import 'prismjs/components/prism-bash'; 
import 'prismjs/components/prism-powershell'; 
import 'prismjs/themes/prism-solarizedlight.css'; 

class CodeDisplay extends React.Component {
    componentDidMount() {
      Prism.highlightAll();
    }
  
    render() {
      const { code, language } = this.props; // Accept a language prop
      return (
        <pre className="code-display">
          <code className={`language-${language}`}>
            {code}
          </code>
        </pre>
      );
    }
  }  
  
  export default CodeDisplay;