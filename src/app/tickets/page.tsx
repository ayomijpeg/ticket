"use client";
import { useState } from "react";
import { tickets } from "../../data/tickets";
import Link from "next/link";
import Image from "next/image";

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("my-tickets");

  return (
    <div className="max-w-2xl mx-auto p-4">
      {/* Tabs */}
      <div className="flex border-b">
        <button
          onClick={() => setActiveTab("my-tickets")}
          className={`flex-1 py-2 text-center ${
            activeTab === "my-tickets"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          My Tickets {tickets.length}
        </button>
        <button
          onClick={() => setActiveTab("addons")}
          className={`flex-1 py-2 text-center ${
            activeTab === "addons"
              ? "border-b-2 border-blue-500 font-semibold"
              : "text-gray-500"
          }`}
        >
          Add-ons
        </button>
      </div>

      {activeTab === "my-tickets" && (
        <div className="space-y-4 mt-4">
          {tickets.map((ticket) => (
            <div
              key={ticket.id}
              className="rounded-lg shadow-md border overflow-hidden"
            >
              <div className="bg-blue-600 text-white p-3 text-center">
                Verified Fan Onsale
              </div>
              <Image
                src={ticket.image}
                alt={ticket.event}
                width={600}
                height={300}
                className="w-full"
              />
              <div className="p-4">
                <p className="font-bold">{ticket.event}</p>
                <p className="text-sm text-gray-500">
                  {ticket.date} • {ticket.venue}
                </p>
                <p className="mt-2">
                  <span className="font-semibold">Sec {ticket.section}</span> •{" "}
                  Row {ticket.row} • Seat {ticket.seat}
                </p>

                <div className="mt-4 space-y-2">
                  <Link
                    href={`/tickets/${ticket.id}`}
                    className="block text-center bg-blue-600 text-white py-2 rounded-md"
                  >
                    View Ticket
                  </Link>
                  <Link
                    href={`/tickets/${ticket.id}/transfer`}
                    className="block text-center text-blue-600 underline"
                  >
                    Transfer Ticket
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
