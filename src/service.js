// https://6348bff6a59874146b101b48.mockapi.io/api/
export const getLocation = async (latitude, longitude) => {
  try {
    const response = await fetch(
      `https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`
    );
    return response.json();
  } catch {
    throw new Error("No se encontro ubicacion");
  }
};

export const getUrl = async () => {
    try {
      const response = await fetch( `https://6348bff6a59874146b101b48.mockapi.io/api/Imagenes`);
      return response.json();
    } catch {
      throw new Error("No se encontro URL");
    }
  };
  

