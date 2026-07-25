const FeaturedToggle = ({ value = false, onChange }) => {
  return (
    <div className="flex items-center justify-between rounded-lg border p-4">
      <div>
        <h3 className="font-semibold">Featured Room</h3>
        <p className="text-sm text-gray-500">
          Show this room on homepage.
        </p>
      </div>

      <input
        type="checkbox"
        checked={value}
        onChange={(e) => onChange(e.target.checked)}
        className="h-5 w-5"
      />
    </div>
  );
};

export default FeaturedToggle;