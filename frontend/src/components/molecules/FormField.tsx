import Input from "../atoms/Input";

interface FormFieldProps {
  label: string;
  name: string;
  type?: string;
  error?: string;
  required?: boolean;
  placeholder?: string;
}

export default function FormField({
  label,
  name,
  type = "text",
  error,
  required = false,
  placeholder,
}: FormFieldProps) {
  return (
    <div className="mb-4">
      <Input
        label={label}
        name={name}
        type={type}
        error={error}
        required={required}
        placeholder={placeholder}
      />
    </div>
  );
}
