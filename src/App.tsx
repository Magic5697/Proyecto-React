import styles from "./app.module.css"
import Alert from "./components/Form/Alert/Alert"
import Form from "./components/Form/Form"
import WeatherDetail from "./components/Form/WeatherDtail/WeatherDetail"
import Spiner from "./components/Spinner/Spinner"
import useWeather from "./hooks/useWeather"

function App() {
  
const {weather, loading, notFound, fetchWeather, hasWeatherData } = useWeather()



  return (
    <>
      <h1 className={styles.title}>Buscador de clima</h1>

        <div className={styles.container}><Form fetchWeather={fetchWeather} />
        {loading && <Spiner />}
        {hasWeatherData && <WeatherDetail weather={weather}/>}
        {notFound && <Alert>Ciudad no Encontrada</Alert>}
      </div>
    </>
  )
}

export default App
