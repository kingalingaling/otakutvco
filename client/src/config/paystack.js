const PaystackConfig = (email, finalCost, reference) => {
    const config = {
      reference: reference,
      email: email,
      //Currency in kobo
      amount: finalCost*100,
      publicKey: import.meta.env.VITE_PAYSTACK_API,
    };
  
    return config;
  };
  
  export default PaystackConfig;