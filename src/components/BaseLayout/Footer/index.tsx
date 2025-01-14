import { S } from './Footer.styles';

interface Props {
    type?: 'default' | 'light';
}

export function AppFooter(props: Props) {
    const { type = 'default' } = props;

    return (
        <S.Footer className={`_${type}`}>
            <S.Content>
                
                <S.Link href="#" target="_blank" rel="noreferrer">
                    
                </S.Link>
            </S.Content>
        </S.Footer>
    );
}
