import { Database, Plus } from 'lucide-react';

export default function Header() {
  return (
    <header className="flex items-center justify-between">
      <div className="flex items-center gap-3">
        <div className="p-2 rounded-xl bg-indigo-600 text-white"><Database size={20} /></div>
        <div>
          <h1 className="text-2xl font-semibold tracking-tight">Keyword Records</h1>
          <p className="text-sm text-neutral-500">Add entries with keywords, location and a list of values</p>
        </div>
      </div>
      <div className="hidden sm:flex items-center gap-2 text-neutral-500">
        <Plus size={18} />
        <span className="text-sm">Create, manage, and remove records</span>
      </div>
    </header>
  );
}
