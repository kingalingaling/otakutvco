// export const sendEmail = async(email, template, fname, order, address, cost, time) =>{
//     // e.preventDefault
//     const emailTemplate = template
//     const response = await fetch('/send-email', {
//         method: 'GET',
//         headers: {
//             'Content-Type': 'application/json',
//         },
//         body: JSON.stringify ({ email, emailTemplate, fname, order, address, cost, time})
//     })

//     const data = await response.json();
//     if (data.success) {
//       alert('Email sent successfully!');
//     } else {
//       alert('Error sending email. Please try again.');
//     }
// }

const sendEmail = async (e) => {
  e.preventDefault();

  const html = <EmailTemplate name="John" />; // Use the EmailTemplate component

  try {
    const response = await axios.post('http://localhost:3001/send-email', {
      to,
      subject,
      html: html.props.children // Extract the HTML from the component
    });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
};