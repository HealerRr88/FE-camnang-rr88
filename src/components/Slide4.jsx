import React from "react";
import home2 from "../assets/home2.png";

const Slide4 = () => {
  const contacts = [
    { name: "CSKH 24/7", img: "https://api-okvip-site.itokvip.com//uploads/621f4ffe-de93-4605-9117-d922898057f0.png" },
    { name: "Gmail", img: "https://api-okvip-site.itokvip.com//uploads/7f5f4670-7530-434e-b968-278008ea4cdf.png" },
    { name: "Telegram tổng hợp", img: "https://api-okvip-site.itokvip.com//uploads/16f62b4c-a631-42e5-b9b4-550b92914856.png" },
    { name: "Telegram Game show", img: "https://api-okvip-site.itokvip.com//uploads/c1296b42-d765-44f0-b920-e18c097e345e.png" },
    { name: "Fanpage Tổng hợp", img: "https://api-okvip-site.itokvip.com//uploads/e5e28171-0b5b-4443-89a2-6bd06bc8247c.png" },
    { name: "Fanpage Game show", img: "https://api-okvip-site.itokvip.com//uploads/855714ab-35cb-4009-aa2e-070040fc80bb.png" },
    { name: "Youtube", img: "https://api-okvip-site.itokvip.com//uploads/5b7e012f-444f-4d41-aa14-8d655e49bb14.png" },
    { name: "Threads", img: "https://api-okvip-site.itokvip.com//uploads/f13af54b-d735-40c7-b3a4-9dea7c73f56d.png" },
  ];

  return (
    <div className="slide3-wrapper" style={{
      background: "linear-gradient(to bottom, #0d1117, #111827)",
      height: "100vh",
      alignItems: "center",
      justifyContent: "center",
      padding: "40px",
    }}>
      <h1 className="text-center font-medium	">LIÊN HỆ <span style={{ color: "rgb(43 141 254)", fontWeight: "bold" }}> RR88 </span></h1>
      <div style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        maxWidth: "1200px",
        width: "100%",
      }}>
        {/* Left */}
        <div style={{ flex: 1, padding: "20px" }}>
          <img src={home2} alt="cskh" style={{ maxWidth: "100%", height: "auto" }} />
          <h3 style={{ color: "#ffffff", marginTop: "20px" }}>Chúng tôi luôn lắng nghe bạn</h3>
          <h2 style={{ color: "#00b2ff", fontWeight: "bold" }}>Hãy liên lạc với chúng tôi</h2>
        </div>

        {/* Right */}
        <div style={{
          flex: 1,
          display: "grid",
          gridTemplateColumns: "repeat(2, 1fr)",
          gap: "20px",
          padding: "20px",
        }}>
          {contacts.map((contact, index) => (
            <div key={index} style={{
              background: "#1e293b",
              borderRadius: "20px",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              padding: "20px",
              color: "#fff",
            }}>
              <img src={contact.img} alt={contact.name} />
              <span style={{ textAlign: "center", fontSize: "14px" }}>{contact.name}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slide4;
