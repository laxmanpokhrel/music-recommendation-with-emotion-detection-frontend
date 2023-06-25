interface IErrorMolecule {
  errorMessage?: string;
}
export default function DefaultErrorMolecule({ errorMessage = 'Something went wrong!' }: IErrorMolecule) {
  return (
    <div className="laxutw-w-full laxutw-h-full laxutw-flex laxutw-justify-center laxutw-items-center laxutw-bg-blend-color-burn laxutw-bg-[#F6F8FB]">
      <div className="content-cover laxutw-flex  laxutw-w-fit laxutw-h-fit laxutw-items-center laxutw-justify-center laxutw-gap-4 laxutw-bg-gray-200 laxutw-px-3 laxutw-py-1 laxutw-rounded-lg  laxutw-bg-opacity-50">
        <div className="icon laxutw-text-yellow-500">
          <i className="material-icons  laxutw-text-4xl">warning</i>
        </div>
        <div className="content laxutw-flex-col laxutw-gap-3">
          <h2 className="laxutw-text-2xl laxutw-font-bold laxutw-text-gray-600">Opps!</h2>
          <p className="laxutw-text-[#979797]">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
