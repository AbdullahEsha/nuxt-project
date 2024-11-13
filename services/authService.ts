const api_url = "http://localhost:5000/api/v1";

// register a new user using fetch
export const register = async (
  name: string,
  email: string,
  password: string
) => {
  try {
    const res = await fetch(`${api_url}/auth/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, password }),
    });
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};

// login a user using fetch
export const login = async (email: string, password: string) => {
  try {
    const res = await fetch(`${api_url}/auth/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    });

    // Parse the response once and store it
    const data = await res.json();

    // Save accessToken and user data to local storage
    if (data.accessToken && data.user) {
      localStorage.setItem("token", data.accessToken);
      localStorage.setItem("user", JSON.stringify(data.user));
    }

    return data;
  } catch (error) {
    console.error(error);
  }
};

export const logout = async () => {
  try {
    const res = await fetch(`${api_url}/auth/logout`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("token")}`,
      },
    });

    localStorage.removeItem("token");
    localStorage.removeItem("user");
    return await res.json();
  } catch (error) {
    console.error(error);
  }
};
