import Image from "next/image";

export const Profile = () => {
  return (
    <div className="py-32 px-4 text-stone-600 bg-stone-50">
      <h1 className="mb-20 text-2xl tracking-wider text-center">PROFILE</h1>
      <div className="md:flex md:px-32">
        <div className="mb-3 md:pr-4 md:w-1/2 md:text-right flex justify-end">
          <Image
            src="/profileIcon.jpg"
            width={240}
            height={240}
            alt="profileImage"
            style={{ height: "240px", objectFit: "contain" }}
          />
        </div>

        <div className="flex flex-col justify-center md:w-1/2">
          <h2 className="mb-3 text-2xl tracking-wide">Hironori Tanimoto</h2>
          <p className="font-mono tracking-wider leading-6">
            島根県在住。
            <br />
            フルリモートでフルスタックエンジニアとして働いています。
            <br />
            趣味は音楽活動。
          </p>
        </div>
      </div>
    </div>
  );
};
