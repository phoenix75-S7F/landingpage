import Start from "@/components/Start";

const Startpage = () => {
  
  return (
    <main className="flex min-h-screen w-full justify-between font-inter z-10" >
      <Start />
      <div className="auth-asset">
        <div className="absolute bg-slate-400 opacity-100 top-[0%] left-[-7%] 2md:left[21%] right-0 h-full w-[1px] z-10"/>
        <div>
          <img
            src="/images/screen.jpg"
            alt="Auth image"
            width={800}
            height={800}
            className="rounded-lg border-sky-400 border-solid border-4"
          />
        </div>
      </div>
    </main>
  );
};

export default Startpage;
