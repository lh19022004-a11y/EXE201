import React, { useState, useEffect } from 'react';
import pottery from '../assets/pottery.png';
import weaving from '../assets/weaving.png';
import bamboo from '../assets/bamboo.png';
import wood from '../assets/wood.png';
import fan from '../assets/fan.png';
import flag from '../assets/flag.png';
import ScrollReveal3D from './ScrollReveal3D';
import Tilt3D from './Tilt3D';

const demoVideo = "https://mpjrisjgqelqeimh.public.blob.vercel-storage.com/Demo.mov";
const bambooVideo = "https://mpjrisjgqelqeimh.public.blob.vercel-storage.com/copy_61A2546A-3FE5-4D05-8DCB-57F2F4D4711D.mov";

const PortfolioItem = ({ image, title, category, onClick }) => (
  <Tilt3D maxRotation={10} scale={1.04} className="h-full">
    <div 
      onClick={onClick}
      className="group relative overflow-hidden rounded-3xl aspect-[3/4] cursor-pointer h-full border border-zinc-155"
    >
      <img 
        src={image} 
        alt={title} 
        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex flex-col justify-end p-8">
        <span className="text-primary font-bold text-xs uppercase tracking-widest mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
          {category}
        </span>
        <h3 className="text-white text-2xl font-bold transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
          {title}
        </h3>
        <button className="mt-4 text-white text-sm font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 hover:text-primary">
          <span>Xem chi tiết</span>
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>
    </div>
  </Tilt3D>
);


const PortfolioSection = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    { 
      title: "Gốm Bát Tràng", 
      category: "Nghệ thuật Đất nung", 
      image: pottery,
      video: null,
      youtube: "goTy1PHGyig",
      description: "Gốm Bát Tràng là tinh hoa di sản gốm sứ truyền thống với lịch sử hơn 700 năm tại Gia Lâm, Hà Nội. Mỗi tác phẩm nghệ thuật đất nung được thổi hồn qua bàn tay khéo léo vuốt nặn trên bàn xoay, vẽ họa tiết tùng cúc trúc mai tinh tế và phủ các lớp men lam, men rạn độc bản nung trong lò nhiệt độ cực cao.",
      details: [
        { label: "Vị trí địa lý", value: "Gia Lâm, Hà Nội, Việt Nam" },
        { label: "Niên đại lịch sử", value: "Hơn 700 năm truyền đời và phát triển" },
        { label: "Bí quyết làng nghề", value: "Men rạn độc bản và kỹ thuật vuốt nặn vẽ tay thủ công tinh xảo" },
        { label: "Sứ mệnh văn hóa", value: "Đưa tinh hoa gốm sứ Việt Nam vươn ra thị trường thế giới" }
      ]
    },
    { 
      title: "Lụa Hà Đông", 
      category: "Dệt lụa truyền thống", 
      image: weaving,
      video: null,
      description: "Lụa Vạn Phúc (Hà Đông) nức tiếng gần xa bởi chất liệu tơ tằm tự nhiên óng ả, mềm mịn, mặc mát mùa hè và ấm áp mùa đông. Đây là biểu tượng của sự sang trọng, quý phái, kết hợp hoàn hảo giữa nghề nuôi tằm ươm tơ, dệt lụa truyền đời và tư duy sáng tạo thời trang đương đại.",
      details: [
        { label: "Vị trí địa lý", value: "Phường Vạn Phúc, Quận Hà Đông, Hà Nội" },
        { label: "Niên đại lịch sử", value: "Hơn 1000 năm tuổi, là làng nghề dệt lụa cổ nhất Việt Nam" },
        { label: "Đặc trưng lụa", value: "Lụa Vân cát mỏng nhẹ, hoa văn dệt chìm tinh tế độc đáo" },
        { label: "Giá trị văn hóa", value: "Từng được chọn dệt trang phục cho hoàng gia và quan lại nhà Nguyễn" }
      ]
    },
    { 
      title: "Mây Tre Đan", 
      category: "Thủ công mỹ nghệ", 
      image: bamboo,
      video: bambooVideo,
      description: "Nghệ thuật mây tre đan Việt Nam khéo léo biến những sợi tre, mây mộc mạc thành các sản phẩm sinh hoạt nghệ thuật và đồ nội thất trang trí tinh xảo xuất khẩu. Từng đường đan tỉ mỉ kết hợp hoàn mỹ giữa sự dẻo dai tự nhiên của cây tre đất Việt và bàn tay tài hoa của người nghệ nhân.",
      details: [
        { label: "Vị trí địa lý", value: "Phú Vinh, Huyện Chương Mỹ, Hà Nội" },
        { label: "Niên đại lịch sử", value: "Hơn 400 năm gìn giữ và sáng tạo nghệ thuật đan lát" },
        { label: "Sản phẩm thế mạnh", value: "Đèn mây tre trang trí nghệ thuật, bàn ghế mây xuất khẩu chất lượng cao" },
        { label: "Đặc điểm nổi bật", value: "100% tự nhiên, thân thiện môi trường, chống ẩm mốc bền bỉ" }
      ]
    },
    { 
      title: "Làng quạt Chàng Sơn", 
      category: "Thủ công mỹ nghệ", 
      image: fan,
      video: null,
      youtube: "JGWOo2DjBV4",
      description: "Làng nghề làm quạt Chàng Sơn mang đậm nét văn hóa truyền thống với những chiếc quạt giấy, quạt nan tinh xảo. Qua bàn tay khéo léo của các nghệ nhân, những nan tre, tờ giấy lụa được biến hóa thành những tác phẩm nghệ thuật độc đáo, lưu giữ hồn cốt dân tộc.",
      details: [
        { label: "Vị trí địa lý", value: "Xã Chàng Sơn, Huyện Thạch Thất, Hà Nội" },
        { label: "Niên đại lịch sử", value: "Hàng trăm năm gắn bó với nghề làm quạt truyền thống" },
        { label: "Đặc trưng sản phẩm", value: "Quạt giấy, quạt lụa, quạt nan tre tinh xảo" },
        { label: "Giá trị văn hóa", value: "Lưu giữ nét đẹp thanh tao và lan tỏa văn hóa Việt" }
      ]
    },
    { 
      title: "Làng cờ Từ Vân", 
      category: "May thêu cờ Tổ quốc", 
      image: flag,
      video: demoVideo,
      description: "Làng nghề Từ Vân (Thường Tín, Hà Nội) tự hào giữ lửa truyền thống thiêng liêng may thêu cờ Tổ quốc suốt hơn 70 năm qua. Hàng triệu lá cờ đỏ sao vàng kiêu hãnh tung bay khắp mọi miền đất nước — từ đỉnh Fansipan lộng gió đến Trường Sa đầu sóng ngọn gió — đều kết tinh từ tấm lòng kiêu hãnh dân tộc và tay nghề thêu may chuẩn xác tuyệt đối của nghệ nhân nơi đây.",
      details: [
        { label: "Vị trí địa lý", value: "Làng Từ Vân, Xã Lê Lợi, Huyện Thường Tín, Hà Nội" },
        { label: "Lịch sử vang dội", value: "Được thành lập trước năm 1945, dệt may hàng vạn lá cờ đỏ sao vàng phục vụ ngày Quốc khánh 2/9/1945 tại Quảng trường Ba Đình lịch sử" },
        { label: "Tay nghề nghệ nhân", value: "Ngôi sao vàng 5 cánh được may đo theo tỷ lệ chuẩn tuyệt đối, thêu viền sắc sảo, bền bỉ chịu mưa nắng thời tiết" },
        { label: "Giá trị tinh thần", value: "Thổi bùng lòng tự hào dân tộc và tinh thần cống hiến âm thầm từ xưởng nghề mộc mạc" }
      ]
    },
  ];

  // Handle ESC key and block body scroll when modal is open
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setSelectedProject(null);
      }
    };
    if (selectedProject) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [selectedProject]);

  return (
    <section id="portfolio" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ScrollReveal3D direction="up" delay={100} duration={850}>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="heading-2 mb-4">Những <span className="text-secondary italic">Di Sản Viral</span></h2>
              <p className="text-zinc-600 text-lg">
                Khám phá những chiến dịch truyền thông đã giúp các làng nghề Việt Nam thu hút hàng triệu lượt xem và sự quan tâm từ cộng đồng quốc tế.
              </p>
            </div>
            <button className="btn-outline whitespace-nowrap cursor-pointer">
              Xem tất cả dự án
            </button>
          </div>
        </ScrollReveal3D>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {projects.map((project, idx) => (
            <ScrollReveal3D key={idx} direction="up" delay={idx * 100} duration={850} className="h-full">
              <PortfolioItem 
                {...project} 
                onClick={() => setSelectedProject(project)}
              />
            </ScrollReveal3D>
          ))}
        </div>
      </div>

      {/* Two-Column Split-Screen Detail Modal */}
      {selectedProject && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto bg-black/85 backdrop-blur-md p-4 sm:p-6 flex justify-center items-start md:items-center"
          onClick={() => setSelectedProject(null)}
        >
          <div 
            className="relative w-full max-w-5xl bg-zinc-900 rounded-3xl overflow-hidden shadow-2xl border border-white/10 flex flex-col md:flex-row h-auto md:h-[640px] max-h-[90vh] my-auto animate-modal-3d"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button 
              className="absolute top-4 right-4 z-25 w-10 h-10 flex items-center justify-center bg-black/60 hover:bg-black/80 text-white rounded-full transition-colors border border-white/10 focus:outline-none cursor-pointer"
              onClick={() => setSelectedProject(null)}
              aria-label="Close details"
            >
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Left Column: Video Player or Image Fallback */}
            <div className="w-full md:w-1/2 bg-black flex items-center justify-center relative aspect-video md:aspect-auto md:h-full overflow-hidden">
              {selectedProject.youtube ? (
                <iframe
                  src={`https://www.youtube.com/embed/${selectedProject.youtube}?autoplay=1`}
                  className="w-full h-full object-cover md:absolute md:inset-0"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                ></iframe>
              ) : selectedProject.video ? (
                <video 
                  src={selectedProject.video}
                  className="w-full h-full object-contain md:absolute md:inset-0"
                  controls
                  autoPlay
                  playsInline
                >
                  Trình duyệt của bạn không hỗ trợ xem video này.
                </video>
              ) : (
                <img 
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover md:absolute md:inset-0 transform scale-100 hover:scale-105 transition-transform duration-700"
                />
              )}
            </div>

            {/* Right Column: Detailed Cultural Info */}
            <div className="w-full md:w-1/2 p-8 sm:p-10 text-white flex flex-col justify-between bg-zinc-900 md:h-full overflow-y-auto">
              <div>
                <span className="text-primary font-bold text-xs uppercase tracking-widest mb-3 block">
                  {selectedProject.category}
                </span>
                <h3 className="text-3xl sm:text-4xl font-bold mb-5 text-white leading-tight">
                  {selectedProject.title}
                </h3>
                <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                  {selectedProject.description}
                </p>

                {/* Village Metadata Bullet Points */}
                <div className="space-y-4 border-t border-white/10 pt-5">
                  {selectedProject.details.map((detail, idx) => (
                    <div key={idx} className="flex flex-col gap-1">
                      <span className="text-primary text-xs font-bold uppercase tracking-wider">
                        {detail.label}
                      </span>
                      <span className="text-zinc-200 text-sm leading-relaxed">
                        {detail.value}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <button 
                onClick={() => setSelectedProject(null)}
                className="btn-primary mt-8 w-full text-center py-3 text-base cursor-pointer"
              >
                Quay lại
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default PortfolioSection;
