import { Link } from "react-router-dom";
import Cover from "../../Shared/Cover/Cover";
import MenuItem from "../../Shared/MenuItem/MenuItem";


const MenuCategory = ({ items, img, title, subTitle }) => {
    return (
        <div>
            {
                title && <Cover
                    img={img}
                    title={title}
                    subTitle={subTitle}
                />
            }
            <div className="px-10 grid md:grid-cols-2 gap-10 mb-12">
                {
                    items.map(item =>
                        <MenuItem
                            key={item._id}
                            item={item}
                        />

                    )
                }
            </div>
            <div className="text-center mb-20">
                <Link to={`/shop/${title}`}>
                    <button className="btn btn-outline border-0 border-b-4">ORDER YOUR FAVORITE FOOD</button>
                </Link>
            </div>
        </div>
    );
};

export default MenuCategory;