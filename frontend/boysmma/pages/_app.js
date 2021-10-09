import "../styles/globals.css";
import { useRouter } from "next/router";
import Link from "next/link";

function MyApp({ Component, pageProps }) {
  const router = useRouter();

  return (
    <div
      style={{
        backgroundImage: `
url(https://dmxg5wxfqgb4u.cloudfront.net/styles/background_image_xl/s3/2021-08/103021-ufc-267-blachowicz-vs-teixeira-abu-dhabi-fight-island.jpg?h=d1cb525d&itok=UFbHz4BY)`,
      }}
      className="h-screen bg-no-repeat bg-cover bg-center p-6 overflow-hidden"
    >
      <div className="container px-6 py-3 mx-auto flex justify-center items-center">
        {/* Mobile Menu open: "block", Menu closed: "hidden" */}
        <div className="items-center md:flex">
          <div className="flex md:flex-row md:mx-6 space-x-8">
            <Link href="/">
              <a
                className={
                  "my-1 text-xl text-white font-bold dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 " +
                  (router.asPath === "/" ? "text-indigo-500" : "")
                }
              >
                Главная
              </a>
            </Link>
            <Link href="/live">
              <a
                className={
                  "my-1 text-xl text-white font-bold dark:text-gray-200 hover:text-indigo-500 dark:hover:text-indigo-400 md:mx-4 md:my-0 " +
                  (router.asPath === "/live" ? "text-indigo-500" : "")
                }
              >
                Эфир
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Component {...pageProps} />;
    </div>
  );
}

export default MyApp;
