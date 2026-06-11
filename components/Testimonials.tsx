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
  {
    stars: "★★★★★",
    quote: "店里环境干净整洁，没有异味，这点真的超加分！猫咪寄养了三天，每天都能收到视频，超放心。",
    avatar: "🐱",
    name: "周暖暖",
    pet: "英短 · 年糕妈",
  },
  {
    stars: "★★★★★",
    quote: "之前狗狗指甲一直是我自己剪，总是流血。过来体验了一下剪指甲服务，师傅手法又快又稳，还教了我好多护理知识。",
    avatar: "🐕",
    name: "赵大志",
    pet: "柯基 · 小短腿爸",
  },
  {
    stars: "★★★★★",
    quote: "从美团上团的洗护套餐，性价比超高！洗完之后毛又蓬又香，手感好到忍不住一直撸。已经推荐给朋友圈的铲屎官们了。",
    avatar: "🐰",
    name: "顾小满",
    pet: "比熊 · 棉花糖妈",
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
