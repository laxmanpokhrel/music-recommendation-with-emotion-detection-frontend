interface IErrorMolecule {
  errorMessage?: string;
}
export default function DefaultErrorMolecule({ errorMessage = 'Something went wrong!' }: IErrorMolecule) {
  return (
    <div className="w-full h-full flex justify-center items-center bg-blend-color-burn bg-[#F6F8FB]">
      <div className="content-cover flex  w-fit h-fit items-center justify-center gap-4 bg-gray-200 px-3 py-1 rounded-lg  bg-opacity-50">
        <div className="icon text-yellow-500">
          <i className="material-icons  text-4xl">warning</i>
        </div>
        <div className="content flex-col gap-3">
          <h2 className="text-2xl font-bold text-gray-600">Opps!</h2>
          <p className="text-[#979797]">{errorMessage}</p>
        </div>
      </div>
    </div>
  );
}
