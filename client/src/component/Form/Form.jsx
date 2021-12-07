import React,{useState,useEffect} from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useAlert } from "react-alert";
import { registerCarData, clearErrors } from "../../actions/carDataActions";

const Form = () => {
    const dispatch = useDispatch();
  const alert = useAlert();
  const dataCarSelector = useSelector(
    (state) => state.carData
  );

  const [carData, setCarData] = useState({
    name: "",
    emailAddress: "",
    model: "",
    color: "",
    numberPlate: "",
  });

  const clear = () => {
   
    setCarData({
      name: "",
    emailAddress: "",
    model: "",
    color: "",
    numberPlate: "",
    });
  };

  const registerSubmit = (e) => {
    e.preventDefault();
    dispatch(registerCarData(carData));
    clear()
    
  };

  useEffect(() => {
    if (dataCarSelector.error) {
      alert.error(dataCarSelector.error);
      dispatch(clearErrors());
    }
    if (dataCarSelector.success) {
      alert.success("Submitted Successfully");
  
        setCarData(registerCarData)
    }
  }, [dispatch, dataCarSelector.error, alert,dataCarSelector]);
    
    return (
        <>
            <div className="container">
                <div className="row">
                    <h1 className="mt-5 text-center">Car Data</h1>
                    <form
                className="needs-validation"
                noValidate
                encType="multipart/form-data"
                  onSubmit={registerSubmit}
               
              >
                <div className="row g-3">
                  <div className="col-sm-6">
                    <label htmlFor="firstName" className="form-label">
                      Full Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="firstName"
                      placeholder="Enter Full Name"
                      
                      required
                      name="name"
                    value={carData.name}
                      onChange={(e) => setCarData({ ...carData, name: e.target.value })}
                    />
                    <div className="invalid-feedback">
                      Name is required.
                    </div>
                  </div>
                  <div className="col-sm-6">
                    <label htmlFor="lastName" className="form-label">
                      Email
                    </label>
                    <input
                      type="email"
                      className="form-control"
                      id="lastName"
                      placeholder
                      required
                      name="emailAddress"
                      value={carData.emailAddress}
                      onChange={(e) => setCarData({ ...carData, emailAddress: e.target.value })}
                    />
                    <div className="invalid-feedback">
                      Please enter a valid email address
                    </div>
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="address" className="form-label">
                      Car Model
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Car Model"
                      required
                      name="model"
                      value={carData.model}
                      onChange={(e) => setCarData({ ...carData, model: e.target.value })}
                    />
                    <div className="invalid-feedback">
                      Please enter the car model
                    </div>
                  </div>

                  
                  <div className="col-md-6">
                    <label htmlFor="state" className="form-label">
                      Color
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Car Color"
                      required
                      name="color"
                      value={carData.color}
                      onChange={(e) => setCarData({ ...carData, color: e.target.value })}
                    />
                     
                  </div>

                  <div className="col-sm-6">
                    <label htmlFor="state" className="form-label">
                      Number Plate
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter Car Number Plate"
                      required
                      name="numberPlate"
                      value={carData.numberPlate}
                      onChange={(e) => setCarData({ ...carData, numberPlate: e.target.value })}
                    />
                
                    <div className="invalid-feedback">
                      Please provide a car number plate.
                    </div>
                  </div>
                
                  
                </div>

                <button className=" btn btn-primary btn-lg mt-5" type="submit">
                 Submit
                </button>

                
              </form>
                </div>
            </div>
        </>
    )
}

export default Form
