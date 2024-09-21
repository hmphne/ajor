const Textarea = ({ label, value, error, ...props }) => {
  return (
    <div className="flex flex-col gap-1">
      <label htmlFor="textarea" className="text-xs text-gray pr-4">
        {label}
      </label>
      <textarea id="textarea" {...props}>
        {value}
      </textarea>
      {error && <p className="text-red pr-4 text-xs">{error}</p>}
    </div>
  );
};

export default Textarea;
