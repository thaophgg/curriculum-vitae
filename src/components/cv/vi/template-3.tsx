import React from 'react'

const Template3 = () => {
  return (

    <div className="max-w-6xl mx-auto bg-white shadow-2xl overflow-hidden">

      <div className="flex flex-col lg:flex-row">

        <div className="w-full lg:w-5/12 bg-green-800 text-white relative">
          <img src="https://via.placeholder.com/600x900" alt="Ảnh đại diện"
            className="w-full h-full object-cover absolute inset-0 mix-blend-multiply opacity-90" />

          <div className="relative z-10 p-12 pt-32">

            <h1 className="text-5xl font-bold leading-tight">Vi Temp3</h1>
            <p className="text-2xl mt-4 opacity-90">INTERIOR DESIGNER</p>

            <p className="mt-10 text-sm leading-relaxed opacity-95">
              Nhà thiết kế nội thất sáng tạo và giàu tâm huyết, chuyên biến không gian sống và làm việc thành những trải nghiệm độc đáo. Đam mê phối hợp màu sắc, ánh sáng và chất liệu để tạo ra không gian vừa đẹp mắt vừa tiện nghi.
            </p>

            <div className="mt-12">
              <h2 className="text-xl font-bold mb-6 border-b border-green-600 pb-2 inline-block">LIÊN HỆ</h2>
              <div className="space-y-4 text-sm">
                <div className="flex items-center gap-3"><i className="fas fa-phone"></i> +84 902 345 678</div>
                <div className="flex items-center gap-3"><i className="fas fa-envelope"></i> minhanh.nguyen@gmail.com</div>
                <div className="flex items-center gap-3"><i className="fab fa-linkedin-in"></i> linkedin.com/in/minhanh-nguyen</div>
                <div className="flex items-center gap-3"><i className="fas fa-map-marker-alt"></i> Quận 3, TP.HCM</div>
              </div>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6 border-b border-green-600 pb-2 inline-block">KỸ NĂNG</h2>
              <ul className="space-y-3 text-sm">
                <li>Thiết kế không gian (Space Planning)</li>
                <li>Lý thuyết màu sắc & ánh sáng</li>
                <li>Thiết kế nội thất dân dụng & thương mại</li>
                <li>Vẽ kỹ thuật & 3D Rendering</li>
                <li>Quản lý dự án nội thất</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6 border-b border-green-600 pb-2 inline-block">PHẦN MỀM</h2>
              <ul className="space-y-3 text-sm">
                <li>AutoCAD  SketchUp</li>
                <li>3ds Max + V-Ray  Lumion</li>
                <li>Adobe Photoshop  Illustrator</li>
                <li>Revit (cơ bản)</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6 border-b border-green-600 pb-2 inline-block">NGÔN NGỮ</h2>
              <ul className="space-y-3 text-sm">
                <li>Tiếng Việt – Bản ngữ</li>
                <li>Tiếng Anh – Thành thạo (IELTS 7.0)</li>
                <li>Tiếng Hàn – Giao tiếp</li>
              </ul>
            </div>

            <div className="mt-10">
              <h2 className="text-xl font-bold mb-6 border-b border-green-600 pb-2 inline-block">SỞ THÍCH</h2>
              <ul className="space-y-3 text-sm">
                <li>Du lịch trải nghiệm</li>
                <li>Nhiếp ảnh kiến trúc</li>
                <li>Thiền  Yoga</li>
                <li>Tham gia triển lãm thiết kế</li>
              </ul>
            </div>

          </div>
        </div>

        <div className="w-full lg:w-7/12 bg-white p-12 lg:p-16">

          <h2 className="text-4xl font-bold text-green-800 mb-10">KINH NGHIỆM LÀM VIỆC</h2>

          <div className="space-y-10">

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Senior Interior Designer</h3>
              <p className="text-green-700 font-medium text-lg">Studio XYZ Design – TP.HCM <span className="text-gray-500">2022 – Nay</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-sm leading-relaxed">
                <li>Chỉ đạo thiết kế nội thất cho 12 dự án căn hộ cao cấp và văn phòng hạng A</li>
                <li>Đạt giải “Best Residential Design 2024” từ Hiệp hội Kiến trúc Việt Nam</li>
                <li>Quản lý đội ngũ 5 designer junior, đào tạo và phân công công việc</li>
                <li>Làm việc trực tiếp với chủ đầu tư và nhà thầu để đảm bảo tiến độ & chất lượng</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Interior Designer</h3>
              <p className="text-green-700 font-medium text-lg">ABC Interiors – Hà Nội <span className="text-gray-500">2019 – 2022</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-sm leading-relaxed">
                <li>Thiết kế & thi công hơn 30 dự án nhà phố, biệt thự, showroom</li>
                <li>Tối ưu chi phí vật liệu mà vẫn đảm bảo thẩm mỹ cao cấp</li>
                <li>Phối hợp với nhà cung cấp để lựa chọn nội thất nhập khẩu</li>
              </ul>
            </div>

            <div>
              <h3 className="text-2xl font-bold text-gray-900">Junior Designer</h3>
              <p className="text-green-700 font-medium text-lg">Design Innovations – TP.HCM <span className="text-gray-500">2017 – 2019</span></p>
              <ul className="mt-4 space-y-2 text-gray-700 list-disc list-inside text-sm leading-relaxed">
                <li>Hỗ trợ vẽ 3D, phối cảnh, bản vẽ thi công</li>
                <li>Tham gia hơn 20 dự án từ concept đến hoàn thiện</li>
              </ul>
            </div>

          </div>

          <h2 className="text-4xl font-bold text-green-800 mt-16 mb-10">HỌC VẤN</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Thạc sĩ Thiết kế Nội thất</h3>
              <p className="text-green-700 font-medium text-lg">Đại học Kiến trúc TP.HCM</p>
              <p className="text-gray-500">2019 – 2021</p>
            </div>
            <div>
              <h3 className="text-2xl font-bold text-gray-900">Cử nhân Kiến trúc Nội thất</h3>
              <p className="text-green-700 font-medium text-lg">Đại học Mỹ thuật Công nghiệp</p>
              <p className="text-gray-500">2013 – 2017 | GPA 3.72/4.0</p>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-green-800 mt-16 mb-10">CHỨNG CHỈ</h2>
          <ul className="list-disc list-inside text-gray-700">
            <li>Chứng chỉ V-Ray Advanced Rendering</li>
            <li>Chứng chỉ Quản lý Dự án Nội thất – PMI</li>
          </ul>

        </div>
      </div>

      <div className="text-center py-8 bg-white no-print">
        <button onClick={() => window.print()} className="px-12 py-4 bg-green-800 hover:bg-green-900 text-white font-bold text-lg rounded-full shadow-lg transition">
          In / Tải CV dưới dạng PDF
        </button>
      </div>

    </div>
  )
}

export default React.memo(Template3);
