/* eslint-disable react/prop-types */

import SideNavBar from "./SideNavBar";

function Category({ categories, showNav }) {
  return (
    <>
      <ul className="flex item-center text-white">
        <SideNavBar showNav={showNav} />

        {categories.map((object, index) => {
          return (
            <li
              className="pt-[5px] pb-[5px] pr-[10px] pl-[10px] cursor-pointer text-[13px] rounded"
              key={index}
            >
              {object.name}
            </li>
          );
        })}
      </ul>
    </>
  );
}

export default Category;
