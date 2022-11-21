import React from 'react';
import './Detail.css';

function Detail() {
  // const fetchDetail = async () => {};
  return (
    <div className='recipe-detail'>
      <div className='recipe-detail__title'>
        <h1>Simple Rendang</h1>
      </div>
      <img className='recipe-detail__image' src='https://spoonacular.com/recipeImages/654534-556x370.jpg' alt='rendangimage' />
      <div className='recipe-detail__description'>
        <div className='description__title'>
          <h2>Description</h2>
        </div>
        <div className='description__body'>
          Simple Rendang might be just the hor d'oeuvre you are searching for. This recipe makes 48 servings with 70 calories, 4g of protein, and 4g of fat each. For 60 cents per serving, this recipe covers 4% of your daily requirements of
          vitamins and minerals. 1 person were impressed by this recipe. Head to the store and pick up stir in lime juice, kaffir lime leaves, clvs garlic, and a few other things to make it today. It is a good option if you're following a
          gluten free and dairy free diet. From preparation to the plate, this recipe takes around 45 minutes. All things considered, we decided this recipe deserves a spoonacular score of 59%. This score is pretty good. Try Indonesian Beef
          Rendang (Rendang Sapi), Mutton Rendang, and Potato Rendang for similar recipes.
        </div>
      </div>
      <div>
        <div className='recipe-detail__content'>
          <div className='recipe-detail__instructions'>
            <div className='instructions__title'>
              <h2>Instructions</h2>
            </div>
            <div className='instructions__body'>
              <ul>
                <li>Thickly slice chillies, shallots, garlic, ginger and lemon grass. Grind to a fine paste in electric blender/food processor with just enough water for blades to work. Stir in the ground turmeric.</li>
                <li>Heat oil in a roomy wok and add ground ingredients. Cook over low heat until liquid is reduced and oil begins to separate. Pour in the coconut milk and continue cooking over medium heat until mixture is thick.</li>
                <li>Thickly slice chillies, shallots, garlic, ginger and lemon grass. Grind to a fine paste in electric blender/food processor with just enough water for blades to work. Stir in the ground turmeric.</li>
                <li>Thickly slice chillies, shallots, garlic, ginger and lemon grass. Grind to a fine paste in electric blender/food processor with just enough water for blades to work. Stir in the ground turmeric.</li>
                <li>Thickly slice chillies, shallots, garlic, ginger and lemon grass. Grind to a fine paste in electric blender/food processor with just enough water for blades to work. Stir in the ground turmeric.</li>
              </ul>
            </div>
          </div>

          <div className='recipe-detail__ingredients'>
            <div className='ingredients__title'>
              <h2>Ingredients</h2>
            </div>
            <div className='ingredients__body'>
              <ul>
                <li>3 pounds boneless chuck steak</li>
                <li>1 bay leaf</li>
                <li>½ tsps thyme</li>
                <li>1 tsp peppercorns</li>
                <li>2 Tbsps butter</li>
                <li>½ pound mushrooms</li>
                <li>½ Tbsps parsley</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className='recipe-detail__title'>
        <h1>Other Recipes</h1>
      </div>
    </div>
  );
}

export default Detail;
