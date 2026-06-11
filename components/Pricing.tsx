import FadeUp from "./FadeUp";

const plans = [
  {
    name: "小型犬 / 猫",
    price: "¥89",
    featured: false,
    features: [
      { ok: true, text: "基础洗护全套" },
      { ok: true, text: "吹干 & 梳毛" },
      { ok: true, text: "修剪指甲 & 清耳" },
      { ok: true, text: "天然沐浴露" },
      { ok: false, text: "造型修剪" },
    ],
  },
  {
    name: "中型犬",
    price: "¥169",
    featured: true,
    badge: "🔥 最受欢迎",
    features: [
      { ok: true, text: "基础洗护全套" },
      { ok: true, text: "吹干 & 拉直" },
      { ok: true, text: "修剪指甲 & 清耳" },
      { ok: true, text: "天然草本护毛" },
      { ok: true, text: "造型修剪" },
    ],
  },
  {
    name: "大型犬",
    price: "¥269",
    featured: false,
    features: [
      { ok: true, text: "全套洗护服务" },
      { ok: true, text: "负离子恒温吹干" },
      { ok: true, text: "深层洁净护理" },
      { ok: true, text: "修剪指甲 & 清耳" },
      { ok: true, text: "赠送洁牙服务" },
    ],
  },
];

export default function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="container text-center">
        <span className="section-label">— Pricing —</span>
        <h2 className="section-title">透明价格，无隐藏消费</h2>
        <p className="section-desc">根据体型和毛发状况定价，到店后美容师会给出精准报价。</p>
      </div>
      <div className="container">
        <div className="grid-3">
          {plans.map((plan, i) => (
            <FadeUp key={i} delay={i}>
              <div className={`pricing-card${plan.featured ? " featured" : ""}`}>
                {plan.badge && <span className="badge-popular">{plan.badge}</span>}
                <h3>{plan.name}</h3>
                <div className="price-big">
                  {plan.price} <small>起</small>
                </div>
                <ul>
                  {plan.features.map((f, j) => (
                    <li key={j}>
                      <span className="check">{f.ok ? "✓" : "✗"}</span> {f.text}
                    </li>
                  ))}
                </ul>
                <a
                  href="#contact"
                  className={`btn ${plan.featured ? "btn-primary" : "btn-outline"}`}
                  style={{ width: "100%", justifyContent: "center" }}
                >
                  预约
                </a>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
