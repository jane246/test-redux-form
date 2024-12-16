import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/store';
interface FormProps {
    name: string;
    type: string;
    placeholder: string;
    empty: string;
  }
const Form: React.FC<FormProps> = ({name,type,placeholder,empty}) => {
  const status = useSelector((state: RootState) => state.form.status);
    return (
        <div>
            <div className="relative">
                <input
                    className={`rounded-lg w-full p-3 ${status[name] === 0 ? 'text-red border-2 border-red focus:outline-red' : 'text-dark border border-grayish focus:outline-grayish'} pr-10`}
                    name={name}
                    type={type}
                    placeholder={placeholder}
                />
                {status[name]===0 && (
                  <span className="absolute right-2 top-1/2 transform -translate-y-1/2">
                    <img src="/images/icon-error.svg" alt="error icon" className="w-6 h-6" />
                  </span>
                )}
            </div>
            {status[name]===0 && (
              <p className="text-red italic text-right text-xs py-2">{empty}</p>
            )}
        </div>
    )
};
export default Form