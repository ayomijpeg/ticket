import Link from "next/link";

interface TicketActionsProps {
  ticketId: string;
}

export default function TicketActions({ ticketId }: TicketActionsProps) {
  return (
    <div className="flex flex-col divide-y divide-gray-200 border rounded-md shadow-sm bg-white">
      {/* Transfer */}
      <Link
        href={`/tickets/${ticketId}/transfer`}
        className="p-3 hover:bg-gray-50 hover:text-blue-600 transition text-left"
      >
        Transfer
      </Link>

      {/* Sell (placeholder) */}
      <button
        type="button"
        className="p-3 hover:bg-gray-50 hover:text-blue-600 transition text-left"
        disabled
      >
        Sell
      </button>

      {/* Order (placeholder) */}
      <button
        type="button"
        className="p-3 hover:bg-gray-50 hover:text-blue-600 transition text-left"
        disabled
      >
        Order
      </button>
    </div>
  );
}
