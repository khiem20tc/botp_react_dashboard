import { useEffect, useState } from "react";

function SignIn() {
  return SignInView();
}

function SignInView() {
  const [someVar, setSomeVar] = useState();
  useEffect(() => {
    setSomeVar(1);
  }, []);

  return (
    <>
      <div>Sign in view</div>
    </>
  );
}

export default SignIn;
