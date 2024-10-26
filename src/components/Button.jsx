export default function Button({ title }) {
  return (
    <button className="flex bg-[#DB4444] w-[159px] h-[56px] px-[48px] py-[16px] rounded-[4px] justify-center items-center">
      <h1 className="text-[16px] text-white">{title}</h1>
    </button>
  );
}
