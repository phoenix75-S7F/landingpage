import Start from "@/components/Start";

const Startpage = () => {
  return (
    <main className="flex min-h-screen w-full justify-between font-inter">
      <Start />
      <div className="auth-asset">
        <div className="absolute bg-slate-400 opacity-100 top-[0%] left-[21%] right-0 h-full w-[1px] z-10" />
        <div>
          <img
            src="/images/screen.jpg"
            alt="Auth image"
            width={900}
            height={1000}
            className="rounded-lg border-sky-400 border-solid border-4"
          />
        </div>
      </div>
    </main>
  );
};

export default Startpage;
