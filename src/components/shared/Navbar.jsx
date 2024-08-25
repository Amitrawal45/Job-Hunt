import React from "react";
import { Popover, PopoverContent, PopoverTrigger } from "../ui/popover";
import { Button } from "../ui/button";
import { Avatar, AvatarImage } from "../ui/avatar";
import { LogOut, User2 } from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "sonner";
import axios from "axios";
import { setUser } from "@/redux/authSlice";
import { motion } from "framer-motion";

const USER_API_END_POINT = "https://jobhuntbackend.onrender.com/api/v1/user";

const Navbar = () => {
  const { user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logoutHandler = async () => {
    try {
      const res = await axios.get(`${USER_API_END_POINT}/logout`, {
        withCredentials: true,
      });
      if (res.data.success) {
        dispatch(setUser(null));
        navigate("/");
        toast.success("Logged out successfully");
        window.location.reload();
      }
    } catch (error) {
      console.log(error);
      toast.error(error.response.data.message);
    }
  };

  return (
    <motion.div
      className="bg-white"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="flex items-center justify-between mx-auto max-w-7xl h-16">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-2xl font-bold">
            Job <span className="text-[#6A38C2]">Hunt</span>
          </h1>
        </motion.div>
        <div className="flex items-center gap-12">
          <ul className="flex font-semibold items-center gap-5">
            {user && user.role === "recruiter" ? (
              <>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/admin/companies">Companies</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/admin/jobs">Jobs</Link>
                </motion.li>
              </>
            ) : (
              <>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/">Home</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/jobs">Jobs</Link>
                </motion.li>
                <motion.li whileHover={{ scale: 1.1 }}>
                  <Link to="/browse">Browse</Link>
                </motion.li>
              </>
            )}
          </ul>
          {!user ? (
            <motion.div
              className="flex items-center gap-2"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Link to="/login">
                <Button variant="outline">Login</Button>
              </Link>
              <Link to="/signup">
                <Button className="bg-[#6A38C2] hover:bg-[#3e236d]">
                  Signup
                </Button>
              </Link>
            </motion.div>
          ) : (
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <Popover>
                <PopoverTrigger asChild>
                  <Avatar className="cursor-pointer">
                    <AvatarImage
                      src={user?.profile?.profilePhoto}
                      alt="@shadcn"
                    />
                  </Avatar>
                </PopoverTrigger>
                <PopoverContent className="w-80">
                  <motion.div
                    className="flex gap-4 space-y-2"
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Avatar className="cursor-pointer">
                      <AvatarImage
                        src={user?.profile?.profilePhoto}
                        alt="@shadcn"
                      />
                    </Avatar>
                    <div>
                      <h4 className="font-semibold">{user?.fullname}</h4>
                      <p className="text-sm text-muted-foreground">
                        {user?.profile.bio}
                      </p>
                    </div>
                  </motion.div>
                  <div className="flex flex-col my-2 text-gray-600">
                    {user && user.role === "student" && (
                      <motion.div
                        className="flex w-fit items-center gap-2 cursor-pointer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <User2 />
                        <Button variant="link">
                          <Link to="/profile">View Profile</Link>
                        </Button>
                      </motion.div>
                    )}
                    <motion.div
                      className="flex w-fit items-center gap-2 cursor-pointer"
                      whileHover={{ scale: 1.05 }}
                    >
                      <LogOut />
                      <Button onClick={logoutHandler} variant="link">
                        Logout
                      </Button>
                    </motion.div>
                  </div>
                </PopoverContent>
              </Popover>
            </motion.div>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default Navbar;
