import { useController } from "react-hook-form";
import { MdErrorOutline } from "react-icons/md";
import { RiEyeCloseLine, RiEyeLine } from "react-icons/ri";

export const InputField = ({ label, name, type = "text", control, errorMsg, placeholder }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input {...field} id={name} type={type} autoComplete="off" placeholder={placeholder} className={`w-full px-3 py-2 border ${errorMsg ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`} />
      {errorMsg && <ErrorMsg message={errorMsg} />}
    </div>
  );
};

export const PasswordField = ({ label, name, control, errorMsg, showPassword, togglePasswordVisibility, placeholder }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div className="relative">
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        {...field}
        id={name}
        type={showPassword ? "text" : "password"}
        placeholder={placeholder}
        autoComplete="off"
        className={`w-full px-3 py-2 border 
        ${errorMsg ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`}
      />
      <button type="button" className="absolute inset-y-0 right-3 top-2/3 transform -translate-y-1/2 flex items-center" onClick={togglePasswordVisibility}>
        {showPassword ? <RiEyeLine className="text-xl" /> : <RiEyeCloseLine className="text-xl" />}
      </button>
      {errorMsg && <ErrorMsg message={errorMsg} />}
    </div>
  );
};

export const SelectField = ({ label, name, control, errorMsg, options }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select {...field} id={name} className={`w-full px-3 py-2 border ${errorMsg ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`}>
        {options.map((option) => (
          <option key={option.value} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {errorMsg && <ErrorMsg message={errorMsg} />}
    </div>
  );
};

export const RadioField = ({ label, name, control, errorMsg, options }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <span className="block text-sm font-medium text-gray-700 mb-1">{label}</span>
      <div className="flex items-center space-x-4">
        {options.map((option) => (
          <label key={option.value} className="flex items-center">
            <input
              {...field}
              type="radio"
              value={option.value}
              className={`radio radio-xs me-1 
            ${option.value === "male" ? "radio-primary" : option.value === "female" ? "radio-secondary" : "radio border border-black"}`}
            />
            {option.label}
          </label>
        ))}
      </div>
      {errorMsg && <ErrorMsg message={errorMsg} />}
    </div>
  );
};

export const TextAreaField = ({ label, name, control, errorMsg, placeholder }) => {
  const { field } = useController({
    control: control,
    name: name,
  });
  return (
    <div>
      <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <textarea {...field} id={name} autoComplete="off" placeholder={placeholder} className={`w-full px-3 py-2 border ${errorMsg ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`} rows="3" style={{ resize: "none" }}></textarea>
      {errorMsg && <ErrorMsg message={errorMsg} />}
    </div>
  );
};

// export const FileField = ({ label, name, control, errorMsg }) => {
//   const { field } = useController({
//     control: control,
//     name: name,
//   });
//   return (
//     <div>
//       <label htmlFor={name} className="block text-sm font-medium text-gray-700 mb-1">
//         {label}
//       </label>
//       <input {...field} id={name} type="file" className={`w-full px-3 py-2 border ${errorMsg ? "border-red-500" : "border-gray-300"} rounded-md focus:outline-none focus:border-blue-500`} />
//       {errorMsg && <ErrorMsg message={errorMsg} />}
//     </div>
//   );
// };

export const ErrorMsg = ({ message }) => (
  <span className="text-red-500 text-sm flex items-center mt-1">
    <MdErrorOutline className="mr-1" /> {message}
  </span>
);
