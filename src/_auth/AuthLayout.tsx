// _auth/AuthLayout.tsx

import { Outlet, Navigate } from "react-router-dom";

const AuthLayout = () => {
  const isAuthenticated = false;

  return (
    <>
      {isAuthenticated ? (
        <Navigate to="/" />
      ) : (
        <>
          <section className="relative w-full mx-auto flex flex-col justify-center items-center">
            <nav className="bg-white fixed top-0 left-0 w-full py-3 border-b">
              <div className="container">
                <img
                  src="/assets/images/Afrilearn-Black-Logo.png"
                  width={130}
                  height={100}
                />
              </div>
            </nav>
            <Outlet />
          </section>
        </>
      )}
    </>
  );
};
export default AuthLayout;
