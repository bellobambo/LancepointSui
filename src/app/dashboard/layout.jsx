import Base from "@/components/base";
import Navbar from "@/components/Navbar";

export default function DashboardLayout({ children }) {
  return (
    <section>
      <Base>{children}</Base>
    </section>
  );
}
