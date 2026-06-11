"use client";

import { useEffect, useRef, useState, useCallback } from "react";

const services = [
  { icon: "🛁", name: "基础洗护", desc: "温和清洁、吹干、梳毛、修剪指甲、清耳。适合日常护理的毛孩子。", price: "¥89", unit: "起" },
  { icon: "💆", name: "温泉水疗 SPA", desc: "恒温SPA水疗、草本护毛、按摩放松。让毛孩子享受一次贵族级护理。", price: "¥189", unit: "起" },
  { icon: "✂️", name: "萌宠造型", desc: "个性化造型修剪、打薄去废毛、时尚造型设计。让毛孩子颜值在线！", price: "¥259", unit: "起" },
  { icon: "🧴", name: "深层洁净", desc: "针对油皮、敏感肌的专业药浴护理，去屑止痒，深层清洁毛囊。", price: "¥139", unit: "起" },
  { icon: "🦷", name: "口腔护理", desc: "超声波洁牙、牙齿抛光、口腔检查，远离牙结石与口臭。", price: "¥79", unit: "起" },
  { icon: "🧹", name: "寄养洗护套餐", desc: "3天以上寄养即送全套洗护一次，含每日遛弯、喂食、陪伴。", price: "¥199", unit: "/ 天" },
];

export default function Services() {
  const trackRef = useRef<HTMLDivElement>(null);
  const progressRef = useRef<HTMLDivElement>(null);
  const [dotCount, setDotCount] = useState(0);
  const [curIdx, setCurIdx] = useState(0);
  const autoTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const isPausedRef = useRef(false);
  const intervalMs = 4000;

  const cardGap = 24;

  const getCardWidth = useCallback(() => {
    const cards = trackRef.current?.querySelectorAll(".service-card");
    if (!cards || cards.length === 0) return 304; // fallback: 280 + 24
    return (cards[0] as HTMLElement).offsetWidth + cardGap;
  }, []);

  const updateUI = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getCardWidth();
    const idx = Math.min(
      Math.max(Math.round(track.scrollLeft / step), 0),
      dotCount - 1
    );
    setCurIdx(idx);

    if (idx >= 0) setCurIdx(idx);

    // Update arrow visibility via CSS classes
    const prevBtn = track.parentElement?.querySelector(".carousel-arrow.prev");
    const nextBtn = track.parentElement?.querySelector(".carousel-arrow.next");
    if (prevBtn && nextBtn) {
      const atStart = track.scrollLeft <= 3;
      const atEnd = track.scrollLeft >= track.scrollWidth - track.offsetWidth - 3;
      prevBtn.classList.toggle("hidden", atStart);
      nextBtn.classList.toggle("hidden", atEnd);
    }
  }, [dotCount, getCardWidth]);

  const rebuild = useCallback(() => {
    const track = trackRef.current;
    if (!track) return;
    const step = getCardWidth();
    const totalScroll = track.scrollWidth - track.offsetWidth;
    let count = Math.ceil(totalScroll / step) + 1;
    if (count < 1) count = 1;
    setDotCount(count);
    setCurIdx(0);
    track.scrollLeft = 0;
    updateUI();
  }, [getCardWidth, updateUI]);

  const goTo = useCallback(
    (idx: number) => {
      const track = trackRef.current;
      if (!track) return;
      const clampedIdx = Math.max(0, Math.min(idx, dotCount - 1));
      track.scrollTo({ left: clampedIdx * getCardWidth(), behavior: "smooth" });
    },
    [dotCount, getCardWidth]
  );


  const stopAuto = useCallback(() => {
    if (autoTimerRef.current) {
      clearTimeout(autoTimerRef.current);
      autoTimerRef.current = null;
    }
    const bar = progressRef.current;
    if (bar) {
      bar.classList.remove("anim");
      bar.style.width = "0%";
    }
  }, []);

  const startAuto = useCallback(() => {
    stopAuto();
    if (dotCount <= 1) return;
    const bar = progressRef.current;
    if (bar) {
      bar.classList.remove("anim");
      // Force reflow
      void bar.offsetWidth;
      bar.classList.add("anim");
    }
    autoTimerRef.current = setTimeout(() => {
      if (!isPausedRef.current) {
        const next = curIdx + 1 >= dotCount ? 0 : curIdx + 1;
        goTo(next);
      }
      startAuto();
    }, intervalMs);
  }, [stopAuto, dotCount, curIdx, goTo]);



  // Rebuild on mount and resize
  useEffect(() => {
    const timer = setTimeout(rebuild, 150);
    let resizeTimer: ReturnType<typeof setTimeout> | null = null;
    const onResize = () => {
      if (resizeTimer) clearTimeout(resizeTimer);
      resizeTimer = setTimeout(rebuild, 200);
    };
    window.addEventListener("resize", onResize);
    return () => {
      clearTimeout(timer);
      if (resizeTimer) clearTimeout(resizeTimer);
      window.removeEventListener("resize", onResize);
    };
  }, [rebuild]);

  // Start auto-play when dotCount changes
  useEffect(() => {
    startAuto();
    return () => stopAuto();
  }, [dotCount, startAuto, stopAuto]);

  // Update scroll listener
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    let scrollTimer: number | null = null;
    const onScroll = () => {
      if (scrollTimer) cancelAnimationFrame(scrollTimer);
      scrollTimer = requestAnimationFrame(updateUI);
    };
    track.addEventListener("scroll", onScroll);
    return () => {
      track.removeEventListener("scroll", onScroll);
      if (scrollTimer) cancelAnimationFrame(scrollTimer);
    };
  }, [updateUI]);

  const handlePrev = () => {
    if (curIdx > 0) goTo(curIdx - 1);
  };
  const handleNext = () => {
    if (curIdx < dotCount - 1) goTo(curIdx + 1);
  };
  const handlePointerDown = () => {
    isPausedRef.current = true;
    stopAuto();
  };
  const handlePointerUp = () => {
    isPausedRef.current = false;
    startAuto();
  };
  const handlePointerLeave = () => {
    isPausedRef.current = false;
    startAuto();
  };

  return (
    <section className="services" id="services">
      <div className="container text-center">
        <span className="section-label">— Services —</span>
        <h2 className="section-title">专业洗护服务</h2>
        <p className="section-desc">从基础清洁到高端 SPA，我们为不同品种、不同需求的宠物提供量身定制的护理方案。</p>
      </div>
      <div className="container" style={{ position: "relative" }}>
        <div className="carousel-wrap" id="serviceCarousel">
          <button
            className="carousel-arrow prev"
            onClick={handlePrev}
            aria-label="上一个"
          >
            ‹
          </button>
          <div
            className="carousel-track"
            ref={trackRef}
            onPointerDown={handlePointerDown}
            onPointerUp={handlePointerUp}
            onPointerLeave={handlePointerLeave}
          >
            {services.map((svc, i) => (
              <div className="service-card fade-up visible" key={i}>
                <span className="service-icon">{svc.icon}</span>
                <h3>{svc.name}</h3>
                <p>{svc.desc}</p>
                <div className="price">
                  {svc.price} <small>{svc.unit}</small>
                </div>
              </div>
            ))}
          </div>
          <button
            className="carousel-arrow next"
            onClick={handleNext}
            aria-label="下一个"
          >
            ›
          </button>
          <div className="carousel-dots">
            {Array.from({ length: dotCount }).map((_, i) => (
              <button
                key={i}
                className={`carousel-dot${i === curIdx ? " active" : ""}`}
                onClick={() => goTo(i)}
                aria-label={`第${i + 1}页`}
              />
            ))}
          </div>
          <div className="carousel-progress">
            <div className="carousel-progress-bar" ref={progressRef}></div>
          </div>
        </div>
      </div>
    </section>
  );
}
