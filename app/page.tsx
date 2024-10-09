import Navbar from "./components/Navbar";
import Image from "next/image";

export default function Home() {
  return (
    <>
    <Navbar />
    <div className="grid grid-rows items-center justify-items-center p-8 pb-10 gap-16 sm:p-20">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <h1 className="text-5xl">ค้นหาคำศัพท์</h1>
        <div className='bg-white w-full left-0 border-grey border-b-2 block relative inset-0 p-0 w-auto show'>
            <input 
                type="text"
                placeholder="ค้นหาคำศัพท์"
                className="w-full h-12 w-auto bg-grey px-4 py-1 pr-[12%] pr-6 placeholder:text-dark-grey"
            />                    
        </div>

        <div className="flex gap-4 items-center flex-col sm:flex-row">
          <a className="mx-5 my-3 border-2 px-3 py-2">แจ้งศัพท์หาย</a>
          <a className="my-3 border-2 px-3 py-2">แจ้งศัพท์หาย</a>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        
      </footer>
    </div>
    </>
  );
}
