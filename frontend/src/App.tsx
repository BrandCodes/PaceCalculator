import { useEffect, useState } from 'react'
import DistanceInput from "./components/DistanceInput";
import TimeInput from "./components/TimeInput";
import ResultBox from "./components/ResultBox";
import CalculateButton from "./components/CalculateButton";
import Toast from "react-hot-toast";
import './index.css'
// import './App.css'

export default function App() {
  const [distance, setDistance] = useState<string>("");
  const [hours, setHours] = useState<string>("");
  const [minutes, setMinutes] = useState<string>("");
  const [seconds, setSeconds] = useState<string>("");
  const [unit, setUnit] = useState<"km" | "mi">("km");
  const [pace, setPace] = useState<string>("");

  const [errors, setErrors] = useState<{ distance?: string; time?: string }>({});
  const [darkMode, setDarkMode] = useState(false);

  const calculatePace = () => {
    const dist = parseFloat(distance);
    const hrs = parseInt(hours) || 0;
    const min = parseInt(minutes) || 0;
    const sec = parseInt(seconds) || 0;

    const newErrors: { distance?: string; time?: string } = {};

    // if (isNaN(dist) || dist <= 0 || (hrs === 0 && min === 0 && sec === 0)) {     //isNaN(dist) || dist <= 0 || isNaN(min) || isNaN(sec) || min < 0 || sec < 0 || sec >= 60
    //   setPace("Por favor ingresa valores válidos.");
    //   return;
    // }
    if (isNaN(dist) || dist <= 0) {
      // newErrors.distance = "Ingresa una distancia válida mayor a 0.";
      Toast.error("Ingresa una distancia válida mayor a 0.");
      return;
    }

    if (hrs === 0 && min === 0 && sec === 0) {
      // newErrors.time = "Ingresa un tiempo válido.";
      Toast.error("Debes ingresar un tiempo.");
      return;
    }

    if (sec > 59 || min > 59) {
      // newErrors.time = "Los minutos o segundos no deben exceder 59.";
      Toast.error("Los minutos o segundos no deben exceder 59.");
      return;
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length > 0) {
      setPace(""); // No mostramos resultado si hay errores
      return;
    }

    const totalSeconds = hrs * 3600 + min * 60 + sec;
    const paceSeconds = totalSeconds / dist;
    const paceMin = Math.floor(paceSeconds / 60);
    const paceSec = Math.round(paceSeconds % 60);
    const label = unit === "km" ? "min/km" : "min/mi";

    //setPace(`${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec} ${label}`); //setPace(`${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec} min/km`)
    const result = `${paceMin}:${paceSec < 10 ? "0" : ""}${paceSec} ${label}`;
    setPace(result);

    Toast.success("¡Cálculo completado!");
  };

  useEffect(() => {
    const root = window.document.documentElement;
    if (darkMode) {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }
  }, [darkMode]);

  useEffect(() => {
    const saved = localStorage.getItem("theme");
    if (saved === "dark") setDarkMode(true);
  }, []);

  useEffect(() => {
    localStorage.setItem("theme", darkMode ? "dark" : "light");
  }, [darkMode]);

  // return (
  //   // <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  //   //   <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full max-w-md">
  //   //     <h1 className="text-2xl font-bold text-center text-gray-800">Calculadora de Ritmo 🏃‍♂️</h1>

  //   //     {/* Distancia y unidad */}
  //   //     <div className="space-y-4">
  //   //       <div>
  //   //         <label className="block mb-1 font-medium">Distancia:</label>
  //   //         <input
  //   //           type="number"
  //   //           value={distance}
  //   //           onChange={(e) => setDistance(e.target.value)}
  //   //           className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
  //   //           min="0"
  //   //         />
  //   //       </div>

  //   //       <div className="mt-2 flex gap-4">
  //   //         <label className="flex items-center">
  //   //           <input
  //   //             type="radio"
  //   //             value="km"
  //   //             checked={unit === "km"}
  //   //             onChange={() => setUnit("km")}
  //   //             className="mr-1"
  //   //           />
  //   //           Kilómetros
  //   //         </label>
  //   //         <label className="flex items-center">
  //   //           <input
  //   //             type="radio"
  //   //             value="mi"
  //   //             checked={unit === "mi"}
  //   //             onChange={() => setUnit("mi")}
  //   //             className="mr-1"
  //   //           />
  //   //           Millas
  //   //         </label>
  //   //       </div>

  //   //       {/* Tiempo */}
  //   //       <div className="grid grid-cols-3 gap-4">
  //   //         <div>
  //   //           <label className="block mb-1 font-medium">Horas:</label>
  //   //           <input
  //   //             type="number"
  //   //             value={hours}
  //   //             onChange={(e) => setHours(e.target.value)}
  //   //             className="w-full px-3 py-2 border rounded-lg focus:outline-none"
  //   //             min="0"
  //   //           />
  //   //         </div>

  //   //         <div>
  //   //           <label className="block mb-1 font-medium">Minutos:</label>
  //   //           <input
  //   //             type="number"
  //   //             value={minutes}
  //   //             onChange={(e) => setMinutes(e.target.value)}
  //   //             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
  //   //             min="0"
  //   //           />
  //   //         </div>

  //   //         <div>
  //   //           <label className="block mb-1 font-medium">Segundos:</label>
  //   //           <input
  //   //             type="number"
  //   //             value={seconds}
  //   //             onChange={(e) => setSeconds(e.target.value)}
  //   //             className="w-full px-3 py-2 border rounded-lg focus:outline-none focus:ring focus:border-blue-300"
  //   //             min="0"
  //   //             max="59"
  //   //           />
  //   //         </div>
  //   //       </div>

  //   //       {/* Botón */}
  //   //       <button
  //   //         onClick={calculatePace}
  //   //         className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition"
  //   //       >
  //   //         Calcular
  //   //       </button>
  //   //     </div>

  //   //     {/* Resultado */}
  //   //     {pace && (
  //   //       <div className="mt-4 text-center text-xl font-semibold text-gray-700">
  //   //         {pace}
  //   //       </div>
  //   //     )}
  //   //   </div>
  //   // </div>



  //   <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
  //     <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full max-w-md">
  // <h1 className="text-2xl font-bold text-center text-gray-800">
  //   Calculadora de Ritmo 🏃‍♂️
  // </h1>

  // <DistanceInput
  //   distance={distance}
  //   unit={unit}
  //   onDistanceChange={setDistance}
  //   onUnitChange={setUnit}
  //   error={errors.distance}
  // />

  // <TimeInput
  //   hours={hours}
  //   minutes={minutes}
  //   seconds={seconds}
  //   onHoursChange={setHours}
  //   onMinutesChange={setMinutes}
  //   onSecondsChange={setSeconds}
  //   error={errors.time}
  // />

  // <CalculateButton onClick={calculatePace} />
  // <ResultBox pace={pace} />
  //     </div>
  //   </div>
  // );
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4 dark:bg-gray-900 dark:text-gray-100 transition-colors duration-300">

      <div className="bg-white p-8 rounded-2xl shadow-xl space-y-6 w-full max-w-md dark:bg-gray-700 dark:text-gray-100 transition-colors duration-300">
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="px-4 py-2 text-sm text-gray-100 bg-gray-900 dark:bg-gray-100 rounded dark:text-gray-950"
        >
          {darkMode ? "🌞 Claro" : "🌙 Oscuro"}
        </button>

        {/* Aquí va tu calculadora u otros componentes */}

        <h1 className="text-2xl font-bold text-center text-gray-800">
          Calculadora de Ritmo 🏃‍♂️
        </h1>

        <DistanceInput
          distance={distance}
          unit={unit}
          onDistanceChange={setDistance}
          onUnitChange={setUnit}
          error={errors.distance}
        />

        <TimeInput
          hours={hours}
          minutes={minutes}
          seconds={seconds}
          onHoursChange={setHours}
          onMinutesChange={setMinutes}
          onSecondsChange={setSeconds}
          error={errors.time}
        />

        <CalculateButton onClick={calculatePace} />
        <ResultBox pace={pace} />
      </div>

      {/* <main className="p-4">

      </main> */}
    </div>
  );
}
