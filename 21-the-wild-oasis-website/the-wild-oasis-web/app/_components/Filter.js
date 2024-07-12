"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";

const Filter = () => {
  return (
    <div className="flex border border-primary-800">
      <ButtonFilter filter="all">All cabins</ButtonFilter>
      <ButtonFilter filter="small">1&mdash;3 guests</ButtonFilter>
      <ButtonFilter filter="medium">4&mdash;7 guests</ButtonFilter>
      <ButtonFilter filter="large">8&mdash;12 guests</ButtonFilter>
    </div>
  );
};

const ButtonFilter = ({ children, filter }) => {
  const searchParams = useSearchParams();
  const router = useRouter();
  const pathname = usePathname();

  const activeFilter = searchParams.get("capacity") ?? "all";

  const handleFilter = (filter) => {
    const params = new URLSearchParams(searchParams);
    params.set("capacity", filter);
    router.replace(`${pathname}?${params.toString()}`, { scroll: false });
  };

  return (
    <button
      className={`px-5 py-2 hover:bg-primary-700 ${activeFilter === filter && "bg-primary-700 text-primary-50"}`}
      onClick={() => handleFilter(filter)}
    >
      {children}
    </button>
  );
};

export default Filter;
