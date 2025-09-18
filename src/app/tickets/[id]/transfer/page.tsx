"use client";
import { tickets } from "../../../../data/tickets";
import React from "react";
import { notFound } from "next/navigation";
import { useState } from "react";

export default function TransferTicket({ params }: { params: Promise<{ id: string }> }) {
  const unwrappedParams = React.use(params); // unwrap the params
  const ticket = tickets.find((t) => t.id === unwrappedParams.id);
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });
  const [showModal, setShowModal] = useState(false);

  if (!ticket) return notFound();

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setShowModal(true);

    // Auto-close modal after 3 seconds
    setTimeout(() => setShowModal(false), 5000);
  }

  return (
    <div className="max-w-md mx-auto p-4 relative">
      <h1 className="text-xl font-bold mb-4">Transfer Ticket</h1>
      <p className="mb-2">
        Sec {ticket.section} • Row {ticket.row} • Seat {ticket.seat}
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="First Name"
          value={form.firstName}
          onChange={(e) => setForm({ ...form, firstName: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="text"
          placeholder="Last Name"
          value={form.lastName}
          onChange={(e) => setForm({ ...form, lastName: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
        />
        <input
          type="email"
          placeholder="Email or Mobile Number"
          value={form.email}
          onChange={(e) => setForm({ ...form, email: e.target.value })}
          className="w-full border rounded px-3 py-2"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
        >
          Transfer Ticket
        </button>
      </form>

      {/* ✅ Centered Modal */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50">
          <div className="bg-white rounded-2xl shadow-xl p-6 max-w-sm w-full text-center transform transition-all scale-100">
            <div className="flex flex-col items-center space-y-3">
              <div className="w-14 h-14 rounded-full bg-green-100 flex items-center justify-center">
                <span className="text-green-600 text-2xl">✔</span>
              </div>
              <h2 className="text-xl font-semibold text-gray-800">
                Ticket Transferred!
              </h2>
              <p className="text-gray-600">
                Successfully transferred to{" "}
                <strong>
                  {form.firstName} {form.lastName}
                </strong>{" "}
                ({form.email})
              </p>
              <button
                onClick={() => setShowModal(false)}
                className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
