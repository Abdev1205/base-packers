import NextTopLoader from "nextjs-toploader";

const Progress = () => {
  return (
    <>
      <NextTopLoader
        color="#008cff"
        initialPosition={0.08}
        crawlSpeed={200}
        height={3}
        crawl={true}
        showSpinner={false}
        easing="ease"
        speed={200}
        shadow="0 0 10px #008cff,0 0 5px #008cff"
      />
    </>
  );
};

export default Progress;
