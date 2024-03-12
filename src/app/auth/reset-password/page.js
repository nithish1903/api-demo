import Image from "next/image";
import ResetPasswordForm from "./components/ResetPasswordForm";

export default function Home() {
  return (
    <main className="">
      <section className="container mx-auto px-4 lg:px-0 ">
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <div className="mt-10 w-[225px] mx-auto">
              <Image src={"/logo.svg"} alt="logo" width={225} height={61} />
            </div>
          </div>
          <div className="col-span-12 my-10">
            <ResetPasswordForm />
          </div>
        </div>
      </section>
    </main>
  );
}
