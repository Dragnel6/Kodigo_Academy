export const createUser = async (userData) => {
    try {
        const response = await fetch('http://localhost:3000/api/auth/register', {
            method: 'POST',
            body: JSON.stringify(userData),
            headers: {
                'Content-Type': 'application/json'
            }
        })

        if (!response.ok) {
            throw new Error("Error en el servidor");
        }

        return response.json();
    }
    catch(error) {
        if (error instanceof Error) {
            throw new Error("No se pudo crear el usuario")
        }
        throw error;
    }
};