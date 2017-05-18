import React from 'react';
import packageJSON from '../../package.json';

let version = packageJSON.version;

if (/docs/.test(version)) {
  version = version.split('-')[0];
}

const PageFooter = React.createClass({
  render() {
    return (
        <footer className="bs-docs-footer" role="contentinfo">
          <div className="container">
            <div className="bs-docs-social">
              
            </div>
            <p>Code licensed under <a href="https://github.com/react-bootstrap/react-bootstrap/blob/master/LICENSE" target="_blank">MIT</a>.</p>
            <ul className="bs-docs-footer-links muted">
              <li>Currently v{version}</li>
              <li>·</li>
              <li><a href="https://github.com/react-bootstrap/react-bootstrap/">GitHub</a></li>
              <li>·</li>
              <li><a href="https://github.com/react-bootstrap/react-bootstrap/issues?state=open">Issues</a></li>
              <li>·</li>
              <li><a href="https://github.com/react-bootstrap/react-bootstrap/releases">Releases</a></li>
            </ul>
          </div>
        </footer>
      );
  }
});

export default PageFooter;
