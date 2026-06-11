import FadeUp from "./FadeUp";

const contactItems = [
  { icon: "📍", title: "门店地址", lines: ["杭州市西湖区文二路 88 号", "宠物乐园 1F · 爪爪小栈"] },
  { icon: "🕐", title: "营业时间", lines: ["周一 — 周日", "09:00 — 20:00"] },
  { icon: "📞", title: "预约电话", lines: ["0571-8888-6688", "185-1234-5678"] },
  { icon: "💬", title: "微信客服", lines: ["爪爪小栈 · 小爪", "微信号：zhuazhua_pet"] },
];

export default function Contact() {
  return (
    <section className="contact" id="contact">
      <div className="container text-center">
        <span className="section-label">— Contact —</span>
        <h2 className="section-title">来爪爪小栈坐坐</h2>
        <p className="section-desc">开业期间首次体验可享 8 折优惠，带上毛孩子来玩吧！</p>
      </div>
      <div className="container">
        <div className="contact-info">
          {contactItems.map((item, i) => (
            <FadeUp key={i} delay={i}>
              <div className="contact-item">
                <span className="icon">{item.icon}</span>
                <h4>{item.title}</h4>
                {item.lines.map((line, j) => (
                  <p key={j}>{line}</p>
                ))}
              </div>
            </FadeUp>
          ))}
        </div>
        <FadeUp>
          <div className="contact-cta">
            <p>📱 扫码添加客服微信，提前预约不排队</p>
            <a href="#" className="btn btn-primary">
              📲 立即预约
            </a>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
