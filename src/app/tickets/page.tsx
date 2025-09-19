"use client";
import { useState, useRef } from "react";
import { tickets } from "../../data/tickets";
import Link from "next/link";
import Image from "next/image";
import { QrCodeIcon } from "@heroicons/react/24/outline";

export default function TicketsPage() {
  const [activeTab, setActiveTab] = useState("my-tickets");
  const carouselRef = useRef<HTMLDivElement>(null);

  const baseClass =
    "px-4 py-2 bg-blue-600 text-white rounded-full font-medium shadow hover:bg-blue-500 transition";

  const scrollByTicket = (direction: "next" | "prev") => {
    if (!carouselRef.current) return;
    const ticket = carouselRef.current.querySelector<HTMLDivElement>(".ticket");
    if (!ticket) return;

    const scrollAmount = ticket.offsetWidth + 16; // 16 = gap
    carouselRef.current.scrollBy({
      left: direction === "next" ? scrollAmount : -scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="max-w-5xl mx-auto p-4">
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
        <div className="mt-4 relative">
          {/* Carousel Buttons */}
          <button
            onClick={() => scrollByTicket("prev")}
            className="absolute left-0 top-3/4 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
          >
            ‹
          </button>
          <button
            onClick={() => scrollByTicket("next")}
            className="absolute right-0 top-3/4 -translate-y-1/2 z-10 bg-gray-200 p-2 rounded-full shadow hover:bg-gray-300"
          >
            ›
          </button>

          {/* Tickets Carousel */}
          <div
            ref={carouselRef}
            className="flex overflow-x-auto scroll-smooth snap-x snap-mandatory gap-4 px-2 sm:px-4 lg:px-[7.5vw]"
          >
            {tickets.map((ticket) => (
              <div
                key={ticket.id}
                className="ticket flex-shrink-0 w-[85vw] sm:w-64 md:w-80 lg:w-[40vw] rounded-lg shadow-md border overflow-hidden snap-center"
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
                    <span className="font-semibold">Sec {ticket.section}</span> • Row {ticket.row} • Seat {ticket.seat}
                  </p>

                  <div className="flex flex-col items-center gap-4 mt-4">
                    <button className="w-40 h-12 bg-gray-200 text-black rounded-[8px] font-medium shadow hover:bg-gray-300 transition">
                      Mobile Ticket
                    </button>

                    <Link
                      href={`/tickets/${ticket.id}/transfer`}
                      className="w-40 h-12 flex items-center justify-center gap-2 bg-blue-600 text-white rounded-[8px] font-medium shadow hover:bg-blue-500 transition"
                    >
                      <QrCodeIcon className="w-5 h-5 text-white" />
                      View Ticket
                    </Link>

                    <button className="w-40 h-12 bg-gray-200 text-black rounded-[8px] font-medium shadow hover:bg-gray-300 transition">
                      Ticket Details
                    </button>
                  </div>

                  <hr className="border-t border-gray-300 my-4" />

                  <div className="mt-4 flex justify-between items-center gap-2">
                    <Link href={`/tickets/${ticket.id}/transfer`} className={`${baseClass} flex-1`}>
                      Transfer
                    </Link>
                    <button
                      type="button"
                      className="flex-1 px-6 py-3 bg-gray-200 text-gray-800 rounded-full font-medium shadow hover:bg-gray-300 transition"
                    >
                      Sell
                    </button>
                    <button type="button" className={`${baseClass} flex-1`}>
                      Order
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
