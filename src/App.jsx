import { useState } from 'react';
import Header from './components/Header';
import RecordForm from './components/RecordForm';
import RecordList from './components/RecordList';
import EmptyState from './components/EmptyState';

function App() {
  const [records, setRecords] = useState([]);

  const handleAddRecord = (record) => {
    setRecords((prev) => [
      { id: crypto.randomUUID(), ...record },
      ...prev,
    ]);
  };

  const handleDeleteRecord = (id) => {
    setRecords((prev) => prev.filter((r) => r.id !== id));
  };

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <Header />

        <div className="mt-6 grid grid-cols-1 lg:grid-cols-5 gap-6">
          <div className="lg:col-span-2">
            <RecordForm onAdd={handleAddRecord} />
          </div>

          <div className="lg:col-span-3">
            {records.length === 0 ? (
              <EmptyState />
            ) : (
              <RecordList records={records} onDelete={handleDeleteRecord} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
