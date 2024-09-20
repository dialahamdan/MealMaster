import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast, Bounce } from "react-toastify";
import styles from "./Aboutus.module.css";
import Loader from "../Loader/components/Loader";
function Aboutus() {
  const [loader, setLoader] = useState(true);
  useEffect(() => {
    // Simulate loading process
    const timer = setTimeout(() => {
      setLoader(false);
    }, 2000); // Set your desired loading time

    // Cleanup timer on component unmount
    return () => clearTimeout(timer);
  }, []);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    address: "",
    phone: "",
    gender: "Male",
    image: "",
  });
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    setErrors({
      ...errors,
      [name]: "", // Clear the error when user starts typing
    });
  };

  const handelImageChange = (e) => {
    const { name, files } = e.target;
    const imageUrl = URL.createObjectURL(files[0]);
    setFormData({
      ...formData,
      [name]: imageUrl,
    });
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (!formData.password) newErrors.password = "Password is required";
    if (!formData.address) newErrors.address = "Address is required";
    if (!formData.phone) newErrors.phone = "Phone number is required";
    if (!formData.image) newErrors.image = "Image is required";

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0; // Return true if no errors
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      toast.error("Please fill all the required fields", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
      return;
    }

    try {
      // Save formData to local storage
      localStorage.setItem("jobApplicationData", JSON.stringify(formData));

      toast.success("Form Submitted Successfully", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });

      navigate("/Profile", { state: { submittedData: formData } });
    } catch (error) {
      toast.error("Submission Failed", {
        position: "top-right",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        theme: "dark",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="VideosV">
      {loader ? (
        <Loader />
      ) : (
        <>
          <div className={styles.TotalAboutUs}>
            <div className={styles.Section1}>
              <iframe
                src="https://sanadalrabayaa11.github.io/Section-1/"
                style={{ width: "100%", height: "80vh", border: "none" }}
                title="Project Embed"
              />
            </div>
            <div className={styles.Section1}>
              <iframe
                src="https://dialahamdan.github.io/Dialas-Profile/"
                style={{ width: "100%", height: "80vh", border: "none" }}
                title="Project Embed"
              />
            </div>

            <div className={styles.Section1}>
              <iframe
                src="https://sanadalrabayaa11.github.io/Section-2/"
                style={{ width: "100%", height: "80vh", border: "none" }}
                title="Project Embed"
              />
            </div>

            <div className={styles.containerJ}>
              <div className={styles.jobApp}>
                <div className={`${styles.form} p-4`}>
                  <form onSubmit={handleSubmit}>
                    <div className={styles.input}>
                      <label
                        htmlFor="name"
                        className={`${styles.jobLabel} form-label`}
                      >
                        Name
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="name"
                        name="name"
                        placeholder="name"
                        value={formData.name}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="email" className="form-label">
                        Email{" "}
                      </label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        name="email"
                        placeholder="name@example.com"
                        value={formData.email}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="password" className="form-label">
                        Password
                      </label>
                      <input
                        type="password"
                        className="form-control"
                        id="password"
                        name="password"
                        placeholder="********"
                        value={formData.password}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="address" className="form-label">
                        Address
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="address"
                        name="address"
                        placeholder="address"
                        value={formData.address}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="phone" className="form-label">
                        Phone
                      </label>
                      <input
                        type="text"
                        className="form-control"
                        id="phone"
                        name="phone"
                        placeholder="+9627*******"
                        value={formData.phone}
                        onChange={handleChange}
                      />
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="gender" className="form-label mb-3">
                        Gender
                      </label>
                      <div className={styles.genderContainer}>
                        <input
                          type="radio"
                          id="genderm"
                          name="gender"
                          value="Male"
                          onChange={handleChange}
                          checked={formData.gender === "Male"}
                        />
                        <label htmlFor="genderm">Male</label>

                        <input
                          type="radio"
                          id="genderf"
                          name="gender"
                          value="Female"
                          onChange={handleChange}
                          checked={formData.gender === "Female"}
                        />
                        <label htmlFor="genderf">Female</label>
                      </div>
                    </div>

                    <div className={styles.input}>
                      <label htmlFor="image" className="form-label">
                        Image
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        id="image"
                        name="image"
                        onChange={handelImageChange}
                      />
                    </div>

                    <div className="text-center">
                      <button type="submit" className={styles.btnCustom}>
                        Submit
                      </button>
                    </div>
                  </form>
                </div>

                <div
                  className={`${styles.rightSide} d-flex align-items-center ms-4`}
                >
                  <div className={styles.rightSideInfo}>
                    <div className={styles.profileImg}>
                      <img src="Images/Aboutus/Job.png" />{" "}
                    </div>
                    <h2>Apply For A Job</h2>
                    <p>Join us and be a part of our family!</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
}

export default Aboutus;
