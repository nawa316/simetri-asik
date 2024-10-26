export default function SectionHeader({ section }) {
  return (
    <div className="flex flex-row w-fit h-fit gap-[16px] justify-center items-center">
      <div className="w-[20px] h-[40px] bg-[#DB4444] rounded-[4px]" />
      <h1 className="text-[24px] font-bold">{section}</h1>
    </div>
  );
}
