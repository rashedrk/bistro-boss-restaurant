import { Helmet } from "react-helmet-async";
import Cover from "../../Shared/Cover/Cover";
import menuBg from '../../../assets/menu/banner3.jpg';
import desertBg from '../../../assets/menu/dessert-bg.jpeg';
import pizzaBg from '../../../assets/menu/pizza-bg.jpg';
import saladBg from '../../../assets/menu/salad-bg.jpg';
import soupBg from '../../../assets/menu/soup-bg.jpg';
import useMenu from "../../../hooks/useMenu";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuCategory from "../MenuCategory/MenuCategory";

const Menu = () => {
    const [menu] = useMenu();
    const offered = menu.filter(item => item.category === 'offered');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');
    return (
        <>
            <Helmet>
                <title>Bistro Boss | Menu</title>
            </Helmet>
            <Cover
                img = {menuBg}
                title = "Our Menu"
                subTitle = "Would you like to try a dish?" />
            <SectionTitle
                heading = "today's offer" 
                subHeading = "Don't miss"
            />
            <MenuCategory
                
                items={offered}
                
            />
            <MenuCategory
                img={desertBg}
                items={desserts}
                title="desserts"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCategory
                img={pizzaBg}
                items={pizzas}
                title="pizzas"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCategory
                img={saladBg}
                items={salads}
                title="salads"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
            <MenuCategory
                img={soupBg}
                items={soups}
                title="soups"
                subTitle="Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book."
            />
        </>
    );
};

export default Menu;