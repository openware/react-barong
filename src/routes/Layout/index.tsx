import { Spinner } from 'react-bootstrap';
import * as React from 'react';
import { connect, MapDispatchToProps, MapStateToProps } from 'react-redux';
import { Route, Switch } from 'react-router';
import { Redirect, withRouter } from 'react-router-dom';
import {
    RootState,
    selectUserFetching,
    userFetch,
} from '../../modules';
import {
    EmailVerificationScreen,
    ForgotPasswordScreen,
    SignInScreen,
    SignUpScreen
} from '../../screens';

interface ReduxProps {
    userLoading?: boolean;
}

interface DispatchProps {
    userFetch: typeof userFetch;
}

export type LayoutProps = ReduxProps & DispatchProps;

const renderLoader = () => (
    <div className="pg-loader-container">
        <Spinner animation="border" variant="primary" />
    </div>
);

//tslint:disable-next-line no-any
const PublicRoute: React.FunctionComponent<any> = ({ component: CustomComponent, loading, ...rest }) => {
    if (loading) {
        return renderLoader();
    }

    const renderCustomerComponent = props => <CustomComponent {...props} />;
    return <Route {...rest} render={renderCustomerComponent} />;
};

class LayoutComponent extends React.Component<LayoutProps> {
    public componentDidMount() {
        this.props.userFetch();
    }

    public render() {
        const { userLoading } = this.props;

        return (
            <div className={`container-fluid pg-layout`}>
                <Switch>
                    <PublicRoute loading={userLoading} path="/signin" component={SignInScreen} />
                    <PublicRoute loading={userLoading} path="/signup" component={SignUpScreen} />
                    <PublicRoute loading={userLoading} path="/forgot_password" component={ForgotPasswordScreen} />
                    <PublicRoute loading={userLoading} path="/email-verification" component={EmailVerificationScreen} />
                    <Route path="**"><Redirect to="/trading/" /></Route>
                </Switch>
            </div>
        );
    }
}

const mapStateToProps: MapStateToProps<ReduxProps, {}, RootState> = state => ({
    userLoading: selectUserFetching(state),
});

const mapDispatchToProps: MapDispatchToProps<DispatchProps, {}> = dispatch => ({
    userFetch: () => dispatch(userFetch()),
});

// tslint:disable-next-line no-any
const Layout = withRouter(connect(mapStateToProps, mapDispatchToProps)(LayoutComponent) as any);

export {
    Layout,
};
