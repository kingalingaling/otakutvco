const PaystackConfig = (email, cost) => {
    const config = {
      reference: new Date().getTime().toString(),
      email: email,
      //Currency in kobo
      amount: (cost* 100) + 10000 +(0.015*cost*100),
      publicKey: import.meta.env.VITE_PAYSTACK_API,
    };
  
    return config;
  };
  
  export default PaystackConfig;