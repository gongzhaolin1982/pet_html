import FadeUp from "./FadeUp";

const testimonials = [
  {
    stars: "★★★★★",
    quote: "我家布丁以前特别怕洗澡，送到爪爪小栈后美容师超级耐心，安抚了很久才动手。现在布丁竟然会主动往店里跑！太神奇了。",
    avatar: "🐱",
    name: "林小羽",
    pet: "布偶 · 团团妈",
  },
  {
    stars: "★★★★★",
    quote: "第一次尝试SPA水疗，原本担心狗狗会怕水，没想到全程超级享受，出来毛发光泽度肉眼可见地变好了。已经办了会员卡！",
    avatar: "🐕",
    name: "张一铭",
    pet: "金毛 · 大毛爸",
  },
  {
    stars: "★★★★★",
    quote: "造型水平真的赞！之前换了好几家店都剪不出我想要的效果，这里的小哥哥一次就get到了！我家妹妹现在是小区最靓的崽。",
    avatar: "🐩",
    name: "陈芮芮",
    pet: "贵宾 · 妹妹妈",
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials" id="testimonials">
      <div className="container text-center">
        <span className="section-label">— Testimonials —</span>
        <h2 className="section-title">铲屎官们这样说</h2>
        <p className="section-desc">来自真实顾客的真实反馈，每一份信任我们都格外珍惜。</p>
      </div>
      <div className="container">
        <div className="grid-3">
          {testimonials.map((t, i) => (
            <FadeUp key={i} delay={i}>
              <div className="testimonial-card">
                <div className="stars">{t.stars}</div>
                <blockquote>&ldquo;{t.quote}&rdquo;</blockquote>
                <div className="author">
                  <div className="avatar">{t.avatar}</div>
                  <div>
                    <div className="name">{t.name}</div>
                    <div className="pet">{t.pet}</div>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
