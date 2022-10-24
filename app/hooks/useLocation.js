import * as Location from "expo-location";
import { useState, useEffect } from "react";

const useLocation = () => {
  const [location, setLocation] = useState({});

  const getLocation = async () => {
    try {
      const { granted } = await Location.requestForegroundPermissionsAsync();
      if (!granted) return;
      const {
        coords: { latitude, longitude },
      } = await Location.getCurrentPositionAsync();
      // const { coords } = await Location.getLastKnownPositionAsync();
      setLocation({ latitude, longitude });
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    getLocation();
  }, []);
  return location;
};
export default useLocation;
