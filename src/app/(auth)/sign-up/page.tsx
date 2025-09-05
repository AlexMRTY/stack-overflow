"use client";

import AuthForm from "@/src/components/forms/AuthForm";
import { SignUpSchema } from "@/src/lib/Validations";
import React from "react";

const SignUp = () => {
  return (
    <div>
      <AuthForm
        schema={SignUpSchema}
        formType="SIGN_UP"
        defaultValues={{ email: "", password: "", name: "", username: "" }}
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

export default SignUp;
