import React, { useState } from "react";
import { Button } from "./ui/button";
import { Search } from "lucide-react";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const HeroSection = () => {
  const [query, setQuery] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const searchJobHandler = () => {
    dispatch(setSearchedQuery(query));
    navigate("/browse");
  };

  return (
    <div className="text-center">
      <div className="flex flex-col gap-5 my-10">
        <motion.span
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mx-auto px-4 py-2 rounded-full bg-gray-100 text-[#F83002] font-medium"
        >
          No. 1 Job Hunt Website
        </motion.span>
        <motion.h1
          initial={{ opacity: 0, y: -40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold"
        >
          Search, Apply & <br /> Get Your{" "}
          <span className="text-[#6A38C2]">Dream Jobs</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid
          aspernatur temporibus nihil tempora dolor!
        </motion.p>
        <div className="flex w-[40%] shadow-lg border border-gray-200 pl-3 rounded-full items-center gap-4 mx-auto">
          <motion.input
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            type="text"
            placeholder="Find your dream jobs"
            onChange={(e) => setQuery(e.target.value)}
            className="outline-none border-none w-full"
          />
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <Button
              onClick={searchJobHandler}
              className="rounded-r-full bg-[#6A38C2]"
            >
              <Search className="h-5 w-5" />
            </Button>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
