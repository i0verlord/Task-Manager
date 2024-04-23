import Sidebar from "./components/sidebar"
import BaordTask from "./components/boardTask"

export default function Home() {
  return(
    <main className="flex h-full">
      <Sidebar />
      <BaordTask />
    </main>
  );
}