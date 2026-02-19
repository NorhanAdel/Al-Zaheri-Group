export function BranchSelector({ branches, onSelect, activeId }) {
  return (
    <div className="bg-gray-50 rounded-2xl p-6 space-y-4">
      <h3 className="text-xl font-bold mb-6 text-right">فروعنا</h3>

      {branches.map((branch) => (
        <div
          key={branch.id}
          onClick={() => onSelect(branch)}
          className={`flex items-center justify-between cursor-pointer
            px-5 py-4 rounded-xl transition
            ${
              activeId === branch.id
                ? "bg-blue-600 text-white"
                : "bg-white hover:bg-gray-100"
            }`}
        >
          {/* العنوان */}
          <span className="font-medium text-right">
            {branch.name}
          </span>

          {/* السهم */}
          <span
            className={`text-xl transition
              ${
                activeId === branch.id
                  ? "text-white"
                  : "text-blue-600"
              }`}
          >
            ←
          </span>
        </div>
      ))}
    </div>
  );
}
