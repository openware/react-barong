/**
 * @class ExampleComponent
 */

import * as React from 'react';
import { CustomInput } from './components/CustomInput';
import styles from './styles.css';

export type Props = { text: string }

export default class ExampleComponent extends React.Component<Props> {
  render() {
    const {
      text
    } = this.props;

    return (
      <div className={styles.test}>
        <CustomInput
          type="email"
          label={'Email'}
          placeholder={'Email'}
          defaultLabel="Email"
          inputValue={text}
          classNameLabel="cr-email-form__label"
          classNameInput="cr-email-form__input"
          autoFocus={true}
        />
      </div>
    )
  }
}
