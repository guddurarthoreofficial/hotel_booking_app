const FeaturedToggle = ({ checked, onChange }) => {
  return (
    <div className="flex items-center justify-between rounded-xl border p-4">
      <ImageUploader
        images={images}
        setImages={setImages}
        existingImages={existingImages}
        onDeleteExistingImage={onDeleteExistingImage}
      />
      <div>
        <h3 className="font-semibold text-slate-800">
          Featured Room
        </h3>

        <p className="text-sm text-slate-500">
          Show this room as featured.
        </p>
      </div>

      <label className="relative inline-flex cursor-pointer items-center">
        <input
          type="checkbox"
          checked={checked}
          onChange={(e) => onChange(e.target.checked)}
          className="peer sr-only"
        />

        <div className="peer h-6 w-11 rounded-full bg-slate-300 after:absolute after:left-[2px] after:top-[2px] after:h-5 after:w-5 after:rounded-full after:bg-white after:transition-all peer-checked:bg-blue-600 peer-checked:after:translate-x-5"></div>
      </label>
    </div>
  );
};

export default FeaturedToggle;