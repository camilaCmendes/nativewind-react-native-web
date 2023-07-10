import * as Icon from "@/assets";

const Footer = () => {
  return (
    <>
      <div className="hidden lg:block h-32 bg-white w-full mt-4" />
      <div className="flex lg:hidden h-16 bg-white justify-between items-center p-4">
        <button className="flex w-fit h-fit px-3 py-2 rounded-lg gap-1">
          <Icon.ChevronLeft stroke="#1C64F2" />
          <h4 className="text-xs text-blue-600">Cancel</h4>
        </button>
        <button className="flex bg-blue-600 w-fit h-fit px-3 py-2 rounded-lg gap-1">
          <h4 className="text-xs text-white">Save Section</h4>
          <Icon.ChevronRight stroke="#fff" />
        </button>
      </div>
    </>
  );
};

export default Footer;
