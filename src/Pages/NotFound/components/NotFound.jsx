import pagePhto from "./img/NotFound.png";
import "./NotFound.css";
function NotFound() {
  return (
    <>
      <img
        className=" text-center mx-auto d-block mb-3 margin sizeNotFound"
        src={pagePhto}
        alt="Not found"
      />
    </>
  );
}

export default NotFound;
