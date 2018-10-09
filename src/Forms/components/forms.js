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
      name: 'Marcus',
      surname: 'Gwapo',
      hasError: true,
    };
    this.submit = this.submit.bind(this);
  }

  componentDidMount() {
    // this.autoFocusInt.focus();
  }

  handleClick() {
    this.inputRef.focus();
  }

  onErrorClick(error) {
    if (this.state.hasError) {
      Toast.fail(error, 3, null, false);
    }
  }

  submit() {
    this.props.form.validateFields((error, value) => {
      console.log('error', error, value);
    })
  }

  render() {
    const { getFieldProps, getFieldError } = this.props.form;
    console.log(getFieldError('name'));

    return (
      <div>
        <List>
          <InputItem
            {...getFieldProps('name', {
              validateTrigger: 'onKeyUp',
              rules: [{ required: true }]
            })}
            clear
            error={!!(getFieldError('name'))}
            onErrorClick={this.onErrorClick.bind(this, getFieldError('name'))}
            placeholder="auto focus"
            value={this.state.name}
            onChange={(e) => this.setState({ name: e })}
            ref={el => this.autoFocusInt = el}
            name="name">
            Name
          </InputItem>
          <InputItem
            {...getFieldProps('surname', {
              validateTrigger: 'onKeyUp',
              rules: [{ required: true }]
            })}
            clear
            error={!!(getFieldError('surname'))}
            onErrorClick={this.onErrorClick.bind(this, getFieldError('surname'))}
            placeholder="auto focus"
            value={this.state.surname}
            onChange={(e) => this.setState({ surname: e })}
            ref={el => this.autoFocusInt = el}
            name="surname">
            Surname
          </InputItem>
          <List.Item>
            <Button type="primary" size="large" className="text-light" onClick={this.submit}>SUBMIT</Button>
          </List.Item>
        </List>
      </div>
    );
  }
}

export default createForm()(Forms);