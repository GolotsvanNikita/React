const root = ReactDOM.createRoot(document.getElementById('app'));
let counter = 0;

const recipe =
{
    Name: 'Ukrainian borscht',
    Description: '453.59 g beef on the bone, 4 tbsp vegetable oil, 2 medium carrots (grated),' +
        ' ½ large onion (finely chopped), 1 large beet (peeled and grated or thinly sliced),' +
        ' 453.59 g canned red beans (rinsed and drained),' +
        ' 3 medium potatoes (cut into small pieces),' +
        ' ¼ medium head of cabbage (shredded), 1 tbsp salt (adjust to taste),' +
        ' 1 tsp ground black pepper (to taste), 1 tbsp vinegar, 2 tbsp ketchup.',
   Steps:
   [
       '1.1 In a large pot, bring 4 liters of water to a boil.' +
       ' Cut the beef into pieces about 5 cm in size and add them to the boiling water.' +
       ' Simmer over low heat for about 20 minutes. Meanwhile, start preparing the vegetable sauté.',
       '2.1 In a skillet, heat the oil and sauté the grated carrots, onion, and beet until soft (about 7–10 minutes).\n' +
       '2.2 Transfer the sautéed vegetables to the pot with the meat.' +
       ' Add the rinsed beans to the borscht and cook for another 15 minutes.',
       '3.1 Add the chopped potatoes to the borscht and cook for another 15 minutes.\n' +
       '3.2 Once the potatoes are almost done, add the shredded cabbage.\n' +
       '3.3 Season with salt, pepper, vinegar, and ketchup. Let the borscht simmer for another 10 minutes.'
   ]
};

root.render
(
    <div className="container">
        <h1>{recipe.Name}</h1>
        <img src="borsh.jpg" alt="img"/>
        <div className="info">
            <h2>Recipe</h2>
            <p>{recipe.Description}</p>
        </div>
        <div className="stepContainer">
            {recipe.Steps.map((step) =>
                (
                    <div className="step">
                        <h3>Step {++counter}</h3>
                        <p>{step}</p>
                    </div>
                ))}
        </div>
    </div>
)