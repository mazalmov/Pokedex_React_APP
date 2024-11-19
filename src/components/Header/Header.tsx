import DynamicButton from "../DynamicButton/DynamicButton"
import { FAVORITES_BUTTON_LABEL, HOME_BUTTON_LABEL } from "./consts"
import { ButtonsContainer, HeaderContainer, LogoAndButtonsContainer, LogoContainer } from "./styles"
import PokedexLogo from '../../assets/pokedexLogo.png'

export const Header = () => {
    return (
        <HeaderContainer>
            <LogoAndButtonsContainer>
                <LogoContainer>
                    <img src={PokedexLogo} alt="Pokedex" className="logo-image" />
                </LogoContainer>

                <ButtonsContainer>
                    <DynamicButton className="homepage" label={HOME_BUTTON_LABEL} action="navigate" to='/' />
                    <DynamicButton className="favorites" label={FAVORITES_BUTTON_LABEL} action="navigate" to='/favorites' />
                </ButtonsContainer>
            </LogoAndButtonsContainer>
        </HeaderContainer>
    )
};
export default Header;
