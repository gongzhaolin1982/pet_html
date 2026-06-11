import FadeUp from "./FadeUp";

const galleryItems = [
  { icon: "🐩", label: "贵宾 · 棉花糖造型" },
  { icon: "🐕", label: "金毛 · 清爽夏装" },
  { icon: "🐈", label: "布偶 · 蓬松护理" },
  { icon: "🐩", label: "比熊 · 萌系圆脸" },
  { icon: "🐕", label: "柯基 · 蜜桃臀" },
  { icon: "🐈", label: "英短 · 尊享SPA" },
];

export default function Gallery() {
  return (
    <section className="gallery" id="gallery">
      <div className="container text-center">
        <span className="section-label">— Gallery —</span>
        <h2 className="section-title">毛孩子大变身</h2>
        <p className="section-desc">看看从爪爪小栈走出去的小可爱们，每一个都是我们的骄傲。</p>
      </div>
      <div className="container">
        <div className="gallery-grid">
          {galleryItems.map((item, i) => (
            <FadeUp key={i} delay={i % 4}>
              <div className="gallery-item">
                <span>{item.icon} {item.label}</span>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
