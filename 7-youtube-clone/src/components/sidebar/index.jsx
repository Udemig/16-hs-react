import { Link } from "react-router-dom";
import { collapsedSidebarItems, expandedSidebarItems } from "../../utils/constants";

const Sidebar = ({ isSidebarOpen }) => {
  // küçük sidebar
  if (!isSidebarOpen) {
    return (
      <aside className="w-20">
        <div className="py-3">
          {collapsedSidebarItems.map((item, key) => (
            <Link
              key={key}
              to={item.path}
              className="flex-center flex-col py-4 px-2 mx-2 rounded-lg hover:bg-gray"
            >
              <span className="text-xl mb-2">{item.icon}</span>
              <span className="text-[10px] text-center">{item.name}</span>
            </Link>
          ))}
        </div>
      </aside>
    );
  }

  // büyük sidebar
  return (
    <>
      <div className="w-20" />

      <aside className="w-60 fixed z-20 bg-black overflow-y-auto h-[calc(100vh-56px)] shadow-xl slide-in">
        <div className="py-3">
          {expandedSidebarItems.map((category, key) => (
            <div key={key} className="border-b border-gray py-4 px-3">
              {category.title && <h2 className="font-semibold mb-2">{category.title}</h2>}

              <div>
                {category.items.map((item, key) => (
                  <Link to={item.path} className="flex gap-4 items-center p-2 rounded-lg">
                    <span className="text-xl">{item.icon}</span>
                    <span className="whitespace-nowrap">{item.name}</span>
                  </Link>
                ))}
              </div>
            </div>
          ))}
        </div>
      </aside>
    </>
  );
};

export default Sidebar;
