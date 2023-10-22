import { NextResponse } from "next/server";

export async function POST(req: any) {
  try {
    const { fullName, email, password } = req.json();

    console.log("FullName", fullName);
    console.log("Email", email);
    console.log("Password", password);

    return NextResponse.json({ message: "User registered." }, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { message: "An error occurred while registering the user." },
      {
        status: 500,
      }
    );
  }
}
