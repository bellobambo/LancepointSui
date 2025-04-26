import "server-only";

export default function BaseNoAuth({ children }) {
  return (
    <>
      <div className="w-full h-full overflow-y-auto overflow-x-hidden relative">
        {children}
      </div>
    </>
  );
}
