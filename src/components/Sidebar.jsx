export default function Sidebar() {
  return (
    <aside style={{ width: '200px', background: '#eee', height: '100vh', padding: '1rem' }}>
      <ul>
        <li><a href="/dashboard">Dashboard</a></li>
        <li><a href="/">Landing</a></li>
      </ul>
    </aside>
  );
}