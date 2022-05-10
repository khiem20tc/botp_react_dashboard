import { useEffect, useState } from "react";

function SignIn() {
  return SignInView();
}

function SignInView() {
  const [someVar, setSomeVar] = useState();
  useEffect(() => {
    if (someVar) {
      alert("hehe");
    }
  }, []);

  return (
    <>
      <div>Sign in view</div>
    </>
  );
}

export default SignIn;
