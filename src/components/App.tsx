import { Provider } from 'react-redux';
import {store} from '../Redux/redux';
import '../index.css';
import "../css/tailwind.css"
import {PureInboxScreen} from './InboxScreen';


function App() {
  return (
    <div className="main">
    <Provider store={store}>
      <PureInboxScreen />
    </Provider>
    </div>
  );
}
export default App;