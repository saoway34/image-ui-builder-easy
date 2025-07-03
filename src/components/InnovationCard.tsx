
import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface Innovation {
  id: number;
  title: string;
  image: string;
  description: string;
  category: string;
}

interface InnovationCardProps {
  innovation: Innovation;
}

const InnovationCard = ({ innovation }: InnovationCardProps) => {
  const navigate = useNavigate();

  const handleViewDetails = () => {
    navigate(`/innovation/${innovation.id}`);
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden border">
      <div className="relative">
        <img
          src={innovation.image}
          alt={innovation.title}
          className="w-full h-48 object-cover"
          onError={(e) => {
            const target = e.target as HTMLImageElement;
            target.src = '/placeholder.svg';
          }}
        />
        <div className="absolute top-2 left-2 bg-red-600 text-white px-2 py-1 rounded text-xs">
          {innovation.category}
        </div>
      </div>
      <div className="p-4">
        <h3 className="font-bold text-lg mb-2 text-gray-800">{innovation.title}</h3>
        <p className="text-gray-600 text-sm mb-4 line-clamp-3">{innovation.description}</p>
        <button
          onClick={handleViewDetails}
          className="w-full bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700 transition-colors"
        >
          ดูรายละเอียด
        </button>
      </div>
      <div className="flex justify-center items-center space-x-2 p-2 border-t bg-gray-50">
        <button className="p-1 hover:bg-gray-200 rounded">
          <ChevronLeft size={16} />
        </button>
        <span className="text-sm">1</span>
        <button className="p-1 hover:bg-gray-200 rounded">
          <ChevronRight size={16} />
        </button>
      </div>
    </div>
  );
};

export default InnovationCard;
