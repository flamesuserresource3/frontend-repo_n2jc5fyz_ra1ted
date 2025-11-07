import { Trash2, MapPin, Tag, List } from 'lucide-react';

function Badge({ children }) {
  return (
    <span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 px-2 py-0.5 text-xs font-medium">
      {children}
    </span>
  );
}

export default function RecordList({ records, onDelete }) {
  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-neutral-200">
      <div className="px-5 py-3 border-b border-neutral-200 flex items-center justify-between">
        <h3 className="text-sm font-semibold">Records ({records.length})</h3>
      </div>
      <ul className="divide-y divide-neutral-200">
        {records.map((rec) => (
          <li key={rec.id} className="p-5">
            <div className="flex items-start justify-between gap-4">
              <div className="space-y-3 w-full">
                <div className="flex flex-wrap items-center gap-2">
                  <Tag size={16} className="text-neutral-500" />
                  {rec.keywords.map((k, i) => (
                    <Badge key={i}>{k}</Badge>
                  ))}
                </div>
                <div className="flex items-center gap-2 text-sm text-neutral-600">
                  <MapPin size={16} className="text-neutral-500" />
                  <span>{rec.location}</span>
                </div>
                {rec.values && rec.values.length > 0 && (
                  <div className="flex items-start gap-2 text-sm text-neutral-700">
                    <List size={16} className="mt-0.5 text-neutral-500" />
                    <ul className="list-disc ml-4 space-y-1">
                      {rec.values.map((v, idx) => (
                        <li key={idx}>{v}</li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              <div>
                <button
                  onClick={() => onDelete(rec.id)}
                  className="inline-flex items-center gap-2 rounded-lg border border-neutral-300 px-3 py-1.5 text-sm text-neutral-700 hover:bg-neutral-50"
                >
                  <Trash2 size={16} /> Delete
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
