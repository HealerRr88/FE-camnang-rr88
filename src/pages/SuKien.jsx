import VideoSection from "../components/VideoSection";
import suKienVideos from "../data/suKienVideos";

const SuKien = () => (
    <div >
        <VideoSection 
         title="SỰ KIỆN GIẢI TRÍ RR88"
         description={
           <>
             <p>Tiếp theo sẽ là cặp đôi nào? Cùng chờ đón AD nhaa</p>
             <p>RR88 – Chúng tôi không chỉ là CASINO – Chúng tôi là 1 phần cuộc sống của bạn!!</p>
           </>
         }
         videoData={suKienVideos}
         basePath="/su-kien"
        />
    </div>
  );
  
  export default SuKien;
  