import { useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import axiosInstance from "../utils/axiosInstance";
import { api } from "../config/api";
import VideoPlayer from "../components/VideoPlayer"; // nếu có sẵn component
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { baseURL } from "../config/api";

const VideoListPage = () => {
  const { id, videoId } = useParams(); // lấy thêm videoId
  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);
  const [relatedVideos, setRelatedVideos] = useState([]);

  console.log();

  useEffect(() => {
    if (id) {
      fetchVideo();
      fetchRelatedVideos();
    }
  }, [id, videoId]);

  const fetchVideo = async () => {
    try {
      setVideo(null); // 💥 Reset video về null trước khi gọi API
      setLoading(true);
      let res;
      if (videoId) {
        res = await axiosInstance.get(`${api.videos}/${videoId}`);
        console.log(videoId);
        
      } else {
        res = await axiosInstance.get(`${api.videos}/latest`, {
          params: { category_id: id }
        });
      }
      setVideo(res.data);
    } catch (error) {
      console.error("Lỗi lấy thông tin video:", error);
    } finally {
      setLoading(false);
    }
  };

  const fetchRelatedVideos = async () => {
    try {
      const res = await axiosInstance.get(`${api.videos}/by-category?category_id=${id}`);
      setRelatedVideos(res.data);
    } catch (error) {
      console.error("Lỗi lấy danh sách video liên quan:", error);
    }
  };

  if (loading) {
    return (
      <div className="p-4">
        <Skeleton height={40} width={300} className="mb-4" />
        <Skeleton height={400} className="mb-4" />
        <Skeleton count={3} height={20} width={`80%`} />
      </div>
    );
  }
  if (!video) {
    return (
      <div className="p-4 text-center text-gray-500">
        Không tìm thấy video nào trong danh mục này.
      </div>
    );
  }

  return (
    <div className="flex flex-col md:flex-row gap-6">
      {/* Video chính */}
      <div className="flex-1">
        <h1 className="text-2xl font-bold text-blue-600 mb-4">{video.title}</h1>
        <div className="aspect-video bg-black rounded overflow-hidden mb-4">
          <VideoPlayer src={video.path} />
        </div>
        <p className="text-lg font-semibold">{video.title}</p>
        {video.description && <div className="mt-4 bg-white p-4 rounded text-gray-700">{video.description}</div>}
      </div>

      {/* Danh sách video */}
      <div className="md:w-1/4 w-full bg-white rounded-xl p-4 shadow">
        <h2 className="text-lg font-bold mb-2 text-gray-700">Danh sách video</h2>
        <ul className="space-y-3">
          {relatedVideos.map((v) => (
            <li key={v.id}>
              <Link
                to={`/category/${id}/video/${v.id}`}
                className={`flex items-center space-x-2 hover:underline ${v.id === video.id ? "text-blue-600 font-bold" : "text-gray-700"
                  }`}
              >
                <img
                  src={`${baseURL}${v.thumb}`}
                  alt="▶"
                  className="w-28 h-24"
                />
                <span>{v.title}</span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default VideoListPage;
