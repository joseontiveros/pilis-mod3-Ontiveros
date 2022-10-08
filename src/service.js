
   export const getLocation = async (latitude,longitude) => {
        
        try {
           
            
            const response = await fetch(`https://api.open-meteo.com/v1/forecast?current_weather=true&latitude=${latitude}&longitude=${longitude}&timezone=America/Argentina/Jujuy`);
           // const data = await response.json();
            return response.json();
         //   console.log('service',data);
           // setEquipo(users);
           // setTemp(users.current_weather)

        } catch {
            throw new Error('No se encontro ubicacion');
        }

    };
   

    

