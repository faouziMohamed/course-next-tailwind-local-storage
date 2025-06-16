"use server";

export async function loginUser(body: { email: string, password: string; madzi: string }) {
  console.log("Logging in user with email:", body);
  const { email, password } = body;
  // Simulate a login process
  if (!email || !password) {
    return {
      success: false,
      message: "Email and password are required",
      status: 400,
    };
  }

  if (email !== "me@mfaouzi.com") {
    return {
      success: false,
      message: "Invalid email or password",
      status: 401,
    };
  }
  if (password !== "123456") {
    return {
      success: false,
      message: "Invalid email or password",
      status: 401,
    };
  }
  return {
    success: true,
    message: "Login successful",
    status: 200,
  };
}
