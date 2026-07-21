function SignCard({ letter, image, status, color, onClick }) {
  return (
    <button
      onClick={onClick}
      className={`group relative ${color} border border-outline/20 p-5 rounded-3xl shadow-sm hover:shadow-xl transition-all hover:-translate-y-2 text-left flex flex-col`}
    >
      <div className="absolute top-3 right-3 text-on-surface-variant/20 group-hover:text-primary transition-colors">
        <span className="material-symbols-outlined text-lg">
          push_pin
        </span>
      </div>

      <img
        alt={`ASL ${letter}`}
        className="w-full aspect-square object-contain mb-4"
        src={image}
      />

      <div className="mt-auto">
        <span className="font-display-lg text-4xl leading-none">
          {letter}
        </span>

        <p className="text-[10px] uppercase font-bold mt-1">
          {status}
        </p>
      </div>
    </button>
  );
}

export default SignCard;