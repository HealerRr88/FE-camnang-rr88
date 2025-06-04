import VideoSection from "../components/VideoSection";
import { useEffect, useState } from "react";
import axiosInstance from "../utils/axiosInstance";
import { api } from "../config/api"; // import các api path

const ChuongTrinhThienNguyen = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchVideos();
  }, []);

  const fetchVideos = async () => {
    try {
      const res = await axiosInstance.get(`${api.videos}`);
      setVideos(res.data);
    } catch (error) {
      console.error("Lỗi load videos:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="p-4 md:p-6">
      <VideoSection
        title="CHƯƠNG TRÌNH THIỆN NGUYỆN RR88"
        description={
          <>
            <p>Tiếp theo sẽ là cặp đôi nào? Cùng chờ đón AD nhaaa</p>
            <p>RR88 - Chúng tôi không chỉ là CASINO, chúng tôi là một phần cuộc sống của bạn!!</p>
          </>
        }
        videoData={videos}
        basePath="/chuong-trinh-thien-nguyen"
        loading={loading}
      />
    </div>
  );
};

export default ChuongTrinhThienNguyen;
