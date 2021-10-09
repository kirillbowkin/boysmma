import { useRouter } from "next/router";
import Link from "next/link";

export default function Home() {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center justify-center h-full  space-y-28">
      <div>
        <h1 className="text-9xl text-red-600 text-center">ММА ДЛЯ ПАЦАНОВ</h1>
      </div>
      <div>
        <h1 className="text-5xl text-white text-center">UFC 267</h1>
        <h1 className="text-8xl text-white text-center">Блахович</h1>
        <h1 className="text-8xl text-white text-center">Тешейра</h1>
      </div>
      <Link href="/live">
        <a class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-4 px-6 rounded-full">
          Смотреть
        </a>
      </Link>
    </div>
  );
}
