import React from "react";
import home2 from "../assets/home2.png";

const Slide2 = () => {
  return (
    <div style={{
      background: "linear-gradient(to bottom, #0d1117, #111827)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      padding: "40px",
    }}>
      {/* Top content */}
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        {/* Left */}
        <div style={{ flex: 1, paddingRight: "20px" }}>
          <img src="https://images.3953049.com/wsd-images-prod/rr88f4/fe_setting/web_logo/wps_logo_20250109122053.png" alt="OKVIP" style={{ width: "150px", marginBottom: "20px" }} />
          <h1 style={{ fontSize: "40px", color: "#fff", lineHeight: "1.2" }}>
            TRANG GIẢI TRÍ <span style={{ color: "#00b2ff" }}>RR88</span> là gì?
          </h1>
          <h3 style={{ color: "#fff", marginTop: "20px" }}>
            HIỂU THẾ NÀO VỀ TRANG GIẢI TRÍ RR88?
          </h3>
          <p style={{ color: "#fff", marginTop: "20px" }}>
            <span style={{ color: "rgb(43 141 254)", fontWeight: "bold" }}> RR88 </span> là nền tảng giải trí trực tuyến hàng đầu, mang đến trải nghiệm đa dạng từ casino, game nổ hũ đến các dịch vụ cá cược thể thao hấp dẫn.
            Với giao diện thân thiện, tốc độ tải nhanh và chính sách bảo mật nghiêm ngặt, RR88 cam kết tạo ra sân chơi công bằng, minh bạch và an toàn cho người dùng tại Việt Nam và khu vực.
          </p>
          {/* <a href="#" style={{ color: "#ff9800", marginTop: "20px", display: "inline-block", textDecoration: "underline" }}>
            Xem thêm bài viết
          </a> */}
        </div>

        {/* Right */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img src={home2} alt="CSKH OKVIP" style={{ maxWidth: "auto", height: "auto" }} />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div style={{
        marginTop: "40px",
        background: "#1e293b",
        borderRadius: "10px",
        display: "flex",
        padding: "20px",
        justifyContent: "space-around",
        alignItems: "center",
      }}>
        <div style={{ flex: 1, textAlign: "center", color: "#fff" }}>
          <h4>TRANG GIẢI TRÍ <span style={{ color: "#00b2ff" }}>RR88</span> là gì?</h4>
          <p style={{ fontSize: "14px", color: "#ccc" }}>
            TRANG GIẢI TRÍ RR88 là ra sân chơi lành mạnh, giải trí tại Việt Nam.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center", color: "#fff", borderLeft: "1px solid #333", borderRight: "1px solid #333" }}>
          <h4>TRANG GIẢI TRÍ <span style={{ color: "#00b2ff" }}>RR88</span> có những gì?</h4>
          <p style={{ fontSize: "14px", color: "#ccc" }}>
            Đa dạng từ mini game, trò chơi giả trí.
          </p>
        </div>
        <div style={{ flex: 1, textAlign: "center", color: "#fff" }}>
          <h4>Đến với TRANG GIẢI TRÍ <span style={{ color: "#00b2ff" }}>RR88</span> khách hàng sẽ nhận được gì?</h4>
          <p style={{ fontSize: "14px", color: "#ccc" }}>
            Có những thế mạnh độc quyền mà không thể tìm thấy ở bất cứ nền tảng nào khác.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Slide2;
