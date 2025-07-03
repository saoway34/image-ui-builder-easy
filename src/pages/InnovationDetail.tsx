
import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ArrowLeft, Download } from 'lucide-react';
import Header from '../components/Header';

const InnovationDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const innovation = {
    id: 1,
    title: "เครื่องสาวไหมพลังงานแสงอาทิตย์",
    image: "/lovable-uploads/254643a8-8694-49fe-99ad-789d53a6df48.png",
    category: "นวัตกรรม",
    description: "เครื่องสาวไหมพลังงานแสงอาทิตย์สามารถสาวไหมได้บริมาณที่จำเป็นโดยมิแบ่งปัจจัยแห่งปริมาณและคุณภาพการสาวได้ครั้งคึ้นลำป่วซับ ก็ได้ใด้เท่าใดเหมือนการหดขยายผิงของแข็นและเป็นความเรียวร้อยเพื่อให้ใหม่เคย่สมกับให้มีอากาศพัสสว่นิ้งขืดเพื่อการน์่องครู่อดอยนิ้อยขะ โต่ย สามารถสาวไหมเป็นหิดแสงจากหลายลาย พันธุ์ ได้โท่ บริไอวจ้อย พันธู่ตีต่องอูปกูปร์ (บันดิ์ ด่วกรึ่องค์เลือดไข่ได็ดเอองชิ ดินค์นิดดอแลังคืกได์จากแสงใส่นำดารแสลวารในปรากฎปรุ ละฎสเป็นเพิ่ปฟ้วจารใน้ใน่ากาพหนไชตย งื่ไฟเอลก่กลุ ขึ้โนโก ค็ามารจสาวไดเฮาผิง้วิน ซ่ีมบรี.",
    specifications: "ขนาดของรอง ด้วจาง์นิไลโลนฟั่งจานวิจาร์น",
    link: "ดาวน์โหลดไฟล์งานวิจัย"
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="container mx-auto px-4 py-8">
        <button
          onClick={() => navigate('/')}
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-800 mb-6"
        >
          <ArrowLeft size={20} />
          <span>กลับสู่หน้าหลัก</span>
        </button>

        <div className="bg-white rounded-lg shadow-lg overflow-hidden">
          <div className="bg-red-600 text-white p-4">
            <h1 className="text-2xl font-bold">{innovation.title}</h1>
          </div>

          <div className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <img
                  src={innovation.image}
                  alt={innovation.title}
                  className="w-full h-64 object-cover rounded-lg shadow-md"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = '/placeholder.svg';
                  }}
                />
              </div>

              <div className="space-y-4">
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">ข้อมูลนวัตกรรม</h3>
                  <p className="text-sm text-blue-600 mb-2">{innovation.category}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">บทคัดย่อ</h4>
                  <p className="text-gray-700 text-sm leading-relaxed">{innovation.description}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ข้องเว็ยวิจัย</h4>
                  <p className="text-gray-700 text-sm">{innovation.specifications}</p>
                </div>

                <div>
                  <h4 className="font-semibold text-gray-800 mb-2">ไฟล์งานวิจัย</h4>
                  <a
                    href="#"
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800 text-sm"
                  >
                    <Download size={16} />
                    <span>{innovation.link}</span>
                  </a>
                </div>

                <button className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg hover:bg-blue-700 transition-colors mt-6">
                  กลับสู่หน้าหลัก
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <footer className="bg-white border-t mt-8 py-4">
        <div className="text-center text-sm text-gray-600">
          <p>คณะเทคโนโลยีอุตสาหกรรม มหาวิทยาลัยเทคโนโลยีราชมงคลธวส</p>
          <p>321 ถนนกายดินดินราชง ต.ทะเลสบครบ อ.เมือง จ.สพบุรี 15000 โทรศัพท์ 036-422125 FAX. 036-422125</p>
        </div>
      </footer>
    </div>
  );
};

export default InnovationDetail;
