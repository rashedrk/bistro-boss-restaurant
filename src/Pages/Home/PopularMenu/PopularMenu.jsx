import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";
import useMenu from "../../../hooks/useMenu";


const PopularMenu = () => {
    const [menu] = useMenu();
    const popular = menu.filter(item => item.category === 'popular')
    return (
        <div>
            <SectionTitle
                heading="form our menu"
                subHeading="Check it out"
            >
            </SectionTitle>

            <div className="px-10 grid md:grid-cols-2 gap-10 mb-12">
                {
                    popular.map(item => 
                        <MenuItem
                            key={item._id}
                            item={item}
                        >
                        </MenuItem>
                    )
                }
            </div>
        </div>
    );
};

export default PopularMenu;