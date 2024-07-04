import React, { useState } from 'react';
import ImageGallery from './components/ImageGallery';
import ImageModal from './components/ImageModal';
import './App.css';

const App = () => {
  const images = [
    'https://images.pexels.com/photos/39803/pexels-photo-39803.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260',
    'https://images.pexels.com/photos/161559/background-bitter-breakfast-bright-161559.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1313267/pexels-photo-1313267.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/1395958/pexels-photo-1395958.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
    'https://images.pexels.com/photos/3904800/pexels-photo-3904800.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load',
    'https://images.pexels.com/photos/557659/pexels-photo-557659.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/109274/pexels-photo-109274.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/566888/pexels-photo-566888.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/65256/pomegranate-open-cores-fruit-fruit-logistica-65256.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/947879/pexels-photo-947879.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1343537/pexels-photo-1343537.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/60021/grapes-wine-fruit-vines-60021.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1437598/pexels-photo-1437598.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/1093038/pexels-photo-1093038.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=600',
    'https://th.bing.com/th/id/OIP.3mx-TJ2ReuT7Dn2zBQ1-JgAAAA?rs=1&pid=ImgDetMain',
    'https://cdn11.bigcommerce.com/s-nkmosmoif8/products/1616/images/989/Muskmelon_Charentais_Cucumis_Melo_L._Heirloom_Seeds__73632.1540625306.500.750.jpg?c=2',
    'https://www.healthifyme.com/blog/wp-content/uploads/2020/03/star-fruit-cover-1.jpg',
    'https://th.bing.com/th/id/OIP.HUYGisCdKWVVwTA5_NrG4QHaFA?rs=1&pid=ImgDetMain',
    'https://i.insider.com/645da33b65275b0018b819b6?width=700',
    'https://th.bing.com/th/id/OIP.Q0tgvTpObMgoxiaLJlgCOwHaF4?rs=1&pid=ImgDetMain',
    'https://geographyhost.com/wp-content/uploads/2021/11/sugarcane-g20fded334_640.jpg',
    'https://kellogggarden.com/wp-content/uploads/2020/05/peaches-on-a-branch.jpg',
    'https://www.tasteofhome.com/wp-content/uploads/2020/10/green-pears-with-leaves-1084768780.jpg',
  ];

  const [selectedImageIndex, setSelectedImageIndex] = useState(null);

  const openModal = (index) => {
    setSelectedImageIndex(index);
  };

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const showPrevImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex > 0 ? prevIndex - 1 : images.length - 1
    );
  };

  const showNextImage = () => {
    setSelectedImageIndex((prevIndex) =>
      prevIndex < images.length - 1 ? prevIndex + 1 : 0
    );
  };

  return (
    <div className="App">
      <ImageGallery images={images} onImageClick={openModal} />
      {selectedImageIndex !== null && (
        <ImageModal
          src={images[selectedImageIndex]}
          onClose={closeModal}
          onPrev={showPrevImage}
          onNext={showNextImage}
        />
      )}
    </div>
  );
};
export default App;