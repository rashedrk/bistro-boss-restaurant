import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg';

const Menu = () => {
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover img={menuBg} title="Our Menu" subTitle="Would you like to try a dish?"/>
        </>
    );
};

export default Menu;