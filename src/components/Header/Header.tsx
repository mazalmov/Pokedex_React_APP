import DynamicButton from "../DynamicButton/DynamicButton"
import { FAVORITES_BUTTON_LABEL, HOME_BUTTON_LABEL } from "./consts"
import { ButtonsContainer, HeaderContainer, LogoAndButtonsContainer, LogoContainer } from "./styles"
import PokedexLogo from '../../assets/pokedexLogo.png'
import { useNavigate } from 'react-router-dom'

export const Header = () => {

    const navigate = useNavigate();

    const handelHomePage = () => {
        navigate('/');
    };
    const handelFavoritesPage = () => {
        navigate('/favorites');
    };

    return (
        <HeaderContainer>
            <LogoAndButtonsContainer>
                <LogoContainer>
                    <img src={PokedexLogo} alt="Pokedex" className="logo-image" />
                </LogoContainer>

                <ButtonsContainer>
                    <DynamicButton label={HOME_BUTTON_LABEL} onClick={handelHomePage} />
                    <DynamicButton label={FAVORITES_BUTTON_LABEL} onClick={handelFavoritesPage} />
                </ButtonsContainer>
            </LogoAndButtonsContainer>
        </HeaderContainer>
    )
};

export default Header;