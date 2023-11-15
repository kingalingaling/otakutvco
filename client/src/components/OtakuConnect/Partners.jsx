import data from '../../data.json'

const Partners = () => {
    const partners = data.partners
  return (
    <div className="w-full text-black p-6">
      <div className="mx-auto max-w-[90%] flex flex-col justify-center">
        <h2 className="text-center text-xl md:text-2xl lg:text-3xl font-bold mb-8">Otaku Connect 2023 Partners</h2>
        <div className="w-full grid grid-cols-3 md:grid-cols-5 gap-4">
          {partners.map((partner) => (
            <div className="w-full" key={partner.id}>
              <img
                className="w-[full] mx-auto my-auto max-h-[150px] object-cover rounded-xl"
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
