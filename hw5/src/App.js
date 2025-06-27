import {StyleChanger} from "./StyleChanger";
import {GreatPerson} from "./GreatPerson";
import {QuoteOfTheDay} from "./QuoteOfTheDay";

function App()
{
  return (
    <div className="App">
        {/*<StyleChanger/>*/}
        {/*<GreatPerson/>*/}
        <QuoteOfTheDay
            quote='The only way to do great work is to love what you do. — Steve Jobs'
        />
    </div>
  );
}

export default App;
