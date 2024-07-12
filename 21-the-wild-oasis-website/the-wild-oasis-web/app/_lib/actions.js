"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

import { auth, signIn, signOut } from "@/app/_lib/Auth";
import { supabase } from "@/app/_lib/supabase";
import { getBooking, getBookings } from "@/app/_lib/data-service";

export const updateGuest = async (formData) => {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const [nationality, countryFlag] = formData.get("nationality").split("%");
  const nationalID = formData.get("nationalID");

  if (!/^[a-zA-Z0-9]{6,12}$/.test(nationalID))
    throw new Error("Please provide a valid national ID");

  const updateData = { nationality, countryFlag, nationalID };
  const { error } = await supabase
    .from("guests")
    .update(updateData)
    .eq("id", session.user.guestId);

  if (error) throw new Error("Guest could not be updated");

  revalidatePath("/account/profile");
};

export const createBooking = async (bookingData, formData) => {
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const newBooking = {
    ...bookingData,
    guestId: session.user.guestId,
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
    extrasPrice: 0,
    totalPrice: bookingData.cabinPrice,
    status: "unconfirmed",
    isPaid: false,
    hasBreakfast: false,
  };

  const { error } = await supabase.from("bookings").insert([newBooking]);
  if (error) throw new Error("Booking could not be created");

  revalidatePath(`/cabins/${bookingData.cabinId}`);
  redirect("/cabins/thankyou");
};

export const updateBooking = async (formData) => {
  const bookingId = formData.get("bookingId");

  // 1. Authentication
  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  // 2. Authorization
  const { guestId } = await getBooking(bookingId);
  if (guestId !== session.user.guestId)
    throw new Error("You are not allowed to delete this booking");

  // 3. Building update data
  const updateData = {
    numGuests: +formData.get("numGuests"),
    observations: formData.get("observations").slice(0, 1000),
  };

  // 4. Mutation
  const { error } = await supabase
    .from("bookings")
    .update(updateData)
    .eq("id", bookingId);

  // 5. Error handling
  if (error) throw new Error("Booking could not be updated");

  // 6. Revalidation
  revalidatePath("/account/reservations");
  revalidatePath(`/account/reservations/edit/${bookingId}`);

  // 7. Redirecting
  redirect("/account/reservations");
};

export const deleteBooking = async (bookingId) => {
  // For testing
  // await new Promise((res) => setTimeout(res, 2000));
  // throw new Error();

  const session = await auth();
  if (!session) throw new Error("You must be logged in");

  const { guestId } = await getBooking(bookingId);
  if (guestId !== session.user.guestId)
    throw new Error("You are not allowed to delete this booking");

  // const guestBookings = await getBookings(session.user.guestId);
  // const guestBookingsIds = guestBookings.map((item) => item.id);
  // if (!guestBookingsIds.includes(bookingId))
  //   throw new Error("You are not allowed to delete this booking");

  const { error } = await supabase
    .from("bookings")
    .delete()
    .eq("id", bookingId);

  if (error) throw new Error("Booking could not be deleted");

  revalidatePath("/account/reservations");
};

export const signInAction = async () => {
  await signIn("google", { redirectTo: "/account" });
};

export const signOutAction = async () => {
  await signOut({ redirectTo: "/" });
};
