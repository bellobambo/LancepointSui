import Base from "@/components/base";

export default function NewJobLayout({ children }) {
  return (
    <section className="bg-white text-black">
      <Base>{children}</Base>
    </section>
  );
}
