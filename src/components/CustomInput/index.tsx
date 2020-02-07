import { InputGroup, FormControl } from 'react-bootstrap';
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
