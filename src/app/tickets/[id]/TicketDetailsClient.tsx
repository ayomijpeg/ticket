"use client";

import { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

interface Ticket {
  id: string;
  event: string;
  date: string;
  venue: string;
  section: string;
  row: string;
  seat: string;
  image: string;
}

export default function TicketDetailsClient({ ticket }: { ticket: Ticket }) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-gray-800 text-white flex flex-col items-center justify-center p-4">
      <main className="w-full max-w-md bg-white text-gray-900 rounded-2xl overflow-hidden shadow-2xl">
        {/* Header */}
        <div className="bg-blue-600 text-white p-5">
          <h1 className="text-2xl font-bold">{ticket.event}</h1>
          <p className="mt-1">
            {ticket.date} – {ticket.venue}
          </p>
        </div>

        {/* Ticket info */}
        <div className="p-5 border-b">
          <h2 className="text-lg font-semibold text-gray-700">Your Ticket</h2>
          <div className="mt-4 grid grid-cols-3 gap-2 text-center">
            <div>
              <div className="text-xs text-gray-500">SEC</div>
              <div className="font-bold">{ticket.section}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">ROW</div>
              <div className="font-bold">{ticket.row}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500">SEAT</div>
              <div className="font-bold">{ticket.seat}</div>
            </div>
          </div>
        </div>

        {/* QR Code */}
        <div className="p-5 flex flex-col items-center border-b">
          <QRCodeCanvas value={`ticket-${ticket.id}`} size={180} />
          <p className="mt-4 text-sm text-gray-500 text-center">
            Screenshots won’t get you in
          </p>
        </div>

        {/* Actions */}
        <div className="p-5 flex flex-col space-y-3">
          <button className="bg-black text-white py-3 px-4 rounded-lg flex items-center justify-center font-medium">
            Add to Apple Wallet
          </button>
          <button className="border border-gray-300 py-3 px-4 rounded-lg flex items-center justify-center font-medium">
            Mobile Ticket
          </button>
        </div>

        {/* Expandable info */}
        <div className="p-5 bg-gray-50">
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="w-full flex justify-between items-center text-gray-500"
          >
            <span>Additional ticket information</span>
            <svg
              className={`w-4 h-4 transform transition-transform ${
                isExpanded ? "rotate-180" : ""
              }`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
          </button>

          {isExpanded && (
            <div className="mt-3 text-sm text-gray-600">
              <p>• This ticket is non-transferable</p>
              <p>• Please have your ID ready</p>
              <p>• Gates open 2 hours before kickoff</p>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
