export const loginApi = async (credentials: { email: string, password: string }) => {
    // delay de meme
    await new Promise((resolve) => setTimeout(resolve, 1000));

    // isso aqui é só pra quando tiver api poder funfa, por enquanto so funfa esse email e senha
    if (credentials.email === "john@api.com" && credentials.password === "janepassword") {
        return { token: "fake-jwt-token-from-nestjs" };
    }

    throw new Error("Invalid credentials");
};