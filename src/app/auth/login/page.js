import Container from "@/components/common/Container";
import Image from "next/image";
import LoginFormComp from "./components/LoginFormComp";

export default function Home() {
  return (
    <main className="">
      <Container>
        <div className="grid grid-cols-12 gap-1">
          <div className="col-span-12">
            <div className="mt-10 w-[225px] mx-auto">
              <Image src={"/logo.svg"} alt="logo" width={225} height={61} />
            </div>
          </div>
          <div className="col-span-12 my-10">
            <LoginFormComp />
          </div>
        </div>
      </Container>
    </main>
  );
}
