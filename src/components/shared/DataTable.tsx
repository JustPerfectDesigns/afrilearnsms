import DataModal from "./DataModal";

const DataTable = () => {
  return (
    <div>
      <div className="relative overflow-x-auto sm:rounded-lg">
        <div className="pb-4 bg-white dark:bg-gray-900"></div>
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-7">
                Name
              </th>
              <th scope="col" className="px-6 py-7">
                Reg. Date
              </th>
              <th scope="col" className="px-6 py-7">
                Reg. Time
              </th>
              <th scope="col" className="px-6 py-7">
                Status
              </th>
              <th scope="col" className="px-6 py-7"></th>
            </tr>
          </thead>
          <tbody className="">
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
            <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600 group">
              <th
                scope="row"
                className="px-6 py-7 font-medium text-[#0B1A2D] whitespace-nowrap dark:text-white"
              >
                Kayode Otumba
              </th>
              <td className="px-6 py-7 text-[#0B1A2D]">Yesterday</td>
              <td className="px-6 py-7 text-[#0B1A2D]">12:34 PM</td>
              <td className="px-6 py-7 text-[#0B1A2D]">
                <span className="uppercase bg-[#FFE769] text-[#0B1A2D] text-[0.65rem] font-bold p-1">
                  pending approval
                </span>
              </td>
              <td className="px-6 py-6">
                <div className="invisible group-hover:visible">
                  <DataModal />
                </div>

                {/* <div className="flex justify-center items-center gap-3 invisible group-hover:visible">
                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#0AAC6C] flex items-center gap-2"
                  >
                    <Check className="w-5" />
                    Approve
                  </Button>

                  <Button
                    type="button"
                    variant="ghost"
                    className="font-medium px-3 py-[1.1rem] h-0 border border-[#BE6195] flex items-center gap-2"
                  >
                    <XCircle className="w-5" />
                    Decline
                  </Button>
                </div> */}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
