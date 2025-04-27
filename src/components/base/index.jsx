import Navbar from "../Navbar";
import Sidebar from "../Sidebar";

export default function Base({ children }) {
  return (
    <>
      <div className="w-full h-screen flex ">
        <Sidebar />
        <div className="w-full h-full overflow-y-auto overflow-x-hidden relative">
          <Navbar />
          {children}
        </div>
      </div>
    </>
  );
}
