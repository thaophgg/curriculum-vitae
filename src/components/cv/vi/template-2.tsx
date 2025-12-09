import React from 'react'

const Template2 = () => {
  return (
    <div className="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden my-8">

      <div className="grid grid-cols-1 lg:grid-cols-12">

        <div className="lg:col-span-5 bg-[#6B7B6A] text-white relative min-h-screen lg:min-h-0">

          <div className="absolute inset-0">
            <img src="https://via.placeholder.com/800x1200" alt="Ảnh đại diện"
              className="w-full h-full object-cover opacity-80" />
          </div>

          <div className="relative z-10 p-10 pt-16">

            <h1 className="text-5xl font-bold leading-tight mt-20">Vi Temp2</h1>
            <p className="text-2xl mt-3 opacity-90">INTERIOR DESIGNER</p>
            <p className="mt-8 text-sm leading-relaxed max-w-xs">
              Nhà thiết kế nội thất sáng tạo và giàu tâm huyết, chuyên biến không gian sống và làm việc thành những trải nghiệm độc đáo. Đam mê phối hợp màu sắc, ánh sáng và chất liệu để tạo ra không gian vừa đẹp mắt vừa tiện nghi.
            </p>

            <div className="mt-16">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 inline-block">Liên hệ</h2>
              <div className="mt-6 space-y-4 text-sm">
                <div className="flex items-center gap-4"><i className="fas fa-phone"></i> +84 902 345 678</div>
                <div className="flex items-center gap-4"><i className="fas fa-map-marker-alt"></i> TP. Hồ Chí Minh, Việt Nam</div>
                <div className="flex items-center gap-4"><i className="fab fa-linkedin-in"></i> linkedin.com/in/minhanh</div>
              </div>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 inline-block">Kỹ năng</h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li>• Quy hoạch không gian</li>
                <li>• Lý thuyết màu sắc</li>
                <li>• Thiết kế nội thất</li>
                <li>• Thiết kế ánh sáng</li>
                <li>• Vật liệu & hoàn thiện</li>
              </ul>
            </div>

            <div className="mt-12">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 inline-block">Ngôn ngữ</h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li>Tiếng Việt</li>
                <li>Tiếng Anh</li>
                <li>Tiếng Hàn</li>
              </ul>
            </div>
            <div className="mt-12">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 inline-block">Phần mềm</h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li>• AutoCAD • SketchUp</li>
                <li>• 3ds Max • V-Ray</li>
                <li>• Photoshop • Illustrator</li>
                <li>• Lumion • Revit</li>
              </ul>
            </div>

            <div className="mt-12 pb-20">
              <h2 className="text-xl font-bold uppercase tracking-widest border-b-2 border-white pb-2 inline-block">Sở thích</h2>
              <ul className="mt-6 space-y-3 text-sm">
                <li>Triển lãm thiết kế</li>
                <li>Du lịch trải nghiệm</li>
                <li>Nhiếp ảnh kiến trúc</li>
                <li>Thiền & Yoga</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="lg:col-span-7 bg-white p-10 lg:p-16">

          <h2 className="text-4xl font-bold text-[#6B7B6A] uppercase tracking-wider mb-10">Kinh nghiệm làm việc làm</h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Senior Interior Designer</h3>
              <p className="text-[#6B7B6A] font-medium mt-1">XYZ Design Studio – TP.HCM <span className="text-gray-500">2022 – Hiện tại</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc ml-6 text-sm leading-relaxed">
                <li>Chỉ đạo thiết kế nội thất cho các dự án căn hộ cao cấp, văn phòng, showroom</li>
                <li>Đạt giải “Best Residential Design 2024” từ Hiệp hội Kiến trúc VN</li>
                <li>Quản lý team 5 người, giám sát tiến độ và chất lượng thi công</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Interior Designer</h3>
              <p className="text-[#6B7B6A] font-medium mt-1">ABC Interiors – Hà Nội <span className="text-gray-500">2019 – 2022</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc ml-6 text-sm leading-relaxed">
                <li>Thiết kế & giám sát thi công hơn 40 dự án nhà ở và thương mại</li>
                <li>Tối ưu chi phí vật liệu, lựa chọn nội thất nhập khẩu</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Junior Designer</h3>
              <p className="text-[#6B7B6A] font-medium mt-1">Design Innovations – TP.HCM <span className="text-gray-500">2017 – 2019</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc ml-6 text-sm leading-relaxed">
                <li>Hỗ trợ vẽ bản vẽ kỹ thuật, phối cảnh 3D</li>
                <li>Tham gia từ giai đoạn concept đến hoàn thiện dự án</li>
              </ul>
            </div>

          </div>

          <h2 className="text-4xl font-bold text-[#6B7B6A] uppercase tracking-wider mt-16 mb-10">Học vấn</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Thạc sĩ Thiết kế Nội thất</h3>
              <p className="text-[#6B7B6A] font-medium">Đại học Kiến trúc TP.HCM</p>
              <p className="text-gray-500">2019 – 2021</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Cử nhân Kiến trúc Nội thất</h3>
              <p className="text-[#6B7B6A] font-medium">Đại học Mỹ thuật Công nghiệp</p>
              <p className="text-gray-500">2013 – 2017 | GPA 3.72/4.0</p>
            </div>
          </div>

        </div>
      </div>

      <div className="text-center py-8 bg-white no-print">
        <button onClick={() => window.print()} className="px-12 py-4 bg-[#6B7B6A] hover:bg-[#5a6b5a] text-white font-bold text-lg rounded-full shadow-lg transition">
          In / Tải CV dưới dạng PDF
        </button>
      </div>

    </div>
  )
}

export default React.memo(Template2);
