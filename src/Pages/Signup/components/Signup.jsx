import axios from "axios";
import { useState } from "react";
import { object, string } from "yup";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "./Signup.module.css";

function Signup() {
  const navigate = useNavigate();
  const [user, setUser] = useState({
    userName: "",
    email: "",
    password: "",
    image: "",
  });

  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);

  const handelChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const handelImageChange = (e) => {
    const { name, files } = e.target;
    setUser({
      ...user,
      [name]: files[0],
    });
  };
  const validateData = async () => {
    const RegisterSchema = object({
      userName: string().min(5).max(20).required(),
      email: string().email().required(),
      password: string().min(8).max(20).required(),
      image: string().required(),
    });
    try {
      await RegisterSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      //console.log("validation error", error.errors);
      setErrors(error.errors);
      setLoader(false);
      return false;
    }
  };
  const handelSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (await validateData()) {
      const formData = new FormData();
      formData.append("userName", user.userName);
      formData.append("email", user.email);
      formData.append("password", user.password);
      formData.append("image", user.image);
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API}/auth/signup`,
          formData
        );
        if (data.message == "success") {
          toast.success("Account Created Successfully", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
          navigate("/Login");
        }
      } catch (error) {
        if (error.response.status === 409) {
          toast.error(error.response.data.message, {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            transition: Bounce,
          });
        }
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <>
      <div className={style.SignBody}>
        <div className={style.wrapper}>
          <form className={style.form} onSubmit={handelSubmit}>
            <h2 className={`${style.label} ${style.title}`}>Sign Up </h2>
            {errors.length > 0
              ? errors.map((error, index) => (
                  <p key={index} className={style.errorMessage}>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="16"
                      height="16"
                      fill="currentColor"
                      className="bi bi-patch-exclamation-fill"
                      viewBox="0 0 16 16"
                    >
                      <path d="M10.067.87a2.89 2.89 0 0 0-4.134 0l-.622.638-.89-.011a2.89 2.89 0 0 0-2.924 2.924l.01.89-.636.622a2.89 2.89 0 0 0 0 4.134l.637.622-.011.89a2.89 2.89 0 0 0 2.924 2.924l.89-.01.622.636a2.89 2.89 0 0 0 4.134 0l.622-.637.89.011a2.89 2.89 0 0 0 2.924-2.924l-.01-.89.636-.622a2.89 2.89 0 0 0 0-4.134l-.637-.622.011-.89a2.89 2.89 0 0 0-2.924-2.924l-.89.01zM8 4c.535 0 .954.462.9.995l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995A.905.905 0 0 1 8 4m.002 6a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
                    </svg>
                    {error}
                  </p>
                ))
              : ""}
            <div className={style.inputBox}>
              <input
                type="text"
                placeholder="username"
                value={user.userName}
                name="userName"
                onChange={handelChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
              >
                <path d="M7.5 6.5C7.5 8.981 9.519 11 12 11s4.5-2.019 4.5-4.5S14.481 2 12 2 7.5 4.019 7.5 6.5zM20 21h1v-1c0-3.859-3.141-7-7-7h-4c-3.86 0-7 3.141-7 7v1h17z" />
              </svg>
            </div>

            <div className={style.inputBox}>
              <input
                type="email"
                placeholder="email"
                value={user.email}
                name="email"
                onChange={handelChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
              >
                <path d="M20 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V6a2 2 0 0 0-2-2zm0 4.7-8 5.334L4 8.7V6.297l8 5.333 8-5.333V8.7z" />
              </svg>
            </div>

            <div className={style.inputBox}>
              <input
                type="password"
                placeholder="password"
                value={user.password}
                name="password"
                onChange={handelChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
              >
                <path d="M20 12c0-1.103-.897-2-2-2h-1V7c0-2.757-2.243-5-5-5S7 4.243 7 7v3H6c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h12c1.103 0 2-.897 2-2v-8zM9 7c0-1.654 1.346-3 3-3s3 1.346 3 3v3H9V7z" />
              </svg>
            </div>

            <div className={style.inputBox}>
              <input
                type="file"
                className={style.imag}
                name="image"
                onChange={handelImageChange}
              />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={24}
                height={24}
                viewBox="0 0 24 24"
                style={{ fill: "#fff", transform: "", msfilter: "" }}
              >
                <path d="M19.999 4h-16c-1.103 0-2 .897-2 2v12c0 1.103.897 2 2 2h16c1.103 0 2-.897 2-2V6c0-1.103-.897-2-2-2zm-13.5 3a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3zm5.5 10h-7l4-5 1.5 2 3-4 5.5 7h-7z" />
              </svg>
            </div>

            <button
              className={style.btn}
              disabled={loader ? "disabled" : null}
              type="submit"
            >
              {!loader ? "sign up" : "wait..."}
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Signup;
