import { useState } from "react";
import axios from "axios";
import { object, string } from "yup";
import { Bounce, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import style from "./ForgetPass.module.css";

function ForgetPass() {
  const [email, setEmail] = useState("");
  // eslint-disable-next-line no-unused-vars
  const [message, setMessage] = useState("");
  const [loader, setLoader] = useState(false);
  const [errors, setErrors] = useState([]);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setEmail(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoader(true);

    try {
      const logSchema = object({
        email: string().email().required(),
      });

      await logSchema.validate({ email }, { abortEarly: false });

      const { data } = await axios.patch(
        `${import.meta.env.VITE_API}/auth/sendcode`,
        { email }
      );
      setMessage(data.message);
      toast.success("Check Your Email For The Reset Code", {
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
      navigate("/ForgetPassword");
    } catch (err) {
      setErrors(err.errors);
      //setMessage('Error sending reset password email. Please try again.');
      toast.error("Please enter a valid email address.", {
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
  };

  return (
    <>
      <div className={style.SignBody}>
        <div className={style.wrapper}>
          <form className={style.form} onSubmit={handleSubmit}>
            <h2 className={`${style.label} ${style.title}`}>
              Forget Password{" "}
            </h2>
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

            <div className={style.sendCodeMargin}>
              <div className={style.inputBox}>
                <input
                  type="email"
                  value={email}
                  name="email"
                  placeholder="Enter Your Email"
                  onChange={handleChange}
                />
                <div className={style.codeIcon}>
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
              </div>

              <button
                className={style.btn}
                disabled={loader ? "disabled" : null}
                type="submit"
              >
                {!loader ? "Verify" : "wait..."}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default ForgetPass;
