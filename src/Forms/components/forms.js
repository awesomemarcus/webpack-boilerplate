import React from 'react';
import List from 'antd-mobile/lib/list';
import 'antd-mobile/lib/list/style/css';
import InputItem from 'antd-mobile/lib/input-item';
import 'antd-mobile/lib/input-item/style/css';
import Toast from 'antd-mobile/lib/toast';
import 'antd-mobile/lib/toast/style/css';
import Button from 'antd-mobile/lib/button';
import 'antd-mobile/lib/button/style/css';

import { createForm } from 'rc-form';

class Forms extends React.Component {
  constructor() {
    super();
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      name: 'heyyyy',
      hasError: true,
    };
    this.onErrorClick = this.onErrorClick.bind(this);
  }

  componentDidMount() {
    // this.autoFocusInt.focus();
  }

  handleClick() {
    this.inputRef.focus();
  }

  onErrorClick() {
    if (this.state.hasError) {
      Toast.fail('Please enter a valid name');
    }
  }

  render() {
    const { getFieldProps } = this.props.form;

    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('autofocus')}
            clear
            error={this.state.hasError}
            onErrorClick={this.onErrorClick}
            placeholder="auto focus"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e })}
            ref={el => this.autoFocusInt = el}>
            Name
          </InputItem>
          <List.Item>
            <Button type="primary" size="large" className="text-light">SUBMIT</Button>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default createForm()(Forms);