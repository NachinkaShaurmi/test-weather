import { Provider } from "react-redux";
import CityList from "./components/cityList/CityList";
import store from "./redux/store";
import './app.scss';
import CityInfo from "./components/cityInfo/CityInfo";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <CityList />
        <CityInfo />
      </div>
    </Provider>
  );
}

export default App;
