/* eslint-disable react/no-unescaped-entities */

import styles from "./HomeCardParagraph.module.css";

function HomeCardParagraph() {
  return (
    <>
      <div className={styles.CardHome}>
        <div>
          <h1 className={styles.cardTitle}>Why Choose MealMaster </h1>
        </div>

        <div className={styles.wrapper}>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>FoodFest TV</h2>
              <p>
                Discover the finest recipes from around the world. Our channel
                brings you the most delicious dishes, perfect for every
                occasion.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>Chef's Corner</h2>
              <p>
                Join our top chefs as they share their culinary secrets. Watch
                step-by-step guides and learn how to make gourmet meals at home.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>Quick Recipes</h2>
              <p>
                Pressed for time? No worries! Our quick and easy recipes are
                designed for busy individuals who want to eat well without the
                hassle.
              </p>
            </div>
          </div>
        </div>
        <div className={styles.wrapper}>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>Healthy Eating</h2>
              <p>
                Eat healthy without compromising on flavor. Our nutritious
                recipes are packed with wholesome ingredients and taste amazing.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>International Cuisine</h2>
              <p>
                Travel the world from your kitchen. Explore diverse flavors and
                culinary traditions with our international recipe collection.
              </p>
            </div>
          </div>
          <div className={styles.box}>
            <span />
            <div className={styles.content}>
              <h2>Viewer's Choice</h2>
              <p>
                Your opinion matters! Vote for your favorite recipes and see
                them featured on our channel. Your voice shapes our content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default HomeCardParagraph;
