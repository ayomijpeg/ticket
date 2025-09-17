import { tickets } from "../../../data/tickets";
import { notFound } from "next/navigation";
import TicketDetailsClient from "./TicketDetailsClient";

export default async function TicketDetailsPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;

  const ticket = tickets.find((t) => t.id === id);
  if (!ticket) return notFound();

  return <TicketDetailsClient ticket={ticket} />;
}
