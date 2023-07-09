interface IInput {
  label: string;
}

const Input: React.FC<IInput> = (props) => {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-gray-400 text-sm">{props.label}</label>
      <input className="h-10 border-solid bg-gray-50 rounded text-gray-500"></input>
    </div>
  );
};

export default Input;
