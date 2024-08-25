import React, { useEffect, useState } from "react";
import { RadioGroup, RadioGroupItem } from "./ui/radio-group";
import { Label } from "./ui/label";
import { useDispatch } from "react-redux";
import { setSearchedQuery } from "@/redux/jobSlice";
import { motion } from "framer-motion";

const filterData = [
  {
    filterType: "Location",
    array: ["Delhi", "Bangluru", "Chennai", "Pune", "Mumbai"],
  },
  {
    filterType: "Industry",
    array: ["Frontend Developer", "Backend Developer", "Fullstack Developer"],
  },
  {
    filterType: "Salary",
    array: ["0-40k", "45k-1lakh", "1-5lakh"],
  },
];

const FilterCard = () => {
  const dispatch = useDispatch();
  const [selectedValue, setSelectedValue] = useState("");

  const changeHandler = (value) => {
    setSelectedValue(value);
  };

  useEffect(() => {
    dispatch(setSearchedQuery(selectedValue));
  }, [selectedValue]);

  return (
    <div className="w-full bg-white p-3 rounded-md">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="font-bold text-lg">Filter Jobs</h1>
        <hr className="mt-3" />
        <RadioGroup value={selectedValue} onValueChange={changeHandler}>
          {filterData.map((data, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <h1 className="font-bold text-lg">{data.filterType}</h1>
              {data.array.map((item, idx) => {
                const itemId = `id${index}-${idx}`;
                return (
                  <motion.div
                    key={item}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{
                      duration: 0.5,
                      delay: index * 0.2 + 0.1 * idx,
                    }}
                    className="flex items-center space-x-2 my-2"
                  >
                    <RadioGroupItem value={item} id={itemId} />
                    <Label htmlFor={itemId}>{item}</Label>
                  </motion.div>
                );
              })}
            </motion.div>
          ))}
        </RadioGroup>
      </motion.div>
    </div>
  );
};

export default FilterCard;
