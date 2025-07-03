
import React from 'react';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import InnovationCard from '../components/InnovationCard';
import LoginForm from '../components/LoginForm';

const Index = () => {
  const innovations = [
    {
      id: 1,
      title: "เครื่องสาวไหมพลังงานแสงอาทิตย์",
      image: "/lovable-uploads/e7526932-b3dc-42dd-b7ce-8389581b96f5.png",
      description: "เครื่องสาวไหมพลังงานแสงอาทิตย์สามารถสาวไหมได้บริมาณสิ่งไหมที่จึงแป็นโดยเฉลี่ย 116.20 กรัม/ชั่วโมง",
      category: "นวัตกรรม"
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {innovations.map((innovation) => (
                  <InnovationCard key={innovation.id} innovation={innovation} />
                ))}
              </div>
            </div>
            <div className="lg:col-span-1">
              <LoginForm />
            </div>
          </div>
        </main>
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

export default Index;
