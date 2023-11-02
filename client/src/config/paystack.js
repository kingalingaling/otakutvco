const PaystackConfig = (email, cost) => {
    const config = {
      reference: new Date().getTime().toString(),
      email: email,
      //Currency in kobo
      amount: ((cost* 100) + 100 +(0.015*cost)),
      publicKey: import.meta.env.VITE_PAYSTACK_API,
    };
  
    return config;
  };
  
  export default PaystackConfig;