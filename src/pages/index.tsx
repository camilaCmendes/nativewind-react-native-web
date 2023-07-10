import Header from "@/components/header";
import Mobile from "./mobile";
import Web from "./web";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <>
      <Header />
      <div className="hidden lg:block">
        <div className="max-w-custom m-auto">
          <Web />
        </div>
      </div>
      <div className="lg:hidden">
        <Mobile />
      </div>
      <Footer />
    </>
  );
}
