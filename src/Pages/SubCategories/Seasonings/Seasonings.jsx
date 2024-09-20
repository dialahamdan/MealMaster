/* eslint-disable no-unused-vars */
import { Link } from 'react-router-dom';
import  { useEffect, useState } from 'react';
import axios from 'axios';
import Loader from "../../Loader/components/Loader";
import '../Style/SubCategories.css'

function Seasonings() {
  const [recipes, setRecipes] = useState([]);
  const [loader, setLoader] = useState(true);
  const getSeasonings = async (recipe) => {
    try {
     
      const { data } = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${recipe}`)
        // console.log(data.recipes);
        setRecipes(data.recipes);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoader(false); // Hide loader when data fetch is complete (success or error)
      }
  };

  // This useEffect will not trigger getSeasonings initially, we will call it only on button click
  useEffect(() => {
    // Optionally, you can fetch default recipes here
    getSeasonings();
  }, []);
  if (loader) {
    return <Loader />;
  }

  return (
  

    <div >
  <div className='categoriesDetailsHeader d-flex align-items-center justify-content-between'>
    <div className='backIcon'>
      <Link to='/MainCategories'>
        <svg xmlns="http://www.w3.org/2000/svg" width={50} height={50} viewBox="0 0 24 24" className='backIconSvg'>
          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
        </svg>
      </Link>
    </div>
    <div className='categoriesDetailstitle text-center'>
      <h1>Seasonings</h1>
      <div className="line"></div>
      <p>Explore a variety of seasonings to enhance your dishes, including Basil, Bean, Chickpea, and more!</p>
    </div>
  </div>

  <div className='categoriesDetails'>
    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>     
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/basil.png' alt='Basil' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Basil</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Basil`}>
          <button>details</button>
        </Link>
      </div>      
    </div>

    <div className='CategoryDetailsSection CategoryDetailsLightBgImg'>       
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/bean.png' alt='Bean' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Bean</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Bean`}>
          <button>details</button>
        </Link>
      </div>    
    </div>

    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/chickpea.png' alt='Chickpea' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Chickpea</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Chickpea`}>
          <button>details</button>
        </Link>
      </div>   
    </div>

    <div className='CategoryDetailsSection CategoryDetailsLightBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/cinnamon.png' alt='Cinnamon' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Cinnamon</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Cinnamon`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/coriander.png' alt='Coriander' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Coriander</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Coriander`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsLightBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/dill.png' alt='Dill' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Dill</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Dill`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/lentil.png' alt='Lentil' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Lentil</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Lentil`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsLightBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/oregano.png' alt='Oregano' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Oregano</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Oregano`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/parsley.png' alt='Parsley' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Parsley</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Parsley`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsLightBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/rosemary.png' alt='Rosemary' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Rosemary</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Rosemary`}>
          <button>details</button>
        </Link>
      </div>
    </div>

    <div className='CategoryDetailsSection CategoryDetailsDarkBgImg'>
      <div className='CategoryDetailsImg'>
        <img src='Images/seasonings/saffron.png' alt='Saffron' className='circle-img'/>
      </div>
      <div className='CategoryDetailsInfo'>
        <h3>Saffron</h3>
        <h4>your favorite dish</h4>
        <div className='h4-line'></div>
        <p>Click the button below to see more ideas!</p>
        <Link to={`/Dishes?q=Saffron`}>
          <button>details</button>
        </Link>
      </div>
    </div>

  </div>
</div>

  );
}

export default Seasonings;