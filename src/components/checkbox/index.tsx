import { useState } from "react";
import { CheckBox as CheckBoxRNW } from "react-native-web";

interface ICheckBox {
  value?: boolean;
  label: string;
}

const CheckBox: React.FC<ICheckBox> = (props, ...rest) => {
  const [checked, setChecked] = useState(props.value);

  const onChange = () => {
    setChecked(!checked);
  };

  return (
    <div className="flex flex-row gap-2">
      <CheckBoxRNW value={checked} onChange={onChange} color="#3F83F8" />
      <p className="text-gray-500 text-xs">{props.label}</p>
    </div>
  );
};

export default CheckBox;
