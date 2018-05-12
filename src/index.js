import React from 'react';
import ReactDOM from 'react-dom';
import Button from 'material-ui/Button';
import { withStyles } from 'material-ui/styles';
import 'typeface-roboto';
import './index.css';
import Text from './text';

class Paragraph extends React.Component {
  render() {
    return (
      <p>Indonesia tanah airku tanah tumpah darahku, disanalah aku berdiri, jadi pandu ibuku. Indonesia kebangsaanku, bangsa dan tanah airku. Marilah kita berseru, Indonesia bersau.</p>
    )
  }
}

class Title extends React.Component {
  render() {
    return (
      <div>
        <h2>This is Roboto?</h2>
      </div>
    )
  }
}

const App = () => {
  return (
    <div>
      <Button variant="raised" color="primary">
      Hello
      </Button>
      <Title/>
      <Text/>
    </div>
  )
}

ReactDOM.render(
  <App/>,
  document.getElementById('root')
);
