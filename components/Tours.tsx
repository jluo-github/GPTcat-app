"use client";
import { getAllTours } from "@/utils/actions";
import { useQuery } from "@tanstack/react-query";
import ToursList from "./ToursList";
import type { Tour } from "@prisma/client";
import { useState } from "react";

const Tours = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const { data: tours, isPending } = useQuery({
    queryKey: ["tours", searchTerm],
    queryFn: () => getAllTours(searchTerm),
  });

  return (
    <>
      <form action='' className='max-w-lg my-12'>
        <div className='join w-full'>
          <input
            type='text'
            className='input input-bordered join-item w-full'
            name='search'
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder='City or Country'
            required
          />
          <button
            className='btn btn-primary join-item'
            type='button'
            disabled={isPending}
            onClick={() => setSearchTerm("")}>
            {isPending ? "Loading..." : "Reset"}
          </button>
        </div>
      </form>
      {isPending ? (
        <span className='loading'></span>
      ) : (
        <ToursList tours={tours as Tour[]} />
      )}
    </>
  );
};
export default Tours;
