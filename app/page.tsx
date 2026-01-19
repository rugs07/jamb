import type { Metadata } from "next";
import HomePage from "./home/home-page";

export const metadata: Metadata = {
  title: "Jamb.",
  description: "Antique fireplaces, lighting & furniture.",
};

export default function Home() {
  return <HomePage />;
}
