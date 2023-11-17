import { Helmet } from "react-helmet-async";
import Cover from "../../shared/Cover/Cover";
import coverImg from "../../../assets/shop/banner2.jpg";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import 'react-tabs/style/react-tabs.css';
import { useState } from "react";
import useMenu from "../../../hooks/useMenu";
import OrderTab from "./OrderTab";
import { useParams } from "react-router-dom";


const Order = () => {

    const categories = ['Salads', 'Pizzas', 'Soups', 'Deserts', 'drinks']
    const { category } = useParams();
    const initialIndex = categories.indexOf(category);

    const [tabIndex, setTabIndex] = useState(initialIndex);
    const [menuItems] = useMenu();
    
    const drinks = menuItems.filter(item => item.category === 'drinks');
    const desserts = menuItems.filter(item => item.category === 'dessert');
    const salads = menuItems.filter(item => item.category === 'salad');
    const soups = menuItems.filter(item => item.category === 'soup');
    const pizzas = menuItems.filter(item => item.category === 'pizza');


    return (
        <div className="">
            <Helmet>
                <title>Bistro Boss | Order</title>
            </Helmet>
            <Cover
                title={"OUR SHOP"}
                body={"Would you like to try a dish?"}
                img={coverImg}
            ></Cover>
            <div className="text-center my-20">
                <Tabs defaultIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
                    <TabList>
                        <Tab>SALAD</Tab>
                        <Tab>PIZZA</Tab>
                        <Tab>SOUPS</Tab>
                        <Tab>DESSERTS</Tab>
                        <Tab>DRINKS</Tab>
                    </TabList>
                    <TabPanel>
                        <OrderTab items={salads}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={pizzas}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={soups}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={desserts}></OrderTab>
                    </TabPanel>
                    <TabPanel>
                        <OrderTab items={drinks}></OrderTab>
                    </TabPanel>
                </Tabs>
            </div>
        </div>
    );
};

export default Order;