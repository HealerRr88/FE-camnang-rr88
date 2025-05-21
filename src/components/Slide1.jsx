import React from "react";
import home1 from "../assets/home1.png";

const Slide1 = () => {

  const servers = [
    { name: "Đà Lạt", url: "#" },
    { name: "Đà Nẵng", url: "#" },
    { name: "Hồ Chí Minh", url: "#" },
    { name: "Hà Nội", url: "#" },
  ];

  return (
    <div style={{
      background: "linear-gradient(to bottom, #0d1117, #111827)",
      height: "100vh",
      display: "flex",
      flexDirection: "column",
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
          <h1 style={{ fontSize: "40px", color: "#fff", lineHeight: "1.2", fontWeight: "bold" }}>
            TRANG THƯƠNG HIỆU GIẢI TRÍ TRỰC TUYẾN <span style={{ color: "rgb(43 141 254)" }}>HÀNG ĐẦU CHÂU Á</span>
          </h1>
          <p style={{ color: "#FFF", marginTop: "20px" }}>
            <span style={{ color: "rgb(43 141 254)", fontWeight: "bold" }}> RR88 </span> là một nhà cái có giấy phép cá cược trực tuyến hợp pháp do Isle of Man và Khu kinh tế Cagayan and
            Freeport cấp. Với bề dày kinh nghiệm và danh tiếng phục vụ hơn 10 triệu người chơi.
            <br />
            RR88 đã và đang khẳng định vị thế của mình trên thị trường game trực tuyến. Với tư cách là một công ty
            trò chơi trực tuyến có trụ sở tại Luân Đôn, Anh, sở hữu đội ngũ nhân tài chuyên nghiệp đông đảo
            cung cấp sản phẩm phục vụ chất lượng cao.

          </p>
          {/* <a href="#" style={{ color: "#ff9800", marginTop: "20px", display: "inline-block", textDecoration: "underline" }}>
            Xem thêm bài viết
          </a> */}
        </div>

        {/* Right */}
        <div style={{ flex: 1, textAlign: "center" }}>
          <img src={home1} alt="CSKH OKVIP" style={{ maxWidth: "100%", height: "auto" }} />
        </div>
      </div>

      {/* Bottom Tabs */}
      <div className="from-gray-900 to-black flex flex-col items-center justify-center text-white">
        <h2 className="text-xl md:text-2xl font-semibold mb-6">
          ● Chọn máy chủ để tham gia
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-xl px-4">
          {servers.map((server, index) => (
            <div
              key={index}
              style={{
                background: "linear-gradient(180deg, #394186 0%, #282c57 100%)",
              }}
              className="rounded-full px-6 py-3 flex justify-between items-center shadow-lg hover:scale-105 transition-all duration-200"
            >
              <span className="text-lg font-medium">{server.name}</span>
              <a
                href={server.url}
                className="bg-[#00b2ff] hover:text-white font-semibold px-4 py-1.5 rounded-full ml-4 text-white"
              >
                Truy cập
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide1;
