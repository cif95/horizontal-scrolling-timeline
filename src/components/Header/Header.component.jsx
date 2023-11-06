import { languageOptions } from "../../App.helpers";
import { HeaderStyle } from "./Header.style";

const { Container } = HeaderStyle;


export const Header = ({dictionary, onSelectLanguage, userLanguage}) => {

    return(
        <Container>
            
            {dictionary && <h3>{dictionary.headerTitle}</h3>}

            <select 
                onChange={onSelectLanguage}
                value={userLanguage}
            >

            {languageOptions.map((language, index) => {

                const {id, value} = language;

                return(
                    <option key={index} value={id}>
                        {value}
                    </option>
                    )
                })})
                
            </select>

            { dictionary && <button>{dictionary.headerButton}</button>} 

        </Container>
    )
}