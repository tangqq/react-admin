import React from 'react';
import ReactDOM from 'react-dom';
import App from '_p/views/Page1';

it('默认的测试', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});
