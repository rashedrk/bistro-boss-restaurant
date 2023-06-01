import Cover from "../../Shared/Cover/Cover";
import shopBanner from '../../../assets/shop/banner2.jpg';
import { useState } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import useMenu from "../../../hooks/useMenu";
import ShopTab from "../ShopTab/ShopTab";
import { useParams } from "react-router-dom";


const Shop = () => {
    const categories = ['salads','pizzas','soups','desserts','drinks']
    const {category} = useParams();
    const initialCategory = categories.indexOf(category);
    const [tabIndex, setTabIndex] = useState(initialCategory);
    const [menu] = useMenu();
    const drinks = menu.filter(item => item.category === 'drinks');
    const desserts = menu.filter(item => item.category === 'dessert');
    const pizzas = menu.filter(item => item.category === 'pizza');
    const salads = menu.filter(item => item.category === 'salad');
    const soups = menu.filter(item => item.category === 'soup');

    return (
        <div>
            <Cover
                img={shopBanner}
                title="OUR SHOP"
                subTitle="would you like to try a dish"
            />

            <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                <TabList>
                    <Tab>SALAD</Tab>
                    <Tab>PIZZA</Tab>
                    <Tab>SOUPS</Tab>
                    <Tab>DESSERTS</Tab>
                    <Tab>DRINKS</Tab>
                </TabList>
                <TabPanel>
                    <ShopTab
                        items={salads}
                    ></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab
                        items={pizzas}
                    ></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab
                        items={soups}
                    ></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab
                        items={desserts}
                    ></ShopTab>
                </TabPanel>
                <TabPanel>
                    <ShopTab
                        items={drinks}
                    ></ShopTab>
                </TabPanel>
                
            </Tabs>
        </div>
    );
};

export default Shop;