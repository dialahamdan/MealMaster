import { useEffect, useState } from "react";
import styles from "./Profile.module.css";
import Loader from "../Loader/components/Loader";

function Profile() {
  const [submittedData, setSubmittedData] = useState(null);
  const [loader, setLoader] = useState(true);

  useEffect(() => {
    // Simulate a data fetch with a timeout for demonstration purposes
    setTimeout(() => {
      const data = localStorage.getItem("jobApplicationData");
      if (data) {
        setSubmittedData(JSON.parse(data));
      }
      setLoader(false); // Hide the loader after fetching data
    }, 1000); // Simulate a delay
  }, []);

  if (loader) {
    return <Loader />;
  }

  if (!submittedData) {
    return (
      <div className={styles.DivNoData}>
        <img
          src="Images/NoData/no-data-submitted.png"
          alt="no-data-submitted"
          className={styles.ImgNoData}
        />
      </div>
    );
  }

  return (
    <div className={styles.centeredContainer}>
      <div className={styles.submittedDataContainer}>
        <h4 className={styles.dataTitle}>Your Application Info</h4>
        <table className={styles.dataTable}>
          <tbody>
            <tr>
              <th>Name:</th>
              <td>{submittedData.name}</td>
            </tr>
            <tr>
              <th>Email:</th>
              <td>{submittedData.email}</td>
            </tr>
            <tr>
              <th>Password:</th>
              <td>{submittedData.password}</td>
            </tr>
            <tr>
              <th>Address:</th>
              <td>{submittedData.address}</td>
            </tr>
            <tr>
              <th>Phone:</th>
              <td>{submittedData.phone}</td>
            </tr>
            <tr>
              <th>Gender:</th>
              <td>{submittedData.gender}</td>
            </tr>
            <tr>
              <th>Image:</th>
              <td>
                {submittedData.image && (
                  <img
                    src={submittedData.image}
                    alt="Uploaded"
                    className={styles.submittedImage}
                  />
                )}
              </td>
            </tr>
          </tbody>
        </table>
      </div>

      <div className={styles.profileImg}>
        <img src="/Images/Profile/Profile.png" alt="Profile" />
      </div>
    </div>
  );
}

export default Profile;
