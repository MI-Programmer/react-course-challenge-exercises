"use client";

import { TrashIcon } from "@heroicons/react/24/solid";
import { useTransition } from "react";

import SpinnerMini from "./SpinnerMini";

const DeleteReservation = ({ bookingId, onDelete }) => {
  const [isPending, startTransition] = useTransition();

  const handleDelete = () => {
    if (!confirm("Are you sure you want to delete this reservation??")) return;
    startTransition(() => onDelete(bookingId));
  };

  return (
    <button
      onClick={handleDelete}
      className="group flex flex-grow items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900"
    >
      {!isPending ? (
        <>
          <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
          <span className="mt-1">Delete</span>
        </>
      ) : (
        <span className="mx-auto">
          <SpinnerMini />
        </span>
      )}
    </button>
  );
};

// const DeleteReservation=({ bookingId }) =>{
//   return (
//     <form action={deleteBooking} className="flex-grow">
//       <input type="hidden" name="bookingId" value={bookingId} />
//       <button className="group flex h-full w-full items-center gap-2 px-3 text-xs font-bold uppercase text-primary-300 transition-colors hover:bg-accent-600 hover:text-primary-900">
//         <TrashIcon className="h-5 w-5 text-primary-600 transition-colors group-hover:text-primary-800" />
//         <span className="mt-1">Delete</span>
//       </button>
//     </form>
//   );
// }

export default DeleteReservation;
