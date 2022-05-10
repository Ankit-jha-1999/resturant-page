import React, { useState } from "react";
import "./Resturant.css";
import Menu from "./MenuApi.js";
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";

const uniqueData = [
  ...[
    ...new Set(
      Menu.map((curElem) => {
        return curElem.category;
      })
    ),
  ],
  "All",
];
console.log(uniqueData);

const Resturant = () => {
  const [items, setItems] = useState(Menu);
  const [menuList, setMenuList] = useState(uniqueData);

  const filterItem = (category) => {
    if (category === "All") {
      setItems(Menu);
      return;
    }
    const updatedList = Menu.filter((curElem) => {
      return curElem.category === category;
    });
    setItems(updatedList);
  };

  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList} />
      <MenuCard itemsData={items} />
    </>
  );
};

export default Resturant;
