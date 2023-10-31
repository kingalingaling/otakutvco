import data from '../../data.json'

const Partners = () => {
    const partners = data.partners
  return (
    <div className="w-full bg-black/30 p-6">
      <div className="mx-auto max-w-[90%] flex flex-col justify-center text-white">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold">Otaku Connect 2023 Partners</h2>
        <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div className="w-full" key={partner.id}>
              <img
                className="w-[full] mx-auto my-auto h-auto object-cover"
                src={partner.logo}
                alt=""
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
