import { useEffect, useState } from "react";
import SectionTitle from "../../../Components/SectionTitle/SectionTitle";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const PopularMenu = () => {
    const [menu, setMenu] = useState([]);
    useEffect(() => {
        fetch('menu.json')
            .then(res => res.json())
            .then(data => {
                const popular = data.filter(item => item.category === 'popular');
                setMenu(popular);
            })
    }, [])
    return (
        <div>
            <SectionTitle
                heading="form our menu"
                subHeading="Check it out"
            >
            </SectionTitle>

            <div className="px-10 grid md:grid-cols-2 gap-10 mb-12">
                {
                    menu.map(item => 
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