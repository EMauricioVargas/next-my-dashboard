import WidgetGrid from "@/components/dashboard/WidgetGid";

export const metadata = {
  title: 'Dashboard',
  description: 'Esta es la descripción'
}

export default function MainPage() {
  return (
    <div className="text-black">
      <h1 className="mt-2 text-3xl">Dashboard</h1>
      <span className="text-xl"> Información general</span>
      <WidgetGrid></WidgetGrid>
    </div>
  );
}