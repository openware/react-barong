import { InputGroup, FormControl } from 'react-bootstrap';
import moment from 'moment-timezone';
import * as React from 'react';

export interface CustomInputProps {
    type: string;
    label: string;
    defaultLabel: string;
    handleChangeInput?: (value: string) => void;
    inputValue: string | number;
    handleFocusInput?: () => void;
    placeholder: string;
    classNameLabel?: string;
    classNameInput?: string;
    autoFocus?: boolean;
    onKeyPress?: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    readOnly?: boolean;
    id?: string;
    handleClick?: ((event: React.MouseEvent<HTMLInputElement, MouseEvent>) => void);
    isDisabled?: boolean;
}

type Props = CustomInputProps;

const momentObj = moment.tz("2013-11-18 11:55", "America/Toronto");

export class CustomInput extends React.Component<Props> {
    public render() {
        const {
            label,
            placeholder,
            defaultLabel,
            inputValue,
            classNameLabel,
            type,
            autoFocus,
            readOnly,
            id,
            handleClick,
            isDisabled,
        } = this.props;

        return (
            <React.Fragment>
                <div>{momentObj}</div>
                <div className="custom-input">
                    <label className={classNameLabel}>
                        {inputValue && (label || defaultLabel)}
                    </label>
                    <InputGroup size="lg">
                        <FormControl
                            size="lg"
                            type={type}
                            value={inputValue.toString()}
                            placeholder={placeholder}
                            autoFocus={autoFocus}
                            onFocus={this.props.handleFocusInput}
                            onBlur={this.props.handleFocusInput}
                            readOnly={readOnly}
                            id={id}
                            onClick={handleClick}
                            disabled={isDisabled}
                        />
                    </InputGroup>
                </div>
            </React.Fragment>
        );
    }
}
