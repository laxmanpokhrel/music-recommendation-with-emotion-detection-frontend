export default function ErrorPage() {
  return (
    <div className="naxatw-w-screen naxatw-h-screen  naxatw-flex naxatw-justify-center naxatw-items-center naxatw-cursor-not-allowed">
      <div className="content-cover naxatw-flex naxatw-flex-col naxatw-gap-2">
        <h1 className="naxatw-text-5xl naxatw-font-bold naxatw-text-gray-800">Opps!</h1>
        <small className="naxatw-text-2xl naxatw-text-red-500">Something went wrong while fetching!</small>
        {/* <Image aspectRation="movie" src={errorImage} alt="Error Image" /> */}
      </div>
    </div>
  );
}
