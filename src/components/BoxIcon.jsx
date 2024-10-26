export default function BoxIcon({ icon, title }) {
  return (
    <div className="flex flex-col w-[170px] h-[145px] p-[24px] border rounded justify-center items-center">
      <img src={icon} alt={title} className="w-[56px] h-[56px]" />
      <h1 className="text-[16px]">{title}</h1>
    </div>
  );
}
