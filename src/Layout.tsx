import Navbar from "./components/Navbar";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="overflow-y-hidden">
      <Navbar />
      <main className="pr-30">{children}</main>
    </div>
  );
};
 
export default Layout;
