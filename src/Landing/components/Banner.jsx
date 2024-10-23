"use client";

export function Banner() {
  return (
    <div className="w-full justify-center top-0 bg-black py-3 text-white md:py-0 border-b border-white/20">
      <div className=" flex flex-col items-center justify-center gap-4 md:h-12 md:flex-row">
        <p
          className="group inline-flex items-center justify-center text-center text-sm leading-loose"
        >
          ✨
          <span className="font-bold">
            {" "}
            Make Your web-apps or web-sites secure
          </span>{" "}
        </p>
      </div>
    </div>
  );
}