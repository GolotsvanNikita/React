import {Restoraunt} from "./Restoraunt";
import {LoginForm} from "./LoginForm";

function App()
{
  return (
    <div className="App">
      {/*<Restoraunt*/}
      {/*    name='Kumanets'*/}
      {/*    address='Havana street'*/}
      {/*    rating='4.3'*/}
      {/*    typeOfKitchen='Ukrainian'*/}
      {/*    img='./restoraunt.webp'*/}
      {/*/>*/}
        <LoginForm
            login='admin'
            password='1234'
        />
    </div>
  );
}

export default App;
