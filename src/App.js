import './App.css';
import Allmovie from './components/Allmovie';
import Banner from './components/Banner';
import Header from './components/Header';
import requests from './api/requests';
import Footer from './components/Footer';

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Allmovie title='현재 상영중인 영화' fetchUrl={requests.fetchNowPlaying} />
      <Allmovie title='오늘 대한민국의 TOP 10 시리즈' fetchUrl={requests.fetchTrending} />
      <Allmovie title='언제봐도 명작!' fetchUrl={requests.fetchTopRated} />
      <Allmovie title='오직 넷플릭스에서만' fetchUrl={requests.fetchNetflix} />
      <Allmovie title='한번 보면 멈출 수 없는 짜릿한 액션 영화' fetchUrl={requests.fetchAction} />
      <Allmovie title='기분까지 좋아지는 유쾌한 코미디 영화' fetchUrl={requests.fetchComedy} />
      <Allmovie title='등골이 오싹오싹 공포영화가 끌리는 이유' fetchUrl={requests.fetchHorror} />
      <Allmovie title='설렘 가득 달달한 로맨스 영화' fetchUrl={requests.fetchRomance} />
      <Allmovie title='묵직한 감동을 선사하는 다큐멘터리 영화' fetchUrl={requests.fetchDocu} />
      <Footer />
    </div>
  );
}

export default App;
