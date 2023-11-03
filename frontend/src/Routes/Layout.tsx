
export default function Layout() {

  return (
    <div className="w-full h-full">
      <main className="max-h-screen ">
        <Outlet />
      </main>
    </div>
  );
}