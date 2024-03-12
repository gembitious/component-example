import { FC, useState } from 'react';

interface TextInputProps {
  value?: string; // 외부에서 상태 관리하는 value 사용 시 주입
  onChange?: (value: string) => void; // 외부 value 주입 시 사용할 onChange 함수
  maxLength?: number; // 최대 글자수
  disabled?: boolean;
  readOnly?: boolean;
  placeholder?: string;
}

const TextInput: FC<TextInputProps> = ({
  value,
  onChange,
  maxLength = 500,
  disabled,
  readOnly,
  placeholder = '내용을 입력해주세요.',
}) => {
  // 텍스트 변경 시 저장 버튼 상태 관리를 위한 state
  const [isChanged, setIsChanged] = useState(false);
  const [textLength, setTextLength] = useState(value?.length ?? 0);

  return (
    <div className="text-input-container">
      <div
        className={`text-input
      ${disabled ? ' disabled' : ''}${readOnly ? ' read-only' : ''}`}
      >
        <textarea
          value={value}
          onChange={(e) => {
            const newValue = e.target.value;
            setIsChanged(value !== newValue);
            setTextLength(newValue.length);
            if (onChange) {
              onChange(newValue);
            }
          }}
          placeholder={placeholder}
          maxLength={maxLength}
          disabled={disabled}
          readOnly={readOnly}
        />
        <span className="text-length">{maxLength - textLength}</span>
      </div>
      <button className="text-save-button" disabled={!isChanged}>
        Save
      </button>
    </div>
  );
};

export default TextInput;
