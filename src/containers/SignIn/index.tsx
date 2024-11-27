import { t } from '@lingui/macro';
import { Button, Tooltip } from 'antd';

import { AppFooter } from 'src/components/BaseLayout/Footer';
import logo from 'src/images/logo.svg';
import { getAuthorizeUrl, OAuthState } from 'src/services/auth';


import s from './SignIn.module.scss';
import { S } from './SignIn.styles';


function authorize(state?: OAuthState) {
    window.location.href = getAuthorizeUrl(state);
}

interface SignInProps {
    originPathName?: string;
}

export function SignIn(props: SignInProps) {
    return (
        <S.Container>
            <S.Form>
                <div className={s.header}>
                    <S.Text>{t`Welcome to`}</S.Text>
                    <img src={logo} alt="" />
                </div>
                    <>
                        <Button
                            type="primary"
                            onClick={() => authorize({ nextUrl: props.originPathName })}
                            size="large"
                        >
                            {t`Log in`}
                        </Button>
                    </>
            </S.Form>
            <AppFooter type="light" />
        </S.Container>
    );
}
