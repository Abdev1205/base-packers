import dynamic from "next/dynamic";

const Home = dynamic(() => import("@/components/custom/LaunchPage"), {
  ssr: false,
});

export default Home;
