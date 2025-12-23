import React from 'react'

const Template1 = () => {
  return (
    <div className="max-w-5xl mx-auto bg-white shadow-2xl overflow-hidden my-8">

      <header className="relative bg-white overflow-hidden">
        <div className="absolute -top-32 -left-32 w-96 h-96 bg-red-600 rounded-full"></div>
        <div className="relative flex flex-col md:flex-row items-center justify-between px-12 pt-24 pb-16">
          <div className="mt-8 md:mt-0 text-center md:text-left max-w-lg">
            <h1 className="text-6xl font-black leading-none">En Temp1 test ci</h1>
            <p className="text-3xl text-red-600 font-light mt-4">ULTRICIES TURPIS AC PROIN ULLAMCORPER</p>
            <p className="mt-8 text-gray-700 text-sm leading-relaxed">
              Arcu magnis conubia mattis nunc eros dapibus erat leo maximus urna cras montes
               </p>
          </div>
        </div>
      </header>

      <div className="flex flex-col md:flex-row">

        <aside className="w-full md:w-96 bg-white px-12 py-16 space-y-14">

          <div>
            <h2 className="text-2xl font-bold text-red-600 tracking-wider mb-8">THÔNG TIN LIÊN HỆ</h2>
            <div className="space-y-5 text-gray-800">
              <div className="flex items-center gap-4"><i className="fas fa-phone text-red-600 w-6"></i> 0903 123 456</div>
              <div className="flex items-center gap-4"><i className="fas fa-envelope text-red-600 w-6"></i> lananh.nguyen@gmail.com</div>
              <div className="flex items-center gap-4"><i className="fab fa-linkedin-in text-red-600 w-6"></i> linkedin.com/in/lananhnguyen</div>
              <div className="flex items-center gap-4"><i className="fas fa-map-marker-alt text-red-600 w-6"></i> Quận 1, TP. Hồ Chí Minh</div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 tracking-wider mb-8">KỸ NĂNG</h2>
            <div className="space-y-5">
              <div><div className="text-sm font-medium">Đàm phán B2B</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[92%]"></div></div></div>
              <div><div className="text-sm font-medium">Tìm kiếm khách hàng tiềm năng</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[88%]"></div></div></div>
              <div><div className="text-sm font-medium">Nghiên cứu thị trường</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[85%]"></div></div></div>
              <div><div className="text-sm font-medium">Chăm sóc khách hàng lâu năm</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[95%]"></div></div></div>
              <div><div className="text-sm font-medium">Quản trị CRM (Salesforce, HubSpot)</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[80%]"></div></div></div>
              <div><div className="text-sm font-medium">Kỹ năng thuyết trình & đàm phán</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-[90%]"></div></div></div>
              <div><div className="text-sm font-medium">Microsoft Office & Google Workspace</div><div className="w-full bg-gray-200 h-2 rounded-full mt-1"><div className="bg-red-600 h-2 rounded-full w-full"></div></div></div>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold text-red-600 tracking-wider mb-8">NGÔN NGỮ</h2>
            <div className="space-y-5 text-gray-800">
              <div className="flex items-center gap-4"><i className="fas fa-globe text-red-600"></i> Tiếng Việt – Ngôn ngữ mẹ đẻ</div>
              <div className="flex items-center gap-4"><i className="fas fa-globe text-red-600"></i> Tiếng Anh – Thành thạo (IELTS 7.5)</div>
              <div className="flex items-center gap-4"><i className="fas fa-globe text-red-600"></i> Tiếng Pháp – Giao tiếp khá (B1)</div>
            </div>
          </div>

        </aside>

        <main className="flex-1 bg-gray-50 px-16 py-16">

          <section className="mb-20">
            <h2 className="text-4xl font-black text-gray-900 pb-2 border-b-8 border-red-600 inline-block mb-12">
              KINH NGHIỆM LÀM VIỆC
            </h2>

            <div className="space-y-12">

              <div className="relative pl-10 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold">Treatwell Vietnam</h3>
                <p className="text-red-600 font-semibold text-lg">Chuyên viên Phát triển Kinh doanh</p>
                <p className="text-gray-600 font-medium mb-3">06/2022 – Nay</p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm leading-relaxed">
                  <li>Xây dựng quan hệ đối tác với các salon, spa, thẩm mỹ viện trên toàn quốc</li>
                  <li>Phát triển và quản lý danh mục khách hàng doanh nghiệp, đạt 150% chỉ tiêu doanh thu 2023</li>
                  <li>Tối ưu hóa khu vực tiềm năng, mở rộng thị phần tại 5 tỉnh thành mới</li>
                  <li>Quản lý khách hàng trên Salesforce, tỷ lệ gia hạn hợp đồng 92%</li>
                </ul>
              </div>

              <div className="relative pl-10 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold">My Travel Mate</h3>
                <p className="text-red-600 font-semibold text-lg">Business Developer</p>
                <p className="text-gray-600 font-medium mb-3">03/2020 – 05/2022</p>
                <ul className="list-disc ml-5 space-y-1 text-gray-700 text-sm leading-relaxed">
                  <li>Phát triển doanh thu từ hệ thống khách sạn 3-5 sao, tăng 35% giá trị hợp đồng trung bình</li>
                  <li>Tìm kiếm và chốt lịch hẹn với 200 khách hàng tiềm năng mỗi quý</li>
                  <li>Đánh giá và tối ưu khách hàng hoạt động yếu, cải thiện 25% hiệu suất</li>
                  <li>Tổ chức sự kiện khách hàng định kỳ và chia sẻ best practice bán hàng</li>
                </ul>
              </div>

              <div className="relative pl-10 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold">Tập đoàn Deveaux – Chi nhánh Việt Nam</h3>
                <p className="text-red-600 font-semibold text-lg">Trợ lý Kinh doanh Xuất nhập khẩu</p>
                <p className="text-gray-600 font-medium mb-3">07/2018 – 02/2020</p>
                <p className="text-gray-700 text-sm ml-5 leading-relaxed">
                  Theo dõi đơn hàng vải may mặc từ Tây Ban Nha về Việt Nam: gửi mẫu, chốt đơn, phối hợp giao nhận và hỗ trợ đội ngũ kinh doanh khu vực.
                </p>
              </div>

            </div>
          </section>

          <section>
            <h2 className="text-4xl font-black text-gray-900 pb-2 border-b-8 border-red-600 inline-block">
              HỌC VẤN
            </h2>

            <div className="mt-12 space-y-10">
              <div className="relative pl-10 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold">Đại học Ngoại thương TP.HCM (FTU)</h3>
                <p className="text-red-600 font-semibold text-lg">Cử nhân Kinh doanh Quốc tế – Chuyên ngành Tiếng Pháp</p>
                <p className="text-gray-600">2014 – 2018 | GPA 3.64/4.0</p>
              </div>

              <div className="relative pl-10 border-l-4 border-red-600">
                <h3 className="text-2xl font-bold">Đại học Tổng hợp Stockholm (Trao đổi)</h3>
                <p className="text-red-600 font-semibold text-lg">Thiết kế Thương hiệu & Nhận diện</p>
                <p className="text-gray-600">2016 (1 học kỳ)</p>
              </div>
            </div>
          </section>

        </main>
      </div>

      <div className="text-center py-10 bg-white no-print">
        <button onClick={() => window.print()} className="px-12 py-4 bg-red-600 hover:bg-red-700 text-white font-bold text-lg rounded-full shadow-lg transition">
          In / Tải CV dưới dạng PDF
        </button>
      </div>

    </div>
  )
}

export default React.memo(Template1);