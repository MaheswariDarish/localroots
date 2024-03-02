// Create.js
import  { useState } from 'react';
import './Create.css'; // Import your CSS file
import createimg from "../assets/abc.jpg"

const Create = () => {
  const [formData, setFormData] = useState({
    img_url: '',
    min_price: '',
    productName: '',
    description: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="create-main">
      <div className="lcontainer">
        <img src={createimg} alt="no img" />
      </div>
      <div className="rcontainer">
        <div className="text">SELL A PRODUCT</div>
        <form action="#">
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="img_url"
                value={formData.img_url}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="">Image</label>
            </div>
            <div className="input-data">
              <input
                type="text"
                name="min_price"
                value={formData.min_price}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="">Minimum Price</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data">
              <input
                type="text"
                name="productName"
                value={formData.productName}
                onChange={handleChange}
                required
              />
              <div className="underline"></div>
              <label htmlFor="">Product Name</label>
            </div>
          </div>
          <div className="form-row">
            <div className="input-data textarea">
              <textarea
                rows="4" // Set number of rows
                name="description"
                value={formData.description}
                onChange={handleChange}
                placeholder=""
                required
              ></textarea>
              <br />
              <div className="underline"></div>
              <label htmlFor="">Description</label>
              <br />
              <div className="form-row submit-btn">
                <div className="input-data">
                  <div className="inner"></div>
                  <input type="submit" value="submit" className='sub-btn' onClick={handleSubmit} />
                </div>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Create;
