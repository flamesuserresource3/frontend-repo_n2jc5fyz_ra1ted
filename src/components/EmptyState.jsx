import { Inbox } from 'lucide-react';

export default function EmptyState() {
  return (
    <div className="h-full min-h-[300px] flex items-center justify-center">
      <div className="text-center">
        <div className="mx-auto mb-4 w-12 h-12 rounded-xl bg-neutral-100 flex items-center justify-center text-neutral-600">
          <Inbox size={22} />
        </div>
        <h3 className="text-base font-semibold">No records yet</h3>
        <p className="mt-1 text-sm text-neutral-600 max-w-sm">
          Use the form to add your first record with keywords, a location, and a list of values.
        </p>
      </div>
    </div>
  );
}
