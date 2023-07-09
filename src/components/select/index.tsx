interface ISelect {
  label: string;
  options: { label: string; value: string }[];
}

const Select: React.FC<ISelect> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-400 text-sm">{props.label}</label>
      <select className="h-10 border-solid bg-gray-50 rounded text-gray-500">
        {props.options.map((option, index) => (
          <option key={index} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default Select;
