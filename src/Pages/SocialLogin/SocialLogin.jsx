import { useNavigate } from "react-router-dom";
import useAuth from "../../Hooks/useAuth";
import { FcGoogle } from "react-icons/fc";
import toast from "react-hot-toast";

const SocialLogin = () => {
  const { googleLogin } = useAuth();

  const navigate = useNavigate();

  const handleGoogleLogin = () => {
    googleLogin()
      .then((result) => {
        if (result.user) {
          toast.success("Login Successfully", {
            duration: 2000,
          });
          setTimeout(() => {
            navigate(location?.state || "/products");
          }, 2000);
        }
      })
      .catch((error) => {
        console.error(error);
      });
  };

  return (
    <div className="flex justify-center space-x-4">
      <button
        onClick={handleGoogleLogin}
        aria-label="Log in with Google"
        className="p-3 rounded-sm"
      >
        <p className="text-5xl">
          <FcGoogle />
        </p>
      </button>
    </div>
  );
};

export default SocialLogin;
