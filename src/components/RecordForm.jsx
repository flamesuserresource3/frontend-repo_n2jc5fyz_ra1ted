import { useState } from 'react';
import { PlusCircle } from 'lucide-react';

export default function RecordForm({ onAdd }) {
  const [keywords, setKeywords] = useState('');
  const [location, setLocation] = useState('');
  const [listValues, setListValues] = useState(['']);

  const addListField = () => setListValues((prev) => [...prev, '']);

  const updateListValue = (index, value) => {
    setListValues((prev) => prev.map((v, i) => (i === index ? value : v)));
  };

  const removeListValue = (index) => {
    setListValues((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanList = listValues.map((v) => v.trim()).filter(Boolean);
    const cleanKeywords = keywords
      .split(',')
      .map((k) => k.trim())
      .filter(Boolean);

    if (cleanKeywords.length === 0 || !location.trim()) return;

    onAdd({ keywords: cleanKeywords, location: location.trim(), values: cleanList });

    setKeywords('');
    setLocation('');
    setListValues(['']);
  };

  return (
    <div className="bg-white rounded-2xl shadow-sm ring-1 ring-neutral-200 p-5">
      <h2 className="text-lg font-medium mb-4">Add a new record</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium mb-1">Keywords</label>
          <input
            value={keywords}
            onChange={(e) => setKeywords(e.target.value)}
            placeholder="e.g. marketing, analytics, growth"
            className="w-full rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
          <p className="text-xs text-neutral-500 mt-1">Separate multiple keywords with commas</p>
        </div>

        <div>
          <label className="block text-sm font-medium mb-1">Location</label>
          <input
            value={location}
            onChange={(e) => setLocation(e.target.value)}
            placeholder="City, Country"
            className="w-full rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
          />
        </div>

        <div>
          <div className="flex items-center justify-between mb-2">
            <label className="block text-sm font-medium">List Values</label>
            <button
              type="button"
              onClick={addListField}
              className="inline-flex items-center gap-2 text-indigo-600 text-sm hover:text-indigo-700"
            >
              <PlusCircle size={16} /> Add value
            </button>
          </div>
          <div className="space-y-2">
            {listValues.map((val, idx) => (
              <div key={idx} className="flex items-center gap-2">
                <input
                  value={val}
                  onChange={(e) => updateListValue(idx, e.target.value)}
                  placeholder={`Value ${idx + 1}`}
                  className="w-full rounded-lg border-neutral-300 focus:border-indigo-500 focus:ring-indigo-500 text-sm"
                />
                {listValues.length > 1 && (
                  <button
                    type="button"
                    onClick={() => removeListValue(idx)}
                    className="px-2 py-1 text-xs rounded-md border border-neutral-300 text-neutral-600 hover:bg-neutral-50"
                  >
                    Remove
                  </button>
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="pt-2">
          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 w-full sm:w-auto rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
          >
            <PlusCircle size={18} /> Add Record
          </button>
        </div>
      </form>
    </div>
  );
}
