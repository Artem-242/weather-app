import {createAsyncThunk, createSlice, PayloadAction} from "@reduxjs/toolkit";
import {fromAddress, setKey, setLanguage} from "react-geocode";

interface DailyWeather {
	time: string[];
	temperature_2m_max: number[];
	temperature_2m_min: number[];
	weather_code: number[];
	precipitation_sum: number[];
	wind_speed_10m_max: number[];
	wind_direction_10m_dominant: number[];
}

interface CurrentWeather {
	temperature_2m: number;
	apparent_temperature: number;
	precipitation: number;
	surface_pressure: number;
	wind_speed_10m: number;
	wind_direction_10m: number;
	weather_code: number;
}

interface WeatherApiResponse {
	dailyWeather: DailyWeather;
	currentWeather: CurrentWeather;
}

export interface MyState {
	defaultCity: string;
	cityName: string;
	weatherCode: number[];
	apparentTemperatureMax: number[];
	time: string[];
	temperatureMax: number[];
	temperatureMin: number[];
	precipitation: number[],
	windSpeed: number[],
	windDirection: number[],
	currentTemperature: number[];
	currentApparentTemperature: number[];
	currentPrecipitation: number[];
	currentPressure: number[];
	currentWindSpeed: number[];
	currentWindDirection: number[];
	currentWeatherCode: number[];
}
export const initialState: MyState = {
	defaultCity: '',
	cityName: '',
	weatherCode: [],
	apparentTemperatureMax: [],
	time: [],
	temperatureMax: [],
	temperatureMin: [],
	precipitation: [],
	windSpeed: [],
	windDirection: [],
	currentTemperature: [],
	currentApparentTemperature: [],
	currentPrecipitation: [],
	currentPressure: [],
	currentWindSpeed: [],
	currentWindDirection: [],
	currentWeatherCode: [],
}

interface apiResponce {
	MyState: MyState;
	dailyWeather: any;
	currentWeather: any
}

export const getWeatherFromApi = createAsyncThunk<WeatherApiResponse, string>(
	'weather/getWeatherFromApi',
	async (inputValue, thunkAPI) => {
		try {
			setKey("AIzaSyA0eoPOJX49wVcr306EUnB-jqkbZGEA0pU");
			setLanguage('en');

			const results = await fromAddress(inputValue);
			if (!results || results.length === 0) {
				throw new Error("No results found for the provided address.");
			}

			const { lat, lng } = results.results[0].geometry.location;
			const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lng}&current=temperature_2m,apparent_temperature,precipitation,weather_code,surface_pressure,wind_speed_10m,wind_direction_10m&daily=weather_code,temperature_2m_max,temperature_2m_min,apparent_temperature_max,precipitation_sum,wind_speed_10m_max,wind_direction_10m_dominant&wind_speed_unit=ms&timezone=Europe%2FBerlin`;

			const response = await fetch(url);
			const fetchWeather = await response.json();

			if (!fetchWeather || !fetchWeather.daily || !fetchWeather.current) {
				throw new Error("Invalid weather data received from the API.");
			}

			const dailyWeather: DailyWeather = fetchWeather.daily;
			const currentWeather: CurrentWeather = fetchWeather.current;


			return { dailyWeather, currentWeather };
		} catch (error) {
			let errorMessage = "An unknown error occurred";
			if (error instanceof Error) {
				errorMessage = error.message;
			}
			return thunkAPI.rejectWithValue({ message: errorMessage });
		}
	}
);


export const weatherReducer = createSlice({
	name: 'weather',
	initialState,
	reducers: {
		setCityName: (state, action: PayloadAction<string>) => {
			state.cityName = action.payload;
		},
		setDefaultCity: (state, action: PayloadAction<string>) => {
			state.defaultCity = action.payload;
		}
	},

	extraReducers: (builder) => {
		builder
			.addCase(getWeatherFromApi.fulfilled, (state, action) => {
				const {dailyWeather, currentWeather} = action.payload;

				state.time = dailyWeather.time;
				state.temperatureMax = dailyWeather.temperature_2m_max;
				state.temperatureMin = dailyWeather.temperature_2m_min;
				state.weatherCode = dailyWeather.weather_code;
				state.precipitation = dailyWeather.precipitation_sum;
				state.windSpeed = dailyWeather.wind_speed_10m_max;
				state.windDirection = dailyWeather.wind_direction_10m_dominant;

				state.currentTemperature = [currentWeather.temperature_2m];
				state.currentApparentTemperature = [currentWeather.apparent_temperature];
				state.currentPrecipitation = [currentWeather.precipitation];
				state.currentPressure = [currentWeather.surface_pressure];
				state.currentWindSpeed = [currentWeather.wind_speed_10m];
				state.currentWindDirection = [currentWeather.wind_direction_10m];
				state.currentWeatherCode = [currentWeather.weather_code];
			})
			.addCase(getWeatherFromApi.rejected, (state, action) => {
				console.error(action.payload)
			})
	},
});

export const {setCityName, setDefaultCity} = weatherReducer.actions;
export default weatherReducer.reducer;
