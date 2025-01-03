import { NavLink } from 'react-router-dom';

interface Props {
  to: string;
  icon: string;
  title: string;
}

export const SidebarMenuItem = ({
  to, icon, title
}:Props) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) => {
        const baseClasses = "flex items-center gap-4 px-6 py-2 relative hover:bg-zinc-200";
        const activeClasses = isActive ? " border-l-4 border-black" : "";
        return baseClasses + activeClasses;
      }}
    >
      {({ isActive }) => (
        <>
          <i className={`${icon} text-xl ${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}></i>
          <div>
            <h3 className={`${isActive ? 'text-zinc-900' : 'text-zinc-400'}`}>{title}</h3>
          </div>
        </>
      )}
    </NavLink>
  );
};
