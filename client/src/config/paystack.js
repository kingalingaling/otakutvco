const PaystackConfig = (email, finalCost) => {
    const config = {
      reference: new Date().getTime().toString(),
      email: email,
      //Currency in kobo
      amount: finalCost*100,
      publicKey: import.meta.env.VITE_PAYSTACK_API,
    };
  
    return config;
  };
  
  export default PaystackConfig;