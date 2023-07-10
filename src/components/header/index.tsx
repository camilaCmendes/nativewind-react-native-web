import * as Icon from "@/assets";

const Header = () => {
  return (
    <>
      <div className="hidden lg:block h-32 bg-white w-full" />
      <div className="flex lg:hidden h-8 bg-white w-full items-center justify-start m-auto">
        <Icon.ChevronLeft stroke="black" />
        <h1 className="text-base text-gray-500 ml-auto mr-auto">Register</h1>
      </div>
    </>
  );
};

export default Header;
