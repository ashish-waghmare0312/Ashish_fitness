"use client";
import React, { useEffect, useRef, useState } from "react";

export const Timeline = ({ data }) => {
  const wrapperRef = useRef(null);
  const containerRef = useRef(null);
  const [totalHeight, setTotalHeight] = useState(0);
  const [beamHeight, setBeamHeight] = useState(0);
  const [beamOpacity, setBeamOpacity] = useState(0);

  useEffect(() => {
    const measure = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      setTotalHeight(rect.height);
      updateBeam();
    };
    const updateBeam = () => {
      if (!wrapperRef.current) return;
      const rect = wrapperRef.current.getBoundingClientRect();
      const viewportH = window.innerHeight || 0;
      const startPoint = 0.1 * viewportH; // start 10% from top
      const endPoint = 0.5 * viewportH;   // end when bottom hits 50%
      const totalScrollable = Math.max(rect.height + startPoint - endPoint, 1);
      const scrolled = startPoint - rect.top;
      const progress = Math.min(Math.max(scrolled / totalScrollable, 0), 1);
      setBeamHeight(progress * rect.height);
      setBeamOpacity(Math.min(Math.max((progress - 0.02) / 0.08, 0), 1));
    };

    measure();
    window.addEventListener("resize", measure);
    window.addEventListener("scroll", updateBeam, { passive: true });
    return () => {
      window.removeEventListener("resize", measure);
      window.removeEventListener("scroll", updateBeam);
    };
  }, []);

  return (
    <div className="w-full font-sans" ref={containerRef}>
      <div ref={wrapperRef} className="relative mx-auto max-w-5xl pb-20">
        {data.map((item, index) => (
          <div key={index} className="flex justify-start pt-10 md:gap-10 md:pt-20">
            <div className="sticky top-40 z-40 flex max-w-xs flex-col items-center self-start md:w-full md:flex-row lg:max-w-sm">
              <div className="absolute left-3 flex h-10 w-10 items-center justify-center rounded-full bg-white md:left-3">
                <div className="h-4 w-4 rounded-full border border-neutral-300 bg-neutral-200 p-2" />
              </div>
              <h3 className="hidden text-xl font-bold text-neutral-500 md:block md:pl-20 md:text-5xl">
                {item.title}
              </h3>
            </div>

            <div className="relative w-full pl-20 pr-4 md:pl-4">
              <h3 className="mb-4 block text-left text-2xl font-bold text-neutral-500 md:hidden">
                {item.title}
              </h3>
              {item.content}
            </div>
          </div>
        ))}
        <div
          style={{ height: totalHeight + "px" }}
          className="absolute left-8 top-0 w-[2px] overflow-hidden bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 to-transparent to-[99%] [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] md:left-8"
        >
          <div
            style={{ height: beamHeight + "px", opacity: beamOpacity }}
            className="absolute inset-x-0 top-0 w-[2px] rounded-full bg-gradient-to-t from-lime-500 via-lime-400 to-transparent from-[0%] via-[10%]"
          />
        </div>
      </div>
    </div>
  );
};

