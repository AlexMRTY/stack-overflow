"use client";

import AuthForm from "@/src/components/forms/AuthForm";
import React from "react";
import { SignInSchema } from "@/src/lib/Validations";

const SignIn = () => {
  return (
    <div>
      <AuthForm
        schema={SignInSchema}
        formType="SIGN_IN"
        defaultValues={{ email: "", password: "" }}
        onSubmit={(data) =>
          Promise.resolve({
            success: true,
            data,
          })
        }
      />
    </div>
  );
};

export default SignIn;
