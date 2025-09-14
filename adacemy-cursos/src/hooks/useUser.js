import { createUser } from "../services/userServices/user.service.js";
import { useState, useCallback } from "react";

export default function useUser() {
    const [user, setUser] = useState(null);

    const create = useCallback(async (userData) => {
        try{
            await createUser(userData);
        }catch(error) {
            if (error instanceof Error) {
                throw error;
            }
            throw new Error("Unknown error");
        }
    },[])

    return {
        user,
        create
    }
}