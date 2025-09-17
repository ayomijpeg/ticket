"use client";
import { useState } from "react";
import { tickets } from "../../../data/tickets"; // adjust path if needed
import { format } from "date-fns";
import Image from "next/image";

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("upcoming");

  const today = new Date();

  // Split tickets into categories
  const upcomingTickets = tickets.filter(
    (t) => new Date(t.date) >= today
  );
  const pastTickets = tickets.filter(
    (t) => new Date(t.date) < today
  );

  const displayedTickets =
    activeTab === "upcoming"
      ? upcomingTickets
      : activeTab === "post"
      ? pastTickets
      : [];

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <main className="max-w-md mx-auto bg-white min-h-screen">
        {/* Header */}
        <div className="bg-white p-5 border-b border-gray-200 sticky top-0 z-10">
          <h1 className="text-2xl font-bold">My Tickets</h1>
        </div>

        {/* Tabs */}
        <div className="flex border-b border-gray-200">
          {["upcoming", "post", "listing"].map((tab) => (
            <button
              key={tab}
              className={`flex-1 py-3 text-center font-medium ${
                activeTab === tab
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-500"
              }`}
              onClick={() => setActiveTab(tab)}
            >
              {tab === "upcoming"
                ? "Upcoming Events"
                : tab === "post"
                ? "Past Events"
                : "My Listings"}
            </button>
          ))}
        </div>

        {/* Tickets */}
        {displayedTickets.length > 0 ? (
          displayedTickets.map((ticket) => (
            <div
              key={ticket.id}
              className="p-5 border-b border-gray-200 cursor-pointer hover:bg-gray-50 transition"
            >
              <div className="flex">
                {/* Date Box */}
                <div className="flex flex-col items-center justify-center w-16 h-16 bg-gray-100 rounded-lg mr-4">
                  <div className="text-xs font-bold text-gray-500">
                    {format(new Date(ticket.date), "MMM").toUpperCase()}
                  </div>
                  <div className="text-xl font-bold">
                    {format(new Date(ticket.date), "d")}
                  </div>
                </div>

                {/* Event Details */}
                <div className="flex-1">
                  <div className="text-sm text-gray-500">
                    {format(new Date(ticket.date), "EEE - h:mm a")}
                  </div>
                  <h2 className="font-bold mt-1">{ticket.event}</h2>
                  <p className="text-sm text-gray-600 mt-1">{ticket.venue}</p>
                  <p className="text-xs text-gray-500 mt-1">
                    Section {ticket.section}, Row {ticket.row}, Seat {ticket.seat}
                  </p>
                </div>
                {/* Thumbnail */}
                <Image
                  src={ticket.image}
                  alt={ticket.event}
                  width={64}
                  height={64}
                  className="w-16 h-16 rounded-lg object-cover ml-3"
                />
                
              </div>
            </div>
          ))
        ) : (
          <div className="p-5 text-center text-gray-500">
            <p>
              {activeTab === "upcoming"
                ? "No upcoming tickets"
                : activeTab === "post"
                ? "No past tickets"
                : "No listings yet"}
            </p>
          </div>
        )}
      </main>
    </div>
  );
}
