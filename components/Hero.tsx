export default function Hero() {
  return (
    <section className="hero" id="hero">
      <div className="container">
        <div className="hero-text">
          <div className="hero-tag">✨ 专注宠物洗护 · 用心呵护每一只毛孩子</div>
          <h1>
            让毛孩子<br />洗个 <span>舒服的澡</span>
          </h1>
          <p>
            爪爪小栈 — 温泉水疗、专业洗护、萌宠造型，用爱与专业给您的宠物最好的护理体验。
          </p>
          <div className="hero-btns">
            <a href="#pricing" className="btn btn-primary">
              查看价格
            </a>
            <a href="#contact" className="btn btn-outline">
              联系我们
            </a>
          </div>
        </div>
        <div className="hero-image">
          <div className="hero-img-placeholder">
            <span>🐕</span>
            <span className="emoji-row">🐈 🐾</span>
          </div>
          <div className="floating-badge">
            <span className="num">500+</span>
            <span className="label">
              服务过的<br />毛孩子
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
