"use client";

import bcrypt from "bcryptjs";
import { sql } from "@/app/lib/data";
import { SignupFormSchema, FormState } from "@/app/lib/definitions";
import { redirect } from "next/navigation";

export async function signup(state: FormState, formData: FormData) {
  // Validate form fields
  const validatedFields = SignupFormSchema.safeParse({
    name: formData.get("name"),
    email: formData.get("email"),
    password: formData.get("password"),
  });

  // If any form fields are invalid, return early
  if (!validatedFields.success) {
    return {
      errors: validatedFields.error.flatten().fieldErrors,
    };
  }

  // Prepare data for insertion into database
  const { name, email, password } = validatedFields.data;
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    // Insert the user into the database
    const data = await sql<{ id: string }>`
  INSERT INTO users (name, email, password)
  VALUES (${name}, ${email}, ${hashedPassword})
  RETURNING id;
`;

    const user = data.rows[0];

    if (!user) {
      return {
        message: "An error occurred while creating your account.",
      };
    }

    // Current steps:
    // 4. Create user session
    // 5. Redirect user
    redirect("/ui/dashboard");

    return {
      message: "User created successfully!",
      userId: user.id,
    };
  } catch (error) {
    console.error("Database Error:", error);
    return {
      message: "An error occurred while creating your account.",
    };
  }
}
