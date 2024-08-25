// import React, { useEffect, useState } from "react";
// import { motion } from "framer-motion";
// import { Label } from "../ui/label";
// import { Input } from "../ui/input";
// import { RadioGroup } from "../ui/radio-group";
// import { Button } from "../ui/button";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import { USER_API_END_POINT } from "@/utils/constant";
// import { toast } from "sonner";
// import { useDispatch, useSelector } from "react-redux";
// import { setLoading, setUser } from "@/redux/authSlice";
// import { Loader2 } from "lucide-react";

// const ForgetPassword = () => {
//   const [input, setInput] = useState({
//     email: "",
//     role: "",
//   });
//   const { loading, user } = useSelector((store) => store.auth);
//   const navigate = useNavigate();
//   const dispatch = useDispatch();

//   const changeEventHandler = (e) => {
//     setInput({ ...input, [e.target.name]: e.target.value });
//   };

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       dispatch(setLoading(true));
//       const res = await axios.post(
//         `${USER_API_END_POINT}/forget-password`,
//         input,
//         {
//           headers: {
//             "Content-Type": "application/json",
//           },
//           withCredentials: true,
//         }
//       );
//       if (res.data.success) {
//         dispatch(setUser(res.data.user));
//         navigate("/login");
//         toast.success(res.data.message);
//       } else {
//         toast.error("Failed to reset password.");
//       }
//     } catch (error) {
//       if (error.response) {
//         toast.error(error.response.data.message);
//       } else {
//         toast.error("An error occurred. Please try again.");
//       }
//     } finally {
//       dispatch(setLoading(false));
//     }
//   };

//   return (
//     <div>
//       <div className="flex items-center justify-center max-w-7xl mx-auto">
//         <motion.form
//           onSubmit={submitHandler}
//           className="w-1/2 border border-gray-200 rounded-md p-4 my-10"
//           initial={{ opacity: 0, y: 50 }}
//           animate={{ opacity: 1, y: 0 }}
//           transition={{ duration: 0.5 }}
//         >
//           <h1 className="font-bold text-xl mb-5">Reset Password</h1>
//           <div className="my-2">
//             <Label htmlFor="email">Email</Label>
//             <Input
//               id="email"
//               type="email"
//               value={input.email}
//               name="email"
//               onChange={changeEventHandler}
//               placeholder="patel@gmail.com"
//               required
//             />
//           </div>

//           <div className="flex items-center justify-between">
//             <RadioGroup className="flex items-center gap-4 my-5">
//               <div className="flex items-center space-x-2">
//                 <Input
//                   id="r1"
//                   type="radio"
//                   name="role"
//                   value="student"
//                   checked={input.role === "student"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                   required
//                 />
//                 <Label htmlFor="r1">Student</Label>
//               </div>
//               <div className="flex items-center space-x-2">
//                 <Input
//                   id="r2"
//                   type="radio"
//                   name="role"
//                   value="recruiter"
//                   checked={input.role === "recruiter"}
//                   onChange={changeEventHandler}
//                   className="cursor-pointer"
//                   required
//                 />
//                 <Label htmlFor="r2">Recruiter</Label>
//               </div>
//             </RadioGroup>
//           </div>
//           <Button
//             type="submit"
//             className="align-middle w-1/3 my-4"
//             disabled={loading}
//           >
//             {loading ? (
//               <>
//                 <Loader2 className="mr-2 h-4 w-4 animate-spin" /> Please wait
//               </>
//             ) : (
//               "Send"
//             )}
//           </Button>
//         </motion.form>
//       </div>
//     </div>
//   );
// };

// export default ForgetPassword;
