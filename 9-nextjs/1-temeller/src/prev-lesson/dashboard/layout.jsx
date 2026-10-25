const Layout = ({ children, notifications, revenue, users }) => {
  return (
    <div>
      <div className="box border-red-500">{children}</div>

      <div className="flex my-10 gap-10">
        <div className="flex-1">{revenue}</div>
        <div className="flex-1">{notifications}</div>
      </div>

      <div>{users}</div>
    </div>
  );
};

export default Layout;
