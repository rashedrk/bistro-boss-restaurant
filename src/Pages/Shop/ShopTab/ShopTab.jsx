import FoodCard from "../../../Components/FoodCard/FoodCard";

const ShopTab = ({items}) => {
    return (
        <div className="grid mx-24 md:grid-cols-3 gap-10">
            {
                items.map(item => <FoodCard
                    key={item._id}
                    item={item}
                ></FoodCard>)
            }
        </div>
    );
};

export default ShopTab;