import FadeUp from "./FadeUp";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container">
        <div className="grid-2">
          <FadeUp>
            <div className="about-img-wrap">
              <span>🏡</span>
            </div>
          </FadeUp>
          <FadeUp delay={1}>
            <div className="about-text">
              <span className="section-label">— About —</span>
              <h2>一家有温度的宠物洗护店</h2>
              <p>
                爪爪小栈成立于 2021 年，由一群爱宠如痴的年轻人创办。我们深知每一个毛孩子都是家人，所以始终坚持使用天然、无刺激的洗护产品，引进日本进口的负离子恒温吹水机与专业SPA设备。
              </p>
              <p>
                每一位美容师都持有国家认证的宠物美容资格证书，并经过严格培训，确保每一次服务都安全、舒适、专业。我们不赶时间，只用心服务。
              </p>
              <div className="about-stats">
                <div className="stat-item">
                  <div className="num">500+</div>
                  <div className="label">服务毛孩子</div>
                </div>
                <div className="stat-item">
                  <div className="num">98%</div>
                  <div className="label">好评率</div>
                </div>
                <div className="stat-item">
                  <div className="num">4.9</div>
                  <div className="label">综合评分</div>
                </div>
              </div>
            </div>
          </FadeUp>
        </div>
      </div>
    </section>
  );
}
