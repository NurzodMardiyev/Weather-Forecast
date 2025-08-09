import { Form } from "antd";
export default function SearchForm() {
  const handleTakeCity = (value: object) => {
    console.log(value);
  };
  return (
    <div>
      <Form onFinish={handleTakeCity}>
        <Form.Item name="city">
          <input
            className="w-full px-6 py-2 rounded-md text-white bg-[#202B3B] focus-within:border-none focus:border-none focus:outline-0 placeholder:text-[#7d7d7d]"
            placeholder="Search for sity"
          />
        </Form.Item>
      </Form>
    </div>
  );
}
