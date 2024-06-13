import { createContext, useEffect, useContext, useReducer } from "react";

const BASE_URL = "http://localhost:9000";

const CitiesContext = createContext();

const initialState = {
    cities: [],
    isLoading: false,
    currentCity: {},
    error: ""
};

const reducer = (state, { type, payload }) => {
    switch (type) {
        case "loading":
            return { ...state, isLoading: true };

        case "cities/loaded":
            return { ...state, cities: payload, isLoading: false };

        case "city/loaded":
            return {
                ...state,
                currentCity: payload,
                isLoading: false
            };

        case "city/created":
            return {
                ...state,
                cities: [...state.cities, payload],
                isLoading: false,
                currentCity: payload
            };

        case "city/deleted":
            return {
                ...state,
                cities: state.cities.filter(city => city.id !== payload),
                isLoading: false,
                currentCity: {}
            };

        case "rejected":
            return { ...state, error: payload, isLoading: false };

        default:
            throw new Error("Unknown action type");
    }
};

function CitiesProvider({ children }) {
    const [{ cities, isLoading, currentCity, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    async function getCity(id) {
        if (id === String(currentCity.id)) return;
        dispatch({ type: "loading" });

        try {
            const res = await fetch(`${BASE_URL}/cities/${id}`);
            const data = await res.json();
            dispatch({ type: "city/loaded", payload: data });
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error loading the city..."
            });
        }
    }

    async function createCity(newCity) {
        dispatch({ type: "loading" });

        try {
            const res = await fetch(`${BASE_URL}/cities`, {
                method: "POST",
                body: JSON.stringify(newCity),
                headers: {
                    "Content-Type": "application/json"
                }
            });
            const data = await res.json();
            dispatch({ type: "city/created", payload: data });
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error creating the city."
            });
        }
    }

    async function deleteCity(id) {
        dispatch({ type: "loading" });

        try {
            await fetch(`${BASE_URL}/cities/${id}`, {
                method: "DELETE"
            });

            dispatch({ type: "city/deleted", payload: id });
        } catch {
            dispatch({
                type: "rejected",
                payload: "There was an error deleting the city."
            });
        }
    }

    useEffect(() => {
        const fetchCities = async () => {
            dispatch({ type: "loading" });

            try {
                const res = await fetch(`${BASE_URL}/cities`);
                const data = await res.json();
                dispatch({ type: "cities/loaded", payload: data });
            } catch {
                dispatch({
                    type: "rejected",
                    payload: "There was an error loading cities..."
                });
            }
        };

        fetchCities();
    }, []);

    return (
        <CitiesContext.Provider
            value={{
                cities,
                isLoading,
                currentCity,
                error,
                getCity,
                createCity,
                deleteCity
            }}
        >
            {children}
        </CitiesContext.Provider>
    );
}

function useCities() {
    const context = useContext(CitiesContext);
    if (context === undefined)
        throw new Error("CitiesContext was used outside the CitiesProvider");
    return context;
}

export { CitiesProvider, useCities };
