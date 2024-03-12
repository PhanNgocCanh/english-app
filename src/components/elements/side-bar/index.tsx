import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faPaste, faGear, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import { routes } from '@/configs/routers';
import classNames from 'classnames/bind';
import styles from '@/components/elements/side-bar/Sidebar.module.scss';
import Tippy from '@tippyjs/react/headless';
import SidebarItem from './SidebarItem';
import { useState } from 'react';

const sidebarItem = [
  {
    icon: faPaste,
    text: 'Project',
    to: routes.lesson,
  },
];

const cx = classNames.bind(styles);

function SideBar() {
  const [active, setActive] = useState(0);
  const handleActive = (index: number) => {
    setActive(index);
  };
  return (
    <aside className="w-11 h-screen bg-slate-700 text-gray-400">
      <div className="h-full flex flex-col justify-items-center">
        <div className="flex justify-between flex-col h-full">
          <ul className="">
            {sidebarItem.map((item, index) => (
              <SidebarItem
                key={index}
                icon={<FontAwesomeIcon icon={item.icon} />}
                text={item.text}
                active={index == active}
                onClick={() => handleActive(index)}
                to={item.to}
              />
            ))}
          </ul>
          <ul>
            <Tippy
              interactive
              hideOnClick={false}
              placement="right-start"
              render={() => (
                <div className="w-30 h-16 bg-slate-600 text-white rounded-sm px-1 py-2 text-sm">
                  <div className={`flex ${cx('user-image')} hover:cursor-pointer`}>
                    <img className="w-5 h-5 rounded-full mr-1" src={'abc'} alt="" />
                  </div>
                  <div
                    className={`flex justify-start items-center mt-2  ml-1
                                        ${cx('user-image')} hover:cursor-pointer`}
                    onClick={() => alert('logout')}>
                    <FontAwesomeIcon icon={faSignOutAlt} className="mr-1" />
                    Logout
                  </div>
                </div>
              )}>
              <p>
                <SidebarItem to="" icon={<FontAwesomeIcon icon={faUserCircle} />} />
              </p>
            </Tippy>
            <SidebarItem to="" icon={<FontAwesomeIcon icon={faGear} />} />
          </ul>
        </div>
      </div>
    </aside>
  );
}

export default SideBar;
