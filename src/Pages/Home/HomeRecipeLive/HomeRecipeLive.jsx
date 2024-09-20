import styles from "./HomeRecipeLive.module.css";
function HomeRecipeLive() {
  return (
    <>
      <div className={styles.wrapper}>
        <input
          className={styles.btn_animation__checkbox}
          id="animation"
          type="checkbox"
        />
        <label className={styles.btn_animation} htmlFor="animation">
          <svg
            width={60}
            height={60}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 800 800"
          >
            <path
              style={{ fill: "#020258" }}
              d="m178.6 202 202.1 198-202.1 198-60.3-61.8L257.2 400 118.3 263.8z"
            />
            <path
              style={{ fill: "#020258" }}
              d="m273.5 0 408.2 400-408.2 400-121.9-124.9L432.3 400 151.6 124.9z"
            />
            <path style={{ fill: "#020258" }} d="m202.1 401-84-86.2v166.4z" />
          </svg>
        </label>
        <button className={styles.btn_menu} type="button"></button>
        <main className={styles.main}>
          <div className={styles.main_section}>
            <div className={styles.header_wrapper}>
              <h1 className={styles.header_title}>Borsh Recipe</h1>
              <p className={styles.header_subtitle}>Classic Ukrainian dishes</p>
            </div>
            <img
              className={styles.main_image}
              src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/Borsh.png"
              width={800}
              height={800}
              alt="Borsh"
            />
            <div className={styles.recipe_footer}>
              <dl className={styles.recipe_controls}>
                <dt className={styles.subtitle}>Cooking Time</dt>
                <dd>
                  <svg
                    width={24}
                    height={24}
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fill="#0F0F0F"
                      d="M23 12c0 6.075-4.925 11-11 11S1 18.075 1 12 5.925 1 12 1s11 4.925 11 11ZM3.007 12a8.993 8.993 0 1 0 17.986 0 8.993 8.993 0 0 0-17.986 0Z"
                    />
                    <path
                      fill="#0F0F0F"
                      d="M12 5a1 1 0 0 0-1 1v6.467s0 .26.127.457c.084.166.217.31.39.41l4.62 2.668a1 1 0 0 0 1-1.732L13 11.88V6a1 1 0 0 0-1-1Z"
                    />
                  </svg>
                  <span>1h 30m</span>
                </dd>
                <dt className={styles.subtitle}>Serving</dt>
                <dd>
                  <svg
                    height={24}
                    width={24}
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 487.55 487.55"
                    xmlSpace="preserve"
                  >
                    <path d="M244.625 171.415c-40 0-72.4 32.4-72.4 72.4s32.4 72.4 72.4 72.4 72.4-32.4 72.4-72.4c-.1-40-32.5-72.4-72.4-72.4zm0 48.8c-13 0-23.6 10.6-23.6 23.6 0 6-4.8 10.8-10.8 10.8s-10.8-4.8-10.8-10.8c0-24.9 20.3-45.2 45.2-45.2 6 0 10.8 4.8 10.8 10.8 0 6-4.9 10.8-10.8 10.8z" />
                    <path d="M481.325 227.515c-224.8-258.6-428-53.9-476.4 2.8-6.5 7.6-6.6 18.8-.1 26.4 221.9 259 423.4 64.6 476.5 3.7 8.3-9.4 8.3-23.4 0-32.9zm-236.7 119.1c-56.8 0-102.8-46-102.8-102.8s46-102.8 102.8-102.8 102.8 46 102.8 102.8-46.1 102.8-102.8 102.8z" />
                  </svg>
                  <span>2 people</span>
                </dd>
              </dl>
              <div className={styles.recipe_ingredients}>
                <p className={`${styles.recipe_title} ${styles.subtitle}`}>
                  Ingredients
                </p>
                <ul className={styles.recipe_list}>
                  <li>Clean water - 3000 ml</li>
                  <li>Fresh or sour cabbage - 300 g</li>
                  <li>Fresh or boiled beets - 150 g</li>
                  <li>Potatoes - 4-6 pieces</li>
                  <li>Carrots - 1-2 pieces</li>
                  <li>Onions - 1-2 heads</li>
                  <li>Tomatoes (canned or fresh) - 2-3 pieces</li>
                  <li>Garlic - 2-3 cloves</li>
                  <li>Cooked meat (pork or beef) with bone - 800 g</li>
                  <li>Herbs (parsley, dill, celery) - to taste</li>
                  <li>Salt, pepper, vinegar - to taste</li>
                  <li>Sunflower oil - for frying</li>
                  <li>Sour cream - for serving</li>
                </ul>
              </div>
              <div className={styles.ingredients}>
                <figure className={styles.ingredients_item}>
                  <img
                    src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/beetroot.jpg"
                    alt="beetroot"
                  />
                  <figcaption>Beetroot</figcaption>
                </figure>
                <figure className={styles.ingredients_item}>
                  <img
                    src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/cabbage.jpg"
                    alt="cabbage"
                  />
                  <figcaption>Cabbage</figcaption>
                </figure>
                <figure className={styles.ingredients_item}>
                  <img
                    src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/pork-neck.jpg"
                    alt="pork neck"
                  />
                  <figcaption>Pork Neck</figcaption>
                </figure>
                <figure className={styles.ingredients_item}>
                  <img
                    src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/potatoes.jpg"
                    alt="Potatoes"
                  />
                  <figcaption>Potatoes</figcaption>
                </figure>
                <figure className={styles.ingredients_item}>
                  <img
                    src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/tomatoes.jpg"
                    alt="tomatoes"
                  />
                  <figcaption>Tomatoes</figcaption>
                </figure>
              </div>
            </div>
          </div>
          <div className={styles.main_video}>
            <ol className={styles.steps_list}>
              <li>
                <b>Step 1: Prepare Ingredients</b>
                <p>Peel and chop all vegetables. Wash the piece of meat.</p>
              </li>
              <li>
                <b>Step 2: Boil the Meat</b>
                <p>
                  Boil the meat until it starts falling off the bone. Remove the
                  foam that forms during boiling.
                </p>
                <p>
                  After 40 minutes, add the beans. Continue boiling for another
                  20 minutes over medium heat. Meanwhile, prepare the
                  vegetables.
                </p>
              </li>
              <li>
                <b>Step 3: Prepare the Main Part of the Borscht</b>
                <p>Chop the white cabbage and onion into small pieces.</p>
                <p>Chop the peeled potatoes into small cubes (4-6 pieces).</p>
                <p>Grate 2 carrots.</p>
                <p>Grate 150-200g of beetroot.</p>
              </li>
              <li>
                <b>Step 4: Boil the Vegetables</b>
                <p>
                  When the meat starts to fall off the bone, remove it from the
                  pot.
                </p>
                <p>
                  Add the potatoes to the broth and continue boiling for 10
                  minutes.
                </p>
                <p>
                  Sauté the onion and garlic until golden brown. 1-2 minutes in
                  sunflower oil.
                </p>
                <p>Add the carrot and sauté for another 2 minutes.</p>
                <p>
                  Add the grated beetroot and sauté for 5-7 minutes, stirring
                  frequently.
                </p>
                <p>
                  Add 1 tablespoon of vinegar. Sauté for another 2 minutes,
                  stirring.
                </p>
                <p>Add 20g of salt, stir, sauté for another 2 minutes.</p>
                <p>
                  Add 150g of tomato paste or finely chopped tomatoes. Mix well,
                  sauté for 3 more minutes.
                </p>
                <p>
                  Add 100g of broth, simmer the vegetables for 15 minutes over
                  low heat.
                </p>
              </li>
              <li>
                <b>Step 5: Mix Vegetables with Broth</b>
                <p>
                  Add pepper and bay leaf to the broth with boiled potatoes.
                </p>
                <p>Add cabbage and cook for 10-15 minutes.</p>
                <p>
                  Add the boiled meat to the broth, add 20g of salt, and cook
                  over medium heat for 10 minutes.
                </p>
                <p>
                  Add the sautéed vegetables to the broth, mix, and cook for
                  another 5 minutes.
                </p>
                <p>Turn off the stove and let it sit for 15 minutes.</p>
              </li>
              <li>
                <b>Step 6: Serving</b>
                <p>Remove the bay leaf.</p>
                <p>
                  Add grated garlic and chopped herbs (parsley, dill, green
                  onion).
                </p>
                <p>
                  Serve the borscht hot, garnished with a spoonful of sour cream
                  on each portion.
                </p>
              </li>
            </ol>
            <div className={styles.video_box}>
              <div className={styles.video_box__wrap}>
                <video
                  src="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/borsh.mp4"
                  muted
                  autoPlay
                  loop
                  poster="https://media.githubusercontent.com/media/BlackStar1991/Borsh/main/images/borsh.webp"
                >
                  Video about Borsh
                </video>
              </div>
            </div>
          </div>
        </main>
      </div>
      <hr />
    </>
  );
}

export default HomeRecipeLive;
