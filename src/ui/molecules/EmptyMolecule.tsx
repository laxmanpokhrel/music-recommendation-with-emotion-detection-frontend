export default function EmptyMolecule() {
  return (
    <div className="naxatw-w-full naxatw-h-full naxatw-flex naxatw-justify-center naxatw-items-center naxatw-bg-blend-color-burn naxatw-bg-[#F6F8FB]">
      <div className="content-cover naxatw-flex naxatw-w-fit naxatw-h-fit naxatw-items-center naxatw-justify-center naxatw-gap-4 naxatw-bg-gray-200 naxatw-px-3 naxatw-py-1 naxatw-rounded-lg  naxatw-bg-opacity-50">
        <div className="icon naxatw-text-gray-600">
          <i className="material-icons  naxatw-text-4xl">warning</i>
        </div>
        <div className="content naxatw-flex-col naxatw-gap-3">
          <h2 className="naxatw-text-2xl naxatw-font-bold naxatw-text-gray-600">Opps!</h2>
          <p className="naxatw-text-[#979797]">No data found!</p>
        </div>
      </div>
    </div>
  );
}
