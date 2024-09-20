/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useContext, useState } from "react";
import { object, string } from "yup";
import { Bounce, toast } from "react-toastify";
import { Link, useNavigate } from "react-router-dom";
import { UserContext } from "../../../context/User";
import style from "./Login.module.css";

function Login() {
  const { setUserToken } = useContext(UserContext);
  const navigate = useNavigate();
  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const [errors, setErrors] = useState([]);
  const [loader, setLoader] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUser({
      ...user,
      [name]: value,
    });
  };

  const validateData = async () => {
    const LoginSchema = object({
      email: string().email().required(),
      password: string().min(8).max(20).required(),
    });
    try {
      await LoginSchema.validate(user, { abortEarly: false });
      return true;
    } catch (error) {
      setErrors(error.errors);
      setLoader(false);
      return false;
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);
    if (await validateData()) {
      try {
        const { data } = await axios.post(
          `${import.meta.env.VITE_API}/auth/signin`,
          {
            email: user.email,
            password: user.password,
          }
        );

        if (data.message === "success") {
          toast.success("Signin successfully", {
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
          localStorage.setItem("userToken", data.token);
          setUserToken(data.token);
          navigate("/");
        }
      } catch (error) {
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
      } finally {
        setLoader(false);
      }
    }
  };

  return (
    <>
      <div className={style.SignBody}>
        <div className={style.wrapper}>
          <form className={style.form} onSubmit={handleSubmit}>
            <h2 className={`${style.label} ${style.title}`}> Login </h2>
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
                type="email"
                placeholder="email"
                value={user.email}
                name="email"
                onChange={handleChange}
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
                onChange={handleChange}
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

            <div className={style.rememberForget}>
              <label>
                <input type="checkbox" />
                Remember me
              </label>
              <Link to="/sendcode" className={style.FLink}>
                {" "}
                Forget Password?
              </Link>
            </div>

            <button
              className={style.btn}
              disabled={loader ? true : false}
              type="submit"
            >
              {!loader ? "sign in" : "wait..."}
            </button>
            <div className={style.registerLink}>
              <p>
                Don't have a account?{" "}
                <Link to="/Signup" className={style.Link}>
                  Register
                </Link>
              </p>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
