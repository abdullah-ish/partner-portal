import { redirect } from "next/navigation";

export default function Home() {
  redirect("/partner/accounts");

  return null; // or you could return a loading state or a simple message
}
